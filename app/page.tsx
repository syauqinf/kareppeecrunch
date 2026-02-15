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

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-orange-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Langsung ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
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
    </>
  );
}
