# App Workspace Structure

jitangupta.com is the personal brand hub. Related apps can live in this repo while they are small, experimental, or tightly coupled to site data.

Use `apps/` for app-specific work.

## Folder Pattern

```text
apps/
  README.md
  <app-id>/
    README.md
    STRUCTURE.md
    docs/
    data/
    mcp-server/
    app-sdk/
    tests/
```

## Keep An App In This Repo When

- It depends directly on `src/data` or `src/content`.
- It is still an early app closely tied to this site.
- The main output is learning, content creation, or a small public demo.
- It has no independent deployment lifecycle yet.

## Move An App To Its Own Repo When

- It needs independent deployment, CI, secrets, or release management.
- It has its own package.json, tests, and hosting setup.
- It should be installed or used without cloning jitangupta.com.
- It is ready for broader user testing or independent release management.

## Data Rule

Apps should read generated public data from the site instead of scraping rendered pages. Prefer generated JSON such as:

- `public/app-data/workflows.json`
- `public/app-data/content-index.json`

This keeps the site as the source of truth while letting apps be moved out later.
