# Quality & Success: What Could Go Wrong?

**Prompt Used:** "For each phase, what are the most likely failure modes? What's our mitigation or rollback plan for each?"

---

## Phase 0: Asset Preparation

### Failure Mode 0A.1: PDFs Are Scanned Images, Not Text
**Likelihood:** Medium (30-40%)
**Impact:** High - conversion produces garbage or nothing
**Symptoms:**
- Extracted text is gibberish
- Word count is 0 or very low
- Output is mostly OCR errors

**Mitigation:**
1. Test 5 PDFs from different categories before full conversion
2. If scanned: Use OCR tool (Tesseract, Adobe) first
3. If OCR quality is poor: Flag for manual transcription

**Rollback:**
- Keep original PDFs accessible
- Create INDEX.md with descriptions instead of full conversion

---

### Failure Mode 0A.2: PDF Content Is Outdated/Incorrect
**Likelihood:** Medium
**Impact:** Medium - migrated content has errors
**Symptoms:**
- Factual errors (old dates, wrong names)
- Outdated safety information
- Broken internal references

**Mitigation:**
1. Add "Content verified: [date]" field to frontmatter
2. Flag documents older than 5 years for review
3. Safety content gets mandatory human review

**Rollback:**
- Link to original PDF with "original document" disclaimer

---

### Failure Mode 0B.1: Image Quality Is Too Low for Web
**Likelihood:** Medium
**Impact:** Medium - gallery looks unprofessional
**Symptoms:**
- Images are < 800px wide
- Heavy compression artifacts
- Blurry or poorly composed

**Mitigation:**
1. Define minimum quality criteria (1200px wide, no visible artifacts)
2. Flag low-quality images in REVIEW-NEEDED.json
3. Plan to request higher-resolution originals from photographers

**Rollback:**
- Use only hero images (10-20 best) for MVP
- Defer gallery to v2

---

### Failure Mode 0B.2: Alt Text Suggestions Are Inaccurate
**Likelihood:** Low-Medium
**Impact:** Low - accessibility but not critical
**Symptoms:**
- Species misidentified
- Location incorrect
- Context wrong

**Mitigation:**
1. Mark all alt text as "suggested" requiring human verification
2. Prioritize verification for homepage/gallery images
3. Use generic descriptions when uncertain ("Wildflower in meadow")

**Rollback:**
- Use generic alt text ("Photo of Farthing Downs")

---

## Phase 1: Content Extraction

### Failure Mode 1A.1: Legacy HTML Is Unparseable
**Likelihood:** Low-Medium (old HTML is often messy)
**Impact:** High - can't extract content
**Symptoms:**
- Malformed HTML
- Mixed encodings
- Nested tables breaking structure

**Mitigation:**
1. Use robust HTML parser (BeautifulSoup-style)
2. Extract text content even if structure is lost
3. Manual extraction for most important pages

**Rollback:**
- Copy-paste content manually for 10 most critical pages

---

### Failure Mode 1A.2: Content Is Duplicated Across Pages
**Likelihood:** High (observed in site structure)
**Impact:** Medium - extra work, potential inconsistency
**Symptoms:**
- Same text appears on multiple pages
- Version conflicts (which is canonical?)
- `*-copy*.html` files exist

**Mitigation:**
1. Identify canonical version during extraction
2. Create single source of truth, reference from other pages
3. Delete duplicate legacy files from inventory

**Rollback:**
- Pick one version arbitrarily, note in frontmatter

---

### Failure Mode 1C.1: Audio Files Are Corrupted/Missing
**Likelihood:** Low
**Impact:** High - Nature Trail is key asset
**Symptoms:**
- MP3 won't play
- File is truncated
- Wrong content in file

**Mitigation:**
1. Verify all 122 files play correctly (human testing)
2. Compare file sizes against expected durations
3. Maintain backup of all audio

**Rollback:**
- Link to existing hosting (if still accessible)
- Mark affected stops as "audio coming soon"

---

### Failure Mode 1E.1: Domain Registrar Access Lost
**Likelihood:** Low-Medium (long-running orgs often have this issue)
**Impact:** Critical - cannot launch on new domain
**Symptoms:**
- No one knows login credentials
- Registered to departed member
- Registrar company no longer exists

**Mitigation:**
1. Confirm access BEFORE any other work
2. Document all credentials in password manager
3. Transfer to organization account if personal

**Rollback:**
- Register new domain (abandon old)
- Set up redirect from old if access eventually recovered

---

## Phase 2: Platform Setup

### Failure Mode 2A.1: Design Doesn't Work on Mobile
**Likelihood:** Medium
**Impact:** High - defeats primary objective
**Symptoms:**
- Text too small
- Buttons un-tappable
- Layout breaks

**Mitigation:**
1. Mobile-first CSS approach
2. Test on real devices (not just browser DevTools)
3. Use established responsive patterns

**Rollback:**
- Use minimal CSS (readable but plain)
- Fix in subsequent release

---

### Failure Mode 2B.1: GitHub Workflow Too Complex
**Likelihood:** Medium
**Impact:** High - committee can't maintain site
**Symptoms:**
- Merge conflicts confuse users
- Preview process unclear
- Changes don't appear

**Mitigation:**
1. Detailed CONTRIBUTING.md with screenshots
2. Video walkthrough for common tasks
3. Single-branch workflow (no PRs for simple edits)

**Rollback:**
- Switch to Netlify CMS or similar visual editor
- Accept single maintainer model short-term

---

## Phase 3: Migration

### Failure Mode 3A.1: Content Approval Bottleneck
**Likelihood:** High
**Impact:** High - launch delays
**Symptoms:**
- Pages waiting for review
- Conflicting feedback from committee members
- No response to review requests

**Mitigation:**
1. Designate single content approver
2. Set 48-hour response SLA
3. "Silence = approval" for non-critical content

**Rollback:**
- Launch with reduced content
- Add approved content post-launch

---

### Failure Mode 3C.1: Payment Integration Fails
**Likelihood:** Low-Medium
**Impact:** Critical - primary goal blocked
**Symptoms:**
- Stripe account not approved
- Test payments fail
- Live payments don't work

**Mitigation:**
1. Start Stripe signup immediately (longest lead time)
2. Thorough sandbox testing
3. Have backup provider identified (GoCardless, PayPal)

**Rollback:**
- Launch with "Contact us to join" while fixing
- Link to third-party payment page

---

### Failure Mode 3C.2: Forms Don't Deliver Emails
**Likelihood:** Medium
**Impact:** Medium - lose inquiries
**Symptoms:**
- Submissions silently fail
- Emails go to spam
- Wrong recipient

**Mitigation:**
1. Use established form service (Formspree, Netlify Forms)
2. Test with multiple email providers
3. Set up confirmation email to submitter

**Rollback:**
- Display email address directly (with spam protection)
- Monitor form service dashboard

---

## Phase 4: Testing & Launch

### Failure Mode 4C.1: DNS Change Breaks Email
**Likelihood:** Medium
**Impact:** Critical - organization loses email
**Symptoms:**
- Email stops working immediately after DNS change
- Bounce messages for incoming mail
- Cannot send from @domain address

**Mitigation:**
1. Document email setup BEFORE any DNS changes
2. Add MX records if email hosted separately
3. Test email immediately after DNS change

**Rollback:**
- Revert DNS changes immediately
- Investigate email hosting separately

---

### Failure Mode 4C.2: Old URLs Return 404s
**Likelihood:** Medium-High
**Impact:** Medium - SEO damage, user frustration
**Symptoms:**
- Google shows old URLs, they're broken
- Bookmarked pages don't work
- External links from other sites break

**Mitigation:**
1. Create comprehensive redirect map
2. Implement 301 redirects for all old URLs
3. Set up 404 page with search/navigation

**Rollback:**
- Create catch-all redirect to homepage
- Add proper redirects incrementally

---

### Failure Mode 4D.1: Primary Maintainer Unavailable
**Likelihood:** Medium (over 12 months)
**Impact:** Critical - site becomes unmaintainable
**Symptoms:**
- No one can make updates
- Security issues unaddressed
- Content goes stale

**Mitigation:**
1. Bus factor of 3: train 2 additional maintainers
2. Document everything in CONTRIBUTING.md
3. Use organizational (not personal) accounts

**Rollback:**
- Committee posts on local tech groups for help
- Consider paid support contract

---

## Post-Launch Failure Modes

### Failure Mode POST.1: Traffic Doesn't Increase
**Likelihood:** Medium
**Impact:** Medium - strategy questioned
**Symptoms:**
- Analytics show < 100 visitors/month after 30 days
- No new member signups
- Committee loses enthusiasm

**Mitigation:**
1. Set realistic expectations (growth takes time)
2. Plan active promotion (social, local press)
3. Komoot/Google review campaigns

**Rollback:**
- Review SEO, improve meta tags
- Consider paid advertising boost

---

### Failure Mode POST.2: Existing Members Don't Renew at New Prices
**Likelihood:** Medium
**Impact:** High - revenue decreases
**Symptoms:**
- Renewal rate drops significantly
- Complaints about price increase
- Members request old price

**Mitigation:**
1. Grandfather existing members at £5 for first year
2. Clear communication about value added
3. Offer concession rate for those on Universal Credit

**Rollback:**
- Maintain "Friend" tier at £10 (minimal increase)
- Survey lapsed members

---

### Failure Mode POST.3: Social Media Effort Unsustained
**Likelihood:** High
**Impact:** Medium - youth engagement doesn't materialize
**Symptoms:**
- Instagram posting stops after initial burst
- No Reels created
- Engagement drops

**Mitigation:**
1. Assign specific person responsible for social
2. Create content calendar with minimal commitment (3 posts/week)
3. Use scheduling tools (Buffer, Later)

**Rollback:**
- Reduce to 1 post/week minimum
- Focus on Facebook (existing audience)

---

## Emergency Response Procedures

### Site Down
1. Check UptimeRobot alert
2. Check GitHub Pages status
3. Check DNS resolution
4. If hosting issue: Contact GitHub support
5. If DNS issue: Contact registrar
6. If code issue: Rollback to last working commit

### Payment Not Working
1. Check Stripe dashboard for errors
2. Test with known-good card
3. Check webhook endpoints
4. Contact Stripe support with error details
5. Fallback: Direct bank transfer instructions

### Security Issue
1. Take site offline if active attack
2. Review recent commits for malicious code
3. Reset all credentials
4. Restore from known-good backup
5. Document and learn

---

## Rollback Decision Matrix

| Severity | Example | Decision | Who Decides |
|----------|---------|----------|-------------|
| Critical | Site down, payments broken | Rollback immediately | Any maintainer |
| High | Major feature broken | Rollback within 4 hours | Technical maintainer |
| Medium | Visual bug, minor feature | Fix forward | Technical maintainer |
| Low | Typo, style issue | Fix forward | Any contributor |

---

*Generated: 2025-12-08*
