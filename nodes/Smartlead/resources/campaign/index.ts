import type { INodeProperties } from 'n8n-workflow';
import { mergeJsonQuery } from '../../utils/request';
import { buildCampaignBody } from '../../utils/campaign';

const forCampaign = {
	resource: ['campaign'],
};

const forCampaignId = {
	...forCampaign,
	operation: [
		'updateCampaign',
		'deleteCampaign',
		'getCampaign',
		'listCampaignSequences',
		'getCampaignSequenceAnalytics',
		'getCampaignStatistics',
		'getCampaignTopLevelAnalytics',
	],
};

const forCampaignBody = {
	...forCampaign,
	operation: ['createCampaign', 'updateCampaign'],
};

const forCampaignQuery = {
	...forCampaign,
	operation: [
		'listCampaigns',
		'listCampaignSequences',
		'getCampaignSequenceAnalytics',
		'getCampaignStatistics',
		'getCampaignTopLevelAnalytics',
	],
};

export const campaignDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: forCampaign,
		},
		options: [
			{
				name: 'Create',
				value: 'createCampaign',
				description: 'Create a Smartlead campaign',
				action: 'Create campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/campaigns',
					},
					send: {
						preSend: [buildCampaignBody('campaignPayload')],
					},
				},
			},
			{
				name: 'Update',
				value: 'updateCampaign',
				description: 'Update an existing Smartlead campaign',
				action: 'Update campaign',
				routing: {
					request: {
						method: 'PUT',
						url: '=/campaigns/{{$parameter["campaignId"]}}',
					},
					send: {
						preSend: [buildCampaignBody('campaignPayload')],
					},
				},
			},
			{
				name: 'Delete',
				value: 'deleteCampaign',
				description: 'Delete an existing Smartlead campaign',
				action: 'Delete campaign',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/campaigns/{{$parameter["campaignId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'getCampaign',
				description: 'Fetch a Smartlead campaign by ID',
				action: 'Get campaign',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}',
					},
				},
			},
			{
				name: 'List',
				value: 'listCampaigns',
				description: 'List campaigns in the Smartlead workspace',
				action: 'List campaigns',
				routing: {
					request: {
						method: 'GET',
						url: '/campaigns',
					},
				},
			},
			{
				name: 'List Sequences',
				value: 'listCampaignSequences',
				description: 'List campaign sequences for a Smartlead campaign',
				action: 'List campaign sequences',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}/sequences',
					},
				},
			},
			{
				name: 'Sequence Analytics',
				value: 'getCampaignSequenceAnalytics',
				description: 'Fetch sequence analytics for a Smartlead campaign',
				action: 'Get campaign sequence analytics',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}/sequences/analytics',
					},
				},
			},
			{
				name: 'Statistics',
				value: 'getCampaignStatistics',
				description: 'Fetch campaign statistics by ID',
				action: 'Get campaign statistics',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}/statistics',
					},
				},
			},
			{
				name: 'Top Level Analytics',
				value: 'getCampaignTopLevelAnalytics',
				description: 'Fetch top-level analytics for a campaign',
				action: 'Get campaign top level analytics',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}/analytics',
					},
				},
			},
		],
		default: 'listCampaigns',
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: forCampaignId,
		},
		description: 'Smartlead campaign identifier',
	},
	{
		displayName: 'Campaign Name',
		name: 'campaignName',
		type: 'string',
		default: '',
		description: 'Label for the campaign in Smartlead (Smartlead API reference — Create campaign)',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Campaign Description',
		name: 'campaignDescription',
		type: 'string',
		default: '',
		description: 'Optional description for the campaign',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		description: 'Smartlead client identifier that owns the campaign',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		default: '',
		placeholder: 'America/New_York',
		description: 'IANA timezone identifier used for scheduling (Smartlead API reference — Campaign settings)',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		default: '',
		placeholder: '2024-01-01',
		description: 'ISO 8601 date when Smartlead should begin the campaign',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'End Date',
		name: 'endDate',
		type: 'string',
		default: '',
		placeholder: '2024-01-31',
		description: 'ISO 8601 date when Smartlead should stop the campaign',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Sending Days',
		name: 'sendingDays',
		type: 'multiOptions',
		options: [
			{ name: 'Monday', value: 'MONDAY' },
			{ name: 'Tuesday', value: 'TUESDAY' },
			{ name: 'Wednesday', value: 'WEDNESDAY' },
			{ name: 'Thursday', value: 'THURSDAY' },
			{ name: 'Friday', value: 'FRIDAY' },
			{ name: 'Saturday', value: 'SATURDAY' },
			{ name: 'Sunday', value: 'SUNDAY' },
		],
		default: [],
		description: 'Restrict Smartlead sending to specific weekdays',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Daily Lead Limit',
		name: 'dailyLeadLimit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 0,
		description: 'Maximum leads to contact daily (Smartlead API reference — Campaign settings)',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Pause on Reply',
		name: 'pauseOnReply',
		type: 'boolean',
		default: false,
		description: 'Automatically pause a lead’s sequence when Smartlead records a reply',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Email Account IDs',
		name: 'emailAccountIds',
		type: 'string',
		default: '',
		description:
			'Comma separated Smartlead email account IDs to use for this campaign (Smartlead API reference — Add email account to campaign)',
		displayOptions: {
			show: forCampaignBody,
		},
	},
	{
		displayName: 'Campaign Payload (JSON)',
		name: 'campaignPayload',
		type: 'json',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		displayOptions: {
			show: forCampaignBody,
		},
		description:
			'Advanced overrides merged into the campaign payload (Smartlead API reference — Create/Update campaign)',
	},
	{
		displayName: 'Additional Query (JSON)',
		name: 'campaignQueryJson',
		type: 'json',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		displayOptions: {
			show: forCampaignQuery,
		},
		description:
			'Optional query string key/value pairs (e.g. pagination, filtering) to append to the request',
		routing: {
			send: {
				type: 'query',
				preSend: [mergeJsonQuery('campaignQueryJson')],
			},
		},
	},
];
