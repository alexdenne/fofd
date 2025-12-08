# Implementation Readiness: Actionable Tasks

**Prompt Used:** "Convert each phase into concrete, time-boxed tasks that: Have clear completion criteria, Can be picked up by someone unfamiliar with context, Are small enough to complete in one session"

**Scope:** Phase 0 and Phase 1 (immediate priorities)

---

## Phase 0A: PDF to Markdown Conversion

### Task 0A.1: Create Output Directory Structure
**Time:** 15 minutes
**Owner:** Technical maintainer
**Completion criteria:**
- [ ] Directory `docs/content-extraction/pdfs-markdown/` exists
- [ ] Subdirectories created: `nature-trail/`, `posts/`, `strategy/`, `agm/`, `maps/`, `history/`, `misc/`
- [ ] `.gitkeep` file in each subdirectory

**Command:**
```bash
mkdir -p docs/content-extraction/pdfs-markdown/{nature-trail,posts,strategy,agm,maps,history,misc}
touch docs/content-extraction/pdfs-markdown/{nature-trail,posts,strategy,agm,maps,history,misc}/.gitkeep
```

---

### Task 0A.2: Inventory All PDFs
**Time:** 30 minutes
**Owner:** Technical maintainer
**Completion criteria:**
- [ ] File `docs/content-extraction/pdfs-markdown/PDF-INVENTORY.md` created
- [ ] Lists all 93 PDFs with paths
- [ ] Each PDF categorized (nature-trail, posts, strategy, etc.)
- [ ] Each PDF marked as text-based or scanned

**Output format:**
```markdown
| Filename | Path | Category | Type | Priority |
|----------|------|----------|------|----------|
| Post01English.pdf | NatureTrail/NTEnglish/Text/ | nature-trail | text | HIGH |
```

---

### Task 0A.3: Convert Nature Trail PDFs (Batch 1: Posts 1-10)
**Time:** 1-2 hours
**Owner:** Claude/AI
**Completion criteria:**
- [ ] 10 markdown files created in `pdfs-markdown/nature-trail/`
- [ ] Each file has YAML frontmatter with: title, source_pdf, post_number, themes
- [ ] Body text extracted and formatted as clean markdown
- [ ] Conversion quality reviewed (spot-check 2 files)

**Input:** `site-2005-2025/NatureTrail/NTEnglish/Text/Post01English.pdf` through `Post10English.pdf`
**Output:** `post-01.md` through `post-10.md`

---

### Task 0A.4: Convert Nature Trail PDFs (Batch 2: Posts 11-20)
**Time:** 1-2 hours
**Owner:** Claude/AI
**Completion criteria:** Same as 0A.3, posts 11-20

---

### Task 0A.5: Convert Nature Trail PDFs (Batch 3: Posts 21-29)
**Time:** 1-2 hours
**Owner:** Claude/AI
**Completion criteria:** Same as 0A.3, posts 21-29

---

### Task 0A.6: Convert FoFD-HV Posts PDFs (All 29)
**Time:** 2-3 hours
**Owner:** Claude/AI
**Completion criteria:**
- [ ] 29 markdown files in `pdfs-markdown/posts/`
- [ ] Each has frontmatter with: post_number, location, topics
- [ ] Body text extracted as markdown

**Input:** `site-2005-2025/FoFD-HV-POSTSXXX/*.pdf`
**Output:** `post-01.md` through `post-29.md`

---

### Task 0A.7: Convert Strategy/Policy PDFs
**Time:** 1-2 hours
**Owner:** Claude/AI
**Completion criteria:**
- [ ] ~8 markdown files in `pdfs-markdown/strategy/`
- [ ] Each has frontmatter with: title, source, date (if known), summary

**Files to convert:**
- Biodiversity documents
- Green spaces strategy
- Planning consultation responses

---

### Task 0A.8: Create Map Index (Visual PDFs)
**Time:** 30 minutes
**Owner:** Claude/AI or manual
**Completion criteria:**
- [ ] File `pdfs-markdown/maps/INDEX.md` created
- [ ] Each map PDF listed with: filename, description, use case
- [ ] Note: Maps cannot be converted to text

**Output format:**
```markdown
# Map PDF Index

These PDFs contain visual maps and cannot be converted to text.

## Walking Maps
- `SurreyHillsMap.pdf` - Overview of Surrey Hills walking routes
...
```

---

### Task 0A.9: Convert Remaining PDFs
**Time:** 1-2 hours
**Owner:** Claude/AI
**Completion criteria:**
- [ ] AGM documents → `pdfs-markdown/agm/`
- [ ] History documents → `pdfs-markdown/history/`
- [ ] Miscellaneous → `pdfs-markdown/misc/`

---

### Task 0A.10: Create PDF Manifest
**Time:** 30 minutes
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `pdfs-markdown/MANIFEST.json` created
- [ ] JSON array with entry for each PDF
- [ ] Each entry: original_path, converted_path, status, word_count, category

**Output format:**
```json
[
  {
    "original_path": "site-2005-2025/NatureTrail/NTEnglish/Text/Post01English.pdf",
    "converted_path": "docs/content-extraction/pdfs-markdown/nature-trail/post-01.md",
    "status": "converted",
    "word_count": 450,
    "category": "nature-trail"
  }
]
```

---

## Phase 0B: Image Metadata Enrichment

### Task 0B.1: Create Metadata Directory Structure
**Time:** 15 minutes
**Owner:** Technical maintainer
**Completion criteria:**
- [ ] Directory `docs/content-extraction/images-metadata/` exists
- [ ] Subdirectories: `wildlife/`, `history/`, `archaeology/`, `general/`, `fungi/`

---

### Task 0B.2: Generate Wildlife Image Inventory
**Time:** 1-2 hours
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `images-metadata/wildlife/index.json` created
- [ ] Each image in `site-2005-2025/images-wildlife/` has entry
- [ ] Entry includes: filename, dimensions, suggested_alt_text, quality_score

---

### Task 0B.3: Generate History Image Inventory
**Time:** 30 minutes - 1 hour
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `images-metadata/history/index.json` created
- [ ] Each image in `site-2005-2025/history-images/` catalogued

---

### Task 0B.4: Generate Archaeology Image Inventory
**Time:** 30 minutes
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `images-metadata/archaeology/index.json` created

---

### Task 0B.5: Generate General Site Image Inventory
**Time:** 1-2 hours
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `images-metadata/general/index.json` created
- [ ] EXCLUDES navigation GIFs (buttons, arrows, etc.)
- [ ] Only photo content included

---

### Task 0B.6: Generate Fungi Foray Inventory
**Time:** 30 minutes
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `images-metadata/fungi/index.json` created

---

### Task 0B.7: Create Master Image Index
**Time:** 30 minutes
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `images-metadata/MASTER-INDEX.json` created
- [ ] Combines all category indexes
- [ ] Adds cross-reference by suggested_pages

---

### Task 0B.8: Identify Hero Image Candidates
**Time:** 30 minutes
**Owner:** Claude/AI + Human review
**Completion criteria:**
- [ ] File `images-metadata/HERO-CANDIDATES.md` created
- [ ] Lists top 10-15 images suitable for homepage hero
- [ ] Criteria: landscape orientation, high quality, compelling subject
- [ ] Human to make final selection

---

### Task 0B.9: Flag Images Needing Review
**Time:** 30 minutes
**Owner:** Claude/AI
**Completion criteria:**
- [ ] File `images-metadata/REVIEW-NEEDED.json` created
- [ ] Lists images with: low quality, unclear subject, possible copyright concerns

---

## Phase 1 Starter Tasks

### Task 1-PREP.1: Confirm Domain Name
**Time:** 5 minutes (action), 1 week (waiting)
**Owner:** Committee
**Completion criteria:**
- [ ] Email sent to committee requesting domain decision
- [ ] Options clearly presented with pros/cons
- [ ] Response received with decision

---

### Task 1-PREP.2: Clarify Email Setup
**Time:** 30 minutes
**Owner:** Technical maintainer + Committee
**Completion criteria:**
- [ ] Documented: Is @friendsoffarthingdowns.co.uk email in use?
- [ ] If yes: Where is it hosted? Who has access?
- [ ] Migration/preservation plan documented

---

### Task 1-PREP.3: Start Payment Provider Signup
**Time:** 30 minutes to initiate, 3-5 days to complete
**Owner:** Treasurer
**Completion criteria:**
- [ ] Stripe account created
- [ ] Organization linked
- [ ] Identity verification complete
- [ ] Test mode enabled

---

### Task 1-PREP.4: Designate Content Approver
**Time:** Committee decision
**Owner:** Committee
**Completion criteria:**
- [ ] One person designated as content approver
- [ ] Criteria for self-approval defined (if any)
- [ ] Documented in project notes

---

### Task 1-SETUP.1: Create GitHub Repository (if new)
**Time:** 15 minutes
**Owner:** Technical maintainer
**Completion criteria:**
- [ ] Repository created under organization account (not personal)
- [ ] At least 2 collaborators with write access
- [ ] README.md with project overview
- [ ] .gitignore configured

---

### Task 1-SETUP.2: Set Up Local Development
**Time:** 30 minutes
**Owner:** Technical maintainer
**Completion criteria:**
- [ ] Repository cloned locally
- [ ] Local server running (e.g., `python -m http.server`)
- [ ] Can view site in browser at localhost
- [ ] Hot reload working (optional)

---

### Task 1-SETUP.3: Create Basic CSS Framework
**Time:** 2-3 hours
**Owner:** Technical maintainer
**Completion criteria:**
- [ ] `css/style.css` created with:
  - Color variables (green, amber, sky blue per strategy)
  - Typography (headers, body)
  - Basic layout (container, grid)
  - Mobile-first responsive rules
- [ ] Tested on mobile and desktop viewport

---

## Task Naming Convention

```
[Phase]-[Stream].[Number]: [Description]

Examples:
0A.3: Convert Nature Trail PDFs (Batch 1)
0B.7: Create Master Image Index
1-PREP.2: Clarify Email Setup
```

---

## Session Planning Template

For each work session, pick 2-4 tasks that:
1. Have no blockers (or blockers are resolved)
2. Total estimated time ≤ session length
3. Include at least one "quick win" for momentum

Example session plan:
```
Session: December 9, 2025 (2 hours)

Tasks:
- [ ] 0A.1: Create output directory (15 min)
- [ ] 0A.2: Inventory all PDFs (30 min)
- [ ] 0A.3: Convert Nature Trail batch 1 (1 hour)
- [ ] Buffer for issues (15 min)

Blockers to resolve before session:
- None (these are independent)

Handoffs needed after session:
- Human spot-check 2 converted PDFs
```

---

*Generated: 2025-12-08*
