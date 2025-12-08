# FoFD Website Migration - Master Project Plan

## Project Overview

**Goal:** Migrate the Friends of Farthing Downs legacy website to a modern, maintainable platform while preserving all content and reducing hosting costs.

**Success Criteria:**
- [ ] All existing content preserved and accessible
- [ ] Mobile-responsive design
- [ ] Committee members can easily edit content
- [ ] Hosting cost reduced (target: free or <£50/year)
- [ ] Payment integration for memberships/donations
- [ ] Accessible (WCAG 2.1 AA compliant)

---

## Folder Structure

```
/
├── site-2005-2025/              # Legacy website (source content)
├── site-2026/                   # New website (destination)
│
└── docs/
    ├── WEBSITE_STRATEGY.md      # High-level vision & goals
    ├── deep-research/           # Background research
    │
    ├── migration/               # This folder
    │   ├── MIGRATION-PLAN.md    # Comprehensive plan (START HERE)
    │   ├── PROJECT-PLAN.md      # This file - master overview
    │   ├── STREAMS.md           # Active work streams
    │   ├── README.md            # Architecture documentation
    │   ├── GAPS-AND-LIMITATIONS.md
    │   └── tasks/               # Task lists by phase
    │       ├── PHASE-0-ASSET-PREPARATION.md
    │       ├── PHASE-1-CONTENT-EXTRACTION.md
    │       ├── PHASE-2-PLATFORM-SETUP.md
    │       ├── PHASE-3-MIGRATION.md
    │       └── PHASE-4-LAUNCH.md
    │
    └── content-extraction/      # Extracted content from legacy site
        ├── pdfs-markdown/       # Phase 0A - PDF conversions
        ├── images-metadata/     # Phase 0B - Image metadata
        ├── pages/               # Phase 1A - HTML→MD conversions
        ├── data/                # Phase 1D - Structured data
        ├── inventory/           # Phase 1B - Asset inventories
        └── audit/               # Phase 1E - Legal/infra audit
```

---

## Phase Overview & Dependencies

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           PHASE 1: CONTENT EXTRACTION                                │
│                              (Can run in parallel)                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐      │
│  │ 1A:Pages │  │ 1B:Media │  │1C:Nature │  │ 1D:Data  │  │ 1E:Legal/Infra   │      │
│  │ [CLAUDE] │  │ [CLAUDE] │  │Trail[YOU]│  │ [CLAUDE] │  │ [YOU + CLAUDE]   │      │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────────┬─────────┘      │
│       │             │             │             │                  │                │
└───────┼─────────────┼─────────────┼─────────────┼──────────────────┼────────────────┘
        │             │             │             │                  │
        └─────────────┴──────┬──────┴─────────────┴──────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PHASE 2: PLATFORM SETUP                            │
│                         (Can run parallel to Phase 1)                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐                                         │
│  │  2A: Design  │  │  2B: Dev     │                                         │
│  │  System      │──│  Environment │                                         │
│  └──────┬───────┘  └──────┬───────┘                                         │
│         │                 │                                                  │
└─────────┼─────────────────┼─────────────────────────────────────────────────┘
          │                 │
          └────────┬────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PHASE 3: MIGRATION                                 │
│                   (Depends on Phase 1 + 2 completion)                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐                 │
│  │  3A: Core    │────▶│  3B: Nature  │     │  3C: Forms   │                 │
│  │  Pages       │     │  Trail       │     │  & Payments  │                 │
│  └──────┬───────┘     └──────┬───────┘     └──────┬───────┘                 │
│         │                    │                    │                          │
│         └──────────────┬─────┴────────────────────┘                          │
│                        │                                                     │
│                        ▼                                                     │
│               ┌──────────────┐                                               │
│               │  3D: Polish  │                                               │
│               │  & Optimize  │                                               │
│               └──────┬───────┘                                               │
│                      │                                                       │
└──────────────────────┼──────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PHASE 4: TESTING & LAUNCH                          │
│                       (Depends on Phase 3 completion)                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  4A: Testing │─▶│  4B: Staging │─▶│  4C: Launch  │─▶│  4D: Handoff │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Parallelization Strategy

### What CAN Run in Parallel

| Stream | Tasks | Dependencies | Assignable To |
|--------|-------|--------------|---------------|
| **Stream A** | Page content extraction | None | Developer 1 |
| **Stream B** | Media/asset inventory | None | Developer 2 or same |
| **Stream C** | Nature Trail audit | None | Developer 2 or volunteer |
| **Stream D** | Design system creation | None | Designer or Developer |
| **Stream E** | Dev environment setup | None | Developer 1 |

**Maximum parallelization:** 5 concurrent workstreams in Phase 1-2

### What MUST Be Sequential

1. **Phase 3** requires Phase 1 outputs (extracted content)
2. **Phase 3** requires Phase 2 outputs (design system, dev environment)
3. **3D (Polish)** requires 3A, 3B, 3C completion
4. **Phase 4** requires Phase 3 completion
5. **4C (Launch)** requires 4A, 4B sign-off

---

## Branch Strategy

```
main
├── feature/phase-1-content-extraction
│   ├── feature/1a-page-extraction
│   ├── feature/1b-media-inventory
│   ├── feature/1c-nature-trail-audit
│   └── feature/1d-data-structures
├── feature/phase-2-platform-setup
│   ├── feature/2a-design-system
│   └── feature/2b-dev-environment
├── feature/phase-3-migration
│   ├── feature/3a-core-pages
│   ├── feature/3b-nature-trail
│   ├── feature/3c-forms-payments
│   └── feature/3d-polish
└── feature/phase-4-launch
```

---

## Quick Reference: Task Counts

| Phase | Total Tasks | Parallel Streams | Est. Complexity |
|-------|-------------|------------------|-----------------|
| Phase 1 | 64 tasks | 5 streams | Medium |
| Phase 2 | 28 tasks | 2 streams | Medium |
| Phase 3 | 52 tasks | 3→1 streams | High |
| Phase 4 | 24 tasks | Sequential | Low |
| **Total** | **~168 tasks** | - | - |

---

## Human vs Claude Task Division

### Claude Can Do (Autonomous)
| Task Type | Examples |
|-----------|----------|
| Code writing | HTML, CSS, JS, config files |
| Content extraction | Parse HTML → Markdown |
| File operations | Create, edit, organize files |
| Documentation | Write guides, READMEs |
| Data transformation | Create JSON from HTML |
| Git operations | Commit, branch, push |

### YOU Must Do (Human Required)
| Task Type | Examples |
|-----------|----------|
| **Visual verification** | Check if site looks correct |
| **Audio testing** | Verify MP3s play correctly |
| **Account creation** | Netlify, Stripe, hosting |
| **External access** | Log into current hosting |
| **DNS changes** | Update domain records |
| **Payment testing** | Test actual money flow |
| **Email testing** | Verify form notifications arrive |
| **Committee liaison** | Get approvals, feedback |
| **Browser testing** | Test on real devices |
| **Accessibility audit** | Run WAVE, Lighthouse |

### Collaboration Tasks
| Task | Claude Does | You Do |
|------|-------------|--------|
| Design system | Write CSS, describe layout | View and approve |
| Forms | Write form HTML/JS | Test submissions |
| Audio player | Write player code | Test playback |
| Payments | Write integration code | Test in sandbox |
| Launch | Prepare everything | Execute DNS change |

---

## Links to Detailed Task Lists

- **[MIGRATION-PLAN.md](./MIGRATION-PLAN.md)** - Comprehensive plan for agentic sitebuilder (START HERE)
- [Phase 0: Asset Preparation](./tasks/PHASE-0-ASSET-PREPARATION.md) - **NEW** PDF→Markdown & Image Metadata
- [Phase 1: Content Extraction](./tasks/PHASE-1-CONTENT-EXTRACTION.md)
- [Phase 2: Platform Setup](./tasks/PHASE-2-PLATFORM-SETUP.md)
- [Phase 3: Migration](./tasks/PHASE-3-MIGRATION.md)
- [Phase 4: Testing & Launch](./tasks/PHASE-4-LAUNCH.md)

## Additional Documentation

- [Gaps & Limitations](./GAPS-AND-LIMITATIONS.md) - Known gaps and Claude Code limitations

---

## Status Dashboard

| Phase | Status | Progress | Notes |
|-------|--------|----------|-------|
| **Phase 0** | **Not Started** | **0/118** | **NEW - Run first! PDF→MD + Image metadata** |
| Phase 1 | Blocked | 0/47 | Waiting on Phase 0 |
| Phase 2 | Not Started | 0/28 | Can start parallel to Phase 0/1 |
| Phase 3 | Blocked | 0/52 | Waiting on Phase 0+1+2 |
| Phase 4 | Blocked | 0/24 | Waiting on Phase 3 |

---

*Last Updated: December 2025*
