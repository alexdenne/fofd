# Orchestrate FoFD Site Build

Coordinate the entire website build process by discovering strategy documents, synthesizing tasks, and dispatching parallel sitebuilder agents.

## Arguments
- `$ARGUMENTS` - Optional: "status" (show progress), "plan" (generate execution plan), "dispatch [stream]" (spawn sitebuilder)

## Instructions

You are the **Agentic Orchestrator** for the Friends of Farthing Downs & Happy Valley website rebuild. Your role is to coordinate the entire site build by:

1. **Discovering** all strategy and plan documents
2. **Synthesizing** tasks from multiple sources with citations
3. **Analyzing** dependencies to identify parallel work streams
4. **Dispatching** specialized sitebuilder agents
5. **Tracking** progress across all work streams

---

## Phase 1: Strategy Discovery

First, scan for all strategy and planning documents. Read and cite each:

### Required Documents (always check these exist):
1. `docs/WEBSITE_STRATEGY.md` - Original strategy (December 2024)
2. `docs/EVOLVED-STRATEGY.md` - Research-evolved strategy (December 2025)
3. `docs/migration/MIGRATION-PLAN.md` - Phased migration plan
4. `docs/migration/PROJECT-PLAN.md` - Project success criteria
5. `docs/FoFD Meeting Notes - September 2025.md` - Committee decisions
6. `docs/DESIGN-FEEDBACK-AGENTS.md` - Agent definitions for review

### Discovery Search (find additional planning docs):
- Glob pattern: `docs/**/*.md` - All markdown in docs
- Grep pattern: `strategy|plan|roadmap|task|phase` (case-insensitive) in docs/
- Check for any `TODO.md`, `ROADMAP.md`, `BACKLOG.md` files

### For Each Document Found:
```markdown
## Document: [filename]
- **Location**: [full path]
- **Version/Date**: [if available]
- **Key Decisions**: [bullet list of 3-5 key strategic decisions]
- **Tasks Extracted**: [count]
- **Dependencies**: [what this document depends on or blocks]
```

---

## Phase 2: Task Synthesis

Extract all tasks from discovered documents and consolidate into a master task list.

### Task Structure:
```markdown
| ID | Task | Source Document | Phase | Stream | Dependencies | Status |
|----|------|-----------------|-------|--------|--------------|--------|
| T001 | Create homepage HTML | MIGRATION-PLAN.md:L307 | 3A | Content | T050, T051 | pending |
```

### Streams (for parallel execution):
1. **CONTENT** - Pages, copy, images, gallery
2. **TECHNICAL** - Infrastructure, CSS, components, embeds
3. **COMMUNITY** - Membership flows, social, volunteer systems
4. **MIGRATION** - Legacy extraction, PDF conversion, Nature Trail
5. **POLISH** - Accessibility, SEO, performance, final review

### Task Sources to Extract:
- `docs/migration/MIGRATION-PLAN.md` - Phase 0-4 tasks
- `docs/migration/tasks/PHASE-*.md` - Detailed phase tasks
- `docs/EVOLVED-STRATEGY.md` - Implementation roadmap (Phase 1-3)
- `docs/agentic-content-review/content-inventory/inventory.md` - Review tasks

---

## Phase 3: Dependency Analysis

Build a dependency graph to identify:

1. **Blockers** - Tasks that must complete before others can start
2. **Parallel Opportunities** - Tasks that can run simultaneously
3. **Critical Path** - The longest chain of dependent tasks

### Visualize as ASCII:
```
PARALLEL BATCH 1:
├── [T001] PDF→Markdown (MIGRATION)
├── [T002] Image Metadata (MIGRATION)
├── [T003] Dev Environment (TECHNICAL)
└── [T004] Design System Setup (TECHNICAL)

PARALLEL BATCH 2 (after Batch 1):
├── [T010] Homepage Build (CONTENT) → depends on T003, T004
├── [T011] Join Page Build (CONTENT) → depends on T003, T004
└── [T012] Gallery Page Build (CONTENT) → depends on T002

SEQUENTIAL (after Batch 2):
[T020] Integration Testing → [T021] Staging → [T022] Launch
```

---

## Phase 4: Dispatch Sitebuilders

Generate prompts for specialized sitebuilder agents. Each prompt should be self-contained and executable.

### Available Sitebuilders:
Read the agent definitions from:
- `docs/agentic-orchestration/sitebuilders/sitebuilder-content.md`
- `docs/agentic-orchestration/sitebuilders/sitebuilder-technical.md`
- `docs/agentic-orchestration/sitebuilders/sitebuilder-community.md`
- `docs/agentic-orchestration/sitebuilders/sitebuilder-migration.md`
- `docs/agentic-orchestration/sitebuilders/sitebuilder-polish.md`

### Dispatch Format:
For each sitebuilder being dispatched, output:

```markdown
---
## DISPATCH: [Sitebuilder Name]

### Context
[Summary of what this sitebuilder should know about the project state]

### Tasks Assigned
| ID | Task | Priority | Depends On | Est. Complexity |
|----|------|----------|------------|-----------------|
| ... | ... | ... | ... | ... |

### Key References
- Strategy: [specific sections to reference]
- Design: [CSS classes, components available]
- Previous Work: [what's already done]

### Success Criteria
- [ ] [Specific deliverable 1]
- [ ] [Specific deliverable 2]
- [ ] [Review agent to invoke when done]

### Prompt for Sitebuilder
```
[Full executable prompt that can be copy-pasted to spawn the agent]
```
---
```

---

## Phase 5: Progress Tracking

Maintain progress state in `docs/agentic-orchestration/progress/STATUS.md`:

```markdown
# Orchestration Status

**Last Updated**: [timestamp]
**Overall Progress**: [X]% ([completed]/[total] tasks)

## Stream Progress

| Stream | Progress | Blocker | Next Action |
|--------|----------|---------|-------------|
| CONTENT | 3/12 (25%) | None | Build Visit page |
| TECHNICAL | 5/8 (62%) | Waiting on design assets | - |
| COMMUNITY | 0/6 (0%) | Blocked by CONTENT | - |
| MIGRATION | 8/19 (42%) | None | Continue PDF conversion |
| POLISH | 0/5 (0%) | Blocked by all streams | - |

## Recent Completions
- [timestamp] T001: Homepage created (CONTENT)
- [timestamp] T050: CSS framework done (TECHNICAL)

## Active Sitebuilders
- sitebuilder-content: Working on T002 (Join page)
- sitebuilder-migration: Working on T060-T068 (PDF batch)

## Blockers & Decisions Needed
- [ ] Human decision needed: Domain name confirmation
- [ ] Human action needed: Stripe account setup
```

---

## Argument Handling

### If `$ARGUMENTS` is empty or "plan":
1. Run Phase 1-3 (Discovery, Synthesis, Analysis)
2. Output the full execution plan
3. Ask which streams to dispatch

### If `$ARGUMENTS` is "status":
1. Read `docs/agentic-orchestration/progress/STATUS.md`
2. Summarize current state
3. Identify blockers and next actions

### If `$ARGUMENTS` is "dispatch [stream]":
1. Read current status
2. Load the appropriate sitebuilder definition
3. Generate a complete, executable dispatch prompt
4. Update STATUS.md with "dispatched" status

### If `$ARGUMENTS` is "all":
1. Run full orchestration
2. Output all dispatchable prompts for parallel execution
3. Group by dependency batch

---

## Output Style

Use clear, actionable formatting:
- Tables for task lists
- ASCII diagrams for dependencies
- Code blocks for executable prompts
- Citations with `[source:line]` format

Always cite which document a task or decision comes from:
> "Tiered membership £10/£25/£50" — EVOLVED-STRATEGY.md:355-379

---

## Cross-References

The orchestrator should be aware of:
- **Review Agents**: `docs/agentic-content-review/agents/agent-*.md` (for sitebuilders to invoke)
- **Content Inventory**: `docs/agentic-content-review/content-inventory/inventory.md`
- **Site Structure**: `site-2026/` (current state of new site)
- **Legacy Content**: `site-2005-2025/` (source material)

---

## Example Orchestration Output

```markdown
# FoFD Site Build Orchestration

## Strategy Documents Discovered

### 1. EVOLVED-STRATEGY.md
- **Location**: docs/EVOLVED-STRATEGY.md
- **Version**: 2.0 (December 2025)
- **Key Decisions**:
  - GitHub Pages platform (not Wix) — L136-165
  - Tiered membership £10/£25/£50 — L355-379
  - Instagram Reels primary outreach — L299-319
  - Two-track contribution model — L213-249
- **Tasks Extracted**: 47
- **Dependencies**: Builds on WEBSITE_STRATEGY.md

[...continues for each document...]

## Consolidated Task List

[Table of all tasks with IDs, sources, streams, dependencies]

## Dependency Graph

BATCH 1 (can start immediately):
├── MIGRATION: T060-T068 PDF Conversion [no deps]
├── MIGRATION: T070-T079 Image Metadata [no deps]
├── TECHNICAL: T040-T045 CSS Framework [no deps]

BATCH 2 (after Batch 1):
├── CONTENT: T001-T005 Core Pages [needs T040-T045]
[...]

## Ready to Dispatch

The following sitebuilders can start now:
1. **sitebuilder-migration** — 19 tasks, no blockers
2. **sitebuilder-technical** — 8 tasks, no blockers

Would you like me to generate dispatch prompts for these?
```

---

*Orchestrator designed for parallel execution with maximum throughput.*
