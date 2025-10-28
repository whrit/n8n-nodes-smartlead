import type { IDataObject, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import { getJsonParameter } from './request';

const mapCommaSeparatedList = (value: string | string[] | undefined) => {
	if (Array.isArray(value)) return value.filter((entry) => entry !== '');
	if (typeof value !== 'string') return undefined;
	return value
		.split(',')
		.map((entry) => entry.trim())
		.filter((entry) => entry.length > 0);
};

export const buildCampaignBody = (payloadParamName: string) =>
	async function (this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions) {
		const operation = this.getNodeParameter('operation', 0) as string;
		const body: IDataObject = {};

		const campaignName = (this.getNodeParameter('campaignName', 0) as string).trim();
		if (campaignName) {
			body.campaign_name = campaignName;
		}

		const campaignDescription = (
			this.getNodeParameter('campaignDescription', 0) as string
		).trim();
		if (campaignDescription) {
			body.description = campaignDescription;
		}

		const clientId = (this.getNodeParameter('clientId', 0) as string).trim();
		if (clientId) {
			body.client_id = clientId;
		}

		const timezone = (this.getNodeParameter('timezone', 0) as string).trim();
		if (timezone) {
			body.timezone = timezone;
		}

		const startDate = (this.getNodeParameter('startDate', 0) as string).trim();
		if (startDate) {
			body.start_date = startDate;
		}

		const endDate = (this.getNodeParameter('endDate', 0) as string).trim();
		if (endDate) {
			body.end_date = endDate;
		}

		const sendingDays = this.getNodeParameter('sendingDays', 0) as string[];
		if (Array.isArray(sendingDays) && sendingDays.length) {
			body.sending_days = sendingDays;
		}

		const dailyLeadLimit = this.getNodeParameter('dailyLeadLimit', 0) as number;
		if (Number.isFinite(dailyLeadLimit) && dailyLeadLimit > 0) {
			body.daily_lead_limit = dailyLeadLimit;
		}

		const autoPauseOnReply = this.getNodeParameter('pauseOnReply', 0) as boolean;
		if (autoPauseOnReply) {
			body.pause_on_reply = autoPauseOnReply;
		}

		const emailAccountIds = mapCommaSeparatedList(
			this.getNodeParameter('emailAccountIds', 0) as string,
		);
		if (emailAccountIds?.length) {
			body.email_account_ids = emailAccountIds;
		}

		const additionalPayload = getJsonParameter(this, payloadParamName, {
			required: false,
			expectObject: false,
		});

		if (Array.isArray(additionalPayload)) {
			throw new NodeOperationError(
				this.getNode(),
				`Parameter "${payloadParamName}" must resolve to an object.`,
			);
		}

		if (additionalPayload) {
			Object.assign(body, additionalPayload);
		}

		if (!Object.keys(body).length) {
			throw new NodeOperationError(
				this.getNode(),
				'Provide at least one campaign field or additional payload property before calling Smartlead.',
			);
		}

		if (operation === 'createCampaign' && !body.campaign_name) {
			throw new NodeOperationError(
				this.getNode(),
				'Smartlead requires a campaign name when creating a new campaign.',
			);
		}

		requestOptions.body = body;
		return requestOptions;
	};
