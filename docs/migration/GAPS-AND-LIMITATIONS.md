# Project Gaps & Claude Code Limitations

## Part 1: Missing from Current Plan

### Legal & Compliance (HIGH PRIORITY)

| Item | Status | Notes |
|------|--------|-------|
| **GDPR Compliance** | Missing | Need privacy policy page, cookie consent banner |
| **Cookie Policy** | Missing | If using analytics, need consent |
| **Data Retention Policy** | Missing | How long are form submissions kept? |
| **Privacy Policy Page** | Missing | Required for any site collecting data |
| **Terms of Use** | Optional | May want basic terms |

**Action Required:** Add Phase 3 tasks for compliance pages

---

### Email & Communication

| Item | Status | Notes |
|------|--------|-------|
| **Email forwarding** | Not addressed | Do they have @friendsoffarthingdowns.co.uk emails? |
| **Form notification routing** | Partially addressed | Who receives what? Multiple recipients? |
| **Mailing list integration** | Not addressed | Do they have a newsletter? Mailchimp? |
| **Email hosting** | Unknown | If moving hosts, what happens to email? |

**Risk:** Moving hosting could break their email if not handled carefully

---

### Content Gaps

| Item | Status | Notes |
|------|--------|-------|
| **Search functionality** | Not in plan | Current site has none - should new one? |
| **404 error page** | Missing | Need custom error page |
| **Site search** | Missing | Could use Algolia, Pagefind, or simple JS search |
| **RSS feed** | Missing | For events/news - useful for followers |
| **Print stylesheets** | Missing | Nature Trail/maps may be printed |

---

### Technical Infrastructure

| Item | Status | Notes |
|------|--------|-------|
| **Backup strategy** | Not detailed | How often? Where stored? |
| **Monitoring/uptime** | Not addressed | How know if site goes down? |
| **Analytics migration** | Missing | Preserve historical Google Analytics? |
| **Domain email preservation** | Not addressed | Critical if they use domain email |
| **Old site archive** | Mentioned briefly | Full archive on Wayback Machine? |

---

### User Experience

| Item | Status | Notes |
|------|--------|-------|
| **Offline capability** | Not addressed | Nature Trail could work offline (PWA) |
| **Social sharing** | Partially (OG tags) | Share buttons on pages? |
| **Facebook feed widget** | Mentioned in meeting notes | Committee wants this |
| **Image lightbox/gallery** | Not specified | For wildlife photos, fungi gallery |

---

### Content Rights & Attribution

| Item | Status | Notes |
|------|--------|-------|
| **Image ownership** | Unknown | Do they own all photos? |
| **Audio credits** | In Nature Trail credits | Need to preserve attribution |
| **PDF sources** | Unknown | Any third-party documents? |
| **Map licensing** | Unknown | Google Maps embed has terms |

---

### Stakeholder & Process

| Item | Status | Notes |
|------|--------|-------|
| **Committee approval gates** | Implicit | Should be explicit checkpoints |
| **Content freeze dates** | Not defined | When to stop accepting changes |
| **Rollback decision criteria** | Basic | Need clearer triggers |
| **Post-launch support SLA** | Vague | How quickly to respond to issues? |

---

## Part 2: Claude Code Technical Limitations

### What I CANNOT Do

| Limitation | Impact | Workaround |
|------------|--------|------------|
| **Cannot see rendered UI** | Can't verify visual design works | You need to screenshot and share, or describe what you see |
| **Cannot listen to audio** | Can't verify MP3s play correctly | You need to test audio files manually |
| **Cannot browse websites** | Can't test the live site | You need to test in browser and report back |
| **Cannot run GUI apps** | No Figma, browser DevTools, etc. | Work with code/text only |
| **Cannot make external API calls** | Can't set up Netlify/Stripe accounts | You need to create accounts, I'll configure |
| **Cannot send emails** | Can't test form email delivery | You need to test form submissions |
| **Cannot process payments** | Can't verify Stripe/PayPal works | You need to test in sandbox mode |
| **Cannot attend meetings** | Can't present to committee | You relay feedback to me |
| **Cannot access authenticated systems** | Can't log into hosting panel | You handle DNS/hosting changes |
| **Cannot make phone calls** | Can't contact providers | You handle external communication |
| **Context window limits** | Very large files need chunking | Break work into smaller pieces |
| **No persistent memory** | Fresh start each session | Good documentation essential |

### What I CAN Do Well

| Capability | How It Helps |
|------------|--------------|
| Write HTML/CSS/JS | Build all the code |
| Write configuration files | Set up build tools, hosting config |
| Process and transform content | Extract content from legacy HTML |
| Create documentation | Write guides, READMEs |
| Debug code from error messages | Fix issues you report |
| Generate repetitive content | Create 116 Nature Trail pages efficiently |
| Write scripts | Automate content extraction |
| Review and improve code | Refactor, optimize |
| Analyze files | Audit existing codebase |

### Critical Handoff Points (YOU Must Do)

```
Phase 1:
  └─ [ ] Verify extracted content is accurate (read the markdown)

Phase 2:
  └─ [ ] Create Netlify/hosting account
  └─ [ ] Create GitHub repository (if new)
  └─ [ ] Review design mockups/wireframes I describe
  └─ [ ] Test dev server in your browser

Phase 3:
  └─ [ ] View pages in browser and report issues
  └─ [ ] Test all audio playback
  └─ [ ] Test forms (submit and check email)
  └─ [ ] Set up payment provider sandbox
  └─ [ ] Test payment flow

Phase 4:
  └─ [ ] Conduct browser testing
  └─ [ ] Run accessibility tools (WAVE, Lighthouse)
  └─ [ ] Present to committee
  └─ [ ] Handle DNS changes
  └─ [ ] Transfer credentials
```

---

## Part 3: Revised Task Additions

### Add to Phase 1

```markdown
## Stream 1E: Legal & Compliance Prep (NEW)

- [ ] **1E.01** Identify what data is collected (forms)
- [ ] **1E.02** Document data flow (who receives form submissions)
- [ ] **1E.03** Check for existing privacy policy
- [ ] **1E.04** Draft privacy policy requirements
- [ ] **1E.05** Identify cookie usage needs (analytics)
```

### Add to Phase 2

```markdown
## Stream 2C: Infrastructure Planning (NEW)

- [ ] **2C.01** Confirm domain registrar access
- [ ] **2C.02** Document current email setup (@domain emails?)
- [ ] **2C.03** Plan email preservation strategy
- [ ] **2C.04** Set up uptime monitoring (UptimeRobot - free)
- [ ] **2C.05** Plan backup strategy (Git + hosting backups)
```

### Add to Phase 3

```markdown
## Additional 3A Tasks

- [ ] **3A.XX** Create privacy policy page
- [ ] **3A.XX** Create cookie consent banner
- [ ] **3A.XX** Create 404 error page
- [ ] **3A.XX** Implement Facebook feed widget
- [ ] **3A.XX** Add image lightbox for galleries
- [ ] **3A.XX** Implement site search (Pagefind recommended)

## Additional 3B Tasks

- [ ] **3B.XX** Consider PWA/offline for Nature Trail
- [ ] **3B.XX** Add print stylesheet for trail pages
```

---

## Part 4: Communication Protocol

Since I can't see the UI, we need a clear feedback loop:

### When You Test, Report Back With:

```markdown
## Test Report: [Page/Feature Name]

**Browser:** Chrome 120 / Safari 17 / etc.
**Device:** Desktop / Mobile (iPhone 14) / etc.

### What Works:
- [ ] Page loads
- [ ] Navigation works
- [ ] Images display
- [ ] etc.

### Issues Found:
1. **Issue:** [Description]
   **Expected:** [What should happen]
   **Actual:** [What actually happens]
   **Screenshot:** [If possible]

2. ...
```

### When Describing Design Issues:

- "The button is too small" → "The button is 20px tall, should be at least 44px"
- "Colors look wrong" → "The orange looks more red, hex showing as #FF6600"
- "Layout is broken" → "The sidebar is below the content instead of beside it"

---

## Part 5: Risk Register (NEW)

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Email breaks during migration | Medium | High | Confirm email setup BEFORE DNS change |
| Committee slow to approve | Medium | Medium | Set clear deadlines, async approval |
| Audio files corrupted | Low | High | Test ALL files before launch |
| Payment provider issues | Medium | Medium | Test thoroughly in sandbox |
| DNS propagation delays launch | Low | Low | Launch during low-traffic period |
| Historical analytics lost | Medium | Low | Export GA data before any changes |
| I lose context (session ends) | High | Medium | Keep task lists updated, good commits |

---

## Recommended Process Update

### Before Each Work Session

1. I read the relevant task list
2. You tell me what's been done since last session
3. We identify next tasks
4. I work, you test what I can't

### After Each Work Session

1. I update task lists with progress
2. I commit with detailed messages
3. You verify the work in browser
4. Document any issues for next session

---

*This document should be reviewed and updated as we discover more gaps*
