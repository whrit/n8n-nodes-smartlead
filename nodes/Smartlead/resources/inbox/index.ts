import type { INodeProperties } from 'n8n-workflow';

const forInbox = {
	resource: ['inbox'],
};

const forMessageHistory = {
	...forInbox,
	operation: ['leadMessageHistory'],
};

export const inboxDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: forInbox,
		},
		options: [
			{
				name: 'Lead Message History',
				value: 'leadMessageHistory',
				description: 'Fetch the threaded message history for a lead within a campaign',
				action: 'Get lead message history',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}/leads/{{$parameter["leadId"]}}/messages',
					},
				},
			},
		],
		default: 'leadMessageHistory',
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: forMessageHistory,
		},
		description: 'Smartlead campaign identifier',
	},
	{
		displayName: 'Lead ID',
		name: 'leadId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: forMessageHistory,
		},
		description: 'Smartlead lead ID (sl_email_lead_id)',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		displayOptions: {
			show: forMessageHistory,
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		default: 0,
		displayOptions: {
			show: forMessageHistory,
		},
		description: 'Offset cursor for pagination',
		routing: {
			send: {
				type: 'query',
				property: 'offset',
			},
		},
	},
];
