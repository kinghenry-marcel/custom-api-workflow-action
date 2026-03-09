# App Listing Copy
Content ready to paste into the HubSpot app listing form fields.

---

## Tagline (≤140 chars)
Send HTTP requests to any API directly from your HubSpot workflows — with bearer, API key, and basic auth support.

---

## App Overview (~300 words, for the App Details tab)

HubSpot workflows are powerful, but they stop at your HubSpot data. The **Custom API Workflow Action** bridges that gap by letting you send HTTP requests to any external API directly from a workflow step — no code, no middleware, no Zapier required.

### What it does

Add a **Custom API Call** step to any HubSpot workflow. When the workflow runs, it sends an HTTP request to the endpoint you configure — and returns the response back into the workflow as output fields you can use in subsequent steps.

Supports all standard HTTP methods: **GET, POST, PUT, PATCH, DELETE**.

### Flexible authentication

Configure per-action authentication without storing credentials in HubSpot properties:

- **Bearer token** — for APIs using OAuth or JWT
- **API key header** — for APIs using a custom header like `X-Api-Key`
- **HTTP Basic auth** — for APIs requiring username and password
- **None** — for open or IP-whitelisted endpoints

### Dynamic requests

Use HubSpot workflow tokens in the URL, request body, headers, and query parameters to build requests that include live contact, deal, or company data at the time the workflow runs.

### Act on the response

Every API call returns four output fields — `status_code`, `response_body`, `success`, and `error_message` — that you can use in downstream workflow steps. Branch your workflow on success or failure, store the response to a property, or pass it into another API call.

### Who it's for

Any HubSpot user who wants to connect their workflows to external systems without building a custom integration. Ideal for developers, RevOps teams, and agencies managing complex automation stacks.

---

## Feature description (for App Features tab)

**Custom API Call Workflow Action**

Adds a configurable HTTP request step to HubSpot Workflows. Supports GET, POST, PUT, PATCH, and DELETE methods with bearer token, API key, basic auth, or no authentication. Configure query parameters, custom headers, and a JSON request body using HubSpot tokens for dynamic values. Returns status_code, response_body, success, and error_message as output fields for use in subsequent workflow steps.

---

## App review instructions (for Testing Info tab)

No testing credentials are required. To test the app:

1. Install the app via the OAuth flow.
2. Go to **Automation → Workflows** and create a new contact-based workflow.
3. Add the **Custom API Call** action.
4. Configure the following fields:
   - Step name: `Test`
   - API URL: `https://httpbin.org/get`
   - HTTP Method: `GET`
   - Auth type: `None`
5. Enroll a test contact and run the workflow.
6. Open the workflow action history and verify:
   - `status_code` = `200`
   - `success` = `true`
   - `response_body` contains a JSON response from httpbin.org

The app does not require a separate platform account or reviewer credentials. The backend (`oauth.kinghenry.au`) is publicly accessible and does not require authentication from the reviewer.
