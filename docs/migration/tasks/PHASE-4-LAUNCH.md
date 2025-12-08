# Phase 4: Testing & Launch

**Status:** Blocked
**Parallel Streams:** Sequential (must be in order)
**Dependencies:** Phase 3 must be complete
**Target:** January parallel go-live (per committee meeting notes)

---

## Overview

Final testing, staging deployment, committee approval, and production launch with handoff documentation.

---

## Prerequisites

Before starting Phase 4, verify:

- [ ] **Phase 3 Complete:** All pages built, forms working, payments tested
- [ ] **Committee Preview:** Initial feedback incorporated
- [ ] **Content Freeze:** No more major content changes expected

---

## Stream 4A: Testing

**Goal:** Comprehensive testing before public launch

### Tasks

#### Functional Testing
- [ ] **4A.01** Test all internal links (no 404s)
- [ ] **4A.02** Test all external links
- [ ] **4A.03** Test all PDF downloads
- [ ] **4A.04** Test all audio file playback
- [ ] **4A.05** Test contact form submission
- [ ] **4A.06** Test membership form submission
- [ ] **4A.07** Test donation/payment flow

#### Cross-Browser Testing
- [ ] **4A.08** Test on Chrome (desktop + mobile)
- [ ] **4A.09** Test on Safari (desktop + mobile)
- [ ] **4A.10** Test on Firefox
- [ ] **4A.11** Test on Edge
- [ ] **4A.12** Test on actual mobile devices (not just emulator)

#### Accessibility Testing
- [ ] **4A.13** Run WAVE accessibility checker
- [ ] **4A.14** Run aXe accessibility checker
- [ ] **4A.15** Test with keyboard only (no mouse)
- [ ] **4A.16** Test with screen reader (NVDA or VoiceOver)

#### Performance Testing
- [ ] **4A.17** Run Google Lighthouse audit
- [ ] **4A.18** Run PageSpeed Insights
- [ ] **4A.19** Test on slow 3G connection
- [ ] **4A.20** Verify all Core Web Vitals pass

#### Content Review
- [ ] **4A.21** Final proofread by committee member
- [ ] **4A.22** Verify all dates/events are current
- [ ] **4A.23** Verify contact information is correct
- [ ] **4A.24** Verify membership fees are correct

**Stream 4A Total:** 24 tasks

---

## Stream 4B: Staging & Approval

**Goal:** Deploy to staging for committee review and sign-off

### Tasks

#### Staging Deployment
- [ ] **4B.01** Deploy to staging URL (e.g., staging.friendsoffarthingdowns.co.uk)
- [ ] **4B.02** Password protect staging (optional)
- [ ] **4B.03** Send staging link to committee

#### Committee Review
- [ ] **4B.04** Schedule review meeting with committee
- [ ] **4B.05** Walk through all pages in meeting
- [ ] **4B.06** Demonstrate Nature Trail functionality
- [ ] **4B.07** Demonstrate form submissions
- [ ] **4B.08** Demonstrate CMS editing (if applicable)
- [ ] **4B.09** Collect feedback and create issue list
- [ ] **4B.10** Implement required changes
- [ ] **4B.11** Re-review with committee

#### Sign-off
- [ ] **4B.12** Obtain written approval from Chairman
- [ ] **4B.13** Confirm launch date with committee
- [ ] **4B.14** Document any post-launch items

**Stream 4B Total:** 14 tasks

---

## Stream 4C: Production Launch

**Goal:** Switch over to new website

### Tasks

#### Pre-Launch
- [ ] **4C.01** Create backup of old website
- [ ] **4C.02** Document old hosting details for reference
- [ ] **4C.03** Set up Google Analytics on new site
- [ ] **4C.04** Set up Google Search Console
- [ ] **4C.05** Submit new sitemap to Google

#### DNS & Domain
- [ ] **4C.06** Obtain domain credentials from current host
- [ ] **4C.07** Plan DNS cutover (minimal downtime)
- [ ] **4C.08** Update DNS to point to new hosting
- [ ] **4C.09** Verify SSL certificate active
- [ ] **4C.10** Test www and non-www both work

#### Redirects
- [ ] **4C.11** Create redirect map (old URLs → new URLs)
- [ ] **4C.12** Implement 301 redirects for all changed URLs:
  - `gpage1.html` → `/getting-there/`
  - `gpage2.html` → `/events/`
  - etc.
- [ ] **4C.13** Test all redirects work

#### Post-Launch Verification
- [ ] **4C.14** Verify site loads on production domain
- [ ] **4C.15** Test forms work in production
- [ ] **4C.16** Test payments work in production
- [ ] **4C.17** Monitor for errors (check hosting logs)
- [ ] **4C.18** Announce launch on Facebook

**Stream 4C Total:** 18 tasks

---

## Stream 4D: Handoff & Documentation

**Goal:** Transfer knowledge to committee for ongoing maintenance

### Tasks

#### Documentation
- [ ] **4D.01** Create `/docs/guides/` directory
- [ ] **4D.02** Write "How to Edit Content" guide
- [ ] **4D.03** Write "How to Add Events" guide
- [ ] **4D.04** Write "How to Add AGM Reports" guide
- [ ] **4D.05** Write "How to Update Committee Info" guide
- [ ] **4D.06** Write "How to Check Form Submissions" guide
- [ ] **4D.07** Document hosting account access
- [ ] **4D.08** Document payment account access

#### Training
- [ ] **4D.09** Schedule training session with committee
- [ ] **4D.10** Demonstrate content editing workflow
- [ ] **4D.11** Demonstrate form submission retrieval
- [ ] **4D.12** Answer questions and document FAQs

#### Handover
- [ ] **4D.13** Transfer all account credentials securely
- [ ] **4D.14** Set up committee members as admins
- [ ] **4D.15** Confirm committee can edit independently
- [ ] **4D.16** Provide emergency contact for issues

**Stream 4D Total:** 16 tasks

---

## Phase 4 Completion Checklist

- [ ] All functional tests passed
- [ ] All browsers tested
- [ ] Accessibility audit passed
- [ ] Performance audit passed
- [ ] Committee approved staging
- [ ] DNS transferred
- [ ] Site live on production domain
- [ ] All redirects working
- [ ] Analytics tracking
- [ ] Documentation complete
- [ ] Committee trained
- [ ] Old hosting can be cancelled

---

## Launch Day Checklist

```markdown
## Launch Day: [DATE]

### Before Launch (Morning)
- [ ] Final backup of old site
- [ ] Confirm committee available for testing
- [ ] Prepare rollback plan

### DNS Cutover
- [ ] Update DNS records (Time: _______)
- [ ] Wait for propagation (up to 48 hours, usually faster)
- [ ] Test from multiple networks

### Verification (Every 30 min for first 2 hours)
- [ ] Homepage loads
- [ ] Forms submit
- [ ] Audio plays
- [ ] No console errors

### Communication
- [ ] Notify committee of successful launch
- [ ] Post on Facebook
- [ ] Send to mailing list (if applicable)

### Monitoring (Next 7 days)
- [ ] Check form submissions daily
- [ ] Monitor analytics
- [ ] Watch for error reports
- [ ] Be available for quick fixes
```

---

## Rollback Plan

If critical issues discovered post-launch:

1. **Immediate (< 1 hour):** Revert DNS to old hosting
2. **Short-term (< 24 hours):** Fix issue, redeploy
3. **Documentation:** Record what went wrong for future

---

## Post-Launch Support Period

Recommend 2-4 weeks of availability after launch for:
- Bug fixes
- Content questions
- "How do I..." queries
- Any issues discovered by visitors

---

## Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Page Load Time | < 3 seconds | Lighthouse |
| Mobile Usability | 100% | Google Search Console |
| Accessibility | 0 errors | WAVE/aXe |
| Uptime | > 99.9% | Hosting dashboard |
| Form Success Rate | > 95% | Analytics |

---

*Total Phase 4 Tasks: 24 (some tasks overlap/consolidate across streams)*
