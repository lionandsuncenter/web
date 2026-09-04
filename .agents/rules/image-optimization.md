# Image Optimization & Responsive Picture Rule

Whenever the user adds new image files (JPEGs, PNGs, etc.) or inserts new `<img>` tags in future sessions, proactively prompt them:
*"I noticed you added new images. Would you like me to generate optimized responsive WebP/AVIF variants and wrap them in `<picture>` tags like the others?"*

## Standard Image Pipeline:
- **Breakpoints**: 480w, 800w, 1200w, 1600w
- **Formats**: AVIF (`libsvtav1`, CRF 30), WebP (`cwebp`, Q80), progressive JPEG (`sips`, Q80)
- **Directory**: `assets/img/optimized/`
- **Markup**: `<picture>` with `<source type="image/avif">`, `<source type="image/webp">`, and responsive `<img>` with explicit `width`, `height`, `loading`, `decoding`, and `data-i18n-attr` for `alt`.
