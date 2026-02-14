import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Support from './components/Support'
import Legalitas from './components/Legalitas'
import Features from './components/Features'
import Story from './components/Story'
import Products from './components/Products'
import ProdukLayanan from './components/ProdukLayanan'
import Reviews from './components/Reviews'
import PusatBantuan from './components/PusatBantuan'
import CTA from './components/CTA'
import PeluangKemitraan from './components/PeluangKemitraan'
import Footer from './components/Footer'
import AOSInit from './components/AOSInit'

// JSON-LD Structured Data untuk SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Kareppee Crunch",
  "description": "Kerupuk singkong premium dengan cita rasa autentik Indonesia. Varian Original, Pedas, Keju, dan BBQ.",
  "url": "https://kareppeecrunch.vercel.app",
  "logo": "https://kareppeecrunch.vercel.app/images/logo.png",
  "image": "https://kareppeecrunch.vercel.app/images/hero.jpeg",
  "servesCuisine": "Indonesian",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://instagram.com/kareppeecrunch",
    "https://www.facebook.com/61583619765023/"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock"
  }
}

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kareppee Crunch",
  "url": "https://kareppeecrunch.vercel.app",
  "logo": "https://kareppeecrunch.vercel.app/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["Indonesian"]
  },
  "sameAs": [
    "https://instagram.com/kareppeecrunch",
    "https://www.facebook.com/61583619765023/"
  ]
}

const productData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kareppee Crunch - Kerupuk Singkong Premium",
  "description": "Kerupuk singkong premium dengan berbagai varian rasa: Original, Pedas, Keju, dan BBQ. Dibuat dari bahan berkualitas tinggi, halal, dan renyah.",
  "image": "https://kareppeecrunch.vercel.app/images/hero.jpeg",
  "brand": {
    "@type": "Brand",
    "name": "Kareppee Crunch"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />

      <AOSInit />
      
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Support />
          <Legalitas />
          <Features />
          <Story />
          <Products />
          <ProdukLayanan />
          <Reviews />
          <PusatBantuan />
          <CTA />
          <PeluangKemitraan />
        </main>
        <Footer />
      </div>
    </>
  );
}
