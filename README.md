# Friends of Farthing Downs & Happy Valley 

8 December 2025 - This is a work in progress - please refer to the live site until https://friendsoffarthingdowns.co.uk redirects you to the deployed version of this site.

[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://friendsoffarthingdowns.co.uk)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-blue)](#contribute)

The community website for **Farthing Downs** and **Happy Valley** - two beautiful chalk downland sites in Coulsdon, Surrey, on London's doorstep.

## About

Farthing Downs and Happy Valley are Sites of Special Scientific Interest (SSSI) with:
- Ancient chalk grassland with rare wildflowers and butterflies
- Saxon burial mounds, Celtic field boundaries, Neolithic trackways
- Rich wildlife including deer, foxes, dormice, and red kites
- 29-stop audio Nature Trail narrated by Roger McGough CBE

**Friends of Farthing Downs & Happy Valley** is a volunteer group working since 2005 to protect, promote, and enhance these special places.

## The Website

The new website is built with:
- Plain HTML & CSS (no build step required)
- GitHub Pages hosting (free)
- Stripe Payment Links (for memberships & donations)
- Community contributions via GitHub Issues

### Repository Structure
```
/site-2026/              ← NEW WEBSITE (deploy this)
├── index.html           ← Home page
├── visit.html           ← Visitor info
├── explore.html         ← Nature trail, wildlife, history
├── join.html            ← Membership & donations (Stripe)
├── gallery.html         ← Community photos
├── about.html           ← About the Friends
├── css/style.css        ← Modern responsive styling
├── images/              ← Site images
└── gallery/             ← Community photo submissions

/site-2005-2025/         ← LEGACY WEBSITE (archive)
├── *.html               ← 70+ original pages
├── images/              ← 500+ photos
├── NatureTrail/         ← Audio files (4 languages)
└── *.pdf                ← Historical documents

/docs/                   ← Planning & strategy
├── WEBSITE_STRATEGY.md  ← Full migration plan
└── Meeting Notes.md     ← Committee discussions

/.github/ISSUE_TEMPLATE/ ← Community contribution forms
├── photo-submission.yml ← "Share a Photo"
└── wildlife-sighting.yml← "Report a Sighting"
```

## Contribute

We welcome contributions from the community!

### Share a Photo
Taken a photo at the Downs? Share it in 3 clicks:
1. Click **[Share a Photo](https://github.com/alexdenne/fofd/issues/new?template=photo-submission.yml)**
2. Drag in your photo, add a caption
3. Submit!

### Report a Wildlife Sighting
Spotted something interesting? Let us know:
**[Report a Sighting](https://github.com/alexdenne/fofd/issues/new?template=wildlife-sighting.yml)**

### Improve the Website
See the [Contributing Guide](CONTRIBUTING.md) for details on:
- Reporting issues
- Suggesting improvements
- Submitting pull requests

## Development

No build step needed! Just edit the HTML/CSS files.

To preview locally:
```bash
cd site-2026
python -m http.server 8000
# or
npx serve
```

Then open http://localhost:8000

## Deploy

The site is hosted on GitHub Pages. Any push to `main` automatically deploys.

To set up GitHub Pages:
1. Go to Settings → Pages
2. Set source to "Deploy from a branch"
3. Select `main` branch, `/site-2026` folder
4. Save

The legacy site (`/site-2005-2025`) is preserved for reference but not deployed.

## Links

- **Website:** [friendsoffarthingdowns.co.uk](https://friendsoffarthingdowns.co.uk)
- **Facebook:** [Friends of Farthing Downs Group](https://www.facebook.com/groups/129749737166432)
- **Farthing Downs (City of London):** [Official page](https://www.cityoflondon.gov.uk/things-to-do/green-spaces/the-coulsdon-commons/farthing-downs)

## License

Content © Friends of Farthing Downs & Happy Valley.

Community-contributed photos remain the property of their photographers and are used with permission.

---

*Ancient chalk downland on London's doorstep. Join us in protecting it for future generations.*
