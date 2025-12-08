# GitHub Pages limitations that force developers to migrate

GitHub Pages serves admirably as a free static site host for simple projects, but developers consistently hit the same walls: **100GB monthly bandwidth**, **10 builds per hour**, **1GB site size limits**, and critically, **no server-side functionality** for redirects, analytics, or dynamic features. The most visceral pain point isn't the documented limits—it's Jekyll's devastating build performance, with developers reporting **5-minute waits for single CSS changes** on sites with fewer than 60 posts. Real-world migrations cluster around predictable inflection points: build times becoming "torturous," traffic spikes triggering throttling warnings, and the moment developers need proper HTTP 301 redirects or deploy previews.

## The hard numbers: documented limits that trigger enforcement

GitHub Pages operates on a tiered system of soft and hard limits, where soft limits trigger "polite emails" while hard limits block deployment entirely. The **1GB published site size** and **100GB monthly bandwidth** are soft limits—exceeding them prompts GitHub to suggest using a CDN like Cloudflare or finding alternative hosting. The **10-minute deployment timeout** and **100MB individual file size** are hard limits that will fail builds.

Build frequency caps present a particularly sneaky constraint: Jekyll-based sites face a **10 builds per hour** soft limit, though this doesn't apply to custom GitHub Actions workflows. The distinction matters because GitHub Pages natively only supports Jekyll—using Hugo, Eleventy, or any other static site generator requires configuring Actions, which introduces its own complexity. As one developer noted, "GitHub creates an internal workflow called `pages-build-deployment` that you cannot tweak in any way nor delete. That workflow alone does not know how to handle Hugo sites, so it is pretty useless."

Paid GitHub accounts offer no relief here. The bandwidth, storage, and build limits remain identical across free and paid tiers. A GitHub staff member confirmed on Hacker News that enforcement typically targets misuse patterns rather than legitimate sites: "Automated version checks, makeshift ad CDNs for for-profit sites, pushing automated builds every minute, or distributing large assets."

## Jekyll's build performance creates the most visceral pain

The documented limits rarely cause migration. Instead, Jekyll's exponential build time degradation drives developers to breaking points far before they approach any published limits. Sara Soueidan, a prominent web developer, described her experience with Jekyll on GitHub Pages:

> "Every time I changed a CSS property or made any change in the HTML I had to wait up to five minutes for that change to be picked up and compiled by Jekyll. I am, once more, not exaggerating. I would literally feel the stress hormones increase in my blood stream every time I so much as thought about making a change to my Web site."

Her site contained fewer than 60 blog posts—a modest size by any measure. After migrating to Hugo with Netlify hosting, the same compilation dropped to **39 milliseconds**. The transformation represents a **7,600x speedup**, changing the development experience from "torturous" to instantaneous.

Paweł Grzybek documented a similar pattern: "After a few years of blogging using Jekyll, my website became slow and I stopped enjoying working on fresh content. The effortless integration of this static site generator with GitHub Pages was the only reason why I kept this setup for so long." Enabling Jekyll's incremental regeneration flag provided insufficient improvement. His migration to Hugo delivered **200ms builds** for over a hundred articles.

Rowan Manning pushed optimization further, documenting how his site's build process reached **6-7 minutes** after accumulating nearly 100 weeknotes with associated images. Even after aggressive optimization, GitHub Pages' architecture introduced delays: "Until very recently the only way to build GitHub pages with Hugo was to push to a separate branch, then a separate GitHub action would do the deploy under the hood. So no matter how fast my own workflow was, I was still having to wait for a second one to trigger."

## Plugin restrictions block legitimate use cases

GitHub Pages runs all Jekyll builds with the `--safe` flag, limiting plugins to a whitelist of exactly 20 approved gems. The restriction exists for security reasons—arbitrary Ruby code execution on GitHub's infrastructure poses obvious risks—but it blocks common functionality that developers expect from their build tools.

The whitelist includes essentials like `jekyll-feed`, `jekyll-sitemap`, and `jekyll-redirect-from`, but excludes popular plugins for image processing, asset pipelines, and advanced content management. Developers attempting to use unsupported plugins discover their sites build perfectly locally but fail silently when deployed. Stack Overflow threads consistently surface this confusion: "I just created a great gallery for my Jekyll blog which builds perfectly on my localhost:4000. However, GitHub pages doesn't support the Jekyll Gallery Generator plug-in I am using."

The workaround—building locally and pushing compiled output, or using GitHub Actions with custom builds—eliminates the simplicity that made GitHub Pages attractive initially. One developer quantified the overhead: "With this approach come a couple problems. First of all, the build time is longer because the container downloads each plugin every time. For example, mine once reached 2 minutes."

## Missing features that eventually become dealbreakers

Beyond performance, GitHub Pages lacks functionality that developers eventually need as sites mature:

- **No server-side redirects**: Only client-side meta refresh redirects are possible, preventing proper HTTP 301s that preserve SEO when restructuring URLs
- **No deploy previews**: Pull requests cannot be previewed on staging URLs before merging
- **No built-in analytics**: Zero visibility into traffic without adding third-party scripts
- **No form handling**: Contact forms require external services like Formspree or Netlify Forms
- **No proxy/rewrite rules**: Cannot route requests through the server for analytics proxying or API aggregation

Jack Franklin documented how redirect limitations forced his migration: "I was beginning to feel that GitHub Pages was limiting me; you are able to depend on a small subset of Jekyll plugins and couldn't configure redirects, extra headers or any of your server's behaviour." He wanted to simplify URLs from `/blog/2018/01/post-title` to `/post-title` without breaking existing links—impossible without server-side 301 redirects.

Navendu Pottekkat hit a different wall: deploy previews. "I have been looking for ways to set up my Hugo website to show draft blog posts. The problem was that I didn't want these drafts to show up on the homepage listing, but I also wanted a sharable link for people to review." GitHub Pages offers no mechanism for PR-based preview deployments.

Analytics gaps drove Jeff Sandberg away: "The lazy thing to do was to just stick with GitHub pages, and accept that only 40% or so of my viewers would be accounted for in my analytics." Ad blockers prevent analytics scripts from loading, and GitHub Pages offers no proxy configuration to work around this.

## Enterprise documentation sites that outgrew the platform

Larger organizations encounter GitHub Pages limits more acutely. Citrix migrated their entire product documentation infrastructure—**150,000+ files across 8 languages**, 80 repositories, and 50+ content contributors serving **3.5 million users annually**—from a legacy CMS to a JAMstack architecture on Netlify. The migration delivered **65% cost savings** and completed three months ahead of schedule.

Smashing Magazine, one of the most-trafficked web development publications, migrated from WordPress to a static architecture using Hugo and Netlify. The publication reported **6-10x performance improvements** after the migration, eliminating the caching complexity and server management overhead of their previous setup.

Documentation-heavy projects face unique challenges. Read the Docs positions itself as a GitHub Pages alternative specifically for documentation, emphasizing versioning support and API documentation features that GitHub Pages cannot provide. The Zig programming language recently migrated its entire project—including documentation—from GitHub to Codeberg, citing concerns about corporate influence and FOSS alignment.

## Traffic spikes reveal invisible bandwidth constraints

GitHub Pages' **100GB monthly soft limit** rarely causes problems under normal traffic, but provides no monitoring tools. Developers cannot see how much bandwidth they've consumed until receiving an enforcement email. One developer documented receiving over **120,000 page views and 6GB of bandwidth in 24 hours** during a viral traffic spike. "Fortunately I'd just set up Cloudflare and GitHub only delivered about 2 gigs of that."

A GitHub staff member explained the enforcement philosophy: "If you're using GitHub Pages for your personal site you should be fine, even if you get HN-level traffic every once in a while. The problem comes when a small handful of users use GitHub Pages for things like automated version checks or configuration distribution."

The Gorilla Sun blog documented preemptive migration driven by bandwidth anxiety: "Cannot monitor bandwidth usage—no visibility into 100GB limit." Without usage metrics, developers cannot make informed decisions about when to migrate.

## The counterpoint: developers who returned to GitHub Pages

Not every migration away from GitHub Pages succeeds. Eugene Yan documented returning to GitHub Pages after a problematic experience with Netlify. His issues included MX records not automatically migrating ("emails to my domain bounced for a few days before I noticed"), credit card requirements for DNS provider access, SSL certificate errors, and hitting Netlify's **300 build minutes monthly limit** on the free tier. "For someone who frequently adds and tweaks content, 300 minutes didn't last long."

His experience highlights an underappreciated GitHub Pages advantage: zero configuration complexity for basic use cases. The platform's limitations become virtues when developers prioritize simplicity over features.

## Migration patterns cluster around specific inflection points

Analysis of migration stories reveals predictable triggers:

| Trigger | Frequency | Typical threshold |
|---------|-----------|-------------------|
| Jekyll build performance | Very high | 60+ posts, 2+ minute builds |
| Need for server-side redirects | High | First URL restructuring |
| Deploy previews for collaboration | High | Adding collaborators or reviewers |
| Analytics requirements | Medium | First traffic analysis need |
| Plugin restrictions | Medium | First unsupported plugin |
| Bandwidth concerns | Low | Viral traffic or large assets |

Netlify captures the majority of migrations, followed by Cloudflare Pages and Vercel. Each offers free tiers with significantly higher limits and the missing features—redirects, deploy previews, analytics, forms—that GitHub Pages lacks.

## Conclusion

GitHub Pages remains excellent for its intended purpose: hosting simple static sites from Git repositories with zero configuration. The platform fails predictably when sites exceed modest complexity thresholds—particularly Jekyll build performance degradation, which creates developer frustration long before any documented limits become relevant. The authentic inflection point isn't usually a hard limit but accumulated friction: the third time waiting four minutes for a CSS change to compile, the first time needing a proper redirect, the moment draft posts need collaborative review. Organizations with serious documentation needs or traffic requirements will inevitably outgrow the platform, but individual developers with straightforward sites may never encounter meaningful limitations. The migration decision ultimately reduces to whether missing features—deploy previews, analytics, server-side logic—justify trading GitHub Pages' simplicity for a more capable platform's configuration overhead.