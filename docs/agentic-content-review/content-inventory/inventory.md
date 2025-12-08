# Content Inventory for Agent Review

## Overview

This inventory catalogues all content files that should be reviewed by the 5 feedback agents. Each file is tagged with relevant agents and priority level.

---

## Site-2026 Content (Primary Review Targets)

### HTML Pages

| File | Path | Agents | Priority | Status |
|------|------|--------|----------|--------|
| **Homepage** | `site-2026/index.html` | 1,2,3,4,5 | Critical | Pending |
| **Join/Membership** | `site-2026/join.html` | 1,2,3,5 | Critical | Pending |
| **Gallery** | `site-2026/gallery.html` | 1,2,3,4,5 | High | Pending |
| Visit | `site-2026/visit.html` | 1,2,3,4,5 | Critical | Not Created |
| Explore | `site-2026/explore.html` | 1,2,3,4,5 | Critical | Not Created |
| About | `site-2026/about.html` | 1,2,4,5 | High | Not Created |

### Stylesheets

| File | Path | Agents | Priority | Status |
|------|------|--------|----------|--------|
| **Main CSS** | `site-2026/css/style.css` | 2,5 | High | Pending |

### JavaScript

| File | Path | Agents | Priority | Status |
|------|------|--------|----------|--------|
| Inline scripts | Within HTML files | 2,5 | Medium | Pending |

---

## File Details for Agents

### index.html (Homepage)

**Full Path**: `/home/user/fofd/site-2026/index.html`

**Content Summary**:
- Hero section with CTA buttons
- 3-card grid (Walk, Explore, Join)
- Quick facts section (SSSI, Monument, Transport, Wildlife)
- CTA section for membership
- Community gallery teaser
- Full footer with navigation

**Agent Review Focus**:
- Agent 1: Membership conversion path, navigation clarity, mobile UX
- Agent 2: Alt text, color contrast, keyboard navigation, GDPR elements
- Agent 3: Social integration, volunteer pathway, youth appeal
- Agent 4: SSSI messaging accuracy, heritage mentions, species info
- Agent 5: Performance, SEO meta tags, maintainability

**Key JTBDs**:
- "I want to become a member quickly" → Join button in hero + CTA section
- "I want to plan a walk" → Walk card with link
- "I want to learn about wildlife" → Explore card + quick facts

---

### join.html (Membership & Donations)

**Full Path**: `/home/user/fofd/site-2026/join.html`

**Content Summary**:
- Hero with membership messaging
- Pricing cards (Individual £5, Family £8)
- Donation section with amount buttons
- Volunteer section with benefits
- Events section
- "Where your money goes" features

**Agent Review Focus**:
- Agent 1: Payment flow, form UX, conversion optimization
- Agent 2: Form accessibility, payment security indicators
- Agent 3: Volunteer messaging, community benefits, social proof
- Agent 5: Stripe integration readiness, form functionality

**Key JTBDs**:
- "I want to become a member quickly" → Primary page purpose
- "I want to pay £5/month easily" → Pricing cards
- "I want to volunteer" → Volunteer section
- "I want to donate" → Donation section

---

### gallery.html (Community Photos)

**Full Path**: `/home/user/fofd/site-2026/gallery.html`

**Content Summary**:
- Community gallery header
- Photo grid with captions
- Contribution instructions (GitHub Issues)
- Footer

**Agent Review Focus**:
- Agent 1: UGC submission flow, gallery navigation
- Agent 2: Image alt text, lightbox accessibility
- Agent 3: Community engagement, sharing mechanism
- Agent 4: Photo relevance to conservation messaging
- Agent 5: Image optimization, lazy loading

**Key JTBDs**:
- "I want to share my photo" → Contribution buttons
- "I want to see community content" → Gallery grid

---

### style.css (Main Stylesheet)

**Full Path**: `/home/user/fofd/site-2026/css/style.css`

**Content Summary**:
- CSS custom properties (design tokens)
- Typography system (Playfair Display + Inter)
- Component styles (cards, buttons, forms)
- Responsive breakpoints
- Accessibility features (focus states, reduced motion)
- Print styles

**Agent Review Focus**:
- Agent 2: Color contrast ratios, focus indicators, print styles
- Agent 5: Performance (font loading), maintainability, documentation

---

## Pages Not Yet Created (For Future Review)

### visit.html (Planned)
- Getting here directions
- Walk routes with maps
- Parking information
- Safety/Lyme disease info

### explore.html (Planned)
- Nature Trail integration
- Wildlife guides
- Archaeology/history
- Seasonal highlights

### about.html (Planned)
- About the Friends group
- Committee information
- Contact form
- Privacy policy
- Constitution link

---

## Supporting Documentation (Context for Agents)

### Research Documents

| Document | Path | Purpose |
|----------|------|---------|
| Digital Strategy Research | `docs/deep-research/Deep-Research 1...md` | Peer analysis, SSSI messaging |
| Social Media Research | `docs/deep-research/Deep-Research 2...md` | Engagement strategies |
| Youth Engagement | `docs/deep-research/compass_artifact_wf-87ce8d37...md` | Under-35 strategies |
| Scaling Models | `docs/deep-research/compass_artifact_wf-4e8f6dc4...md` | Community conservation |
| Tech Stack Guide | `docs/deep-research/compass_artifact_wf-dc6daf2d...md` | Platform recommendations |

### Project Documents

| Document | Path | Purpose |
|----------|------|---------|
| Website Strategy | `docs/WEBSITE_STRATEGY.md` | Design principles, success metrics |
| Project Plan | `fofd-website-new/PROJECT-PLAN.md` | Success criteria |
| Gaps & Limitations | `fofd-website-new/docs/GAPS-AND-LIMITATIONS.md` | Known issues |
| Meeting Notes | `docs/FoFD Meeting Notes - September 2025.md` | Committee requirements |
| Agent Definitions | `docs/DESIGN-FEEDBACK-AGENTS.md` | Full agent specifications |

---

## Review Tracking

### Review Log

| Date | File | Agent | Reviewer | Score | Issues |
|------|------|-------|----------|-------|--------|
| | | | | | |

### Completion Status

| Agent | Files Reviewed | Files Pending | Last Run |
|-------|----------------|---------------|----------|
| Agent 1 (UX/JTBD) | 0 | 4 | Never |
| Agent 2 (Compliance) | 0 | 4 | Never |
| Agent 3 (Community) | 0 | 3 | Never |
| Agent 4 (Content) | 0 | 3 | Never |
| Agent 5 (Technical) | 0 | 4 | Never |

---

## How to Add New Content

1. Create the file in the appropriate location
2. Add an entry to this inventory with:
   - File name and path
   - Relevant agents (1-5)
   - Priority (Critical/High/Medium/Low)
   - Status (Pending/In Review/Complete)
3. Run the relevant agents against the new content

---

*Last updated: December 2024*
