# SEO Action Plan: dujiangyanpanda.com

**Overall Health Score**: 52/100 → Target: 85+/100

---

## Phase 1: Critical Fixes (Week 1)

These items block indexing or directly harm rankings. Fix immediately.

- [ ] **1.1 Create robots.txt** — Estimated: 5 min
  - File: `public/robots.txt`
  - Content: Allow all crawlers, point to sitemap
  - Include explicit directives for GPTBot and anthropic-ai crawlers

- [ ] **1.2 Add self-referencing canonical tags** — Estimated: 10 min
  - File: `src/layouts/BaseLayout.astro`
  - Add `<link rel="canonical" href={new URL(Astro.url.pathname, Astro.site)}>` in `<head>`
  - Also add `<meta name="robots" content="index, follow">`

- [ ] **1.3 Add JSON-LD Organization + WebSite schema** — Estimated: 15 min
  - File: `src/layouts/BaseLayout.astro`
  - Organization: name, url, description, sameAs (social if any)
  - WebSite: name, url, potentialAction (SearchAction)

- [ ] **1.4 Add JSON-LD TouristAttraction schema to homepage** — Estimated: 15 min
  - File: `src/pages/index.astro`
  - Include: name, description, address (Dujiangyan, Sichuan), openingHours, priceRange

- [ ] **1.5 Add JSON-LD FAQPage schema to /faq/** — Estimated: 10 min
  - File: `src/pages/faq/index.astro`
  - Map each `<details><summary>` to a question/acceptedAnswer pair

- [ ] **1.6 Fix blog page dead links** — Estimated: 30 min
  - Option A: Create 4 real blog posts (preferred)
  - Option B: Remove the blog listing page if posts aren't ready
  - Do not ship placeholder pages with `href="#"`

- [ ] **1.7 Add explicit width/height to all `<img>` tags** — Estimated: 15 min
  - Add width="" height="" to every `<img>` in all .astro files
  - For responsive images, pair with CSS `height: auto; max-width: 100%`

- [ ] **1.8 Add default og:image to BaseLayout** — Estimated: 5 min
  - File: `src/layouts/BaseLayout.astro`
  - Use hero-panda-bamboo.webp or create a dedicated 1200×630 social card

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

These significantly impact rankings but don't block indexing.

- [ ] **2.1 Fix duplicate brand name in title tags** — Estimated: 15 min
  - File: `src/layouts/BaseLayout.astro`
  - Option A: Remove auto-suffix, let each page define its own full title
  - Option B: Make suffix conditional — skip if title already contains "Dujiangyan"

- [ ] **2.2 Add JSON-LD BreadcrumbList schema to BaseLayout** — Estimated: 15 min
  - Generate dynamically from Astro.url.pathname
  - Home > Section > Page structure

- [ ] **2.3 Expand /about/ page to 500+ words** — Estimated: 45 min
  - File: `src/pages/about/index.astro`
  - Add: author/team bios, credentials, editorial methodology, content freshness policy
  - Add contact information or link to /contact/

- [ ] **2.4 Create /contact/ page** — Estimated: 20 min
  - New file: `src/pages/contact/index.astro`
  - Include: email address or contact form, response time expectations

- [ ] **2.5 Configure sitemap lastmod** — Estimated: 10 min
  - File: `astro.config.mjs`
  - Configure @astrojs/sitemap with lastmod and changefreq settings
  - Use file modification times for lastmod

- [ ] **2.6 Add Twitter/X card metadata** — Estimated: 5 min
  - File: `src/layouts/BaseLayout.astro`
  - Add twitter:card (summary_large_image), twitter:title, twitter:description

- [ ] **2.7 Restrict fonts to Latin subset only** — Estimated: 15 min
  - Configure @fontsource-variable/geist to load Latin only
  - Or add explicit unicode-range in global.css
  - Saves ~46 KB of unnecessary font downloads

- [ ] **2.8 Add JSON-LD FAQPage schema to /volunteer-program/** — Estimated: 10 min
  - File: `src/pages/volunteer-program/index.astro`
  - Map the 5 FAQ items to question/acceptedAnswer pairs

---

## Phase 3: Content & Authority (Month 2)

Build content depth and authority signals.

- [ ] **3.1 Publish 4 real blog posts** — Estimated: 4-8 hours
  - Posts currently listed as dead links:
    1. "Dujiangyan Panda Volunteer: My Honest Experience"
    2. "Dujiangyan vs Chengdu vs Wolong: Which Panda Base?"
    3. "How to Book the Dujiangyan Panda Volunteer Program"
    4. "A Perfect Day Trip: Pandas and Dujiangyan Irrigation System"
  - Target 800-1500 words each with original photos

- [ ] **3.2 Add author schema and bylines** — Estimated: 30 min
  - Add JSON-LD Person/Author schema on each blog post
  - Add visible byline with name, photo, short bio
  - Create an /authors/ page or include author info on /about/

- [ ] **3.3 Add "Last updated" dates to key pages** — Estimated: 15 min
  - Pages: /tickets/, /volunteer-program/, /how-to-get-there/, /visit-guide/
  - Add visible date near the top of each page
  - Use build date or manual date in frontmatter

- [ ] **3.4 Create /privacy/ and /terms/ pages** — Estimated: 30 min
  - Standard privacy policy and terms of use
  - Link from footer alongside About and FAQ

- [ ] **3.5 Create llms.txt** — Estimated: 10 min
  - File: `public/llms.txt`
  - Include site description and links to all key pages
  - Follow llmstxt.org specification

- [ ] **3.6 Add hreflang self-reference to BaseLayout** — Estimated: 5 min
  - `<link rel="alternate" hreflang="en" href={canonicalUrl}>`

- [ ] **3.7 Generate responsive image variants** — Estimated: 30 min
  - Use Astro's Image component or sharp to generate srcset
  - Create at minimum: 400w, 800w, 1200w variants
  - Focus on hero image first (largest at 178 KB)

- [ ] **3.8 Implement RSS feed** — Estimated: 15 min
  - Add @astrojs/rss integration
  - Create src/pages/rss.xml.js

---

## Phase 4: Monitoring & Iteration (Ongoing)

- [ ] **4.1 Set up Google Search Console**
  - Submit sitemap-index.xml
  - Monitor index coverage and crawl stats

- [ ] **4.2 Monitor Core Web Vitals via CrUX**
  - Track LCP, INP, CLS scores
  - Focus on CLS improvement after adding image dimensions

- [ ] **4.3 Create custom 404 page**
  - File: `src/pages/404.astro`
  - Include: navigation links to key pages, search suggestion

- [ ] **4.4 Build backlink profile**
  - Outreach to travel blogs, Sichuan tourism sites
  - List on travel resource directories
  - Consider guest posts about Dujiangyan travel

- [ ] **4.5 Track keyword rankings**
  - Primary: "Dujiangyan Panda Base", "Dujiangyan panda volunteer", "Dujiangyan panda tickets"
  - Secondary: "Chengdu to Dujiangyan panda base", "panda base near Chengdu"
  - Long-tail: "Dujiangyan panda base vs Chengdu", "best time to visit Dujiangyan panda base"

- [ ] **4.6 Evaluate Chinese-language version**
  - Huge potential for Chinese domestic search traffic
  - Could be a subdirectory (/zh/) or separate subdomain
  - Requires proper hreflang implementation between versions

- [ ] **4.7 Add Article JSON-LD schema to blog posts**
  - Include: headline, datePublished, dateModified, author, image

---

## Effort Summary

| Phase | Tasks | Estimated Hours |
|---|---|---|
| Phase 1: Critical | 8 tasks | 2-3 hours |
| Phase 2: High-Impact | 8 tasks | 3-4 hours |
| Phase 3: Content & Authority | 8 tasks | 8-12 hours |
| Phase 4: Monitoring | 7 tasks | Ongoing |

**Total Phase 1-3 effort**: ~15-20 hours to go from 52/100 to an estimated 85+/100.
