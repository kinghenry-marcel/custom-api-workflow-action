# App Listing Copy
Content ready to paste into the HubSpot app listing form fields.

---

## Pricing Plan (Free tier)

**Plan name:** Free
**Plan tagline:** For teams that want to connect HubSpot workflows to any API without the complexity
**Pricing detail:** No credit card required
**Free trial days:** (leave blank)
**Pricing model:** Free

**Features list** (one per line, paste each as a separate item):

Unlimited API calls from any HubSpot workflow. Use the Custom API Call action in as many workflows and steps as you need with no request caps or throttling.

GET, POST, PUT, PATCH and DELETE methods supported. Choose the right HTTP method for every API interaction, from reading data with GET to creating or updating records with POST, PUT and PATCH.

Bearer token, API key header, and basic auth support. Configure authentication per workflow step without storing credentials in HubSpot properties. Supports the four most common API authentication patterns.

Works on contacts, companies, deals, tickets and custom objects. Add the Custom API Call action to any HubSpot workflow regardless of the enrolled object type, including custom objects.

Dynamic requests using HubSpot workflow tokens. Embed contact, company, deal or ticket property values directly into your API URL, request body, headers and query parameters at the time the workflow runs.

Response data returned as workflow output fields. Every API call surfaces status code, response body, success flag and error message as output fields you can use in subsequent workflow steps, branches or property updates.

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

Adds an HTTP request step to HubSpot Workflows. Supports GET, POST, PUT, PATCH and DELETE with bearer token, API key, basic auth or no auth. Set query parameters, custom headers and a JSON body using workflow tokens. Returns status_code, response_body, success and error_message as output fields.

**Use API Responses to Enrich HubSpot Records**

Fetch data from any external API and bring it back into HubSpot. Use a GET request to pull data from a third-party system, then pass the response_body output into a Set Property Value step to update contact, company or deal records — keeping your HubSpot data in sync without custom code.

---

## Shared data explanation (free text box)

When a workflow runs the Custom API Call action, HubSpot sends the configured action inputs to King Henry's backend server (oauth.kinghenry.au), which forwards the HTTP request to the external API endpoint specified by the user. The request may include HubSpot object property values (such as contact email, deal name, or custom properties) if the user has embedded workflow tokens in the request body, headers, or query parameters.

The external API's response (status code and response body) is returned to HubSpot and made available as output fields for use in subsequent workflow steps.

King Henry's backend acts as a secure proxy only. No HubSpot object data is stored by King Henry beyond the duration of the request. No HubSpot objects are created, updated, or deleted by this app. The user is responsible for the data they choose to send to external APIs via workflow tokens.

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
