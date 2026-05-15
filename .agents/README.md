# Shared Agent Workspace

This folder is the neutral workspace for agent-facing project knowledge that should be usable by Claude, Codex, and future coding agents.

## Source Of Truth

- `../AGENTS.md` is the canonical repo instruction file.
- `.agents/shared/` holds reusable context that should not be tied to one agent runtime.
- `.claude/` remains Claude-specific configuration, commands, rules, and skills.
- `.codex/` remains Codex-specific configuration.

When shared guidance changes, update `AGENTS.md` or `.agents/shared/` first. Agent-specific folders should only contain runtime-specific behavior, shortcuts, skills, or local settings.

## Suggested Rule

If both Claude and Codex need to know it, it belongs here or in `AGENTS.md`.

If only one tool needs it to run, it belongs in that tool's own folder.
