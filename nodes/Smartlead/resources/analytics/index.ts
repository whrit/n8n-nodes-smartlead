import type { INodeProperties } from 'n8n-workflow';
import { mergeJsonQuery } from '../../utils/request';

const forAnalytics = {
	resource: ['analytics'],
};

const forDateRange = {
	...forAnalytics,
	operation: [
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
	],
};

const forCampaignScoped = {
	...forAnalytics,
	operation: ['campaignOverallStats', 'campaignResponseStats', 'campaignStatusStats'],
};

const forClientScoped = {
	...forAnalytics,
	operation: ['clientOverallStats'],
};

const forQueryJson = {
	...forAnalytics,
	operation: [
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
	],
};

export const analyticsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: forAnalytics,
		},
		options: [
			{
				name: 'Campaign Overall Stats',
				value: 'campaignOverallStats',
				description: 'Campaign overall analytics across a date range',
				action: 'Get campaign overall stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/campaigns/overall-stats',
					},
				},
			},
			{
				name: 'Campaign Response Stats',
				value: 'campaignResponseStats',
				description: 'Campaign response analytics across a date range',
				action: 'Get campaign response stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/campaigns/response-stats',
					},
				},
			},
			{
				name: 'Campaign Status Stats',
				value: 'campaignStatusStats',
				description: 'Campaign status analytics across a date range',
				action: 'Get campaign status stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/campaigns/status-stats',
					},
				},
			},
			{
				name: 'Client Overall Stats',
				value: 'clientOverallStats',
				description: 'Client-level analytics across a date range',
				action: 'Get client overall stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/clients/overall-stats',
					},
				},
			},
			{
				name: 'Day Wise Overall Stats',
				value: 'dayWiseOverallStats',
				description: 'Day-wise analytics across a date range',
				action: 'Get day wise overall stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/day-wise/overall-stats',
					},
				},
			},
			{
				name: 'Day Wise Overall Stats by Sent Time',
				value: 'dayWiseOverallStatsBySentTime',
				description: 'Day-wise analytics grouped by send time',
				action: 'Get day wise overall stats by sent time',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/day-wise/overall-stats-by-sent-time',
					},
				},
			},
			{
				name: 'Geo Report',
				value: 'geoReport',
				description: 'Geo-wise analytics report',
				action: 'Get geo report',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/geo/report',
					},
				},
			},
			{
				name: 'Lead Overall Stats',
				value: 'leadOverallStats',
				description: 'Lead-level analytics across a date range',
				action: 'Get lead overall stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/leads/overall-stats',
					},
				},
			},
			{
				name: 'Mailbox Overall Stats',
				value: 'mailboxOverallStats',
				description: 'Mailbox-level analytics across a date range',
				action: 'Get mailbox overall stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/mailboxes/overall-stats',
					},
				},
			},
			{
				name: 'Overall Stats',
				value: 'overallStats',
				description: 'Workspace-wide overall analytics',
				action: 'Get overall stats',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/overall-stats',
					},
				},
			},
			{
				name: 'Provider Performance',
				value: 'providerPerformance',
				description: 'Provider-wise performance metrics',
				action: 'Get provider performance',
				routing: {
					request: {
						method: 'GET',
						url: '/analytics/providers/performance',
					},
				},
			},
		],
		default: 'campaignOverallStats',
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		default: '',
		placeholder: '2024-01-01',
		description: 'Start date for the analytics window (ISO 8601)',
		displayOptions: {
			show: forDateRange,
		},
		routing: {
			send: {
				type: 'query',
				property: 'start_date',
				value: '={{$parameter["startDate"] || undefined}}',
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'endDate',
		type: 'string',
		default: '',
		placeholder: '2024-01-31',
		description: 'End date for the analytics window (ISO 8601)',
		displayOptions: {
			show: forDateRange,
		},
		routing: {
			send: {
				type: 'query',
				property: 'end_date',
				value: '={{$parameter["endDate"] || undefined}}',
			},
		},
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		default: '',
		placeholder: 'America/New_York',
		description:
			'Timezone identifier applied to aggregated metrics (Smartlead API reference — Global analytics)',
		displayOptions: {
			show: forQueryJson,
		},
		routing: {
			send: {
				type: 'query',
				property: 'timezone',
				value: '={{$parameter["timezone"] || undefined}}',
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 1,
		description: 'Pagination page index for Smartlead analytics responses',
		displayOptions: {
			show: forQueryJson,
		},
		routing: {
			send: {
				type: 'query',
				property: 'page',
				value: '={{$parameter["page"] !== 1 ? $parameter["page"] : undefined}}',
			},
		},
	},
	{
		displayName: 'Per Page',
		name: 'perPage',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description:
			'Number of records per page (Smartlead analytics pagination, defaults to 100 per docs)',
		displayOptions: {
			show: forQueryJson,
		},
		routing: {
			send: {
				type: 'query',
				property: 'per_page',
				value:
					'={{$parameter["perPage"] && $parameter["perPage"] !== 100 ? $parameter["perPage"] : undefined}}',
			},
		},
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		description: 'Smartlead campaign identifier for campaign-scoped analytics',
		displayOptions: {
			show: forCampaignScoped,
		},
		routing: {
			send: {
				type: 'query',
				property: 'campaign_id',
				value: '={{$parameter["campaignId"] || undefined}}',
			},
		},
	},
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		description: 'Smartlead client identifier for client-scoped analytics',
		displayOptions: {
			show: forClientScoped,
		},
		routing: {
			send: {
				type: 'query',
				property: 'client_id',
				value: '={{$parameter["clientId"] || undefined}}',
			},
		},
	},
	{
		displayName: 'Additional Query (JSON)',
		name: 'analyticsQueryJson',
		type: 'json',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		description:
			'Additional query string options (e.g. filters, timezone overrides, pagination) appended to the request',
		displayOptions: {
			show: forQueryJson,
		},
		routing: {
			send: {
				type: 'query',
				preSend: [mergeJsonQuery('analyticsQueryJson')],
			},
		},
	},
];
