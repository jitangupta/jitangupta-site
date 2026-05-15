# Data

This app should consume public, structured data from jitangupta.com.

Preferred generated files:

- `public/app-data/workflows.json`
- `public/app-data/content-index.json`

During early development, the MCP server can read directly from repo data files. For public hosting, generated JSON is cleaner and easier to move into a separate repo.

Do not include:

- self-notes
- private drafts
- raw chat logs
- credentials
- private code
