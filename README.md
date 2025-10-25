# n8n-nodes-smartlead

Community nodes for [Smartlead](https://smartlead.ai/), built with the patterns from the official [n8n node authoring guide](n8n-creating-nodes-API-docs.md). The package ships the declarative Smartlead action node plus a programmatic webhook trigger so you can both pull campaigns and react to Smartlead inbox events inside n8n.

## Installation

Follow the [community node installation guide](https://docs.n8n.io/integrations/community-nodes/installation/). Once installed/rebuilt, the Smartlead nodes will appear under “Smartlead” in the editor’s node picker.

## Nodes & Operations

### Smartlead (actions)

| Resource | Operations | Notes |
| --- | --- | --- |
| Leads | `List by Campaign`, `Add to Campaign` (≤ 350 leads per request), `Get by Email` | Mirrors the Smartlead lead endpoints described in `smartlead-api-reference.md`. |
| Inbox | `Lead Message History` | Fetches `/campaigns/{campaign_id}/leads/{lead_id}/messages` to show Smartlead’s threaded correspondence. |
| Webhooks | `List`, `Add/Update`, `Delete` | Manage campaign webhooks (EMAIL_REPLY, EMAIL_OPEN, EMAIL_LINK_CLICK, LEAD_UNSUBSCRIBED, LEAD_CATEGORY_UPDATED). |

All REST operations run through the declarative routing API recommended in the n8n docs, so they automatically inherit the base URL, headers, and query-param authentication.

### Smartlead Trigger (webhooks)

Receives Smartlead webhook payloads (reply, open, click, unsubscribe, category update events). It verifies the optional `secret_key`, enriches each item with a `resolvedLeadEmail` (preferring `leadCorrespondence.replyReceivedFrom` as suggested in the Smartlead webhook guide), and emits one n8n item per event.

## Credentials

Create a **Smartlead API** credential with your API key. The nodes attach it as the `api_key` query parameter required by Smartlead (see `smartlead-api-reference.md` → Authentication). The credential test performs a benign `GET /campaigns` to confirm access.

## Usage & Best Practices

- **Rate limits:** Smartlead enforces roughly 60 requests per 60 seconds per API key. Chain the action node with n8n’s Split In Batches node for long-running syncs.
- **Lead uploads:** The `Add to Campaign` operation enforces the documented cap of 350 leads per request and sanitizes the payload before sending it upstream.
- **Webhook secrets:** Configure the trigger’s `Expected Secret` field to match Smartlead’s `secret_key` so n8n drops spoofed requests.
- **Examples:** Import the JSON workflows inside `/examples` to see a campaign pull sync and a webhook push flow in context.

## Development

| Command | When to use it |
| --- | --- |
| `npm run dev` | Spin up the nodes in watch mode via `n8n-node dev`. |
| `npm run lint` / `npm run lint:fix` | Apply the n8n ESLint rules before committing. |
| `npm run build` | Compile to `dist/` for packaging or publishing. |
| `npm test` | Runs the Vitest suite (helper + metadata tests) to keep the TDD contract intact. |

Refer back to `n8n-creating-nodes-API-docs.md` for deeper guidance on declarative routing, trigger structure, and testing.

## Version history

- **1.0.0** — Initial release with Smartlead action node (leads, inbox, webhooks), Smartlead Trigger, Vitest coverage, and example workflows.
