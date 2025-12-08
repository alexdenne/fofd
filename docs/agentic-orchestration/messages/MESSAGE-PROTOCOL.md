# Inter-Agent Message Protocol

Enable asynchronous communication between agents using markdown message queues.

---

## Overview

The message system enables:
1. **Agent-to-Agent requests** — Request content, components, or help
2. **Agent-to-Orchestrator reports** — Progress updates, completions, blockers
3. **Supervisor broadcasts** — Coordination, conflict resolution
4. **Human escalations** — Issues requiring human decision/action

---

## Message Queue Structure

```
messages/
├── MESSAGE-PROTOCOL.md          # This file
├── inbox-content.md             # Messages TO content sitebuilder
├── inbox-technical.md           # Messages TO technical sitebuilder
├── inbox-community.md           # Messages TO community sitebuilder
├── inbox-migration.md           # Messages TO migration sitebuilder
├── inbox-polish.md              # Messages TO polish sitebuilder
├── inbox-supervisor.md          # Messages TO supervisor
├── inbox-orchestrator.md        # Messages TO orchestrator
├── outbox-content.md            # Messages FROM content sitebuilder
├── outbox-technical.md          # Messages FROM technical sitebuilder
├── outbox-community.md          # Messages FROM community sitebuilder
├── outbox-migration.md          # Messages FROM migration sitebuilder
├── outbox-polish.md             # Messages FROM polish sitebuilder
├── broadcast.md                 # Messages to ALL agents
└── human-escalations.md         # Issues requiring human action
```

---

## Message Schema

Each message follows this format:

```markdown
---
## MSG-{timestamp}-{from}

**From**: @{sender}
**To**: @{recipient}
**Type**: request|response|notification|escalation
**Priority**: critical|high|normal|low
**Status**: pending|acknowledged|resolved
**Timestamp**: 2025-12-08T14:30:00Z
**Related Task**: T001 (optional)
**Expires**: 2025-12-08T16:30:00Z (optional)

### Subject
{Brief subject line}

### Body
{Message content}

### Required Response
{What the recipient should do, if applicable}

### Attachments
- {file path 1}
- {file path 2}

---
```

---

## Message Types

### 1. Request

One agent needs something from another.

```markdown
---
## MSG-20251208143000-content

**From**: @content (Harper)
**To**: @technical (Devon)
**Type**: request
**Priority**: high
**Status**: pending
**Timestamp**: 2025-12-08T14:30:00Z
**Related Task**: T004

### Subject
Need gallery component for Nature Trail page

### Body
Building the Nature Trail page (T004) and need a gallery/carousel component
to display the 29 trail stops with images.

Requirements:
- Responsive grid or carousel
- Image + title + description per item
- Click to expand/modal
- Accessible keyboard navigation

### Required Response
Create component and reply with CSS classes to use.

---
```

### 2. Response

Reply to a request.

```markdown
---
## MSG-20251208150000-technical

**From**: @technical (Devon)
**To**: @content (Harper)
**Type**: response
**Priority**: normal
**Status**: resolved
**Timestamp**: 2025-12-08T15:00:00Z
**Related Task**: T004
**In-Reply-To**: MSG-20251208143000-content

### Subject
RE: Need gallery component for Nature Trail page

### Body
Gallery component created and added to style.css.

Usage:
```html
<div class="trail-gallery">
  <article class="trail-stop">
    <img src="..." alt="..." class="trail-stop-image">
    <h3 class="trail-stop-title">Stop 1: Welcome</h3>
    <p class="trail-stop-desc">Description...</p>
    <button class="trail-stop-expand">Learn More</button>
  </article>
</div>
```

Files modified:
- site-2026/css/style.css (lines 450-520)

### Attachments
- site-2026/css/style.css

---
```

### 3. Notification

Inform without requiring response.

```markdown
---
## MSG-20251208160000-migration

**From**: @migration (Riley)
**To**: @orchestrator
**Type**: notification
**Priority**: normal
**Status**: acknowledged
**Timestamp**: 2025-12-08T16:00:00Z
**Related Task**: T060

### Subject
Task T060 Complete - Nature Trail PDFs Converted

### Body
Completed conversion of all 29 Nature Trail PDFs to markdown.

Results:
- 29/29 files created
- All frontmatter validated
- MANIFEST.json updated
- Self-review score: 88/100 (Agent 4)

Output location: docs/content-extraction/pdfs-markdown/nature-trail/

Unblocks: T004 (Nature Trail page)

---
```

### 4. Escalation

Issue requiring supervisor or human intervention.

```markdown
---
## MSG-20251208170000-community

**From**: @community (Morgan)
**To**: @supervisor
**Type**: escalation
**Priority**: critical
**Status**: pending
**Timestamp**: 2025-12-08T17:00:00Z
**Related Task**: T010

### Subject
BLOCKED: Stripe Payment Links not configured

### Body
Cannot complete T010 (Membership Tiers UI) because Stripe Payment Links
have not been created.

Current state:
- UI is complete with placeholders
- All three tier cards rendered
- Links show [STRIPE_LINK_FRIEND], [STRIPE_LINK_SUPPORTER], [STRIPE_LINK_PATRON]

### Required Response
Human action needed:
1. Log into Stripe Dashboard
2. Create Payment Links for each tier
3. Provide URLs to replace placeholders

### Impact
- T010 cannot be marked complete
- Launch blocked until resolved

---
```

---

## Message Flow Patterns

### Pattern 1: Content Needs Component

```
Content                Technical              Orchestrator
   |                      |                       |
   |--- REQUEST: Need component -------------→|   |
   |                      |                       |
   |                      |←--- FORWARD ---------|
   |                      |                       |
   |←-- RESPONSE: Component ready --------------|
   |                      |                       |
   |--- NOTIFICATION: Task complete ----------→|
```

### Pattern 2: Blocker Escalation

```
Community             Supervisor              Human
   |                      |                      |
   |--- ESCALATION: Blocked ----------------→|   |
   |                      |                      |
   |                      |--- ESCALATION ---→|  |
   |                      |                      |
   |                      |←-- RESOLUTION ----|  |
   |                      |                      |
   |←-- NOTIFICATION: Unblocked --------------|
```

### Pattern 3: Broadcast Coordination

```
Supervisor
   |
   |--- BROADCAST: CSS freeze for review ---→ All Agents
   |
Technical, Content, Community all acknowledge
```

---

## Inbox Processing Protocol

When an agent starts work, it should:

1. **Read inbox** — Check `inbox-{type}.md` for pending messages
2. **Process each message**:
   - If `request`: Evaluate, respond, or escalate
   - If `notification`: Acknowledge and update context
   - If `response`: Update related task context
3. **Update status** — Change `pending` to `acknowledged` or `resolved`
4. **Write responses** — Post to sender's inbox or own outbox

### Example Inbox Processing

```markdown
## Inbox Processing - Content Sitebuilder

### Pending Messages: 2

#### MSG-20251208143000-technical
- **Type**: response
- **Subject**: RE: Gallery component ready
- **Action**: Acknowledge, update T004 context with CSS classes

#### MSG-20251208150000-supervisor
- **Type**: notification
- **Subject**: CSS freeze lifted, proceed with styling
- **Action**: Acknowledge

### Processing Complete
- 2 messages processed
- 0 pending responses required
```

---

## Outbox Writing Protocol

After completing work or needing assistance:

1. **Compose message** — Follow schema above
2. **Write to own outbox** — `outbox-{type}.md`
3. **Copy to recipient inbox** — `inbox-{recipient}.md`
4. **For broadcasts** — Write to `broadcast.md`

---

## Human Escalations

For issues requiring human intervention:

```markdown
# Human Escalations

Issues requiring human decision or action.

---

## ACTIVE ESCALATIONS

### ESC-001: Stripe Account Setup
**Raised By**: @community (Morgan)
**Timestamp**: 2025-12-08T17:00:00Z
**Priority**: CRITICAL
**Blocking Tasks**: T010, T103
**Assigned To**: Treasurer
**Status**: PENDING

**Issue**:
Stripe Payment Links needed for membership tiers.

**Action Required**:
1. Create Stripe account (if not exists)
2. Create Payment Link for Friend tier (£10)
3. Create Payment Link for Supporter tier (£25)
4. Create Payment Link for Patron tier (£50)
5. Share URLs with @community

**Resolution**:
[To be filled when resolved]

---

### ESC-002: Domain Decision
**Raised By**: @technical (Devon)
**Timestamp**: 2025-12-08T14:00:00Z
**Priority**: HIGH
**Blocking Tasks**: T103
**Assigned To**: Committee
**Status**: PENDING

**Issue**:
Domain name not confirmed. Options:
1. friendsoffarthingdowns.org.uk (new)
2. farthingdowns.org.uk (if available)
3. Keep current domain (unknown)

**Action Required**:
Committee to decide on domain, register via Namecheap.

---

## RESOLVED ESCALATIONS

[None yet]

---
```

---

## Message Retention

- **Active messages**: Keep in inbox/outbox until resolved
- **Resolved messages**: Move to archive section within file
- **Escalations**: Keep in human-escalations.md until resolved

---

## Example Inbox File

`inbox-content.md`:

```markdown
# Inbox: Content Sitebuilder

Messages for @content (Harper).

---

## PENDING MESSAGES

### MSG-20251208143000-technical

**From**: @technical (Devon)
**To**: @content (Harper)
**Type**: response
**Priority**: normal
**Status**: pending
**Timestamp**: 2025-12-08T14:30:00Z
**Related Task**: T004

### Subject
Gallery component ready

### Body
Created trail gallery component per your request.

Classes: `.trail-gallery`, `.trail-stop`, `.trail-stop-image`,
`.trail-stop-title`, `.trail-stop-desc`, `.trail-stop-expand`

Documentation added to CONTRIBUTING.md.

---

## ACKNOWLEDGED MESSAGES

[Messages that have been read but may need follow-up]

---

## ARCHIVED MESSAGES

[Resolved messages for reference]

---
```

---

## Timeout and Expiry

- **Request timeout**: 2 hours default (escalate if no response)
- **Critical priority**: 30 minutes timeout
- **Expired messages**: Move to archive with "expired" status

---

*Messages: Async communication for parallel agents.*
