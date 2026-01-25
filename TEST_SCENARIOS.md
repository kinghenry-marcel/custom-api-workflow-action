# Test Scenarios for Custom API Workflow Action

This document provides ready-to-use test configurations for validating the Custom API Workflow Action.

## Prerequisites

1. OAuth flow completed (app connected to HubSpot)
2. oauth.kinghenry.au server deployed with updated credentials
3. Test workflow created in HubSpot

## Test Scenarios

### ✅ Test 1: Basic GET Request (No Authentication)

**Purpose:** Verify basic HTTP GET functionality without authentication

**Configuration:**
```
API URL: https://httpbin.org/get
HTTP Method: GET
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: JSON containing request details
- `error_message`: (empty)

---

### ✅ Test 2: GET with Query Parameters

**Purpose:** Verify query parameter encoding and URL construction

**Configuration:**
```
API URL: https://httpbin.org/get
HTTP Method: GET
Authentication Type: None
Query Parameters: {"foo": "bar", "test": "value", "name": "John Doe"}
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: Contains `"args": {"foo": "bar", "test": "value", "name": "John Doe"}`
- Final URL should be: `https://httpbin.org/get?foo=bar&test=value&name=John+Doe`

---

### ✅ Test 3: Bearer Token Authentication

**Purpose:** Verify Bearer token is correctly sent in Authorization header

**Configuration:**
```
API URL: https://httpbin.org/bearer
HTTP Method: GET
Authentication Type: Bearer Token
Bearer Token: test-token-12345
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: Contains `"authenticated": true, "token": "test-token-12345"`

---

### ✅ Test 4: API Key Authentication

**Purpose:** Verify custom API key header is sent correctly

**Configuration:**
```
API URL: https://httpbin.org/headers
HTTP Method: GET
Authentication Type: API Key
API Key Header Name: X-API-Key
API Key Value: my-secret-key-12345
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: Contains `"X-Api-Key": "my-secret-key-12345"` in headers

---

### ✅ Test 5: Basic Authentication

**Purpose:** Verify Basic auth credentials are encoded and sent correctly

**Configuration:**
```
API URL: https://httpbin.org/basic-auth/testuser/testpass
HTTP Method: GET
Authentication Type: Basic Auth
Basic Auth Username: testuser
Basic Auth Password: testpass
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: Contains `"authenticated": true, "user": "testuser"`

**Test Failure Case:**
Use wrong credentials:
- Username: wronguser
- Password: wrongpass
- Expected: `status_code`: 401, `success`: false

---

### ✅ Test 6: POST with JSON Body

**Purpose:** Verify POST requests with JSON body

**Configuration:**
```
API URL: https://httpbin.org/post
HTTP Method: POST
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: {"name": "John Doe", "email": "john@example.com", "age": 30}
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: Contains posted data in `"json"` field

---

### ✅ Test 7: POST with Custom Headers

**Purpose:** Verify custom headers are sent correctly

**Configuration:**
```
API URL: https://httpbin.org/post
HTTP Method: POST
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: {"X-Custom-Header": "CustomValue", "X-Request-ID": "12345"}
Request Body: {"test": "data"}
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: Contains custom headers in `"headers"` field

---

### ✅ Test 8: PUT Request

**Purpose:** Verify PUT method works correctly

**Configuration:**
```
API URL: https://httpbin.org/put
HTTP Method: PUT
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: {"id": 123, "name": "Updated Name", "status": "active"}
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- `response_body`: Contains PUT data

---

### ✅ Test 9: PATCH Request

**Purpose:** Verify PATCH method works correctly

**Configuration:**
```
API URL: https://httpbin.org/patch
HTTP Method: PATCH
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: {"status": "updated"}
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true

---

### ✅ Test 10: DELETE Request

**Purpose:** Verify DELETE method works correctly

**Configuration:**
```
API URL: https://httpbin.org/delete
HTTP Method: DELETE
Authentication Type: None
Query Parameters: {"id": "123"}
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true

---

### ❌ Test 11: Error Handling - 404 Not Found

**Purpose:** Verify error handling for 404 responses

**Configuration:**
```
API URL: https://httpbin.org/status/404
HTTP Method: GET
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 404
- `success`: false
- `error_message`: "HTTP 404: Not Found" (or similar)

---

### ❌ Test 12: Error Handling - 500 Server Error

**Purpose:** Verify error handling for server errors

**Configuration:**
```
API URL: https://httpbin.org/status/500
HTTP Method: GET
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: (leave empty)
Timeout: 30
```

**Expected Results:**
- `status_code`: 500
- `success`: false
- `error_message`: "HTTP 500: Internal Server Error" (or similar)

---

### ❌ Test 13: Error Handling - Invalid JSON in Request Body

**Purpose:** Verify validation of JSON input

**Configuration:**
```
API URL: https://httpbin.org/post
HTTP Method: POST
Authentication Type: None
Query Parameters: (leave empty)
Custom Headers: (leave empty)
Request Body: {invalid json here
Timeout: 30
```

**Expected Results:**
- `status_code`: 0
- `success`: false
- `error_message`: "Invalid request_body JSON: ..." (or similar)

---

### ❌ Test 14: Error Handling - Invalid URL

**Purpose:** Verify URL validation

**Configuration:**
```
API URL: http://httpbin.org/get
HTTP Method: GET
Authentication Type: None
```

**Expected Results:**
- `status_code`: 0
- `success`: false
- `error_message`: "Only HTTPS URLs are allowed for security reasons"

---

### ❌ Test 15: Error Handling - Timeout

**Purpose:** Verify timeout handling

**Configuration:**
```
API URL: https://httpbin.org/delay/65
HTTP Method: GET
Authentication Type: None
Timeout: 5
```

**Expected Results:**
- `status_code`: 0
- `success`: false
- `error_message`: "Request timeout after 5 seconds"

---

### 🔒 Test 16: Security - SSRF Protection (Localhost)

**Purpose:** Verify localhost is blocked

**Configuration:**
```
API URL: https://localhost:3000/api
HTTP Method: GET
Authentication Type: None
```

**Expected Results:**
- `status_code`: 0
- `success`: false
- `error_message`: "Requests to private/local IP addresses are not allowed"

---

### 🔒 Test 17: Security - SSRF Protection (Private IP)

**Purpose:** Verify private IPs are blocked

**Configuration:**
```
API URL: https://192.168.1.1/api
HTTP Method: GET
Authentication Type: None
```

**Expected Results:**
- `status_code`: 0
- `success`: false
- `error_message`: "Requests to private/local IP addresses are not allowed"

---

## Real-World Integration Tests

### 🌐 Test 18: Slack Webhook (If you have a Slack webhook URL)

**Configuration:**
```
API URL: https://hooks.slack.com/services/YOUR/WEBHOOK/URL
HTTP Method: POST
Authentication Type: None
Request Body: {"text": "Test message from HubSpot Custom API Workflow Action!"}
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- Message appears in your Slack channel

---

### 🌐 Test 19: Webhook.site (Real-time testing)

1. Go to https://webhook.site
2. Copy your unique URL
3. Configure:

```
API URL: https://webhook.site/YOUR-UNIQUE-ID
HTTP Method: POST
Authentication Type: None
Request Body: {"test": "data", "source": "hubspot"}
Timeout: 30
```

**Expected Results:**
- `status_code`: 200
- `success`: true
- See the request appear on webhook.site

---

## Workflow Testing Checklist

- [ ] Test all authentication types (none, bearer, API key, basic)
- [ ] Test all HTTP methods (GET, POST, PUT, PATCH, DELETE)
- [ ] Test query parameters work correctly
- [ ] Test custom headers work correctly
- [ ] Test request body works for POST/PUT/PATCH
- [ ] Test error responses (404, 500)
- [ ] Test timeout handling
- [ ] Test SSRF protection (localhost, private IPs)
- [ ] Test with different object types (Contact, Company, Deal)
- [ ] Test workflow branching based on success/failure output
- [ ] Test with actual production APIs (Slack, webhooks, etc.)

## Debugging Tips

1. **Check output fields:** Always add a workflow action after Custom API Call to view the output fields
2. **Use httpbin.org:** Perfect for testing without affecting real systems
3. **Check server logs:** Monitor oauth.kinghenry.au logs for backend errors
4. **Test incrementally:** Start with simple GET requests, then add complexity
5. **Validate JSON:** Use a JSON validator for query_parameters, custom_headers, and request_body
6. **Check HubSpot workflow history:** View execution details for each enrolled record

## Notes

- All URLs must use HTTPS (HTTP is rejected)
- Maximum timeout is 60 seconds
- Response bodies are truncated at 100KB
- Query parameters, custom headers, and request body must be valid JSON
- Conditional fields appear based on authentication type selection
