# Image SEO Findings

**Score**: 70/100  
**Category Weight**: 5%

## Issues Found

### [High] No explicit width/height attributes on images
Same CLS issue noted in Performance. All `<img>` tags need explicit dimensions.

### [Medium] Hero image at 178 KB is the largest asset
Could be compressed to 120-140 KB or served as responsive variants.

### [Medium] No og:image on any page
Social sharing previews will show no image. For a visually-driven travel site, this is a significant missed engagement opportunity.

**Recommendation**: Set a default og:image in BaseLayout. Use hero-panda-bamboo.webp or create a dedicated 1200x630 social card.

## Strengths
- All 5 images are WebP format
- Good descriptive alt text on every image
- Reasonable file sizes (22-178 KB)
- Proper eager/lazy loading split
- CSS aspect-ratio preserves layout shape
