export interface Build {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;
  resourceUrl?: string;
  image?: string;
  logoUrl?: string;
  workedExampleUrl?: string;
  status: 'live' | 'works-locally' | 'in-progress' | 'planned';
  category: 'production' | 'personal-production' | 'supporting-system' | 'workflow-template';
}

export const builds: Build[] = [
  {
    title: "PromptMate",
    description: "Chrome extension that adds a personal prompt library sidebar to ChatGPT, Claude, DeepSeek, and Kimi. Save prompts with tone and format settings, insert them in one click, and sync across devices via Google Drive. No backend server.",
    techStack: ["Chrome Extension", "JavaScript", "Google Drive API", "ChatGPT", "Claude"],
    githubUrl: "https://github.com/jitangupta/PromptMate",
    liveUrl: "https://chromewebstore.google.com/detail/promptmate/oknglgpcglngpaobpjndcaaljdchmgai",
    resourceUrl: "/promptmate/",
    logoUrl: "/prompt-mate-logo.png",
    status: "live",
    category: "production"
  },
  {
    title: "Content Board",
    description: "YouTube content management PWA I use daily to track ideas, scripts, feedback, and publishing state. Built because I was losing track of 20+ video ideas across scattered notes.",
    techStack: ["React", "Firebase", "PWA", "Workflow Automation"],
    githubUrl: "https://github.com/jitangupta/content-board",
    status: "live",
    category: "personal-production"
  },
  {
    title: "cb-mcp-server",
    description: "MCP server that connects Content Board to Claude desktop. Built live on the channel, episode by episode — so the whole build is documented. I use it weekly; the tutorials on this site come from a server I actually run.",
    techStack: ["Model Context Protocol", "TypeScript", "Cowork", "Firebase", "Content Board"],
    githubUrl: "https://github.com/jitangupta/cb-mcp-server",
    status: "works-locally",
    category: "personal-production"
  },
  {
    title: "jitangupta.com",
    description: "This site. A personal brand hub built with Astro and Tailwind CSS. Open source and deployed via GitHub Pages.",
    techStack: ["Astro", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/jitangupta/jitangupta-site",
    liveUrl: "https://jitangupta.com",
    status: "live",
    category: "personal-production"
  },
  {
    title: "Agent QA Harness",
    description: "File-based template for using AI agents as browser QA operators. Clone, open in Claude Code or Codex, say 'start onboarding' — the agent generates test cases, runs them, and delivers a handoff report. Built to support PromptMate QA; 86 test cases across 18 categories from that run are the worked example.",
    techStack: ["Agent QA", "Codex", "Claude Code", "JSONL", "Browser Testing"],
    githubUrl: "https://github.com/jitangupta/agent-qa-harness",
    workedExampleUrl: "https://github.com/jitangupta/promptmate-agent-qa-harness",
    status: "live",
    category: "supporting-system"
  },
  {
    title: "Cowork Boilerplate",
    description: "Folder-based workflow templates for Claude desktop. Defines repeatable AI pipelines once: approval gates, scheduled tasks, multi-stage projects. Includes a YouTube content pipeline and a daily community scout. Template — not production software.",
    techStack: ["Claude Cowork", "Claude Code", "MCP", "AI Workflow"],
    githubUrl: "https://github.com/jitangupta/cowork-boilerplate",
    status: "live",
    category: "workflow-template"
  },
  {
    title: "File Safety Guard",
    description: "Plugin for Claude Code that prevents accidental file deletion and overwrites during AI-assisted development. Adds automatic backups, dry-run planning, and activity logging. A workflow guard, not production infrastructure.",
    techStack: ["Claude Code", "Cowork", "Plugin", "Developer Safety"],
    githubUrl: "https://github.com/jitangupta/file-safety-guard",
    status: "live",
    category: "workflow-template"
  },
];
