# Project Structure

This folder is intentionally portable. If the app becomes its own repo, this folder can be moved out with minimal reshaping.

```text
apps/jitan-ai-engineering-guide/
  README.md
  STRUCTURE.md
  docs/
    product.md
    privacy-notes.md
    release-notes.md
  data/
    README.md
    fixtures/
  mcp-server/
    README.md
    src/
    tests/
  app-sdk/
    README.md
    src/
    public/
  tests/
    scenarios/
```

## Folder Responsibilities

`docs/`

Product definition, privacy notes, release notes, and operating decisions.

`data/`

Local fixtures and generated app-facing data samples. The canonical public content should still come from the site until this app moves to its own repo.

`mcp-server/`

The MCP implementation and tool handlers.

`app-sdk/`

ChatGPT Apps SDK wrapper, metadata, optional UI, and public app assets.

`tests/`

End-to-end prompts and expected behavior across the four tools.

## Move-Out Plan

When this becomes a separate repo:

1. Move `apps/jitan-ai-engineering-guide` to the new repository root.
2. Keep generated JSON export tasks in `jitangupta-site`.
3. Point the app repo at published JSON from `https://jitangupta.com/app-data/`.
4. Keep `AGENTS.md`/`.agents/shared` in both repos aligned only where needed.
