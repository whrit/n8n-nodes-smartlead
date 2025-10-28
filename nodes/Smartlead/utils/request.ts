import type {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

const parseJsonParameter = (
	context: IExecuteSingleFunctions,
	paramName: string,
	required: boolean,
	expectObject: boolean,
): IDataObject | IDataObject[] | undefined => {
	const rawValue = context.getNodeParameter(paramName, 0) as unknown;

	if (rawValue === null || rawValue === undefined) {
		if (required) {
			throw new NodeOperationError(
				context.getNode(),
				`Parameter "${paramName}" is required and must be valid JSON.`,
			);
		}
		return undefined as IDataObject | IDataObject[] | undefined;
	}

	if (typeof rawValue === 'object') {
		if (expectObject && (rawValue === null || Array.isArray(rawValue))) {
			throw new NodeOperationError(
				context.getNode(),
				`Parameter "${paramName}" must be a JSON object.`,
			);
		}
		return rawValue as IDataObject | IDataObject[] | undefined;
	}

	if (typeof rawValue === 'string') {
		const trimmed = rawValue.trim();
		if (!trimmed) {
			if (required) {
				throw new NodeOperationError(
					context.getNode(),
					`Parameter "${paramName}" cannot be empty and must contain valid JSON.`,
				);
			}
			return undefined;
		}

		try {
			const parsed = JSON.parse(trimmed);
			if (expectObject && (parsed === null || Array.isArray(parsed) || typeof parsed !== 'object')) {
				throw new Error('value must be a JSON object');
			}
			return parsed as IDataObject | IDataObject[];
		} catch (error) {
			throw new NodeOperationError(
				context.getNode(),
				`Parameter "${paramName}" must be valid JSON. ${(error as Error).message}`,
			);
		}
	}

	throw new NodeOperationError(
		context.getNode(),
		`Parameter "${paramName}" must be provided as JSON.`,
	);
};

export const getJsonParameter = (
	context: IExecuteSingleFunctions,
	paramName: string,
	{
		required = false,
		expectObject = false,
	}: { required?: boolean; expectObject?: boolean } = {},
): IDataObject | IDataObject[] | undefined => parseJsonParameter(context, paramName, required, expectObject);

export const setJsonBody = (paramName: string, { required = true } = {}) =>
	async function (this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions) {
		const payload = getJsonParameter(this, paramName, { required });
		if (payload !== undefined) {
			requestOptions.body = payload;
		}
		return requestOptions;
	};

export const mergeJsonQuery = (paramName: string) =>
	async function (this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions) {
		const payload = getJsonParameter(this, paramName, { expectObject: true });
		if (payload) {
			requestOptions.qs = { ...(requestOptions.qs ?? {}), ...payload };
		}
		return requestOptions;
	};
