# HubSpot Project Reference

## This Project

- **Name:** Custom API Workflow Action
- **srcDir:** `src`
- **platformVersion:** `2025.2`
- **Distribution:** `marketplace`

## Project Commands

```bash
hs project upload            # Build and upload (creates a new build number)
hs project deploy --build N  # Deploy a specific build
hs project dev               # Local dev server with hot reload
hs project validate          # Validate config files before upload
hs project list-builds       # See all builds and their status
```

## Upload vs Deploy

- `hs project upload` creates a new build but does NOT make it live
- `hs project deploy --build N` makes a specific build live
- Both steps are required to push changes to production

## Project Structure

```
custom-api-workflow-action/
├── hsproject.json
└── src/
    └── app/
        ├── app-hsmeta.json                              # App config (OAuth, distribution)
        ├── settings/
        │   ├── settings-page-hsmeta.json
        │   ├── SettingsPage.tsx
        │   └── package.json
        └── workflow-actions/
            └── workflow-actions-hsmeta.json             # Action fields + endpoint
```

## Component Rules

- `app` → must be in `src/app/`
- `settings` → must be in `src/app/settings/`
- `workflow-action` → must be in `src/app/workflow-actions/`
- `app-function` → NOT allowed when `distribution: marketplace`
- Components cannot be in nested subdirectories

## Resources

- [Developer Platform Overview](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/overview)
- [Project Commands Reference](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands)
- [Example Components (2025.2)](https://github.com/HubSpot/hubspot-project-components/tree/main/2025.2/components)
