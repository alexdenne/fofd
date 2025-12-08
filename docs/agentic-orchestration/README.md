# Agentic Orchestration System

## Overview

This system coordinates the entire FoFD 2026 website build through a multi-agent architecture featuring:

- **Orchestrator**: Discovers strategies, synthesizes tasks, coordinates work
- **Dispatcher**: Spawns sitebuilder agents via Task tool for true parallel execution
- **Supervisor**: Monitors health, resolves conflicts, escalates blockers
- **Sitebuilders**: 5 specialized agents that execute work and self-review
- **Checkpointing**: Resumable state for interrupted work
- **Message Queue**: Inter-agent communication system

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              SUPERVISOR (Alex)                               │
│                              /supervise                                      │
│     Monitors health • Resolves conflicts • Escalates blockers               │
└───────────────────────────────────┬─────────────────────────────────────────┘
                                    │
┌───────────────────────────────────┼─────────────────────────────────────────┐
│                           ORCHESTRATOR                                       │
│                           /orchestrate-site                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  1. DISCOVERY    → Scan all strategy & plan documents                        │
│  2. SYNTHESIS    → Extract tasks with acceptance criteria                    │
│  3. ANALYSIS     → Build dependency graph                                    │
│  4. DISPATCH     → Spawn agents via Task tool (/dispatch-sitebuilder)       │
│  5. TRACKING     → Checkpoints + Message queues                              │
This system coordinates the entire FoFD 2026 website build through an **Orchestrator** that discovers strategy documents, synthesizes tasks, and dispatches specialized **Sitebuilder Agents** for parallel execution.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           AGENTIC ORCHESTRATOR                               │
│                           /orchestrate-site                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  1. DISCOVERY    → Scan all strategy & plan documents                        │
│  2. SYNTHESIS    → Extract tasks with citations                              │
│  3. ANALYSIS     → Build dependency graph                                    │
│  4. DISPATCH     → Generate parallel sitebuilder prompts                     │
│  5. TRACKING     → Maintain progress state                                   │
└────────────┬────────────────────────┬────────────────────────┬──────────────┘
             │                        │                        │
             ▼                        ▼                        ▼
┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│  SITEBUILDER:      │  │  SITEBUILDER:      │  │  SITEBUILDER:      │
│  Content           │  │  Technical         │  │  Community         │
│  (Harper)          │  │  (Devon)           │  │  (Morgan)          │
├────────────────────┤  ├────────────────────┤  ├────────────────────┤
│ • HTML pages       │  │ • CSS framework    │  │ • Membership flow  │
│ • Copywriting      │  │ • Components       │  │ • Payment links    │
│ • Image placement  │  │ • Accessibility    │  │ • Volunteer forms  │
│ → Agent 1,4 review │  │ → Agent 5 review   │  │ → Agent 3 review   │
│ ✓ Checkpointing    │  │ ✓ Checkpointing    │  │ ✓ Checkpointing    │
└────────────────────┘  └────────────────────┘  └────────────────────┘
             │                        │                        │
             ▼                        ▼                        ▼
┌────────────────────┐  ┌────────────────────┐
│  SITEBUILDER:      │  │  SITEBUILDER:      │
│  Migration         │  │  Polish            │
│  (Riley)           │  │  (Quinn)           │
├────────────────────┤  ├────────────────────┤
│ • PDF→Markdown     │  │ • Accessibility    │
│ • Image metadata   │  │ • SEO optimization │
│ • Content extract  │  │ • Performance      │
│ → Validation       │  │ → All agents       │
│ ✓ Checkpointing    │  │ ✓ Checkpointing    │
└────────────────────┘  └────────────────────┘
             │                        │
             └────────────┬───────────┘
                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         MESSAGE QUEUE SYSTEM                                 │
│  inbox-*/outbox-* files • Human escalations • Broadcasts                    │
└─────────────────────────────────────────────────────────────────────────────┘
└────────────────────┘  └────────────────────┘
```

## Quick Start

### 1. Run the Orchestrator

```bash
/orchestrate-site           # Full planning and status
/orchestrate-site plan      # Generate execution plan
/orchestrate-site status    # Show current progress
```

### 2. Dispatch Sitebuilders

```bash
/dispatch-sitebuilder migration        # Spawn migration agent
/dispatch-sitebuilder technical        # Spawn technical agent
/dispatch-sitebuilder migration --resume  # Resume interrupted work
```

### 3. Monitor with Supervisor

```bash
/supervise                  # Quick health check
/supervise full             # Comprehensive supervision
/supervise emergency        # Critical intervention
```

### 4. Check Human Escalations

Review `messages/human-escalations.md` for actions needed from the committee.
In Claude Code:
```
/orchestrate-site
```

Or with arguments:
```
/orchestrate-site plan      # Generate execution plan
/orchestrate-site status    # Show current progress
/orchestrate-site dispatch content   # Spawn content sitebuilder
/orchestrate-site all       # Full orchestration with all prompts
```

### 2. Review the Plan

The orchestrator will:
1. Discover all strategy documents in `docs/`
2. Extract and consolidate tasks with citations
3. Show dependency graph and parallel opportunities
4. Recommend which sitebuilders can start immediately

### 3. Dispatch Sitebuilders

Copy the generated prompts to spawn sitebuilder agents. Sitebuilders that have no dependencies can run in parallel.

---

## Directory Structure

```
docs/agentic-orchestration/
├── README.md                          # This file
├── sitebuilders/                      # Agent definitions
├── sitebuilders/                      # Sitebuilder agent definitions
│   ├── sitebuilder-content.md        # Page creation (Harper)
│   ├── sitebuilder-technical.md      # CSS/infrastructure (Devon)
│   ├── sitebuilder-community.md      # Membership/engagement (Morgan)
│   ├── sitebuilder-migration.md      # Content extraction (Riley)
│   ├── sitebuilder-polish.md         # QA/launch prep (Quinn)
│   └── supervisor.md                 # Supervisor agent (Alex)
├── tasks/                             # Task definitions
│   └── TASK-REGISTRY.md              # All tasks with acceptance criteria
├── messages/                          # Inter-agent communication
│   ├── MESSAGE-PROTOCOL.md           # How messaging works
│   ├── inbox-*.md                    # Agent inboxes
│   ├── outbox-*.md                   # Agent outboxes
│   ├── broadcast.md                  # Messages to all agents
│   └── human-escalations.md          # Issues needing human action
├── progress/                          # Progress tracking
│   ├── STATUS.md                     # Current build status
│   ├── CHECKPOINT-PROTOCOL.md        # How checkpointing works
│   └── checkpoints/                  # Agent checkpoint files
│       └── {agent}-{task}.json       # Per-task state
└── prompts/                           # Generated dispatch prompts
    └── (generated at runtime)
```

### Claude Code Commands

```
.claude/commands/
├── orchestrate-site.md       # Main orchestration command
├── dispatch-sitebuilder.md   # Spawn sitebuilder agents
├── supervise.md              # Run supervisor checks
└── review-site.md            # Existing review system
│   └── sitebuilder-polish.md         # QA/launch prep (Quinn)
├── prompts/                           # Generated dispatch prompts
│   └── (generated at runtime)
└── progress/                          # Progress tracking
    └── STATUS.md                      # Current build status
```

---

## Sitebuilder Agents

### 1. Content Sitebuilder (Harper)
**Focus**: Creating HTML pages, writing copy, structuring content

**Capabilities**:
- Build complete HTML pages following design patterns
- Extract content from markdown sources
- Apply CSS classes from design system
- Self-review with Agent 1 (UX) and Agent 4 (Content)

**Typical Tasks**:
- Create Visit, Explore, About, Events pages
- Build Nature Trail interactive pages
- Write page copy from strategy briefs

### 2. Technical Sitebuilder (Devon)
**Focus**: CSS architecture, components, performance, accessibility infrastructure

**Capabilities**:
- Create and extend CSS design system
- Build reusable HTML components
- Implement social media embeds
- Self-review with Agent 5 (Technical)

**Typical Tasks**:
- Set up CSS framework
- Create form components
- Implement responsive navigation
- Configure social feed embeds

### 3. Community Sitebuilder (Morgan)
**Focus**: Membership flows, payments, volunteer recruitment, engagement

**Capabilities**:
- Design membership signup flows
- Integrate payment links (Stripe, etc.)
- Build volunteer forms
- Self-review with Agent 3 (Community)

**Typical Tasks**:
- Implement tiered membership UI
- Create volunteer signup form
- Add newsletter capture
- Configure GitHub Issues workflow

### 4. Migration Sitebuilder (Riley)
**Focus**: Extracting and converting legacy content

**Capabilities**:
- Convert PDFs to markdown
- Create image metadata inventories
- Extract content from legacy HTML
- Cross-reference Nature Trail content

**Typical Tasks**:
- Phase 0A: PDF→Markdown conversion
- Phase 0B: Image metadata enrichment
- Phase 1A: Page content extraction
- Phase 1C: Nature Trail audit

### 5. Polish Sitebuilder (Quinn)
**Focus**: Final QA, accessibility, SEO, launch preparation

**Capabilities**:
- Run accessibility audits (WCAG 2.1 AA)
- Optimize SEO (meta tags, structured data)
- Performance testing
- Integration verification

**Typical Tasks**:
- Comprehensive accessibility audit
- SEO optimization pass
- Form and payment testing
- Launch readiness checklist

---

## How Orchestration Works

### Phase 1: Discovery
The orchestrator scans for strategy documents:
- `docs/WEBSITE_STRATEGY.md`
- `docs/EVOLVED-STRATEGY.md`
- `docs/migration/MIGRATION-PLAN.md`
- `docs/migration/PROJECT-PLAN.md`
- All other `.md` files in `docs/`

### Phase 2: Task Synthesis
Tasks are extracted from each document with citations:
```
| ID | Task | Source | Phase | Stream | Dependencies |
|----|------|--------|-------|--------|--------------|
| T001 | Create homepage | MIGRATION-PLAN.md:L307 | 3A | CONTENT | T040, T041 |
```

### Phase 3: Dependency Analysis
Tasks are organized into parallel batches:
```
BATCH 1 (no dependencies):
├── T060: PDF→Markdown (MIGRATION)
├── T070: Image Metadata (MIGRATION)
├── T040: CSS Framework (TECHNICAL)

BATCH 2 (after Batch 1):
├── T001: Homepage (CONTENT) → needs T040
├── T002: Join page (CONTENT) → needs T040
```

### Phase 4: Dispatch
Self-contained prompts are generated for each sitebuilder:
```markdown
## DISPATCH: Sitebuilder-Migration

### Context
The project is starting Phase 0. No previous extraction work exists.

### Tasks Assigned
| ID | Task | Priority |
|----|------|----------|
| T060-T068 | PDF Conversion | HIGH |
| T070-T079 | Image Metadata | HIGH |

### Prompt
[Full executable prompt...]
```

### Phase 5: Tracking
Progress is maintained in `progress/STATUS.md`:
```markdown
| Stream | Progress | Blocker | Next Action |
|--------|----------|---------|-------------|
| CONTENT | 25% | None | Build Visit page |
| MIGRATION | 60% | None | Continue PDFs |
```

---

## Integration with Review Agents

Each sitebuilder **self-reviews** using the existing review agents:

| Sitebuilder | Primary Review Agent | Secondary |
|-------------|---------------------|-----------|
| Content | Agent 1 (UX) | Agent 4 (Content) |
| Technical | Agent 5 (Technical) | Agent 2 (Accessibility) |
| Community | Agent 3 (Community) | Agent 1 (UX) |
| Migration | Validation checks | — |
| Polish | All 5 agents | — |

Review agent prompts: `docs/agentic-content-review/agents/`

---

## Parallel Execution

### Maximum Parallelization

The following can run simultaneously:

**Batch 1** (no dependencies):
- Sitebuilder-Migration: PDF conversion + Image metadata
- Sitebuilder-Technical: CSS framework + Base components

**Batch 2** (after Batch 1):
- Sitebuilder-Content: All pages
- Sitebuilder-Community: Membership flows

**Batch 3** (after Batch 2):
- Sitebuilder-Polish: Full QA

### Running Agents in Parallel

To spawn multiple sitebuilders simultaneously, use the Claude Code Task tool with multiple calls in a single message.

---

## Progress Tracking

### Status File Format

`docs/agentic-orchestration/progress/STATUS.md`:
```markdown
# Orchestration Status

**Last Updated**: 2025-12-08T14:30:00Z
**Overall Progress**: 45% (54/120 tasks)

## Stream Progress

| Stream | Progress | Active Agent | Blocker |
|--------|----------|--------------|---------|
| MIGRATION | 80% | Riley | None |
| TECHNICAL | 90% | Devon | None |
| CONTENT | 30% | Harper | Waiting for T040 |
| COMMUNITY | 0% | — | Blocked by CONTENT |
| POLISH | 0% | — | Blocked by all |

## Recent Completions
- 14:25 T065: Nature Trail PDFs converted
- 14:10 T040: CSS framework complete
- 13:45 T070-T079: Image metadata batch done

## Blocking Issues
- [ ] Human: Stripe account setup needed
```

---

## Extending the System

### Adding a New Sitebuilder

1. Create `sitebuilders/sitebuilder-[name].md`
2. Follow the template structure:
   - Agent Identity (name, expertise, persona)
   - Mission
   - Context Documents
   - Capabilities (can do / cannot do)
   - Process steps
   - Self-review protocol
   - Output format
   - Communication protocol

3. Update orchestrator to recognize new stream

### Modifying Task Sources

The orchestrator extracts tasks from:
- `docs/migration/MIGRATION-PLAN.md` — Primary task source
- `docs/EVOLVED-STRATEGY.md` — Implementation roadmap
- `docs/migration/tasks/PHASE-*.md` — Detailed phase tasks

To add new task sources, update `orchestrate-site.md` Phase 2.

---

## Relationship to Review System

This orchestration system **complements** the existing review system:

| System | Purpose | When Used |
|--------|---------|-----------|
| **Agentic Content Review** | Evaluate completed work | After pages built |
| **Agentic Orchestration** | Coordinate building work | During build process |

The systems work together:
1. Orchestrator dispatches Sitebuilder-Content
2. Content creates homepage
3. Content self-reviews with Agent 1 & 4
4. Content reports completion to Orchestrator
5. Orchestrator updates status, dispatches next tasks

---

## Success Metrics

From `docs/EVOLVED-STRATEGY.md`:

### 30-Day Post-Launch
- [ ] 100+ unique website visitors
- [ ] 10+ new online memberships
- [ ] Mobile traffic > 50%
- [ ] Social feed embed working

### 6-Month Goals
- [ ] 500 monthly website visitors
- [ ] 100+ paying members
- [ ] Newsletter list > 200 subscribers

### Build Completion Criteria
- [ ] All 5 core pages complete (Home, Visit, Explore, Join, About)
- [ ] All agent reviews score > 70
- [ ] No Critical issues remaining
- [ ] Human handoffs documented

---

## Troubleshooting

### "Task has missing dependencies"
The orchestrator detected that a prerequisite task isn't complete. Check `STATUS.md` for the blocking task and dispatch the appropriate sitebuilder.

### "Sitebuilder can't find content"
Migration stream needs to run first to extract content. Run:
```
/orchestrate-site dispatch migration
```

### "Review agent scores low"
Sitebuilders should fix Critical and High priority issues before reporting completion. Check the self-review output and iterate.

---

## Design Philosophy

1. **Strategy-First**: All work traces back to documented strategy decisions
2. **Parallel by Default**: Maximize throughput through parallel execution
3. **Self-Checking**: Sitebuilders validate their own work before handoff
4. **Citation-Heavy**: Every task knows its source for traceability
5. **Human Handoffs Clear**: Non-automatable work is explicitly flagged
6. **Resumable**: Checkpointing ensures no work is lost
7. **Coordinated**: Message queues enable async agent communication

---

## Key Features

### Dispatcher Mechanism

The dispatcher (`/dispatch-sitebuilder`) uses Claude Code's Task tool to spawn actual sub-agents:

```bash
/dispatch-sitebuilder migration T060,T061,T062
```

This generates a complete, self-contained prompt and invokes the Task tool, enabling:
- True parallel execution
- Independent agent sessions
- Automatic context injection

### Checkpointing System

Every sitebuilder saves progress after each significant action:

```json
{
  "task_id": "T060",
  "status": "in_progress",
  "progress_percent": 65,
  "subtasks": {"completed": 19, "total": 29},
  "context": {"last_processed": "Post19English.pdf"}
}
```

To resume interrupted work:
```bash
/dispatch-sitebuilder migration --resume
```

See `progress/CHECKPOINT-PROTOCOL.md` for full details.

### Message Queue System

Agents communicate asynchronously via markdown message files:

- **Requests**: Agent needs something from another agent
- **Responses**: Reply to a request
- **Notifications**: Status updates
- **Escalations**: Issues requiring supervisor/human

Messages are routed through inbox/outbox files:
- `messages/inbox-{agent}.md` — Messages TO agent
- `messages/outbox-{agent}.md` — Messages FROM agent
- `messages/human-escalations.md` — Human action needed

See `messages/MESSAGE-PROTOCOL.md` for full protocol.

### Supervisor Agent

The supervisor (`/supervise`) monitors all agents and resolves issues:

**Health Monitoring**:
- Detects stalled agents (no checkpoint update in >2 hours)
- Identifies blocked tasks
- Tracks escalation resolution

**Conflict Resolution**:
- Detects overlapping file edits
- Serializes conflicting work
- Arbitrates priority

**Human Escalation**:
- Creates entries in `human-escalations.md`
- Tracks resolution status
- Re-escalates overdue items

### Acceptance Criteria

Every task in `tasks/TASK-REGISTRY.md` has explicit acceptance criteria:

```yaml
id: T060
title: Convert Nature Trail PDFs to Markdown
acceptance_criteria:
  - 29 markdown files created
  - Each file has YAML frontmatter
  - MANIFEST.json updated
done_when:
  files_created: [list]
  review_scores:
    agent_4: 70
```

Tasks are only marked complete when ALL criteria are met.

---

## Agent Roster

| Agent | Name | Role | Primary Review |
|-------|------|------|----------------|
| Orchestrator | — | Plans & coordinates | — |
| Dispatcher | — | Spawns agents | — |
| Supervisor | Alex | Monitors & resolves | — |
| Content | Harper | Pages & copy | Agent 1, 4 |
| Technical | Devon | CSS & infrastructure | Agent 5 |
| Community | Morgan | Membership & engagement | Agent 3 |
| Migration | Riley | Content extraction | Validation |
| Polish | Quinn | QA & launch prep | All agents |

---

*Last Updated: December 2025*
*System Version: 2.0 (with dispatcher, checkpointing, messaging, supervisor)*
