# Repo-Specific: Quality Bar Definition

**Prompt Used:** "What's the quality bar? Define acceptance criteria for converted PDFs/image metadata"

---

## PDF Conversion Quality Standards

### Text Extraction Quality Levels

| Level | Criteria | Action |
|-------|----------|--------|
| **Excellent** | 100% accurate text, perfect structure preservation, all headings/lists intact | Use as-is |
| **Good** | 95%+ accurate, minor formatting issues, readable | Use with minor cleanup |
| **Acceptable** | 85%+ accurate, some OCR errors, structure mostly preserved | Use with notes, flag for review |
| **Poor** | 70-85% accurate, significant errors, structure lost | Flag for manual transcription |
| **Failed** | <70% accurate, unreadable, or image-only PDF | Create INDEX entry only |

### Acceptance Criteria for Converted PDFs

A converted PDF markdown file is **acceptable** when:

1. **Content Accuracy**
   - [ ] Main text is readable without mental effort
   - [ ] No more than 3 obvious OCR errors per page
   - [ ] Names, places, dates are correct
   - [ ] No sentences are truncated or missing

2. **Structure Preservation**
   - [ ] Headings are marked with `#` appropriately
   - [ ] Paragraphs are separated
   - [ ] Lists are formatted as lists (not run-on text)
   - [ ] If original has emphasis (bold/italic), reasonable attempt made

3. **Frontmatter Completeness**
   - [ ] `title` is present and accurate
   - [ ] `source_pdf` path is correct
   - [ ] `category` is assigned
   - [ ] `date_converted` is present
   - [ ] `word_count` is reasonable for content length

4. **No Harmful Content**
   - [ ] No garbled text that could be misread
   - [ ] No accidental insertion of unrelated content
   - [ ] Safety information is accurate (Lyme disease, etc.)

### Specific Standards by Category

| Category | Additional Criteria |
|----------|---------------------|
| **nature-trail** | Post number correct, themes identified, related_audio path valid |
| **posts** | Location info preserved if present, interpretive content intact |
| **strategy** | Document source/date captured, summary included |
| **history** | Dates accurate, names spelled correctly |
| **agm** | Year identified, key metrics preserved |
| **maps** | INDEX entry only (visual content), description useful |

---

## Image Metadata Quality Standards

### Alt Text Quality Levels

| Level | Criteria | Example |
|-------|----------|---------|
| **Excellent** | Specific, accurate, useful for screen readers, SEO-optimized | "Common blue butterfly resting on a purple knapweed flower at Farthing Downs" |
| **Good** | Accurate, reasonably specific | "Blue butterfly on wildflower at Farthing Downs" |
| **Acceptable** | Generic but accurate | "Butterfly on flower" |
| **Poor** | Vague or potentially inaccurate | "Wildlife photo" |
| **Failed** | Completely wrong or missing | "Image of document" (when it's a photo) |

### Acceptance Criteria for Image Metadata

An image metadata entry is **acceptable** when:

1. **File Information**
   - [ ] `filename` matches actual file
   - [ ] `original_path` is valid
   - [ ] `dimensions` are correct
   - [ ] `file_size_kb` is reasonable

2. **Categorization**
   - [ ] `category` is correct (wildlife, history, archaeology, general, fungi)
   - [ ] `subcategory` is reasonable if assigned
   - [ ] Navigation widgets are excluded or marked as `skip`

3. **Alt Text**
   - [ ] Describes what's actually in the image
   - [ ] Is at least "Acceptable" quality level
   - [ ] Includes location reference where appropriate ("at Farthing Downs")
   - [ ] For wildlife: attempts species identification or uses generic ("wildflower", "bird")

4. **Quality Assessment**
   - [ ] `quality_score` reflects actual image quality
   - [ ] Low quality images are flagged
   - [ ] `needs_review` is true for uncertain identifications

5. **Suggested Usage**
   - [ ] `suggested_pages` is reasonable (gallery, homepage, specific sections)
   - [ ] Hero candidates are identified for high-quality landscape images

### Quality Score Criteria

| Score | Technical Criteria | Content Criteria |
|-------|-------------------|------------------|
| **high** | ≥1200px width, sharp focus, no artifacts | Compelling subject, good composition, usable for hero/feature |
| **medium** | 800-1200px, minor issues acceptable | Clear subject, decent composition, usable for gallery |
| **low** | <800px, or visible quality issues | Subject unclear, poor composition, may need replacement |
| **skip** | Navigation GIF, icon, or non-photo | Not content photography |

### Specific Standards by Category

| Category | Subject Recognition | Alt Text Specificity |
|----------|---------------------|---------------------|
| **wildlife** | Species ID attempted (can be generic: "butterfly", "bird of prey") | Include behavior if visible ("in flight", "feeding") |
| **history** | Date/era if inferable | Include context ("historical photo of...", "circa...") |
| **archaeology** | Feature type if recognizable | Include archaeological term if known ("barrow", "field boundary") |
| **general** | Landscape/location | Include area name (Farthing Downs, Happy Valley) |
| **fungi** | Species name if available from filename/folder | Include characteristics ("red cap", "growing on log") |

---

## Quality Control Process

### For PDF Conversions

```
Step 1: Automated Check
- Word count > 100 (sanity check)
- Frontmatter validates against schema
- No obvious error patterns ("##", garbled text runs)

Step 2: Spot Check (Human, 10% of files)
- Compare original PDF to markdown
- Score quality level
- Note patterns

Step 3: Full Review (Human, for safety/legal content)
- Any content about Lyme disease
- Any content about accessibility
- Any historical claims that could be disputed
```

### For Image Metadata

```
Step 1: Automated Check
- JSON validates
- Required fields present
- Dimensions are plausible
- File exists at path

Step 2: Spot Check (Human, 10% of files)
- View image
- Read alt text
- Confirm quality score
- Note patterns

Step 3: Full Review (Human, for hero candidates)
- All images marked quality: high
- All images suggested for homepage
- Wildlife species identifications
```

---

## Minimum Quality for MVP

For MVP launch, we need:

| Asset Type | Minimum Quality Bar |
|------------|---------------------|
| Homepage hero images (3-5) | "Excellent" quality, human-verified alt text |
| Gallery preview images (10-20) | "Good" quality or better |
| Nature Trail content | "Acceptable" converted PDFs |
| Wildlife photo alt text | "Acceptable" (generic OK for MVP) |

### Quality Trade-offs for Speed

| If short on time... | Accept this trade-off |
|--------------------|----------------------|
| PDF conversion slow | Convert only HIGH priority categories |
| Image alt text imperfect | Use generic descriptions, improve post-launch |
| Some images low quality | Exclude from initial gallery |
| Species ID uncertain | Use "butterfly" instead of guessing species |

---

## Quality Improvement Post-Launch

After MVP, systematically improve quality:

1. **Month 1-2:** Review and improve wildlife alt text with expert input
2. **Month 2-3:** Add species IDs to fungi photos (foray documentation exists)
3. **Month 3-4:** Improve history/archaeology context with committee knowledge
4. **Ongoing:** Update as community submits corrections

---

*Generated: 2025-12-08*
