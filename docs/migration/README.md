# Friends of Farthing Downs & Happy Valley (FoFD&HV) - Website Documentation

## Overview

This repository contains the complete source code and assets for the **Friends of Farthing Downs and Happy Valley** website, a community group dedicated to protecting and promoting Farthing Downs and Happy Valley in Coulsdon, Surrey, UK.

**Live Site:** friendsoffarthingdowns.co.uk

---

## About the Organization

The Friends of Farthing Downs & Happy Valley is a volunteer organization that works to:
- Promote and protect Farthing Downs (an ancient chalk grassland)
- Support the City of London (landowners since 1883) in site management
- Organize events, walks, and conservation activities
- Advocate for local green spaces against development threats

### Key Site Designations
- **Ancient Scheduled Monument** - Protects Saxon burial mounds, Celtic field boundaries, and neolithic trackways
- **Site of Special Scientific Interest (SSSI)** - Recognized for endangered wildlife and rare flowers
- **Proposed Surrey Hills AONB Extension** - Happy Valley area under consideration

### Current Committee (as of 2025)
- **Chairman:** Graham Lomas
- **Secretary:** Pauline Payne (paulinepayne@btinternet.com)
- **Treasurer:** Ian Payne
- **Committee Members:** Jayn, Lotte, Chris, Elizabeth Brooks (Facebook)

---

## Technical Architecture

### Platform
- **Built with:** Parallels SiteBuilder (~2005 era)
- **Current Hosting:** Caterham Computing (managed by Ian)
- **Technology:** Static HTML 4.01 Transitional

### Design System
| Element | Value |
|---------|-------|
| Background Color | `#FFFFCC` (cream/yellow) |
| Sidebar Color | `#FF9900` (orange) |
| Link Color | `#000000` (black) |
| Primary Font | Arial |
| Title Font | "Kristen ITC" |
| Layout | Table-based (no CSS Grid/Flexbox) |

### Navigation System
- **Type:** Image-based GIF buttons with JavaScript hover effects
- **Location:** Left sidebar (150px wide)
- **Implementation:** `onMouseOver`/`onMouseOut` image swaps
- **Assets:** 100+ GIF files in `/widgets/` directory

### Template Comments
All pages contain Parallels SiteBuilder template markers:
```html
<!-- BOF: ./personal-templates/simple/generic/show -->
<!-- EOF: ./personal-templates/simple/generic/show -->
```

---

## File Structure

### Root Directory
```
fofd/
├── index.html              # Homepage
├── gpage1.html - gpage22.html  # Main content pages
├── AGM2014.html - AGM2022.html # Annual General Meeting reports
├── Donations.html          # Donation page (PayPal integration)
├── README.md               # Original (empty) readme
├── fofd-website-new/       # This documentation folder
└── ...
```

### Main Pages (gpage*.html)

| File | Page Name | Description |
|------|-----------|-------------|
| index.html | FoFD | Homepage with welcome, events, membership info |
| gpage1.html | Getting There | Directions, maps, parking information |
| gpage2.html | Events Diary | Upcoming events calendar |
| gpage3.html | Walks & Trails | Walking routes information |
| gpage4.html | Aims & Objectives | Organization's mission |
| gpage5.html | Constitution | Legal founding document |
| gpage6.html | History | Site history from Neolithic to present |
| gpage7.html | Lyme Disease | Health warning notice |
| gpage8.html | Committee | Committee member profiles |
| gpage9.html | Contact Us | Contact details |
| gpage10.html | Useful Links | Partner organizations |
| gpage11.html | Membership | Join form (£5 individual/£8 family) |
| gpage12.html | Projects | Completed projects since 2005 |
| gpage13.html | Cairn | Millennium Cairn project (2000) |
| gpage14.html | Conservation | **Under Construction** |
| gpage15.html | Volunteering | Volunteer opportunities + Aug 2024 update |
| gpage16.html | Wildlife | Flora and fauna information |
| gpage17.html | Archaeology | Saxon mounds, Celtic boundaries, surveys |
| gpage18.html | City of London | Landowner information |
| gpage19.html | Nature Trail | **Key Feature** - 29-post audio trail |
| gpage20.html | Planning | Planning consultation responses |
| gpage21.html | Reports | AGM reports and policy documents hub |
| gpage22.html | Happy Valley | Sister site information |

### Nature Trail System (`/NatureTrail/`)

A sophisticated multi-language audio guide with 29 posts covering the walking trail.

```
NatureTrail/
├── NTCommon/              # Shared assets (icons, ambient sounds)
│   ├── headphones.png     # Audio link icon
│   ├── pagewriting.png    # Text link icon
│   └── *.mp3              # Ambient sounds (sheep, yellowhammer)
├── NTEnglish/
│   ├── Audio/             # 29 MP3 audio files (Post01-29English.mp3)
│   └── Text/              # 29 PDF text versions (Post01-29English.pdf)
├── NTFrench/
│   └── Audio/             # 29 MP3 audio files (French translation)
├── NTHindi/
│   └── Audio/             # 29+ MP3 audio files (Hindi translation)
└── NTPolish/
    └── Audio/             # 29 MP3 audio files (Polish translation)
```

**Total Audio Files:** 120+ MP3 files across 4 languages
**Language Pages:** `NatureTrailFrench.html`, `NatureTrailHindi.html`, `NatureTrailPolish.html`

### Fungi Gallery (`/Fungi-011114/`)

Photo gallery from "Fungus Foray" walk on November 1, 2014 (led by Ray Tantram).

```
Fungi-011114/
├── Fungi-011114.html      # Gallery index with species list (45 species found)
├── Fungi01.html - Fungi29.html  # Individual photo pages
├── Fungi01.jpg - Fungi29.jpg    # Full-size images
└── Fungi01s.jpg - Fungi29s.jpg  # Thumbnail images
```

### AGM Reports

Annual General Meeting reports from 2014-2024 with guest speaker presentations:

| Year | Guest Speaker | Topic |
|------|--------------|-------|
| 2014 | Sue Ireland (City of London) | "Protecting Our Open Spaces: The Next 20 Years" |
| 2015 | Chair, Surrey Hills Society | Surrey Hills presentation |
| 2016 | Ranger, Happy Valley | Happy Valley management |
| 2017 | Cllr Timothy Godfrey | "Croydon's Ambitious for Parks Project" |
| 2018 | Cllr Oliver Lewis | "Moving forward from Masterplanning" |
| 2019 | Jonathan Halls | "Wilderness in the City" |
| 2020 | Various (COVID online) | Chairman's Report, Website Report, etc. |
| 2021 | Multiple speakers | "Who's for More Trees Symposium" |
| 2022 | Cllr Scott Roche | "Croydon's Open Spaces" |
| 2023 | Mike Waite (Surrey Wildlife Trust) | "Biodiversity Net Gain" |
| 2024 | Richard Biggs, Richard Knox-Johnson, Tom Oliver | "Housing, Green Belt, Brownfield" |

### PDF Documents (92+ files)

**Categories:**
- Nature Trail text versions (29 English PDFs)
- AGM presentations and reports
- Surrey Hills AONB extension documents
- Croydon/Tandridge consultation responses
- Biodiversity and conservation papers
- Membership leaflets and maps

### Widget Assets (`/widgets/`)

100+ GIF image files for navigation buttons:
- `gen_XXX.1.gif` - Navigation button images
- `spacer.gif` - Layout spacer
- Naming convention suggests pairs for normal/hover states

### Image Directories

```
images/               # General site images
images-wildlife/      # Wildlife photos, deer gallery, bat information
history-images/       # Historical photos and documents
```

---

## Special Features

### PayPal Integration (Donations.html)
The donations page includes PayPal integration for online contributions.

### GDPR Compliance (gpage11.html)
Membership page includes Data Privacy Statement compliant with GDPR requirements.

### Planning Consultations (gpage20.html)
- Croydon Local Plan consultation (July 2019)
- Tandridge Local Plan 2016 response
- Local Green Spaces justification documents

---

## Context from Planning Meeting (September 2025)

From `/New Website (Context)/FoFD Meeting Notes - September 2025.md`:

### Committee Goals
- Easier membership signup process
- Easy online payment integration
- Attract younger members
- Potential January parallel go-live for new site

### Budget Constraints
- Total budget: £500-£2000
- Current hosting costs unknown but "paying someone £100s"

### Social Media
- Facebook group: ~3,900 likes/followers

### Website Notes PDF Structure
Planned new site structure (4 main sections):
1. **Home Page** - Welcome, City of London links
2. **Things To Do** - Nature Trail, walks, volunteering, events
3. **Nature and History** - Wildlife, fungi, archaeology
4. **Your Support** - Membership, donations, Facebook, archives

---

## Technical Debt & Issues

### Known Issues
1. **gpage14.html (Conservation)** - Marked "UNDER CONSTRUCTION"
2. **gpage18.html (City of London)** - Marked "This page is under development"
3. **gpage22.html (Happy Valley)** - Partial content

### Legacy Code Concerns
1. **Table-based layouts** - Not responsive, poor mobile experience
2. **Inline CSS** - Repeated across all pages, hard to maintain
3. **Image-based navigation** - Not accessible, not SEO-friendly
4. **No semantic HTML** - Uses `<font>` tags, presentational markup
5. **JavaScript hover effects** - Outdated DOM manipulation
6. **Duplicate navigation code** - Copied in every HTML file
7. **No templating system** - Changes require editing all ~97 HTML files
8. **Mixed file naming** - Inconsistent capitalization and naming conventions

### Accessibility Issues
- Missing alt text on many images
- No skip navigation links
- Color contrast may not meet WCAG standards
- Image-based buttons not screen reader friendly

---

## Recommended Next Actions

### Phase 1: Content Audit & Extraction
1. **Extract all text content** from HTML files to clean markdown/JSON
2. **Catalog all images** with descriptions and usage
3. **Inventory all PDFs** and determine which need to be retained
4. **Document Nature Trail content** - verify all 116 audio files work

### Phase 2: Platform Selection
Based on committee requirements (easy editing, low cost, modern):

| Option | Pros | Cons |
|--------|------|------|
| **Static Site Generator (Hugo/11ty)** | Free hosting (GitHub Pages), fast, secure | Requires technical knowledge to edit |
| **Wix** | Easy editing, templates included | Monthly cost, less control |
| **WordPress** | Flexible, many plugins | Hosting costs, security maintenance |
| **Squarespace** | Beautiful templates, easy | Monthly cost |

**Recommendation:** Hugo or 11ty with Netlify hosting (free tier) + Netlify CMS for easy editing.

### Phase 3: Migration Steps
1. Create responsive CSS design maintaining orange/cream branding
2. Convert table layouts to CSS Grid/Flexbox
3. Build component library (header, nav, footer, content blocks)
4. Migrate Nature Trail with proper audio player integration
5. Implement membership form with payment integration (Stripe/PayPal)
6. Set up contact form with spam protection
7. Add Facebook feed widget
8. Implement proper SEO (meta tags, structured data)
9. Add accessibility improvements (ARIA labels, skip links)
10. Set up redirects from old URL structure

### Phase 4: Testing & Launch
1. Test on mobile devices
2. Validate accessibility (WAVE, aXe)
3. Set up analytics
4. Configure SSL certificate
5. Plan parallel running period
6. Train committee members on editing

---

## File Counts Summary

| Type | Count |
|------|-------|
| HTML Pages | ~97 |
| PDF Documents | ~92 |
| MP3 Audio Files | ~120 |
| Widget GIFs | ~100+ |
| Total Files | ~400+ |

---

## Repository Information

**Original README:** Empty (`# fofd`)

**Git History:**
- Initial commit: `42cd86c first commit`
- `71c6631 Initial commit`
- `4935954 add website plans pdf`
- `f4b9573 added FoFD Meeting notes with Jayn and Lotte`

---

## Contact

For questions about this documentation or the website migration project:
- **Organization:** Friends of Farthing Downs & Happy Valley
- **Secretary:** Pauline Payne (paulinepayne@btinternet.com)
- **Address:** 42 Bradmore Way, Coulsdon, Surrey CR5 1PA

---

*Documentation generated December 2025*
