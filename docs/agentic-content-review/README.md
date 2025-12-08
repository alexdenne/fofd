# Agentic Content Review System

## Overview

This system enables 5 specialized AI agents to review all content for the FoFD 2026 website, providing comprehensive feedback based on JTBDs, success criteria, compliance requirements, and research-backed best practices.

## Quick Start

### Running a Full Review

```bash
# From repository root, run the orchestration script
./docs/agentic-content-review/scripts/run-review.sh
```

Or manually trigger each agent:

```bash
# Review with a specific agent
./docs/agentic-content-review/scripts/run-agent.sh agent-1-ux-jtbd
./docs/agentic-content-review/scripts/run-agent.sh agent-2-compliance
./docs/agentic-content-review/scripts/run-agent.sh agent-3-community
./docs/agentic-content-review/scripts/run-agent.sh agent-4-content
./docs/agentic-content-review/scripts/run-agent.sh agent-5-technical
```

## Folder Structure

```
agentic-content-review/
├── README.md                    # This file
├── agents/                      # Agent prompt templates
│   ├── agent-1-ux-jtbd.md      # UX & Jobs-to-Be-Done Evaluator
│   ├── agent-2-compliance.md    # Accessibility & Compliance Auditor
│   ├── agent-3-community.md     # Community Engagement Specialist
│   ├── agent-4-content.md       # Conservation Content Evaluator
│   └── agent-5-technical.md     # Technical Quality Assessor
├── content-inventory/           # Files to be reviewed
│   └── inventory.md             # Master list of all content
├── reviews/                     # Agent output (feedback)
│   ├── .gitkeep
│   └── [generated review files]
└── scripts/                     # Orchestration scripts
    ├── run-review.sh            # Master review script
    └── run-agent.sh             # Individual agent runner
```

## How It Works

### 1. Content Inventory
All reviewable content is catalogued in `content-inventory/inventory.md`. This includes:
- HTML pages (index.html, join.html, gallery.html, etc.)
- CSS stylesheets
- JavaScript files
- Documentation and research files

### 2. Agent Prompts
Each agent has a dedicated prompt template in `agents/` that:
- Defines their persona and expertise area
- Lists evaluation criteria with weightings
- Specifies the expected output format
- References relevant research from `/docs/deep-research/`

### 3. Review Output
Each agent generates feedback in `reviews/` following a standardized format:
- Overall score
- Critical issues (must fix)
- High/medium/low priority items
- Specific recommendations
- Page-by-page analysis

## Agent Descriptions

| Agent | Focus Area | Key Evaluations |
|-------|-----------|-----------------|
| **Agent 1** | UX & JTBDs | Membership conversion, navigation, user journeys, mobile |
| **Agent 2** | Compliance | WCAG 2.1 AA, GDPR, cookie consent, elderly accessibility |
| **Agent 3** | Community | Volunteer funnel, social integration, youth engagement |
| **Agent 4** | Content | SSSI messaging, heritage, Nature Trail, stewardship |
| **Agent 5** | Technical | Maintainability, performance, SEO, security |

## Using with Claude Code

### Interactive Review
```
> Review the site-2026 homepage using Agent 1

# Claude will:
# 1. Read agent-1-ux-jtbd.md for criteria
# 2. Read site-2026/index.html
# 3. Apply evaluation criteria
# 4. Generate feedback in reviews/
```

### Batch Review (All Agents)
```
> Run all 5 agents against the site-2026 content and save feedback

# Claude will iterate through each agent and content file
```

## Interpreting Results

### Scoring System
- **90-100**: Excellent - minor tweaks only
- **70-89**: Good - some improvements needed
- **50-69**: Needs Work - significant issues
- **Below 50**: Critical - major rework required

### Priority Levels
- **Critical**: Legal risk or complete failure of purpose
- **High**: Significantly impacts user experience or goals
- **Medium**: Should be fixed but not blocking
- **Low**: Nice to have improvements

## Extending the System

### Adding New Content
1. Add the file path to `content-inventory/inventory.md`
2. Tag it with relevant agent(s)
3. Re-run reviews

### Modifying Agent Criteria
1. Edit the relevant `agents/agent-*.md` file
2. Update weightings or add new criteria
3. Re-run that agent

### Adding a New Agent
1. Create `agents/agent-6-newagent.md`
2. Follow the template structure from existing agents
3. Add to `scripts/run-review.sh`

## Research Integration

Agents reference research from:
- `/docs/deep-research/Deep-Research 1 - Green Space Digital Strategy Research.md`
- `/docs/deep-research/Deep-Research 2 - Social Media Success of Volunteer Groups.md`
- `/docs/deep-research/compass_artifact_*.md` (12 additional research documents)
- `/docs/WEBSITE_STRATEGY.md`
- `/fofd-website-new/PROJECT-PLAN.md`
- `/docs/FoFD Meeting Notes - September 2025.md`

## Example Output

```markdown
## Agent 1: UX & JTBD Review - index.html

### Overall Score: 78/100

### Critical Issues
1. [JTBD-MEMBERSHIP] Join button leads to non-functional Stripe link
   - Impact: Complete failure of primary conversion goal
   - Fix: Integrate actual Stripe payment link

### High Priority
1. [NAV] Mobile menu touch targets too small
   - Current: ~30px
   - Required: 44px minimum (WCAG)
   - Fix: Increase padding in .nav-links a

### Recommendations
1. Add persistent "Join" CTA that floats on scroll
2. Test hero image loading on slow connections
```

---

*Last updated: December 2024*
