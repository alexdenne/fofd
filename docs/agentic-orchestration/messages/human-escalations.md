# Human Escalations

Issues requiring human decision or action.

**Last Updated**: 2025-12-08
**Active Escalations**: 2
**Resolved Escalations**: 0

---

## ACTIVE ESCALATIONS

### ESC-001: Stripe Account Setup

| Field | Value |
|-------|-------|
| **Raised By** | System (anticipated) |
| **Timestamp** | 2025-12-08 |
| **Priority** | CRITICAL |
| **Blocking Tasks** | T010, T103 |
| **Assigned To** | Treasurer |
| **Status** | PENDING |

**Issue**:
Stripe Payment Links are required for the membership tier system. Cannot launch with non-functional payment buttons.

**Action Required**:
1. Log into Stripe Dashboard (create account if needed)
2. Go to Payment Links
3. Create Payment Link for Friend tier (£10/year)
4. Create Payment Link for Supporter tier (£25/year)
5. Create Payment Link for Patron tier (£50/year)
6. Create Payment Link for Concession (£5/year)
7. Provide URLs to replace placeholders in join.html

**Estimated Time**: 30-45 minutes

**Resolution**:
*[To be filled when resolved]*

---

### ESC-002: EmbedSocial Account Setup

| Field | Value |
|-------|-------|
| **Raised By** | System (anticipated) |
| **Timestamp** | 2025-12-08 |
| **Priority** | MEDIUM |
| **Blocking Tasks** | T013 |
| **Assigned To** | Social Media Team |
| **Status** | PENDING |

**Issue**:
Instagram feed embed requires EmbedSocial (or similar) account configuration.

**Action Required**:
1. Create EmbedSocial account (free tier available)
2. Connect Instagram account
3. Configure widget settings
4. Get embed code/reference ID
5. Provide to @community sitebuilder

**Estimated Time**: 20-30 minutes

**Resolution**:
*[To be filled when resolved]*

---

### ESC-003: Formspree Account Setup

| Field | Value |
|-------|-------|
| **Raised By** | System (anticipated) |
| **Timestamp** | 2025-12-08 |
| **Priority** | HIGH |
| **Blocking Tasks** | T011, T012 |
| **Assigned To** | Committee |
| **Status** | PENDING |

**Issue**:
Contact and volunteer forms need a form backend. Formspree is free for low volume.

**Action Required**:
1. Create Formspree account
2. Create form endpoint for volunteer signups
3. Create form endpoint for newsletter signups
4. Provide form IDs to replace placeholders

**Estimated Time**: 15-20 minutes

**Resolution**:
*[To be filled when resolved]*

---

## RESOLVED ESCALATIONS

*No resolved escalations yet*

---

## Resolution Protocol

When resolving an escalation:

1. Update **Status** to `RESOLVED`
2. Fill in **Resolution** field with:
   - What was done
   - Who did it
   - Date completed
   - Any follow-up notes
3. Move entry to RESOLVED ESCALATIONS section
4. Post notification to relevant agent's inbox
5. Update STATUS.md to reflect unblocked tasks

---

## Escalation Priority Guide

| Priority | Response Time | Examples |
|----------|---------------|----------|
| **CRITICAL** | Same day | Payment setup, legal issues |
| **HIGH** | 1-2 days | Account creation, access issues |
| **MEDIUM** | 3-5 days | Configuration, non-blocking features |
| **LOW** | Next sprint | Nice-to-have improvements |

---
