export interface Event {
  title: string;
  description: string;
  link: string;
  status: 'upcoming' | 'looking-for-venue' | 'past';
  statusLabel: string;
}

export const events: Event[] = [
  {
    title: "Claude at Work — Mumbai Meetup",
    description: "A hands-on session where developers use Claude Code and non-technical professionals use Claude Cowork to build an MVP together, live.",
    status: "looking-for-venue",
    statusLabel: "Accepting sponsors & venue partners",
    link: "/meetup/",
  },
];
