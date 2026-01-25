import React from "react";
import {
  Divider,
  Link,
  Text,
  Heading,
  Flex,
  Alert,
  Box,
} from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend<"settings">(({ context }) => <SettingsPage context={context}/>);

const SettingsPage = ({ context }) => {
  return (
    <Flex direction="column" gap="medium">
      {/* Header */}
      <Box>
        <Heading>Custom API Workflow Action</Heading>
        <Text variant="microcopy">
          Send HTTP requests to any API endpoint directly from your workflows
        </Text>
      </Box>

      <Divider />

      {/* Overview */}
      <Box>
        <Heading>Overview</Heading>
        <Text>
          The Custom API Workflow Action enables you to integrate any external API into your HubSpot workflows.
          Send webhooks, trigger automation, sync data, or call custom endpoints with flexible authentication options.
        </Text>
      </Box>

      {/* Features */}
      <Box>
        <Heading>Key Features</Heading>
        <Flex direction="column" gap="small">
          <Text>
            • <strong>Multiple HTTP Methods:</strong> GET, POST, PUT, PATCH, DELETE
          </Text>
          <Text>
            • <strong>Flexible Authentication:</strong> Bearer token, API key, Basic auth, or none
          </Text>
          <Text>
            • <strong>Custom Configuration:</strong> Add query parameters, headers, and JSON request bodies
          </Text>
          <Text>
            • <strong>Response Handling:</strong> Access status codes, response data, and error messages in your workflows
          </Text>
          <Text>
            • <strong>Universal Support:</strong> Works with all HubSpot objects including custom objects
          </Text>
        </Flex>
      </Box>

      {/* Getting Started */}
      <Box>
        <Heading>Getting Started</Heading>
        <Text>
          To use this workflow action:
        </Text>
        <Flex direction="column" gap="small">
          <Text>1. Create or edit a workflow</Text>
          <Text>2. Add the "Custom API Call" action</Text>
          <Text>3. Configure your API endpoint, method, and authentication</Text>
          <Text>4. Use the output fields (status_code, response_body, success, error_message) in subsequent actions</Text>
        </Flex>
      </Box>

      {/* Security Notice */}
      <Box>
        <Alert title="Security Best Practices">
          <Text>
            • Always use HTTPS endpoints for secure communication
          </Text>
          <Text>
            • Credentials are stored securely within HubSpot
          </Text>
          <Text>
            • Test with non-production data first
          </Text>
          <Text>
            • Validate API endpoints before deploying workflows
          </Text>
        </Alert>
      </Box>

      <Divider />

      {/* Support */}
      <Box>
        <Heading>Support & Documentation</Heading>
        <Flex direction="column" gap="small">
          <Text>
            <strong>Support Email:</strong>{' '}
            <Link href="mailto:support@kinghenry.au">support@kinghenry.au</Link>
          </Text>
          <Text>
            <strong>Documentation:</strong>{' '}
            <Link href="https://github.com/marcelrees/custom-api-workflow-action">
              View on GitHub
            </Link>
          </Text>
        </Flex>
      </Box>

      {/* Example Use Cases */}
      <Box>
        <Heading>Example Use Cases</Heading>
        <Flex direction="column" gap="small">
          <Text>• Send notifications to Slack, Microsoft Teams, or Discord</Text>
          <Text>• Trigger automation in Zapier, Make, or n8n</Text>
          <Text>• Update external databases or CRMs</Text>
          <Text>• Call internal microservices or custom APIs</Text>
          <Text>• Integrate with payment processors or shipping providers</Text>
          <Text>• Send data to analytics or monitoring platforms</Text>
        </Flex>
      </Box>

      {/* Footer */}
      <Divider />
      <Box>
        <Text variant="microcopy">
          Custom API Workflow Action v1.0.0 • Built with HubSpot Platform 2025.2
        </Text>
      </Box>
    </Flex>
  );
};
