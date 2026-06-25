---
title: 'The Testability Seam: Making State-Gated UI Testable by AI Agents'
titleTag: 'A URL-parameter pattern for injecting extension storage state — and the production-gating rule that makes it safe'
description: 'chrome.storage.local is invisible to AI agents. This article covers the testability seam pattern: a build-time-gated URL hook that lets agents reach any state-dependent UI component, plus how to generalize it to other opaque storage boundaries.'
pubDate: '2026-06-24'
heroImage: '/writing/agent-testability-seam-pattern.png'
articleTag: 'AI engineering'
targetQuery: 'chrome extension ai agent testing testability seam'
faq:
  - question: 'Can AI agents test Chrome extensions?'
    answer: 'Yes, with important caveats. Agents can drive browser automation, execute test cases, and produce structured results at a quality comparable to a junior QA engineer. The main friction points are injected UI (unstable selectors) and opaque extension storage. The injected UI problem is solved by teaching agents to prefer accessible text and DOM semantics over CSS selectors. The storage problem requires the testability seam pattern described on this page.'
  - question: 'Why can''t AI agents write to chrome.storage.local?'
    answer: 'chrome.storage.local lives in the extension process, not the page context. A page script cannot read or write it. An AI agent — which operates through page scripts, DOM manipulation, and URL navigation — has no channel into the extension process. DevTools can reach it through a point-and-click GUI in the Application tab, but agents cannot open DevTools panels programmatically.'
  - question: 'Is the testability hook safe to ship in a production extension?'
    answer: 'Not as a runtime conditional. The hook must be stripped at build time. Any page on any domain could craft a URL with the test parameters and overwrite a user''s extension state if the hook shipped in production. The correct approach is build-time stripping via a bundler replace plugin (@rollup/plugin-replace, webpack DefinePlugin, or Vite define) so the hook is compiled out entirely and does not exist in production builds.'
  - question: 'Does this pattern apply to web apps, not just extensions?'
    answer: 'For web apps, agents can usually inject scripts that write to localStorage, sessionStorage, and (with some effort) IndexedDB — so the urgency is lower. The pattern is most critical for state that lives outside the page context: chrome.storage.local, HttpOnly cookies, and server-side feature flags. For those, a testability seam (URL hook, test API endpoint, or injected header) is the only agent-accessible path.'
---

## Every agent QA run has a wall you won't see until you hit it

When you point an AI agent at a web app, the pattern is straightforward: navigate to a URL, drive the browser, check DOM state, report results. Agents handle this well.

Chrome extensions add two walls the pattern doesn't account for. The first — injected UI — is manageable. The second — extension storage — is a hard architectural boundary that stops agents cold.

The wall is `chrome.storage.local`. The fix is a pattern I'm calling a **testability seam**.

This article documents the pattern, the production-gating rule that makes it safe, how to generalize it to other opaque storage boundaries, and two supporting techniques from the same harness build.

## Why extension storage breaks the agent testing model

**Wall one: the UI is injected.** Extension content scripts inject UI panels into the host page. That UI is in the DOM, but its structure changes across extension versions and can conflict with the host page's z-index, focus management, and shadow DOM. Agents relying on stable CSS selectors or fixed screen coordinates fail quickly. Teaching agents to prefer accessible text, visible labels, and DOM semantics — the same signals a real user relies on — resolves most of this.

**Wall two: the storage boundary.** `chrome.storage.local` lives in the extension process, not the page context. No page script can read or write it. DevTools can reach it through a point-and-click GUI in the Application tab, but agents cannot open DevTools panels programmatically. An AI agent — which can inject scripts, manipulate the DOM, and navigate to URLs — cannot touch extension storage at all.

| | `localStorage` | `chrome.storage.local` |
|---|---|---|
| Lives in | Page context | Extension process |
| Writable by page script | Yes | No |
| Writable by DevTools console | Yes | Only via Application tab GUI |
| Writable by an AI agent | Via script injection | Blocked |

This matters because modern extensions use `chrome.storage.local` for everything that needs to persist across page loads: feature flags, onboarding state, usage thresholds, upgrade prompts, rating dialogs. Any UI component gated on this storage is invisible to agents until the product exposes a way in.

I hit this wall mid-run during QA on [PromptMate](https://github.com/jitangupta/promptmate-agent-qa-harness), a production Chrome extension. The discovery cost a full session. Here is the pattern I implemented to fix it.

## The testability seam

A testability seam is a controlled entry point into internal extension state, accessible through a channel agents already have: URL navigation.

The implementation uses two URL parameters read by the content script on page load:

```
https://chatgpt.com?pm_test_key=extensionStorageKeyName&pm_test_value=<urlEncodedJSON>
```

When both parameters are present, the content script:

1. Reads `pm_test_key` and `pm_test_value` from the URL
2. Writes the decoded value to `chrome.storage.local` at the given key
3. Strips the parameters from the URL using `history.replaceState`
4. Reloads the page once

The next load behaves exactly as if the user had organically reached that storage state — because it has. The agent navigates to one URL. The extension puts itself in the right state on the next load. No DevTools. No manual steps.

A test case using the seam looks like any other navigation step:

```json
{
  "id": "rating-prompt-appears",
  "description": "Rating dialog appears when usage threshold is met",
  "precondition_url": "https://chatgpt.com?pm_test_key=ratingPrompt&pm_test_value=%7B%22threshold%22%3A10%7D",
  "steps": [
    "Navigate to precondition_url",
    "Wait for page reload",
    "Verify rating dialog is visible"
  ],
  "expected": "Dialog visible with review request copy"
}
```

From the agent's perspective, this is identical to any other test case. No special handling required.

## The production gating rule — non-negotiable

The hook cannot exist in production builds.

Any page on any domain could craft a URL with these parameters and overwrite a user's extension state. A malicious site could reset onboarding progress, trigger arbitrary dialogs, or corrupt stored data by redirecting a user to a crafted URL. The hook is dangerous in production.

The correct approach is build-time stripping:

```javascript
// content-script.js
if (process.env.BUILD !== 'production') {
  const params = new URLSearchParams(window.location.search);
  const testKey = params.get('pm_test_key');
  const testValue = params.get('pm_test_value');

  if (testKey && testValue) {
    chrome.storage.local.set(
      { [testKey]: JSON.parse(decodeURIComponent(testValue)) },
      () => {
        const url = new URL(window.location.href);
        url.searchParams.delete('pm_test_key');
        url.searchParams.delete('pm_test_value');
        window.history.replaceState({}, '', url.toString());
        window.location.reload();
      }
    );
  }
}
```

```javascript
// rollup.config.js (webpack DefinePlugin and Vite define work the same way)
replace({
  'process.env.BUILD': JSON.stringify(process.env.BUILD || 'development'),
  preventAssignment: true
})
```

`@rollup/plugin-replace` rewrites `process.env.BUILD` at bundle time. In a production build (`BUILD=production`), the `if` condition evaluates to `false` and the dead-code eliminator removes the entire block. The hook does not exist in the production bundle — not as a runtime conditional, not as a feature flag, not as something that could be accidentally enabled.

This is the invariant that makes the pattern safe to ship as a permanent fixture in your development build. Gate on build environment at the bundler level, not at runtime.

## Generalizing to other storage boundaries

The same analysis applies to any UI component gated on storage that agents cannot reach natively.

| Storage type | Agent can reach natively? | Recommended approach |
|---|---|---|
| `localStorage` | Yes — script injection | Low priority; agents seed it directly |
| `sessionStorage` | Yes — script injection | Low priority |
| `IndexedDB` | Possible but complex | URL hook simplifies setup |
| `chrome.storage.local` | Blocked | URL hook required |
| `HttpOnly` cookies | No | Server-side test endpoint or header |
| Server-side feature flags | No | Test API endpoint or override header |

The rule of thumb: **before writing a test case for any state-dependent UI component, ask whether an agent can reach that state through normal navigation. If the answer is no, design the testability hook before writing the test.** Discovering the gap during a live run wastes a full session.

## Two supporting techniques from the same harness

### Agent-neutral runbooks

The harness that ran this test suite uses a single `AGENTS.md` file as its runbook — one document any agent reads and follows without modification. No agent-specific forks. No drift between Codex runs and Claude Code runs.

The separation is deliberate: test cases describe *what to do*; the agent decides *how to do it*. This matters when you are evaluating multiple agents, not just the product under test. Run the same suite with Codex on Monday and Claude Code on Thursday. The harness is not one of the variables.

If you author agent-specific test files, you are no longer testing your product — you are also testing the harness, and the comparison is compromised.

### Cache hit rate is the real cost lever

The full 88-case run across 4 platforms processed 55.85 million input tokens. That number sounds alarming until you look at the breakdown.

Of those 55.85M tokens, 54.84M were served from cache — a **98.1% cache hit rate**. The same run costs $35 with good cache structure and $279 without it.

| Token type | Count | Rate | Cost |
|---|---|---|---|
| Fresh input | 1.01M | $5.00 / 1M | $5.05 |
| Cached input | 54.84M | $0.50 / 1M | $27.42 |
| Output | 95.8K | $30.00 / 1M | $2.87 |
| **Total** | | | **$35.34** |

*GPT-5.5 API rates, June 2026.*

The hit rate is high because the stable context prefix — base instructions, test case list, accumulated results — is cached and served cheaply on every subsequent API request in a turn. Only the novel delta per request is billed at the full input rate.

**Practical implication:** structure your agent context so that stable parts (instructions, test cases, known prior results) come before volatile parts (current action, new result, intermediate reasoning). This ordering determines your cache hit rate, which determines your cost more than test case count does.

## How to apply this to your next agent QA run

1. **Audit before writing test cases.** Walk every state-dependent UI component. For each one, identify which storage boundary its gate lives behind.

2. **Design testability hooks for blocked boundaries.** For `chrome.storage.local`, implement the URL parameter pattern. Plan and implement the build-time gating before writing the test case.

3. **Write test cases after the hook exists.** The hook turns a blocked state transition into a normal navigation step. The test case author does not need to think about storage internals.

4. **Write one runbook for all agents.** A single `AGENTS.md` with no agent-specific forks. The test cases travel between agents without rewriting.

The harness, runbook, 88 test cases, fixtures, and result logs from the PromptMate run are in the [promptmate-agent-qa-harness](https://github.com/jitangupta/promptmate-agent-qa-harness) repository.

---

*Written by [Jitan Gupta](/about) — Mumbai-based AI adoption practitioner. Everything on this site comes from real shipped work.*
