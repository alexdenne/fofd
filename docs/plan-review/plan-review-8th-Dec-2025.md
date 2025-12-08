# FoFD Website Project: Plan Review

**Date:** 8th December 2025
**Reviewer:** AI-assisted analysis
**Documents Reviewed:**
- EVOLVED-STRATEGY.md (v2.0)
- MIGRATION-PLAN.md (v1.0)
- WEBSITE_STRATEGY.md (v1.0)
- GAPS-AND-LIMITATIONS.md
- 14 deep research documents

---

## Executive Summary

The FoFD website migration project has **exceptionally thorough planning documents** that demonstrate deep research and strategic thinking. The EVOLVED-STRATEGY.md in particular shows sophisticated understanding of community-first digital transformation.

However, this review identifies **significant execution risks** that could derail the project despite excellent planning. The primary concerns are:

1. **Resource assumptions are untested** - The plan assumes technical volunteers will emerge, but none are identified
2. **Critical blockers remain unresolved** - Domain name, payment provider, and email setup are prerequisites but not started
3. **Scope may exceed capacity** - The 5-phase plan is comprehensive but may be too ambitious for volunteer execution
4. **Success depends on sustained content creation** - Social media and newsletter plans require ongoing effort not yet resourced

**Recommendation:** Consider an MVP approach that validates core assumptions before committing to the full plan.

---

## What the Plan Gets Right

### Strengths

1. **Research-grounded strategy**
   - 14 deep research studies inform recommendations
   - Comparator analysis (Friends of Richmond Park, etc.) provides benchmarks
   - Youth engagement tactics are specific and actionable

2. **Clear prioritization of online payments**
   - Primary blocker correctly identified (cheques/standing orders = friction)
   - Tiered membership pricing is market-aligned
   - Payment flow is mapped

3. **Realistic platform choice**
   - GitHub Pages avoids hosting costs
   - Two-track contribution model (technical + content curators) is clever
   - "Bus factor of 3" goal addresses sustainability

4. **Valuable asset recognition**
   - Nature Trail audio (122 MP3s, celebrity narrator) properly valued
   - Multilingual content preserved
   - Photo archive inventoried

5. **Measurement framework defined**
   - 5-number quarterly report card is actionable
   - Success metrics are specific and measurable
   - Baseline established (~16 visits/month, 50-100 members)

---

## What Needs Attention

### Critical Gaps (Must Address Before Proceeding)

| Gap | Impact | Documented In |
|-----|--------|---------------|
| Domain name not decided | Blocks hosting, email, branding | 04-critical-path.md |
| Payment provider not started | Blocks primary goal | 04-critical-path.md |
| Email situation unknown | Risk of breaking email at launch | 01-whats-missing.md |
| Content approver not designated | Approval bottleneck inevitable | 01-whats-missing.md |
| No technical volunteer identified | Single point of failure | 02-challenge-assumptions.md |

### High-Risk Assumptions

| Assumption | Risk | Validation Needed |
|------------|------|-------------------|
| Gen Y volunteers will emerge | No specific individuals identified | Active recruitment before relying on this |
| Content creation capacity exists | No one assigned to write/post | Capacity audit |
| Tiered pricing won't lose members | No member feedback gathered | Survey existing members |
| 60x traffic increase achievable | Requires sustained SEO + promotion | Realistic expectations |

### Missing Documentation

1. **Redirect map** (old URLs → new URLs)
2. **Content style guide**
3. **Rollback playbook**
4. **Post-launch runbook**
5. **Member communication plan** (for price changes)

---

## Recommended Plan Updates

### Immediate Actions (Before Any Other Work)

These are blockers that should be resolved before Phase 0:

```markdown
## Pre-Phase 0: Unblock Critical Path

### Week of December 9-15

1. **DOMAIN:** Send email to committee requesting domain decision
   - Present options with pros/cons
   - Set deadline for response

2. **PAYMENT:** Treasurer starts Stripe account creation
   - Organization details ready
   - Bank account access available
   - Identity verification can take 3-5 days

3. **EMAIL:** Confirm email situation
   - Is @friendsoffarthingdowns.co.uk used?
   - If yes, where hosted?
   - Document for DNS planning

4. **APPROVER:** Committee designates content approver
   - One person with authority to say "yes"
   - Define what needs full committee vote

5. **MAINTAINER:** Identify at least one backup technical person
   - Not for immediate work
   - For emergency access and knowledge transfer
```

### Proposed MVP Approach

Rather than executing the full 5-phase plan, consider:

#### MVP Scope (5 pages, 5 weeks)

| Page | Purpose |
|------|---------|
| Homepage | Hero, mission, 3 cards |
| Visit | Getting here, top walks |
| Join | Membership + payments |
| About | Committee, contact |
| Nature Trail | Landing page, audio links |

#### MVP Success Criteria

- [ ] 10+ online memberships in first 30 days
- [ ] Site works on mobile
- [ ] Committee member successfully makes an edit

#### Post-MVP Decision Point

If MVP succeeds → Execute full plan with confidence
If MVP struggles → Diagnose issues before investing more

### Phase 0 Refinement

Before full Phase 0, run sample batch:

```markdown
## Phase 0-Lite: Sample Batch (1 day)

1. Convert 10 representative PDFs
2. Generate metadata for 10 images
3. Human reviews output quality
4. Calibrate quality criteria
5. Estimate time for full batch
6. Proceed or adjust approach
```

See: `09-sample-batch-recommendation.md` for details.

### Add Pre-Mortem Tasks

New tasks to add to Phase 1:

```markdown
## Stream 1-NEW: Risk Mitigation

- [ ] Create legacy site archive (Wayback Machine snapshot)
- [ ] Export Google Analytics historical data (if exists)
- [ ] Document all current account credentials
- [ ] Test PDF conversion on 10% sample before full batch
- [ ] Confirm Roger McGough usage rights for podcast distribution
```

### Add Post-Launch Tasks

Currently Phase 4 ends at "Handoff." Add:

```markdown
## Stream 4E: First 30 Days (NEW)

- [ ] Daily monitoring check (Week 1)
- [ ] Weekly analytics review
- [ ] First member welcome email review
- [ ] Redirect coverage check (crawl old URLs)
- [ ] Committee feedback session
- [ ] Document lessons learned
```

---

## Risk Mitigation Recommendations

### For Highest-Risk Assumptions

| Assumption | Mitigation |
|------------|------------|
| Technical volunteers will emerge | Post on Croydon tech groups NOW; don't wait for Phase 3 |
| Content creation capacity | Assign specific person to social media before launch |
| Tiered pricing acceptance | Grandfather existing members at £5 for first year |
| Traffic growth | Set realistic 30-day target (100 not 1000); plan active promotion |

### For Critical Dependencies

| Dependency | Mitigation |
|------------|------------|
| Payment provider | Start today; it's the longest lead time |
| Domain registrar access | Confirm access before any DNS planning |
| Primary maintainer | Document everything; identify emergency backup |

---

## Suggested Priority Order

### What to Do First (This Week)

1. Resolve domain decision
2. Start payment provider signup
3. Clarify email setup
4. Designate content approver
5. Run PDF sample batch (10 files)

### What to Do Next (Week 2)

1. Run image sample batch (10 files)
2. Set up local development environment
3. Build homepage draft
4. Create basic CSS framework

### What Can Wait

- Full Phase 0 (do sample first)
- Instagram strategy (after launch)
- Komoot partnership (after site exists)
- Complex Nature Trail interactive features

---

## Questions for Committee

Before proceeding, get clarity on:

1. **Domain:** Which domain name? Who controls the registrar?
2. **Email:** Does anyone use @friendsoffarthingdowns.co.uk email?
3. **Approval:** Who can approve content without full committee vote?
4. **Budget:** Is the £500-2000 budget still current?
5. **Timeline:** Is there a hard deadline (e.g., before AGM)?
6. **Risk tolerance:** MVP first, or full plan from start?
7. **Pricing:** Should we survey members before changing prices?

---

## Supporting Documents

This review is supported by detailed analyses in `/docs/plan-review/`:

| Document | Content |
|----------|---------|
| `01-whats-missing.md` | Gap analysis: missing steps, dependencies, stakeholders, risks |
| `02-challenge-assumptions.md` | Assumption testing: user behavior, technical, resources, timeline |
| `03-mvp-definition.md` | MVP scope definition and deferral list |
| `04-critical-path.md` | Blockers and dependencies analysis |
| `05-actionable-tasks.md` | Concrete, time-boxed task breakdown |
| `06-prerequisites.md` | Prerequisites checklist by phase |
| `07-success-criteria.md` | Measurable success criteria |
| `08-failure-modes.md` | Failure modes and mitigation strategies |
| `09-sample-batch-recommendation.md` | Sample batch specification |
| `10-quality-bar.md` | Quality acceptance criteria |
| `11-reusable-patterns.md` | Templates and automation patterns |

---

## Conclusion

The FoFD project has excellent strategic foundation but needs:

1. **Resolution of immediate blockers** (domain, payments, email)
2. **Validation of key assumptions** (volunteers, content capacity, pricing)
3. **Consideration of MVP approach** to reduce risk
4. **Explicit resource commitments** for ongoing work

The planning is strong. The challenge is execution capacity in a volunteer organization. An MVP approach would validate demand and capability before full commitment.

**Recommended next step:** Resolve the 5 immediate blockers listed above, then make go/no-go decision on MVP vs full plan.

---

## Appendix: Quick Reference

### Key Metrics (Current → Target)

| Metric | Current | 30-Day | 12-Month |
|--------|---------|--------|----------|
| Monthly visitors | ~16 | 100+ | 1,000+ |
| Paying members | 50-100 | +10 | 150-200 |
| Membership revenue | £250-500/yr | — | £1,500-2,500/yr |
| Mobile traffic | ~0% | 50%+ | 60%+ |
| Technical maintainers | 1 | 1 | 3 |

### Key Dates (If Available)

| Milestone | Target |
|-----------|--------|
| Domain decision | ASAP |
| Payment provider ready | +1-2 weeks |
| MVP launch | TBD |
| Full site launch | TBD |
| First post-launch review | Launch + 30 days |

### Key Contacts

| Role | Person | Status |
|------|--------|--------|
| Chair | Graham Lomas | Identified |
| Secretary | Pauline Payne | Identified |
| Treasurer | Ian Payne | Identified |
| Technical Maintainer | [Primary] | Identified |
| Backup Maintainer | TBD | Needed |
| Content Approver | TBD | Needed |
| Social Media Lead | TBD | Needed |

---

*This review is a point-in-time assessment. Update as blockers are resolved and decisions are made.*

*Generated: 8th December 2025*
