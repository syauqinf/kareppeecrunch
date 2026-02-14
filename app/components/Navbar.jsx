'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  const navigation = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#features' },
    { name: 'Produk', href: '#products' },
    { name: 'Testimoni', href: '#reviews' },
    { name: 'Bantuan', href: '#pusat-bantuan' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between text-white">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Kareppee Crunch - Kerupuk Singkong Premium" 
              className="h-8 w-auto"
              width="120"
              height="32"
              loading="eager"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            {/* Buy Button */}
            <a
              href="#cta"
              className="flex items-center gap-2 border border-white/60 py-2 px-4 rounded-full text-sm"
              onClick={(e) => handleSmoothScroll(e, '#cta')}
            >
              <ShoppingCart className="w-4 h-4" />
              Beli
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-white">
          <div className="px-6 py-6 space-y-4 text-sm">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block opacity-80 hover:opacity-100"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}

            <a 
              href="#cta"
              className="mt-4 w-full flex items-center justify-center gap-2 border border-white/60 py-2 px-4 rounded-full text-sm"
              onClick={(e) => handleSmoothScroll(e, '#cta')}
            >
              <ShoppingCart className="w-4 h-4" />
              Beli
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
