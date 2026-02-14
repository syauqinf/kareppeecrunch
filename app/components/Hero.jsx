'use client'

import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleDiscoverClick = () => {
    const target = document.querySelector('#support')
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpeg')",
          filter: 'brightness(1.12) contrast(1.08) saturate(1.06)'
        }}
      />

      {/* Bottom Gradient for readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 pb-20 text-white">
          
          {/* Brand Name */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.015em] animate-slide-in-left" data-aos="fade-up" data-aos-duration="800">
            Kareppee Crunch
          </h1>

          {/* CTA */}
          {isClient && (
            <button 
              onClick={handleDiscoverClick}
              className="mt-5 inline-block text-xs uppercase tracking-widest border border-white/70 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover-lift animate-fade-in"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Discover
            </button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce-gentle">
        <ChevronDown className="w-5 h-5" />
      </div>

    </section>
  )
}
