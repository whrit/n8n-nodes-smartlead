import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SmartleadApi implements ICredentialType {
	name = 'smartleadApi';

	displayName = 'Smartlead API';

	icon: Icon = { light: 'file:../icons/smartlead.svg', dark: 'file:../icons/smartlead.dark.svg' };

	documentationUrl = 'https://github.com/QT-n8n/n8n-nodes-smartlead#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://server.smartlead.ai/api/v1',
			url: '/campaigns',
		},
	};
}
