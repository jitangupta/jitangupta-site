# Homepage feedback for Applied AI / FDE transition positioning

## Context

This feedback is based on the live site at `https://jitangupta.com/`, supporting pages, GitHub profile, and the current local homepage source.

The goal is not to make the site sound more impressive than it is. The goal is to make the strongest true signal easier for a recruiter or hiring manager to see.

The right near-term positioning is:

> Applied AI / AI infrastructure engineer with a forward-deployed operating style.

The long-term goal is Forward Deployed Engineer, but the homepage should not sound like it is chasing a title. It should prove the behaviors that make someone credible for FDE work.

## Honest diagnosis

The site does not mainly have a "not enough years of experience" problem.

The bigger problem is that the homepage currently mixes three identities:

- AI adoption practitioner
- teacher / YouTube creator
- production engineer building AI tooling

For the transition, the third identity is the strongest. The first two can support it, but they should not lead.

The homepage should make this progression obvious:

> production platform engineer -> applied AI / AI infrastructure engineer -> forward-deployed engineering

An AI Engineer or FDE recruiter needs to quickly see:

- Can this person talk to users and understand messy workflows?
- Can this person build real software, not just explain tools?
- Can this person deploy into production-like environments?
- Can this person handle ambiguity, tradeoffs, and operational constraints?
- Can this person prove impact with real systems?

The current live homepage has proof, but it is not ordered around those questions.

## Positioning decision

Do not make the site sound like:

> I am already a Forward Deployed Engineer.

That may feel aspirational before the agent and customer-deployment proof is strong enough.

Instead, make the site sound like:

> I am an applied AI / AI infrastructure engineer who works in a forward-deployed way.

This is more credible today and still points directly at the FDE goal.

Best current positioning:

> Platform engineer building AI infrastructure, agent workflows, and developer tooling from real production problems. Open to Applied AI Engineer and Forward Deployed Engineer roles.

Shorter version:

> AI infrastructure engineer who works from real user workflows to deployed systems.

Homepage-friendly version:

> I build AI infrastructure and agent workflows that survive real production constraints.

## Highest-priority changes

### 1. Stop leading with "AI adoption practitioner"

Current live positioning:

> AI adoption practitioner

This sounds adjacent to implementation. It can read as trainer, consultant, or content creator.

For Applied AI / AI infrastructure positioning, lead with engineering, AI systems, and deployment.

Better direction:

> Engineer building AI systems, agent tooling, and deployment workflows for real teams.

Or:

> Platform engineer building at the AI layer.

Or:

> I build AI infrastructure, agent workflows, and developer tools from real production problems.

Keep teaching as supporting proof, not the headline.

### 2. Put hard proof above the fold

The homepage should surface the strongest production signals immediately.

Use proof like:

- 10+ years shipping production software
- 400+ tenant AKS migration
- 14 microservices moved toward Kubernetes
- Identity migration serving 50K+ daily authentications
- RAG deployment orchestration POC reducing release planning from 2 hours to 10 minutes
- Zero-downtime / low-risk migration work

Do not make the visitor scroll to case studies before they see this.

### 3. Replace services language with deployment language

The live site still has "Services" in navigation and some pages contain consulting-era CTAs such as strategy calls.

That weakens both the AI Engineer and FDE signal.

Remove or de-emphasize:

- Services
- Strategy call
- Consulting-style CTAs
- "I help teams adopt AI" as the primary message

Prefer:

- Builds
- Case studies
- Deployment work
- Production systems
- AI infrastructure
- Agent workflows
- Contact / full-time roles

### 4. Add a "forward-deployed operating style" section

Add a short section that maps real experience to the FDE role without making the homepage sound like a title grab.

Possible section title:

> How I work

Content shape:

- I work from real user and business constraints, not abstract demos.
- I build the system myself.
- I deploy, observe, and iterate.
- I can explain the tradeoffs to engineers and non-engineers.
- I document the path so others can reuse it.

This should feel factual, not salesy.

### 5. Align GitHub profile with the homepage

The GitHub profile currently emphasizes cloud/platform engineering, while the live homepage emphasizes AI adoption.

This split makes the overall profile feel less coherent.

Better GitHub bio direction:

> Platform engineer building AI infrastructure, agent workflows, and developer tooling. Azure, Kubernetes, MCP, Claude Code, and production SaaS modernization. Open to Applied AI / FDE roles.

The goal is one consistent story across site, GitHub, LinkedIn, and resume.

## Proof gaps to address honestly

### Python

Do not add Python as a major skill just because it is being learned this week.

Better approach:

- Build the agent project in Python.
- Add Python to the homepage only after there is a real repo.
- Mention it as current build evidence, not a generic skill badge.

Good phrasing after the repo exists:

> Current agent work: Python, tool calling, memory, traces, evals, token budget controls.

### Consulting work

This is probably not the real gap.

FDE is not normal consulting. It is customer-facing engineering under ambiguity.

Existing experience that already supports this:

- General store experience: customer problems and operations
- Startup attempts: product ownership and ambiguity
- Enterprise migrations: stakeholder constraints, rollout planning, risk management
- Team training during Kubernetes migration
- YouTube and meetups: explaining technical systems clearly

The homepage should frame these as proof of customer-facing engineering judgment.

### Building an agent from scratch

This is a real gap.

Current projects show agent-adjacent experience:

- MCP server
- Cowork boilerplate
- Claude Code workflows
- Agent QA harness

But for stronger Applied AI / FDE credibility, create one flagship agent project with:

- memory design
- tool registry
- observable traces
- token and cost tracking
- eval cases
- failure recovery
- README with architecture and tradeoffs
- a real workflow, not a toy demo

This should become the main "current build" on the homepage once ready.

This project is the bridge between "AI tooling creator" and "Applied AI Engineer who can become FDE."

## Suggested homepage structure

### Hero

Lead with the strongest credible transition identity.

Example:

> I build AI infrastructure and agent workflows that survive real production constraints.

Supporting copy:

> Ten years shipping production software across Kubernetes, multi-tenant SaaS, identity, and deployment automation. Now building at the AI layer: MCP servers, agent workflows, and developer tools that survive real engineering constraints.

Primary CTA:

- See builds

Secondary CTA:

- Read case studies

Small status line:

- Open to full-time Applied AI Engineer / AI Infrastructure / Forward Deployed Engineer roles

### Proof strip

Use 3-4 concrete proof points:

- 400+ tenants
- 14 microservices
- 50K+ daily authentications
- 2h -> 10m release planning POC

### Current builds

Show only the strongest projects.

Recommended order:

1. Agent project, once ready
2. cb-mcp-server
3. Agent QA Harness
4. PromptMate
5. Content Board

Avoid making PromptMate look like the main FDE proof. It is useful, but it reads more like a productivity tool than enterprise AI deployment work.

### Operating style

Add a concise mapping:

- User-facing: general store, startups, teaching, meetups
- Engineering depth: AKS, identity, SaaS, RAG orchestration
- AI layer: MCP, agents, workflows, evals
- Operating mode: build, deploy, observe, teach

### Case studies

Keep case studies, but rewrite summaries to emphasize:

- ambiguity
- constraints
- decisions made
- stakeholder impact
- deployment and observability
- tradeoffs

## Copy to avoid

Avoid:

- guru
- expert
- master
- consultant
- strategy call
- AI adoption that sticks
- I help non-technical professionals
- generic "AI transformation" language

Use carefully:

- AI adoption
- teaching
- creator
- content

These are useful only when they support the core engineering story.

## Best one-line positioning

Strongest direction:

> Platform engineer building AI infrastructure, agent workflows, and developer tooling from real production problems.

Best transition line:

> Applied AI / AI infrastructure engineer with a forward-deployed operating style.

More FDE-specific, once proof is stronger:

> Engineer who can sit with a messy workflow, understand the domain, build the system, deploy it, and keep iterating.

More homepage-friendly:

> I build AI infrastructure and agent workflows that survive real production constraints.

## Final opinion

The profile is not weak. The current live homepage under-sells the strongest parts and over-emphasizes the teacher/adoption persona.

For the next step, the site should make the production engineer and Applied AI builder obvious first, then use teaching and public building as proof of communication skill.

FDE should be visible as a direction, not overclaimed as the current identity.

The fastest improvement is not adding more claims. It is reordering the true evidence.
