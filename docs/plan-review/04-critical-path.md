# Prioritization: What Blocks Everything Else?

**Prompt Used:** "Identify the critical path - which tasks must complete before others can start? What's the earliest blocker?"

**Documents Reviewed:** MIGRATION-PLAN.md, GAPS-AND-LIMITATIONS.md

---

## Critical Path Analysis

### The True Critical Path

```
┌─────────────────────────────────────────────────────────────────┐
│ DECISION: Domain Name                                            │
│ ─────────────────────                                            │
│ Blocks: Hosting setup, email planning, all branding             │
│ Current Status: NOT DECIDED                                      │
│ Options listed in WEBSITE_STRATEGY.md:                          │
│   - farthingdowns.org.uk                                        │
│   - farthingdownsandhappyvalley.org.uk                         │
│   - happyvalleydowns.org.uk                                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ DECISION: Hosting Platform                                       │
│ ─────────────────────────                                        │
│ Blocks: Dev environment, form strategy, file structure          │
│ Current Status: DECIDED (GitHub Pages per EVOLVED-STRATEGY.md)  │
│ But: Netlify may be better for MVP (forms, redirects)           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ SETUP: Payment Provider Account                                  │
│ ────────────────────────────                                     │
│ Blocks: Join page completion, donation flow, membership tiers   │
│ Current Status: NOT STARTED                                      │
│ Owner: Treasurer (Ian Payne per meeting notes)                  │
│ Timeline: 1-3 business days for approval                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ CONTENT: Homepage Hero + Core Messaging                          │
│ ────────────────────────────────────────                         │
│ Blocks: All other page content (sets tone)                      │
│ Current Status: NOT WRITTEN                                      │
│ Owner: Committee approval needed                                │
│ Dependency: Image selection from legacy assets                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ BUILD: Core Pages + Navigation                                   │
│ ─────────────────────────────                                    │
│ Blocks: Payment integration, Nature Trail, all content pages    │
│ Current Status: site-2026/ has basic structure started          │
│ Owner: Technical maintainer                                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ TEST: Payment Flow                                               │
│ ─────────────────                                                │
│ Blocks: Launch (cannot go live without working payments)        │
│ Current Status: NOT STARTED                                      │
│ Owner: Technical maintainer + Treasurer                         │
│ Requirement: Sandbox testing before live                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ VERIFY: Committee Sign-Off                                       │
│ ────────────────────────                                         │
│ Blocks: DNS switch, public launch                               │
│ Current Status: Awaiting content to review                      │
│ Owner: Committee (Chair: Graham Lomas)                          │
│ Risk: Approval delays                                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ LAUNCH: DNS Cutover                                              │
│ ────────────────────                                             │
│ Blocks: Nothing (this is the goal)                              │
│ Current Status: OLD SITE STILL LIVE                             │
│ Owner: Domain registrar account holder                          │
│ Risk: Email disruption if not planned                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Earliest Blockers (Must Resolve Immediately)

### 1. Domain Decision
- **Status:** Listed as "immediate next step" but not decided
- **Why blocking:** Can't set up hosting, can't finalize branding, can't configure email
- **Action needed:** Committee vote on domain name
- **Estimated time:** 1 committee meeting cycle

### 2. Payment Provider Account Creation
- **Status:** Not started
- **Why blocking:** Primary goal of project is enabling online payments
- **Action needed:**
  1. Treasurer creates Stripe account
  2. Link to organization bank account
  3. Configure for charity/nonprofit rates if applicable
- **Estimated time:** 3-5 business days (identity verification)

### 3. Email Situation Clarification
- **Status:** Unknown (GAPS-AND-LIMITATIONS.md flags this)
- **Why blocking:** DNS changes could break email
- **Action needed:**
  1. Confirm: Does anyone use @friendsoffarthingdowns.co.uk email?
  2. If yes: Where is it hosted?
  3. Plan: Preserve or migrate?
- **Risk if not resolved:** Email stops working at launch

### 4. Content Approval Authority
- **Status:** Implicit, not explicit
- **Why blocking:** Can't write content without knowing who approves it
- **Action needed:** Designate one person to approve content OR define criteria for self-approval
- **Risk if not resolved:** Every page requires full committee vote → endless delays

---

## Dependency Graph (What Blocks What)

### Hard Dependencies (Cannot Start B Until A Complete)

```
Domain decision ──────► Hosting setup
                      ├─► Email planning
                      └─► Branding decisions

Hosting setup ─────────► Local development
                       └─► File structure

Payment provider ──────► Join page completion
                       └─► Donation flow

Homepage content ──────► All other page content
                       └─► Design finalization

Core pages built ──────► Payment integration
                       ├─► Form setup
                       └─► Nature Trail section

Payment tested ────────► Committee sign-off
                       └─► Launch readiness

Committee sign-off ────► DNS cutover
                       └─► Old site archival
```

### Soft Dependencies (Should Complete First, But Can Work Around)

```
Phase 0A (PDF conversion) ···► History/archaeology content
                             └·► Nature Trail page content
                             (Can launch without, but better with)

Phase 0B (Image metadata) ···► Gallery page
                             └·► Alt text population
                             (Can launch with manual selection)

Analytics setup ···············► Understanding traffic
                                (Should have, can add later)

Social feed embed ·············► Homepage engagement
                                (Nice-to-have, link works too)
```

---

## Tasks That Can Run in Parallel (No Dependencies)

These can happen while waiting for blockers to resolve:

### While Waiting for Domain Decision:
- [ ] Select hosting platform (GitHub Pages vs Netlify)
- [ ] Design CSS/styling
- [ ] Write page content drafts
- [ ] Process PDF conversions (Phase 0A)
- [ ] Create image metadata (Phase 0B)

### While Waiting for Payment Provider:
- [ ] Build all non-payment pages
- [ ] Test forms with placeholder
- [ ] Complete Nature Trail section
- [ ] Set up analytics
- [ ] Write redirect rules

### While Waiting for Committee Approval:
- [ ] Internal testing
- [ ] Accessibility testing
- [ ] Performance optimization
- [ ] Documentation writing

---

## Hidden Blockers (Often Overlooked)

### 1. Asset Access
- **Blocker:** Current site hosted somewhere. Do we have access?
- **Status:** Unknown
- **Impact:** Can't extract content, can't set up redirects

### 2. Legacy Site Login Credentials
- **Blocker:** Who controls the current site?
- **Status:** Unknown
- **Impact:** Can't update DNS, can't add redirect

### 3. Treasurer Availability
- **Blocker:** Payment setup requires treasurer action
- **Status:** Ian Payne identified, availability unknown
- **Impact:** Payment integration stalls

### 4. Image Permissions
- **Blocker:** Some images may require permission/attribution
- **Status:** Not audited
- **Impact:** Legal risk, may need to replace images

### 5. Roger McGough Rights
- **Blocker:** Using his narration on new platform (podcast)
- **Status:** Not confirmed
- **Impact:** May not be able to distribute audio as planned

---

## Recommended Action Order (Today)

### Immediate (This Week)

1. **Confirm domain name** with committee (even async via email)
2. **Clarify email situation** - is @domain email in use?
3. **Start payment provider signup** - it takes days
4. **Identify content approver** - who can say "yes" to text?

### This Week (Parallel with Above)

5. **Select 10 hero images** from legacy assets manually
6. **Draft homepage text** (100 words per strategy)
7. **Set up local development** environment
8. **Test PDF conversion** on 5 sample files

### Next Week

9. **Build homepage and navigation**
10. **Create Visit page**
11. **Create About page**
12. **Set up forms** (contact, volunteer signup)

### Following Week

13. **Integrate payments** (when provider ready)
14. **Create Join page**
15. **Basic Nature Trail page**
16. **Mobile testing**

---

## Timeline Risk Assessment

| Blocker | Expected Resolution | Risk to Timeline |
|---------|---------------------|------------------|
| Domain decision | 1 week (committee cycle) | MEDIUM |
| Payment provider | 1-2 weeks (verification) | HIGH |
| Email clarification | 1-2 days (information gathering) | LOW |
| Content approval authority | 1 week (committee cycle) | MEDIUM |
| Legacy site access | Unknown | UNKNOWN (HIGH?) |

**Total Critical Path Duration (Optimistic):** 4-5 weeks
**Total Critical Path Duration (Realistic):** 6-8 weeks
**Total Critical Path Duration (Pessimistic):** 10-12 weeks (committee delays)

---

## Single Biggest Blocker

**Payment Provider Setup**

Without working payments:
- Cannot achieve primary goal (online membership)
- Cannot launch (site without payments defeats purpose)
- Cannot validate demand (no signup = no data)

**Recommendation:** Start payment provider signup TODAY, regardless of other decisions. It can be configured later, but the account approval process is the longest lead time.

---

*Generated: 2025-12-08*
