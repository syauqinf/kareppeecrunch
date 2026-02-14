# 🚀 Panduan Deployment & Testing - Kareppee Crunch

## 📦 Persiapan Sebelum Build

### 1. Install Dependencies (Jika Belum)
```bash
npm install
```

### 2. Periksa Assets yang Diperlukan
Pastikan file-file berikut ada di folder `/public`:
- `favicon.ico` (16x16)
- `icon.png` (32x32)
- `apple-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)
- `images/og-image.jpg` (1200x630)
- `images/hero.jpeg`
- `images/logo.png`
- Semua gambar produk dan mitra

📝 Lihat [ASSETS-CHECKLIST.md](./ASSETS-CHECKLIST.md) untuk detail lengkap.

### 3. Update URL Production
Ganti `https://kareppeecrunch.com` dengan URL domain Anda yang sebenarnya di file:
- `app/layout.tsx` (line 18)
- `app/sitemap.ts` (line 4)
- `app/robots.ts` (line 8)
- `next-sitemap.config.js` (line 2)

## 🏗️ Build & Development

### Development Mode
```bash
npm run dev
```
Akses: http://localhost:3000

### Production Build
```bash
# Build aplikasi
npm run build

# Jalankan production build
npm run start
```

### Lint Check
```bash
npm run lint
```

## ✅ Testing Checklist

### 1. **Local Testing**
Sebelum deploy, test di local environment:

```bash
# Build production
npm run build

# Run production build
npm run start
```

Checklist:
- [ ] Semua halaman load dengan baik
- [ ] Tidak ada error di console
- [ ] Semua gambar muncul
- [ ] Smooth scroll berfungsi
- [ ] Animasi AOS berjalan
- [ ] Link WhatsApp berfungsi
- [ ] Responsive di mobile, tablet, desktop
- [ ] Dark mode berfungsi (jika diaktifkan)

### 2. **Google Lighthouse Audit**

**Chrome DevTools:**
1. Buka Chrome/Edge
2. Klik kanan > Inspect
3. Tab "Lighthouse"
4. Pilih: Performance, Accessibility, Best Practices, SEO
5. Mode: Desktop & Mobile
6. Click "Analyze page load"

**Target Score:**
- ✅ Performance: 90-100
- ✅ Accessibility: 90-100
- ✅ Best Practices: 90-100
- ✅ SEO: 90-100

### 3. **PageSpeed Insights**
Test online: https://pagespeed.web.dev/

```
URL: [your-domain.com]
```

**Core Web Vitals Target:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### 4. **Mobile-Friendly Test**
https://search.google.com/test/mobile-friendly

Pastikan:
- [ ] Mobile-friendly
- [ ] Text readable tanpa zoom
- [ ] Tap targets cukup besar
- [ ] Viewport properly configured

### 5. **Structured Data Test**
https://search.google.com/test/rich-results

Paste URL atau copy HTML, test:
- [ ] Organization schema
- [ ] FoodEstablishment schema
- [ ] Product schema
- [ ] AggregateRating schema

### 6. **Open Graph Preview**
Test social media sharing:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/

Pastikan:
- [ ] Title muncul dengan benar
- [ ] Description terbaca
- [ ] OG image tampil (1200x630)
- [ ] URL canonical benar

## 🚀 Deployment

### Recommended Platforms

#### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Atau via GitHub:**
1. Push ke GitHub repository
2. Import project di https://vercel.com
3. Auto-deploy setiap push ke main branch

#### 2. **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production
netlify deploy --prod
```

#### 3. **Cloudflare Pages**
1. Connect GitHub repo
2. Build command: `npm run build`
3. Output directory: `.next`

### Environment Variables (Jika Ada)
Jangan lupa set environment variables di platform deployment:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Post-Deployment Testing

### 1. Google Search Console
https://search.google.com/search-console

Setup:
1. Verify ownership (DNS atau HTML)
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Request indexing untuk halaman utama
4. Monitor:
   - Coverage issues
   - Core Web Vitals
   - Mobile usability
   - Security issues

### 2. Google Analytics (Optional)
Tambahkan tracking code di `app/layout.tsx`:

```tsx
import Script from 'next/script'

// Dalam <body> tag, sebelum {children}
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. Monitor Uptime
- **UptimeRobot**: https://uptimerobot.com/
- **Pingdom**: https://www.pingdom.com/
- **StatusCake**: https://www.statuscake.com/

### 4. CDN & Caching
Pastikan CDN aktif (Vercel/Netlify sudah otomatis):
- [ ] Static assets cached (header: Cache-Control)
- [ ] Images served via CDN
- [ ] HTTPS enabled
- [ ] HTTP/2 or HTTP/3 enabled

## 🔧 Troubleshooting

### Build Errors

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: TypeScript errors**
```bash
# Check tsconfig.json
npm run lint
```

**Error: Image optimization**
```bash
# Pastikan next.config.ts sudah benar
# Check format gambar (JPG, PNG, WebP, AVIF)
```

### Performance Issues

**Slow LCP (> 2.5s)**
- Optimize hero image (< 200KB)
- Add preload untuk critical images
- Enable CDN
- Compress images lebih lanjut

**High CLS (> 0.1)**
- Add width/height pada semua images
- Reserve space untuk dynamic content
- Avoid inserting content above existing content

**Slow TTI**
- Reduce JavaScript bundle size
- Remove unused dependencies
- Enable code splitting
- Lazy load non-critical components

### SEO Issues

**Pages not indexed**
- Check robots.txt: `https://yourdomain.com/robots.txt`
- Submit sitemap di Search Console
- Request indexing manual
- Check for no-index meta tags

**Structured data errors**
- Validate dengan Rich Results Test
- Check JSON-LD syntax
- Ensure all required fields present

## 📈 Monitoring & Optimization

### Weekly Checks
- [ ] Google Search Console errors
- [ ] Core Web Vitals trends
- [ ] Mobile usability issues
- [ ] Security issues

### Monthly Tasks
- [ ] Run Lighthouse audit
- [ ] Update dependencies: `npm update`
- [ ] Check for broken links
- [ ] Review analytics data
- [ ] Optimize slow pages

### Performance Budget

Set alerts jika:
- LCP > 2.5s
- FID > 100ms
- CLS > 0.1
- Bundle size > 500KB
- Images > 200KB each

## 🎯 Optimization Checklist

### Images
- [ ] All images < 200KB
- [ ] WebP format enabled
- [ ] Lazy loading implemented
- [ ] Proper alt text
- [ ] Responsive sizes

### Code
- [ ] Minified JS/CSS
- [ ] Tree shaking enabled
- [ ] Dead code removed
- [ ] Dependencies updated
- [ ] Bundle analyzed

### Performance
- [ ] Lighthouse score > 90
- [ ] PageSpeed score > 90
- [ ] Core Web Vitals: Good
- [ ] First load < 3s
- [ ] Interactive < 5s

### SEO
- [ ] Sitemap submitted
- [ ] Robots.txt configured
- [ ] Meta tags complete
- [ ] Structured data valid
- [ ] Mobile-friendly
- [ ] HTTPS enabled
- [ ] Canonical URLs set

## 📞 Support

Jika ada masalah:
1. Check error di browser console
2. Review build logs
3. Test di incognito mode
4. Clear cache & cookies
5. Test di device berbeda

## 📚 Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- AOS: https://michalsnik.github.io/aos/

### SEO Tools
- Google Search Console: https://search.google.com/search-console
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/

### Performance Tools
- WebPageTest: https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/
- Bundle Analyzer: https://www.npmjs.com/package/@next/bundle-analyzer

Good luck with your deployment! 🚀✨

---

**Last Updated**: February 15, 2026
**Version**: 1.0.0
