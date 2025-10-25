/* eslint-disable @n8n/community-nodes/no-restricted-imports */
import { describe, expect, it } from 'vitest';
import { prepareLeadBatch } from '../nodes/Smartlead/utils/leadBatch';
import {
	buildSmartleadExecutionPayloads,
	filterWebhookEvents,
	resolveLeadEmail,
	verifySecretMatch,
} from '../nodes/SmartleadTrigger/utils';

describe('prepareLeadBatch (Smartlead bulk leads)', () => {
	it('normalizes lead payloads and trims values per Smartlead API expectations', () => {
		const payload = prepareLeadBatch([
			{
				email: '  [email protected] ',
				firstName: 'Ada',
				lastName: 'Lovelace',
				company: 'Analytical Engines',
				customFields: { tier: 'Pro' },
			},
			{
				email: '[email protected]',
			},
		]);

		expect(payload).toEqual([
			{
				email: '[email protected]',
				first_name: 'Ada',
				last_name: 'Lovelace',
				company: 'Analytical Engines',
				custom_fields: { tier: 'Pro' },
			},
			{
				email: '[email protected]',
			},
		]);
	});

	it('enforces the Smartlead 350 lead batch cap from the API reference', () => {
		const leads = Array.from({ length: 351 }, (_, index) => ({
			email: `user${index}@example.com`,
		}));
		expect(() => prepareLeadBatch(leads as never)).toThrow(/350/i);
	});

	it('requires an email address for every lead', () => {
		expect(() => prepareLeadBatch([{ firstName: 'Nameless' }] as never)).toThrow(/email/i);
	});
});

describe('Smartlead webhook helpers', () => {
	it('prefers leadCorrespondence.replyReceivedFrom per Smartlead webhook docs', () => {
		const payload = {
			event_type: 'EMAIL_REPLY',
			leadCorrespondence: {
				replyReceivedFrom: '[email protected]',
			},
			targetLeadEmail: '[email protected]',
			sl_lead_email: '[email protected]',
		};

		expect(resolveLeadEmail(payload)).toBe('[email protected]');
	});

	it('falls back to targetLeadEmail then sl_lead_email when correspondence is missing', () => {
		expect(
			resolveLeadEmail({
				event_type: 'EMAIL_OPEN',
				targetLeadEmail: '[email protected]',
			}),
		).toBe('[email protected]');

		expect(
			resolveLeadEmail({
				event_type: 'EMAIL_OPEN',
				sl_lead_email: '[email protected]',
			}),
		).toBe('[email protected]');
	});

	it('filters webhook events by event_type selection', () => {
		const items = [
			{ event_type: 'EMAIL_OPEN' },
			{ event_type: 'EMAIL_REPLY' },
			{ event_type: 'LEAD_UNSUBSCRIBED' },
		];
		expect(filterWebhookEvents(items as never, ['EMAIL_REPLY', 'LEAD_UNSUBSCRIBED'])).toEqual([
			{ event_type: 'EMAIL_REPLY' },
			{ event_type: 'LEAD_UNSUBSCRIBED' },
		]);
	});

	it('compares optional webhook secrets (secret_key) safely', () => {
		const payload = { secret_key: 'abc123' };
		expect(verifySecretMatch(payload as never, undefined)).toBe(true);
		expect(verifySecretMatch(payload as never, 'abc123')).toBe(true);
		expect(verifySecretMatch(payload as never, 'nope')).toBe(false);
	});

	it('builds execution payloads that respect both event filters and shared secret', () => {
		const samplePayloads = [
			{ event_type: 'EMAIL_REPLY', secret_key: 'open-sesame', sl_lead_email: '[email protected]' },
			{ event_type: 'EMAIL_OPEN', secret_key: 'open-sesame', targetLeadEmail: '[email protected]' },
			{ event_type: 'EMAIL_REPLY', secret_key: 'bad', sl_lead_email: '[email protected]' },
		];

		const items = buildSmartleadExecutionPayloads(
			samplePayloads as never,
			['EMAIL_REPLY'],
			'open-sesame',
		);

		expect(items).toHaveLength(1);
		expect(items[0].resolvedLeadEmail).toBe('[email protected]');
	});
});
