export interface Service {
  id: string;
  title: string;
  duration: string;
  price: string;
  priceAmount?: number;
  priceCurrency?: string;
  priceNote?: string;
  teamSize?: string;
  format?: string;
  description: string;
  covers?: string[];
  coversHeading?: string;
  whoFor?: string[];
  whatYouGet?: string[];
  exampleOutcomes?: string[];
  relatedLearnSlug?: string;
  note?: string;
  ctaLink: string;
  tier: 'individual' | 'team';
  isFree?: boolean;
}

export const services: Service[] = [
  {
    id: 'discovery-call',
    title: 'Discovery Call',
    duration: '15 mins',
    price: 'Free',
    format: 'Video call',
    description:
      "Not sure where AI fits in your work? Let's talk for 15 minutes. You tell me what you're trying to solve. I'll tell you honestly whether I can help and which session makes sense. No pitch, no pressure. If none of my services fit, I'll point you in the right direction anyway.",
    exampleOutcomes: [
      'A founder figured out their team didn\'t need a full Build-Along, just a 90-minute Workflow Setup, and saved themselves four times the cost.',
      'An engineering manager learned why the Cursor-vs-Claude-Code question wasn\'t the real bottleneck for their team.',
      'A product lead got a clear "no, this isn\'t a fit yet" with a specific list of what to figure out first.',
    ],
    relatedLearnSlug: 'claude-code-windows-installation-guide',
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'individual',
    isFree: true,
  },
  {
    id: 'ai-mentorship',
    title: '1:1 AI Mentorship',
    duration: '45 mins',
    price: '₹2,500',
    format: 'Video call',
    description:
      "You're an engineer, PM, or team lead who knows AI tools exist but hasn't figured out where they fit in your actual work. Maybe you've tried ChatGPT but it felt like a toy. Maybe your company is pushing AI adoption and you don't want to fall behind. Maybe you're building something and want a second pair of eyes from someone who ships with these tools daily. This is a focused 1:1 session, not a course, not a lecture. You bring your specific situation, we work through it together.",
    whoFor: [
      'Engineers exploring AI-assisted development (Claude Code, Cursor, MCP)',
      'Team leads figuring out where AI fits in their team\'s workflow',
      'Professionals who want to adopt AI but don\'t know where to start',
    ],
    whatYouGet: [
      'A clear picture of which AI tools match your specific work',
      'Hands-on guidance on your actual use case (not generic demos)',
      'A concrete next step you can act on this week',
    ],
    note: 'Book multiple sessions if you need ongoing support. Many people do one session, try things for two or three weeks, then come back with sharper questions.',
    exampleOutcomes: [
      'Walked an engineer through setting up Claude Code with CLAUDE.md and Plan Mode for their .NET monorepo, replacing what had been three days of false starts.',
      'Helped a tech lead choose between Cursor, Claude Code, and Copilot for their team based on actual codebase characteristics, not marketing pages.',
      'Coached a product manager on using Cowork to automate weekly research that was previously eating two full afternoons.',
    ],
    priceAmount: 2500,
    priceCurrency: 'INR',
    relatedLearnSlug: 'claude-code-windows-installation-guide',
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'individual',
  },
  {
    id: 'ai-workflow-setup',
    title: 'AI Workflow Setup',
    duration: '90 mins',
    price: '₹5,000',
    format: 'Video call or on-site',
    description:
      "You have repetitive tasks eating your day. Research that takes hours, reports that follow the same template, code reviews that could be faster, onboarding docs that nobody updates. In this session, we pick one high-impact workflow from your actual work and automate it end-to-end using AI tools. This isn't \"let me show you ChatGPT.\" We set up Claude, Cowork, MCP servers, or automation pipelines on your machine, connected to your real files and projects. You leave with something working, not a plan to build something later.",
    whoFor: [
      'Engineers or managers drowning in repetitive work',
      'Solopreneurs who want AI doing the grunt work so they can focus',
      "Anyone who's tried AI tools casually but wants a proper setup",
    ],
    whatYouGet: [
      'One fully working AI workflow on your machine',
      'Understanding of how and why it works (not a black box)',
      'Enough knowledge to tweak and extend it yourself',
    ],
    note: "Listed as 90 mins but I won't cut you off mid-setup. If we need an extra 15 minutes to get it working properly, we take it.",
    exampleOutcomes: [
      'Built a working MCP server connecting Claude to a content team\'s Notion workspace in one session. They use it daily.',
      'Set up Claude Code with a custom CLAUDE.md and three Plan Mode templates for a freelance developer\'s React projects.',
      'Stood up a Cowork workflow that triages weekly support tickets before the human ever opens them.',
    ],
    priceAmount: 5000,
    priceCurrency: 'INR',
    relatedLearnSlug: 'claude-code-windows-installation-guide',
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'individual',
  },
  {
    id: 'team-ai-training',
    title: 'Team AI Training',
    duration: '6 hours (full day)',
    price: '₹50,000',
    teamSize: '3 to 7 people',
    format: 'On-site or remote',
    description:
      "Your team has heard about AI but most of them are still copy-pasting into ChatGPT and hoping for the best. Some are skeptical. Some are curious but don't know where to start. One or two might be using it well but can't explain their approach to others. This full-day session gets your entire team to a shared baseline. Not by lecturing about AI, but by having each person practice on their actual daily work during the session. Everything is practiced on your team's real projects. No slides-only segments. No toy examples.",
    coversHeading: 'What we cover',
    covers: [
      'How LLMs actually work (the 20-minute version that changes how people prompt forever)',
      'Context engineering: giving AI the right information to get useful output, not garbage',
      'Setting up guardrails: what to check before trusting AI output, especially for code and client-facing work',
      'AI-assisted development with Claude Code and Cursor for engineering teams',
      "Responsible usage: what your team should and shouldn't put into AI tools (compliance, IP, data sensitivity)",
    ],
    whoFor: [
      'Engineering teams (3 to 7 people) where AI adoption is uneven',
      'Managers who want their team using AI but doing it responsibly',
      'Teams that tried AI tools and got inconsistent or unreliable results',
    ],
    whatYouGet: [
      'Every team member with a working AI setup on their machine',
      "A shared prompt library tailored to your team's common tasks",
      "Clear guidelines on what's safe to put into AI tools and what isn't",
      'Confidence to use AI daily, not just when they remember to',
    ],
    note: "On-site preferred. I'm based in Mumbai and happy to visit your office. Full-day sessions work significantly better in person. Remote works too if your team is distributed.",
    exampleOutcomes: [
      'Five-engineer team left with Claude Code wired up across their .NET microservice repos and a shared CLAUDE.md that survived their next sprint.',
      'A product team of seven built a shared prompt library tied to their actual review and reporting templates, replacing eight separate ChatGPT histories.',
      'A leadership group walked away with a written policy on what employee data is and is not allowed to enter AI tools, drafted live during the session.',
    ],
    priceAmount: 50000,
    priceCurrency: 'INR',
    relatedLearnSlug: 'claude-code-windows-installation-guide',
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'team',
  },
  {
    id: 'build-along-session',
    title: 'Build-Along Session',
    duration: '6 hours (full day)',
    price: '₹50,000',
    teamSize: '2 to 5 people',
    format: 'On-site or remote',
    description:
      "Your team has a specific tool, workflow, or internal system they want to build, and you want to build it with AI, not just talk about it. This is the session where we actually ship something. I sit with your team for a full day and we build together. I drive the AI tools, your team drives the requirements and decisions. By end of day, you have working software AND a team that watched (and participated in) the entire process. They can build the next one without me.",
    coversHeading: "What we've built in these sessions",
    covers: [
      'Internal knowledge bases that answer team questions from your docs',
      'MCP servers connecting AI tools to your company\'s data sources',
      'Automation pipelines for reporting, onboarding, and review workflows',
      'Custom Claude Projects configured for your team\'s specific context',
    ],
    whoFor: [
      'Teams with a specific idea they want to prototype in one day',
      'Engineering leads who want to evaluate AI-assisted development on a real project before rolling it out',
      'Founders who need an internal tool built and want to learn the process, not just get a deliverable',
    ],
    whatYouGet: [
      'A working prototype or tool deployed to your environment',
      'Your team understanding how it was built and how to extend it',
      'A decision framework for which future projects fit AI-assisted development and which don\'t',
    ],
    note: "Different from Team Training: Training teaches your team to use AI in their existing work. Build-Along produces a specific new thing that didn't exist before. If your team needs both, book Training first. The training makes the build-along dramatically more productive. Best for 2 to 5 people; above 5, some people end up watching instead of building.",
    exampleOutcomes: [
      'Shipped an internal docs assistant connecting Claude to a SaaS company\'s Confluence in one day. The team owns it now.',
      'Built and deployed an MCP server linking a finance team\'s Excel workflow to Cowork, eliminating 4 hours of weekly manual prep.',
      'Stood up a Claude Code setup tuned to a team\'s specific code review checklist, used for 100+ PRs in the following month.',
    ],
    priceAmount: 50000,
    priceCurrency: 'INR',
    relatedLearnSlug: 'claude-code-windows-installation-guide',
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'team',
  },
];
