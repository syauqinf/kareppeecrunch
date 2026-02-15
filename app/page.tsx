'use client'

import { useEffect } from 'react'
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
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    console.log('Initializing AOS in Home component...')
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
    console.log('AOS initialized in Home component')
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
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
      <Footer />
    </div>
  );
}
