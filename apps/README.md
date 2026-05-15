# Apps

This folder is for app projects connected to jitangupta.com.

The site remains the brand/content hub. Apps in this folder should be treated as separate products that may later move to their own repositories.

## Current Apps

- `jitangupta-ai-engineering-guide` - ChatGPT app/MCP concept for applying JitanGupta's public AI engineering workflows inside ChatGPT or Codex.

## App Boundary

Each app should keep its own:

- product notes
- data contract
- MCP server code
- ChatGPT Apps SDK wrapper
- tests
- deployment notes

Shared public content should still come from the site:

- `src/data`
- `src/content`
- generated JSON under `public/app-data`

## Split-To-New-Repo Rule

When an app needs independent deployment, secrets, CI, or release management, move the app folder into a new repository and keep only the generated public data contract in this site repo.
