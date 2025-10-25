# Smartlead n8n Integration — Implementation Plan & Tracker

**Repo:** `n8n-nodes-smartlead`
**Nodes in package:**

* `Smartlead` — declarative REST node (actions)
* `SmartleadTrigger` — programmatic Trigger node (webhooks)

> Rationale: n8n recommends **declarative** style for REST nodes using `requestDefaults`/`routing`, and **programmatic** style for trigger nodes that receive webhooks and run custom logic. ([n8n Docs][1])

---

## 0) Current State (baseline)

```
.
├── credentials/SmartleadApi.credentials.ts
├── nodes/
│   ├── Smartlead/            # declarative HTTP node (scaffolded)
│   │   ├── Smartlead.node.json
│   │   ├── Smartlead.node.ts
│   │   └── resources/
│   │       ├── company/ getAll.ts
│   │       └── user/    create.ts, get.ts
│   └── SmartleadTrigger/     # programmatic trigger (scaffolded)
│       ├── SmartleadTrigger.node.json
│       └── SmartleadTrigger.node.ts
├── .github/workflows/ci.yml  # CI scaffold
└── package.json / tsconfig.json / README.md / CHANGELOG.md
```

---

## 1) Objectives

* Ship a **single npm package** with **two nodes**:

  1. `Smartlead` (actions: list/add leads, fetch by email, message history, webhook CRUD).
  2. `SmartleadTrigger` (events: EMAIL_REPLY, EMAIL_OPEN, LINK_CLICK, LEAD_UNSUBSCRIBED, LEAD_CATEGORY_UPDATED).
     n8n supports multiple nodes per package; each node lives in its own folder under `nodes/`. ([n8n Docs][2])

* Follow Smartlead’s REST **query-param auth** (`?api_key=...`) and rate limits (**60 req / 60s per API key**) with batching/backoff. ([Smartlead Help Center][3])

---

## 2) Deliverables

* ✅ Declarative `Smartlead` node with these **v1 operations**:

  * Leads → **List by Campaign** (`GET /campaigns/{campaign_id}/leads`)
  * Leads → **Add to Campaign** (`POST /campaigns/{campaign_id}/leads`, batch ≤ **350** leads)
  * Leads → **Fetch by Email** (`GET /leads?email=...`)
  * Inbox → **Lead Message History** (`GET /campaigns/{campaign_id}/leads/{lead_id}/messages`)
  * Webhooks → **List/Add/Update/Delete** (campaign-level)
    ([SmartLead][4])

* ✅ Programmatic `SmartleadTrigger` node (HTTP listener) that:

  * Accepts `POST` webhooks from Smartlead, filters by `event_type`,
    prefers `leadCorrespondence.replyReceivedFrom` for contact matching,
    emits one n8n item per event, responds **2xx quickly**. ([Smartlead Help Center][3])

* ✅ Docs: README usage + examples, CHANGELOG, and a sample workflow (pull & push).

---

## 3) Credentials

### `SmartleadApi.credentials.ts`

* Fields: `apiKey: string` (required).
* Used by **all** declarative operations via `qs: { api_key: {{$credentials.apiKey}} }`. ([Smartlead Help Center][3])
* ✅ Implemented in `credentials/SmartleadApi.credentials.ts` with a `/campaigns` test call so new creds can be verified without mutating data.

---

## 4) Node: `Smartlead` (Declarative)

**requestDefaults**

```ts
requestDefaults: {
  baseURL: 'https://server.smartlead.ai/api/v1',
}
```

**Common routing fragment (per operation)**

```ts
routing: {
  request: {
    method: 'GET|POST|DELETE',
    url: '=/campaigns/{{$parameter["campaignId"]}}/leads', // per-op path
    qs: { api_key: '={{ $credentials.apiKey }}', offset: '={{$parameter["offset"]}}', limit: '={{$parameter["limit"]}}' },
    // for POST ops add: send: { type: 'body', properties: { ... } }
  },
  output: { postReceive: [{ type: 'set', properties: { value: '={{ $response }}' } }] }
}
```

### v1 Operations (details)

1. **Leads → List by Campaign**
   Path: `GET /campaigns/{campaign_id}/leads` (supports `offset`, `limit`). ([SmartLead][4])
   Inputs: `campaignId` (string), `offset?`, `limit?`.
   Output: array of leads (pass through).

2. **Leads → Add to Campaign**
   Path: `POST /campaigns/{campaign_id}/leads` (batch ≤ **350**). ([SmartLead][5])
   Inputs: `campaignId`, `leads` (collection[]).
   Body: `[{ email, first_name?, last_name?, company?, phone?, ... }]`.

3. **Leads → Fetch by Email**
   Path: `GET /leads?email=...`. ([SmartLead][6])
   Inputs: `email` (string).

4. **Inbox → Lead Message History (by campaign/lead)**
   Path: `GET /campaigns/{campaign_id}/leads/{lead_id}/messages`. ([SmartLead][7])
   Inputs: `campaignId`, `leadId`.
   Use to attach latest reply summary into downstream systems.

5. **Webhooks (campaign) → List/Add/Update/Delete**
   Paths per Smartlead Reference (GET/POST/DELETE). Enables managing push events from n8n UI. ([Smartlead Help Center][3])

✅ All operations above now live in `nodes/Smartlead/resources/*`, with `prepareLeadBatch` enforcing the Smartlead 350-lead cap before emitting POST bodies.

> **Declarative style** is purpose-built for REST nodes and handled via `routing`; it’s lighter to write and “future-proof” per n8n docs. ([n8n Docs][1])

---

## 5) Node: `SmartleadTrigger` (Programmatic)

**Parameters**

* `secret` (optional; compare to `x-smartlead-secret` or `secret_key` in payload if provided).
* `events` (multi-select): `EMAIL_REPLY`, `EMAIL_OPEN`, `EMAIL_LINK_CLICK`, `LEAD_UNSUBSCRIBED`, `LEAD_CATEGORY_UPDATED`.

**Trigger behavior (outline)**

* Register HTTP endpoint (POST).
* On request:

  * Verify secret if configured.
  * Filter by `event_type`.
  * Prefer `leadCorrespondence.replyReceivedFrom` when present; fallback to `targetLeadEmail` or `sl_lead_email` for identity.
  * Emit one item per event; respond **200** immediately.
    (Programmatic nodes require an `execute()`/trigger handler to read the payload and emit items.) ([n8n Docs][8])

✅ Implemented in `nodes/SmartleadTrigger/SmartleadTrigger.node.ts` using the `buildSmartleadExecutionPayloads` helper to keep the filtering/secret/email logic unit-testable.

---

## 6) Rate-limit & Batching Strategy

* **Smartlead limit**: *60 requests per 60 seconds per API key*. Include guidance to use batching/pagination; read rate-limit headers (`x-ratelimit-limit`, `-remaining`, `-reset`) to back off. For uploads, **batch ≤ 350** leads per request. ([Smartlead Help Center][3])
* Recommend using n8n’s **Loop Over Items (Split In Batches)** to avoid throttling when chaining HTTP requests. ([n8n Docs][9])

---

## 7) Polling Cursor (optional pattern A support)

* Document using **Workflow Static Data** (`getWorkflowStaticData('global')`) to store a `lastSyncedAt` timestamp between runs when users build polling workflows around this node. Include caveats (not available during test runs; designed for active workflows). ([n8n Docs][10])
* Link to cookbook and community examples for static data usage. ([n8n][11])

---

## 8) Testing Plan

### Local dev loop

* Install deps; run the package in **dev mode** so the nodes appear in n8n. (Use the node-dev commands from the n8n node tool/template you scaffolded.) ([n8n Docs][1])
* Create two **example workflows** in the repo under `examples/`:

  1. **Pull**: HTTP Request (Smartlead list) → Split In Batches → (mock) HTTP calls — demonstrates paging & batching. ([n8n Docs][9])
  2. **Push**: SmartleadTrigger → (mock) transform — shows webhook event ingestion and mapping.

✅ `examples/pull-smartlead-campaign.json` and `examples/push-smartlead-webhook.json` now capture both flows, and `npm test` (Vitest) exercises the helper logic end-to-end.

### Endpoint validation

* Verify each op against Smartlead’s reference endpoints:

  * List Leads by Campaign (GET) ([SmartLead][4])
  * Add Leads to Campaign (POST; 350 cap) ([SmartLead][5])
  * Fetch by Email (GET) ([SmartLead][6])
  * Lead Message History (GET) ([SmartLead][7])
  * Campaign Webhooks (GET/POST/DELETE) ([Smartlead Help Center][3])

### HTTP node reference for QA

* Keep a link to n8n **HTTP Request** node docs handy when validating headers/query/body behavior. ([n8n Docs][12])
* ✅ README now links back to the relevant Smartlead and n8n docs for ongoing QA.

---

## 9) Documentation To-Dos

* **README.md**

  * Overview, installation, credentials setup, usage for each operation.
  * Examples (GIFs or screenshots).
  * Rate-limit & batching notes.
* **CHANGELOG.md** — Keepers:

  * `1.0.0`: initial actions + trigger.
* **Node help** (the JSON’s `description`/`properties` help text):

  * Note **auth via `api_key` query param** on every request. ([Smartlead Help Center][3])
  * Note **batch size ≤ 350** for `add leads`. ([SmartLead][5])

✅ README, CHANGELOG, and both node codex files now reflect these requirements, and the UI copy inside the lead/webhook resources references the Smartlead docs directly.

---

## 10) Versioning & Releases

* Use **semantic versioning** and n8n’s guidance: declarative nodes support **light versioning**; if you later require full versioning (or heavy transformations / multi-call orchestration) consider a separate **programmatic** op or node. ([n8n Docs][13])
* CI (`.github/workflows/ci.yml`):

  * Lint, build TypeScript, run minimal compile tests.
* Publish to npm under `n8n-nodes-smartlead`.

---

## 11) Security & Secrets

* **Never** log `apiKey`.
* Credential tested via a benign GET (campaign list) where possible.
* Trigger: support optional **secret** header check and document expected header name.

---

## 12) Acceptance Criteria (Definition of Done)

* [x] All v1 operations function against Smartlead’s API with **query-param auth**. ([Smartlead Help Center][3])
* [x] Trigger node receives Smartlead webhooks and emits items with de-duplicated email preference (`replyReceivedFrom` > `targetLeadEmail` > `sl_lead_email`). ([Smartlead Help Center][3])
* [x] Examples load and run in a fresh n8n instance.
* [x] README and node help clearly document rate-limits and batching. ([n8n Docs][9])
* [ ] CI green; package builds; version tagged and published.

---

## 13) Backlog / vNext

* **Retry/backoff** logic (programmatic op) that honors `x-ratelimit-remaining/reset`. ([Smartlead Help Center][3])
* **Composite “Upsert Lead”** op (find-by-email then create/update). If needed in a single click, implement as **programmatic** (two API calls) or via a sub-workflow per n8n guidance. ([n8n Docs][1])
* **Additional endpoints** (unsubscribe lead, pause/resume by campaign, global leads, etc.). ([SmartLead][6])
* **Typed output** schemas to improve UX in downstream nodes.

---

## 14) Quick Reference Links

* n8n: Declarative node tutorial; HTTP Request node; Loop/Split in Batches; Programmatic nodes & `execute()`; Static data cookbook. ([n8n Docs][1])
* n8n: Multi-node package file structure. ([n8n Docs][2])
* Smartlead: Full API doc; List Leads by Campaign; Add Leads to Campaign; Fetch Lead by Email; Lead Message History; Rate limits & API key auth. ([Smartlead Help Center][3])

---

### Suggested PR Checklist

* [x] `credentials/SmartleadApi.credentials.ts` finalized (display name, docs link).
* [x] `nodes/Smartlead/*` implements v1 ops with `routing` + `requestDefaults`.
* [x] `nodes/SmartleadTrigger/*` implements HTTP POST trigger, params, filters, secret check.
* [x] Examples under `examples/` covering Pull & Push flows.
* [x] README updated; CHANGELOG entry; CI passes locally (lint/build pending in CI).
* [ ] Tag `v1.0.0` and publish.

---
