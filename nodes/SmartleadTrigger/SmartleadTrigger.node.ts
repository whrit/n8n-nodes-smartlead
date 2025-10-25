import {
	NodeConnectionType,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
	type IWebhookFunctions,
	type IWebhookResponseData,
} from 'n8n-workflow';
import {
	buildSmartleadExecutionPayloads,
	type SmartleadExecutionPayload,
	type SmartleadWebhookPayload,
} from './utils';

const smartleadWebhookEvents = [
	{ name: 'Email Reply', value: 'EMAIL_REPLY' },
	{ name: 'Email Open', value: 'EMAIL_OPEN' },
	{ name: 'Email Link Click', value: 'EMAIL_LINK_CLICK' },
	{ name: 'Lead Unsubscribed', value: 'LEAD_UNSUBSCRIBED' },
	{ name: 'Lead Category Updated', value: 'LEAD_CATEGORY_UPDATED' },
];

export class SmartleadTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Smartlead Trigger',
		name: 'smartleadTrigger',
		icon: { light: 'file:smartlead.svg', dark: 'file:smartlead.dark.svg' },
		group: ['trigger'],
		version: 1,
		description: 'Receive Smartlead webhook events (replies, opens, unsubscribes, and more)',
		defaults: {
			name: 'Smartlead Trigger',
		},
		usableAsTool: false,
		inputs: [],
		outputs: [NodeConnectionType.Main],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'smartlead',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				default: ['EMAIL_REPLY'],
				options: smartleadWebhookEvents,
				description: 'Smartlead event types to emit downstream',
			},
			{
				displayName: 'Expected Secret',
				name: 'secret',
				type: 'string',
				default: '',
				typeOptions: {
					password: true,
				},
				description:
					'Optional secret to verify against Smartlead’s <code>secret_key</code> payload field',
			},
			{
				displayName: 'Response Message',
				name: 'responseMessage',
				type: 'string',
				default: 'received',
				description: 'Plain-text acknowledgement returned to Smartlead',
			},
		],
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const body = req.body as SmartleadWebhookPayload | SmartleadWebhookPayload[];
		const allowedEvents = (this.getNodeParameter('events', 0) as string[]) ?? [];
		const expectedSecret = (this.getNodeParameter('secret', 0) as string | undefined) || undefined;

		const payloads = Array.isArray(body) ? body : [body];
		const filtered: SmartleadExecutionPayload[] = buildSmartleadExecutionPayloads(
			payloads,
			allowedEvents,
			expectedSecret,
		);

		const items: INodeExecutionData[] = filtered.map((payload) => ({
			json: {
				...payload,
			},
		}));

		const workflowData = items.length ? [items] : [];

		return {
			webhookResponse: this.getNodeParameter('responseMessage', 0) as string,
			workflowData,
		};
	}
}
