# FoFD Website Migration Plan

## For Agentic Sitebuilder Consumption

**Version:** 1.0
**Created:** 2025-12-08
**Purpose:** Comprehensive migration plan for moving legacy content (2005-2025) to new site (2026)

---

## Executive Summary

This plan migrates 20 years of content from a Parallels SiteBuilder site to a modern static site. The migration is structured in 5 phases (0-4), with **Phase 0** being a new foundational step that converts PDFs to markdown and enriches image metadata before any other extraction work begins.

### Asset Inventory

| Asset Type | Count | Location | Phase 0 Action |
|------------|-------|----------|----------------|
| PDF Documents | 93 | `site-2005-2025/**/*.pdf` | Convert to Markdown |
| Images | 498 | `site-2005-2025/**/*.{jpg,png,gif}` | Enrich with metadata |
| HTML Pages | 70+ | `site-2005-2025/*.html` | Phase 1 extraction |
| MP3 Audio | 122 | `site-2005-2025/NatureTrail/` | Phase 1C audit |

---

## Phase Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PHASE 0: ASSET PREPARATION (NEW)                         │
│                     (Foundation - Run FIRST)                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌────────────────────┐  ┌────────────────────┐                             │
│  │  0A: PDF→Markdown  │  │  0B: Image Metadata │                            │
│  │    [93 PDFs]       │  │    [498 images]     │                            │
│  │    [CLAUDE]        │  │    [CLAUDE]         │                            │
│  └─────────┬──────────┘  └─────────┬──────────┘                             │
│            │                       │                                         │
└────────────┼───────────────────────┼─────────────────────────────────────────┘
             │                       │
             └───────────┬───────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PHASE 1: CONTENT EXTRACTION                              │
│                     (Uses Phase 0 outputs)                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │1A: Pages │  │1B: Media │  │1C: Nature│  │1D: Data  │  │1E: Legal │      │
│  │[CLAUDE]  │  │[CLAUDE]  │  │Trail[YOU]│  │[CLAUDE]  │  │[YOU+CL]  │      │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘      │
└───────┼────────────┼────────────┼────────────┼────────────┼────────────────┘
        └────────────┴──────┬─────┴────────────┴────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PHASE 2: PLATFORM SETUP                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐                                         │
│  │ 2A: Design   │  │ 2B: Dev Env  │                                         │
│  └──────────────┘  └──────────────┘                                         │
└─────────────────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PHASE 3: MIGRATION                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │3A: Core  │→ │3B: Nature│  │3C: Forms │  │3D: Polish│                    │
│  │Pages     │  │Trail     │  │& Payments│  │          │                    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘                    │
└─────────────────────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PHASE 4: TESTING & LAUNCH                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │4A: Test  │→ │4B: Stage │→ │4C: Launch│→ │4D: Handoff│                   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## PHASE 0: ASSET PREPARATION

### Purpose
Convert raw assets into structured, searchable, enriched formats BEFORE content extraction begins. This creates a foundation that makes all subsequent phases more efficient.

### Stream 0A: PDF to Markdown Conversion

**Input:** 93 PDF files across `site-2005-2025/`
**Output:** `docs/content-extraction/pdfs-markdown/`
**Owner:** Claude (autonomous)

#### PDF Categories & Priorities

| Category | Count | Priority | Notes |
|----------|-------|----------|-------|
| Nature Trail Posts (English) | 30 | HIGH | Core content for /explore/nature-trail |
| FoFD-HV Posts | 29 | HIGH | Interpretive signage content |
| Strategy/Policy Docs | 8 | MEDIUM | May inform About section |
| AGM Documents | 2 | LOW | Archive material |
| Maps | 7 | MEDIUM | Need special handling (visual) |
| History Documents | 4 | MEDIUM | For /explore/history |
| Misc (leaflets, appeals) | 13 | LOW | Review for relevance |

#### 0A Tasks

```markdown
- [ ] 0A.1: Create output directory structure
      docs/content-extraction/pdfs-markdown/
      ├── nature-trail/
      ├── posts/
      ├── strategy/
      ├── agm/
      ├── maps/
      ├── history/
      └── misc/

- [ ] 0A.2: Convert Nature Trail PDFs (30 files)
      Source: site-2005-2025/NatureTrail/NTEnglish/Text/*.pdf
      Output: pdfs-markdown/nature-trail/post-01.md ... post-29.md
      Format: Include frontmatter with post number, title, themes

- [ ] 0A.3: Convert FoFD-HV Posts (29 files)
      Source: site-2005-2025/FoFD-HV-POSTSXXX/*.pdf
      Output: pdfs-markdown/posts/post-01.md ... post-29.md
      Format: Include frontmatter with post number, location, topics

- [ ] 0A.4: Convert Strategy/Policy PDFs (8 files)
      Source: site-2005-2025/*.pdf (biodiversity, green spaces, etc.)
      Output: pdfs-markdown/strategy/*.md
      Format: Include source, date, summary

- [ ] 0A.5: Convert History PDFs (4 files)
      Source: site-2005-2025/history-images/*.pdf, Living in Coulsdon*.pdf
      Output: pdfs-markdown/history/*.md

- [ ] 0A.6: Convert AGM PDFs (2 files)
      Source: site-2005-2025/AGM*.pdf
      Output: pdfs-markdown/agm/*.md

- [ ] 0A.7: Document map PDFs (7 files) - cannot convert, create index
      Source: site-2005-2025/*map*.pdf, SurreyHills*.pdf
      Output: pdfs-markdown/maps/INDEX.md (list with descriptions)

- [ ] 0A.8: Convert misc PDFs (13 files)
      Source: remaining PDFs
      Output: pdfs-markdown/misc/*.md

- [ ] 0A.9: Create PDF conversion manifest
      Output: pdfs-markdown/MANIFEST.json
      Content: { original_path, converted_path, status, word_count, themes }
```

#### Markdown Frontmatter Template

```yaml
---
title: "Post 1: Welcome to the Nature Trail"
source_pdf: "site-2005-2025/NatureTrail/NTEnglish/Text/Post01English.pdf"
category: "nature-trail"
post_number: 1
date_converted: "2025-12-08"
word_count: 450
themes: ["welcome", "introduction", "chalk downland"]
related_audio: "NatureTrail/NTEnglish/Audio/Post01.mp3"
---
```

---

### Stream 0B: Image Metadata Enrichment

**Input:** 498 images across `site-2005-2025/`
**Output:** `docs/content-extraction/images-metadata/`
**Owner:** Claude (autonomous)

#### Image Categories

| Category | Est. Count | Location | Priority |
|----------|------------|----------|----------|
| Wildlife Photos | ~150 | `images-wildlife/` | HIGH |
| History/Archive | ~50 | `history-images/` | MEDIUM |
| General Site | ~200 | `images/` | MEDIUM |
| Archaeology | ~30 | `images-archaeology/` | MEDIUM |
| Fungi Foray | ~30 | `Fungi-011114/` | LOW |
| Navigation Widgets | ~100+ | Various (GIFs) | SKIP |

#### 0B Tasks

```markdown
- [ ] 0B.1: Create metadata output structure
      docs/content-extraction/images-metadata/
      ├── wildlife/
      ├── history/
      ├── archaeology/
      ├── general/
      ├── fungi/
      └── MASTER-INDEX.json

- [ ] 0B.2: Inventory wildlife images (~150)
      Source: site-2005-2025/images-wildlife/
      Output: images-metadata/wildlife/index.json
      Extract: filename, dimensions, file_size, inferred_subject, suggested_alt_text

- [ ] 0B.3: Inventory history images (~50)
      Source: site-2005-2025/history-images/
      Output: images-metadata/history/index.json

- [ ] 0B.4: Inventory archaeology images (~30)
      Source: site-2005-2025/images-archaeology/
      Output: images-metadata/archaeology/index.json

- [ ] 0B.5: Inventory general site images (~200)
      Source: site-2005-2025/images/
      Output: images-metadata/general/index.json
      Note: Exclude GIF widgets (navigation buttons)

- [ ] 0B.6: Inventory fungi foray images (~30)
      Source: site-2005-2025/Fungi-011114/
      Output: images-metadata/fungi/index.json

- [ ] 0B.7: Create master image index
      Output: images-metadata/MASTER-INDEX.json
      Content: All images with paths, categories, suggested usage

- [ ] 0B.8: Generate alt-text suggestions
      For each image, suggest SEO-friendly alt text based on:
      - Filename analysis
      - Directory context
      - Any embedded EXIF data

- [ ] 0B.9: Identify duplicate/similar images
      Output: images-metadata/DUPLICATES.json
      Purpose: Reduce storage, pick best quality version

- [ ] 0B.10: Flag images needing human review
      Output: images-metadata/REVIEW-NEEDED.json
      Criteria: Poor quality, unclear subject, potential copyright issues
```

#### Image Metadata Schema

```json
{
  "filename": "buzzard-flight-2019.jpg",
  "original_path": "site-2005-2025/images-wildlife/buzzard-flight-2019.jpg",
  "category": "wildlife",
  "subcategory": "birds",
  "file_size_kb": 245,
  "dimensions": { "width": 1200, "height": 800 },
  "suggested_alt_text": "Buzzard in flight over chalk downland at Farthing Downs",
  "suggested_caption": "A buzzard soars over the downs - a common sight on sunny days",
  "exif_date": "2019-06-15",
  "quality_score": "high",
  "suggested_pages": ["/explore/wildlife", "/gallery"],
  "needs_review": false,
  "review_reason": null
}
```

---

## PHASE 1: CONTENT EXTRACTION

*Builds on Phase 0 outputs - PDF markdown can be referenced, image metadata informs page content*

### Stream 1A: Page Extraction (41 tasks)
Convert 70+ HTML pages to clean Markdown, referencing Phase 0 PDF conversions where relevant.

**Key Enhancement:** Link to converted PDF markdown instead of raw PDFs where appropriate.

### Stream 1B: Media Inventory (18 tasks)
**Simplified by Phase 0B** - Image metadata already created. This stream now focuses on:
- Audio file inventory (MP3s)
- Video content (if any)
- Validating Phase 0B metadata

### Stream 1C: Nature Trail Audit (16 tasks)
**Enhanced by Phase 0A** - Nature Trail PDFs already converted to markdown. This stream:
- Verifies audio files play correctly (human required)
- Cross-references PDF markdown with audio content
- Creates unified Nature Trail data structure

### Stream 1D: Data Structures (11 tasks)
Define schemas using Phase 0 outputs as reference data.

### Stream 1E: Legal/Infrastructure Audit (17 tasks)
No change from original plan.

---

## PHASE 2: PLATFORM SETUP

### Stream 2A: Design System (26 tasks)
- Use Phase 0B image metadata to plan gallery layouts
- Reference Phase 0A converted content for page structure decisions

### Stream 2B: Dev Environment (22 tasks)
No change from original plan.

---

## PHASE 3: MIGRATION

### Stream 3A: Core Pages
**Input:** Phase 1A markdown + Phase 0A converted PDFs
**Action:** Build pages using converted PDF content where applicable

### Stream 3B: Nature Trail Integration
**Input:** Phase 0A nature trail markdown + Phase 1C audio audit
**Action:** Create interactive trail pages with embedded/linked audio

### Stream 3C: Forms & Payments
No change from original plan.

### Stream 3D: Polish & Optimize
- Use Phase 0B image metadata for alt text population
- Optimize images flagged in Phase 0B

---

## PHASE 4: TESTING & LAUNCH

No change from original plan. Phase 0 outputs provide:
- Content verification baseline (PDF→MD conversions)
- Image audit trail for accessibility testing

---

## Output Directory Structure

```
/
├── site-2005-2025/                # Legacy website (source)
├── site-2026/                     # New website (destination)
│
└── docs/
    ├── WEBSITE_STRATEGY.md        # High-level vision & goals
    ├── FoFD Meeting Notes...      # Committee decisions
    ├── deep-research/             # Background research (14 docs)
    │
    ├── migration/                 # Migration planning
    │   ├── MIGRATION-PLAN.md      # THIS FILE - Start here!
    │   ├── PROJECT-PLAN.md        # Original master plan
    │   ├── STREAMS.md             # Active work streams
    │   ├── README.md              # Architecture docs
    │   ├── GAPS-AND-LIMITATIONS.md
    │   └── tasks/                 # Detailed task lists
    │       ├── PHASE-0-ASSET-PREPARATION.md
    │       ├── PHASE-1-CONTENT-EXTRACTION.md
    │       ├── PHASE-2-PLATFORM-SETUP.md
    │       ├── PHASE-3-MIGRATION.md
    │       └── PHASE-4-LAUNCH.md
    │
    └── content-extraction/        # Extracted/processed content
        ├── pdfs-markdown/         # Phase 0A output
        │   ├── nature-trail/      # 30 converted post MDs
        │   ├── posts/             # 29 FoFD-HV posts
        │   ├── strategy/          # Policy documents
        │   ├── agm/               # AGM presentations
        │   ├── maps/              # INDEX only (visual PDFs)
        │   ├── history/           # Historical documents
        │   ├── misc/              # Other PDFs
        │   └── MANIFEST.json      # Conversion tracking
        │
        ├── images-metadata/       # Phase 0B output
        │   ├── wildlife/          # Wildlife image metadata
        │   ├── history/           # History image metadata
        │   ├── archaeology/       # Archaeology image metadata
        │   ├── general/           # General site images
        │   ├── fungi/             # Fungi foray images
        │   ├── MASTER-INDEX.json  # All images combined
        │   ├── DUPLICATES.json    # Duplicate detection
        │   └── REVIEW-NEEDED.json # Human review queue
        │
        ├── pages/                 # Phase 1A - HTML→MD conversions
        ├── data/                  # Phase 1D - Structured data
        ├── inventory/             # Phase 1B - Asset inventories
        │   └── nature-trail/      # Phase 1C - Audio audit
        └── audit/                 # Phase 1E - Legal/infra audit
```

---

## Execution Order for Agentic Sitebuilder

### Recommended Sequential Order (Solo Agent)

```
Phase 0 (REQUIRED FIRST):
  0A: PDF→Markdown    ──┐
  0B: Image Metadata  ──┼── Can run in parallel
                        │
                        ▼
Phase 1:
  1D: Data Structures (uses 0A/0B outputs)
  1E: Legal Audit (independent)
  1B: Media Inventory (validates 0B)
  1A: Page Extraction (references 0A)
  1C: Nature Trail (combines 0A + audio)
                        │
                        ▼
Phase 2:
  2B: Dev Environment
  2A: Design System (uses 0B metadata)
                        │
                        ▼
Phase 3:
  3A: Core Pages
  3B: Nature Trail
  3C: Forms & Payments
  3D: Polish
                        │
                        ▼
Phase 4:
  4A: Testing → 4B: Staging → 4C: Launch → 4D: Handoff
```

### Maximum Parallelization

```
PARALLEL BATCH 1:
├── 0A: PDF→Markdown
├── 0B: Image Metadata
├── 1E: Legal Audit (no dependencies)
└── 2B: Dev Environment Setup (no dependencies)

PARALLEL BATCH 2 (after Batch 1):
├── 1D: Data Structures
├── 1B: Media Inventory
├── 1A: Page Extraction
├── 1C: Nature Trail Audit
└── 2A: Design System

SEQUENTIAL (after Batch 2):
3A → 3B → 3C → 3D → 4A → 4B → 4C → 4D
```

---

## Agent Instructions

### For Claude/AI Agent Executing This Plan

1. **Start with Phase 0** - Do not skip. PDF conversions and image metadata are foundational.

2. **Check dependencies** - Before starting any stream, verify prerequisite outputs exist.

3. **Create outputs in specified locations** - Follow the directory structure exactly.

4. **Use frontmatter/schemas** - All markdown should have YAML frontmatter. All JSON should follow schemas.

5. **Flag human-required tasks** - Mark clearly when human verification is needed (audio playback, visual review, account creation).

6. **Update progress** - After completing each task, update the relevant `tasks/PHASE-*.md` file.

7. **Cross-reference** - When extracting HTML pages, check if related PDF content exists in `pdfs-markdown/`.

### Human Checkpoints

| Phase | Human Action Required |
|-------|----------------------|
| 0A | Review sample PDF conversions for accuracy |
| 0B | Verify image categorization makes sense |
| 1C | Test audio playback |
| 1E | Provide hosting credentials, email config |
| 2B | Create hosting accounts (Netlify/Vercel) |
| 3C | Test payment sandbox |
| 4B | Visual review of staging site |
| 4C | Execute DNS changes |

---

## Related Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Website Strategy | `docs/WEBSITE_STRATEGY.md` | High-level vision & goals |
| Meeting Notes | `docs/FoFD Meeting Notes - Sepetmber 2025.md` | Committee decisions |
| Original Project Plan | `docs/migration/PROJECT-PLAN.md` | Detailed task breakdown |
| Work Streams | `docs/migration/STREAMS.md` | Parallel work organization |
| Gaps & Limitations | `docs/migration/GAPS-AND-LIMITATIONS.md` | Known issues |
| Deep Research | `docs/deep-research/` | Background research (14 docs) |

---

## Success Criteria

Phase 0 is complete when:
- [ ] 93 PDFs processed (converted or indexed)
- [ ] `pdfs-markdown/MANIFEST.json` created with all entries
- [ ] 498 images inventoried (excluding GIF widgets)
- [ ] `images-metadata/MASTER-INDEX.json` created
- [ ] Human has reviewed sample outputs from both streams

---

*Last Updated: 2025-12-08*
