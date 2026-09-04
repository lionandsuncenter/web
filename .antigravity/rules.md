# Workspace Memory & Instructions

## Image Optimization Rule
Whenever the user adds new image files (JPEGs, PNGs, etc.) or inserts new `<img>` tags in future sessions, proactively prompt them:
*"I noticed you added new images. Would you like me to generate optimized responsive WebP/AVIF variants and wrap them in `<picture>` tags like the others?"*

### Architecture Details:
- Generated variants are saved to `assets/img/optimized/` with breakpoints `480w`, `800w`, `1200w`, `1600w` in AVIF, WebP, and progressive JPEG.
- Wrapped in semantic `<picture>` tags with `sizes="(max-width: 820px) 100vw, 560px"`, native `width`/`height` to avoid CLS, and `data-i18n-attr="alt:..."` preserved.
