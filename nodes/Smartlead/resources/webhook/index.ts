import type { INodeProperties } from 'n8n-workflow';

const forWebhook = {
	resource: ['webhook'],
};

const forWebhookUpsert = {
	...forWebhook,
	operation: ['upsertWebhook'],
};

const forWebhookDelete = {
	...forWebhook,
	operation: ['deleteWebhook'],
};

const webhookEventOptions = [
	{ name: 'Email Reply', value: 'EMAIL_REPLY' },
	{ name: 'Email Open', value: 'EMAIL_OPEN' },
	{ name: 'Email Link Click', value: 'EMAIL_LINK_CLICK' },
	{ name: 'Email Sent', value: 'EMAIL_SENT' },
	{ name: 'Lead Unsubscribed', value: 'LEAD_UNSUBSCRIBED' },
	{ name: 'Lead Category Updated', value: 'LEAD_CATEGORY_UPDATED' },
];

export const webhookDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: forWebhook,
		},
		options: [
			{
				name: 'List by Campaign',
				value: 'listWebhooks',
				description: 'Fetch existing Smartlead webhooks for a campaign',
				action: 'List campaign webhooks',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}/webhooks',
					},
				},
			},
			{
				name: 'Add/Update Webhook',
				value: 'upsertWebhook',
				description: 'Create or update a Smartlead campaign webhook',
				action: 'Upsert campaign webhook',
				routing: {
					request: {
						method: 'POST',
						url: '=/campaigns/{{$parameter["campaignId"]}}/webhooks',
					},
				},
			},
			{
				name: 'Delete Webhook',
				value: 'deleteWebhook',
				description: 'Remove a Smartlead campaign webhook',
				action: 'Delete campaign webhook',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/campaigns/{{$parameter["campaignId"]}}/webhooks/{{$parameter["webhookId"]}}',
					},
				},
			},
		],
		default: 'listWebhooks',
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['listWebhooks', 'upsertWebhook', 'deleteWebhook'],
			},
		},
		description: 'Smartlead campaign ID that owns the webhook',
	},
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: forWebhookDelete,
		},
		description: 'Webhook ID to remove',
	},
	{
		displayName: 'Webhook ID (Update)',
		name: 'webhookIdBody',
		type: 'string',
		default: '',
		displayOptions: {
			show: forWebhookUpsert,
		},
		description: 'Smartlead webhook ID to update (leave blank to create)',
		routing: {
			send: {
				type: 'body',
				property: 'webhook_id',
			},
		},
	},
	{
		displayName: 'Webhook Name',
		name: 'webhookName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: forWebhookUpsert,
		},
		description: 'Label shown in Smartlead',
		routing: {
			send: {
				type: 'body',
				property: 'webhook_name',
			},
		},
	},
	{
		displayName: 'Webhook URL',
		name: 'webhookUrl',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: forWebhookUpsert,
		},
		description: 'HTTPS endpoint Smartlead will call',
		routing: {
			send: {
				type: 'body',
				property: 'webhook_url',
			},
		},
	},
	{
		displayName: 'Events',
		name: 'events',
		type: 'multiOptions',
		required: true,
		default: ['EMAIL_REPLY'],
		options: webhookEventOptions,
		displayOptions: {
			show: forWebhookUpsert,
		},
		description: 'Webhook event types (Smartlead Help Center)',
		routing: {
			send: {
				type: 'body',
				property: 'event_types',
			},
		},
	},
	{
		displayName: 'Secret Key',
		name: 'secretKey',
		type: 'string',
		default: '',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: forWebhookUpsert,
		},
		description: 'Optional shared secret Smartlead will echo back on each webhook',
		routing: {
			send: {
				type: 'body',
				property: 'secret_key',
			},
		},
	},
];
