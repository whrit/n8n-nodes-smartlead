/* eslint-disable @n8n/community-nodes/no-restricted-imports */
import { describe, expect, it, vi } from 'vitest';
import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

vi.mock(
	'n8n-workflow',
	async () => {
		const actual = await vi.importActual<typeof import('n8n-workflow')>('n8n-workflow');
		return {
			...actual,
			NodeConnectionType: actual.NodeConnectionType ?? { Main: 'main' },
		};
	},
	{ inline: true },
);

import { Smartlead } from '../nodes/Smartlead/Smartlead.node';

const nodeDescription = new Smartlead().description;

const findProperty = (name: string, resource?: string) =>
	nodeDescription.properties.find((property) => {
		if (property.name !== name) return false;
		if (!resource) return true;
		const resourceFilter = property.displayOptions?.show?.resource;
		return Array.isArray(resourceFilter) && resourceFilter.includes(resource);
	});

const getOperationOption = (resource: string, value: string): INodePropertyOptions | undefined => {
	const operationProperty = findProperty('operation', resource) as INodeProperties | undefined;
	return operationProperty?.options?.find((option) => option.value === value);
};

describe('Smartlead node definition', () => {
	it('uses the Smartlead v1 REST base URL with query auth per docs', () => {
		expect(nodeDescription.requestDefaults?.baseURL).toBe('https://server.smartlead.ai/api/v1');
		expect(nodeDescription.requestDefaults?.qs?.api_key).toBe('={{$credentials.apiKey}}');
	});

	it('registers the Smartlead credential for every request', () => {
		expect(nodeDescription.credentials?.map((cred) => cred.name)).toContain('smartleadApi');
	});

it('exposes Smartlead resources for the declarative node', () => {
	const resourceProperty = findProperty('resource');
	expect(resourceProperty?.options?.map((option) => option.value)).toEqual(
		expect.arrayContaining(['lead', 'inbox', 'webhook', 'campaign', 'analytics']),
	);
});

	it('maps the Lead resource operations documented in the tracker', () => {
		const leadOperations = findProperty('operation', 'lead');
		expect(leadOperations?.options?.map((option) => option.value)).toEqual(
			expect.arrayContaining(['listCampaignLeads', 'addCampaignLeads', 'getLeadByEmail']),
		);
	});

	it('maps the Inbox operation for lead message history', () => {
		const inboxOperations = findProperty('operation', 'inbox');
		expect(inboxOperations?.options?.map((option) => option.value)).toContain('leadMessageHistory');
	});

	it('maps the Webhook CRUD operations for campaign webhooks', () => {
		const webhookOperations = findProperty('operation', 'webhook');
		expect(webhookOperations?.options?.map((option) => option.value)).toEqual(
			expect.arrayContaining(['listWebhooks', 'upsertWebhook', 'deleteWebhook']),
		);
	});

	it('builds the documented campaign lead endpoints', () => {
		const listOp = getOperationOption('lead', 'listCampaignLeads');
		expect(listOp?.routing?.request?.method).toBe('GET');
		expect(listOp?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/leads',
		);

		const addOp = getOperationOption('lead', 'addCampaignLeads');
		expect(addOp?.routing?.request?.method).toBe('POST');
		expect(addOp?.routing?.request?.url).toBe('=/campaigns/{{$parameter["campaignId"]}}/leads');

		const byEmailOp = getOperationOption('lead', 'getLeadByEmail');
		expect(byEmailOp?.routing?.request?.method).toBe('GET');
		expect(byEmailOp?.routing?.request?.url).toBe('/leads');
	});

	it('builds the documented inbox and webhook endpoints', () => {
		const historyOp = getOperationOption('inbox', 'leadMessageHistory');
		expect(historyOp?.routing?.request?.method).toBe('GET');
		expect(historyOp?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/leads/{{$parameter["leadId"]}}/messages',
		);

		const listWebhooks = getOperationOption('webhook', 'listWebhooks');
		expect(listWebhooks?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/webhooks',
		);

		const upsertWebhook = getOperationOption('webhook', 'upsertWebhook');
		expect(upsertWebhook?.routing?.request?.method).toBe('POST');
		expect(upsertWebhook?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/webhooks',
		);

		const deleteWebhook = getOperationOption('webhook', 'deleteWebhook');
		expect(deleteWebhook?.routing?.request?.method).toBe('DELETE');
		expect(deleteWebhook?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/webhooks/{{$parameter["webhookId"]}}',
		);
	});

	it('maps the Campaign resource operations documented in the tracker', () => {
		const campaignOperations = findProperty('operation', 'campaign');
		expect(campaignOperations?.options?.map((option) => option.value)).toEqual(
			expect.arrayContaining([
				'createCampaign',
				'updateCampaign',
				'deleteCampaign',
				'getCampaign',
				'listCampaigns',
				'listCampaignSequences',
				'getCampaignSequenceAnalytics',
				'getCampaignStatistics',
				'getCampaignTopLevelAnalytics',
			]),
		);
	});

	it('builds the documented campaign management and sequence endpoints', () => {
		const createOp = getOperationOption('campaign', 'createCampaign');
		expect(createOp?.routing?.request?.method).toBe('POST');
		expect(createOp?.routing?.request?.url).toBe('/campaigns');

		const updateOp = getOperationOption('campaign', 'updateCampaign');
		expect(updateOp?.routing?.request?.method).toBe('PUT');
		expect(updateOp?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}',
		);

		const deleteOp = getOperationOption('campaign', 'deleteCampaign');
		expect(deleteOp?.routing?.request?.method).toBe('DELETE');
		expect(deleteOp?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}',
		);

		const getOp = getOperationOption('campaign', 'getCampaign');
		expect(getOp?.routing?.request?.method).toBe('GET');
		expect(getOp?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}',
		);

		const listSequences = getOperationOption('campaign', 'listCampaignSequences');
		expect(listSequences?.routing?.request?.method).toBe('GET');
		expect(listSequences?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/sequences',
		);

		const sequenceAnalytics = getOperationOption(
			'campaign',
			'getCampaignSequenceAnalytics',
		);
		expect(sequenceAnalytics?.routing?.request?.method).toBe('GET');
		expect(sequenceAnalytics?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/sequences/analytics',
		);
		const listOp = getOperationOption('campaign', 'listCampaigns');
		expect(listOp?.routing?.request?.method).toBe('GET');
		expect(listOp?.routing?.request?.url).toBe('/campaigns');

		const statsOp = getOperationOption('campaign', 'getCampaignStatistics');
		expect(statsOp?.routing?.request?.method).toBe('GET');
		expect(statsOp?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/statistics',
		);

		const topLevelOp = getOperationOption(
			'campaign',
			'getCampaignTopLevelAnalytics',
		);
		expect(topLevelOp?.routing?.request?.method).toBe('GET');
		expect(topLevelOp?.routing?.request?.url).toBe(
			'=/campaigns/{{$parameter["campaignId"]}}/analytics',
		);
	});

	it('exposes analytics operations for clients, leads, mailboxes, providers, geo, and overall reporting', () => {
		const analyticsOperations = findProperty('operation', 'analytics');
		expect(analyticsOperations?.options?.map((option) => option.value)).toEqual(
			expect.arrayContaining([
				'campaignOverallStats',
				'campaignResponseStats',
				'campaignStatusStats',
				'clientOverallStats',
				'leadOverallStats',
				'mailboxOverallStats',
				'providerPerformance',
				'geoReport',
				'dayWiseOverallStats',
				'dayWiseOverallStatsBySentTime',
				'overallStats',
			]),
		);
	});

	it('builds analytics endpoints for cross-resource reporting', () => {
		const clientStats = getOperationOption('analytics', 'clientOverallStats');
		expect(clientStats?.routing?.request?.url).toBe(
			'/analytics/clients/overall-stats',
		);

		const leadStats = getOperationOption('analytics', 'leadOverallStats');
		expect(leadStats?.routing?.request?.url).toBe('/analytics/leads/overall-stats');

		const mailboxStats = getOperationOption('analytics', 'mailboxOverallStats');
		expect(mailboxStats?.routing?.request?.url).toBe(
			'/analytics/mailboxes/overall-stats',
		);

		const providerStats = getOperationOption('analytics', 'providerPerformance');
		expect(providerStats?.routing?.request?.url).toBe(
			'/analytics/providers/performance',
		);

		const geoReport = getOperationOption('analytics', 'geoReport');
		expect(geoReport?.routing?.request?.url).toBe('/analytics/geo/report');

		const dayWise = getOperationOption('analytics', 'dayWiseOverallStats');
		expect(dayWise?.routing?.request?.url).toBe(
			'/analytics/day-wise/overall-stats',
		);

		const dayWiseSent = getOperationOption(
			'analytics',
			'dayWiseOverallStatsBySentTime',
		);
		expect(dayWiseSent?.routing?.request?.url).toBe(
			'/analytics/day-wise/overall-stats-by-sent-time',
		);

		const overall = getOperationOption('analytics', 'overallStats');
		expect(overall?.routing?.request?.url).toBe('/analytics/overall-stats');
	});
});
