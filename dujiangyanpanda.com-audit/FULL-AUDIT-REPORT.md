# Full SEO Audit Report: dujiangyanpanda.com

**Date**: 2026-07-30
**Audit type**: Source-code audit (site not yet deployed)
**Pages analyzed**: 11
**Overall SEO Health Score**: 52/100

---

## Executive Summary

Dujiangyan Panda Base Guide is an Astro static site built as an independent travel resource for international visitors. The site covers 11 pages covering tickets, volunteering, transit, and local attractions — content that is genuinely useful and well-written. The visual design and information architecture are solid.

However, the site has significant SEO gaps that will limit its ability to rank. Three critical findings dominate the audit: (1) absolutely no structured data anywhere, missing rich-result opportunities for all major content types; (2) no robots.txt or crawl directives; and (3) the blog page displays dead links that actively harm quality signals.

**Top 5 Critical Issues**:
1. Zero structured data / JSON-LD on all 11 pages
2. No robots.txt file — search engines have no crawl guidance
3. Blog page contains four dead links (href="#") — harmful to quality signals
4. Missing canonical tags on every page
5. About page is dangerously thin (~150 words) — weak E-E-A-T

**Top 5 Quick Wins** (all under 1 hour total):
1. Add robots.txt (2 minutes)
2. Add self-referencing canonical to BaseLayout (1 line)
3. Add og:image to BaseLayout (1 line)
4. Add width/height to all <img> tags (~10 minutes)
5. Add JSON-LD TouristAttraction to homepage (~15 minutes)

---

## Category Breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 45/100 | 9.9 |
| Content Quality | 23% | 65/100 | 14.95 |
| On-Page SEO | 20% | 58/100 | 11.6 |
| Schema / Structured Data | 10% | 5/100 | 0.5 |
| Performance (CWV) | 10% | 78/100 | 7.8 |
| AI Search Readiness | 10% | 40/100 | 4.0 |
| Images | 5% | 70/100 | 3.5 |
| **Total** | **100%** | | **52.25** |

---

## 1. Technical SEO (45/100)

### What Works
- Sitemap auto-generated via @astrojs/sitemap — valid XML, 11 URLs indexed
- Clean, minified static HTML — zero JavaScript framework overhead
- Proper lang="en" declaration
- Semantic HTML5 with logical heading structure
- Favicon as lightweight SVG
- All internal links use clean absolute paths

### What's Broken or Missing

**[Critical] No robots.txt**
Neither dist/ nor public/ contains a robots.txt. Search engines have no crawl directives — no sitemap reference, no disallow rules, no AI crawler directives.

**[High] Missing canonical tags on all pages**
No <link rel="canonical"> on any of the 11 pages. Without self-referencing canonicals, search engines may treat URL variants as duplicates.

**[Medium] Sitemap lacks lastmod, changefreq, and priority**
sitemap-0.xml contains bare <url><loc> entries. lastmod is a strong crawl signal and should always be included.

**[Low] No hreflang or language targeting**
Self-referencing hreflang is missing for this international-audience site.

**[Low] No 404 page**
No custom 404 page exists.

**[Low] No RSS feed for blog**
Blog page exists but has no RSS/Atom feed.

---

## 2. Content Quality (65/100)

### What Works
- Well-written, natural English across all informational pages
- Detailed practical content: specific prices, schedules, seasonal data
- Strong topical depth on volunteer (6-step schedule, pricing table, requirements), tickets (pricing table, 4 buying options), and transit pages (4 transport methods with steps, times, costs)
- Good FAQ content across 3 pages (18 total Q&A pairs)
- Transparent footer disclaimer about non-affiliation

### Content Issues

**[Critical] Blog page has no real content**
The /blog/ page lists 4 blog post titles with dates but all links go to #. Google will see this as a soft 404. Either publish real posts or remove this page.

**[High] About page is dangerously thin**
~150 words across 3 generic paragraphs. No author bios, credentials, contact info. Major E-E-A-T weakness.

**[High] No author or content attribution**
No bylines or editorial credentials anywhere. Google's E-E-A-T guidelines heavily weight author transparency for informational content.

**[Medium] No content freshness signals**
No "last updated" dates on any content page. Travel info changes and Google values temporal signals.

**[Medium] No contact page**
The about page mentions contact channels but no contact page exists.

**[Medium] Missing privacy policy and terms pages**
Trust signals increasingly expected by search engines.

---

## 3. On-Page SEO (58/100)

### What Works
- Every page has a unique, keyword-rich title tag
- Every page has a unique meta description (140-165 chars)
- Clear H1 on every page
- Consistent header/footer navigation
- Good interlinking between related pages
- Proper OpenGraph title/description on all pages

### On-Page Issues

**[High] Duplicate brand name in all titles**
BaseLayout appends "| Dujiangyan Panda Base" to every title. Pages that already include the brand become redundant. Worst examples: "Dujiangyan Panda Base - Volunteer, Tickets & Visit Guide 2026 | Dujiangyan Panda Base" and "FAQ - Dujiangyan Panda Base | Dujiangyan Panda Base". Wastes title tag real estate.

**[Medium] Homepage title includes hardcoded year "2026"**
Will require manual updating annually.

**[Medium] Blog page uses h2 instead of h1 for main heading**
"Stories & Guides" should be the h1.

**[Low] FAQ questions use h2 inside details elements**
Invalid HTML — interactive content inside interactive content.

**[Low] Missing Twitter/X card metadata**
No twitter:card or related meta tags.

---

## 4. Schema / Structured Data (5/100)

**[Critical] Zero structured data on the entire site**

This is the single largest missed opportunity. Not a single JSON-LD block or microdata attribute exists across all 11 pages. The site has content that could qualify for rich results:
- TouristAttraction (homepage, visit-guide, nearby-attractions)
- FAQPage (3 pages with 18 Q&A pairs)
- Article (blog posts)
- Organization (site-wide)
- BreadcrumbList (all pages)

Priority: Organization + WebSite → TouristAttraction → FAQPage → BreadcrumbList → Article

---

## 5. Performance / Core Web Vitals (78/100)

### What Works
- Static HTML — near-instant server response
- CSS bundled to single 26.7 KB file
- All images in WebP format
- No client-side JS framework
- No third-party scripts at all
- Proper lazy loading on body images

### Performance Issues

**[High] No explicit image dimensions — CLS risk**
Every img tag lacks width/height. Images will push layout as they load, directly impacting CLS scores.

**[Medium] Unused font subsets — ~46 KB wasted**
Five Geist Variable woff2 files total ~75 KB. Only Latin subset (28.7 KB) is needed for English content.

**[Medium] No responsive images (srcset/sizes)**
Hero image (178 KB) loads at full resolution on mobile.

**[Low] No font-display strategy visible**
Without font-display: swap, text may be invisible during font load.

---

## 6. Images (70/100)

### What Works
- All 5 images are WebP format with good descriptive alt text
- Reasonable file sizes (22-178 KB)
- Proper eager/lazy loading split
- CSS aspect-ratio preserves layout shape

### Image Issues
- No explicit width/height attributes [High]
- Hero at 178 KB — compress or serve responsive variants [Medium]
- No og:image on any page [Medium]

---

## 7. AI Search Readiness (40/100)

### What Works
- Clean semantic HTML, well-structured content, fully static

### AI Search Gaps
- No structured data — AI crawlers must infer meaning from text [High]
- No llms.txt [Medium]
- No author/credential signals [Medium]
- No explicit AI crawler directives in robots.txt [Medium]

---

## Page-by-Page Summary

| Page | Title Issue | Content Score | Schema Needed | Priority |
|---|---|---|---|---|
| / (Home) | Duplicate brand in title | Strong | TouristAttraction, Organization | Critical |
| /volunteer-program/ | Partial brand overlap | Strong | FAQPage | High |
| /tickets/ | OK | Good | — | — |
| /how-to-get-there/ | OK | Strong | — | — |
| /visit-guide/ | OK | Good | TouristAttraction | Medium |
| /faq/ | Double brand in title | Good | FAQPage | High |
| /best-time-to-visit/ | OK | Good | — | — |
| /dujiangyan-vs-chengdu-panda-base/ | OK | Good | — | — |
| /nearby-attractions/ | OK | Good | TouristAttraction | Medium |
| /about/ | Triple brand in title | Thin (150 words) | Organization | High |
| /blog/ | Double brand + dead links | Critical (no content) | Article + Blog | Critical |

---

## Implementation Roadmap

### Phase 1: Critical Fixes (Week 1)
1. Create robots.txt with sitemap reference
2. Add self-referencing canonical tags to BaseLayout
3. JSON-LD Organization + WebSite schema in BaseLayout
4. JSON-LD TouristAttraction schema on homepage
5. JSON-LD FAQPage schema on /faq/
6. Fix blog page — publish posts or remove dead-link listing
7. Add explicit width/height to all img tags
8. Add default og:image to BaseLayout

### Phase 2: High-Impact Improvements (Weeks 2-3)
1. Fix duplicate brand name in titles
2. JSON-LD BreadcrumbList in BaseLayout
3. Expand /about/ page to 500+ words
4. Create /contact/ page
5. Configure sitemap lastmod
6. Add Twitter card metadata
7. Restrict fonts to Latin subset only
8. JSON-LD FAQPage on /volunteer-program/

### Phase 3: Content & Authority (Month 2)
1. Publish 4 real blog posts
2. Add author schema and bylines
3. Add "Last updated" dates to key pages
4. Create /privacy/ and /terms/ pages
5. Create llms.txt
6. Add hreflang self-reference
7. Generate responsive image variants
8. Implement RSS feed

### Phase 4: Monitoring & Iteration (Ongoing)
1. Google Search Console setup
2. Core Web Vitals monitoring via CrUX
3. Custom 404 page
4. Backlink profile building
5. Rank tracking
6. Chinese-language version evaluation
