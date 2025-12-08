# Implementation Readiness: Prerequisites Checklist

**Prompt Used:** "For each phase, what prerequisites, access, tools, or information do I need before beginning?"

---

## Phase 0: Asset Preparation

### Prerequisites for 0A (PDF Conversion)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Access to legacy site files** | HAVE | `site-2005-2025/` directory in repo |
| **PDF reading capability** | HAVE | Claude can read PDFs |
| **Text extraction tool** | HAVE | Built into Claude |
| **Output directory structure** | NEED | Must create `docs/content-extraction/pdfs-markdown/` |
| **Frontmatter schema defined** | HAVE | Documented in MIGRATION-PLAN.md |

**Ready to start:** YES (after creating directories)

### Prerequisites for 0B (Image Metadata)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Access to image files** | HAVE | `site-2005-2025/images*/` directories |
| **Image viewing capability** | HAVE | Claude can view images |
| **Metadata schema defined** | HAVE | JSON schema in MIGRATION-PLAN.md |
| **Output directory structure** | NEED | Must create `docs/content-extraction/images-metadata/` |
| **Quality assessment criteria** | PARTIAL | Need to define "quality_score" scale |

**Ready to start:** YES (after creating directories and defining quality scale)

---

## Phase 1: Content Extraction

### Prerequisites for 1A (Page Extraction)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Phase 0A complete** | PENDING | PDF content needed for cross-referencing |
| **HTML files accessible** | HAVE | `site-2005-2025/*.html` |
| **Target page structure defined** | HAVE | URL structure in WEBSITE_STRATEGY.md |
| **New-to-old page mapping** | PARTIAL | Appendix in WEBSITE_STRATEGY.md |
| **Redirect rules template** | NEED | For legacy URL handling |

**Ready to start:** PARTIAL (can start, but better after Phase 0A)

### Prerequisites for 1B (Media Inventory)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Phase 0B complete** | PENDING | Image metadata created |
| **Audio file access** | HAVE | `site-2005-2025/NatureTrail/` |
| **Audio playback testing** | NEED HUMAN | Cannot verify audio plays correctly |

**Ready to start:** PARTIAL (0B should complete first)

### Prerequisites for 1C (Nature Trail Audit)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Phase 0A Nature Trail PDFs converted** | PENDING | Text content needed |
| **Audio files accessible** | HAVE | 122 MP3s in repo |
| **Human tester available** | NEED | To verify audio playback |
| **Trail map/layout** | HAVE | Physical trail exists |

**Ready to start:** NO (needs 0A + human audio testing)

### Prerequisites for 1D (Data Structures)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Understanding of content types** | HAVE | From Phase 0 outputs |
| **Membership tier definition** | HAVE | £10/£25/£50 in EVOLVED-STRATEGY.md |
| **Event types defined** | PARTIAL | Three event types described |
| **Wildlife categories** | NEED | From image metadata |

**Ready to start:** PARTIAL (after Phase 0 completes)

### Prerequisites for 1E (Legal/Infrastructure Audit)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Current domain registrar info** | NEED | Who controls domain? |
| **Current hosting info** | NEED | Where is site hosted? |
| **Email setup documentation** | NEED | Is @domain email used? |
| **Form submission destinations** | NEED | Who receives contact forms? |
| **Existing privacy policy** | NEED | Does one exist? |
| **Analytics account access** | NEED | Google Analytics? |

**Ready to start:** NO (needs information gathering from committee)

---

## Phase 2: Platform Setup

### Prerequisites for 2A (Design System)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Phase 0B image metadata** | PENDING | For gallery planning |
| **Color palette defined** | HAVE | In WEBSITE_STRATEGY.md |
| **Typography chosen** | HAVE | Playfair + Inter/Open Sans |
| **Design review process** | NEED | Who approves designs? |
| **Component list** | NEED | Define UI components needed |

**Ready to start:** PARTIAL (color/type ready, needs 0B for images)

### Prerequisites for 2B (Dev Environment)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Hosting platform decision** | HAVE | GitHub Pages |
| **Domain name decision** | NEED | Not yet decided |
| **GitHub organization access** | NEED | Org account, not personal |
| **Local development tools** | HAVE | Git, editor, browser |
| **Testing devices** | PARTIAL | Need mobile device access |

**Ready to start:** PARTIAL (can start local dev, needs domain for full setup)

---

## Phase 3: Migration

### Prerequisites for 3A (Core Pages)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Phase 1A page content** | PENDING | Extracted markdown |
| **Phase 2A design system** | PENDING | CSS/components |
| **Hero images selected** | NEED | From Phase 0B candidates |
| **Homepage copy approved** | NEED | Committee review |
| **Navigation structure** | HAVE | 4-section structure defined |

**Ready to start:** NO (needs prior phases)

### Prerequisites for 3B (Nature Trail)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Phase 0A Nature Trail markdown** | PENDING | Converted content |
| **Phase 1C audio audit** | PENDING | Verified MP3s |
| **Trail map image/embed** | NEED | Visual representation |
| **Audio hosting decision** | HAVE | Podcast via Spotify |
| **Roger McGough permission** | NEED | For podcast distribution |

**Ready to start:** NO (multiple dependencies)

### Prerequisites for 3C (Forms & Payments)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Payment provider account** | NEED | Stripe/GoCardless setup |
| **Membership tiers configured** | NEED | In payment provider |
| **Form service chosen** | NEED | Formspree? Netlify Forms? |
| **Email routing defined** | NEED | Who receives what? |
| **Thank you page content** | NEED | Post-signup messaging |
| **Gift Aid setup** | NEED | CAF Donate or similar |

**Ready to start:** NO (needs payment provider)

### Prerequisites for 3D (Polish & Optimize)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Phase 3A-3C complete** | PENDING | Content to polish |
| **Phase 0B alt text suggestions** | PENDING | For accessibility |
| **Image optimization tool** | NEED | Squoosh, ImageOptim |
| **Performance baseline** | NEED | Lighthouse audit |
| **Accessibility testing tool** | HAVE | WAVE, axe browser extension |

**Ready to start:** NO (needs content to polish)

---

## Phase 4: Testing & Launch

### Prerequisites for 4A (Testing)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Staging site deployed** | PENDING | Phase 3 output |
| **Test devices** | NEED | iPhone, Android, various browsers |
| **Test payment credentials** | NEED | Stripe test mode |
| **Accessibility checklist** | HAVE | WCAG 2.1 guidelines |
| **Testers identified** | NEED | Committee members, volunteers |

### Prerequisites for 4B (Staging)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Staging URL configured** | NEED | preview.domain or branch deploy |
| **Committee access to staging** | NEED | Link + instructions |
| **Feedback collection method** | NEED | Form? GitHub Issues? |

### Prerequisites for 4C (Launch)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **Committee sign-off** | NEED | Formal approval |
| **Domain registrar access** | NEED | To update DNS |
| **SSL certificate** | AUTO | GitHub Pages provides |
| **Redirect rules tested** | NEED | Old URLs → new |
| **Analytics configured** | NEED | Google Analytics 4 |
| **Monitoring setup** | NEED | Uptime monitoring |

### Prerequisites for 4D (Handoff)

| Requirement | Status | Notes |
|-------------|--------|-------|
| **CONTRIBUTING.md complete** | PARTIAL | Basic structure exists |
| **Maintainer training** | NEED | 2+ people trained |
| **Password manager setup** | NEED | Shared credentials |
| **Support contact defined** | NEED | Who helps if issues? |

---

## Information Needed from Committee

### Immediate (Before Phase 1)

1. **Domain decision**
   - Which domain name?
   - Who is the registrar?
   - Login credentials?

2. **Email situation**
   - Is @friendsoffarthingdowns.co.uk email used?
   - If yes: by whom? Where hosted?

3. **Content approval**
   - Who can approve content changes?
   - What requires full committee vote?

4. **Payment setup**
   - Who will create Stripe account? (Treasurer?)
   - Organization bank account details?
   - Gift Aid registration status?

### Before Phase 3

5. **Form routing**
   - Contact form → which email(s)?
   - Volunteer signup → which email(s)?
   - Membership confirmation → which email?

6. **Roger McGough rights**
   - Do we have permission for podcast distribution?
   - Attribution requirements?

7. **Current analytics**
   - Google Analytics account exists?
   - Who has access?
   - Keep or start fresh?

---

## Tools/Accounts Needed

| Tool | Purpose | Who Creates | Status |
|------|---------|-------------|--------|
| GitHub organization | Code hosting | Technical maintainer | NEED |
| Stripe account | Payments | Treasurer | NEED |
| Google Workspace for Nonprofits | Email | Committee | OPTIONAL |
| Bitwarden | Password sharing | Technical maintainer | NEED |
| UptimeRobot | Monitoring | Technical maintainer | NEED |
| Google Analytics 4 | Traffic analytics | Technical maintainer | NEED |
| Spotify for Podcasters | Audio hosting | Committee/maintainer | FUTURE |

---

## Quick Start Checklist

Before starting any implementation work, confirm:

- [ ] Git repository access (can push/pull)
- [ ] Local development environment works
- [ ] Can view legacy site files
- [ ] Know who to contact for committee questions
- [ ] Have documented the answers to "Information Needed" above
- [ ] Output directories created

---

*Generated: 2025-12-08*
