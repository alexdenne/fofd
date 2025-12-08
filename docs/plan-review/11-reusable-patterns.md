# Repo-Specific: Reusable Patterns

**Prompt Used:** "What's reusable? Identify patterns in the first batch that can be templated"

---

## Document Templates

### PDF Conversion Frontmatter Template

```yaml
---
title: ""                    # Clear, descriptive title
source_pdf: ""               # Relative path to original PDF
category: ""                 # nature-trail | posts | strategy | agm | history | maps | misc
subcategory: ""              # Optional: More specific grouping
date_converted: "2025-12-08" # ISO date of conversion
word_count: 0                # Approximate word count
themes: []                   # Keywords for search/grouping
related_audio: ""            # For nature-trail: path to MP3
related_images: []           # If PDF references specific images
verified_by: ""              # Human reviewer name/initials
verified_date: ""            # When human reviewed
quality_score: ""            # excellent | good | acceptable | poor | failed
notes: ""                    # Any conversion issues or context
---
```

### Nature Trail Post Template

```yaml
---
title: "Post 1: Welcome to the Nature Trail"
source_pdf: "site-2005-2025/NatureTrail/NTEnglish/Text/Post01English.pdf"
category: "nature-trail"
post_number: 1
total_posts: 29
themes: ["introduction", "chalk downland", "welcome"]
related_audio:
  english: "NatureTrail/NTEnglish/Audio/Post01.mp3"
  french: "NatureTrail/NTFrench/Audio/Post01.mp3"
  hindi: "NatureTrail/NTHindi/Audio/Post01.mp3"
  polish: "NatureTrail/NTPolish/Audio/Post01.mp3"
narrator: "Roger McGough CBE"
walking_time_to_next: "5 minutes"
date_converted: "2025-12-08"
---

# Post 1: Welcome to the Nature Trail

[Content from PDF conversion]

---

## Listen to This Stop

- [English Audio](/audio/nature-trail/en/post-01.mp3)
- [French Audio](/audio/nature-trail/fr/post-01.mp3)
- [Hindi Audio](/audio/nature-trail/hi/post-01.mp3)
- [Polish Audio](/audio/nature-trail/pl/post-01.mp3)

## Next Stop

Continue to [Post 2: ...](./post-02.md) (approximately 5 minutes walking).
```

### Image Metadata JSON Template

```json
{
  "filename": "",
  "original_path": "",
  "category": "",
  "subcategory": "",
  "file_size_kb": 0,
  "dimensions": {
    "width": 0,
    "height": 0
  },
  "format": "",
  "suggested_alt_text": "",
  "suggested_caption": "",
  "quality_score": "",
  "exif_date": null,
  "photographer": null,
  "species_id": null,
  "location": "Farthing Downs and Happy Valley",
  "suggested_pages": [],
  "needs_review": false,
  "review_reason": null,
  "tags": []
}
```

---

## Processing Patterns

### Pattern: Batch PDF Conversion

```
INPUT: List of PDF paths in category
OUTPUT: Markdown files in category folder

FOR EACH pdf IN batch:
  1. Read PDF content
  2. Extract text (handle OCR if needed)
  3. Identify title (usually first line or filename)
  4. Identify themes (scan for keywords)
  5. Count words
  6. Generate frontmatter
  7. Format body as markdown
  8. Save to category/[slug].md
  9. Add entry to MANIFEST.json
  10. Log any issues
```

### Pattern: Image Metadata Generation

```
INPUT: Image file path
OUTPUT: JSON metadata entry

FOR EACH image IN category_folder:
  1. Read image file
  2. Extract dimensions
  3. Calculate file size
  4. Determine format (jpg, png, gif)
  5. Skip if GIF and dimensions < 100x100 (likely navigation)
  6. Analyze content for alt text
  7. Infer category from folder
  8. Infer subject from filename
  9. Assess quality (dimensions, clarity)
  10. Suggest pages based on category
  11. Return JSON entry
```

### Pattern: Manifest Update

```
AFTER processing batch:
  1. Read existing MANIFEST.json (or create empty)
  2. For each processed item:
     - Add entry with status
     - Record any issues
  3. Write updated MANIFEST.json
  4. Generate summary stats
```

---

## Naming Conventions

### File Naming

| Type | Pattern | Example |
|------|---------|---------|
| Nature Trail posts | `post-[NN].md` | `post-01.md`, `post-29.md` |
| FoFD posts | `post-[NN].md` | `post-01.md` |
| Strategy docs | `[slug].md` | `chalk-grassland-intro.md` |
| AGM docs | `agm-[YYYY].md` | `agm-2023.md` |
| History docs | `[slug].md` | `coulsdon-brief-history.md` |
| Image metadata | `index.json` per category | `wildlife/index.json` |

### Slug Generation

```
INPUT: "Living in Coulsdon - A Brief History"
OUTPUT: "coulsdon-brief-history"

RULES:
1. Lowercase
2. Replace spaces with hyphens
3. Remove special characters
4. Remove articles (a, an, the)
5. Truncate to 50 characters if needed
6. Ensure unique within category
```

---

## Reusable Components

### Quality Score Calculator

```
FUNCTION assess_quality(image):
  score = "medium"  # default

  IF width >= 1200 AND height >= 800:
    score = "high"
  ELSE IF width < 800 OR height < 600:
    score = "low"

  IF is_blurry(image):
    score = downgrade(score)

  IF has_compression_artifacts(image):
    score = downgrade(score)

  IF is_navigation_widget(image):
    score = "skip"

  RETURN score
```

### Alt Text Generator

```
FUNCTION generate_alt_text(image, filename, category):

  # Start with subject from filename
  subject = extract_subject(filename)
  # e.g., "buzzard-flight-2019.jpg" → "Buzzard in flight"

  # Add category context
  IF category == "wildlife":
    context = "at Farthing Downs"
  ELSE IF category == "history":
    context = "historical photograph"
  ELSE IF category == "archaeology":
    context = "at the archaeological site"
  ELSE:
    context = "at Farthing Downs and Happy Valley"

  # Combine
  alt_text = f"{subject} {context}"

  # Enhance with image analysis
  IF image_contains("flowers"):
    alt_text += " with wildflowers in view"

  RETURN alt_text
```

### Category Mapper

```
FUNCTION determine_category(filepath):

  IF "NatureTrail" IN filepath:
    RETURN "nature-trail"
  ELSE IF "FoFD-HV-POSTS" IN filepath:
    RETURN "posts"
  ELSE IF "images-wildlife" IN filepath:
    RETURN "wildlife"
  ELSE IF "history-images" IN filepath:
    RETURN "history"
  ELSE IF "images-archaeology" IN filepath:
    RETURN "archaeology"
  ELSE IF "Fungi" IN filepath:
    RETURN "fungi"
  ELSE IF any(["AGM", "report"] IN filepath.lower()):
    RETURN "agm"
  ELSE IF any(["map", "surreyhills"] IN filepath.lower()):
    RETURN "maps"
  ELSE:
    RETURN "general"
```

---

## Content Patterns

### Common Frontmatter Fields by Category

| Category | Required Fields | Optional Fields |
|----------|-----------------|-----------------|
| nature-trail | post_number, themes, related_audio | walking_time_to_next, narrator |
| posts | post_number, location | themes, related_images |
| strategy | source, summary | date_original, author |
| history | era, subjects | date_original, source |
| wildlife | species_type | species_name, behavior |
| archaeology | feature_type | period, significance |

### Theme Keywords (for auto-tagging)

```json
{
  "flora": ["flower", "plant", "orchid", "grass", "tree", "shrub", "wildflower"],
  "fauna": ["bird", "butterfly", "insect", "mammal", "reptile", "buzzard", "skylark"],
  "geology": ["chalk", "downland", "soil", "geology", "flint"],
  "history": ["ancient", "medieval", "saxon", "celtic", "roman", "neolithic"],
  "archaeology": ["barrow", "mound", "cairn", "earthwork", "boundary"],
  "conservation": ["habitat", "biodiversity", "grazing", "management", "sssi"],
  "access": ["walk", "path", "trail", "route", "car park", "transport"]
}
```

---

## Error Handling Patterns

### Graceful Degradation

```
TRY:
  content = extract_pdf_text(pdf_path)
EXCEPT TextExtractionError:
  TRY:
    content = ocr_pdf(pdf_path)
  EXCEPT OCRError:
    content = ""
    log_error(pdf_path, "Could not extract text")
    create_index_entry(pdf_path, "manual review needed")
    CONTINUE
```

### Validation Pattern

```
FUNCTION validate_frontmatter(frontmatter, category):
  errors = []

  # Required for all
  IF not frontmatter.title:
    errors.append("missing title")
  IF not frontmatter.source_pdf:
    errors.append("missing source_pdf")

  # Category-specific
  IF category == "nature-trail":
    IF not frontmatter.post_number:
      errors.append("missing post_number")
    IF not frontmatter.related_audio:
      errors.append("missing related_audio")

  RETURN errors
```

---

## Automation Opportunities

### Scripts to Create

1. **batch_convert_pdfs.py**
   - Input: category folder
   - Output: converted markdown files
   - Uses templates above

2. **generate_image_metadata.py**
   - Input: image folder
   - Output: category index.json
   - Uses quality assessment pattern

3. **validate_conversions.py**
   - Input: converted files
   - Output: validation report
   - Uses validation pattern

4. **generate_manifest.py**
   - Input: all converted files
   - Output: MANIFEST.json
   - Aggregates metadata

---

*Generated: 2025-12-08*
