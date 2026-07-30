# Technical SEO Findings

**Score**: 45/100  
**Category Weight**: 22%

## Issues Found

### [Critical] No robots.txt file
Neither dist/ nor public/ contains a robots.txt. Search engines have no crawl directives — no sitemap reference, no disallow rules, no AI crawler directives.

**Recommendation**: Create public/robots.txt with sitemap pointer and explicit crawler directives.

### [High] Missing canonical tags on all pages
No <link rel="canonical"> on any of the 11 pages. Without self-referencing canonicals, search engines may treat URL variants as duplicates.

**Recommendation**: Add self-referencing canonical in BaseLayout using Astro.url. Also add <meta name="robots" content="index, follow">.

### [Medium] Sitemap lacks metadata
sitemap-0.xml contains bare <url><loc> entries. lastmod is a strong crawl signal that should be included.

**Recommendation**: Configure @astrojs/sitemap with lastmod option in astro.config.mjs.

### [Low] No hreflang or language targeting
Self-referencing hreflang is missing for this international-audience site.

### [Low] No 404 page
No custom 404 page exists for missing URLs.

### [Low] No RSS feed for blog
Blog page exists but has no RSS/Atom feed for syndication.
