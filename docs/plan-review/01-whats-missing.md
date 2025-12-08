# Gap Analysis: What's Missing from This Plan?

**Prompt Used:** "Review the strategy and migration documents and identify: Critical steps that are implied but not explicitly listed, Dependencies between phases that aren't documented, Stakeholders who should be involved but aren't mentioned, Risks that haven't been addressed"

**Documents Reviewed:** EVOLVED-STRATEGY.md, MIGRATION-PLAN.md, WEBSITE_STRATEGY.md, GAPS-AND-LIMITATIONS.md

---

## 1. Critical Steps Implied But Not Explicitly Listed

### Content Quality Assurance
- **Missing:** No explicit content review/editing process before migration
- **Implied:** Content will be cleaned during extraction, but who approves the rewritten text?
- **Risk:** Migrated content may have factual errors, outdated information, or tone inconsistencies

### Stakeholder Sign-off Gates
- **Missing:** No formal approval checkpoints for:
  - Design mockups before build
  - Content rewrites before publication
  - Payment flow configuration
  - Final go-live decision
- **Current state:** GAPS-AND-LIMITATIONS.md mentions "Committee approval gates - Implicit"

### Multilingual Content Strategy
- **Missing:** While Nature Trail audio exists in 4 languages, there's no plan for:
  - Who maintains non-English content?
  - Are French/Hindi/Polish communities consulted?
  - Translation quality verification process
- **Current state:** EVOLVED-STRATEGY.md mentions "50+ community volunteer translators" historically

### Legacy URL Handling
- **Missing:** Detailed redirect mapping
- **Implied:** Old URLs should redirect to new structure
- **Risk:** Broken links, lost SEO equity, frustrated returning visitors
- **Note:** WEBSITE_STRATEGY.md mentions "Plan old URL redirects" but no detailed mapping exists

### Content Freeze Protocol
- **Missing:** When does the legacy site stop being updated?
- **Risk:** Parallel editing creates content drift, double work
- **Needed:** Clear date when legacy site becomes read-only

### Accessibility Audit
- **Missing:** Formal WCAG 2.1 compliance testing plan
- **Mentioned but not detailed:** WEBSITE_STRATEGY.md lists accessibility principles but no testing methodology
- **Needed:** Specific tools (axe, WAVE), testing checkpoints, remediation process

### Image Optimization Workflow
- **Missing:** Process for:
  - Resizing images for web (current images may be print-quality)
  - Format conversion (WebP for modern browsers)
  - Responsive image srcsets
- **Current state:** Phase 0B creates metadata but optimization is only mentioned in Phase 3D

---

## 2. Dependencies Between Phases Not Documented

### Phase 0 → Phase 3 Critical Path
```
PDF Conversions (0A) → Nature Trail Page Content (3B)
                     ↘ History/Archaeology Content (3A)

Image Metadata (0B) → Alt Text Population (3D)
                    → Gallery Page Structure (3A)
                    → Quality Filtering (what if many images are low quality?)
```
**Gap:** No contingency if Phase 0 reveals quality issues

### Payment Provider → Design System
- Stripe/GoCardless widget styling must match design system
- Payment flow UX affects membership page design
- **Gap:** Phase 3C (Forms & Payments) treated as independent from Phase 2A (Design System)

### Legal Audit → Content Publishing
- Privacy policy must exist before any data-collecting forms go live
- Cookie consent required before analytics
- **Gap:** Phase 1E (Legal Audit) runs parallel to content work but its outputs are prerequisites

### Social Feed Embeds → Design
- EmbedSocial/Curator.io styling affects homepage design
- Widget behavior on mobile affects layout decisions
- **Gap:** Platform selection (Phase 2) should inform design, but design is Phase 2A and platform is 2B

---

## 3. Stakeholders Who Should Be Involved But Aren't Mentioned

### City of London Corporation
- **Current mention:** Sidebar mentions relationship exists
- **Gap:** No engagement plan for:
  - Logo/branding approval
  - Content verification (especially archaeology/conservation)
  - Link to their visitor pages
  - Coordination on Nature Trail maintenance

### Community Partner Organizations
- **Listed in EVOLVED-STRATEGY.md but no engagement plan:**
  - Croydon Voluntary Action
  - Croydon BME Forum
  - Asian Resource Centre
  - Croydon Ramblers
- **Gap:** When are they contacted? Who owns these relationships?

### Existing Members (50-100)
- **No communication plan for:**
  - Announcing new website
  - Explaining membership tier changes (£5 → £10/£25/£50)
  - Grandfather clause messaging
  - How to update payment methods

### Technical Successor/Backup Maintainer
- **Mentioned:** "Bus factor of 3" as goal
- **Gap:** No plan to identify and onboard these people during project
- **Risk:** Project creates single point of failure it's trying to solve

### Roger McGough CBE (Celebrity Narrator)
- **Current:** His narration is a key asset
- **Gap:** No mention of:
  - Permission for new platform (podcast distribution)
  - Credit requirements for new site
  - Whether he's aware of/supports the project

---

## 4. Risks Not Addressed

### Technical Risks

| Risk | Likelihood | Impact | Status |
|------|------------|--------|--------|
| PDF conversion produces garbage text (scanned PDFs) | Medium | High | NOT ADDRESSED |
| Audio files are corrupted/missing | Low | High | Partially (1C audit) |
| Legacy site goes down during project | Low | High | NOT ADDRESSED |
| GitHub Pages hits bandwidth limits (508MB audio) | Low | Medium | Addressed (podcast hosting) |
| Social feed embed provider changes terms | Medium | Medium | NOT ADDRESSED |

### Organizational Risks

| Risk | Likelihood | Impact | Status |
|------|------------|--------|--------|
| Key committee member unavailable during critical phase | Medium | High | NOT ADDRESSED |
| Volunteer maintainer burns out | Medium | High | Mentioned but no mitigation |
| Scope creep from committee requests | High | Medium | NOT ADDRESSED |
| Launch timing conflicts with events/busy season | Medium | Low | NOT ADDRESSED |

### Content Risks

| Risk | Likelihood | Impact | Status |
|------|------------|--------|--------|
| Copyright issues with historical photos | Medium | High | Mentioned in GAPS-AND-LIMITATIONS.md |
| Outdated safety information (Lyme disease, etc.) | Medium | High | NOT ADDRESSED |
| Broken external links in migrated content | High | Low | NOT ADDRESSED |
| Duplicate/conflicting information across pages | Medium | Medium | NOT ADDRESSED |

### Relationship Risks

| Risk | Likelihood | Impact | Status |
|------|------------|--------|--------|
| Members unhappy with price increase | Medium | High | NOT ADDRESSED |
| Younger audience still doesn't engage | Medium | Medium | NOT ADDRESSED (analytics strategy exists) |
| City of London objects to content | Low | High | NOT ADDRESSED |

---

## 5. Documentation Gaps

### Missing Documents/Sections

1. **Redirect Map (old URL → new URL)**
   - Every legacy page should map to new location or explicit "not migrated"

2. **Content Style Guide**
   - Tone of voice
   - Terminology (conservation vs. rewilding, etc.)
   - Image standards (minimum resolution, format, naming)

3. **Rollback Playbook**
   - When to rollback
   - How to rollback
   - Who decides

4. **Post-Launch Runbook**
   - First 24 hours monitoring
   - Common issue responses
   - Escalation path

5. **Committee Onboarding Guide**
   - How to make basic updates
   - How to upload photos
   - How to update events

---

## Summary: Top 10 Gaps by Priority

| Priority | Gap | Phase Affected |
|----------|-----|----------------|
| 1 | No content approval workflow | All |
| 2 | Missing redirect map | 4C (Launch) |
| 3 | Member communication plan for pricing changes | 4C |
| 4 | PDF quality contingency (what if scanned?) | 0A |
| 5 | City of London engagement | 3A |
| 6 | Technical successor identification | 2-4 |
| 7 | Scope control mechanism | All |
| 8 | External link validation | 3D |
| 9 | Accessibility testing process | 4A |
| 10 | Content freeze date | Pre-Phase 1 |

---

*Generated: 2025-12-08*
