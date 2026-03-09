# Marketplace Go-Live Tasks

**Current state:** Build #3 deployed, distribution set to `marketplace`, functional but not yet submitted for review.

Tasks are ordered by dependency. Complete sections top-to-bottom.

---

## 1. Infrastructure — Backend Must Be Live First

Everything else depends on oauth.kinghenry.au working correctly.

- [ ] **Configure OAuth credentials in DigitalOcean**
  - Get Client ID and Client Secret from HubSpot Developer Portal → the app → Auth tab
  - Add `custom_api_workflow` entry to the `HUBSPOT_APPS` environment variable in DigitalOcean
  - Format: `{"custom_api_workflow": {"clientId": "...", "clientSecret": "...", "redirectUri": "https://oauth.kinghenry.au/oauth/callback/custom_api_workflow"}}`
  - Redeploy after updating env vars

- [x] **Backend server is live** — `oauth.kinghenry.au` is responding (HTTP 400 on malformed POST confirms server is up)

- [ ] **Verify OAuth flow end-to-end**
  - Install the app from a test account
  - Confirm OAuth redirect lands at the correct callback URL
  - Confirm the success screen shows correct branding and redirects to `https://app.hubspot.com/connected-apps/[hub-id]`

- [ ] **Verify workflow action endpoint works post-OAuth**
  - Create a test workflow with the "Custom API Call" action
  - Run Test 1 from TEST_SCENARIOS.md (GET https://httpbin.org/get, no auth)
  - Confirm `status_code: 200`, `success: true` in output fields

- [ ] **Set up server monitoring for oauth.kinghenry.au**
  - Configure uptime monitoring (e.g. UptimeRobot, Better Uptime)
  - Set up error alerting to support@kinghenry.au
  - Document expected uptime SLA — HubSpot reviewers will ask about this

---

## 2. Legal Pages — Required for Submission

These URLs must be live before creating the app listing. HubSpot will crawl them.

- [ ] **Create Privacy Policy page** at `https://kinghenry.au/privacy`
  - Must cover: what data is collected, how it's stored, who has access, retention policy
  - Must mention HubSpot integration specifically (data flowing through oauth.kinghenry.au)
  - Must be publicly accessible (no login, no paywall)

- [ ] **Create Terms of Service page** at `https://kinghenry.au/terms`
  - Must be live and publicly accessible
  - Reference the Custom API Workflow Action specifically

- [ ] **Create and verify support page** at `https://kinghenry.au/support`
  - Currently returns 404 — page does not exist
  - Must be live and publicly accessible (currently referenced in `app-hsmeta.json` → `supportUrl`)
  - Must not redirect elsewhere

---

## 3. Setup Guide — Required for Submission

HubSpot requires a publicly accessible setup guide URL specific to this integration.

- [ ] **Create setup guide** at a public URL (e.g. `https://kinghenry.au/docs/custom-api-workflow-action/setup` or a GitHub Pages / Notion page)

  The guide must contain (minimum for listing):
  - What the app does
  - How to install (OAuth flow steps with screenshots)
  - How to add the "Custom API Call" action to a workflow
  - How to configure each input field (api_url, http_method, auth_type, etc.)
  - How to use output fields in subsequent workflow steps
  - How to disconnect/uninstall the app

  Reference template in the HubSpot docs:
  https://developers.hubspot.com/docs/apps/developer-platform/list-apps/listing-your-app/create-an-app-listing-setup-guide

---

## 4. App Icon — Verify and Upload

- [x] **Verify the existing icon meets HubSpot's specs**
  - Confirmed: 800×800px PNG — meets all dimensional requirements

- [ ] **Add icon to git**
  - `git add App-Icon-Workflow-API-Call.png`
  - The icon is currently untracked

---

## 5. Code — Clean Up Before Final Upload

- [ ] **Commit uncommitted SettingsPage.tsx changes**
  - `git status` shows `M src/app/settings/SettingsPage.tsx`
  - Review the diff, then commit

- [ ] **Run `hs project validate`** to confirm no config errors
  - Fix any validation errors before uploading

- [ ] **Upload a fresh build** once all code changes are committed
  - `hs project upload --message "Prepare for marketplace submission"`
  - Note the new build number
  - `hs project deploy --build <N>`

---

## 6. Acquire 3 Active Installs — Hard Requirement

HubSpot requires **3 active, unique installs from accounts not affiliated with your organization** before a listing can go live. "Active" means the app has made OAuth-authenticated API requests within the last 30 days.

- [ ] **Identify 3 beta testers** (contacts, colleagues at other companies, HubSpot community members)
  - Each must be a separate HubSpot production account
  - None can be your own accounts or accounts of your organization

- [ ] **Have each tester install and use the app**
  - Install via OAuth flow
  - Create at least one workflow using the "Custom API Call" action
  - Execute the workflow at least once to generate app activity

- [ ] **Confirm installs are showing as active**
  - Check HubSpot Developer Portal → the app → Installs tab
  - All 3 must show activity within 30 days of submission

---

## 7. App Listing — Create in HubSpot Developer Portal

Done entirely through the HubSpot UI at: Developer Account → App Listings → Create listing

### 7a. Listing Info tab
- [ ] Public app name: `Custom API Workflow Action`
- [ ] Company name: `King Henry`
- [ ] Tagline: (≤140 chars, e.g. "Send HTTP requests to any API directly from your HubSpot workflows")
- [ ] Install Button URL: select the OAuth redirect URL from the dropdown
- [ ] Sign-in configuration: does not require a separate partner sign-in (the OAuth flow is self-contained)
- [ ] App icon: upload the 800×800 icon
- [ ] Categories: select up to 2 (suggested: "Productivity" + "Automation")
- [ ] URL path and search terms

### 7b. App Details tab
- [ ] **Demo video**: create a short screen recording (~2–3 min) showing:
  - Installing the app via OAuth
  - Adding the "Custom API Call" action to a workflow
  - Configuring a POST request with bearer token auth
  - Running the workflow and viewing output fields
- [ ] **Screenshots** (up to 8): capture
  1. The "Custom API Call" action in the workflow editor
  2. The auth_type dropdown showing the 4 options
  3. Bearer token fields showing conditional display
  4. Query parameters / custom headers textarea
  5. Output fields (status_code, response_body, success) being used in a branch
  6. The settings page
- [ ] **App overview**: write a clear description of what the app does, the problem it solves, and why to install it. Focus on the integration value, not general product info. ~200–400 words.
- [ ] **Shared data**: document how data flows
  - The app reads workflow enrollment data (contact/company/deal properties) and sends them to external APIs
  - No HubSpot objects are written to by this app
  - Scopes: `automation` (read workflows)
- [ ] **HubSpot features your app works with**: select "Workflows"
- [ ] **Languages**: English

### 7c. Pricing tab
- [ ] Set currency
- [ ] Add pricing plan(s) — must match what's on kinghenry.au pricing page
  - If free: use "Free" model (only for free-forever or freemium)
  - Link to `https://kinghenry.au/pricing` (or equivalent)

### 7d. App Features tab
- [ ] Add feature: "Custom API Call Workflow Action"
  - Description: explain the workflow action, auth options, output fields
  - Add a screenshot

### 7e. Support Info tab
- [ ] Support email: `support@kinghenry.au` ✅ (already in hsmeta)
- [ ] Languages: English
- [ ] Company website: `https://kinghenry.au`
- [ ] Setup documentation URL: link to the setup guide created in section 3
- [ ] Terms of Service URL: `https://kinghenry.au/terms`
- [ ] Privacy Policy URL: `https://kinghenry.au/privacy`

### 7f. Testing Info tab
- [ ] **App review instructions** — this app requires the oauth.kinghenry.au backend:
  - The app does not require a separate platform account from the reviewer
  - Write: "No testing credentials are required. To test: (1) Install the app via OAuth. (2) Create a workflow. (3) Add the 'Custom API Call' action. (4) Configure api_url = https://httpbin.org/get, http_method = GET, auth_type = none, step_name = Test. (5) Enroll a test contact. (6) Verify output fields: status_code = 200, success = true."
  - If the backend requires credentials: invite `marketplace-tester@hubspot.com` to a test account with the app installed
- [ ] **Technology Partner Program contacts**: add at least one contact (Main point of contact required)
  - Add: Developer contact, Marketing contact

---

## 8. Review and Submit

- [ ] Open the **Review info** tab in the listing editor
- [ ] Click **Run validation** — resolve all errors
- [ ] Click **Submit for review**
- [ ] Agree to the Technology Partner Program Agreement terms
- [ ] Note: HubSpot will respond within 10 business days

---

## 9. Post-Submission (while waiting for review)

- [ ] Monitor `support@kinghenry.au` for HubSpot reviewer feedback
- [ ] Keep oauth.kinghenry.au online and monitored during review period
- [ ] Do not submit any other apps until this one is approved (HubSpot processes one at a time)
- [ ] Ensure all 3 beta installs remain active (app used at least once in 30 days)

---

## Quick Reference

| Item | Status | Location |
|------|--------|----------|
| Build #3 deployed | ✅ Done | HubSpot portal 49012930 |
| `distribution: marketplace` | ✅ Done | `src/app/app-hsmeta.json` |
| OAuth configured | ✅ Done | app-hsmeta.json |
| App icon file | ✅ 800×800px confirmed | `App-Icon-Workflow-API-Call.png` (untracked in git) |
| OAuth credentials in DigitalOcean | ❌ Not confirmed | DigitalOcean → HUBSPOT_APPS env var |
| Privacy Policy page | ❌ Missing | Need `kinghenry.au/privacy` |
| Terms of Service page | ❌ Missing | Need `kinghenry.au/terms` |
| Setup guide | ❌ Missing | Need public URL |
| 3 active installs | ❌ Missing | HubSpot Developer Portal |
| App listing created | ❌ Missing | HubSpot Developer Portal |
| Demo video | ❌ Missing | For app listing |
| Screenshots | ❌ Missing | For app listing |
| SettingsPage.tsx committed | ❌ Pending | git |

---

## Dependency Order Summary

```
Backend working (§1)
  → OAuth credentials configured
    → Legal pages live (§2)
    → Setup guide live (§3)
      → App listing created (§7)
        → Beta installs (§6) [can run in parallel with listing creation]
          → Submit (§8)
```

Do not create the app listing before legal pages and setup guide are live — HubSpot crawls all URLs at submission time.
