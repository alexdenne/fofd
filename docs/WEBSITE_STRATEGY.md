# Friends of Farthing Downs & Happy Valley
## New Website Strategy Document

**Version:** 1.0
**Date:** December 2024
**Target Launch:** January 2025 (parallel go-live)

---

## Executive Summary

The current website (friendsoffarthingdowns.co.uk) is a ~20-year-old static HTML site with:
- 70+ pages of valuable content
- Table-based layouts (pre-CSS era)
- No mobile responsiveness
- No online payments (cheques/standing orders only)
- 23 navigation items creating cognitive overload
- Poor SEO (Ahrefs reports ~16 visits/month)

**Objective:** Create a simple, beautiful, accessible website that:
1. Inspires Gen Z (visual, mobile-first, environmental messaging)
2. Is maintainable by Gen Y (Wix/modern CMS)
3. Doesn't alienate Gen X (clear navigation, substance available)
4. Enables instant online payments (£5/month membership)
5. Drives traffic from social media (Facebook group has 3,900 followers)

---

## Current State Analysis

### Navigation (23 items - overwhelming)
```
FoFD&HV | Getting Here | Events | Walks & Trails | Aims | Constitution |
Donations | South London Downs | History | Reports | Lyme Disease |
Committee | Contact | Links | Happy Valley | Membership | Projects |
Cairn | Conservation | Volunteering | Wildlife | Archaeology |
City of London | Nature Trail | Planning
```

### Content Audit Summary

| Content Type | Pages | Value | Migrate? |
|--------------|-------|-------|----------|
| Core info (Welcome, About) | 3 | High | Yes - rewrite |
| Walks & Trails | 5 | High | Yes - consolidate |
| Wildlife guides | 10+ | High | Yes - gallery format |
| Archaeology/History | 4 | High | Yes - storytelling |
| Nature Trail (QR system) | 30+ | Very High | Yes - modernise |
| Membership/Donate | 2 | Critical | Yes - add payments |
| AGM Archives | 9 | Medium | Yes - archive section |
| Committee/Contact | 3 | Medium | Yes - simplify |
| Conservation/Projects | 5 | Medium | Yes - combine |
| Outdated consultations | 3 | Low | Archive only |
| Test/duplicate files | 15+ | None | Delete |

### Current Payment System
- **Membership:** £5/year individual, £8/year family
- **Method:** Print PDF form, post cheque or set up standing order
- **Friction:** Extremely high - requires printer, envelope, stamp, bank visit

### Assets Worth Preserving
- 498 images (wildlife, archaeology, landscapes)
- 122 audio files (Nature Trail narration in 4 languages)
- 94 PDFs (maps, strategic documents, historical records)
- Roger McGough CBE celebrity narration

---

## New Site Architecture

### Simplified Structure (4 main sections)

```
HOME
├── VISIT
│   ├── Getting Here (map, parking, transport)
│   ├── Walk Routes (3-4 featured walks)
│   └── Safety Info (Lyme disease, dog info)
│
├── EXPLORE
│   ├── Nature Trail (interactive/QR)
│   ├── Wildlife Gallery
│   ├── Archaeology & History
│   └── Seasonal Highlights
│
├── JOIN US
│   ├── Become a Member (PAYMENT)
│   ├── Donate (PAYMENT)
│   ├── Volunteer
│   └── Events Calendar
│
└── ABOUT
    ├── Who We Are
    ├── Contact
    └── [Archive: AGMs, Constitution, etc.]
```

### URL Structure (SEO-optimised)
```
farthingdowns.org.uk (or similar with "happy valley")
├── /                     (Home)
├── /visit
│   ├── /visit/getting-here
│   ├── /visit/walks
│   └── /visit/safety
├── /explore
│   ├── /explore/nature-trail
│   ├── /explore/wildlife
│   └── /explore/history
├── /join
│   ├── /join/membership
│   ├── /join/donate
│   └── /join/volunteer
└── /about
    ├── /about/committee
    └── /about/archive
```

---

## User Journeys (by search intent)

### Journey 1: "Farthing Downs walk" (Visitor)
```
Google → HOME (hero image) → VISIT → Walks → Downloads PDF/views map
         ↓
         Optional: EXPLORE (wildlife) → JOIN (becomes interested)
```

### Journey 2: "Happy Valley nature reserve" (Curious local)
```
Google → HOME → EXPLORE → Wildlife gallery → Nature Trail
         ↓
         "This is amazing!" → JOIN → £5 membership (30 seconds)
```

### Journey 3: "Conservation volunteering Croydon" (Volunteer)
```
Google → JOIN/VOLUNTEER → Signs up for next session
         ↓
         Added to mailing list → Converts to member
```

### Journey 4: "Friends of Farthing Downs" (Existing member)
```
Google → HOME → ABOUT or direct to /join/membership → Renews online
```

---

## Payment Integration

### Recommended: Stripe (via Wix Payments or direct)

**Membership Options:**
| Tier | Price | Billing |
|------|-------|---------|
| Individual | £5/year | Annual |
| Individual | £0.50/month | Monthly (£6/year) |
| Family | £8/year | Annual |
| Family | £0.75/month | Monthly (£9/year) |

**Why monthly option:** Meeting notes mentioned "£5/month" - consider whether this was intended as a higher-tier or recurring micro-donation model.

**One-off Donations:**
- Suggested amounts: £5 / £10 / £25 / £50 / Custom
- In memoriam option (ties to existing memorial book tradition)
- Gift Aid checkbox (increases value by 25%)

### Implementation in Wix
1. Wix has native payment processing (UK-based, as noted in meeting)
2. Stripe integration available
3. QR code generation for event/stall sign-ups
4. Recurring payment support

### Checkout Flow
```
[JOIN FOR £5/YEAR] → Email + Name → Card details → Confirmation
                                                    ↓
                                            Added to mailing list
                                            Welcome email sent
                                            Membership number issued
```

---

## Design Principles

### Generational Balance

| Element | Gen Z (inspire) | Gen Y (build) | Gen X (not alienate) |
|---------|-----------------|---------------|----------------------|
| **Hero** | Full-bleed photo, minimal text | Easy to swap images | Clear purpose visible |
| **Navigation** | Hamburger on mobile | Wix visual editor | Visible nav bar on desktop |
| **Content** | Scannable, emoji-ok | Markdown/blocks | Expandable detail available |
| **CTA** | "Join the movement" | One-click tracking | "Become a Member" also works |
| **Imagery** | Instagram-quality | User-submitted via FB | Professional feel |
| **Social** | Embedded feeds | Auto-sync options | Links clearly labelled |

### Colour Palette
Current: #FFFFCC (cream), #FF9900 (orange)

Suggested refresh:
- **Primary:** Natural green (#4A7C59) - chalk grassland
- **Secondary:** Warm amber (#E8A838) - wildflower/sunset
- **Accent:** Sky blue (#87CEEB) - open downland sky
- **Text:** Charcoal (#333333) - high contrast
- **Background:** Off-white (#FAFAFA) - clean, modern

### Typography
- **Headlines:** Playfair Display or similar serif (heritage feel)
- **Body:** Inter or Open Sans (readable, modern)
- **Avoid:** Comic Sans, Kristen ITC (currently used)

---

## Content Migration Plan

### Phase 1: Launch (January 2025)

**Must Have:**
- [ ] Home page with hero, intro, 3 cards (Visit/Explore/Join)
- [ ] Visit: Getting here (map, parking, transport)
- [ ] Visit: Top 3 walks with downloadable PDFs
- [ ] Join: Membership with Stripe payment
- [ ] Join: Donate page
- [ ] About: Committee, contact form
- [ ] Nature Trail: QR landing page (existing audio works)

**Content to Rewrite:**
- Welcome/About text (currently 500+ words, reduce to 100)
- Membership page (remove paper form instructions)

### Phase 2: Enrich (Feb-Mar 2025)

**Add:**
- [ ] Wildlife gallery (curated from 85 wildlife images)
- [ ] Archaeology/History page with timeline
- [ ] Events calendar (linked to Facebook)
- [ ] Volunteer sign-up form
- [ ] Seasonal "What's out now" section

### Phase 3: Archive (April 2025)

**Move to Archive:**
- [ ] AGM records (2014-2022)
- [ ] Old newsletters
- [ ] Constitution (PDF link)
- [ ] Historical planning documents

---

## Technical Recommendations

### Platform: Wix (as chosen by committee)
- UK-based payments
- Visual editor for non-technical users
- Built-in forms, blog, events
- Mobile-responsive templates
- ~£10-15/month for business features

### Domain Options
Current: friendsoffarthingdowns.co.uk

Suggestions:
1. **farthingdowns.org.uk** - shorter, memorable
2. **farthingdownsandhappyvalley.org.uk** - includes Happy Valley
3. **happyvalleydowns.org.uk** - catchy, dual location
4. **thedowns.org.uk** - if available

### Integrations
- **Mailchimp/Mailerlite:** Newsletter (free tier sufficient)
- **Facebook:** Embedded group feed or page plugin
- **Google Maps:** Interactive map of walks
- **Stripe:** Payment processing

### Accessibility (WCAG 2.1)
- Alt text on all images
- Sufficient colour contrast (4.5:1 minimum)
- Keyboard navigable
- Clear link text (not "click here")
- Mobile touch targets (44x44px minimum)

---

## SEO Quick Wins

### Current Issues
- Poor meta descriptions (same boilerplate on every page)
- No structured data
- Broken internal links (old server references)
- Not mobile-friendly (major Google penalty)

### New Site SEO
1. **Title tags:** "Farthing Downs Walks | Friends of Farthing Downs"
2. **Meta descriptions:** Unique per page, include location
3. **Local SEO:** Google Business Profile, cite Coulsdon/Croydon
4. **Keywords to target:**
   - "farthing downs walk"
   - "happy valley coulsdon"
   - "walks near croydon"
   - "nature reserves south london"
   - "chalk grassland surrey"

---

## Social Media Integration

### Facebook (Primary - 3,900 followers)
- Embed group feed on homepage
- Share new website content to group
- Use group photos (with permission) on website

### Suggested Additions
- **Instagram:** Perfect for wildlife/landscape photos
- **Strava/Komoot:** Publish walk routes for outdoor community

### Content Flow
```
Facebook Group (photos, discussion)
        ↓ (best content)
Website (curated galleries, events)
        ↓ (drives to)
Membership signup
```

---

## Success Metrics

### 30-Day Post-Launch
- [ ] 100+ unique visitors (baseline: ~16/month)
- [ ] 10+ new online memberships
- [ ] Mobile traffic > 50% (currently likely 0%)

### 6-Month Goals
- [ ] 500 monthly visitors
- [ ] 50% of new memberships via website
- [ ] Newsletter list > 200 subscribers
- [ ] Events showing on website calendar

### 1-Year Goals
- [ ] Organic search traffic increase 10x
- [ ] Eliminate paper membership forms
- [ ] Younger demographic represented in new members

---

## Files to Delete (cleanup)

```
/gpage19-copy230714.html
/gpage19-copy270814.html
/gpage19-copy200814.html
/gpage19-copy010914.html
/gpage19-copy180921.html
/gpage19-copy230920.html
/gpage19-Sept2020.html
/gpage1-copy230714.html
/gpage16-original-copy.html
/gpageOLD12.html
/testharness.html
/languageharness.html
/onerror1.html
/onsubmit1.html
/email1.html
/style.css (empty)
```

---

## Immediate Next Steps

1. **Domain:** Decide on new domain (include "happy valley"?)
2. **Wix Account:** Set up with committee access
3. **Payment Account:** Set up Stripe, link to treasurer
4. **Content:** Extract/rewrite key text from existing pages
5. **Images:** Select top 20 hero/gallery images
6. **Template:** Choose Wix template, customise colours/fonts
7. **Build:** Create 4 main pages + join/payment
8. **Test:** Mobile, payments, forms
9. **Redirect:** Plan old URL redirects
10. **Launch:** January parallel go-live

---

## Appendix: Current Navigation → New Location

| Old Page | New Location | Notes |
|----------|--------------|-------|
| FoFD&HV (index) | / | Rewrite |
| Getting There | /visit/getting-here | Simplify |
| Events Diary | /join (events section) | Calendar widget |
| Walks & Trails | /visit/walks | Top 3 walks |
| Aims & Objectives | /about | Brief section |
| Constitution | /about/archive | PDF link |
| Donations | /join/donate | With payments |
| South London Downs NNR | /explore/history | Brief mention |
| History | /explore/history | Consolidate |
| Reports | /about/archive | PDF links |
| Lyme Disease | /visit/safety | Brief + CoL link |
| Committee | /about | Simplified |
| Contact Us | /about | Form |
| Useful Links | Footer or /about | Reduce |
| Happy Valley | / (homepage) | Equal billing |
| Membership | /join/membership | With payments |
| Projects | /about | Brief history |
| Cairn | /explore/history | Story |
| Conservation | /explore | Combined |
| Volunteering | /join/volunteer | With form |
| Wildlife | /explore/wildlife | Gallery |
| Archaeology | /explore/history | Combined |
| City of London | Footer link | External |
| Nature Trail | /explore/nature-trail | Modernise |
| Planning | /about/archive | If needed |

---

*Document prepared from analysis of existing site files and September 2025 meeting notes.*
