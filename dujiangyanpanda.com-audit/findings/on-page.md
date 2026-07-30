# On-Page SEO Findings

**Score**: 58/100  
**Category Weight**: 20%

## Issues Found

### [High] Duplicate brand name in all titles due to BaseLayout suffix
BaseLayout appends "| Dujiangyan Panda Base" to every title template. Pages that already include the brand name become redundant. Examples:
- Homepage: "Dujiangyan Panda Base - Volunteer, Tickets & Visit Guide 2026 | Dujiangyan Panda Base"
- FAQ: "FAQ - Dujiangyan Panda Base | Dujiangyan Panda Base"
- About: "About - Dujiangyan Panda Base Guide | Dujiangyan Panda Base"

This wastes title tag real estate and looks unprofessional in SERPs.

**Recommendation**: Either remove the suffix and let pages define full titles, or make it conditional.

### [Medium] Homepage title includes hardcoded year "2026"
Will require manual updating annually.

### [Medium] Blog page uses h2 instead of h1 for main heading
"Stories & Guides" should be the h1 as the primary page heading.

### [Low] FAQ questions use h2 inside details elements
Invalid HTML — interactive content inside interactive content.

### [Low] Missing Twitter/X card metadata
No twitter:card, twitter:title, or twitter:description on any page.

## Strengths
- Every page has a unique, keyword-rich title tag and meta description
- Clear H1 on every page
- Consistent header/footer navigation
- Good interlinking between related pages
- Proper OpenGraph title/description on all pages
