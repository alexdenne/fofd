# Phase 0: Asset Preparation

## Overview

**Purpose:** Convert raw assets into structured, enriched formats before content extraction begins.
**Dependencies:** None (this is the foundation phase)
**Outputs:**
- `docs/content-extraction/pdfs-markdown/` - Converted PDF content
- `docs/content-extraction/images-metadata/` - Enriched image metadata

---

## Stream 0A: PDF to Markdown Conversion

**Owner:** Claude (autonomous)
**Input:** 93 PDF files in `site-2005-2025/`
**Output:** `docs/content-extraction/pdfs-markdown/`

### Setup Tasks

- [ ] **0A.1** Create directory structure
  ```
  mkdir -p docs/content-extraction/pdfs-markdown/{nature-trail,posts,strategy,agm,maps,history,misc}
  ```

### Nature Trail PDFs (HIGH PRIORITY)

- [ ] **0A.2** Convert `Post01English.pdf` → `nature-trail/post-01.md`
- [ ] **0A.3** Convert `Post02English.pdf` → `nature-trail/post-02.md`
- [ ] **0A.4** Convert `Post03English.pdf` → `nature-trail/post-03.md`
- [ ] **0A.5** Convert `Post04English.pdf` → `nature-trail/post-04.md`
- [ ] **0A.6** Convert `Post05English.pdf` → `nature-trail/post-05.md`
- [ ] **0A.7** Convert `Post06English.pdf` → `nature-trail/post-06.md`
- [ ] **0A.8** Convert `Post07English.pdf` → `nature-trail/post-07.md`
- [ ] **0A.9** Convert `Post08English.pdf` → `nature-trail/post-08.md`
- [ ] **0A.10** Convert `Post09English.pdf` → `nature-trail/post-09.md`
- [ ] **0A.11** Convert `Post10English.pdf` → `nature-trail/post-10.md`
- [ ] **0A.12** Convert `Post11English.pdf` → `nature-trail/post-11.md`
- [ ] **0A.13** Convert `Post12English.pdf` → `nature-trail/post-12.md`
- [ ] **0A.14** Convert `Post13English.pdf` → `nature-trail/post-13.md`
- [ ] **0A.15** Convert `Post14English.pdf` → `nature-trail/post-14.md`
- [ ] **0A.16** Convert `Post15English.pdf` → `nature-trail/post-15.md`
- [ ] **0A.17** Convert `Post16English.pdf` → `nature-trail/post-16.md`
- [ ] **0A.18** Convert `Post17English.pdf` → `nature-trail/post-17.md`
- [ ] **0A.19** Convert `Post18English.pdf` → `nature-trail/post-18.md`
- [ ] **0A.20** Convert `Post19English.pdf` → `nature-trail/post-19.md`
- [ ] **0A.21** Convert `Post20English.pdf` → `nature-trail/post-20.md`
- [ ] **0A.22** Convert `Post21English.pdf` → `nature-trail/post-21.md`
- [ ] **0A.23** Convert `Post22English.pdf` → `nature-trail/post-22.md`
- [ ] **0A.24** Convert `Post23English.pdf` → `nature-trail/post-23.md`
- [ ] **0A.25** Convert `Post24English.pdf` → `nature-trail/post-24.md`
- [ ] **0A.26** Convert `Post25English.pdf` → `nature-trail/post-25.md`
- [ ] **0A.27** Convert `Post26English.pdf` → `nature-trail/post-26.md`
- [ ] **0A.28** Convert `Post27English.pdf` → `nature-trail/post-27.md`
- [ ] **0A.29** Convert `Post28English.pdf` → `nature-trail/post-28.md`
- [ ] **0A.30** Convert `Post29English.pdf` → `nature-trail/post-29.md`
- [ ] **0A.31** Convert `Post01-pre160217.pdf` → `nature-trail/post-01-legacy.md`

### FoFD-HV Posts (HIGH PRIORITY)

- [ ] **0A.32** Convert `Post 1.pdf` → `posts/post-01.md`
- [ ] **0A.33** Convert `Post 2.pdf` → `posts/post-02.md`
- [ ] **0A.34** Convert `Post 3.pdf` → `posts/post-03.md`
- [ ] **0A.35** Convert `Post 4.pdf` → `posts/post-04.md`
- [ ] **0A.36** Convert `Post 5.pdf` → `posts/post-05.md`
- [ ] **0A.37** Convert `Post 6.pdf` → `posts/post-06.md`
- [ ] **0A.38** Convert `Post 7.pdf` → `posts/post-07.md`
- [ ] **0A.39** Convert `Post 8.pdf` → `posts/post-08.md`
- [ ] **0A.40** Convert `Post 9.pdf` → `posts/post-09.md`
- [ ] **0A.41** Convert `Post 10.pdf` → `posts/post-10.md`
- [ ] **0A.42** Convert `Post 11.pdf` → `posts/post-11.md`
- [ ] **0A.43** Convert `Post 12.pdf` → `posts/post-12.md`
- [ ] **0A.44** Convert `Post 13.pdf` → `posts/post-13.md`
- [ ] **0A.45** Convert `Post 14.pdf` → `posts/post-14.md`
- [ ] **0A.46** Convert `Post 15.pdf` → `posts/post-15.md`
- [ ] **0A.47** Convert `Post 16.pdf` → `posts/post-16.md`
- [ ] **0A.48** Convert `Post 17.pdf` → `posts/post-17.md`
- [ ] **0A.49** Convert `Post 18.pdf` → `posts/post-18.md`
- [ ] **0A.50** Convert `Post 19.pdf` → `posts/post-19.md`
- [ ] **0A.51** Convert `Post 20.pdf` → `posts/post-20.md`
- [ ] **0A.52** Convert `Post 21.pdf` → `posts/post-21.md`
- [ ] **0A.53** Convert `Post 22.pdf` → `posts/post-22.md`
- [ ] **0A.54** Convert `Post 23.pdf` → `posts/post-23.md`
- [ ] **0A.55** Convert `Post 24.pdf` → `posts/post-24.md`
- [ ] **0A.56** Convert `Post 25.pdf` → `posts/post-25.md`
- [ ] **0A.57** Convert `Post 26.pdf` → `posts/post-26.md`
- [ ] **0A.58** Convert `Post 27.pdf` → `posts/post-27.md`
- [ ] **0A.59** Convert `Post 28.pdf` → `posts/post-28.md`
- [ ] **0A.60** Convert `Post 29.pdf` → `posts/post-29.md`
- [ ] **0A.61** Convert `Post 1-pre160217.pdf` → `posts/post-01-legacy.md`

### Strategy & Policy PDFs (MEDIUM PRIORITY)

- [ ] **0A.62** Convert `AstrategicapproachtobiodiversityandopenspacesinCroydon.pdf` → `strategy/biodiversity-open-spaces.md`
- [ ] **0A.63** Convert `BackgroundnoteBiodiversity.pdf` → `strategy/biodiversity-background.md`
- [ ] **0A.64** Convert `ExtendingProtectionforMajorOpenSpaces.pdf` → `strategy/extending-protection.md`
- [ ] **0A.65** Convert `JUSTIFYING THE RETENTION OF SPECIAL LOCAL GREEN SPACES BW.pdf` → `strategy/green-spaces-justification.md`
- [ ] **0A.66** Convert `Valuingyourlocalenvironment.pdf` → `strategy/valuing-environment.md`
- [ ] **0A.67** Convert `WHOS FOR MORE TREES Paper.pdf` → `strategy/more-trees.md`
- [ ] **0A.68** Convert `FutureHappyValley-Refs.pdf` → `strategy/future-happy-valley-refs.md`
- [ ] **0A.69** Convert `LizzieBrooksAppeal.pdf` → `strategy/lizzie-brooks-appeal.md`

### History PDFs (MEDIUM PRIORITY)

- [ ] **0A.70** Convert `Living in Coulsdon 2000 years ago A5.pdf` → `history/living-in-coulsdon.md`
- [ ] **0A.71** Convert `No1-Re-use-and-adapt.pdf` → `history/building-no1-reuse.md`
- [ ] **0A.72** Convert `No2-New-building-traditioinal.pdf` → `history/building-no2-traditional.md`
- [ ] **0A.73** Convert `No3-New-building-modern.pdf` → `history/building-no3-modern.md`

### AGM PDFs (LOW PRIORITY)

- [ ] **0A.74** Convert `AGMNovember2023GuestSpeaker.pdf` → `agm/agm-2023-guest-speaker.md`
- [ ] **0A.75** Convert `AGMNovember2024GuestSpeakers-Discussion.pdf` → `agm/agm-2024-discussion.md`

### Map PDFs (INDEX ONLY - Visual content)

- [ ] **0A.76** Create `maps/INDEX.md` with entries for:
  - `Getting there map.pdf`
  - `Happy Valley Getting There.pdf`
  - `SurreyHillsCompositeMap.pdf`
  - `SurreyHillsExtract1.pdf` through `SurreyHillsExtract6.pdf`

### Misc PDFs (LOW PRIORITY)

- [ ] **0A.77** Convert `Archaeology Day 02-09-23 Poster A3.pdf` → `misc/archaeology-day-2023.md`
- [ ] **0A.78** Convert `Quiz Night 2014 Website.pdf` → `misc/quiz-night-2014.md`
- [ ] **0A.79** Convert `MothSpeciesList2015.pdf` → `misc/moth-species-2015.md`
- [ ] **0A.80** Convert `Leaflet0121.pdf` → `misc/leaflet-2021.md`
- [ ] **0A.81** Convert `Membership Leaflet.pdf` → `misc/membership-leaflet.md`
- [ ] **0A.82** Convert `Symposium Report.pdf` → `misc/symposium-report.md`
- [ ] **0A.83** Convert `Tandridge-SurreyNationalGolfClub.pdf` → `misc/tandridge-golf-club.md`

### Manifest Creation

- [ ] **0A.84** Create `pdfs-markdown/MANIFEST.json` tracking all conversions

---

## Stream 0B: Image Metadata Enrichment

**Owner:** Claude (autonomous)
**Input:** 498 images in `site-2005-2025/`
**Output:** `docs/content-extraction/images-metadata/`

### Setup Tasks

- [ ] **0B.1** Create directory structure
  ```
  mkdir -p docs/content-extraction/images-metadata/{wildlife,history,archaeology,general,fungi}
  ```

### Wildlife Images (~150 files)

- [ ] **0B.2** Scan `site-2005-2025/images-wildlife/` directory
- [ ] **0B.3** Extract file metadata (size, dimensions) for each image
- [ ] **0B.4** Generate suggested alt-text based on filename patterns
- [ ] **0B.5** Categorize by subject (birds, mammals, insects, plants, etc.)
- [ ] **0B.6** Create `images-metadata/wildlife/index.json`

### History Images (~50 files)

- [ ] **0B.7** Scan `site-2005-2025/history-images/` directory
- [ ] **0B.8** Extract file metadata for each image
- [ ] **0B.9** Generate suggested alt-text and captions
- [ ] **0B.10** Create `images-metadata/history/index.json`

### Archaeology Images (~30 files)

- [ ] **0B.11** Scan `site-2005-2025/images-archaeology/` directory
- [ ] **0B.12** Extract file metadata for each image
- [ ] **0B.13** Generate suggested alt-text focusing on archaeological finds
- [ ] **0B.14** Create `images-metadata/archaeology/index.json`

### General Site Images (~200 files)

- [ ] **0B.15** Scan `site-2005-2025/images/` directory
- [ ] **0B.16** Filter out GIF navigation widgets (skip `*.gif` < 5KB)
- [ ] **0B.17** Extract file metadata for remaining images
- [ ] **0B.18** Categorize (landscape, events, committee, signage, etc.)
- [ ] **0B.19** Generate suggested alt-text
- [ ] **0B.20** Create `images-metadata/general/index.json`

### Fungi Foray Images (~30 files)

- [ ] **0B.21** Scan `site-2005-2025/Fungi-011114/` directory
- [ ] **0B.22** Extract file metadata for each image
- [ ] **0B.23** Generate alt-text (species names if identifiable from filename)
- [ ] **0B.24** Create `images-metadata/fungi/index.json`

### Thumbs Directory

- [ ] **0B.25** Scan `site-2005-2025/images/thumbs/` directory
- [ ] **0B.26** Map thumbnails to their full-size counterparts
- [ ] **0B.27** Document in `images-metadata/general/thumbs-mapping.json`

### Master Index Creation

- [ ] **0B.28** Combine all category indexes into `MASTER-INDEX.json`
- [ ] **0B.29** Add total counts and category summaries
- [ ] **0B.30** Include suggested page assignments for each image

### Quality & Duplicate Analysis

- [ ] **0B.31** Identify potential duplicate images (same size/dimensions)
- [ ] **0B.32** Create `images-metadata/DUPLICATES.json`
- [ ] **0B.33** Flag low-quality images (< 100px dimension, < 10KB)
- [ ] **0B.34** Create `images-metadata/REVIEW-NEEDED.json`

---

## Markdown Template for PDF Conversions

```yaml
---
title: "[Extracted or inferred title]"
source_pdf: "site-2005-2025/path/to/original.pdf"
category: "[nature-trail|posts|strategy|agm|history|misc]"
date_converted: "YYYY-MM-DD"
word_count: [number]
themes: ["theme1", "theme2"]
related_audio: "[path if applicable]"
related_images: ["image1.jpg", "image2.jpg"]
---

[Converted content here]

---

## Source Information

- **Original PDF:** `[filename]`
- **Conversion Date:** [date]
- **Conversion Method:** Claude AI extraction
```

---

## Image Metadata JSON Schema

```json
{
  "filename": "example.jpg",
  "original_path": "site-2005-2025/images-wildlife/example.jpg",
  "category": "wildlife",
  "subcategory": "birds",
  "file_size_bytes": 245000,
  "dimensions": {
    "width": 1200,
    "height": 800
  },
  "format": "jpeg",
  "suggested_alt_text": "Description for screen readers",
  "suggested_caption": "Caption for display",
  "quality_score": "high|medium|low",
  "suggested_pages": ["/explore/wildlife", "/gallery"],
  "has_thumbnail": true,
  "thumbnail_path": "site-2005-2025/images/thumbs/example-thumb.jpg",
  "needs_review": false,
  "review_reason": null,
  "exif_data": {
    "date_taken": "2019-06-15",
    "camera": "Canon EOS",
    "gps": null
  }
}
```

---

## Progress Tracking

| Stream | Total Tasks | Completed | Progress |
|--------|-------------|-----------|----------|
| 0A: PDF→Markdown | 84 | 0 | 0% |
| 0B: Image Metadata | 34 | 0 | 0% |
| **Total** | **118** | **0** | **0%** |

---

## Completion Criteria

Phase 0 is complete when:

- [ ] All 93 PDFs processed (converted to MD or indexed in maps/)
- [ ] `pdfs-markdown/MANIFEST.json` exists with 93 entries
- [ ] All image directories scanned
- [ ] `images-metadata/MASTER-INDEX.json` exists
- [ ] `DUPLICATES.json` and `REVIEW-NEEDED.json` created
- [ ] Human has reviewed 5+ sample PDF conversions
- [ ] Human has reviewed image categorization accuracy

---

*Last Updated: 2025-12-08*
