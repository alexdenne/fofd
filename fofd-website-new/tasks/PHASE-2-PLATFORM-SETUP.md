# Phase 2: Platform Setup

**Status:** Not Started
**Parallel Streams:** 2
**Dependencies:** None (can run parallel to Phase 1)
**Output Location:** `/fofd-website-new/design/` and `/fofd-website-new/src/`

---

## Overview

Set up the development environment and create the design system. This phase can run **in parallel with Phase 1** since it doesn't depend on extracted content.

---

## Stream 2A: Design System

**Goal:** Create a modern, accessible design system maintaining brand identity
**Output:** `/design/`
**Can parallelize with:** 2B, Phase 1 streams

### Tasks

#### Brand Analysis
- [ ] **2A.01** Create `/design/brand/` directory
- [ ] **2A.02** Extract color palette from legacy site:
  - Primary: `#FF9900` (orange)
  - Background: `#FFFFCC` (cream)
  - Text: `#000000` (black)
  - Accent: `#CC6600` (dark orange)
- [ ] **2A.03** Document current typography (Arial, "Kristen ITC")
- [ ] **2A.04** Extract/recreate logo from `widgets/gen_131.1.gif`
- [ ] **2A.05** Create `brand-guidelines.md`

#### Color System
- [ ] **2A.06** Define accessible color palette (check contrast ratios)
- [ ] **2A.07** Create color CSS custom properties
- [ ] **2A.08** Define dark mode colors (optional but recommended)
- [ ] **2A.09** Create `colors.css` or `_colors.scss`

#### Typography
- [ ] **2A.10** Select web-safe font stack (replace "Kristen ITC")
- [ ] **2A.11** Define type scale (headings, body, small text)
- [ ] **2A.12** Create responsive typography rules
- [ ] **2A.13** Create `typography.css` or `_typography.scss`

#### Component Design
- [ ] **2A.14** Create `/design/components/` directory
- [ ] **2A.15** Design header component (logo, navigation)
- [ ] **2A.16** Design footer component (contact, links)
- [ ] **2A.17** Design navigation component (mobile hamburger + desktop)
- [ ] **2A.18** Design card component (for events, reports, etc.)
- [ ] **2A.19** Design button styles (primary, secondary, outline)
- [ ] **2A.20** Design form elements (inputs, selects, textareas)
- [ ] **2A.21** Design audio player component (for Nature Trail)

#### Page Wireframes
- [ ] **2A.22** Create `/design/wireframes/` directory
- [ ] **2A.23** Wireframe homepage layout
- [ ] **2A.24** Wireframe content page layout
- [ ] **2A.25** Wireframe Nature Trail page layout
- [ ] **2A.26** Wireframe contact/membership form layout

**Stream 2A Total:** 26 tasks

---

## Stream 2B: Development Environment

**Goal:** Set up the static site generator and deployment pipeline
**Output:** `/src/`
**Can parallelize with:** 2A, Phase 1 streams

### Tasks

#### Platform Decision
- [ ] **2B.01** Finalize platform choice:
  - **Recommended:** Hugo or 11ty
  - **Alternative:** Astro
  - **Consider:** Ease of committee editing
- [ ] **2B.02** Document decision in `/docs/decisions/platform-choice.md`

#### Project Initialization
- [ ] **2B.03** Initialize static site project in `/src/`
- [ ] **2B.04** Configure project structure:
  ```
  src/
  ├── layouts/      # Page templates
  ├── components/   # Partials/includes
  ├── styles/       # CSS/SCSS
  ├── scripts/      # JavaScript
  ├── content/      # Markdown content
  ├── static/       # Static assets (images, PDFs)
  └── data/         # JSON/YAML data files
  ```
- [ ] **2B.05** Set up SCSS/CSS build pipeline
- [ ] **2B.06** Set up JavaScript bundling (if needed)
- [ ] **2B.07** Configure development server with hot reload

#### Template Setup
- [ ] **2B.08** Create base layout template
- [ ] **2B.09** Create homepage template
- [ ] **2B.10** Create standard page template
- [ ] **2B.11** Create report/archive template
- [ ] **2B.12** Create Nature Trail template (with audio player)

#### Hosting Setup
- [ ] **2B.13** Create GitHub repository (if not using this one)
- [ ] **2B.14** Set up Netlify/Vercel/GitHub Pages account
- [ ] **2B.15** Configure build command and publish directory
- [ ] **2B.16** Set up automatic deploys from main branch
- [ ] **2B.17** Configure custom domain (friendsoffarthingdowns.co.uk)

#### CMS Setup (Optional but Recommended)
- [ ] **2B.18** Evaluate CMS options:
  - Netlify CMS / Decap CMS (free, Git-based)
  - Forestry.io / TinaCMS
  - CloudCannon
- [ ] **2B.19** Install and configure chosen CMS
- [ ] **2B.20** Set up content schemas for CMS
- [ ] **2B.21** Test CMS editing workflow
- [ ] **2B.22** Document CMS usage for committee

**Stream 2B Total:** 22 tasks

---

## Phase 2 Completion Checklist

- [ ] Brand guidelines documented
- [ ] Color system defined with accessible contrast
- [ ] Typography system defined
- [ ] All component designs created
- [ ] Key page wireframes completed
- [ ] Static site generator installed and configured
- [ ] Development server running
- [ ] Hosting account set up
- [ ] Auto-deploy pipeline working
- [ ] CMS installed (if chosen)
- [ ] Phase 2 review meeting held

---

## Platform Comparison

| Feature | Hugo | 11ty | Astro |
|---------|------|------|-------|
| Speed | Fastest | Fast | Fast |
| Learning Curve | Medium | Low | Medium |
| Template Language | Go templates | Nunjucks/Liquid | JSX/Astro |
| CMS Integration | Good | Excellent | Good |
| Community | Large | Growing | Growing |
| **Recommendation** | Good | **Best for this project** | Good |

### Why 11ty (Eleventy) is Recommended

1. **Simple to learn** - Uses familiar template languages
2. **Flexible** - Works with Markdown, Nunjucks, Liquid
3. **Great CMS support** - Works well with Decap CMS
4. **Active community** - Good documentation
5. **No framework lock-in** - Pure HTML output
6. **Committee-friendly** - Simple content editing

---

## Design Tokens (Draft)

```css
:root {
  /* Colors */
  --color-primary: #FF9900;
  --color-primary-dark: #CC6600;
  --color-background: #FFFEF5;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-muted: #666666;

  /* Typography */
  --font-family-base: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-size-base: 1rem;
  --line-height-base: 1.6;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;

  /* Layout */
  --max-width-content: 65ch;
  --max-width-page: 1200px;
  --sidebar-width: 250px;
}
```

---

## Notes

- **Parallel execution:** Both streams can run simultaneously
- **Phase 1 independence:** This phase doesn't need Phase 1 to complete
- **Committee involvement:** Get feedback on designs before Phase 3
- **Hosting:** Netlify free tier should be sufficient (100GB bandwidth/month)

---

*Total Phase 2 Tasks: 28*
