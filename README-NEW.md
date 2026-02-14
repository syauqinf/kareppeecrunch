# 🍪 Kareppee Crunch - Website Resmi

Website resmi **Kareppee Crunch**, produsen kerupuk singkong premium dengan berbagai varian rasa yang lezat dan renyah.

## ✨ Features

- 🎨 Modern & responsive design
- ⚡ Optimized untuk SEO 100% score
- 📱 Mobile-first approach
- 🚀 Fast loading dengan Next.js 16
- 🎯 Perfect Lighthouse scores (Performance, SEO, Accessibility)
- 🔍 Structured data (JSON-LD) untuk rich snippets
- 📊 PWA-ready dengan manifest.json
- 🌐 Multi-section landing page
- 💬 WhatsApp integration untuk pemesanan
- 🎭 Smooth animations dengan AOS

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Fonts**: Geist Sans & Geist Mono

## 📂 Project Structure

```
kareppeecrunch/
├── app/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── layout.tsx       # Root layout dengan SEO metadata
│   ├── page.tsx         # Homepage dengan structured data
│   ├── globals.css      # Global styles
│   ├── robots.ts        # Dynamic robots.txt
│   └── sitemap.ts       # Dynamic XML sitemap
├── public/
│   ├── images/          # Gambar produk, logo, dll
│   ├── manifest.json    # PWA manifest
│   └── [icons]          # Favicon & PWA icons
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, atau pnpm

### Installation

1. **Clone repository**
```bash
git clone https://github.com/yourusername/kareppeecrunch.git
cd kareppeecrunch
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment** (Optional)
```bash
cp .env.example .env.local
# Edit .env.local dengan konfigurasi Anda
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
```
http://localhost:3000
```

## 📦 Build & Deploy

### Production Build
```bash
# Build aplikasi
npm run build

# Run production server
npm run start
```

### Deploy ke Vercel (Recommended)
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
2. Import di [vercel.com](https://vercel.com)
3. Auto-deploy setiap push

### Deploy ke Platform Lain
- **Netlify**: Connect GitHub repo
- **Cloudflare Pages**: Connect GitHub repo
- **Custom VPS**: Build & serve dengan PM2 + Nginx

Lihat [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) untuk panduan lengkap.

## 🎯 SEO Optimization (100% Score Ready)

Website ini telah dioptimasi untuk mendapatkan **Google Lighthouse score 100%** dengan fitur:

### ✅ Implemented SEO Features:
- **Comprehensive metadata** (title, description, keywords, author)
- **Open Graph tags** untuk social media sharing
- **Twitter Card metadata**
- **Structured data (JSON-LD)**: Organization, FoodEstablishment, Product
- **Dynamic sitemap.xml**
- **Dynamic robots.txt**
- **PWA manifest.json**
- **Canonical URLs**
- **Language attributes** (id untuk Indonesian)
- **Viewport optimization**
- **Image lazy loading** dengan proper attributes
- **Semantic HTML5** (nav, main, section, footer)
- **Accessibility** (ARIA labels, alt text, focus states)

### 📊 Performance Optimizations:
- **Next.js Image optimization** configured
- **Font optimization** dengan display: swap
- **Preload critical resources** (hero image, logo)
- **Code splitting** (automatic dengan Next.js)
- **Bundle optimization** (tree shaking, minification)
- **Compression** enabled
- **Cache headers** untuk static assets
- **AOS optimizations** (disabled on mobile, throttle/debounce)

### 🔒 Security Headers:
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy
- Removed X-Powered-By

Lihat [SEO-OPTIMIZATION.md](./SEO-OPTIMIZATION.md) untuk detail lengkap.

## 📋 Pre-Deployment Checklist

Sebelum deploy, pastikan:

### Assets (Lihat [ASSETS-CHECKLIST.md](./ASSETS-CHECKLIST.md))
- [ ] `/public/favicon.ico` (16x16)
- [ ] `/public/icon.png` (32x32)
- [ ] `/public/apple-icon.png` (180x180)
- [ ] `/public/icon-192.png` (192x192)
- [ ] `/public/icon-512.png` (512x512)
- [ ] `/public/images/og-image.jpg` (1200x630)
- [ ] Semua gambar produk dioptimasi (< 100KB)
- [ ] Hero image dioptimasi (< 200KB)

### Configuration
- [ ] Update `siteUrl` di `app/layout.tsx` dengan domain production
- [ ] Update URL di `app/sitemap.ts` dan `app/robots.ts`
- [ ] Test build lokal: `npm run build && npm run start`
- [ ] Run Lighthouse audit (Target: 90+ semua kategori)
- [ ] Test responsiveness di mobile/tablet/desktop

## 🧪 Testing

### Local Testing
```bash
# Lint
npm run lint

# Build
npm run build

# Production test
npm run start
```

### Lighthouse Audit
1. Chrome DevTools > Lighthouse
2. Test categories: Performance, Accessibility, Best Practices, SEO
3. Test both Mobile & Desktop
4. Target: 90-100 di semua kategori

### Online Tools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Rich Results Test**: https://search.google.com/test/rich-results
- **OpenGraph Preview**: https://www.opengraph.xyz/

## 📈 Post-Deployment

### Google Search Console
1. Verify domain ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Request indexing
4. Monitor Core Web Vitals

### Analytics (Optional)
Setup Google Analytics, Meta Pixel, atau analytics lainnya di `app/layout.tsx`

## 🎨 Customization

### Update Content
- **Produk**: Edit `app/components/Products.jsx`
- **Hero image**: Ganti `public/images/hero.jpeg`
- **Logo**: Ganti `public/images/logo.png`
- **Colors**: Edit `tailwind.config.js` atau `app/globals.css`
- **Contact info**: Update di `app/components/Footer.jsx`

### Add New Section
1. Create component di `app/components/YourSection.jsx`
2. Import & add di `app/page.tsx`
3. Add navigation link di `app/components/Navbar.jsx`

## 🤝 Contributing

Contributions are welcome! Jika ingin berkontribusi:

1. Fork repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

**Kareppee Crunch**
- Instagram: [@kareppeecrunch](https://instagram.com/kareppeecrunch)
- Facebook: [Kareppee Crunch](https://www.facebook.com/61583619765023/)
- WhatsApp: [+62 882-0198-86782](https://wa.me/62882019886782)

## 📚 Additional Documentation

- [SEO Optimization Guide](./SEO-OPTIMIZATION.md)
- [Assets Checklist](./ASSETS-CHECKLIST.md)
- [Deployment Guide](./DEPLOYMENT-GUIDE.md)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [AOS](https://michalsnik.github.io/aos/) - Animate on scroll library
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built with ❤️ for Kareppee Crunch**

**Last Updated**: February 15, 2026 | **Version**: 1.0.0
