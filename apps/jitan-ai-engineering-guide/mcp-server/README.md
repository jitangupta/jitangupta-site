# MCP Server

This folder will contain the read-only MCP server for the Jitan AI Engineering Guide.

Initial tools:

- `list_workflows`
- `recommend_workflow`
- `get_workflow_playbook`
- `find_related_content`

All first-version tools should be read-only:

- no file writes
- no external posting
- no user account changes
- no private repo access

The server should return clear fallback messages when no suitable workflow exists.
