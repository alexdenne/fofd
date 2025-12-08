# Phase 3: Migration

**Status:** Blocked
**Parallel Streams:** 3 → 1 (converges at end)
**Dependencies:** Phase 1 (content) + Phase 2 (platform) must be complete
**Output Location:** `/fofd-website-new/src/`

---

## Overview

Build the actual website using extracted content and the design system. This is the largest phase with the most complexity.

---

## Prerequisites

Before starting Phase 3, verify:

- [ ] **Phase 1 Complete:** All content extracted to `/content-extraction/`
- [ ] **Phase 2 Complete:** Design system and dev environment ready
- [ ] **Review Meeting:** Committee has approved designs

---

## Stream 3A: Core Pages

**Goal:** Implement all main pages with new design
**Dependencies:** Phase 1A (page content), Phase 2 (design + dev)
**Can parallelize with:** 3B, 3C (initially)

### Tasks

#### Foundation
- [ ] **3A.01** Implement header component with logo and navigation
- [ ] **3A.02** Implement footer component with contact info
- [ ] **3A.03** Implement mobile navigation (hamburger menu)
- [ ] **3A.04** Set up responsive breakpoints
- [ ] **3A.05** Implement skip-to-content link (accessibility)

#### Homepage
- [ ] **3A.06** Build homepage hero section
- [ ] **3A.07** Implement welcome message section
- [ ] **3A.08** Add upcoming events widget
- [ ] **3A.09** Add news/announcements section
- [ ] **3A.10** Add quick links section (membership, donate)
- [ ] **3A.11** Add photo gallery/carousel (optional)

#### Information Pages
- [ ] **3A.12** Implement `getting-there.md` with embedded map
- [ ] **3A.13** Implement `events.md` (pull from events.json)
- [ ] **3A.14** Implement `walks-trails.md` with downloadable maps
- [ ] **3A.15** Implement `aims-objectives.md`
- [ ] **3A.16** Implement `constitution.md`
- [ ] **3A.17** Implement `history.md` with timeline (optional enhancement)
- [ ] **3A.18** Implement `lyme-disease.md`

#### About Pages
- [ ] **3A.19** Implement `committee.md` (pull from committee.json)
- [ ] **3A.20** Implement `contact.md` with contact form
- [ ] **3A.21** Implement `useful-links.md` (pull from links.json)

#### Support Pages
- [ ] **3A.22** Implement `membership.md` (with form integration)
- [ ] **3A.23** Implement `donations.md` (with payment button)
- [ ] **3A.24** Implement `volunteering.md`

#### Content Pages
- [ ] **3A.25** Implement `projects.md` (pull from projects.json)
- [ ] **3A.26** Implement `cairn.md`
- [ ] **3A.27** Implement `conservation.md`
- [ ] **3A.28** Implement `wildlife.md` with image gallery
- [ ] **3A.29** Implement `archaeology.md`
- [ ] **3A.30** Implement `city-of-london.md`
- [ ] **3A.31** Implement `happy-valley.md`
- [ ] **3A.32** Implement `planning.md` with consultation links

#### Reports Section
- [ ] **3A.33** Create reports index page (list all AGM reports)
- [ ] **3A.34** Implement AGM report template
- [ ] **3A.35** Migrate all 9 AGM reports (2014-2022)
- [ ] **3A.36** Link related PDFs from reports

**Stream 3A Total:** 36 tasks

---

## Stream 3B: Nature Trail

**Goal:** Implement the multi-language audio Nature Trail feature
**Dependencies:** Phase 1C (Nature Trail audit), Phase 2
**Can parallelize with:** 3A, 3C (initially)

### Tasks

#### Audio Player
- [ ] **3B.01** Design/select audio player component
- [ ] **3B.02** Implement custom audio player with:
  - Play/pause
  - Progress bar
  - Time display
  - Volume control
- [ ] **3B.03** Add playlist functionality (next/previous post)
- [ ] **3B.04** Style audio player to match design system

#### Trail Map
- [ ] **3B.05** Implement interactive trail map (optional enhancement)
- [ ] **3B.06** Or: Implement static map with post markers

#### Post Pages
- [ ] **3B.07** Create Nature Trail post template with:
  - Audio player
  - PDF download link
  - Previous/next navigation
  - Language switcher
- [ ] **3B.08** Generate pages for all 29 English posts
- [ ] **3B.09** Generate pages for all 29 French posts
- [ ] **3B.10** Generate pages for all 29 Hindi posts
- [ ] **3B.11** Generate pages for all 29 Polish posts

#### Language System
- [ ] **3B.12** Implement language selector component
- [ ] **3B.13** Create Nature Trail index page (all posts listed)
- [ ] **3B.14** Create French index page
- [ ] **3B.15** Create Hindi index page
- [ ] **3B.16** Create Polish index page

#### Credits
- [ ] **3B.17** Implement credits page for each language
- [ ] **3B.18** Add proper attribution for audio contributors

**Stream 3B Total:** 18 tasks

---

## Stream 3C: Forms & Payments

**Goal:** Implement membership, donation, and contact forms
**Dependencies:** Phase 2
**Can parallelize with:** 3A, 3B (initially)

### Tasks

#### Form Infrastructure
- [ ] **3C.01** Choose form backend:
  - Netlify Forms (free, 100 submissions/month)
  - Formspree
  - Custom (more work)
- [ ] **3C.02** Set up form submission handling
- [ ] **3C.03** Configure email notifications to committee

#### Contact Form
- [ ] **3C.04** Implement contact form with:
  - Name
  - Email
  - Subject
  - Message
- [ ] **3C.05** Add spam protection (honeypot + reCAPTCHA)
- [ ] **3C.06** Implement success/error messages
- [ ] **3C.07** Test form submission flow

#### Membership Form
- [ ] **3C.08** Implement membership form with:
  - Name
  - Address
  - Email
  - Phone
  - Membership type (Individual £5 / Family £8)
  - GDPR consent checkbox
- [ ] **3C.09** Add data privacy statement
- [ ] **3C.10** Test membership form flow

#### Payment Integration
- [ ] **3C.11** Evaluate payment options:
  - PayPal (existing)
  - Stripe (modern, better UX)
  - GoCardless (UK direct debit)
- [ ] **3C.12** Implement donation button/form
- [ ] **3C.13** Implement membership payment integration
- [ ] **3C.14** Test payment flow (use sandbox/test mode)
- [ ] **3C.15** Document payment reconciliation process

**Stream 3C Total:** 15 tasks

---

## Stream 3D: Polish & Optimization

**Goal:** Final refinements, performance optimization, SEO
**Dependencies:** 3A, 3B, 3C must be substantially complete

### Tasks

#### Performance
- [ ] **3D.01** Optimize all images (WebP conversion, lazy loading)
- [ ] **3D.02** Implement critical CSS
- [ ] **3D.03** Minimize CSS and JavaScript
- [ ] **3D.04** Set up asset caching headers
- [ ] **3D.05** Test Core Web Vitals (aim for all green)

#### SEO
- [ ] **3D.06** Add meta descriptions to all pages
- [ ] **3D.07** Implement Open Graph tags
- [ ] **3D.08** Create sitemap.xml
- [ ] **3D.09** Create robots.txt
- [ ] **3D.10** Set up structured data (Organization, LocalBusiness)

#### Accessibility
- [ ] **3D.11** Add ARIA labels where needed
- [ ] **3D.12** Ensure all images have alt text
- [ ] **3D.13** Test keyboard navigation
- [ ] **3D.14** Test with screen reader
- [ ] **3D.15** Verify color contrast ratios

#### Content Review
- [ ] **3D.16** Proofread all migrated content
- [ ] **3D.17** Update any outdated information
- [ ] **3D.18** Fix any broken internal links
- [ ] **3D.19** Verify all PDF links work
- [ ] **3D.20** Verify all audio files play

**Stream 3D Total:** 20 tasks

---

## Phase 3 Completion Checklist

- [ ] All 23+ main pages implemented
- [ ] Navigation working on all pages
- [ ] Mobile responsive on all pages
- [ ] Nature Trail fully functional (all languages)
- [ ] Audio player working
- [ ] Contact form working
- [ ] Membership form working
- [ ] Payment integration working
- [ ] All images optimized
- [ ] SEO implemented
- [ ] Accessibility verified
- [ ] All content proofread
- [ ] Phase 3 review meeting held

---

## Parallelization Notes

```
Week 1-2: 3A (Core), 3B (Nature Trail), 3C (Forms) run in parallel
         ├── 3A: Foundation + Homepage + First pages
         ├── 3B: Audio player + Trail template
         └── 3C: Form backend + Contact form

Week 3-4: 3A, 3B, 3C continue
         ├── 3A: Remaining pages
         ├── 3B: All language posts
         └── 3C: Payment integration

Week 5:   3D (Polish) runs after 3A/3B/3C substantially complete
         └── Optimization, SEO, Accessibility, Review
```

---

## Risk Areas

| Risk | Mitigation |
|------|------------|
| Audio player complexity | Use established library (Howler.js, Plyr) |
| Payment integration | Start with PayPal (familiar), add Stripe later |
| Content volume (116 audio pages) | Script generation where possible |
| Committee approval delays | Get sign-off early, iterate |

---

*Total Phase 3 Tasks: 52 (36 + 18 + 15 + 20 - some overlap accounted for in Stream 3D)*
