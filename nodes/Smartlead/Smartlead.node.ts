import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { leadDescription } from './resources/lead';
import { inboxDescription } from './resources/inbox';
import { webhookDescription } from './resources/webhook';
import { campaignDescription } from './resources/campaign';
import { analyticsDescription } from './resources/analytics';

export class Smartlead implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Smartlead',
		name: 'smartlead',
		icon: { light: 'file:../../icons/smartlead.svg', dark: 'file:../../icons/smartlead.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Smartlead API',
		defaults: {
			name: 'Smartlead',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'smartleadApi', required: true }],
		requestDefaults: {
			baseURL: 'https://server.smartlead.ai/api/v1',
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Lead',
						value: 'lead',
					},
					{
						name: 'Inbox',
						value: 'inbox',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
					{
						name: 'Campaign',
						value: 'campaign',
					},
					{
						name: 'Analytics',
						value: 'analytics',
					},
				],
				default: 'lead',
			},
			...leadDescription,
			...inboxDescription,
			...webhookDescription,
			...campaignDescription,
			...analyticsDescription,
		],
	};
}
