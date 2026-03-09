# Settings Component Reference

## This Component

- **File:** `SettingsPage.tsx`
- **Config:** `settings-page-hsmeta.json`
- **Accessible at:** HubSpot → Marketplace → Connected apps → My apps → [App name] → Settings tab

## Rules

- Only one `settings` component per project
- Must be in `src/app/settings/`
- Use only components from `@hubspot/ui-extensions` — NOT from `@hubspot/ui-extensions/crm`
- No `window` or `window.fetch` — use `hubspot.fetch()` instead
- All URLs used in `hubspot.fetch()` must be listed in `app-hsmeta.json` → `permittedUrls.fetch`
- Currently permitted: `https://oauth.kinghenry.au`
- `style` props are NOT valid on `@hubspot/ui-extensions` components

## Current Settings Page

The settings page is informational only (no user-configurable settings). It displays:
- App overview and key features
- Getting started instructions
- Security best practices alert
- Support links
- Example use cases

## UI Extension Entry Point

```tsx
hubspot.extend<'settings'>(({ context }) => <SettingsPage context={context} />);
```

## Resources

- [Create a Settings Page](https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensibility/create-a-settings-component)
- [UI Extension Components](https://developers.hubspot.com/docs/platform/ui-components)
