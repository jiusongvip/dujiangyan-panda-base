# Performance (CWV) Findings

**Score**: 78/100  
**Category Weight**: 10%

## Issues Found

### [High] No explicit image dimensions — CLS risk
Every <img> tag lacks explicit width and height attributes. Images will push page layout as they load, directly impacting Cumulative Layout Shift scores.

**Recommendation**: Add width and height to all images. For responsive images, pair with CSS height: auto; max-width: 100%.

### [Medium] Unused font subsets — ~46 KB wasted
Five Geist Variable woff2 files total ~75 KB. Only the Latin subset (28.7 KB) is needed for English content. Cyrillic (14.7 KB), Latin-ext (16.1 KB), Cyrillic-ext (7.2 KB), and Vietnamese (7.8 KB) add unnecessary download.

**Recommendation**: Configure @fontsource-variable/geist to load Latin subset only.

### [Medium] No responsive images (srcset/sizes)
Hero image (178 KB) loads at full resolution on mobile. No smaller variants generated.

**Recommendation**: Use Astro's Image component or sharp to generate responsive srcset variants.

### [Low] No font-display strategy visible
Without ont-display: swap, text may be invisible during font load (FOIT).

## Strengths
- Static HTML site — near-instant server response
- CSS bundled to single 26.7 KB file
- No client-side JS framework or third-party scripts
- Proper lazy loading on non-hero images
- Hero image uses loading="eager"
"@
  "images.md" = @"
# Image SEO Findings

**Score**: 70/100  
**Category Weight**: 5%

## Issues Found

### [High] No explicit width/height attributes on images
Same CLS issue noted in Performance. All <img> tags need explicit dimensions.

### [Medium] Hero image at 178 KB is the largest asset
Could be compressed to 120-140 KB or served as responsive variants.

### [Medium] No og:image on any page
Social sharing previews will show no image. For a visually-driven travel site, this is a significant missed engagement opportunity.

**Recommendation**: Set a default og:image in BaseLayout. Use hero-panda-bamboo.webp or create a dedicated 1200×630 social card.

## Strengths
- All 5 images are WebP format
- Good descriptive alt text on every image
- Reasonable file sizes (22-178 KB)
- Proper eager/lazy loading split
- CSS aspect-ratio preserves layout shape
