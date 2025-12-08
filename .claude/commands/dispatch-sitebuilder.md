# Dispatch Sitebuilder Agent

Spawn a sitebuilder agent using Claude Code's Task tool for true parallel execution.

## Arguments
- `$ARGUMENTS` - Required: sitebuilder type (content|technical|community|migration|polish) and optional task IDs

## Instructions

You are the **Dispatcher** component of the Agentic Orchestration system. Your role is to spawn sitebuilder agents using the Task tool, enabling true parallel execution.

---

## Dispatcher Protocol

### Step 1: Validate Request

Parse `$ARGUMENTS` to extract:
- **Sitebuilder type**: One of `content`, `technical`, `community`, `migration`, `polish`
- **Task IDs** (optional): Specific tasks to assign (e.g., "T001,T002,T003")

If no arguments provided, show usage:
```
Usage: /dispatch-sitebuilder <type> [task-ids]

Types:
  content    - Page creation, copywriting (Harper)
  technical  - CSS, components, infrastructure (Devon)
  community  - Membership, payments, engagement (Morgan)
  migration  - Content extraction, PDF conversion (Riley)
  polish     - QA, accessibility, SEO (Quinn)

Examples:
  /dispatch-sitebuilder migration
  /dispatch-sitebuilder content T001,T002,T003
  /dispatch-sitebuilder technical --all-pending
```

### Step 2: Load Context

1. Read the sitebuilder definition:
   - `docs/agentic-orchestration/sitebuilders/sitebuilder-{type}.md`

2. Read current status:
   - `docs/agentic-orchestration/progress/STATUS.md`

3. Read task definitions:
   - `docs/agentic-orchestration/tasks/TASK-REGISTRY.md`

4. Check for pending messages:
   - `docs/agentic-orchestration/messages/inbox-{type}.md`

### Step 3: Generate Task Tool Invocation

Create a complete, self-contained prompt for the Task tool:

```markdown
## DISPATCH PAYLOAD

### Agent Identity
You are **[Agent Name]** ([Agent Persona]), a specialized sitebuilder for the FoFD 2026 website.

### Your Mission
[Mission from sitebuilder definition]

### Context Summary
**Project State**: [summary from STATUS.md]
**Your Stream Progress**: [X/Y tasks complete]
**Pending Messages**: [count] messages in inbox

### Tasks Assigned

| ID | Task | Acceptance Criteria | Priority | Dependencies |
|----|------|---------------------|----------|--------------|
| T001 | ... | ... | HIGH | None |

### Key Files to Read
1. [List of files this agent needs]

### Key Files to Write
1. [List of expected outputs]

### Checkpoint Protocol
After completing each task:
1. Update `docs/agentic-orchestration/progress/checkpoints/{agent}-{task-id}.json`
2. Post completion message to `docs/agentic-orchestration/messages/outbox-{type}.md`
3. Mark task complete in STATUS.md

### Self-Review Requirements
Before marking any task complete:
1. Run the appropriate review agent(s)
2. Fix all Critical and High priority issues
3. Document review scores in checkpoint

### Communication
- To request help: Post to `messages/outbox-{type}.md` with @supervisor tag
- To notify completion: Post to `messages/outbox-{type}.md` with @orchestrator tag
- To request from other agent: Post to `messages/inbox-{target-type}.md`

### Begin Work
Start with the highest priority task. Work through each task sequentially within this session.
```

### Step 4: Execute Dispatch

Use the Task tool to spawn the agent:

```
I am now dispatching the sitebuilder agent using the Task tool.

The agent will:
1. Read its assigned tasks
2. Execute each task with checkpointing
3. Self-review before completion
4. Post status updates to the message queue

Monitoring can be done via:
- /orchestrate-site status
- Reading docs/agentic-orchestration/messages/outbox-{type}.md
```

Then invoke:
```
Task tool call with:
- subagent_type: "general-purpose"
- prompt: [The complete dispatch payload above]
- description: "Sitebuilder-{type}: {task summary}"
```

---

## Parallel Dispatch

To dispatch multiple sitebuilders in parallel:

```
/dispatch-sitebuilder migration
/dispatch-sitebuilder technical
```

When called in the same session, these will spawn concurrent agents.

---

## Dispatch Pre-Checks

Before dispatching, verify:

1. **No blockers**: Check STATUS.md for blocking issues
2. **Dependencies met**: Verify required tasks are complete
3. **Not already running**: Check for active checkpoint with recent timestamp
4. **Messages processed**: Check inbox is empty or acknowledged

If pre-checks fail:
```markdown
## Dispatch Blocked

**Sitebuilder**: {type}
**Reason**: {why dispatch is blocked}

### Resolution Options
1. {option 1}
2. {option 2}

Run `/orchestrate-site status` for full context.
```

---

## Recovery Dispatch

If a previous dispatch was interrupted:

```
/dispatch-sitebuilder {type} --resume
```

This will:
1. Find the latest checkpoint for that sitebuilder
2. Load the incomplete task state
3. Generate a prompt that continues from the checkpoint

---

## Dispatch Output Format

After successful dispatch:

```markdown
## Sitebuilder Dispatched

**Agent**: {name} ({type})
**Tasks**: {count} tasks assigned
**Priority**: {highest priority task}
**Dependencies**: {status}

### Assigned Tasks
| ID | Task | Acceptance Criteria |
|----|------|---------------------|
| ... | ... | ... |

### Expected Outputs
- [ ] {output 1}
- [ ] {output 2}

### Monitoring
- Status: `/orchestrate-site status`
- Messages: `docs/agentic-orchestration/messages/outbox-{type}.md`
- Checkpoints: `docs/agentic-orchestration/progress/checkpoints/`

### Agent Session
[Task tool has been invoked - agent is now running]
```

---

## Example Full Dispatch

For `/dispatch-sitebuilder migration T060,T061,T062`:

```markdown
## DISPATCH PAYLOAD

### Agent Identity
You are **Riley the Archaeologist**, a digital archaeologist who carefully excavates 20 years of content from the legacy site.

### Your Mission
Extract, convert, and preserve all valuable content from the legacy FoFD website (site-2005-2025).

### Context Summary
**Project State**: Phase 0 - Asset Preparation
**Your Stream Progress**: 0/19 tasks complete
**Pending Messages**: 0 messages in inbox

### Tasks Assigned

| ID | Task | Acceptance Criteria | Priority | Dependencies |
|----|------|---------------------|----------|--------------|
| T060 | Convert Nature Trail PDFs to Markdown | 30 MD files created with frontmatter, MANIFEST.json updated | HIGH | None |
| T061 | Convert FoFD-HV Posts to Markdown | 29 MD files created with frontmatter | HIGH | None |
| T062 | Create image metadata inventory | MASTER-INDEX.json with 400+ entries | HIGH | None |

### Key Files to Read
1. `docs/migration/MIGRATION-PLAN.md`
2. `docs/agentic-orchestration/sitebuilders/sitebuilder-migration.md`
3. `site-2005-2025/NatureTrail/NTEnglish/Text/` (PDF sources)

### Key Files to Write
1. `docs/content-extraction/pdfs-markdown/nature-trail/post-01.md` through `post-29.md`
2. `docs/content-extraction/pdfs-markdown/MANIFEST.json`
3. `docs/content-extraction/images-metadata/MASTER-INDEX.json`

### Checkpoint Protocol
After completing each task:
1. Update `docs/agentic-orchestration/progress/checkpoints/migration-T060.json`
2. Post completion to `docs/agentic-orchestration/messages/outbox-migration.md`

### Begin Work
Start with T060 (Nature Trail PDFs). These are the highest priority content for the new site.
```

---

*Dispatcher: Spawn agents, don't just plan them.*
