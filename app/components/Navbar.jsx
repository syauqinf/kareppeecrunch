'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    <nav
      role="navigation"
      aria-label="Navigasi utama"
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between text-white">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            aria-label="Kareppeee Crunch - Kembali ke beranda"
            className="flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="Kareppeee Crunch"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm" role="menubar">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                role="menuitem"
                aria-label={`Navigasi ke ${item.name}`}
                className="text-white/90 hover:text-white transition-colors duration-200 min-h-[48px] flex items-center"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            {/* Buy Button */}
            <a
              href="#cta"
              role="menuitem"
              aria-label="Beli produk Kareppeee Crunch"
              className="flex items-center gap-2 border border-white/60 py-2 px-4 rounded-full text-sm min-h-[48px]"
              onClick={(e) => handleSmoothScroll(e, '#cta')}
            >
              <ShoppingCart className="w-4 h-4" aria-hidden="true" />
              Beli
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Menu navigasi mobile"
          className="md:hidden bg-black/80 backdrop-blur-md text-white"
        >
          <div className="px-6 py-6 space-y-2 text-sm">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                role="menuitem"
                aria-label={`Navigasi ke ${item.name}`}
                className="block opacity-80 hover:opacity-100 min-h-[48px] flex items-center"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#cta"
              role="menuitem"
              aria-label="Beli produk Kareppeee Crunch"
              className="mt-4 w-full flex items-center justify-center gap-2 border border-white/60 py-2 px-4 rounded-full text-sm min-h-[48px]"
              onClick={(e) => handleSmoothScroll(e, '#cta')}
            >
              <ShoppingCart className="w-4 h-4" aria-hidden="true" />
              Beli
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
