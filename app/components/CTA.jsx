'use client'

import { ShoppingCart, Star, Truck, Check, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { AnimateOnScroll, StaggerContainer, StaggerItem } from './MotionWrappers'

export default function CTA() {
  const [showPopup, setShowPopup] = useState(false)

  const handleBuyNow = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleContactMinka = () => {
    const whatsappUrl = 'https://wa.me/62882019886782'
    window.open(whatsappUrl, '_blank')
  }

  const marketplaceLinks = [
    {
      name: 'Shopee',
      url: 'https://shopee.co.id/kareppeecrunch',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      name: 'Tokopedia',
      url: 'https://www.tokopedia.com/kareppee-crunch-store',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'TikTok Shop',
      url: 'https://www.tiktok.com/@kareppeecrunch',
      color: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'LocaLoka',
      url: 'https://localoka.co.id/store/739757dd-a8b7-4c68-86ad-d408c496afa5',
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ]
  return (
    <section id="cta" className="py-12 md:py-16 bg-orange-600" aria-label="Beli Kareppee Crunch sekarang">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Yuk, Coba <span className="text-orange-100">Kareppee Crunch</span> Sekarang!
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="text-base md:text-lg text-orange-100 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto">
            Kerupuk singkong renyah dengan berbagai varian rasa. Dijamin bikin nagih!
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
            <button 
              onClick={handleBuyNow}
              aria-label="Beli Kareppee Crunch sekarang"
              className="min-h-[48px] bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm md:text-base"
            >
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" aria-hidden="true" />
              Beli Sekarang
            </button>
            
            <button 
              onClick={handleContactMinka}
              aria-label="Hubungi Minka via WhatsApp"
              className="min-h-[48px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-200 flex items-center justify-center text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" aria-hidden="true" />
              Hubungi Minka
            </button>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="flex justify-center space-x-8 text-orange-100">
          <StaggerItem className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" aria-hidden="true" />
            <span>5.0 Rating</span>
          </StaggerItem>
          <StaggerItem className="flex items-center">
            <Truck className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>Pengiriman Cepat</span>
          </StaggerItem>
          <StaggerItem className="flex items-center">
            <Check className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>HALAL</span>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Marketplace Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Pilih marketplace untuk membeli Kareppee Crunch"
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Pilih Marketplace
              </h3>
              <button
                onClick={handleClosePopup}
                aria-label="Tutup popup marketplace"
                className="min-h-[48px] text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-center">
              Beli Kareppee Crunch di marketplace favorit Anda
            </p>

            {/* Marketplace Options */}
            <div className="grid grid-cols-2 gap-4">
              {marketplaceLinks.map((marketplace, index) => (
                <a
                  key={index}
                  href={marketplace.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Beli di ${marketplace.name}`}
                  className={`${marketplace.color} min-h-[48px] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center text-center`}
                >
                  {marketplace.name}
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Dibuka di tab baru • Klik X untuk menutup
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
