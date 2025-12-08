# Repo-Specific: Sample Batch Recommendation

**Prompt Used:** "Generate a sample batch - Process 5-10 items to validate the workflow before scaling"

---

## Rationale

Before committing to processing all 93 PDFs and 498 images, we should validate the approach with a small representative sample. This will:

1. Reveal workflow issues early
2. Calibrate quality expectations
3. Identify edge cases
4. Get human feedback before scaling

---

## Recommended PDF Sample Batch (10 files)

### Selection Criteria
- Cover all categories
- Include different complexity levels
- Mix of expected "easy" and "hard" conversions

### Selected Files

| # | File | Category | Why Selected |
|---|------|----------|--------------|
| 1 | `NatureTrail/NTEnglish/Text/Post01English.pdf` | nature-trail | First post, sets format |
| 2 | `NatureTrail/NTEnglish/Text/Post15English.pdf` | nature-trail | Middle post, verify consistency |
| 3 | `NatureTrail/NTEnglish/Text/Post29English.pdf` | nature-trail | Final post, verify series complete |
| 4 | `FoFD-HV-POSTSXXX/Post-01.pdf` | posts | Different post series |
| 5 | `FoFD-HV-POSTSXXX/Post-15.pdf` | posts | Middle of series |
| 6 | `Biodiversity-IntroducingChalkGrassland.pdf` | strategy | Technical document |
| 7 | `AGM 2023 Report.pdf` | agm | Presentation format |
| 8 | `Living in Coulsdon - A Brief History.pdf` | history | Narrative content |
| 9 | `FarthingDownsMapA4.pdf` | maps | Visual (expect failure) |
| 10 | Any leaflet/appeal PDF | misc | Marketing content |

### Expected Outcomes

| Category | Expected Result |
|----------|-----------------|
| nature-trail | Clean text extraction, structured content |
| posts | Similar to nature-trail |
| strategy | May have complex formatting (tables, columns) |
| agm | Likely slide format, may need special handling |
| history | Narrative text, should convert well |
| maps | Will NOT convert (visual), validate fallback |
| misc | Variable quality |

### Validation Checklist for Each PDF

- [ ] Does extracted text make sense?
- [ ] Are there obvious OCR errors?
- [ ] Is the structure preserved (headings, paragraphs)?
- [ ] Are special characters handled correctly?
- [ ] Is the frontmatter schema appropriate?
- [ ] What's the word count? (sanity check)

---

## Recommended Image Sample Batch (10 files)

### Selection Criteria
- Cover all categories
- Include different subjects
- Range of quality levels
- Different file formats

### Selected Files

| # | Category | Selection Method | Purpose |
|---|----------|------------------|---------|
| 1 | wildlife | First alphabetically | Baseline |
| 2 | wildlife | Random from middle | Consistency |
| 3 | wildlife | Filename suggests bird | Species ID test |
| 4 | history | First available | Historical context test |
| 5 | history | Oldest-looking filename | Age handling |
| 6 | archaeology | First available | Technical subject test |
| 7 | general | Hero candidate | Quality assessment |
| 8 | general | Small file size | Low quality detection |
| 9 | fungi | First from foray | Scientific naming test |
| 10 | general | GIF file | Navigation widget (should skip) |

### Validation Checklist for Each Image

- [ ] Can I see/process the image?
- [ ] Is the suggested alt text reasonable?
- [ ] Is the category assignment correct?
- [ ] Is the quality score reasonable?
- [ ] Are dimensions captured correctly?
- [ ] Is the suggested_pages field useful?

### Quality Score Calibration

Use this batch to define the quality scale:

| Score | Criteria | Example from Batch |
|-------|----------|-------------------|
| high | Sharp, well-composed, ≥1200px, compelling subject | [to be determined] |
| medium | Usable, minor issues, 800-1200px | [to be determined] |
| low | Significant issues, < 800px, poor composition | [to be determined] |
| skip | Navigation widgets, icons, not photos | [to be determined] |

---

## Sample Batch Process

### Step 1: PDF Conversion (2 hours)

```
For each of 10 PDFs:
1. Read PDF
2. Extract text
3. Create markdown with frontmatter
4. Save to appropriate category folder
5. Record in batch manifest
```

### Step 2: PDF Quality Review (30 minutes)

```
Human reviews each converted file:
1. Open original PDF
2. Open converted markdown
3. Compare content
4. Score: Good / Acceptable / Poor / Failed
5. Note any issues
```

### Step 3: Image Metadata (1 hour)

```
For each of 10 images:
1. View image
2. Generate metadata (dimensions, alt text, quality, category)
3. Save to JSON
4. Record in batch manifest
```

### Step 4: Image Quality Review (30 minutes)

```
Human reviews each metadata entry:
1. Open original image
2. Read suggested alt text
3. Check quality score
4. Score: Good / Acceptable / Poor
5. Note any issues
```

### Step 5: Process Adjustment

Based on sample results:
1. Refine frontmatter schema if needed
2. Adjust quality criteria if needed
3. Identify categories needing special handling
4. Estimate time for full batch

---

## Expected Issues and Responses

### PDFs

| Issue | Likelihood | Response |
|-------|------------|----------|
| Scanned/image PDF | 20-30% | Flag for OCR or manual transcription |
| Complex tables | 10-20% | Simplify to plain text or skip |
| Multi-column layout | 10-20% | May need post-processing |
| Non-English content | Low | Skip (English only for now) |

### Images

| Issue | Likelihood | Response |
|-------|------------|----------|
| Very small images | 20-30% | Flag as "low quality" |
| Navigation GIFs | 20-30% | Auto-skip based on dimensions/type |
| Unidentifiable subjects | 10-20% | Use generic alt text |
| Duplicates | 10-20% | Note in DUPLICATES.json |

---

## Success Criteria for Sample Batch

| Metric | Target |
|--------|--------|
| PDFs converted successfully | 8/10 (80%) |
| PDF quality rated Good/Acceptable | 7/10 (70%) |
| Images processed | 9/10 (90%, excluding nav widgets) |
| Image alt text rated Good/Acceptable | 7/9 (78%) |
| Total time for batch | < 4 hours |

If these targets are met, proceed with full batch.
If not, adjust process and run second sample batch.

---

## After Sample Batch

### If Successful:
1. Proceed with Phase 0A/0B in full
2. Use calibrated quality criteria
3. Apply learned patterns

### If Issues Found:
1. Document specific problems
2. Develop targeted solutions
3. Run second sample batch
4. Re-evaluate approach

### Possible Pivots:
- If > 50% PDFs are scanned: Invest in OCR tooling first
- If image quality is generally low: Reduce gallery scope
- If process is too slow: Consider parallel processing

---

*Generated: 2025-12-08*
