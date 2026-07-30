# Schema / Structured Data Findings

**Score**: 5/100  
**Category Weight**: 10%

## Issue Found

### [Critical] Zero structured data on the entire site

Not a single JSON-LD block or microdata attribute exists across all 11 pages. This is the single largest missed opportunity on the site.

The site has content that qualifies for rich results in Google SERPs:

1. **TouristAttraction** — homepage, visit-guide, nearby-attractions pages
2. **FAQPage** — 3 pages with 18 total Q&A pairs (eligible for FAQ rich results)
3. **Article** — blog posts (when created)
4. **Organization** — site-wide, establishes entity identity
5. **BreadcrumbList** — all pages, enables breadcrumb rich results
6. **LocalBusiness** — if the site represents a tour operator

**Priority implementation order**:
1. Organization + WebSite (BaseLayout, site-wide)
2. TouristAttraction (homepage, key attraction pages)
3. FAQPage (/faq/, /volunteer-program/)
4. BreadcrumbList (BaseLayout, all pages)
5. Article (blog posts when created)
