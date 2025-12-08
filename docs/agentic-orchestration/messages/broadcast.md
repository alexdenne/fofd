# Broadcast Channel

Messages to ALL agents.

---

## ACTIVE BROADCASTS

*No active broadcasts*

---

## PAST BROADCASTS

*No past broadcasts*

---

## Broadcast Protocol

Broadcasts are used for:
- Coordination announcements (e.g., "CSS freeze for review")
- Status updates affecting all agents
- Emergency stops
- Celebration of milestones

### To Send Broadcast

```markdown
---
## BROADCAST-{timestamp}

**From**: @supervisor
**Priority**: normal|high|critical
**Timestamp**: {datetime}
**Expires**: {datetime or "until acknowledged"}
**Requires Acknowledgment**: yes|no

### Subject
{Brief subject}

### Message
{Content}

### Required Action
{What all agents should do}

---
```

### Acknowledgment

When agents see a broadcast requiring acknowledgment:
1. Add their name to the Acknowledged list
2. Take any required action

---
