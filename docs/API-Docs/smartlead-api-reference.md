## Table of Contents

  - [Welcome!Welcome!](#welcomewelcome)
    - [AuthenticationAuthentication](#authenticationauthentication)
      - [ReferencesReferences](#referencesreferences)
        - [Rate LimitsRate Limits](#rate-limitsrate-limits)
          - [Create CampaignCreate Campaign](#create-campaigncreate-campaign)
            - [Add Client To System (Whitelabel or not)Add Client To System (Whitelabel or not)](#add-client-to-system-whitelabel-or-notadd-client-to-system-whitelabel-or-not)
            - [Add Email Account to a CampaignAdd Email Account to a Campaign](#add-email-account-to-a-campaignadd-email-account-to-a-campaign)
            - [Add Lead/Domain to Global Block ListAdd Lead/Domain to Global Block List](#add-leaddomain-to-global-block-listadd-leaddomain-to-global-block-list)
            - [Add leads to a campaign by IDAdd leads to a campaign by ID](#add-leads-to-a-campaign-by-idadd-leads-to-a-campaign-by-id)
            - [Add / Update Campaign WebhookAdd / Update Campaign Webhook](#add-update-campaign-webhookadd-update-campaign-webhook)
            - [Add/Update Warmup To Email AccountAdd/Update Warmup To Email Account](#addupdate-warmup-to-email-accountaddupdate-warmup-to-email-account)
            - [Auto-generate-mailboxesAuto-generate-mailboxes](#auto-generate-mailboxesauto-generate-mailboxes)
            - [Block DomainsBlock Domains](#block-domainsblock-domains)
            - [Change Read StatusChange Read Status](#change-read-statuschange-read-status)
            - [Create a Manual Placement TestCreate a Manual Placement Test](#create-a-manual-placement-testcreate-a-manual-placement-test)
            - [Create an Automated Placement TestCreate an Automated Placement Test](#create-an-automated-placement-testcreate-an-automated-placement-test)
            - [Create an Email AccountCreate an Email Account](#create-an-email-accountcreate-an-email-account)
            - [Create FoldersCreate Folders](#create-folderscreate-folders)
            - [Create Lead NoteCreate Lead Note](#create-lead-notecreate-lead-note)
            - [Create Lead TaskCreate Lead Task](#create-lead-taskcreate-lead-task)
            - [Create SubsequenceCreate Subsequence](#create-subsequencecreate-subsequence)
            - [Delete CampaignDelete Campaign](#delete-campaigndelete-campaign)
            - [Delete Campaign WebhookDelete Campaign Webhook](#delete-campaign-webhookdelete-campaign-webhook)
            - [Delete Lead By Campaign IDDelete Lead By Campaign ID](#delete-lead-by-campaign-iddelete-lead-by-campaign-id)
            - [Remove Tags from Email AccountsRemove Tags from Email Accounts](#remove-tags-from-email-accountsremove-tags-from-email-accounts)
            - [DKIM DetailsDKIM Details](#dkim-detailsdkim-details)
            - [Domain BlacklistDomain Blacklist](#domain-blacklistdomain-blacklist)
            - [Email reply headersEmail reply headers](#email-reply-headersemail-reply-headers)
            - [Capturing Email RepliesCapturing Email Replies](#capturing-email-repliescapturing-email-replies)
            - [Export data from a campaignExport data from a campaign](#export-data-from-a-campaignexport-data-from-a-campaign)
            - [Fetch all Campaigns Using Lead IDFetch all Campaigns Using Lead ID](#fetch-all-campaigns-using-lead-idfetch-all-campaigns-using-lead-id)
            - [Fetch all email accounts associated to a userFetch all email accounts associated to a user](#fetch-all-email-accounts-associated-to-a-userfetch-all-email-accounts-associated-to-a-user)
            - [[DEPRECATED] Fetch Campaign Analytics by Date range[DEPRECATED] Fetch Campaign Analytics by Date range](#deprecated-fetch-campaign-analytics-by-date-rangedeprecated-fetch-campaign-analytics-by-date-range)
            - [Fetch Campaign Mailbox StatisticsFetch Campaign Mailbox Statistics](#fetch-campaign-mailbox-statisticsfetch-campaign-mailbox-statistics)
            - [List all CampaignsList all Campaigns](#list-all-campaignslist-all-campaigns)
            - [Fetch Campaign Statistics By Campaign IDFetch Campaign Statistics By Campaign ID](#fetch-campaign-statistics-by-campaign-idfetch-campaign-statistics-by-campaign-id)
            - [Fetch campaign top level analyticsFetch campaign top level analytics](#fetch-campaign-top-level-analyticsfetch-campaign-top-level-analytics)
            - [Fetch Email Account By IDFetch Email Account By ID](#fetch-email-account-by-idfetch-email-account-by-id)
            - [Fetch Important Marked MessagesFetch Important Marked Messages](#fetch-important-marked-messagesfetch-important-marked-messages)
            - [Fetch Inbox RepliesFetch Inbox Replies](#fetch-inbox-repliesfetch-inbox-replies)
            - [Fetch Lead by email addressFetch Lead by email address](#fetch-lead-by-email-addressfetch-lead-by-email-address)
            - [Fetch Lead CategoriesFetch Lead Categories](#fetch-lead-categoriesfetch-lead-categories)
            - [Fetch Lead Message History Based on CampaignFetch Lead Message History Based on Campaign](#fetch-lead-message-history-based-on-campaignfetch-lead-message-history-based-on-campaign)
            - [Fetch Leads From Global Block ListFetch Leads From Global Block List](#fetch-leads-from-global-block-listfetch-leads-from-global-block-list)
            - [Fetch Master Inbox Lead by IDFetch Master Inbox Lead by ID](#fetch-master-inbox-lead-by-idfetch-master-inbox-lead-by-id)
            - [Fetch Messages with RemindersFetch Messages with Reminders](#fetch-messages-with-remindersfetch-messages-with-reminders)
            - [Fetch Scheduled MessagesFetch Scheduled Messages](#fetch-scheduled-messagesfetch-scheduled-messages)
            - [Fetch Snoozed MessagesFetch Snoozed Messages](#fetch-snoozed-messagesfetch-snoozed-messages)
            - [Fetch Unread RepliesFetch Unread Replies](#fetch-unread-repliesfetch-unread-replies)
            - [Fetch Untracked RepliesFetch Untracked Replies](#fetch-untracked-repliesfetch-untracked-replies)
            - [Fetch Warmup Stats By Email Account IDFetch Warmup Stats By Email Account ID](#fetch-warmup-stats-by-email-account-idfetch-warmup-stats-by-email-account-id)
            - [Fetch Webhooks By Campaign IDFetch Webhooks By Campaign ID](#fetch-webhooks-by-campaign-idfetch-webhooks-by-campaign-id)
            - [Fetched Archived MessagesFetched Archived Messages](#fetched-archived-messagesfetched-archived-messages)
            - [Geo wise reportGeo wise report](#geo-wise-reportgeo-wise-report)
            - [Get All FoldersGet All Folders](#get-all-foldersget-all-folders)
            - [Get Campaign By IdGet Campaign By Id](#get-campaign-by-idget-campaign-by-id)
            - [Get Campaign Sequence AnalyticsGet Campaign Sequence Analytics](#get-campaign-sequence-analyticsget-campaign-sequence-analytics)
            - [Get Domain ListGet Domain List](#get-domain-listget-domain-list)
            - [Get folder by IDGet folder by ID](#get-folder-by-idget-folder-by-id)
            - [Get VendorsGet Vendors](#get-vendorsget-vendors)
            - [Get Webhooks Publish SummaryGet Webhooks Publish Summary](#get-webhooks-publish-summaryget-webhooks-publish-summary)
            - [Get Follow-up Reply RateGet Follow-up Reply Rate](#get-follow-up-reply-rateget-follow-up-reply-rate)
            - [Get Lead to Reply TimeGet Lead to Reply Time](#get-lead-to-reply-timeget-lead-to-reply-time)
            - [Get Leads Take for First ReplyGet Leads Take for First Reply](#get-leads-take-for-first-replyget-leads-take-for-first-reply)
            - [Get Campaign ListGet Campaign List](#get-campaign-listget-campaign-list)
            - [Get Campaign Overall StatsGet Campaign Overall Stats](#get-campaign-overall-statsget-campaign-overall-stats)
            - [Get Campaign Response StatsGet Campaign Response Stats](#get-campaign-response-statsget-campaign-response-stats)
            - [Get Campaign Status StatsGet Campaign Status Stats](#get-campaign-status-statsget-campaign-status-stats)
            - [Get Client ListGet Client List](#get-client-listget-client-list)
            - [Get Month-wise Client CountGet Month-wise Client Count](#get-month-wise-client-countget-month-wise-client-count)
            - [Get Client Overall StatsGet Client Overall Stats](#get-client-overall-statsget-client-overall-stats)
            - [Get Day-wise Overall StatsGet Day-wise Overall Stats](#get-day-wise-overall-statsget-day-wise-overall-stats)
            - [Get Day-wise Overall Stats by Sent TimeGet Day-wise Overall Stats by Sent Time](#get-day-wise-overall-stats-by-sent-timeget-day-wise-overall-stats-by-sent-time)
            - [Get Day-wise Positive Reply StatsGet Day-wise Positive Reply Stats](#get-day-wise-positive-reply-statsget-day-wise-positive-reply-stats)
            - [Get Day-wise Positive Reply Stats by Sent TimeGet Day-wise Positive Reply Stats by Sent Time](#get-day-wise-positive-reply-stats-by-sent-timeget-day-wise-positive-reply-stats-by-sent-time)
            - [Get Lead Category-wise ResponseGet Lead Category-wise Response](#get-lead-category-wise-responseget-lead-category-wise-response)
            - [Get Lead Overall StatsGet Lead Overall Stats](#get-lead-overall-statsget-lead-overall-stats)
            - [Get Domain-wise Health MetricsGet Domain-wise Health Metrics](#get-domain-wise-health-metricsget-domain-wise-health-metrics)
            - [Get Email-Id-wise Health MetricsGet Email-Id-wise Health Metrics](#get-email-id-wise-health-metricsget-email-id-wise-health-metrics)
            - [Get Mailbox Overall StatsGet Mailbox Overall Stats](#get-mailbox-overall-statsget-mailbox-overall-stats)
            - [Get Provider-wise Overall PerformanceGet Provider-wise Overall Performance](#get-provider-wise-overall-performanceget-provider-wise-overall-performance)
            - [Get Overall StatsGet Overall Stats](#get-overall-statsget-overall-stats)
            - [Get Team Board Overall StatsGet Team Board Overall Stats](#get-team-board-overall-statsget-team-board-overall-stats)
            - [Fetch All Leads From Entire AccountFetch All Leads From Entire Account](#fetch-all-leads-from-entire-accountfetch-all-leads-from-entire-account)
            - [Spam test IP Blacklist CountSpam test IP Blacklist Count](#spam-test-ip-blacklist-countspam-test-ip-blacklist-count)
            - [IP detailsIP details](#ip-detailsip-details)
            - [Fetch Campaign Sequence By Campaign IDFetch Campaign Sequence By Campaign ID](#fetch-campaign-sequence-by-campaign-idfetch-campaign-sequence-by-campaign-id)
            - [List all leads by Campaign IDList all leads by Campaign ID](#list-all-leads-by-campaign-idlist-all-leads-by-campaign-id)
            - [List all TestsList all Tests](#list-all-testslist-all-tests)
            - [Mailbox SummaryMailbox Summary](#mailbox-summarymailbox-summary)
            - [Mailbox Count APIMailbox Count API](#mailbox-count-apimailbox-count-api)
            - [Patch campaign statusPatch campaign status](#patch-campaign-statuspatch-campaign-status)
            - [Pause Lead By Campaign IDPause Lead By Campaign ID](#pause-lead-by-campaign-idpause-lead-by-campaign-id)
            - [Fetch Messages for Email AccountFetch Messages for Email Account](#fetch-messages-for-email-accountfetch-messages-for-email-account)
            - [Bulk Fetch Messages for Multiple Email AccountsBulk Fetch Messages for Multiple Email Accounts](#bulk-fetch-messages-for-multiple-email-accountsbulk-fetch-messages-for-multiple-email-accounts)
            - [Add Tags to Email AccountsAdd Tags to Email Accounts](#add-tags-to-email-accountsadd-tags-to-email-accounts)
            - [Provider wise reportProvider wise report](#provider-wise-reportprovider-wise-report)
            - [Push Lead To SubsequencePush Lead To Subsequence](#push-lead-to-subsequencepush-lead-to-subsequence)
            - [rDNS reportrDNS report](#rdns-reportrdns-report)
            - [Reconnect failed email accountsReconnect failed email accounts](#reconnect-failed-email-accountsreconnect-failed-email-accounts)
            - [Region wise Provider IDsRegion wise Provider IDs](#region-wise-provider-idsregion-wise-provider-ids)
            - [Remove Email Account from a CampaignRemove Email Account from a Campaign](#remove-email-account-from-a-campaignremove-email-account-from-a-campaign)
            - [Reply To Lead From Master Inbox via APIReply To Lead From Master Inbox via API](#reply-to-lead-from-master-inbox-via-apireply-to-lead-from-master-inbox-via-api)
            - [Resume LeadResume Lead](#resume-leadresume-lead)
            - [Resume Lead By Campaign IDResume Lead By Campaign ID](#resume-lead-by-campaign-idresume-lead-by-campaign-id)
            - [Retrigger Failed EventsRetrigger Failed Events](#retrigger-failed-eventsretrigger-failed-events)
            - [Save Campaign SequenceSave Campaign Sequence](#save-campaign-sequencesave-campaign-sequence)
            - [Place order for mailboxesPlace order for mailboxes](#place-order-for-mailboxesplace-order-for-mailboxes)
            - [Schedule history for Automated TestsSchedule history for Automated Tests](#schedule-history-for-automated-testsschedule-history-for-automated-tests)
            - [Search DomainSearch Domain](#search-domainsearch-domain)
            - [Sender Account ListSender Account List](#sender-account-listsender-account-list)
            - [Sender Account wise reportSender Account wise report](#sender-account-wise-reportsender-account-wise-report)
            - [Set ReminderSet Reminder](#set-reminderset-reminder)
            - [Spam filter reportSpam filter report](#spam-filter-reportspam-filter-report)
            - [Spam Test DetailsSpam Test Details](#spam-test-detailsspam-test-details)
            - [BlacklistsBlacklists](#blacklistsblacklists)
            - [SPF DetailsSPF Details](#spf-detailsspf-details)
            - [Stop an Automated Smart Delivery TestStop an Automated Smart Delivery Test](#stop-an-automated-smart-delivery-teststop-an-automated-smart-delivery-test)
            - [Spam Test Email ContentSpam Test Email Content](#spam-test-email-contentspam-test-email-content)
            - [Unsubscribe Lead From All CampaignsUnsubscribe Lead From All Campaigns](#unsubscribe-lead-from-all-campaignsunsubscribe-lead-from-all-campaigns)
            - [Unsubscribe/Pause Lead From CampaignUnsubscribe/Pause Lead From Campaign](#unsubscribepause-lead-from-campaignunsubscribepause-lead-from-campaign)
            - [Update a lead’s category based on their campaignUpdate a lead’s category based on their campaign](#update-a-lead’s-category-based-on-their-campaignupdate-a-lead’s-category-based-on-their-campaign)
            - [Update Campaign General SettingsUpdate Campaign General Settings](#update-campaign-general-settingsupdate-campaign-general-settings)
            - [Update Campaign ScheduleUpdate Campaign Schedule](#update-campaign-scheduleupdate-campaign-schedule)
            - [Update Email AccountUpdate Email Account](#update-email-accountupdate-email-account)
            - [Update Lead CategoryUpdate Lead Category](#update-lead-categoryupdate-lead-category)
            - [Update Lead RevenueUpdate Lead Revenue](#update-lead-revenueupdate-lead-revenue)
            - [Update lead using the Lead IDUpdate lead using the Lead ID](#update-lead-using-the-lead-idupdate-lead-using-the-lead-id)
            - [Update Team Member To LeadUpdate Team Member To Lead](#update-team-member-to-leadupdate-team-member-to-lead)

---

## Welcome!Welcome!

Welcome to Smartlead’s Developer documentation. You’re here because you want to automate the daylights out of your outbound.

Smartlead’s API is powerful and gives you the flexibility to do almost everything you can do using the interface. You’ll find all that power in this documentation.

**So, let's goooo!**

Introduction

Welcome to Smartlead’s Developer documentation. You’re here because you want to automate the daylights out of your outbound.

Smartlead’s API is powerful and gives you the flexibility to do almost everything you can do using the interface. You’ll find all that power in this documentation.

**So, let's goooo!**


---

### AuthenticationAuthentication

### Step 1   [Skip link to Step 1](\#step-1)

Head to the settings section on your SmartLead dashboard. Click on the “Activate API button”

### Step 2   [Skip link to Step 2](\#step-2)

If your plan has API access, your API key will be provided to you there. Do not share this with anyone. This is the key that acts as an identity to your account, think of it as your username & password combined.

### Step 3   [Skip link to Step 3](\#step-3)

- All our APIs point to our dedicated domain [https://server.smartlead.ai/api/v1](https://server.smartlead.ai/api/v1)
- Using the API key from step 2, you can make requests to our system.
- You will need to attach the API key as a query string to all the requests listed below under the query parameter `?api_key=yourApiKey`

How to authenticate your API requests

### Step 1   [Skip link to Step 1](\#step-1)

Head to the settings section on your SmartLead dashboard. Click on the “Activate API button”

### Step 2   [Skip link to Step 2](\#step-2)

If your plan has API access, your API key will be provided to you there. Do not share this with anyone. This is the key that acts as an identity to your account, think of it as your username & password combined.

### Step 3   [Skip link to Step 3](\#step-3)

- All our APIs point to our dedicated domain [https://server.smartlead.ai/api/v1](https://server.smartlead.ai/api/v1)
- Using the API key from step 2, you can make requests to our system.
- You will need to attach the API key as a query string to all the requests listed below under the query parameter `?api_key=yourApiKey`


---

#### ReferencesReferences

### Campaign   [Skip link to Campaign](\#campaign)

A campaign refers to an outreach sequence you want to run to a list of leads with certain conditions.

### Lead   [Skip link to Lead](\#lead)

A lead in the API is the same as the lead in your app. They are the recipient of your email / the person you’re trying to contact. Aka the people you provide value to with the awesome products/services you have to sell to them

### Update   [Skip link to Update](\#update)

Whenever you need to update a campaign or a lead,

### Unsubscribe   [Skip link to Unsubscribe](\#unsubscribe)

When someone no longer wants to hear from you, they unsubscribe, aka the no more touchy zone.

### Lead Status   [Skip link to Lead Status](\#lead-status)

`STARTED:` The lead is scheduled to start and is yet to receive the 1st email in the sequence.
`COMPLETED:` The lead has received all the emails in the campaign.
`BLOCKED:` A lead is blocked when the email sent is bounced or if added in the global block list
`INPROGRESS:` The lead has last received at least one email in the sequence.
`PAUSED`: The lead has been paused. They are still part of campaigns but no further mails will be sent.
`STOPPED`: The lead status has been stopped, ideally meaning a reply has been received.

### Variables   [Skip link to Variables](\#variables)

`campaign_id`: You can find the campaign ID in the url of a [https://app.smartlead.ai/app/email-campaign/1764810/analytics?edit=true](https://app.smartlead.ai/app/email-campaign/1764810/analytics?edit=true) in this case 1764810

`client_id`: Go to the clients section, click on a client and in the url [https://app.smartlead.ai/app/client-views/34998](https://app.smartlead.ai/app/client-views/34998), in this case 34998

References to key terms used in this docs

### Campaign   [Skip link to Campaign](\#campaign)

A campaign refers to an outreach sequence you want to run to a list of leads with certain conditions.

### Lead   [Skip link to Lead](\#lead)

A lead in the API is the same as the lead in your app. They are the recipient of your email / the person you’re trying to contact. Aka the people you provide value to with the awesome products/services you have to sell to them

### Update   [Skip link to Update](\#update)

Whenever you need to update a campaign or a lead,

### Unsubscribe   [Skip link to Unsubscribe](\#unsubscribe)

When someone no longer wants to hear from you, they unsubscribe, aka the no more touchy zone.

### Lead Status   [Skip link to Lead Status](\#lead-status)

`STARTED:` The lead is scheduled to start and is yet to receive the 1st email in the sequence.
`COMPLETED:` The lead has received all the emails in the campaign.
`BLOCKED:` A lead is blocked when the email sent is bounced or if added in the global block list
`INPROGRESS:` The lead has last received at least one email in the sequence.
`PAUSED`: The lead has been paused. They are still part of campaigns but no further mails will be sent.
`STOPPED`: The lead status has been stopped, ideally meaning a reply has been received.

### Variables   [Skip link to Variables](\#variables)

`campaign_id`: You can find the campaign ID in the url of a [https://app.smartlead.ai/app/email-campaign/1764810/analytics?edit=true](https://app.smartlead.ai/app/email-campaign/1764810/analytics?edit=true) in this case 1764810

`client_id`: Go to the clients section, click on a client and in the url [https://app.smartlead.ai/app/client-views/34998](https://app.smartlead.ai/app/client-views/34998), in this case 34998


---

##### Rate LimitsRate Limits

Smartlead offers an extremely flexible API infrastructure to help you automate your entire outbound email marketing system truly.

Smartlead has only 1 core Rate Limit:

**60 requests Per 60 seconds per API key.**

The `response headers` of GET requests will contain your pending limit, so you can auto-adjust your request frequency, look out for these 3 fields in the response headers:

- x-ratelimit-limit (will show 60 requests)
- x-ratelimit-remaining (how many requests left for the current 60s window)
- x-ratelimit-reset (when the next reset happens)

For uploading leads, you can batch leads upto **350 leads per upload** allowing you to add 21k leads per minute.

This will be improved to accommodate for more.

Integration partners can reach out for custom limits.

Smartlead offers an extremely flexible API infrastructure to help you automate your entire outbound email marketing system truly.

Smartlead has only 1 core Rate Limit:

**60 requests Per 60 seconds per API key.**

The `response headers` of GET requests will contain your pending limit, so you can auto-adjust your request frequency, look out for these 3 fields in the response headers:

- x-ratelimit-limit (will show 60 requests)
- x-ratelimit-remaining (how many requests left for the current 60s window)
- x-ratelimit-reset (when the next reset happens)

For uploading leads, you can batch leads upto **350 leads per upload** allowing you to add 21k leads per minute.

This will be improved to accommodate for more.

Integration partners can reach out for custom limits.


---

###### Create CampaignCreate Campaign

This endpoint creates a campaign


---

###### Add Client To System (Whitelabel or not)Add Client To System (Whitelabel or not)

> 📘
>
> ### To provide full access permission set →   [Skip link to To provide full access permission set  →](\#to-provide-full-access-permission-set--)
>
> "permission": \[ "full\_access" \]

This endpoint lets you add new clients to your system

> 📘
>
> ### To provide full access permission set →   [Skip link to To provide full access permission set  →](\#to-provide-full-access-permission-set--)
>
> "permission": \[ "full\_access" \]


---

###### Add Email Account to a CampaignAdd Email Account to a Campaign

This endpoint lets you add an email account to a campaign


---

###### Add Lead/Domain to Global Block ListAdd Lead/Domain to Global Block List

This endpoint adds a lead/domain to the global block list


---

###### Add leads to a campaign by IDAdd leads to a campaign by ID

This endpoint adds leads to a campaign using the campaign’s ID


---

###### Add / Update Campaign WebhookAdd / Update Campaign Webhook

This endpoint add’s a webhook to a campaign or alternatively lets you update a webhook


---

###### Add/Update Warmup To Email AccountAdd/Update Warmup To Email Account

This endpoint lets you add / update the warmup settings to an email account


---

###### Auto-generate-mailboxesAuto-generate-mailboxes

This API will auto-generate the mailboxes based on the domain name entered.


---

###### Block DomainsBlock Domains

Add domains to the global block list


---

###### Change Read StatusChange Read Status

Mark a lead as having unread emails


---

###### Create a Manual Placement TestCreate a Manual Placement Test

To create an Manual placement test using Smartlead mailboxes using Smart Delivery, you can use this below POST request with all the required details. This will create and run the Manual spam/placement test.


---

###### Create an Automated Placement TestCreate an Automated Placement Test

To create an Automated placement test using Smart Delivery, you can use this below POST request with all the required details. This will create and run the automated spam test.


---

###### Create an Email AccountCreate an Email Account

This endpoint creates/updates a specific email account based on the id provided in the JSON body


---

###### Create FoldersCreate Folders

Create a folder in Smart Delivery and add tests to it to organise your test list better.


---

###### Create Lead NoteCreate Lead Note

Create a new note for a lead


---

###### Create Lead TaskCreate Lead Task

Create a new task for a lead


---

###### Create SubsequenceCreate Subsequence

Use this endpoint to create subsequences


---

###### Delete CampaignDelete Campaign

This endpoint deletes the campaigns in your account


---

###### Delete Campaign WebhookDelete Campaign Webhook

This endpoint deletes a webhook from a campaign


---

###### Delete Lead By Campaign IDDelete Lead By Campaign ID

This endpoint deletes a lead from a campaign based on the lead and campaign ID


---

###### Remove Tags from Email AccountsRemove Tags from Email Accounts

Remove tag associations from email accounts. The API will delete tag mappings for each email account and tag combination.
If a mapping doesn't exist, it will be skipped.


---

###### DKIM DetailsDKIM Details

Authentication - Pass or Fail. Note DKIM for the same sender mailbox can Pass for few reciever accounts and Fail for some due to several reasons, listed in our Help Centre Articles.


---

###### Domain BlacklistDomain Blacklist

This GET request will retrieve the list of all the blacklisted links within your email content


---

###### Email reply headersEmail reply headers

Details of the email headers for each email.


---

###### Capturing Email RepliesCapturing Email Replies

## Overview   [Skip link to Overview](\#overview)

When an email sent through SmartLead receives a reply, our system triggers a webhook notification containing detailed information about the correspondence. With our enhanced webhook system, you can now accurately track replies from different contacts within the same organization.

## Use Cases   [Skip link to Use Cases](\#use-cases)

- **Account-Based Marketing**: Accurately track all stakeholders who engage with your campaigns
- **CRM Integration**: Update contact records with precise engagement data
- **Follow-up Automation**: Create personalized follow-up sequences based on who actually responded
- **Analytics**: Generate accurate response attribution reports
- **Team Collaboration**: Route responses to the appropriate team members based on who replied

## Webhook Payload   [Skip link to Webhook Payload](\#webhook-payload)

Below is an example of our enhanced webhook payload structure:

JSON

```rdmd-code lang- theme-light
{
  "campaign_status": "COMPLETED",
  "stats_id": "a891fe37-c45d-21e8-67ba-fcd44e9c33a8",
  "sl_email_lead_id": "1482956",
  "sl_email_lead_map_id": 1438627,
  "sl_lead_email": "[email protected]",
  "from_email": "[email protected]",
  "cc_emails": [],
  "subject": "Some more conversions?",
  "to_email": "[email protected]",
  "to_name": "James Parker",
  "time_replied": "2025-03-28T09:35:01+00:00",
  "event_timestamp": "2025-03-28T09:35:01+00:00",
  "message_id": "<BDD5kUwc77maSjLRv2gmq35VkzEF9K4L3csPPCVx8e5kWbUnrsD@mail.gmail.com>",
  "preview_text": "webhook reply\n",
  "campaign_name": "email sent",
  "campaign_id": 9181,
  "sequence_number": 1,
  "secret_key": "4f7c8d23-a619-58c2-93g6-72936ee16f38",
  "app_url": "https://app.smartlead.ai/app/master-inbox?leadMap=1438627",
  "ui_master_inbox_link": "https://app.smartlead.ai/app/master-inbox?leadMap=1438627",
  "description": "[email protected] replied to Email 1 for campaign - email sent ",
  "metadata": {
    "webhook_created_at": "2025-03-28T08:14:40.843Z"
  },

  // NEW: Enhanced Lead Correspondence Information
  "leadCorrespondence": {
    "targetLeadEmail": "[email protected]",  // Original recipient
    "replyReceivedFrom": "[email protected]",      // Actual responder
    "repliedCompanyDomain": "DifferentCompany"       // Domain relationship
  },

  "webhook_url": "https://webhook.site/35def789-4c28-3951-ef12-7abc9d3254cd",
  "webhook_id": 799,
  "webhook_name": "user",
  "event_type": "EMAIL_REPLY"
}
```

## Key Changes in the Webhook Payload   [Skip link to Key Changes in the Webhook Payload](\#key-changes-in-the-webhook-payload)

The most significant enhancement to our webhook system is the addition of the `leadCorrespondence` object, which contains the following properties:

| Property | Description |
| --- | --- |
| `targetLeadEmail` | The email address of the original recipient who was targeted in your campaign |
| `replyReceivedFrom` | The email address of the actual person who replied to your email |
| `repliedCompanyDomain` | Indicates the relationship between the responder and the original recipient. Values can be "SameCompany", "DifferentCompany", or "Unknown" |

## Response Scenarios   [Skip link to Response Scenarios](\#response-scenarios)

Our enhanced webhook system can now accurately handle various response scenarios:

### Scenario 1: Direct Reply   [Skip link to Scenario 1: Direct Reply](\#scenario-1-direct-reply)

When the original recipient replies directly to your email, both `targetLeadEmail` and `replyReceivedFrom` will contain the same email address.

### Scenario 2: Colleague Reply (Same Company)   [Skip link to Scenario 2: Colleague Reply (Same Company)](\#scenario-2-colleague-reply-same-company)

When a different person from the same company replies to your email, the webhook will:

- Identify the original recipient in `targetLeadEmail`
- Identify the actual responder in `replyReceivedFrom`
- Set `repliedCompanyDomain` to "SameCompany"

### Scenario 3: Different Company Reply   [Skip link to Scenario 3: Different Company Reply](\#scenario-3-different-company-reply)

When a person from a different company replies (perhaps due to email forwarding), the webhook will:

- Identify the original recipient in `targetLeadEmail`
- Identify the actual responder in `replyReceivedFrom`
- Set `repliedCompanyDomain` to "DifferentCompany"

## Implementation Steps   [Skip link to Implementation Steps](\#implementation-steps)

To leverage this enhanced webhook functionality:

1. **Update Webhook Endpoints**: Ensure your webhook endpoint is prepared to process the additional `leadCorrespondence` object
2. **Modify Your Integration Logic**: Update your code to check who actually replied to your emails
3. **Enhance Your Follow-up Logic**: Create more personalized follow-ups based on who responded
4. **Update Your Analytics**: Include the actual responder in your attribution reporting

## Backward Compatibility   [Skip link to Backward Compatibility](\#backward-compatibility)

For existing integrations, all previous webhook fields remain unchanged. The new `leadCorrespondence` object is simply an addition to the payload. This ensures all existing integrations will continue to function without modification.

## Error Handling   [Skip link to Error Handling](\#error-handling)

Our enhanced webhook system includes improved email parsing logic to handle various email clients and reply formats. In cases where the responder cannot be confidently determined, the system will default to the original recipient information but will indicate this in the `repliedCompanyDomain` value as "Unknown".

## Testing Your Integration   [Skip link to Testing Your Integration](\#testing-your-integration)

We recommend testing your webhook integration with various response scenarios:

1. Direct replies from the original recipient
2. Replies from colleagues of the original recipient
3. Replies from email forwards to different companies
4. Replies with unusual formatting or from different email clients

This guide explains how to use SmartLead's enhanced Email Reply Webhooks to track replies from multiple email IDs

## Overview   [Skip link to Overview](\#overview)

When an email sent through SmartLead receives a reply, our system triggers a webhook notification containing detailed information about the correspondence. With our enhanced webhook system, you can now accurately track replies from different contacts within the same organization.

## Use Cases   [Skip link to Use Cases](\#use-cases)

- **Account-Based Marketing**: Accurately track all stakeholders who engage with your campaigns
- **CRM Integration**: Update contact records with precise engagement data
- **Follow-up Automation**: Create personalized follow-up sequences based on who actually responded
- **Analytics**: Generate accurate response attribution reports
- **Team Collaboration**: Route responses to the appropriate team members based on who replied

## Webhook Payload   [Skip link to Webhook Payload](\#webhook-payload)

Below is an example of our enhanced webhook payload structure:

JSON

```rdmd-code lang- theme-light
{
  "campaign_status": "COMPLETED",
  "stats_id": "a891fe37-c45d-21e8-67ba-fcd44e9c33a8",
  "sl_email_lead_id": "1482956",
  "sl_email_lead_map_id": 1438627,
  "sl_lead_email": "[email protected]",
  "from_email": "[email protected]",
  "cc_emails": [],
  "subject": "Some more conversions?",
  "to_email": "[email protected]",
  "to_name": "James Parker",
  "time_replied": "2025-03-28T09:35:01+00:00",
  "event_timestamp": "2025-03-28T09:35:01+00:00",
  "message_id": "<BDD5kUwc77maSjLRv2gmq35VkzEF9K4L3csPPCVx8e5kWbUnrsD@mail.gmail.com>",
  "preview_text": "webhook reply\n",
  "campaign_name": "email sent",
  "campaign_id": 9181,
  "sequence_number": 1,
  "secret_key": "4f7c8d23-a619-58c2-93g6-72936ee16f38",
  "app_url": "https://app.smartlead.ai/app/master-inbox?leadMap=1438627",
  "ui_master_inbox_link": "https://app.smartlead.ai/app/master-inbox?leadMap=1438627",
  "description": "[email protected] replied to Email 1 for campaign - email sent ",
  "metadata": {
    "webhook_created_at": "2025-03-28T08:14:40.843Z"
  },

  // NEW: Enhanced Lead Correspondence Information
  "leadCorrespondence": {
    "targetLeadEmail": "[email protected]",  // Original recipient
    "replyReceivedFrom": "[email protected]",      // Actual responder
    "repliedCompanyDomain": "DifferentCompany"       // Domain relationship
  },

  "webhook_url": "https://webhook.site/35def789-4c28-3951-ef12-7abc9d3254cd",
  "webhook_id": 799,
  "webhook_name": "user",
  "event_type": "EMAIL_REPLY"
}
```

## Key Changes in the Webhook Payload   [Skip link to Key Changes in the Webhook Payload](\#key-changes-in-the-webhook-payload)

The most significant enhancement to our webhook system is the addition of the `leadCorrespondence` object, which contains the following properties:

| Property | Description |
| --- | --- |
| `targetLeadEmail` | The email address of the original recipient who was targeted in your campaign |
| `replyReceivedFrom` | The email address of the actual person who replied to your email |
| `repliedCompanyDomain` | Indicates the relationship between the responder and the original recipient. Values can be "SameCompany", "DifferentCompany", or "Unknown" |

## Response Scenarios   [Skip link to Response Scenarios](\#response-scenarios)

Our enhanced webhook system can now accurately handle various response scenarios:

### Scenario 1: Direct Reply   [Skip link to Scenario 1: Direct Reply](\#scenario-1-direct-reply)

When the original recipient replies directly to your email, both `targetLeadEmail` and `replyReceivedFrom` will contain the same email address.

### Scenario 2: Colleague Reply (Same Company)   [Skip link to Scenario 2: Colleague Reply (Same Company)](\#scenario-2-colleague-reply-same-company)

When a different person from the same company replies to your email, the webhook will:

- Identify the original recipient in `targetLeadEmail`
- Identify the actual responder in `replyReceivedFrom`
- Set `repliedCompanyDomain` to "SameCompany"

### Scenario 3: Different Company Reply   [Skip link to Scenario 3: Different Company Reply](\#scenario-3-different-company-reply)

When a person from a different company replies (perhaps due to email forwarding), the webhook will:

- Identify the original recipient in `targetLeadEmail`
- Identify the actual responder in `replyReceivedFrom`
- Set `repliedCompanyDomain` to "DifferentCompany"

## Implementation Steps   [Skip link to Implementation Steps](\#implementation-steps)

To leverage this enhanced webhook functionality:

1. **Update Webhook Endpoints**: Ensure your webhook endpoint is prepared to process the additional `leadCorrespondence` object
2. **Modify Your Integration Logic**: Update your code to check who actually replied to your emails
3. **Enhance Your Follow-up Logic**: Create more personalized follow-ups based on who responded
4. **Update Your Analytics**: Include the actual responder in your attribution reporting

## Backward Compatibility   [Skip link to Backward Compatibility](\#backward-compatibility)

For existing integrations, all previous webhook fields remain unchanged. The new `leadCorrespondence` object is simply an addition to the payload. This ensures all existing integrations will continue to function without modification.

## Error Handling   [Skip link to Error Handling](\#error-handling)

Our enhanced webhook system includes improved email parsing logic to handle various email clients and reply formats. In cases where the responder cannot be confidently determined, the system will default to the original recipient information but will indicate this in the `repliedCompanyDomain` value as "Unknown".

## Testing Your Integration   [Skip link to Testing Your Integration](\#testing-your-integration)

We recommend testing your webhook integration with various response scenarios:

1. Direct replies from the original recipient
2. Replies from colleagues of the original recipient
3. Replies from email forwards to different companies
4. Replies with unusual formatting or from different email clients


---

###### Export data from a campaignExport data from a campaign

This endpoint returns a CSV file of all leads from a campaign using the campaign’s ID


---

###### Fetch all Campaigns Using Lead IDFetch all Campaigns Using Lead ID

This endpoint lets you fetch all the campaigns a Lead belongs to using the Lead ID


---

###### Fetch all email accounts associated to a userFetch all email accounts associated to a user

This endpoint fetches all the email accounts used for sending emails to leads in the campaign


---

###### [DEPRECATED] Fetch Campaign Analytics by Date range[DEPRECATED] Fetch Campaign Analytics by Date range

Use the Global Analytics endpoints at the bottom of the application

This endpoint fetches campaign-specific analytics for a specified date range

Use the Global Analytics endpoints at the bottom of the application


---

###### Fetch Campaign Mailbox StatisticsFetch Campaign Mailbox Statistics

This endpoint fetches Mailbox statistics specific to a campaign


---

###### List all CampaignsList all Campaigns

This endpoint fetches all the campaigns in your account


---

###### Fetch Campaign Statistics By Campaign IDFetch Campaign Statistics By Campaign ID

This endpoint fetches campaign statistics using the campaign’s ID


---

###### Fetch campaign top level analyticsFetch campaign top level analytics

This endpoint returns a campaigns top level analytics


---

###### Fetch Email Account By IDFetch Email Account By ID

This endpoint gets all email details by Account ID


---

###### Fetch Important Marked MessagesFetch Important Marked Messages

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

Use this endpoint to fetch all importnant messages in your master inbox

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)


---

###### Fetch Inbox RepliesFetch Inbox Replies

### Response Object Fields Explained

| Field Name | Description |
| --- | --- |
| lead\_category\_id | Category classification ID for the lead |
| last\_sent\_time | Timestamp of the most recent email sent to this lead |
| last\_reply\_time | Timestamp of the most recent reply received from this lead |
| has\_new\_unread\_email | Boolean indicating if there are new unread emails from this lead |
| email\_account\_id | ID of the email account used to contact this lead |
| revenue | Monetary value associated with this lead |
| is\_pushed\_to\_sub\_sequence | Boolean indicating if lead was moved to a sub-sequence |
| lead\_first\_name | First name of the lead contact |
| lead\_last\_name | Last name of the lead contact |
| lead\_email | Email address of the lead |
| email\_lead\_id | Unique identifier for the lead record |
| email\_lead\_map\_id | Unique identifier for the lead-campaign mapping |
| lead\_status | Current status of the lead (INPROGRESS, COMPLETED, etc.) |
| current\_sequence\_number | Current position in the email sequence |
| sub\_sequence\_id | ID of sub-sequence if applicable |
| old\_replaced\_lead\_data | Previous lead information if lead was replaced |
| lead\_next\_timestamp\_to\_send | Scheduled time for next email to this lead |
| email\_campaign\_seq\_id | Current sequence step ID |
| is\_important | Boolean indicating if lead is marked as important |
| is\_archived | Boolean indicating if lead is archived |
| is\_snoozed | Boolean indicating if lead is snoozed |
| team\_member\_id | ID of team member assigned to this lead |
| is\_ooo\_automated\_push\_lead | Boolean indicating if lead was auto-pushed due to out-of-office |
| email\_campaign\_id | ID of the email campaign |
| email\_campaign\_name | Name of the email campaign |
| client\_id | ID of the client this lead belongs to |
| belongs\_to\_sub\_sequence | Boolean indicating if this lead is part of a sub-sequence |
| campaign\_sending\_schedule | Schedule configuration for the campaign |
| sequence\_count | Total number of sequences in the campaign |

### Email History Response Object Explanations

| Field Name | Description |
| --- | --- |
| stats\_id | Unique identifier for the email statistics record, used for [replying to a lead](https://api.smartlead.ai/reference/reply-to-lead-from-master-inbox-via-api#/) |
| from | Sender email address |
| to | Recipient email address |
| type | Email type (SENT or REPLY) |
| message\_id | Unique message identifier |
| time | Timestamp of the email |
| email\_body | Content of the email |
| subject | Email subject line (for sent emails) |
| email\_seq\_number | Sequence number in the campaign |
| open\_count | Number of times email was opened (for sent emails) |
| click\_count | Number of clicks in the email (for sent emails) |
| click\_details | Details about clicks (for sent emails) |
| cc | Carbon copy recipients (for replies) |

Retrieve all leads that have replied to email campaigns

### Response Object Fields Explained

| Field Name | Description |
| --- | --- |
| lead\_category\_id | Category classification ID for the lead |
| last\_sent\_time | Timestamp of the most recent email sent to this lead |
| last\_reply\_time | Timestamp of the most recent reply received from this lead |
| has\_new\_unread\_email | Boolean indicating if there are new unread emails from this lead |
| email\_account\_id | ID of the email account used to contact this lead |
| revenue | Monetary value associated with this lead |
| is\_pushed\_to\_sub\_sequence | Boolean indicating if lead was moved to a sub-sequence |
| lead\_first\_name | First name of the lead contact |
| lead\_last\_name | Last name of the lead contact |
| lead\_email | Email address of the lead |
| email\_lead\_id | Unique identifier for the lead record |
| email\_lead\_map\_id | Unique identifier for the lead-campaign mapping |
| lead\_status | Current status of the lead (INPROGRESS, COMPLETED, etc.) |
| current\_sequence\_number | Current position in the email sequence |
| sub\_sequence\_id | ID of sub-sequence if applicable |
| old\_replaced\_lead\_data | Previous lead information if lead was replaced |
| lead\_next\_timestamp\_to\_send | Scheduled time for next email to this lead |
| email\_campaign\_seq\_id | Current sequence step ID |
| is\_important | Boolean indicating if lead is marked as important |
| is\_archived | Boolean indicating if lead is archived |
| is\_snoozed | Boolean indicating if lead is snoozed |
| team\_member\_id | ID of team member assigned to this lead |
| is\_ooo\_automated\_push\_lead | Boolean indicating if lead was auto-pushed due to out-of-office |
| email\_campaign\_id | ID of the email campaign |
| email\_campaign\_name | Name of the email campaign |
| client\_id | ID of the client this lead belongs to |
| belongs\_to\_sub\_sequence | Boolean indicating if this lead is part of a sub-sequence |
| campaign\_sending\_schedule | Schedule configuration for the campaign |
| sequence\_count | Total number of sequences in the campaign |

### Email History Response Object Explanations

| Field Name | Description |
| --- | --- |
| stats\_id | Unique identifier for the email statistics record, used for [replying to a lead](https://api.smartlead.ai/reference/reply-to-lead-from-master-inbox-via-api#/) |
| from | Sender email address |
| to | Recipient email address |
| type | Email type (SENT or REPLY) |
| message\_id | Unique message identifier |
| time | Timestamp of the email |
| email\_body | Content of the email |
| subject | Email subject line (for sent emails) |
| email\_seq\_number | Sequence number in the campaign |
| open\_count | Number of times email was opened (for sent emails) |
| click\_count | Number of clicks in the email (for sent emails) |
| click\_details | Details about clicks (for sent emails) |
| cc | Carbon copy recipients (for replies) |


---

###### Fetch Lead by email addressFetch Lead by email address

This endpoint fetches a lead’s data using the email address


---

###### Fetch Lead CategoriesFetch Lead Categories

This endpoint fetches all your categories


---

###### Fetch Lead Message History Based on CampaignFetch Lead Message History Based on Campaign

This endpoint returns an array containing the entire message history of a lead specific to a campaign (Same data as in the master inbox)


---

###### Fetch Leads From Global Block ListFetch Leads From Global Block List

This endpoint gets a lead/domain from the global block list


---

###### Fetch Master Inbox Lead by IDFetch Master Inbox Lead by ID

### Response Object Fields Explained

| Field Name | Description |
| --- | --- |
| lead\_category\_id | Category classification ID for the lead |
| last\_sent\_time | Timestamp of the most recent email sent to this lead |
| last\_reply\_time | Timestamp of the most recent reply received from this lead |
| has\_new\_unread\_email | Boolean indicating if there are new unread emails from this lead |
| email\_account\_id | ID of the email account used to contact this lead |
| revenue | Monetary value associated with this lead |
| is\_pushed\_to\_sub\_sequence | Boolean indicating if lead was moved to a sub-sequence |
| lead\_first\_name | First name of the lead contact |
| lead\_last\_name | Last name of the lead contact |
| lead\_email | Email address of the lead |
| email\_lead\_id | Unique identifier for the lead record |
| email\_lead\_map\_id | Unique identifier for the lead-campaign mapping |
| lead\_status | Current status of the lead (INPROGRESS, COMPLETED, etc.) |
| current\_sequence\_number | Current position in the email sequence |
| sub\_sequence\_id | ID of sub-sequence if applicable |
| old\_replaced\_lead\_data | Previous lead information if lead was replaced |
| lead\_next\_timestamp\_to\_send | Scheduled time for next email to this lead |
| email\_campaign\_seq\_id | Current sequence step ID |
| is\_important | Boolean indicating if lead is marked as important |
| is\_archived | Boolean indicating if lead is archived |
| is\_snoozed | Boolean indicating if lead is snoozed |
| team\_member\_id | ID of team member assigned to this lead |
| is\_ooo\_automated\_push\_lead | Boolean indicating if lead was auto-pushed due to out-of-office |
| email\_campaign\_id | ID of the email campaign |
| email\_campaign\_name | Name of the email campaign |
| client\_id | ID of the client this lead belongs to |
| belongs\_to\_sub\_sequence | Boolean indicating if this lead is part of a sub-sequence |
| campaign\_sending\_schedule | Schedule configuration for the campaign |
| sequence\_count | Total number of sequences in the campaign |

Retrieve a specific lead from the master inbox using its ID

### Response Object Fields Explained

| Field Name | Description |
| --- | --- |
| lead\_category\_id | Category classification ID for the lead |
| last\_sent\_time | Timestamp of the most recent email sent to this lead |
| last\_reply\_time | Timestamp of the most recent reply received from this lead |
| has\_new\_unread\_email | Boolean indicating if there are new unread emails from this lead |
| email\_account\_id | ID of the email account used to contact this lead |
| revenue | Monetary value associated with this lead |
| is\_pushed\_to\_sub\_sequence | Boolean indicating if lead was moved to a sub-sequence |
| lead\_first\_name | First name of the lead contact |
| lead\_last\_name | Last name of the lead contact |
| lead\_email | Email address of the lead |
| email\_lead\_id | Unique identifier for the lead record |
| email\_lead\_map\_id | Unique identifier for the lead-campaign mapping |
| lead\_status | Current status of the lead (INPROGRESS, COMPLETED, etc.) |
| current\_sequence\_number | Current position in the email sequence |
| sub\_sequence\_id | ID of sub-sequence if applicable |
| old\_replaced\_lead\_data | Previous lead information if lead was replaced |
| lead\_next\_timestamp\_to\_send | Scheduled time for next email to this lead |
| email\_campaign\_seq\_id | Current sequence step ID |
| is\_important | Boolean indicating if lead is marked as important |
| is\_archived | Boolean indicating if lead is archived |
| is\_snoozed | Boolean indicating if lead is snoozed |
| team\_member\_id | ID of team member assigned to this lead |
| is\_ooo\_automated\_push\_lead | Boolean indicating if lead was auto-pushed due to out-of-office |
| email\_campaign\_id | ID of the email campaign |
| email\_campaign\_name | Name of the email campaign |
| client\_id | ID of the client this lead belongs to |
| belongs\_to\_sub\_sequence | Boolean indicating if this lead is part of a sub-sequence |
| campaign\_sending\_schedule | Schedule configuration for the campaign |
| sequence\_count | Total number of sequences in the campaign |


---

###### Fetch Messages with RemindersFetch Messages with Reminders

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

The only difference to the POST body for `sortBy`

Use the following for your sorting \['REMINDER\_TIME\_DESC', 'REMINDER\_TIME\_ASC'\]

Use this endpoint to fetch all messages with reminders in your master inbox

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

The only difference to the POST body for `sortBy`

Use the following for your sorting \['REMINDER\_TIME\_DESC', 'REMINDER\_TIME\_ASC'\]


---

###### Fetch Scheduled MessagesFetch Scheduled Messages

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

The only difference to the POST body for sortBy

Use the following for your sorting \['SCHEDULED\_TIME\_DESC', 'SCHEDULED\_TIME\_ASC''\]

Use this endpoint to fetch all scheduled messages in your master inbox

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

The only difference to the POST body for sortBy

Use the following for your sorting \['SCHEDULED\_TIME\_DESC', 'SCHEDULED\_TIME\_ASC''\]


---

###### Fetch Snoozed MessagesFetch Snoozed Messages

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

Use this endpoint to fetch all snoozed messages in your master inbox

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)


---

###### Fetch Unread RepliesFetch Unread Replies

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

Use this endpoint to fetch all unread replies in your master inbox

All params, queries, and body objects are exactly the same as Inbox Replies

which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)


---

###### Fetch Untracked RepliesFetch Untracked Replies

Retrieve all untracked replies across all mailboxes connected to your instance


---

###### Fetch Warmup Stats By Email Account IDFetch Warmup Stats By Email Account ID

This endpoint fetches stats for the last 7 days by the email account ID


---

###### Fetch Webhooks By Campaign IDFetch Webhooks By Campaign ID

## Possible webhook event types   [Skip link to Possible webhook event types](\#possible-webhook-event-types)

`WEBHOOK_EVENT_TYPE: {     EMAIL_SENT: 'EMAIL_SENT',     EMAIL_OPEN: 'EMAIL_OPEN',     EMAIL_LINK_CLICK: 'EMAIL_LINK_CLICK',     EMAIL_REPLY: 'EMAIL_REPLY',     LEAD_UNSUBSCRIBED: 'LEAD_UNSUBSCRIBED',     LEAD_CATEGORY_UPDATED: 'LEAD_CATEGORY_UPDATED'   }`

This endpoint lets fetch all the webhooks associated to a campaign using the campaign ID

## Possible webhook event types   [Skip link to Possible webhook event types](\#possible-webhook-event-types)

`WEBHOOK_EVENT_TYPE: {     EMAIL_SENT: 'EMAIL_SENT',     EMAIL_OPEN: 'EMAIL_OPEN',     EMAIL_LINK_CLICK: 'EMAIL_LINK_CLICK',     EMAIL_REPLY: 'EMAIL_REPLY',     LEAD_UNSUBSCRIBED: 'LEAD_UNSUBSCRIBED',     LEAD_CATEGORY_UPDATED: 'LEAD_CATEGORY_UPDATED'   }`


---

###### Fetched Archived MessagesFetched Archived Messages

All params, queries, and body objects are exactly the same as Inbox Replies

Which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)

Use this endpoint to fetch all archived messages in your master inbox

All params, queries, and body objects are exactly the same as Inbox Replies

Which you can reference here [https://api.smartlead.ai/reference/fetch-inbox-replies](/reference/fetch-inbox-replies)


---

###### Geo wise reportGeo wise report

This will display the results of the test, sorted as per the location. This view will show the breakdown of how your email performed across a particular region or country. This is useful if you are targeting a particular country.


---

###### Get All FoldersGet All Folders

Gets the list and details of all the folders created inside Smart Delivery. It will also show all the tests inside the folder.


---

###### Get Campaign By IdGet Campaign By Id

This endpoint fetches a campaign based on its ID


---

###### Get Campaign Sequence AnalyticsGet Campaign Sequence Analytics

Retrieves analytics data for a specific email campaign sequence, including sent count, open count, click count, and other engagement metrics.


---

###### Get Domain ListGet Domain List

Get the list of domains purchased through SmartSenders


---

###### Get folder by IDGet folder by ID

Find a folder using the ID


---

###### Get VendorsGet Vendors

This will return all the active vendors with the corresponding ID


---

###### Get Webhooks Publish SummaryGet Webhooks Publish Summary

This endpoint provides a summary of webhook publish statuses for a specific Smartlead campaign. You can view the number of events sent, broken down by event type, as well as the counts for successful, failed, scheduled for retry, and retroactively failed events. Additional pertinent information is also included.


---

###### Get Follow-up Reply RateGet Follow-up Reply Rate

Get follow-up reply rate statistics for campaigns.


---

###### Get Lead to Reply TimeGet Lead to Reply Time

The median and average time between contacting leads after getting their first reply


---

###### Get Leads Take for First ReplyGet Leads Take for First Reply

Get statistics on how many leads it takes to get the first reply.


---

###### Get Campaign ListGet Campaign List

Retrieve a list of all campaigns for analytics purposes.


---

###### Get Campaign Overall StatsGet Campaign Overall Stats

Get comprehensive performance metrics for campaigns within a date range.


---

###### Get Campaign Response StatsGet Campaign Response Stats

Get detailed response statistics for campaigns.


---

###### Get Campaign Status StatsGet Campaign Status Stats

Get campaign status statistics.


---

###### Get Client ListGet Client List

Retrieve a list of all clients for analytics purposes.


---

###### Get Month-wise Client CountGet Month-wise Client Count

Get month-wise client count statistics.


---

###### Get Client Overall StatsGet Client Overall Stats

Get comprehensive performance metrics for clients within a date range.


---

###### Get Day-wise Overall StatsGet Day-wise Overall Stats

Get day-wise overall statistics for the specified date range.


---

###### Get Day-wise Overall Stats by Sent TimeGet Day-wise Overall Stats by Sent Time

Get day-wise overall statistics grouped by sent time for the specified date range.
This endpoint provides comprehensive analytics data including sent, opened, replied,
bounced, and unsubscribed counts, all grouped by the date when emails were sent.


---

###### Get Day-wise Positive Reply StatsGet Day-wise Positive Reply Stats

Get day-wise positive reply statistics for the specified date range.


---

###### Get Day-wise Positive Reply Stats by Sent TimeGet Day-wise Positive Reply Stats by Sent Time

Get day-wise positive reply statistics grouped by sent time for the specified date range.
This endpoint provides data on positive replies based on lead sentiment analysis,
grouped by the date when emails were originally sent.


---

###### Get Lead Category-wise ResponseGet Lead Category-wise Response

Get lead responses categorized by different response types.


---

###### Get Lead Overall StatsGet Lead Overall Stats

Get overall lead statistics.


---

###### Get Domain-wise Health MetricsGet Domain-wise Health Metrics

Get domain-wise health metrics for mailboxes.


---

###### Get Email-Id-wise Health MetricsGet Email-Id-wise Health Metrics

Get name-wise health metrics for mailboxes.


---

###### Get Mailbox Overall StatsGet Mailbox Overall Stats

Get overall mailbox statistics.


---

###### Get Provider-wise Overall PerformanceGet Provider-wise Overall Performance

Get provider-wise overall performance metrics for mailboxes.


---

###### Get Overall StatsGet Overall Stats

Get comprehensive overall statistics with enhanced features.


---

###### Get Team Board Overall StatsGet Team Board Overall Stats

Get team board overall statistics.


---

###### Fetch All Leads From Entire AccountFetch All Leads From Entire Account

This endpoint fetches all the leads in your account.


---

###### Spam test IP Blacklist CountSpam test IP Blacklist Count

Total Blacklist count identified in the test


---

###### IP detailsIP details

The list of all the blacklists per IP.


---

###### Fetch Campaign Sequence By Campaign IDFetch Campaign Sequence By Campaign ID

This endpoint fetches a campaign’s sequence data


---

###### List all leads by Campaign IDList all leads by Campaign ID

This endpoint fetches all the leads in a campaign using the campaign’s ID


---

###### List all TestsList all Tests

This will provide the list of all the tests. The list will either be all manual tests or all automated tests, based on query param.


---

###### Mailbox SummaryMailbox Summary

The list of the mailboxes used for any Smart Delivery Test, along with the overall performance across all tests.


---

###### Mailbox Count APIMailbox Count API

Shows the count of all the Mailboxes that were used for any Spam test.


---

###### Patch campaign statusPatch campaign status

This endpoint changes the status of a campaign


---

###### Pause Lead By Campaign IDPause Lead By Campaign ID

This endpoint pauses a lead from a campaign based on the lead and campaign ID


---

###### Fetch Messages for Email AccountFetch Messages for Email Account

Fetches recent messages from the mailbox of a given email account. Proxies the request directly to the mailbox


---

###### Bulk Fetch Messages for Multiple Email AccountsBulk Fetch Messages for Multiple Email Accounts

Bulk fetch variant of

[https://api.smartlead.ai/update/reference/post\_email-accounts-account-id-fetch-messages#/](https://api.smartlead.ai/update/reference/post_email-accounts-account-id-fetch-messages#/)

Fetches recent messages from multiple email account mailboxes in parallel. Processes up to 10 accounts per request with individual success/failure tracking.

Bulk fetch variant of

[https://api.smartlead.ai/update/reference/post\_email-accounts-account-id-fetch-messages#/](https://api.smartlead.ai/update/reference/post_email-accounts-account-id-fetch-messages#/)


---

###### Add Tags to Email AccountsAdd Tags to Email Accounts

Associate multiple tags with multiple email accounts. The API will create tag mappings for each email account and tag combination.
If a mapping already exists, it will be skipped.


---

###### Provider wise reportProvider wise report

This will display the results of the test, sorted as per the providers. This view will show the breakdown of how your email performed against a particular provider.


---

###### Push Lead To SubsequencePush Lead To Subsequence

Push a lead automatically to a subsequence that belongs to the campaign from which the reply was received


---

###### rDNS reportrDNS report

You can check if rDNS was correct for an IP sending the email. You can use mxtoolbox to check and fix the rDNS for your IP.


---

###### Reconnect failed email accountsReconnect failed email accounts

This endpoint lets you bulk reconnect disconnected email accounts.


---

###### Region wise Provider IDsRegion wise Provider IDs

This GET request will retrieve the list of all the Email Providers that you can run your spam test across. They are classified according to the region/country. The provider IDs will be required to create a manual or Automated Test.


---

###### Remove Email Account from a CampaignRemove Email Account from a Campaign

This endpoint lets you delete an email account from a campaign


---

###### Reply To Lead From Master Inbox via APIReply To Lead From Master Inbox via API

This endpoint allows you to reply to a lead using the Master Inbox API


---

###### Resume LeadResume Lead

Resume a paused lead in a campaign


---

###### Resume Lead By Campaign IDResume Lead By Campaign ID

This endpoint resumes a lead from a campaign based on the lead and campaign ID


---

###### Retrigger Failed EventsRetrigger Failed Events

This API re-triggers all failed events for a given campaign within the specified time duration. Re-triggers are processed in small batches. Track the re-trigger status via the GET endpoint.


---

###### Save Campaign SequenceSave Campaign Sequence

How to use the AI A/B variant parameters for automatic testing:

There are 3 options to work with when doing A/B variation.

- variant\_distribution\_type = MANUAL\_EQUAL

In this case, you don't need to add any thing else, it will equally distribute the variants across all the leads
- variant\_distribution\_type = AI\_EQUAL

In this case, you need to add the `winning_metric_property` and `lead_distribution_percentage`
  - winning\_metric\_property: Is the property you want the AI system to focus on when deciding what variant is the best perfomer, you can choose from OPEN\_RATE, CLICK\_RATE, REPLY\_RATE,POSITIVE\_REPLY\_RATE
  - lead\_distribution\_percentage: Is the % of the leads you want to be used in your lead pool to help find the winning variant based on the winning metric property. Make sure it's atleast 20% for a fair calculation
- variant\_distribution\_type = MANUAL\_PERCENTAGE

In this case, you need to allocate the % distribution on a sequence variant level (seq\_variants array objects), it will select the first 10 that add up to 100% in total distribution for variance allocation

NOTES:

- If you pass the id it updates the sequence
- If you don't pass the id, it creates that sequence step
- If you pass an empty array to an existing campaign, it assumes you're deleting the sequences and as a result the sequences and the analytics associated to it will be removed\*

This endpoint saves a sequence within a campaign

How to use the AI A/B variant parameters for automatic testing:

There are 3 options to work with when doing A/B variation.

- variant\_distribution\_type = MANUAL\_EQUAL

  In this case, you don't need to add any thing else, it will equally distribute the variants across all the leads
- variant\_distribution\_type = AI\_EQUAL

  In this case, you need to add the `winning_metric_property` and `lead_distribution_percentage`
  - winning\_metric\_property: Is the property you want the AI system to focus on when deciding what variant is the best perfomer, you can choose from OPEN\_RATE, CLICK\_RATE, REPLY\_RATE,POSITIVE\_REPLY\_RATE
  - lead\_distribution\_percentage: Is the % of the leads you want to be used in your lead pool to help find the winning variant based on the winning metric property. Make sure it's atleast 20% for a fair calculation
- variant\_distribution\_type = MANUAL\_PERCENTAGE

  In this case, you need to allocate the % distribution on a sequence variant level (seq\_variants array objects), it will select the first 10 that add up to 100% in total distribution for variance allocation

NOTES:

- If you pass the id it updates the sequence
- If you don't pass the id, it creates that sequence step
- If you pass an empty array to an existing campaign, it assumes you're deleting the sequences and as a result the sequences and the analytics associated to it will be removed\*


---

###### Place order for mailboxesPlace order for mailboxes

Confirm the domain and mailboxes to be purchased. This API will send the purchase request.


---

###### Schedule history for Automated TestsSchedule history for Automated Tests

This will provide the list and summary of all the tests that ran for a particular Automated Test.


---

###### Search DomainSearch Domain

This API will search for all the available domains which are less than or equal to $15


---

###### Sender Account ListSender Account List

This will provide the list of all the sender accounts selected for that Spam Test.


---

###### Sender Account wise reportSender Account wise report

This response will provide the test results, broken down by each mailbox. The details of each Email from each mailbox will be provided.


---

###### Set ReminderSet Reminder

Add a reminder to a reply to action later on


---

###### Spam filter reportSpam filter report

The Spam filter report per sender mailbox will be reported. Each spam score will also. show the details leading to the score. The rule name and description which indicates a high score, would be of concern. Ideally, the spam score should be as close to 0, or less.


---

###### Spam Test DetailsSpam Test Details

Once you run a Spam test, you can use this GET request to retrieve all the data, that was entered for the test. This is useful to refer what details were added.


---

###### BlacklistsBlacklists

Provides the list of all the blacklists, per IP per email sent


---

###### SPF DetailsSPF Details

Check if your SPF Authentication was a Pass or Fail.


---

###### Stop an Automated Smart Delivery TestStop an Automated Smart Delivery Test

You can stop the Active Automated Test before the end date. This only applies for Automated Test, since this will stop any new test inside the Parent Test. A manual test cannot be stopped once started, it can only be deleted to stop it.


---

###### Spam Test Email ContentSpam Test Email Content

Details for the Email Content, raw, html, along with Campaign and Sequence details.


---

###### Unsubscribe Lead From All CampaignsUnsubscribe Lead From All Campaigns

This endpoint unsubscribe a lead from all campaigns the lead belongs to and prevents it from being added to any future campaigns


---

###### Unsubscribe/Pause Lead From CampaignUnsubscribe/Pause Lead From Campaign



---

###### Update a lead’s category based on their campaignUpdate a lead’s category based on their campaign

This endpoint lets you update your leads category based on the campaign they belong to


---

###### Update Campaign General SettingsUpdate Campaign General Settings

This endpoint updates a campaign’s general settings


---

###### Update Campaign ScheduleUpdate Campaign Schedule

This endpoint updates a campaign’s schedule


---

###### Update Email AccountUpdate Email Account

This endpoint updates an email account


---

###### Update Lead CategoryUpdate Lead Category

Update the category assignment for a lead


---

###### Update Lead RevenueUpdate Lead Revenue

Update the revenue/deal value for a lead


---

###### Update lead using the Lead IDUpdate lead using the Lead ID

This endpoint lets you update a lead using the lead ID


---

###### Update Team Member To LeadUpdate Team Member To Lead

Associate a team member to a lead in your master inbox
