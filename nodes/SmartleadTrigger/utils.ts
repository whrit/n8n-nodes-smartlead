export type SmartleadWebhookPayload = {
	event_type?: string;
	leadCorrespondence?: {
		replyReceivedFrom?: string | null;
		forwardedFrom?: string | null;
	};
	targetLeadEmail?: string | null;
	sl_lead_email?: string | null;
	secret_key?: string | null;
	secretKey?: string | null;
};

export type SmartleadExecutionPayload = SmartleadWebhookPayload & {
	resolvedLeadEmail?: string;
};

const cleanEmail = (value?: string | null) => {
	if (!value) return undefined;
	const trimmed = value.trim();
	return trimmed.length ? trimmed : undefined;
};

export const resolveLeadEmail = (payload: SmartleadWebhookPayload) => {
	const chain = [
		payload.leadCorrespondence?.replyReceivedFrom,
		payload.leadCorrespondence?.forwardedFrom,
		payload.targetLeadEmail,
		payload.sl_lead_email,
	];

	return chain.map(cleanEmail).find(Boolean) ?? undefined;
};

export const filterWebhookEvents = (
	payloads: SmartleadWebhookPayload[],
	allowed: string[],
) => {
	if (!Array.isArray(allowed) || allowed.length === 0) {
		return payloads;
	}

	const normalizedAllowed = allowed.map((event) => event.toUpperCase());

	return payloads.filter((payload) =>
		payload.event_type ? normalizedAllowed.includes(payload.event_type.toUpperCase()) : false,
	);
};

export const verifySecretMatch = (payload: SmartleadWebhookPayload, expected?: string | null) => {
	if (!expected) return true;
	const provided = payload.secret_key ?? payload.secretKey ?? '';
	return cleanEmail(provided)?.toLowerCase() === expected.trim().toLowerCase();
};

export const buildSmartleadExecutionPayloads = (
	payloads: SmartleadWebhookPayload[],
	allowedEvents: string[],
	expectedSecret?: string | null,
): SmartleadExecutionPayload[] => {
	const eventFiltered = filterWebhookEvents(payloads, allowedEvents);
	return eventFiltered
		.filter((payload) => verifySecretMatch(payload, expectedSecret))
		.map((payload) => ({
			...payload,
			resolvedLeadEmail: resolveLeadEmail(payload),
		}));
};
