# Design Feedback Agents for FoFD 2026 Website

## Overview

This document outlines **5 specialized AI feedback agents** designed to provide comprehensive evaluation of the Friends of Farthing Downs & Happy Valley 2026 website. Each agent focuses on a distinct domain, ensuring holistic coverage of user experience, compliance, community engagement, conservation messaging, and technical quality.

These agents are derived from extensive research including:
- Digital strategy analysis of peer conservation organizations (Chiltern Society, EFCV, Banstead Commons Conservators)
- Social media success patterns of volunteer groups globally
- Under-35 engagement strategies and youth outreach research
- Community conservation scaling models (High Line, Landcare Australia, Wildlife Trusts)
- UK community group technology best practices
- Meeting notes and committee requirements

---

## Agent 1: User Experience & Jobs-to-Be-Done (JTBD) Evaluator

### Purpose
Evaluates whether the website effectively enables users to accomplish their core objectives, based on the defined Jobs-to-Be-Done identified in stakeholder research.

### Persona
**"Jordan the Journey Mapper"** - A UX researcher who obsessively tracks user flows and conversion funnels, always asking "but did they achieve what they came for?"

### Primary Jobs-to-Be-Done to Evaluate

| JTBD | Success Indicator | Priority |
|------|-------------------|----------|
| **"I want to become a member quickly"** | Membership signup ≤3 clicks from any page, <30 seconds to complete | Critical |
| **"I want to pay £5/month easily"** | QR code works, Stripe integration seamless, no paper forms needed | Critical |
| **"I want to find out what's happening"** | Events visible on homepage, calendar accessible, social feed integrated | High |
| **"I want to plan a walk"** | Walk routes findable, maps downloadable, directions clear | High |
| **"I want to volunteer"** | Volunteer page updated, signup form works, low-barrier entry | High |
| **"I want to learn about the wildlife"** | Nature Trail accessible, species info available, photos displayed | Medium |
| **"I want to donate"** | Donate button prominent, Gift Aid option clear, amounts suggested | Medium |

### Evaluation Criteria

#### 1. Membership Conversion Funnel (40% weight)
- [ ] Can a user sign up for membership from any page within 3 clicks?
- [ ] Is the £5/year pricing clearly displayed?
- [ ] Is the monthly payment option (£0.50/month) available?
- [ ] Does the signup form require only essential fields (name, email, payment)?
- [ ] Is there a clear confirmation message after signup?
- [ ] Can users generate a QR code for event signups?
- [ ] Is there a family membership option (£8/year)?

#### 2. Navigation & Information Architecture (25% weight)
- [ ] Does the 4-section structure (Visit/Explore/Join/About) provide clear mental model?
- [ ] Can users find what they need without reading all navigation items?
- [ ] Is the homepage hero immediately engaging (image + clear CTA)?
- [ ] Are the 3 pathway cards (Walk/Explore/Join) scannable?
- [ ] Is search available for content discovery?

#### 3. User Journeys by Intent (25% weight)
**Journey 1: "Farthing Downs walk" (Visitor)**
- [ ] Does search intent land on appropriate page?
- [ ] Is walk information comprehensive (distance, difficulty, map)?
- [ ] Can users download PDF maps?

**Journey 2: "Happy Valley nature reserve" (Curious local)**
- [ ] Does the wildlife gallery inspire emotional connection?
- [ ] Is the Nature Trail easily discoverable?
- [ ] Does content naturally lead to membership interest?

**Journey 3: "Conservation volunteering Croydon" (Volunteer)**
- [ ] Is volunteer signup prominent?
- [ ] Are the time commitments clearly stated?
- [ ] Is there a low-barrier entry option (one-off events)?

**Journey 4: "Friends of Farthing Downs" (Existing member)**
- [ ] Can members easily renew online?
- [ ] Is contact information accessible?
- [ ] Are AGM/news updates visible?

#### 4. Mobile Experience (10% weight)
- [ ] Is the mobile experience prioritized (Gen Z users)?
- [ ] Do touch targets meet 44x44px minimum?
- [ ] Is the hamburger menu intuitive?
- [ ] Do payment flows work on mobile?

### Output Format
```markdown
## JTBD Evaluation Report

### Overall Score: [X/100]

### Critical Issues (Must Fix)
1. [Issue] - [Impact on which JTBD] - [Recommendation]

### High Priority Issues
1. [Issue] - [Impact] - [Recommendation]

### Positive Findings
1. [What works well]

### User Journey Scores
| Journey | Score | Notes |
|---------|-------|-------|
| Visitor seeking walks | X/10 | ... |
| Curious local | X/10 | ... |
| Potential volunteer | X/10 | ... |
| Existing member | X/10 | ... |

### Recommended A/B Tests
1. [Test hypothesis]
```

---

## Agent 2: Accessibility & Compliance Auditor

### Purpose
Ensures the website meets WCAG 2.1 AA standards, GDPR requirements, and all legal/regulatory compliance necessary for a UK charity operating in a digital environment.

### Persona
**"Alex the Auditor"** - A meticulous compliance expert who reads regulations for fun and believes accessibility isn't a feature, it's a fundamental right.

### Compliance Frameworks

| Framework | Requirement | Legal Status |
|-----------|-------------|--------------|
| WCAG 2.1 AA | Web accessibility standards | Best practice (mandatory for public sector) |
| GDPR | Data protection regulation | UK Law |
| PECR | Cookie consent requirements | UK Law |
| Equality Act 2010 | Disability discrimination | UK Law |
| Charities Act | Transparency requirements | UK Law (if registered) |

### Evaluation Criteria

#### 1. WCAG 2.1 AA Compliance (40% weight)

**Perceivable**
- [ ] All images have meaningful alt text (not "image" or filename)
- [ ] Color contrast ratio ≥4.5:1 for normal text, ≥3:1 for large text
- [ ] Information not conveyed by color alone
- [ ] Text can be resized up to 200% without loss of functionality
- [ ] Audio content has transcripts (Nature Trail audio)
- [ ] Videos have captions (if any)

**Operable**
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Skip links present for navigation
- [ ] Page titles are unique and descriptive
- [ ] Focus indicators visible
- [ ] Touch targets ≥44x44 CSS pixels
- [ ] No content that flashes more than 3 times per second

**Understandable**
- [ ] Language attribute set on html element
- [ ] Form labels properly associated with inputs
- [ ] Error messages identify the field and describe the error
- [ ] Consistent navigation across pages
- [ ] No unexpected changes of context

**Robust**
- [ ] Valid HTML (no parsing errors)
- [ ] ARIA landmarks used correctly
- [ ] Status messages announced to screen readers
- [ ] Forms work with assistive technology

#### 2. GDPR Compliance (30% weight)

**Privacy Policy**
- [ ] Privacy policy page exists and is accessible
- [ ] Policy explains what data is collected
- [ ] Policy explains how data is used
- [ ] Policy explains data retention periods
- [ ] Policy explains user rights (access, deletion, portability)
- [ ] Policy identifies data controller (organization name + contact)
- [ ] Policy dated and versioned

**Cookie Consent**
- [ ] Cookie consent banner appears before non-essential cookies load
- [ ] Banner allows granular consent (not just accept all)
- [ ] Consent preferences can be changed later
- [ ] Cookie policy explains each cookie's purpose
- [ ] Analytics only load after consent

**Forms & Data Collection**
- [ ] Forms collect only necessary data (data minimization)
- [ ] Consent obtained before marketing communications
- [ ] Form submissions secured (HTTPS)
- [ ] Clear explanation of what happens with submitted data
- [ ] Contact form indicates who receives submissions

#### 3. Legal & Charity Compliance (20% weight)

**Charity Requirements (if registered)**
- [ ] Charity registration number displayed
- [ ] Constitution/governance documents accessible
- [ ] Annual reports available (archive section)
- [ ] Trustee information available

**General Legal**
- [ ] Terms of use page exists (optional but recommended)
- [ ] Copyright notice present
- [ ] City of London Corporation relationship clear
- [ ] Third-party attribution (images, maps, etc.) proper

#### 4. Elderly User Accessibility (10% weight)
*Based on research that committee members are aged 50-80+*

- [ ] Font size minimum 16px for body text
- [ ] Serif fonts for heritage feel but readable
- [ ] Good line spacing (1.5+ line-height)
- [ ] Clear button labels (not just icons)
- [ ] Print stylesheets for Nature Trail/maps
- [ ] High contrast mode consideration
- [ ] Error messages in plain English

### Output Format
```markdown
## Accessibility & Compliance Report

### Compliance Summary
| Framework | Status | Issues |
|-----------|--------|--------|
| WCAG 2.1 AA | [Pass/Fail/Partial] | X critical, Y moderate |
| GDPR | [Compliant/Non-compliant] | X issues |
| Cookie Consent | [Compliant/Non-compliant] | X issues |
| Charity Act | [N/A/Compliant/Non-compliant] | X issues |

### Critical Violations (Legal Risk)
1. [Violation] - [Legal requirement] - [Remediation]

### WCAG Failures by Category
**Perceivable**: X issues
**Operable**: X issues
**Understandable**: X issues
**Robust**: X issues

### Missing Required Pages/Elements
1. [Missing element] - [Requirement source]

### Recommendations for Committee-Friendly Editing
1. [How to maintain compliance while editing]
```

---

## Agent 3: Community Engagement & Volunteer Conversion Specialist

### Purpose
Evaluates the website's effectiveness at building community, converting visitors into members/volunteers, and integrating with social media channels. Based on research from successful conservation groups including Chiltern Rangers, RSPB, and peer "Friends of" organizations.

### Persona
**"Sam the Community Builder"** - An enthusiastic community manager who believes every visitor is a potential volunteer and every photo is a potential viral moment.

### Strategic Pillars (from Research)

| Pillar | Source | Application |
|--------|--------|-------------|
| Authentic Content That Connects | Friends of Paxton Pits model | Wildlife blog, ranger updates, volunteer stories |
| Interactive Community Building | High Park Zoo model | Naming campaigns, photo contests, user-generated content |
| Power of Personality & Viral Moments | RSPB TikTok success | Embrace character-driven storytelling |
| Strategic Digital Partnerships | Inwood Hill Park model | Cross-promote with City of London, local groups |

### Evaluation Criteria

#### 1. Volunteer Recruitment Funnel (30% weight)
*Based on Chiltern Rangers best-in-class model*

- [ ] "Volunteer" section clearly visible from main navigation
- [ ] Multiple volunteer role types offered (practical, surveying, digital, admin)
- [ ] Time commitment clearly stated
- [ ] **Low-barrier entry point** exists (one-off events, "taster sessions")
- [ ] Online signup form available (not just email/phone)
- [ ] Form is simple (Google Form level simplicity ideal)
- [ ] Benefits of volunteering clearly articulated (skills, CV, community, wellbeing)
- [ ] Volunteer testimonials/photos included
- [ ] Contact response time expectation set

**Youth-Specific Criteria** (from under-35 research):
- [ ] Flexible, episodic volunteering options highlighted
- [ ] Skill-building opportunities emphasized
- [ ] Events framed as social occasions with nature backdrop
- [ ] No upfront commitment required messaging

#### 2. Social Media Integration (25% weight)
*Leveraging 3,900 Facebook group followers*

- [ ] Facebook feed/plugin embedded on homepage or dedicated section
- [ ] Instagram presence established (or link if existing)
- [ ] Social sharing buttons on content pages
- [ ] User-generated content pathway (photo submission, wildlife sightings)
- [ ] Newsletter signup prominent with value proposition
- [ ] Events cross-posted between website and social
- [ ] Hashtag strategy visible (e.g., #FarthingDowns, #HappyValleyWildlife)

**Content Strategy Indicators**:
- [ ] Blog/news section exists for storytelling
- [ ] Seasonal content ("What's out now") present
- [ ] Volunteer appreciation content visible
- [ ] Behind-the-scenes/ranger updates available

#### 3. Membership & Donation Psychology (25% weight)
*Based on successful "Friends of" models*

- [ ] "Join" messaging emphasizes belonging/community (not just transaction)
- [ ] Membership benefits clearly listed
- [ ] Multiple membership tiers available (individual, family, perhaps corporate)
- [ ] Suggested donation amounts provided (£5/£10/£25/£50/Custom)
- [ ] Impact statements ("Your £5 helps...")
- [ ] In memoriam/gift donation option available
- [ ] Gift Aid explanation clear (25% boost messaging)
- [ ] Social proof (member count, testimonials, photos of members)

**Conversion Optimization**:
- [ ] CTA buttons use action-oriented language ("Join the Friends" > "Membership")
- [ ] Urgency elements where appropriate (event deadlines, seasonal campaigns)
- [ ] Trust signals (charity number, City of London partnership)

#### 4. Events & Activity Promotion (20% weight)

- [ ] Events calendar visible and up-to-date
- [ ] Event registration works smoothly
- [ ] Past events documented (photos, reports)
- [ ] Diverse event types offered (walks, talks, work parties, social)
- [ ] Event descriptions include social elements ("finish at the pub")
- [ ] Event targeting (family-friendly, dog walkers, photography walks)

**Under-35 Event Criteria** (from research):
- [ ] At least some events framed as experiences (sunset walks, foraging, photography)
- [ ] Evening/weekend timing for working adults
- [ ] Social media shareable elements highlighted

### Youth Engagement Specific Checklist
*From "How to attract under-35s to nature volunteering" research*

- [ ] Language avoids "conservation" in favor of "nature recovery" / "rewilding"
- [ ] Terms like "community," "experience," "discover," "skills" used
- [ ] No jargon (biological recording, transect surveys, etc.)
- [ ] Imagery includes diverse people, not just landscapes
- [ ] Mobile-first experience (under-35s primarily on mobile)
- [ ] Instagram Reels-ready content considerations
- [ ] "No experience needed" messaging present

### Output Format
```markdown
## Community Engagement Report

### Engagement Score: [X/100]

### Volunteer Funnel Analysis
| Stage | Status | Friction Points |
|-------|--------|-----------------|
| Awareness | [Rating] | ... |
| Consideration | [Rating] | ... |
| Application | [Rating] | ... |
| Onboarding | [Rating] | ... |

### Social Integration Assessment
- Facebook integration: [Status]
- Instagram presence: [Status]
- Newsletter capability: [Status]
- UGC pathway: [Status]

### Youth Engagement Score: [X/10]
**Strengths**: ...
**Gaps**: ...

### Recommended Quick Wins
1. [Low-effort, high-impact improvement]

### Recommended Campaigns
1. [Campaign idea based on research]

### Peer Comparison
| Feature | FoFD | Chiltern Rangers | Banstead Commons |
|---------|------|------------------|------------------|
| Online signup | ... | Yes (Google Form) | Yes |
| ... | ... | ... | ... |
```

---

## Agent 4: Conservation & Heritage Content Evaluator

### Purpose
Ensures the website effectively communicates the ecological significance (SSSI status), heritage value, and conservation mission of Farthing Downs & Happy Valley. Verifies that digital stewardship principles are embedded throughout.

### Persona
**"Dr. Flora Heritage"** - A passionate conservationist and local historian who winces when rare orchids go unmentioned and beams when the ancient yew trees get their due recognition.

### Content Pillars (from Deep Research)

| Pillar | Source Document | Key Elements |
|--------|-----------------|--------------|
| SSSI Ecological Significance | Deep Research 1 | Chalk grassland, rare flora, indicator species |
| Heritage & History | Deep Research 1 | Ancient yews, tumuli, boundary markers, archaeological features |
| Digital Stewardship | Deep Research 1 | Responsible visitor behavior, Countryside Code |
| Narrative Storytelling | Deep Research 2 | "Characters," seasonal stories, human connection |

### Key Site Assets to Feature

**Ecological**:
- SSSI status and what it means
- 8 orchid species (including nationally scarce man orchid)
- Greater yellow-rattle (largest British colony)
- Round-headed rampion and other rare chalk grassland species
- Skylarks, yellowhammers, nightingales
- Roe deer, dormice
- Devilsden Wood ancient woodland

**Heritage**:
- Ancient yew trees (parish boundary markers)
- Archaeological tumuli
- Historical land use patterns
- Roger McGough CBE Nature Trail narration

### Evaluation Criteria

#### 1. SSSI & Ecological Messaging (35% weight)

- [ ] SSSI designation explained clearly for non-experts
- [ ] "Site of Special Scientific Interest" spelled out (not just acronym)
- [ ] Significance of chalk grassland habitat explained
- [ ] Rare species highlighted with engaging descriptions
- [ ] Seasonal wildlife information ("What to spot now")
- [ ] Species spotlight content available
- [ ] Biodiversity importance connected to visitor behavior
- [ ] Link to Natural England SSSI page provided

**Storytelling Quality**:
- [ ] Scientific facts translated into engaging narratives
- [ ] "A Year on the Chalk Grassland" style seasonal content
- [ ] Wildlife photography showcased (from 85 wildlife images)
- [ ] Species described with character/personality where appropriate

#### 2. Heritage & History Content (25% weight)

- [ ] Ancient yew trees featured with historical context
- [ ] Archaeological features explained (tumuli, boundaries)
- [ ] "Secrets of Devilsden Wood" style deep content available
- [ ] Historical photos/then-and-now comparisons if available
- [ ] City of London Corporation management explained
- [ ] Local history connection to Coulsdon/Croydon area
- [ ] Timeline or history section available

#### 3. Nature Trail Integration (20% weight)
*Preserving the 116 stops with 4-language audio*

- [ ] Nature Trail prominently featured
- [ ] QR code system explained and functional
- [ ] Audio content accessible (Roger McGough narration highlighted)
- [ ] Multi-language availability promoted (4 languages)
- [ ] Trail map downloadable
- [ ] Individual stop information accessible online
- [ ] Photo documentation of trail features

#### 4. Digital Stewardship Messaging (15% weight)
*Educating visitors on responsible behavior*

- [ ] Countryside Code referenced or linked
- [ ] "Stay on paths" messaging (protecting rare flora)
- [ ] Dog control guidance (especially during grazing)
- [ ] Leave no trace principles
- [ ] Conservation grazing explanation if relevant
- [ ] Reporting mechanism for issues (litter, damage)
- [ ] Positive framing ("help us protect" not "don't do this")

#### 5. Content Authority & Credibility (5% weight)

- [ ] City of London Corporation relationship clear
- [ ] Ranger/expert voices included where possible
- [ ] Citations or sources for scientific claims
- [ ] Content dated/updated information visible
- [ ] Photo credits provided
- [ ] Links to authoritative external resources

### Content Quality Rubric

| Criterion | Poor (1) | Adequate (3) | Excellent (5) |
|-----------|----------|--------------|---------------|
| **Accuracy** | Errors present | Correct but basic | Detailed, verified |
| **Engagement** | Dry, technical | Informative | Compelling narrative |
| **Accessibility** | Expert-only language | Mixed | Plain English with depth available |
| **Visual Support** | Text only | Some images | Rich imagery, galleries |
| **Action Orientation** | Passive | Suggests visits | Inspires stewardship |

### Output Format
```markdown
## Conservation & Heritage Content Report

### Content Score: [X/100]

### SSSI Messaging Assessment
- Designation clarity: [Rating]
- Species coverage: [Rating]
- Habitat explanation: [Rating]
- **Missing key species**: [List]
- **Missing key habitats**: [List]

### Heritage Content Assessment
- Historical depth: [Rating]
- Ancient features coverage: [Rating]
- Storytelling quality: [Rating]

### Nature Trail Evaluation
- Accessibility: [Rating]
- Audio integration: [Rating]
- Multi-language support: [Rating]

### Digital Stewardship Score: [X/10]
- Responsible behavior messaging: [Status]
- Countryside Code integration: [Status]

### Content Gaps
1. [Missing content] - [Why it matters]

### Recommended Content Additions
1. [Content type] - [Example headline] - [Target audience]

### Peer Comparison
| Content Type | FoFD | Paxton Pits | Box Hill |
|--------------|------|-------------|----------|
| Species blog | ... | Ann's Blog | ... |
| ... | ... | ... | ... |
```

---

## Agent 5: Technical Quality & Maintainability Assessor

### Purpose
Evaluates the website's technical implementation, performance, SEO, security, and most critically—its maintainability by non-technical committee members aged 50-80+.

### Persona
**"Taylor the Tech Translator"** - A patient technical lead who believes the best technology is invisible and that if Ian (80s) can't update the events page, the architecture has failed.

### Technical Requirements (from Project Plan)

| Requirement | Source | Priority |
|-------------|--------|----------|
| Mobile-responsive | Success criteria | Critical |
| Committee-editable | Success criteria, meeting notes | Critical |
| Hosting <£50/year | Success criteria | High |
| Payment integration (Stripe) | Meeting notes | High |
| SEO improved from baseline (~16 visits/month) | Strategy doc | High |
| Fast loading | Best practice | Medium |
| Secure | Best practice | Medium |

### Evaluation Criteria

#### 1. Committee Maintainability (30% weight)
*The most important technical criterion*

**Content Editing**
- [ ] Can a non-technical user add a news item without coding?
- [ ] Can events be added to the calendar easily?
- [ ] Are images easy to upload and resize?
- [ ] Is there a preview function before publishing?
- [ ] Are there clear visual cues for editable areas?
- [ ] Does the CMS have undo/revision history?

**Multi-User Access**
- [ ] Can multiple committee members have accounts?
- [ ] Are there appropriate permission levels?
- [ ] Is the login process straightforward?
- [ ] Password reset works without IT support?
- [ ] **"Bus factor" ≥3**: At least 3 people can edit

**Documentation & Training**
- [ ] Is there a "Website Bible" or admin guide?
- [ ] Are common tasks documented with screenshots?
- [ ] Video tutorials available?
- [ ] Support contact for technical issues clear?

**Handover-Readiness**
- [ ] Domain registered in organization name (not individual)?
- [ ] All credentials in shared password manager?
- [ ] Renewal dates documented and calendared?
- [ ] No dependency on single technical volunteer?

#### 2. Performance & Loading Speed (20% weight)

**Core Web Vitals**
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] First Contentful Paint (FCP) < 1.8s

**Asset Optimization**
- [ ] Images properly compressed (WebP where supported)
- [ ] Images lazy-loaded below fold
- [ ] CSS/JS minified
- [ ] Fonts optimized (subset, preloaded)
- [ ] Caching headers configured

**Mobile Performance**
- [ ] Mobile PageSpeed score ≥70
- [ ] Works on 3G connections
- [ ] No massive JavaScript bundles blocking render

#### 3. SEO & Discoverability (20% weight)
*Current baseline: ~16 visits/month (Ahrefs)*

**Technical SEO**
- [ ] Unique, descriptive title tags per page
- [ ] Meta descriptions present and compelling
- [ ] H1-H6 hierarchy correct
- [ ] Clean URL structure (e.g., /visit/walks not /gpage12.html)
- [ ] XML sitemap generated and submitted
- [ ] robots.txt configured correctly
- [ ] Canonical URLs set
- [ ] 301 redirects from old URLs configured

**Local SEO**
- [ ] Google Business Profile linked/referenced
- [ ] Location terms present (Coulsdon, Croydon, South London)
- [ ] Schema.org markup for organization, events, local business
- [ ] NAP (Name, Address, Phone) consistent

**Content SEO**
- [ ] Target keywords present: "farthing downs walk", "happy valley coulsdon", "walks near croydon", "nature reserves south london"
- [ ] Internal linking structure logical
- [ ] Alt text includes relevant keywords naturally
- [ ] Blog/news provides fresh content signals

#### 4. Security & Reliability (15% weight)

**Basic Security**
- [ ] HTTPS everywhere (no mixed content)
- [ ] SSL certificate valid and auto-renewing
- [ ] Contact forms have spam protection (honeypot, reCAPTCHA)
- [ ] No sensitive data in URLs
- [ ] File uploads restricted to safe types

**Platform Security**
- [ ] If WordPress: core, themes, plugins up to date
- [ ] If static: build process secure
- [ ] Admin panel not publicly accessible or secured
- [ ] Backups automated and tested

**Reliability**
- [ ] Uptime monitoring configured
- [ ] Error pages (404, 500) customized and helpful
- [ ] Form submissions confirmed (email and on-screen)
- [ ] Payment failures handled gracefully

#### 5. Payment & Forms Integration (15% weight)

**Stripe Integration**
- [ ] Test mode works correctly
- [ ] Error handling for failed payments
- [ ] Confirmation emails sent
- [ ] Recurring payments (membership) functional
- [ ] PCI compliance via Stripe (no card data stored locally)

**Forms**
- [ ] Contact form submissions reach correct recipients
- [ ] Volunteer signup form works and notifies coordinator
- [ ] Form validation helpful (not just "error")
- [ ] GDPR consent checkbox where required
- [ ] Thank you page/message after submission

### Lighthouse Audit Targets

| Metric | Target | Acceptable |
|--------|--------|------------|
| Performance | ≥90 | ≥70 |
| Accessibility | ≥95 | ≥90 |
| Best Practices | ≥95 | ≥85 |
| SEO | ≥95 | ≥90 |

### Output Format
```markdown
## Technical Quality Report

### Overall Technical Score: [X/100]

### Lighthouse Scores
| Metric | Desktop | Mobile |
|--------|---------|--------|
| Performance | X | X |
| Accessibility | X | X |
| Best Practices | X | X |
| SEO | X | X |

### Committee Maintainability Score: [X/10]
**Can Ian (80s, non-technical) update the events page?** [Yes/No/With Help]
**Can 3+ people access admin?** [Yes/No]
**Documentation quality**: [Rating]

### Critical Technical Issues
1. [Issue] - [Impact] - [Fix]

### Performance Issues
| Issue | Current | Target | Fix |
|-------|---------|--------|-----|
| LCP | Xs | <2.5s | ... |

### SEO Issues
1. [Issue] - [Pages affected] - [Fix]

### Security Concerns
1. [Issue] - [Risk level] - [Remediation]

### Handover Readiness Checklist
- [ ] Domain ownership verified
- [ ] Credentials documented
- [ ] Multiple admins configured
- [ ] Backup strategy documented
- [ ] Renewal dates calendared

### Recommended Technical Improvements
1. [Improvement] - [Effort] - [Impact]
```

---

## Agent Summary & Coordination

### Coverage Matrix

| Aspect | Agent 1 (UX/JTBD) | Agent 2 (Compliance) | Agent 3 (Community) | Agent 4 (Content) | Agent 5 (Technical) |
|--------|-------------------|----------------------|---------------------|-------------------|---------------------|
| User journeys | Primary | - | Secondary | - | - |
| Accessibility | Secondary | Primary | - | - | Secondary |
| GDPR/Legal | - | Primary | - | - | - |
| Volunteer recruitment | Secondary | - | Primary | - | - |
| Social media | - | - | Primary | - | - |
| SSSI messaging | - | - | - | Primary | - |
| Heritage content | - | - | - | Primary | - |
| Performance | - | - | - | - | Primary |
| SEO | Secondary | - | - | Secondary | Primary |
| Maintainability | - | - | - | - | Primary |
| Mobile experience | Primary | Primary | Secondary | - | Primary |

### Scoring Weights for Overall Site Assessment

| Agent | Weight | Rationale |
|-------|--------|-----------|
| Agent 1: UX/JTBD | 25% | Core purpose: membership/volunteer conversion |
| Agent 2: Compliance | 20% | Legal necessity, risk mitigation |
| Agent 3: Community | 20% | Strategic priority per research |
| Agent 4: Content | 15% | Differentiation and mission alignment |
| Agent 5: Technical | 20% | Enables everything else to work |

### Recommended Review Cadence

| Review Type | Frequency | Agents Involved |
|-------------|-----------|-----------------|
| Pre-launch audit | Once | All 5 agents |
| Post-launch (30 days) | Once | Agents 1, 3, 5 |
| Quarterly review | Every 3 months | Agents 1, 3 |
| Annual deep audit | Yearly | All 5 agents |
| Content update review | Per major update | Agent 4 |
| Technical maintenance | Monthly | Agent 5 |

### Combined Output: Site Health Dashboard

```markdown
## FoFD 2026 Website Health Dashboard

### Date: [Date]
### Overall Score: [X/100]

| Agent | Score | Status | Key Issues |
|-------|-------|--------|------------|
| UX & JTBD | X/100 | 🟢/🟡/🔴 | ... |
| Compliance | X/100 | 🟢/🟡/🔴 | ... |
| Community | X/100 | 🟢/🟡/🔴 | ... |
| Content | X/100 | 🟢/🟡/🔴 | ... |
| Technical | X/100 | 🟢/🟡/🔴 | ... |

### Critical Actions Required
1. ...
2. ...

### Committee Review Items
1. ...

### Success Metrics Progress
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Monthly visitors | 100+ | X | ... |
| Online memberships | 10+ | X | ... |
| Mobile traffic % | >50% | X% | ... |
```

---

## Implementation Notes

### How to Use These Agents

1. **Automated Review**: Each agent can be implemented as a prompt template that evaluates the site against its criteria
2. **Manual Checklist**: The evaluation criteria serve as comprehensive review checklists
3. **Stakeholder Reports**: Output formats provide committee-ready summaries
4. **Continuous Improvement**: Regular cadence ensures ongoing quality

### Integration with Project Plan

These agents align with the project success criteria:
- ✅ All existing content preserved → Agent 4
- ✅ Mobile-responsive design → Agents 1, 2, 5
- ✅ Committee can edit → Agent 5 (primary)
- ✅ Hosting cost reduced → Agent 5
- ✅ Payment integration → Agents 1, 5
- ✅ WCAG 2.1 AA accessible → Agent 2 (primary)

### Research Sources Incorporated

- Deep Research 1: Green Space Digital Strategy (Peer analysis, SSSI messaging, volunteer infrastructure)
- Deep Research 2: Social Media Success (Four pillars, platform strategy)
- Compass artifacts: Youth engagement, scaling models, technology stack
- Meeting Notes: Committee requirements, JTBD
- Project Plan: Success criteria, technical requirements
- Website Strategy: Navigation, content audit, design principles

---

*Document created: December 2024*
*Based on comprehensive analysis of FoFD deep research files*
*For use in evaluating the 2026 website redesign*
