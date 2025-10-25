export type SmartleadLeadInput = {
	email?: string;
	firstName?: string;
	lastName?: string;
	company?: string;
	phone?: string;
	customFields?: Record<string, unknown> | string;
};

export type SmartleadLeadPayload = {
	email: string;
	first_name?: string;
	last_name?: string;
	company?: string;
	phone?: string;
	custom_fields?: Record<string, unknown>;
};

const MAX_BATCH = 350;

const parseCustomFields = (value: SmartleadLeadInput['customFields']) => {
	if (!value) return undefined;
	if (typeof value === 'object') return value;
	const trimmed = value.trim();
	if (!trimmed) return undefined;
	try {
		return JSON.parse(trimmed);
	} catch (error) {
		throw new Error(`Custom fields must be valid JSON. ${(error as Error).message}`);
	}
};

export const prepareLeadBatch = (leads: SmartleadLeadInput[]): SmartleadLeadPayload[] => {
	if (!Array.isArray(leads) || leads.length === 0) {
		throw new Error('Add at least one lead before calling Smartlead.');
	}

	if (leads.length > MAX_BATCH) {
		throw new Error('Smartlead only accepts 350 leads per batch.');
	}

	return leads.map((lead, index) => {
		const email = lead.email?.trim();
		if (!email) {
			throw new Error(`Lead #${index + 1} is missing an email address.`);
		}

		const payload: SmartleadLeadPayload = { email };

		if (lead.firstName?.trim()) {
			payload.first_name = lead.firstName.trim();
		}

		if (lead.lastName?.trim()) {
			payload.last_name = lead.lastName.trim();
		}

		if (lead.company?.trim()) {
			payload.company = lead.company.trim();
		}

		if (lead.phone?.trim()) {
			payload.phone = lead.phone.trim();
		}

		const customFields = parseCustomFields(lead.customFields);
		if (customFields) {
			payload.custom_fields = customFields;
		}

		return payload;
	});
};
