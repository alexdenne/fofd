# Checkpoint Protocol

Enable resumable work by saving state after each significant action.

---

## Overview

Checkpoints allow sitebuilder agents to:
1. **Resume after interruption** — Pick up exactly where they left off
2. **Report progress** — Show partial completion to orchestrator
3. **Enable recovery** — Rollback to last known good state
4. **Track time** — Measure actual vs estimated complexity

---

## Checkpoint Schema

Each checkpoint is a JSON file in `progress/checkpoints/`:

```json
{
  "checkpoint_id": "migration-T060-20251208-143025",
  "agent": "migration",
  "agent_name": "Riley",
  "task_id": "T060",
  "task_title": "Convert Nature Trail PDFs to Markdown",

  "status": "in_progress",
  "progress_percent": 65,

  "started_at": "2025-12-08T14:30:25Z",
  "updated_at": "2025-12-08T14:52:10Z",
  "completed_at": null,

  "subtasks": {
    "total": 29,
    "completed": 19,
    "failed": 0,
    "items": [
      {"id": "post-01", "status": "complete", "output": "pdfs-markdown/nature-trail/post-01.md"},
      {"id": "post-02", "status": "complete", "output": "pdfs-markdown/nature-trail/post-02.md"},
      {"id": "post-20", "status": "in_progress", "output": null},
      {"id": "post-21", "status": "pending", "output": null}
    ]
  },

  "files_created": [
    "docs/content-extraction/pdfs-markdown/nature-trail/post-01.md",
    "docs/content-extraction/pdfs-markdown/nature-trail/post-02.md"
  ],

  "files_modified": [
    "docs/content-extraction/pdfs-markdown/MANIFEST.json"
  ],

  "acceptance_criteria_met": {
    "29_files_created": false,
    "frontmatter_valid": true,
    "manifest_updated": true
  },

  "review_scores": {
    "agent_4": null,
    "agent_5": null
  },

  "errors": [],

  "context": {
    "last_processed": "Post19English.pdf",
    "next_to_process": "Post20English.pdf",
    "notes": "Hindi and Polish variants discovered - flagging for review"
  },

  "resumable": true,
  "resume_instructions": "Continue from post-20.md, source: NatureTrail/NTEnglish/Text/Post20English.pdf"
}
```

---

## Checkpoint Lifecycle

### 1. Task Start

When a sitebuilder begins a task:

```json
{
  "checkpoint_id": "migration-T060-20251208-143025",
  "status": "in_progress",
  "progress_percent": 0,
  "started_at": "2025-12-08T14:30:25Z",
  "subtasks": {"total": 29, "completed": 0},
  "resumable": true
}
```

### 2. Progress Updates

After each subtask or significant action:

```json
{
  "status": "in_progress",
  "progress_percent": 35,
  "updated_at": "2025-12-08T14:45:00Z",
  "subtasks": {"total": 29, "completed": 10},
  "context": {
    "last_processed": "Post10English.pdf",
    "next_to_process": "Post11English.pdf"
  }
}
```

### 3. Task Completion

When all acceptance criteria are met:

```json
{
  "status": "complete",
  "progress_percent": 100,
  "completed_at": "2025-12-08T15:30:00Z",
  "subtasks": {"total": 29, "completed": 29},
  "acceptance_criteria_met": {
    "29_files_created": true,
    "frontmatter_valid": true,
    "manifest_updated": true
  },
  "review_scores": {
    "agent_4": 85
  }
}
```

### 4. Task Blocked

When an issue prevents progress:

```json
{
  "status": "blocked",
  "progress_percent": 65,
  "errors": [
    {
      "type": "dependency_missing",
      "message": "Cannot find source PDF: Post20English.pdf",
      "timestamp": "2025-12-08T14:52:10Z",
      "blocking": true
    }
  ],
  "resumable": true,
  "resume_instructions": "Resolve missing PDF, then continue from post-20"
}
```

---

## Checkpoint Operations

### Creating a Checkpoint

```markdown
## Create Checkpoint

After completing subtask or encountering state change:

1. Read current checkpoint (if exists):
   `docs/agentic-orchestration/progress/checkpoints/{agent}-{task_id}.json`

2. Update fields:
   - `updated_at`: current timestamp
   - `progress_percent`: calculated from subtasks
   - `subtasks.completed`: increment
   - `files_created`: append new files
   - `context`: update last/next processed

3. Write checkpoint file

4. Post progress message to outbox:
   `@orchestrator: Task {task_id} progress: {percent}%`
```

### Resuming from Checkpoint

```markdown
## Resume from Checkpoint

When dispatched with --resume flag:

1. Read checkpoint file:
   `docs/agentic-orchestration/progress/checkpoints/{agent}-{task_id}.json`

2. Verify checkpoint is resumable:
   - `resumable` must be true
   - `status` must be "in_progress" or "blocked"

3. Load context:
   - `context.last_processed`: what was done
   - `context.next_to_process`: where to start
   - `subtasks.items`: which subtasks are pending

4. Skip completed subtasks:
   - Only process items with status != "complete"

5. Continue from `resume_instructions`
```

### Checkpoint File Naming

```
checkpoints/
├── migration-T060.json          # Current checkpoint for task
├── migration-T060-complete.json # Archived completed checkpoint
├── migration-T061.json
├── technical-T040.json
├── content-T001.json
└── ...
```

---

## Checkpoint Frequency

| Action Type | Checkpoint After |
|-------------|------------------|
| File created | Yes |
| File modified | If significant changes |
| Subtask completed | Yes |
| Error encountered | Yes |
| 5 minutes elapsed | Yes (heartbeat) |
| Review completed | Yes |
| Task completed | Yes |

---

## Recovery Scenarios

### Scenario 1: Session Timeout

Agent was processing but session ended.

**Detection**: Checkpoint has `updated_at` > 10 minutes ago, `status` = "in_progress"

**Recovery**:
1. `/dispatch-sitebuilder {type} --resume`
2. Agent reads checkpoint, continues from last position

### Scenario 2: Error During Processing

Agent encountered an error and couldn't continue.

**Detection**: Checkpoint has `status` = "blocked", `errors` array populated

**Recovery**:
1. Review errors in checkpoint
2. Fix underlying issue
3. Clear errors from checkpoint
4. `/dispatch-sitebuilder {type} --resume`

### Scenario 3: Partial Completion

Agent completed some work but not all acceptance criteria.

**Detection**: Checkpoint has `status` = "complete" but `acceptance_criteria_met` has false values

**Recovery**:
1. Identify unmet criteria
2. Dispatch agent with specific subtasks
3. Agent completes remaining work

---

## Heartbeat Protocol

To detect stalled agents:

```json
{
  "heartbeat": {
    "last_beat": "2025-12-08T14:55:00Z",
    "interval_seconds": 300,
    "status": "alive"
  }
}
```

Supervisor checks heartbeats and flags:
- **Warning**: No heartbeat for 10 minutes
- **Stalled**: No heartbeat for 30 minutes (may need recovery)

---

## Integration with Status

`progress/STATUS.md` aggregates checkpoint data:

```markdown
## Active Checkpoints

| Agent | Task | Progress | Last Update | Status |
|-------|------|----------|-------------|--------|
| migration | T060 | 65% | 2 min ago | in_progress |
| technical | T040 | 100% | 5 min ago | complete |
| content | T001 | 0% | — | not started |
```

---

## Example: Full Checkpoint Lifecycle

### Start of Task

Agent begins T060:

```json
{
  "checkpoint_id": "migration-T060-20251208-143025",
  "agent": "migration",
  "task_id": "T060",
  "status": "in_progress",
  "progress_percent": 0,
  "started_at": "2025-12-08T14:30:25Z",
  "updated_at": "2025-12-08T14:30:25Z",
  "subtasks": {
    "total": 29,
    "completed": 0,
    "items": []
  },
  "files_created": [],
  "resumable": true
}
```

### Mid-Progress

After processing 10 PDFs:

```json
{
  "status": "in_progress",
  "progress_percent": 34,
  "updated_at": "2025-12-08T14:45:00Z",
  "subtasks": {
    "total": 29,
    "completed": 10,
    "items": [
      {"id": "post-01", "status": "complete"},
      {"id": "post-10", "status": "complete"},
      {"id": "post-11", "status": "pending"}
    ]
  },
  "files_created": [
    "docs/content-extraction/pdfs-markdown/nature-trail/post-01.md",
    "docs/content-extraction/pdfs-markdown/nature-trail/post-10.md"
  ],
  "context": {
    "last_processed": "Post10English.pdf",
    "next_to_process": "Post11English.pdf"
  }
}
```

### Completion

All 29 files processed, review passed:

```json
{
  "status": "complete",
  "progress_percent": 100,
  "updated_at": "2025-12-08T15:30:00Z",
  "completed_at": "2025-12-08T15:30:00Z",
  "subtasks": {
    "total": 29,
    "completed": 29
  },
  "acceptance_criteria_met": {
    "29_files_created": true,
    "frontmatter_valid": true,
    "manifest_updated": true
  },
  "review_scores": {
    "agent_4": 88
  },
  "resumable": false
}
```

---

*Checkpoints: Never lose progress, always be recoverable.*
