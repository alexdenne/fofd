# Active Work Streams

This file tracks the status of all parallel work streams. Update this when switching between streams.

---

## Current Status

| Stream | Branch | Status | Owner | Progress |
|--------|--------|--------|-------|----------|
| **1A: Page Extraction** | `stream/1a-page-extraction` | Not Started | Claude | 0/41 |
| **1B: Media Inventory** | `stream/1b-media-inventory` | Not Started | Claude | 0/18 |
| **1C: Nature Trail Audit** | `stream/1c-nature-trail` | Not Started | Human | 0/16 |
| **1D: Data Structures** | `stream/1d-data-structures` | Not Started | Claude | 0/11 |
| **1E: Legal/Infra Audit** | `stream/1e-legal-audit` | Not Started | Human+Claude | 0/17 |
| **2A: Design System** | `stream/2a-design-system` | Not Started | Claude | 0/26 |
| **2B: Dev Environment** | `stream/2b-dev-environment` | Not Started | Claude+Human | 0/22 |

---

## Stream Details

### Phase 1 Streams (Can all run in parallel)

#### Stream 1A: Page Extraction
- **What:** Convert all HTML pages to Markdown
- **Owner:** Claude (autonomous)
- **Output:** `/content-extraction/pages/`
- **Start command:** Work on branch `stream/1a-page-extraction`

#### Stream 1B: Media Inventory
- **What:** Catalog all images, widgets, PDFs
- **Owner:** Claude (autonomous)
- **Output:** `/content-extraction/inventory/`
- **Start command:** Work on branch `stream/1b-media-inventory`

#### Stream 1C: Nature Trail Audit
- **What:** Verify all audio files, create data structure
- **Owner:** Human (must test audio playback)
- **Output:** `/content-extraction/inventory/nature-trail/`
- **Notes:** Claude can create structure, human must verify audio

#### Stream 1D: Data Structures
- **What:** Define schemas, extract structured data
- **Owner:** Claude (autonomous)
- **Output:** `/content-extraction/data/`
- **Recommend:** Start this first - informs other streams

#### Stream 1E: Legal/Infrastructure Audit
- **What:** Document hosting, email, legal requirements
- **Owner:** Human + Claude
- **Output:** `/content-extraction/audit/`
- **Notes:** Several tasks require human access to external systems

### Phase 2 Streams (Can run parallel to Phase 1)

#### Stream 2A: Design System
- **What:** Create colors, typography, component designs
- **Owner:** Claude (human reviews)
- **Output:** `/design/`
- **Notes:** Human should review designs before Phase 3

#### Stream 2B: Dev Environment
- **What:** Set up static site generator, hosting
- **Owner:** Claude + Human
- **Output:** `/src/`
- **Notes:** Human must create Netlify account, test in browser

---

## How to Work on Streams

### Starting a Stream
```bash
# Create and switch to stream branch
git checkout -b stream/1a-page-extraction

# Do work...

# Commit progress
git add .
git commit -m "1A: Extract homepage and first 5 pages"

# Push
git push -u origin stream/1a-page-extraction
```

### Merging Completed Stream
```bash
# Switch to main development branch
git checkout claude/analyze-repo-readme-01B2uXxvw2KLT6CGqJLyiZBL

# Merge stream
git merge stream/1a-page-extraction

# Push
git push
```

### Updating Stream Status
After completing tasks, update:
1. The relevant `tasks/PHASE-*.md` file (check off tasks)
2. This `STREAMS.md` file (update progress column)
3. Commit both changes

---

## Recommended Work Order

### If Working Solo (Sequential)
```
1E (audit) → 1D (schemas) → 2B (dev env) → 1B (inventory) → 2A (design) → 1A (pages) → 1C (audio)
```

### If Working in Parallel (2 people)
```
Person 1 (Claude focus):     1D → 1B → 1A → 2A
Person 2 (Human focus):      1E → 1C → 2B
```

### If Maximizing Parallelism
```
All 7 streams can technically run simultaneously
But 1C and 1E require human input
And 2B requires human to create accounts
```

---

## Stream Dependencies for Phase 3

Before starting Phase 3, these must be complete:
- [ ] Stream 1A: Page Extraction (content for pages)
- [ ] Stream 1B: Media Inventory (know what assets to include)
- [ ] Stream 1C: Nature Trail Audit (verified audio works)
- [ ] Stream 1D: Data Structures (schemas for dynamic content)
- [ ] Stream 2A: Design System (CSS and components)
- [ ] Stream 2B: Dev Environment (platform to build on)

Stream 1E (Legal Audit) can complete during Phase 3, but should inform:
- Privacy policy content
- Cookie consent requirements
- Form data handling

---

*Last Updated: December 2025*
