# Content Gap Analysis: Old Site vs New Site

**Date:** 10 December 2025
**Source:** Crawl analysis (`crawls/internal_all_crawl_10thDec2025.csv`)
**Prepared for:** Website Migration Project

---

## Executive Summary

There is a **significant content gap** between the old Farthing Downs website and the new migrated site. The old site contained approximately **100+ pages** of rich content that has been consolidated into just **9 HTML pages** on the new site.

**Key finding:** Much valuable content has been extracted to markdown but **not yet built into the new site**.

---

## Current New Site Structure

From the crawl, the new site has only **9 HTML pages**:

| Page | URL | Word Count | Purpose |
|------|-----|------------|---------|
| Home | index.html | 241 | Landing page |
| Visit | visit.html | 572 | Visitor information |
| Explore | explore.html | 913 | Wildlife & history overview |
| Nature Trail | nature-trail.html | 2,277 | Consolidated trail info |
| Events | events.html | 475 | Events listing |
| Gallery | gallery.html | 291 | Photo gallery |
| Join | join.html | 409 | Membership |
| About | about.html | 718 | Organization info |
| AGM | agm.html | 1,071 | AGM archive summary |

**Total:** ~6,967 words across 9 pages

---

## Content Extracted from Old Site (NOT on new site)

### 1. Nature Trail Individual Posts (29 pages) ❌ MISSING

The old site had **29 individual trail posts** with detailed content for each stop:

| Post Range | Content | Status |
|------------|---------|--------|
| Posts 1-10 | Farthing Downs trail (Welcome, Green Belt, Iron Age Fields, Hedgerows, Chalk Grassland, Ant Hills, Saxon Cemetery, The Folly, Cattle Grazing, Eastern Hedge) | Extracted to markdown, NOT on new site |
| Posts 11-20 | Happy Valley & Devilsden Wood | Extracted to markdown, NOT on new site |
| Posts 21-29 | Return trail (Aspen Trees through completion) | Extracted to markdown, NOT on new site |

**Impact:** The nature-trail.html consolidates everything into one page, but visitors lose the ability to explore individual trail stops.

### 2. FoFD-HV Alternative Trail Posts (19 pages) ❌ MISSING

Alternative trail content with different focus:
- 19 posts covering various aspects of Happy Valley
- Located at: `docs/content-extraction/pdfs-markdown/fofd-hv/`

### 3. Newsletter/Blog Posts (29+ posts) ❌ MISSING

Historical posts covering:
- Conservation updates
- Wildlife sightings
- Community news
- Project announcements

Located at: `docs/content-extraction/pdfs-markdown/posts/`

### 4. AGM Detailed Archives ⚠️ PARTIAL

**On new site:** Single agm.html with overview (1,071 words)

**Old site had individual pages for:**
| Year | Content |
|------|---------|
| 2014 | AGM notes and guest speaker |
| 2015 | AGM notes and guest speaker |
| 2016 | AGM notes and guest speaker |
| 2017 | AGM notes and guest speaker |
| 2018 | AGM notes and guest speaker |
| 2019 | AGM notes and guest speaker |
| 2020 | AGM notes (COVID year) |
| 2021 | AGM notes and guest speaker |
| 2022 | AGM notes and guest speaker |
| 2023 | AGM + Biodiversity Net Gain presentation |
| 2024 | AGM + Green Belt discussion |

### 5. History Documents (4 pages) ❌ MISSING

| Document | Content |
|----------|---------|
| Building No.1 Reuse | Historical building information |
| Building No.2 Traditional | Traditional building methods |
| Building No.3 Modern | Modern development |
| Living in Coulsdon | 2000 years of Coulsdon history |

### 6. Strategy & Policy Documents (8 pages) ❌ MISSING

| Document | Topic |
|----------|-------|
| Biodiversity Background | Net Zero and Net Gain challenges |
| Biodiversity Open Spaces | Croydon open spaces strategy |
| Extending Protection | Expanding Green Belt protections |
| Future Happy Valley | Happy Valley development references |
| Lizzie Brooks Appeal | Legal/planning appeal |
| More Trees | Tree planting initiatives |
| Valuing Environment | Environmental valuation |
| Green Spaces Justification | Case for green space protection |

### 7. Event Archives (6+ pages) ❌ MISSING

| Event | Date | Content |
|-------|------|---------|
| Archaeology Day | Sept 2023 | 75th anniversary of Hope-Taylor excavations |
| Fungi Foray | 2014 | Mushroom identification walk |
| Quiz Night | 2014 | Community event |
| Symposium Report | Various | Conservation symposium |
| Tandridge Golf Club | Various | Collaboration details |

### 8. Wildlife & Research Documents ❌ MISSING

| Document | Content |
|----------|---------|
| Moth Species 2015 | Complete moth survey from July 2015 |
| Membership Leaflet | Detailed organization information |

---

## Content Gap Summary

| Content Type | Old Site | New Site | Gap |
|--------------|----------|----------|-----|
| Nature Trail individual pages | 29 | 1 (consolidated) | **28 pages** |
| FoFD-HV trail pages | 19 | 0 | **19 pages** |
| Newsletter/blog posts | 29+ | 0 | **29+ pages** |
| AGM individual archives | 11 | 1 (summary) | **10 pages** |
| History pages | 4 | 0 | **4 pages** |
| Strategy/policy docs | 8 | 0 | **8 pages** |
| Event archives | 6+ | 0 | **6+ pages** |
| Wildlife/research docs | 2+ | 0 | **2+ pages** |
| **TOTAL** | **108+** | **9** | **~99 pages** |

---

## Issues Found in Crawl

### Broken Links (404 errors)

The crawl identified **4 broken links** related to Stripe payment placeholders:

1. `[STRIPE_LINK_PATRON]` - 404
2. `[STRIPE_LINK_CONCESSION]` - 404
3. `[STRIPE_LINK_FRIEND]` - 404
4. `[STRIPE_LINK_SUPPORTER]` - 404

**Action needed:** Replace placeholder links with actual Stripe payment URLs or remove from join.html.

---

## Recommendations

### Priority 1: Critical Content Gaps

1. **Nature Trail Pages** - Build 29 individual trail stop pages
   - Audio player integration
   - Trail navigation (next/previous)
   - Wildlife spotting points system

2. **Fix Stripe Links** - Replace placeholders with working payment URLs

### Priority 2: Valuable Content

3. **AGM Archives** - Build individual year pages (2014-2024)
4. **History Section** - Add history pages with old content
5. **Wildlife Resources** - Moth species list, wildlife guides

### Priority 3: Nice to Have

6. **Blog/News Archive** - Historical posts and updates
7. **Strategy Documents** - Policy and advocacy content
8. **Event Archives** - Past event documentation

---

## Content Already Extracted (Ready to Build)

All old site content has been extracted to markdown format in:

```
docs/content-extraction/pdfs-markdown/
├── nature-trail/     (29 posts - ready for individual pages)
├── fofd-hv/          (19 posts - ready for individual pages)
├── posts/            (29 posts - ready for blog/news section)
├── agm/              (AGM presentations - ready for archive)
├── history/          (4 docs - ready for history section)
├── strategy/         (8 docs - ready for resources section)
├── events/           (event materials)
├── info/             (membership, wildlife lists)
└── misc/             (additional content)
```

The content exists - it just needs to be built into the site.

---

## Next Steps

1. [ ] Review this analysis with stakeholders
2. [ ] Prioritize which content gaps to fill
3. [ ] Create templates for new page types (trail posts, AGM archives, etc.)
4. [ ] Build out additional pages from extracted markdown
5. [ ] Fix Stripe payment link placeholders
6. [ ] Re-crawl site after updates to verify

---

*Generated from crawl analysis on 10 December 2025*
