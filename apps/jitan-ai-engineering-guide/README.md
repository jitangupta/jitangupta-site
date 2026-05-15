# Jitan AI Engineering Guide

ChatGPT app/MCP concept for applying Jitan Gupta's public AI engineering workflows inside ChatGPT or Codex.

Working definition:

> MCP built on top of jitangupta.com public data, wrapped natively for ChatGPT.

Purpose:

> I am building this to turn my public body of work into an interactive AI engineering guide, so people can apply my real workflows while they are inside ChatGPT or Codex.

Best first use case:

> I have a legacy Node repo. Give me a safe Codex workflow like Jitan would recommend.

## Tool Surface

Start read-only.

Tools:

- `list_workflows`
- `recommend_workflow`
- `get_workflow_playbook`
- `find_related_content`

Data:

- workflows from `src/data/workflows.ts`
- videos from `src/data/videos.ts`
- builds from `src/data/builds.ts`
- articles from `src/content/learn`
- case studies from `src/content/caseStudies`

## Data Boundary

Only public site content should be exported for app use. Private notes, drafts, local agent settings, and unpublished planning should stay out of app data.
