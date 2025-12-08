# Task Registry

Master registry of all tasks with acceptance criteria, dependencies, and ownership.

**Last Updated**: 2025-12-08
**Total Tasks**: 120 (estimated)
**Schema Version**: 1.0

---

## Task Schema

Each task follows this structure:

```yaml
id: T001
title: Short descriptive title
stream: CONTENT|TECHNICAL|COMMUNITY|MIGRATION|POLISH
phase: 0|1|2|3|4
priority: CRITICAL|HIGH|MEDIUM|LOW
status: pending|in_progress|blocked|review|complete
assigned_to: null|content|technical|community|migration|polish
dependencies: [T000, T000]  # Task IDs that must complete first
source: MIGRATION-PLAN.md:L307  # Citation
acceptance_criteria:
  - Criterion 1 that can be verified
  - Criterion 2 that can be verified
  - Review score >= X on Agent Y
done_when:
  files_created: [list of expected output files]
  files_modified: [list of files to update]
  tests_passing: [list of verification checks]
  review_scores:
    agent_1: 70  # minimum score
    agent_5: 70  # minimum score
estimated_complexity: S|M|L|XL
actual_hours: null  # Filled after completion
notes: Optional context
```

---

## Phase 0: Asset Preparation

### Stream: MIGRATION

#### T060: Convert Nature Trail PDFs to Markdown
```yaml
id: T060
title: Convert Nature Trail PDFs to Markdown
stream: MIGRATION
phase: 0
priority: HIGH
status: pending
assigned_to: null
dependencies: []
source: MIGRATION-PLAN.md:L119-L122
acceptance_criteria:
  - 29 markdown files created in docs/content-extraction/pdfs-markdown/nature-trail/
  - Each file has YAML frontmatter with: title, source_pdf, post_number, themes, related_audio
  - Word count recorded in frontmatter
  - Content preserves structure (headings, paragraphs)
  - No PDF artifacts (page numbers, headers) in content
done_when:
  files_created:
    - docs/content-extraction/pdfs-markdown/nature-trail/post-01.md
    - docs/content-extraction/pdfs-markdown/nature-trail/post-02.md
    - "... through post-29.md"
  files_modified:
    - docs/content-extraction/pdfs-markdown/MANIFEST.json
  tests_passing:
    - All 29 files exist
    - All files have valid YAML frontmatter
    - MANIFEST.json has 29 entries for nature-trail category
estimated_complexity: L
notes: Source files in site-2005-2025/NatureTrail/NTEnglish/Text/
```

#### T061: Convert FoFD-HV Posts to Markdown
```yaml
id: T061
title: Convert FoFD-HV Posts to Markdown
stream: MIGRATION
phase: 0
priority: HIGH
status: pending
assigned_to: null
dependencies: []
source: MIGRATION-PLAN.md:L123-L126
acceptance_criteria:
  - 29 markdown files created in docs/content-extraction/pdfs-markdown/posts/
  - Each file has YAML frontmatter with: title, source_pdf, post_number, location, topics
  - Content extracted and cleaned
done_when:
  files_created:
    - docs/content-extraction/pdfs-markdown/posts/hv-post-01.md
    - "... through hv-post-29.md"
  files_modified:
    - docs/content-extraction/pdfs-markdown/MANIFEST.json
  tests_passing:
    - All 29 files exist
    - MANIFEST.json updated with posts entries
estimated_complexity: L
notes: Source files in site-2005-2025/FoFD-HV-POSTSXXX/
```

#### T062: Create Wildlife Image Metadata Inventory
```yaml
id: T062
title: Create Wildlife Image Metadata Inventory
stream: MIGRATION
phase: 0
priority: HIGH
status: pending
assigned_to: null
dependencies: []
source: MIGRATION-PLAN.md:L201-L205
acceptance_criteria:
  - JSON index created at docs/content-extraction/images-metadata/wildlife/index.json
  - Each entry includes: filename, original_path, category, dimensions, suggested_alt_text
  - Quality score assigned (high/medium/low)
  - Suggested pages identified for each image
done_when:
  files_created:
    - docs/content-extraction/images-metadata/wildlife/index.json
  tests_passing:
    - JSON is valid
    - All images in site-2005-2025/images-wildlife/ are catalogued
    - Each entry has required fields
estimated_complexity: M
```

#### T063: Create History Image Metadata Inventory
```yaml
id: T063
title: Create History Image Metadata Inventory
stream: MIGRATION
phase: 0
priority: MEDIUM
status: pending
assigned_to: null
dependencies: []
source: MIGRATION-PLAN.md:L206-L208
acceptance_criteria:
  - JSON index at docs/content-extraction/images-metadata/history/index.json
  - Historical context noted where identifiable
done_when:
  files_created:
    - docs/content-extraction/images-metadata/history/index.json
estimated_complexity: S
```

#### T064: Create Archaeology Image Metadata Inventory
```yaml
id: T064
title: Create Archaeology Image Metadata Inventory
stream: MIGRATION
phase: 0
priority: MEDIUM
status: pending
assigned_to: null
dependencies: []
source: MIGRATION-PLAN.md:L209-L211
acceptance_criteria:
  - JSON index at docs/content-extraction/images-metadata/archaeology/index.json
done_when:
  files_created:
    - docs/content-extraction/images-metadata/archaeology/index.json
estimated_complexity: S
```

#### T065: Create General Image Metadata Inventory
```yaml
id: T065
title: Create General Site Image Metadata Inventory
stream: MIGRATION
phase: 0
priority: MEDIUM
status: pending
assigned_to: null
dependencies: []
source: MIGRATION-PLAN.md:L212-L218
acceptance_criteria:
  - JSON index at docs/content-extraction/images-metadata/general/index.json
  - GIF navigation widgets excluded
done_when:
  files_created:
    - docs/content-extraction/images-metadata/general/index.json
estimated_complexity: M
```

#### T066: Create Master Image Index
```yaml
id: T066
title: Create Master Image Index
stream: MIGRATION
phase: 0
priority: HIGH
status: pending
assigned_to: null
dependencies: [T062, T063, T064, T065]
source: MIGRATION-PLAN.md:L223-L226
acceptance_criteria:
  - MASTER-INDEX.json aggregates all category indexes
  - Total image count documented
  - Categories with counts listed
done_when:
  files_created:
    - docs/content-extraction/images-metadata/MASTER-INDEX.json
  tests_passing:
    - JSON valid
    - Image count >= 400
estimated_complexity: S
```

#### T067: Identify Duplicate Images
```yaml
id: T067
title: Identify Duplicate/Similar Images
stream: MIGRATION
phase: 0
priority: LOW
status: pending
assigned_to: null
dependencies: [T066]
source: MIGRATION-PLAN.md:L233-L236
acceptance_criteria:
  - DUPLICATES.json lists potential duplicates
  - Recommendation for which version to keep
done_when:
  files_created:
    - docs/content-extraction/images-metadata/DUPLICATES.json
estimated_complexity: M
```

#### T068: Flag Images Needing Review
```yaml
id: T068
title: Flag Images Needing Human Review
stream: MIGRATION
phase: 0
priority: MEDIUM
status: pending
assigned_to: null
dependencies: [T066]
source: MIGRATION-PLAN.md:L237-L240
acceptance_criteria:
  - REVIEW-NEEDED.json lists images with issues
  - Each entry has review_reason and suggested_action
done_when:
  files_created:
    - docs/content-extraction/images-metadata/REVIEW-NEEDED.json
estimated_complexity: S
```

---

## Phase 0: Technical Setup

### Stream: TECHNICAL

#### T040: Create CSS Design System Foundation
```yaml
id: T040
title: Create CSS Design System Foundation
stream: TECHNICAL
phase: 0
priority: HIGH
status: pending
assigned_to: null
dependencies: []
source: EVOLVED-STRATEGY.md:L136-165
acceptance_criteria:
  - CSS custom properties for colors, spacing, typography
  - Base reset/normalize styles
  - Container and layout utilities
  - Responsive breakpoints defined
  - Comments documenting each section for maintainability
done_when:
  files_modified:
    - site-2026/css/style.css
  review_scores:
    agent_5: 70
estimated_complexity: M
notes: Must be maintainable by non-technical committee members
```

#### T041: Create Navigation Component
```yaml
id: T041
title: Create Responsive Navigation Component
stream: TECHNICAL
phase: 0
priority: HIGH
status: pending
assigned_to: null
dependencies: [T040]
source: WEBSITE_STRATEGY.md:navigation
acceptance_criteria:
  - Desktop navigation with 4 main sections (Visit, Explore, Join, About)
  - Mobile hamburger menu
  - Skip link for accessibility
  - Touch targets >= 44px
  - Keyboard navigable
done_when:
  files_modified:
    - site-2026/css/style.css
  review_scores:
    agent_2: 70
    agent_5: 70
estimated_complexity: M
```

#### T042: Create Card Component
```yaml
id: T042
title: Create Card Grid Component
stream: TECHNICAL
phase: 0
priority: MEDIUM
status: pending
assigned_to: null
dependencies: [T040]
acceptance_criteria:
  - Responsive 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)
  - Card with image, title, description, CTA
  - Hover states
  - Focus visible for accessibility
done_when:
  files_modified:
    - site-2026/css/style.css
estimated_complexity: S
```

#### T043: Create Form Component
```yaml
id: T043
title: Create Form Component System
stream: TECHNICAL
phase: 0
priority: HIGH
status: pending
assigned_to: null
dependencies: [T040]
source: Meeting notes - volunteer/membership forms needed
acceptance_criteria:
  - Input, select, textarea, checkbox, radio styles
  - Error state styling
  - Success message styling
  - Form group spacing
  - Accessible labels and error messages
done_when:
  files_modified:
    - site-2026/css/style.css
  review_scores:
    agent_2: 80
estimated_complexity: M
```

#### T044: Create Social Embed Container
```yaml
id: T044
title: Create Social Media Embed Container
stream: TECHNICAL
phase: 0
priority: MEDIUM
status: pending
assigned_to: null
dependencies: [T040]
source: EVOLVED-STRATEGY.md:L169-206
acceptance_criteria:
  - Container that handles responsive embeds
  - Fallback styling for no-JS
  - Loading state
  - Max-width constraints
done_when:
  files_modified:
    - site-2026/css/style.css
estimated_complexity: S
```

#### T045: Create Alert/Message Component
```yaml
id: T045
title: Create Alert and Message Components
stream: TECHNICAL
phase: 0
priority: LOW
status: pending
assigned_to: null
dependencies: [T040]
acceptance_criteria:
  - Success, warning, error, info variants
  - Dismissible option
  - Icon support
done_when:
  files_modified:
    - site-2026/css/style.css
estimated_complexity: S
```

---

## Phase 3: Content Pages

### Stream: CONTENT

#### T001: Create Homepage
```yaml
id: T001
title: Create/Refine Homepage
stream: CONTENT
phase: 3
priority: HIGH
status: pending
assigned_to: null
dependencies: [T040, T041, T042]
source: WEBSITE_STRATEGY.md:L50-80
acceptance_criteria:
  - Hero section with compelling image and headline
  - Three pathway cards (Walk/Explore/Join)
  - Quick facts section
  - Social feed embed placeholder
  - Newsletter signup
  - Responsive on mobile
done_when:
  files_modified:
    - site-2026/index.html
  review_scores:
    agent_1: 75
    agent_4: 70
    agent_5: 70
estimated_complexity: M
notes: Some structure already exists - refine based on strategy
```

#### T002: Create Visit Page
```yaml
id: T002
title: Create Visit Page
stream: CONTENT
phase: 3
priority: HIGH
status: pending
assigned_to: null
dependencies: [T040, T041]
source: WEBSITE_STRATEGY.md:navigation
acceptance_criteria:
  - Getting here section (bus, train, car, walking)
  - Parking information
  - Facilities (none - manage expectations)
  - Accessibility information
  - Weather/seasonal considerations
  - Map integration or PDF download
done_when:
  files_created:
    - site-2026/visit.html
  review_scores:
    agent_1: 70
estimated_complexity: M
```

#### T003: Create Explore Landing Page
```yaml
id: T003
title: Create Explore Landing Page
stream: CONTENT
phase: 3
priority: HIGH
status: pending
assigned_to: null
dependencies: [T040, T041, T042]
source: WEBSITE_STRATEGY.md:navigation
acceptance_criteria:
  - Links to Nature Trail, Wildlife, History, Walks
  - Brief intro to each section
  - Compelling imagery
  - Seasonal highlights
done_when:
  files_created:
    - site-2026/explore.html
  review_scores:
    agent_1: 70
    agent_4: 70
estimated_complexity: M
```

#### T004: Create Nature Trail Page
```yaml
id: T004
title: Create Nature Trail Interactive Page
stream: CONTENT
phase: 3
priority: HIGH
status: pending
assigned_to: null
dependencies: [T060, T040]
source: MIGRATION-PLAN.md:nature-trail
acceptance_criteria:
  - Introduction to the trail
  - Interactive map or numbered list of stops
  - Audio player for each stop (or links)
  - Language selector (EN/FR/HI/PL)
  - PDF download option
  - Roger McGough credit prominent
done_when:
  files_created:
    - site-2026/nature-trail.html
  review_scores:
    agent_1: 70
    agent_4: 80
estimated_complexity: L
notes: Depends on T060 for converted content
```

#### T005: Create About Page
```yaml
id: T005
title: Create About Page
stream: CONTENT
phase: 3
priority: MEDIUM
status: pending
assigned_to: null
dependencies: [T040, T041]
source: Meeting notes, strategy docs
acceptance_criteria:
  - History of the Friends group
  - Relationship with City of London Corporation
  - Committee members (optional, if they consent)
  - Constitution/governance link
  - Contact information
done_when:
  files_created:
    - site-2026/about.html
  review_scores:
    agent_4: 70
estimated_complexity: M
```

---

## Phase 3: Community Features

### Stream: COMMUNITY

#### T010: Implement Membership Tiers UI
```yaml
id: T010
title: Implement Membership Tiers UI
stream: COMMUNITY
phase: 3
priority: CRITICAL
status: pending
assigned_to: null
dependencies: [T043, T001]
source: EVOLVED-STRATEGY.md:L355-393
acceptance_criteria:
  - Three tier cards (Friend £10, Supporter £25, Patron £50)
  - Supporter highlighted as "Most Popular"
  - Concession option visible (£5)
  - Household add-on mentioned (+£5)
  - Gift Aid explanation
  - Stripe Payment Link placeholders clearly marked
done_when:
  files_modified:
    - site-2026/join.html
  review_scores:
    agent_1: 80
    agent_3: 75
estimated_complexity: M
notes: Requires HUMAN to create Stripe Payment Links before going live
```

#### T011: Implement Volunteer Signup Form
```yaml
id: T011
title: Implement Volunteer Signup Form
stream: COMMUNITY
phase: 3
priority: HIGH
status: pending
assigned_to: null
dependencies: [T043]
source: Meeting notes - volunteer recruitment priority
acceptance_criteria:
  - Name, email fields
  - Interest checkboxes (conservation, walks, events, digital, other)
  - Availability dropdown
  - Submits to Formspree (or similar)
  - Success message displayed
  - Form validates before submit
done_when:
  files_modified:
    - site-2026/join.html
  review_scores:
    agent_2: 80
    agent_3: 70
estimated_complexity: M
notes: Requires HUMAN to set up Formspree account
```

#### T012: Implement Newsletter Signup
```yaml
id: T012
title: Implement Newsletter Signup
stream: COMMUNITY
phase: 3
priority: MEDIUM
status: pending
assigned_to: null
dependencies: [T043]
source: EVOLVED-STRATEGY.md:seven-touchpoint-funnel
acceptance_criteria:
  - Email input with submit button
  - Privacy note
  - Success message
  - Appears in footer (all pages)
done_when:
  files_modified:
    - site-2026/index.html
    - site-2026/join.html
  review_scores:
    agent_3: 70
estimated_complexity: S
```

#### T013: Implement Social Feed Embed
```yaml
id: T013
title: Implement Instagram Social Feed Embed
stream: COMMUNITY
phase: 3
priority: MEDIUM
status: pending
assigned_to: null
dependencies: [T044]
source: EVOLVED-STRATEGY.md:L169-206
acceptance_criteria:
  - EmbedSocial (or similar) widget placeholder
  - Fallback content for no-JS
  - Links to Instagram profile
  - Responsive layout
done_when:
  files_modified:
    - site-2026/index.html
  tests_passing:
    - Fallback displays without JS
estimated_complexity: S
notes: Requires HUMAN to configure EmbedSocial account
```

---

## Phase 4: Polish

### Stream: POLISH

#### T100: Full Accessibility Audit
```yaml
id: T100
title: Full WCAG 2.1 AA Accessibility Audit
stream: POLISH
phase: 4
priority: CRITICAL
status: pending
assigned_to: null
dependencies: [T001, T002, T003, T004, T005, T010, T011]
source: Agent 2 criteria
acceptance_criteria:
  - All pages pass automated WCAG checks
  - Manual keyboard navigation verified
  - Color contrast verified (4.5:1 minimum)
  - All images have alt text
  - Forms have proper labels
  - Skip links work
done_when:
  files_created:
    - docs/agentic-content-review/reviews/accessibility-audit-final.md
  review_scores:
    agent_2: 85
estimated_complexity: L
```

#### T101: SEO Optimization Pass
```yaml
id: T101
title: SEO Optimization Pass
stream: POLISH
phase: 4
priority: HIGH
status: pending
assigned_to: null
dependencies: [T001, T002, T003, T004, T005]
acceptance_criteria:
  - All pages have unique title tags (50-60 chars)
  - All pages have meta descriptions (150-160 chars)
  - Heading hierarchy correct on all pages
  - Schema.org structured data on key pages
  - sitemap.xml created
  - robots.txt created
done_when:
  files_created:
    - site-2026/sitemap.xml
    - site-2026/robots.txt
  review_scores:
    agent_5: 80
estimated_complexity: M
```

#### T102: Performance Optimization
```yaml
id: T102
title: Performance Optimization
stream: POLISH
phase: 4
priority: HIGH
status: pending
assigned_to: null
dependencies: [T001, T002, T003, T004, T005]
acceptance_criteria:
  - All images compressed and properly sized
  - Images use srcset for responsive delivery
  - Below-fold images have loading="lazy"
  - Total page weight < 500KB (excluding lazy images)
  - FCP < 1.5s (estimated, can't measure without hosting)
done_when:
  tests_passing:
    - No image > 200KB
    - All images have width/height attributes
estimated_complexity: M
```

#### T103: Launch Readiness Checklist
```yaml
id: T103
title: Complete Launch Readiness Checklist
stream: POLISH
phase: 4
priority: CRITICAL
status: pending
assigned_to: null
dependencies: [T100, T101, T102]
acceptance_criteria:
  - All Critical issues resolved
  - All High priority issues resolved
  - Human actions documented with owners
  - Rollback procedure documented
  - Three maintainers have repository access
done_when:
  files_created:
    - docs/agentic-orchestration/LAUNCH-CHECKLIST.md
estimated_complexity: M
```

---

## Task Statistics

| Stream | Total | Pending | In Progress | Complete |
|--------|-------|---------|-------------|----------|
| MIGRATION | 9 | 9 | 0 | 0 |
| TECHNICAL | 6 | 6 | 0 | 0 |
| CONTENT | 5 | 5 | 0 | 0 |
| COMMUNITY | 4 | 4 | 0 | 0 |
| POLISH | 4 | 4 | 0 | 0 |
| **TOTAL** | **28** | **28** | **0** | **0** |

---

## Dependency Graph (Critical Path)

```
Phase 0 (Parallel Start):
├── MIGRATION: T060, T061, T062-T065 (parallel)
└── TECHNICAL: T040 → T041, T042, T043, T044, T045

Phase 0 (After Initial):
└── MIGRATION: T066 → T067, T068

Phase 3 (After Phase 0):
├── CONTENT: T001, T002, T003 (parallel, need T040-T042)
│   └── T004 (needs T060)
│   └── T005
└── COMMUNITY: T010, T011, T012, T013 (parallel, need T043-T044)

Phase 4 (After Phase 3):
└── POLISH: T100, T101, T102 (parallel)
    └── T103 (final)
```

---

*Task Registry: Every task has a definition of done.*
