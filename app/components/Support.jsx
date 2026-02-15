'use client'

import Image from 'next/image'
import { Handshake } from 'lucide-react'
import { AnimateOnScroll, StaggerContainer, StaggerItem } from './MotionWrappers'

const Support = () => {
  const partners = [
    { name: 'DekatLokal', logo: '/images/dekat-lokal.png', description: 'Platform UMKM Lokal' },
    { name: 'Rumah BUMN Makassar', logo: '/images/rumah-bumn.png', description: 'Inkubator Bisnis BUMN' },
    { name: 'Bank BRI', logo: '/images/bank-bri.png', description: 'Mitra Perbankan' }
  ]

  return (
    <section id="support" aria-label="Mitra pendukung Kareppee Crunch" className="py-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6" aria-hidden="true">
            <Handshake className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Didukung Oleh <span className="text-orange-600">Mitra Terpercaya</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kareppee Crunch didukung oleh mitra-mitra terpercaya untuk memberikan layanan terbaik
            dan mendukung pertumbuhan UMKM di Indonesia
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <StaggerItem key={index}>
              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 ease-out border border-gray-100">
                  <div className="flex items-center justify-center h-24">
                    <Image
                      src={partner.logo}
                      alt={`Logo mitra ${partner.name} - ${partner.description}`}
                      width={200}
                      height={96}
                      className="max-h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Support