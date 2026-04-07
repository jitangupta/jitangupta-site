export interface Service {
  id: string;
  title: string;
  duration: string;
  price: string;
  priceNote?: string;
  teamSize?: string;
  format?: string;
  description: string;
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
    description:
      "Not sure which session is right for you? Let's talk for 15 minutes and figure it out together.",
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'individual',
    isFree: true,
  },
  {
    id: 'ai-workflow-setup',
    title: 'AI Workflow Setup',
    duration: '60 mins',
    price: '₹5,000',
    description:
      "I'll help you set up Claude, Cowork, or MCP on your machine and get it working on your actual tasks. You come with your work, you leave with a working AI workflow. Not a demo — your real files, your real projects.",
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'individual',
  },
  {
    id: 'team-ai-training',
    title: 'Team AI Training',
    duration: '6 hours (full day)',
    price: '₹50,000',
    teamSize: '3–7 people',
    format: 'On-site or remote',
    description:
      "A full-day hands-on session where your team learns to work with AI tools responsibly and effectively. We cover context engineering, guardrails implementation, responsible AI usage, and how tools like Claude, Cowork, and MCP work internally so your team understands what's happening under the hood for compliance. We also cover AI-assisted IDEs like Cursor for daily development work. Everything is practiced on your team's actual projects, not demos. I'm happy to visit your office for better results. Best for engineering teams of 3–7.",
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'team',
  },
  {
    id: 'build-along-session',
    title: 'Build-Along Session',
    duration: '6 hours (full day)',
    price: '₹50,000',
    teamSize: '3–7 people',
    format: 'On-site or remote',
    description:
      "Your team has an idea for an internal tool. In this full-day session, we build it together using AI-assisted development while learning the right way to do it. Your team will learn context engineering, setting up guardrails, understanding how Claude-based tools work internally for compliance, and using AI IDEs like Cursor effectively. You walk away with working software and a team that knows how to build more responsibly. I'm happy to visit your office for a better hands-on experience.",
    ctaLink: 'https://topmate.io/jitangupta',
    tier: 'team',
  },
];
