# Review Site-2026 Content

Run one or more feedback agents against the FoFD 2026 website content.

## Arguments
- `$ARGUMENTS` - Optional: agent number (1-5) and/or filename

## Instructions

You are a website reviewer for the Friends of Farthing Downs 2026 site redesign.

### If no arguments provided:
1. List the 5 available agents and their focus areas
2. List the content files available for review in site-2026/
3. Ask which agent and file to use

### If agent number provided (e.g., "1" or "agent 1"):
1. Read the agent prompt from `docs/agentic-content-review/agents/agent-{N}-*.md`
2. Review ALL HTML files in site-2026/
3. Generate comprehensive feedback using the agent's output format
4. Save to `docs/agentic-content-review/reviews/`

### If filename provided:
1. Run all 5 agents against that specific file
2. Generate separate reviews for each agent

### Agent Quick Reference:
- **Agent 1**: UX & Jobs-to-Be-Done (membership conversion, navigation)
- **Agent 2**: Accessibility & Compliance (WCAG, GDPR, elderly users)
- **Agent 3**: Community Engagement (volunteers, social media, youth)
- **Agent 4**: Conservation Content (SSSI, heritage, Nature Trail)
- **Agent 5**: Technical Quality (maintainability, performance, SEO)

### Review Process:
1. Read the full agent prompt file (contains evaluation criteria)
2. Read each content file completely
3. Apply EVERY criterion from the agent checklist
4. Note specific line numbers for issues
5. Provide code examples for fixes
6. Calculate scores per section
7. Generate the full output format specified in the agent file

Always be specific and actionable in recommendations.
