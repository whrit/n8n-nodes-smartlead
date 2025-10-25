import type {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import type { SmartleadLeadInput } from '../../utils/leadBatch';
import { prepareLeadBatch } from '../../utils/leadBatch';

const forLeadResource = {
	resource: ['lead'],
};

const forLeadList = {
	...forLeadResource,
	operation: ['listCampaignLeads'],
};

const forLeadAdd = {
	...forLeadResource,
	operation: ['addCampaignLeads'],
};

const forLeadByEmail = {
	...forLeadResource,
	operation: ['getLeadByEmail'],
};

const enforceLeadBatch = async function (
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
) {
	const leads = ((requestOptions.body as IDataObject | undefined)?.leads as
		| SmartleadLeadInput[]
		| undefined) ?? [];

	try {
		if (!requestOptions.body) {
			requestOptions.body = {};
		}

		requestOptions.body.leads = prepareLeadBatch(leads);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), (error as Error).message);
	}

	return requestOptions;
};

export const leadDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: forLeadResource,
		},
		options: [
			{
				name: 'List by Campaign',
				value: 'listCampaignLeads',
				description: 'List leads assigned to a Smartlead campaign (supports offset/limit)',
				action: 'List campaign leads',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter["campaignId"]}}/leads',
					},
				},
			},
			{
				name: 'Add to Campaign',
				value: 'addCampaignLeads',
				description: 'Add up to 350 leads to a campaign in a single request',
				action: 'Add campaign leads',
				routing: {
					request: {
						method: 'POST',
						url: '=/campaigns/{{$parameter["campaignId"]}}/leads',
					},
					send: {
						type: 'body',
						property: 'leads',
						preSend: [enforceLeadBatch],
					},
				},
			},
			{
				name: 'Get by Email',
				value: 'getLeadByEmail',
				description: 'Look up a lead by primary email address',
				action: 'Get lead by email',
				routing: {
					request: {
						method: 'GET',
						url: '/leads',
					},
				},
			},
		],
		default: 'listCampaignLeads',
	},
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		required: true,
		default: '',
		description: 'The Smartlead campaign ID',
		displayOptions: {
			show: {
				resource: ['lead'],
				operation: ['listCampaignLeads', 'addCampaignLeads'],
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
		description: 'Offset cursor for pagination',
		displayOptions: {
			show: forLeadList,
		},
		routing: {
			send: {
				type: 'query',
				property: 'offset',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: forLeadList,
		},
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'Leads',
		name: 'leads',
		type: 'fixedCollection',
		placeholder: 'Add Lead',
		default: {},
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: forLeadAdd,
		},
		description:
			'Smartlead accepts up to 350 leads per batch (Smartlead API reference — Add leads to a campaign)',
		options: [
			{
				name: 'lead',
				displayName: 'Lead',
				values: [
					{
						displayName: 'Company',
						name: 'company',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Custom Fields (JSON)',
						name: 'customFields',
						type: 'json',
						default: '',
						description: 'Key/value pairs added to Smartlead custom fields',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						required: true,
						default: '',
						placeholder: 'name@email.com',
						description: 'Primary email address for the lead',
					},
					{
						displayName: 'First Name',
						name: 'firstName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Last Name',
						name: 'lastName',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'name@email.com',
		description: 'Exact match on the lead email address',
		displayOptions: {
			show: forLeadByEmail,
		},
		routing: {
			send: {
				type: 'query',
				property: 'email',
			},
		},
	},
];
