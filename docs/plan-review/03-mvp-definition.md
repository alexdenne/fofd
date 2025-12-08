# Prioritization: What's the MVP?

**Prompt Used:** "Given these goals and constraints, what's the minimum viable version that delivers value? What can be deferred to v2?"

**Context:**
- Budget: £500-£2000 (mostly available for non-hosting costs)
- Primary maintainer: 1 technical person
- Committee: Volunteers with limited time
- Current state: ~16 visits/month, 50-100 members, £5/year

---

## Goals Hierarchy

From the strategy documents, the implicit priority order is:

1. **Enable online payments** (blocking growth)
2. **Mobile-friendly site** (blocking discovery)
3. **Simplified navigation** (blocking comprehension)
4. **Preserve valuable content** (protecting assets)
5. **Attract younger audience** (growing sustainably)
6. **Build maintainer team** (reducing risk)

---

## MVP Definition: What Must Launch?

### Absolute Minimum (Week 1 Value)

```
HOME PAGE
├── Hero image
├── One-sentence mission
├── Three cards: Visit | Explore | Join
└── Footer with contact

VISIT (single page)
├── Getting here (map embed, parking info, transport)
├── Top 3 walks (brief description + PDF downloads)
└── Safety basics (Lyme disease link)

JOIN (single page + payment)
├── Membership tiers (£10/£25/£50)
├── Stripe Payment Links (no complex integration)
├── Simple donation button
└── Volunteer sign-up form (external form service)

ABOUT (single page)
├── Brief "Who we are"
├── Committee names
├── Contact form
└── Link to constitution PDF

NATURE TRAIL (minimal)
├── Landing page explaining the trail
├── Link to existing audio (hosted elsewhere)
├── QR code information
└── Map/route overview
```

**Total: 5 pages + payment integration**

### What This Deliberately Excludes (v1)

| Feature | Why Deferred |
|---------|--------------|
| Wildlife gallery | Nice-to-have, not blocking payments |
| History/archaeology section | Content-heavy, can add later |
| Events calendar | Requires ongoing maintenance |
| Instagram feed embed | Adds complexity, can link instead |
| Newsletter integration | Can use simple form → email |
| Interactive trail map | PDF/image works for launch |
| Member login/dashboard | Overkill for current scale |
| Search functionality | 5 pages don't need search |

---

## MVP Success Criteria

| Metric | Launch Target | Why |
|--------|---------------|-----|
| Pages load on mobile | 100% | Primary requirement |
| Online payment works | Yes | Primary goal |
| Committee can find content | Yes | Adoption test |
| Basic SEO (meta tags) | Yes | Future-proofing |
| Analytics installed | Yes | Measure progress |

---

## What Can Be Deferred to v2?

### v2: Content Enrichment (1-2 months post-launch)

```
EXPLORE section:
├── Wildlife gallery (from Phase 0B metadata)
├── Archaeology & history (from Phase 0A PDFs)
├── Seasonal highlights
└── Nature Trail with embedded audio/podcast

Enhancements:
├── Instagram feed embed
├── Before/after image sliders
├── Interactive timeline
└── Site search (Pagefind)
```

### v3: Community Features (3-6 months post-launch)

```
Community:
├── Photo submissions via GitHub Issues
├── Wildlife sightings form
├── Events calendar (synced with Facebook)
├── Volunteer hour tracking

Growth:
├── Komoot partner profile
├── Google review campaign
├── Local PR outreach
└── School partnership program
```

### v4+: Optimization (6+ months)

```
Advanced:
├── PWA/offline for Nature Trail
├── Multiple language support on site
├── Member newsletter archive
├── Interactive trail map (Leaflet/Mapbox)
└── Annual report generation
```

---

## Phase 0 Implications

If MVP is truly minimal, Phase 0 scope changes:

### Phase 0 for MVP (Reduced)

| Stream | MVP Scope | Full Scope |
|--------|-----------|------------|
| 0A: PDF Conversion | Only Nature Trail text PDFs (30) | All 93 PDFs |
| 0B: Image Metadata | Only 20 hero/gallery candidates | All 498 images |

**Rationale:** Invest fully in Phase 0 only after MVP validates that the website is worth building out.

### Alternative: "Phase 0 Lite"

1. **0A-Lite:** Convert only the Nature Trail English PDFs (30 files) for content reference
2. **0B-Lite:** Manually select 10-20 best images for homepage/hero use
3. **Full Phase 0 runs after MVP launch** when time pressure is lower

---

## MVP Build Sequence

```
Week 1: Foundation
├── Domain + GitHub Pages setup
├── Basic CSS/design system
├── Homepage with hero
└── Basic responsive layout

Week 2: Core Pages
├── Visit page (single)
├── About page
├── Contact form (external service)
└── Navigation header/footer

Week 3: Payments
├── Join page content
├── Stripe Payment Links setup
├── Donation button
├── Thank you page

Week 4: Nature Trail + Polish
├── Nature Trail landing page
├── Mobile testing
├── SEO basics
└── Analytics setup

Week 5: Buffer + Launch
├── Committee review
├── Final fixes
├── DNS cutover
└── Old site redirect
```

---

## Risk Mitigation in MVP Approach

| Risk | How MVP Addresses |
|------|-------------------|
| Scope creep | Hard limit at 5 pages |
| Launch never happens | 5-week deadline |
| Perfect is enemy of good | Explicit "v2" list |
| Committee overwhelmed | Less to review |
| Maintainer burnout | Smaller initial build |

---

## Decision Points

### Before Starting MVP Build:

1. **Payment provider:** Stripe Payment Links (simplest) vs. full Stripe integration?
   - **Recommendation:** Payment Links for MVP, upgrade later

2. **Hosting:** GitHub Pages (free) vs. Netlify (forms included)?
   - **Recommendation:** Netlify Free for MVP (built-in forms)

3. **Nature Trail audio:** Keep on current hosting vs. move to podcast?
   - **Recommendation:** Keep current for MVP, podcast is v2

4. **Design:** Custom CSS vs. lightweight framework?
   - **Recommendation:** Tailwind CSS or simple custom for maintainability

### After MVP Launch (Go/No-Go for v2):

- [ ] Did anyone sign up online? (If yes → v2)
- [ ] Did committee update anything? (If yes → v2)
- [ ] Did traffic increase? (If yes → v2)
- [ ] Did we get feedback? (If yes → incorporate into v2)

---

## Summary: MVP vs Full Plan

| Dimension | MVP | Full Plan |
|-----------|-----|-----------|
| Pages | 5 | 15+ |
| PDFs converted | 30 (Nature Trail) | 93 |
| Images catalogued | 20 | 498 |
| Build time | 5 weeks | 4-6 months |
| Risk | Lower | Higher |
| Value delivered | Core (payments) | Full (community) |

**Recommendation:** Build MVP first, validate, then execute full plan with learnings incorporated.

---

*Generated: 2025-12-08*
