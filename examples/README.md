# Examples

Two starter workflows demonstrate the recommended pull/push patterns from the implementation tracker:

- `pull-smartlead-campaign.json` — lists campaign leads via the Smartlead node, splits them into batches, and pushes each batch to an external webhook. Use this to hydrate CRMs or analytics stores without breaching the 60-requests-per-minute limit highlighted in the Smartlead API reference.
- `push-smartlead-webhook.json` — uses the Smartlead Trigger to capture replies/unsubscribes, reshapes the payload, and forwards it to any HTTPS endpoint. Update the URL and Smartlead `secret_key` before activating the workflow.

Import either JSON file directly into n8n (`Import from file`) to inspect the node wiring and adapt it for your workspace.
