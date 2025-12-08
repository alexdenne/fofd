# Phase 1: Content Extraction

**Status:** Not Started
**Parallel Streams:** 4
**Dependencies:** None (can start immediately)
**Output Location:** `/fofd-website-new/content-extraction/`

---

## Overview

Extract all content from the legacy HTML files into clean, portable formats (Markdown, JSON, YAML) that can be used with any modern platform.

---

## Stream 1A: Page Content Extraction

**Goal:** Convert all 97 HTML pages to clean Markdown with frontmatter
**Output:** `/content-extraction/pages/*.md`
**Can parallelize with:** 1B, 1C, 1D

### Tasks

#### Setup
- [ ] **1A.01** Create `/content-extraction/pages/` directory structure
- [ ] **1A.02** Create page extraction script/template
- [ ] **1A.03** Define frontmatter schema (title, description, lastUpdated, category)

#### Main Pages (gpage1-22)
- [ ] **1A.04** Extract `index.html` → `pages/home.md`
- [ ] **1A.05** Extract `gpage1.html` → `pages/getting-there.md`
- [ ] **1A.06** Extract `gpage2.html` → `pages/events.md`
- [ ] **1A.07** Extract `gpage3.html` → `pages/walks-trails.md`
- [ ] **1A.08** Extract `gpage4.html` → `pages/aims-objectives.md`
- [ ] **1A.09** Extract `gpage5.html` → `pages/constitution.md`
- [ ] **1A.10** Extract `gpage6.html` → `pages/history.md`
- [ ] **1A.11** Extract `gpage7.html` → `pages/lyme-disease.md`
- [ ] **1A.12** Extract `gpage8.html` → `pages/committee.md`
- [ ] **1A.13** Extract `gpage9.html` → `pages/contact.md`
- [ ] **1A.14** Extract `gpage10.html` → `pages/useful-links.md`
- [ ] **1A.15** Extract `gpage11.html` → `pages/membership.md`
- [ ] **1A.16** Extract `gpage12.html` → `pages/projects.md`
- [ ] **1A.17** Extract `gpage13.html` → `pages/cairn.md`
- [ ] **1A.18** Extract `gpage14.html` → `pages/conservation.md` (note: under construction)
- [ ] **1A.19** Extract `gpage15.html` → `pages/volunteering.md`
- [ ] **1A.20** Extract `gpage16.html` → `pages/wildlife.md`
- [ ] **1A.21** Extract `gpage17.html` → `pages/archaeology.md`
- [ ] **1A.22** Extract `gpage18.html` → `pages/city-of-london.md`
- [ ] **1A.23** Extract `gpage19.html` → `pages/nature-trail.md` (cross-ref with 1C)
- [ ] **1A.24** Extract `gpage20.html` → `pages/planning.md`
- [ ] **1A.25** Extract `gpage21.html` → `pages/reports.md`
- [ ] **1A.26** Extract `gpage22.html` → `pages/happy-valley.md`

#### AGM Reports (2014-2024)
- [ ] **1A.27** Extract `AGM2014.html` → `pages/reports/agm-2014.md`
- [ ] **1A.28** Extract `AGM2015.html` → `pages/reports/agm-2015.md`
- [ ] **1A.29** Extract `AGM2016.html` → `pages/reports/agm-2016.md`
- [ ] **1A.30** Extract `AGM2017.html` → `pages/reports/agm-2017.md`
- [ ] **1A.31** Extract `AGM2018.html` → `pages/reports/agm-2018.md`
- [ ] **1A.32** Extract `AGM2019.html` → `pages/reports/agm-2019.md`
- [ ] **1A.33** Extract `AGM2020.html` → `pages/reports/agm-2020.md`
- [ ] **1A.34** Extract `AGM2021.html` → `pages/reports/agm-2021.md`
- [ ] **1A.35** Extract `AGM2022.html` → `pages/reports/agm-2022.md`

#### Special Pages
- [ ] **1A.36** Extract `Donations.html` → `pages/donations.md`
- [ ] **1A.37** Extract `SLD-NNR.html` → `pages/south-london-downs-nnr.md`
- [ ] **1A.38** Extract consultation pages → `pages/consultations/*.md`

#### Verification
- [ ] **1A.39** Create page inventory checklist
- [ ] **1A.40** Verify all text content preserved
- [ ] **1A.41** Note any missing/broken content in original

**Stream 1A Total:** 41 tasks

---

## Stream 1B: Media & Asset Inventory

**Goal:** Catalog all images, PDFs, and create organized asset structure
**Output:** `/content-extraction/inventory/`
**Can parallelize with:** 1A, 1C, 1D

### Tasks

#### Image Inventory
- [ ] **1B.01** Create `/content-extraction/inventory/` directory
- [ ] **1B.02** Inventory all `/images/` files with dimensions and descriptions
- [ ] **1B.03** Inventory all `/images-wildlife/` files
- [ ] **1B.04** Inventory all `/history-images/` files
- [ ] **1B.05** Create `images-inventory.json` with metadata

#### Widget Analysis
- [ ] **1B.06** Catalog all `/widgets/*.gif` files
- [ ] **1B.07** Identify which widgets are navigation buttons
- [ ] **1B.08** Identify hover state pairs (normal/hover)
- [ ] **1B.09** Extract button text from image names
- [ ] **1B.10** Create `widgets-inventory.json`

#### PDF Inventory
- [ ] **1B.11** List all PDFs with file sizes
- [ ] **1B.12** Categorize PDFs (Nature Trail, AGM, Policy, Maps, etc.)
- [ ] **1B.13** Check for duplicate PDFs in different locations
- [ ] **1B.14** Create `pdfs-inventory.json`
- [ ] **1B.15** Note any PDFs that could be converted to web pages

#### Fungi Gallery
- [ ] **1B.16** Inventory all `/Fungi-011114/` images
- [ ] **1B.17** Extract species data from `Fungi-011114.html`
- [ ] **1B.18** Create `fungi-gallery.json` with species metadata

**Stream 1B Total:** 18 tasks

---

## Stream 1C: Nature Trail Audit

**Goal:** Comprehensive audit of the 4-language Nature Trail system
**Output:** `/content-extraction/inventory/nature-trail/`
**Can parallelize with:** 1A, 1B, 1D

### Tasks

#### Audio File Verification
- [ ] **1C.01** Verify all 29 English MP3 files exist and play
- [ ] **1C.02** Verify all 29 French MP3 files exist and play
- [ ] **1C.03** Verify all 29 Hindi MP3 files exist and play
- [ ] **1C.04** Verify all 29 Polish MP3 files exist and play
- [ ] **1C.05** Note any missing or corrupted audio files
- [ ] **1C.06** Record duration of each audio file

#### PDF Text Verification
- [ ] **1C.07** Verify all 29 English PDF text files exist
- [ ] **1C.08** Check PDF accessibility (can text be extracted?)

#### Content Extraction
- [ ] **1C.09** Extract post descriptions/summaries from gpage19.html
- [ ] **1C.10** Create `nature-trail-posts.json` with:
  - Post number
  - Title/topic
  - Available languages
  - Audio file paths
  - PDF file paths
  - Duration

#### Language Page Analysis
- [ ] **1C.11** Compare English vs French page structure
- [ ] **1C.12** Compare English vs Hindi page structure
- [ ] **1C.13** Compare English vs Polish page structure
- [ ] **1C.14** Note any missing translations

#### Credits
- [ ] **1C.15** Extract credits from `NatureTrailCreditsEnglish.html`
- [ ] **1C.16** Extract credits from other language credit pages

**Stream 1C Total:** 16 tasks

---

## Stream 1D: Data Structure Definition

**Goal:** Define JSON/YAML schemas for structured data
**Output:** `/content-extraction/data/`
**Can parallelize with:** 1A, 1B, 1C

### Tasks

#### Schema Creation
- [ ] **1D.01** Create `/content-extraction/data/` directory
- [ ] **1D.02** Define `events.schema.json` for events/diary
- [ ] **1D.03** Define `committee.schema.json` for committee members
- [ ] **1D.04** Define `links.schema.json` for useful links
- [ ] **1D.05** Define `projects.schema.json` for completed projects

#### Data Population
- [ ] **1D.06** Extract events data → `events.json`
- [ ] **1D.07** Extract committee data → `committee.json`
- [ ] **1D.08** Extract useful links → `links.json`
- [ ] **1D.09** Extract projects list → `projects.json`
- [ ] **1D.10** Extract AGM speakers → `agm-speakers.json`

#### Configuration
- [ ] **1D.11** Create `site-config.json` with:
  - Site title
  - Contact email
  - Address
  - Social links
  - Membership fees

**Stream 1D Total:** 11 tasks

---

## Phase 1 Completion Checklist

- [ ] All 23 main pages extracted to Markdown
- [ ] All 9 AGM reports extracted
- [ ] All special pages extracted
- [ ] Complete image inventory created
- [ ] Complete PDF inventory created
- [ ] All Nature Trail audio verified (116 files)
- [ ] Nature Trail data structure created
- [ ] All JSON data files populated
- [ ] Phase 1 review meeting held

---

## Output Files Summary

```
content-extraction/
├── pages/
│   ├── home.md
│   ├── getting-there.md
│   ├── ... (23 main pages)
│   ├── reports/
│   │   ├── agm-2014.md
│   │   └── ... (9 AGM reports)
│   └── consultations/
│       └── ... (consultation pages)
├── data/
│   ├── events.json
│   ├── committee.json
│   ├── links.json
│   ├── projects.json
│   ├── agm-speakers.json
│   └── site-config.json
└── inventory/
    ├── images-inventory.json
    ├── widgets-inventory.json
    ├── pdfs-inventory.json
    ├── fungi-gallery.json
    └── nature-trail/
        └── nature-trail-posts.json
```

---

## Notes

- **Parallel execution:** All 4 streams can run simultaneously
- **Recommended order if solo:** 1D → 1B → 1C → 1A (schemas first, then inventory, then extraction)
- **Automation opportunity:** Page extraction (1A) could be scripted

---

*Total Phase 1 Tasks: 47*
