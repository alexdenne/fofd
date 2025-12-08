# Gap Analysis: Challenge the Assumptions

**Prompt Used:** "What assumptions does this strategy make about: User behavior and adoption? Technical feasibility? Resource availability? Timeline realism? Which are highest risk if wrong?"

**Documents Reviewed:** EVOLVED-STRATEGY.md, MIGRATION-PLAN.md, WEBSITE_STRATEGY.md

---

## 1. Assumptions About User Behavior and Adoption

### Assumption: "Build it and they will come"
- **What the plan assumes:** Moving from ~16 visits/month to 100+ (30-day) to 1,000+ (12-month) will happen through better SEO, mobile-friendliness, and platform visibility (Komoot, Google Reviews)
- **Evidence in plan:** EVOLVED-STRATEGY.md sets these as targets without detailed traffic acquisition strategy
- **Risk if wrong:** HIGH
- **Challenge:**
  - SEO improvements take 6-12 months to materialize
  - Competition for "walks near Croydon" search is significant
  - Platform listings (Komoot, Visit London) are passive—they don't generate traffic on their own
- **Missing:** Paid advertising budget, content marketing calendar, PR/media strategy

### Assumption: "Tiered pricing won't drive away members"
- **What the plan assumes:** Moving from £5 flat to £10/£25/£50 tiers will increase revenue 4-5x
- **Evidence:** EVOLVED-STRATEGY.md cites comparator organizations charging more
- **Risk if wrong:** HIGH
- **Challenge:**
  - Current members chose £5 consciously—may feel betrayed
  - FoFD&HV competes with free (the downs are public land)
  - No data on current members' willingness to pay more
- **Missing:** Member survey, pricing experiment, clear value proposition for £25 tier

### Assumption: "Instagram Reels will reach young people"
- **What the plan assumes:** 75% of impressions for smaller accounts come from Reels
- **Evidence:** Research cited in EVOLVED-STRATEGY.md
- **Risk if wrong:** MEDIUM
- **Challenge:**
  - Instagram's algorithm changes frequently
  - Creating Reels requires different skills than current committee likely has
  - "Nature content" competes with vast amounts of similar content
- **Missing:** Who will create Reels? What's the content calendar?

### Assumption: "Gen Y volunteers will maintain the site"
- **What the plan assumes:** Technical maintainers aged 26-40 will emerge to manage GitHub Pages
- **Evidence:** Two-track contribution model in EVOLVED-STRATEGY.md
- **Risk if wrong:** HIGH
- **Challenge:**
  - No specific Gen Y individuals identified in the plan
  - Current committee appears to be Gen X+ (Chair, Secretary, Treasurer mentioned)
  - Technical skills (Git, HTML) are specialized
- **Missing:** Specific recruitment plan for technical volunteers

### Assumption: "7 touchpoints will convert followers to members"
- **What the plan assumes:** Systematic nurturing will convert 3,900 Facebook followers to 150-200 members
- **Evidence:** Funnel described in EVOLVED-STRATEGY.md
- **Risk if wrong:** MEDIUM
- **Challenge:**
  - 7 touchpoints requires consistent, long-term effort
  - Who creates and sends these touchpoints?
  - Facebook organic reach continues to decline
- **Missing:** CRM/email automation system, content creation capacity

---

## 2. Assumptions About Technical Feasibility

### Assumption: "GitHub Pages is suitable for non-technical committee"
- **What the plan assumes:** Committee can maintain site via Issues + trained maintainers
- **Evidence:** Two-track model, CONTRIBUTING.md documentation
- **Risk if wrong:** MEDIUM
- **Challenge:**
  - GitHub's interface is developer-focused
  - Even "content curator" track requires GitHub account
  - No visual editor like Wix/Squarespace
- **Mitigation in plan:** Detailed documentation, training
- **Missing:** Plan B if GitHub workflow proves too complex

### Assumption: "PDFs can be converted to markdown automatically"
- **What the plan assumes:** 93 PDFs will convert to structured markdown
- **Evidence:** Phase 0A tasks
- **Risk if wrong:** MEDIUM
- **Challenge:**
  - Many PDFs may be scanned images, not text
  - Layout-heavy documents (maps, brochures) won't convert cleanly
  - Historical documents may have OCR errors
- **Partial mitigation:** "Document map PDFs (cannot convert, create index)"
- **Missing:** Quality assessment before committing to conversion approach

### Assumption: "Social feed embeds will work reliably"
- **What the plan assumes:** Free tier tools (EmbedSocial, Curator.io) will display feeds
- **Evidence:** EVOLVED-STRATEGY.md recommends embedded feeds
- **Risk if wrong:** LOW-MEDIUM
- **Challenge:**
  - Free tiers have limitations (post counts, branding)
  - Platform API changes can break embeds
  - Performance impact on page load
- **Missing:** Fallback if embed tools fail or become too limited

### Assumption: "Static site can handle all requirements"
- **What the plan assumes:** No server-side functionality needed
- **Evidence:** GitHub Pages (static hosting) recommended
- **Risk if wrong:** LOW
- **Challenge:**
  - Forms require external service (Formspree, Netlify Forms, etc.)
  - Search requires client-side solution (Pagefind)
  - Events calendar needs external embed
- **Mostly addressed:** These are noted but specific services not fully evaluated

### Assumption: "508MB of audio can move to podcast hosting"
- **What the plan assumes:** Spotify for Podcasters will host all Nature Trail audio
- **Evidence:** WEBSITE_STRATEGY.md recommends this
- **Risk if wrong:** LOW
- **Challenge:**
  - Spotify has content guidelines (not likely an issue for nature content)
  - 29 episodes × 4 languages = 116 episodes to upload/manage
  - Podcast format may not suit trail-stop-by-stop listening
- **Missing:** Evaluation of whether podcast format matches use case

---

## 3. Assumptions About Resource Availability

### Assumption: "Primary technical maintainer is available for duration"
- **What the plan assumes:** One person will drive technical implementation
- **Evidence:** Multiple references to "you" in GAPS-AND-LIMITATIONS.md
- **Risk if wrong:** HIGH
- **Challenge:**
  - Single point of failure
  - Life events, job changes, burnout
  - No handover plan if maintainer becomes unavailable
- **Partial mitigation:** "Bus factor of 3" goal
- **Missing:** Immediate identification of backup maintainers

### Assumption: "Committee has time for review and approval"
- **What the plan assumes:** Committee members can review designs, content, test payments
- **Evidence:** Human checkpoints throughout plan
- **Risk if wrong:** MEDIUM
- **Challenge:**
  - Committee are volunteers with day jobs
  - Review bottlenecks can stall project
  - Different committee members may disagree
- **Missing:** Estimated time commitment, dedicated review windows

### Assumption: "Budget of £500-£2000 is sufficient"
- **What the plan assumes:** Project can complete within committee-approved budget
- **Evidence:** September 2025 meeting notes
- **Risk if wrong:** LOW (if staying on GitHub Pages)
- **Challenge:**
  - Budget mainly covers domain (~£10/year) if using free hosting
  - Hidden costs: stock photos, premium embed tools, email marketing
  - Opportunity cost of volunteer time not counted
- **Addressed by:** Platform choice (GitHub Pages = free)

### Assumption: "Content creation capacity exists"
- **What the plan assumes:** Someone will:
  - Rewrite 70+ pages of content
  - Create 3-5 Instagram posts per week
  - Write monthly newsletter
  - Maintain events calendar
- **Risk if wrong:** HIGH
- **Challenge:**
  - No content creator identified
  - Current site hasn't been updated significantly in years
  - Social media requires consistent, long-term effort
- **Missing:** Content ownership assignment, capacity assessment

---

## 4. Assumptions About Timeline Realism

### Assumption: "Phase 0 can be parallelized"
- **What the plan assumes:** PDF conversion and image metadata can run simultaneously
- **Evidence:** MIGRATION-PLAN.md shows parallel batch 1
- **Risk if wrong:** LOW
- **Reality:** This is reasonable if done by AI/automation

### Assumption: "Launch can happen soon after Phase 4"
- **What the plan assumes:** Linear progression through phases
- **Risk if wrong:** MEDIUM
- **Challenge:**
  - No calendar dates assigned
  - External dependencies (hosting accounts, payment providers) have variable timelines
  - Committee approval cycles add unknown delays
- **Missing:** Calendar-based timeline with buffer

### Assumption: "Post-launch optimization happens organically"
- **What the plan assumes:** After launch, continuous improvement will occur
- **Evidence:** Phase 3 (Months 7-12) in EVOLVED-STRATEGY.md
- **Risk if wrong:** HIGH
- **Challenge:**
  - Launch often consumes all energy—nothing left for optimization
  - Without metrics/monitoring, won't know what to optimize
  - "Monthly newsletter" requires sustained effort
- **Missing:** Post-launch resourcing plan

---

## 5. Highest Risk Assumptions (Ranked)

| Rank | Assumption | Risk Level | If Wrong... |
|------|------------|------------|-------------|
| 1 | Gen Y technical maintainers will emerge | HIGH | Site becomes unmaintainable, single point of failure persists |
| 2 | Content creation capacity exists | HIGH | Social media stagnates, website content becomes stale |
| 3 | Tiered pricing won't lose members | HIGH | Revenue drops, existing members feel alienated |
| 4 | Traffic will grow 60x (16→1000/month) | HIGH | Investment doesn't pay off, committee loses faith |
| 5 | Primary maintainer available throughout | HIGH | Project stalls or never completes |
| 6 | Committee has review bandwidth | MEDIUM | Delays compound, momentum lost |
| 7 | PDF conversion will work | MEDIUM | Phase 0 takes much longer, content gaps emerge |
| 8 | GitHub workflow suits committee | MEDIUM | Updates become bottlenecked through one person |
| 9 | Instagram Reels strategy works | MEDIUM | Youth engagement doesn't materialize |
| 10 | Static site meets all needs | LOW | May need to add dynamic features later |

---

## Recommended Validation Actions

### Before Committing Further:

1. **Member Survey**
   - Would you pay £10? £25? £50?
   - What benefits matter most?
   - How do you prefer to hear from us?

2. **Technical Volunteer Scout**
   - Reach out to local tech meetups
   - Post on Croydon Tech Facebook groups
   - Contact university computing societies

3. **Content Capacity Audit**
   - Who will write?
   - Who will photograph?
   - Who will post to social media?
   - Realistically, how often?

4. **PDF Quality Check**
   - Sample 10 PDFs across categories
   - Attempt conversion
   - Assess quality before committing to full conversion

5. **Committee Time Commitment**
   - Explicit estimate: "This project needs 2 hours/week from one committee member for reviews"
   - Get buy-in on this commitment

---

*Generated: 2025-12-08*
