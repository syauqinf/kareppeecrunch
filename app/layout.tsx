import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_ORIGIN = "https://kareppeecrunch.dekatlokal.com";
const SITE_URL = `${SITE_ORIGIN}/`;
const SITE_NAME = "Kareppee Crunch";
const SITE_TITLE =
  "Kareppee Crunch - Kerupuk Singkong Premium Khas Makassar Gowa";
const SITE_DESCRIPTION =
  "Kareppee Crunch adalah kerupuk singkong premium khas Makassar Gowa yang renyah, halal, dan dibuat dari singkong pilihan. Tersedia 6 varian rasa untuk camilan, oleh-oleh, dan peluang reseller.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ea580c",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Kareppee Crunch",
    "kerupuk singkong",
    "kerupuk singkong premium",
    "krupuk singkong premium",
    "kerupuk singkong Makassar",
    "kerupuk singkong Gowa",
    "camilan khas Makassar",
    "camilan khas Gowa",
    "oleh-oleh Makassar",
    "oleh-oleh Gowa",
    "kerupuk halal",
    "kerupuk singkong halal",
    "camilan singkong",
    "snack singkong",
    "snack Indonesia",
    "camilan renyah",
    "camilan UMKM",
    "reseller kerupuk singkong",
    "kerupuk singkong pedas daun jeruk",
    "kerupuk singkong original",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Kareppee Crunch - Kerupuk Singkong Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero.jpeg"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: { url: "/images/logo.png", type: "image/png" },
    apple: { url: "/images/logo.png" },
  },
  manifest: "/manifest.json",
  verification: {
    google: "xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo",
  },
  other: {
    "google-site-verification": "xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo",
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_ORIGIN}/images/logo.png`,
  description: SITE_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62882019886782",
    contactType: "customer service",
    availableLanguage: "Indonesian",
  },
  sameAs: [
    "https://instagram.com/kareppeecrunch",
    "https://www.facebook.com/61583619765023/",
    "https://tiktok.com/@kareppeecrunch",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${SITE_ORIGIN}/images/hero.jpeg`,
  url: SITE_URL,
  telephone: "+62882019886782",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Perumahan Fakultas Teknik Unhas Gowa, Blok H59",
    addressLocality: "Gowa",
    addressRegion: "Sulawesi Selatan",
    addressCountry: "ID",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },
  priceRange: "Rp 15.000 - Rp 19.000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "4",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "Kareppee Crunch krupuk singkong premium khas Makassar Gowa",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: SITE_URL,
    },
  ],
};

// Product Schema for SEO
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Varian Kareppee Crunch",
  description: "Koleksi kerupuk singkong premium dengan berbagai varian rasa",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Kareppee Crunch Original",
        description: "Kerupuk singkong rasa klasik autentik dengan gurih alami",
        image: `${SITE_ORIGIN}/images/varian/original.jpg`,
        brand: { "@type": "Brand", name: "Kareppee Crunch" },
        offers: {
          "@type": "Offer",
          price: "15000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "4",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Kareppee Crunch Hotlado",
        description: "Perpaduan pedas dan gurih yang menggugah selera",
        image: `${SITE_ORIGIN}/images/varian/hotlado.jpg`,
        brand: { "@type": "Brand", name: "Kareppee Crunch" },
        offers: {
          "@type": "Offer",
          price: "16000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Kareppee Crunch Jagung Bakar",
        description: "Rasa manis gurih jagung bakar yang khas",
        image: `${SITE_ORIGIN}/images/varian/jagungbakar.jpg`,
        brand: { "@type": "Brand", name: "Kareppee Crunch" },
        offers: {
          "@type": "Offer",
          price: "17000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Kareppee Crunch Pedas Daun Jeruk",
        description: "Pedas segar dengan aroma daun jeruk yang unik",
        image: `${SITE_ORIGIN}/images/varian/pedasdaunjeruk.jpg`,
        brand: { "@type": "Brand", name: "Kareppee Crunch" },
        offers: {
          "@type": "Offer",
          price: "18000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Kareppee Crunch Green Matcha",
        description: "Perpaduan matcha premium dengan singkong renyah",
        image: `${SITE_ORIGIN}/images/varian/greenmatcha.jpg`,
        brand: { "@type": "Brand", name: "Kareppee Crunch" },
        offers: {
          "@type": "Offer",
          price: "19000",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Kareppee Crunch Cokelat",
        description: "Manis cokelat premium yang melengkapi rasa",
        image: `${SITE_ORIGIN}/images/varian/cokelat.jpg`,
        brand: { "@type": "Brand", name: "Kareppee Crunch" },
        offers: {
          "@type": "Offer",
          price: "18500",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu Kareppee Crunch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kareppee Crunch adalah merek kerupuk singkong premium yang dibuat dari singkong pilihan berkualitas tinggi dengan proses produksi yang higienis. Produk kami menggunakan resep terbaik dengan cita rasa autentik Indonesia dan telah memiliki Sertifikat Halal MUI, Perizinan Berusaha Berbasis Risiko, dan SPP-IRT.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara memesan produk Kareppee Crunch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anda dapat memesan melalui website kami, WhatsApp, atau marketplace favorit Anda seperti Shopee, Tokopedia, dan TikTok Shop. Cukup pilih varian yang diinginkan dan ikuti proses pembayaran.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah produk Kareppee Crunch aman dikonsumsi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, produk kami 100% aman dikonsumsi. Kami telah memiliki sertifikat HALAL dari MUI, menggunakan bahan alami tanpa pengawet berbahaya, dan diproduksi dengan standar keamanan pangan yang ketat.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara pengiriman produk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami melayani pengiriman ke seluruh Indonesia dengan berbagai pilihan ekspedisi terpercaya. Waktu pengiriman bervariasi tergantung lokasi tujuan.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
