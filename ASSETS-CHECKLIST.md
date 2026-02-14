# 🎨 Asset Checklist - Kareppee Crunch

## Icons & Favicons yang Diperlukan

Untuk mendapatkan SEO score 100%, pastikan file-file berikut ada di folder `/public`:

### 1. Favicon
```
/public/favicon.ico (16x16 atau 32x32)
```
- Format: ICO
- Size: 16x16 px atau 32x32 px
- Tools: https://favicon.io/ atau https://realfavicongenerator.net/

### 2. Regular Icon
```
/public/icon.png (32x32)
```
- Format: PNG
- Size: 32 x 32 px
- Transparent background

### 3. Apple Touch Icon
```
/public/apple-icon.png (180x180)
```
- Format: PNG
- Size: 180 x 180 px
- No transparency (solid background recommended)

### 4. PWA Icons
```
/public/icon-192.png (192x192)
/public/icon-512.png (512x512)
```
- Format: PNG
- Sizes: 192x192 px dan 512x512 px
- For Android/Chrome PWA

### 5. Open Graph Image
```
/public/images/og-image.jpg (1200x630)
```
- Format: JPG atau PNG
- Size: 1200 x 630 px
- Aspect ratio: 1.91:1
- Recommended max file size: < 300KB
- Content: Logo + Tagline atau Product showcase

## Gambar yang Sudah Ada (Pastikan Optimal)

### Product Images
```
/public/images/varian/original.jpg
/public/images/varian/hotlado.jpg
/public/images/varian/jagungbakar.jpg
/public/images/varian/pedasdaunjeruk.jpg
/public/images/varian/greenmatcha.jpg
/public/images/varian/cokelat.jpg
```
- **Recommended size**: 800x800 px (1:1 aspect ratio)
- **Format**: WebP (fallback ke JPG)
- **Compression**: TinyPNG, Squoosh, atau ImageOptim
- **Max file size**: < 100KB per image

### Hero Image
```
/public/images/hero.jpeg
```
- **Recommended size**: 1920x1080 px
- **Format**: WebP (fallback ke JPG)
- **Compression**: < 200KB
- **Quality**: 80-85%

### Logo Files
```
/public/images/logo.png
```
- **Recommended size**: 600x200 px (or proportional)
- **Format**: PNG with transparency
- **Compression**: < 50KB

### Partner Logos
```
/public/images/dekat-lokal.png
/public/images/rumah-bumn.png
/public/images/bank-bri.png
```
- **Recommended height**: 120-150 px
- **Format**: PNG with transparency
- **Compression**: < 30KB each

## 🛠️ Tools untuk Optimasi Gambar

### Online Tools
1. **TinyPNG** - https://tinypng.com/
   - Best for PNG compression
   - Up to 70% size reduction

2. **Squoosh** - https://squoosh.app/
   - WebP, AVIF conversion
   - Side-by-side comparison
   - Advanced options

3. **SVGOMG** - https://jakearchibald.github.io/svgomg/
   - SVG optimization
   - Good for logos

4. **CloudConvert** - https://cloudconvert.com/
   - Batch conversion
   - Multiple formats

### Command Line Tools
```bash
# ImageMagick - Resize & Convert
convert input.jpg -resize 1200x630 -quality 85 output.jpg

# cwebp - Convert to WebP
cwebp -q 85 input.jpg -o output.webp

# pngquant - PNG compression
pngquant --quality=65-80 input.png -o output.png
```

### Node.js Tools
```bash
# Install sharp for image processing
npm install -g sharp-cli

# Resize image
sharp -i input.jpg -o output.jpg resize 1200 630

# Convert to WebP
sharp -i input.jpg -o output.webp -f webp -q 85
```

## 📏 Dimensi & Spesifikasi Lengkap

| Asset | Dimensions | Format | Max Size | Purpose |
|-------|------------|--------|----------|---------|
| favicon.ico | 16x16 or 32x32 | ICO | 5KB | Browser tab |
| icon.png | 32x32 | PNG | 5KB | Generic icon |
| apple-icon.png | 180x180 | PNG | 20KB | iOS home screen |
| icon-192.png | 192x192 | PNG | 30KB | Android PWA |
| icon-512.png | 512x512 | PNG | 50KB | Android PWA |
| og-image.jpg | 1200x630 | JPG | 300KB | Social sharing |
| hero.jpeg | 1920x1080 | WebP/JPG | 200KB | Hero background |
| logo.png | 600x200 | PNG | 50KB | Site logo |
| product images | 800x800 | WebP/JPG | 100KB | Product display |
| partner logos | Auto x 120 | PNG | 30KB | Partner section |

## ✅ Checklist Final

Before deployment, verify:

- [ ] All favicon files exist and load correctly
- [ ] PWA icons are present for manifest.json
- [ ] Open Graph image exists and displays correctly on social media
- [ ] All product images are optimized (< 100KB each)
- [ ] Hero image is optimized (< 200KB)
- [ ] Logo loads fast (< 50KB)
- [ ] All images have proper alt text
- [ ] No broken image links (404)
- [ ] Images are responsive on all devices
- [ ] WebP format is used where supported

## 🎨 Design Guidelines

### Open Graph Image Template
```
┌─────────────────────────────┐
│                             │
│    [LOGO]                   │
│                             │
│    Kareppee Crunch          │
│    Kerupuk Singkong Premium │
│                             │
│    [Product Image]          │
│                             │
└─────────────────────────────┘
1200 x 630 px
```

### PWA Icon Guidelines
- Use solid background color (brand color)
- Center logo/symbol
- Ensure contrast for visibility
- Test on both light and dark backgrounds
- Add small padding (safe zone)

### Product Image Guidelines
- Square format (1:1)
- White or transparent background
- Centered product
- Consistent lighting
- Show product clearly
- Maintain quality while compressing

## 📝 Notes

1. **Browser Caching**: Optimized images should be cached by CDN/browser
2. **Lazy Loading**: Implemented via `loading="lazy"` attribute
3. **Responsive Images**: Consider using Next.js Image component for automatic optimization
4. **Retina Displays**: Provide 2x versions if needed
5. **Accessibility**: Always include descriptive alt text

## 🚀 Quick Setup

```bash
# 1. Create all icon sizes from a single source
# Use: https://realfavicongenerator.net/

# 2. Optimize all images in a folder
# Use: https://squoosh.app/ (batch mode)

# 3. Generate WebP versions
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done

# 4. Verify all assets
ls -lh public/*.png public/*.ico public/images/
```

Ready to optimize! 🎨✨
