import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const siteUrl = "https://kareppeecrunch.com";
const siteName = "Kareppee Crunch";
const siteDescription = "Kerupuk singkong premium dengan cita rasa autentik Indonesia. Varian Original, Pedas, Keju, dan BBQ. Renyah, lezat, dan halal. Peluang kemitraan tersedia!";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Kerupuk Singkong Premium Indonesia`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "kerupuk singkong",
    "kerupuk premium",
    "kareppee crunch",
    "camilan indonesia",
    "kerupuk renyah",
    "kerupuk halal",
    "snack indonesia",
    "makanan ringan",
    "kerupuk original",
    "kerupuk pedas",
    "kerupuk keju",
    "kerupuk bbq",
    "kemitraan kerupuk",
    "franchise makanan"
  ],
  authors: [{ name: "Kareppee Crunch" }],
  creator: "Kareppee Crunch",
  publisher: "Kareppee Crunch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Kerupuk Singkong Premium Indonesia`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Kareppee Crunch - Kerupuk Singkong Premium',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Kerupuk Singkong Premium Indonesia`,
    description: siteDescription,
    images: [`${siteUrl}/images/og-image.jpg`],
    creator: '@kareppeecrunch',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo',
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/hero.jpeg" />
        <link rel="preload" as="image" href="/images/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
