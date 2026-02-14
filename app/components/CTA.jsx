'use client'

import { ShoppingCart, Star, Truck, Check, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'

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
    <section id="cta" className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 animate-slide-in-left" data-aos="fade-up" data-aos-duration="700">
          Yuk, Coba <span className="text-orange-100">Kareppee Crunch</span> Sekarang!
        </h2>
        <p className="text-base md:text-lg text-orange-100 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
          Kerupuk singkong renyah dengan berbagai varian rasa. Dijamin bikin nagih!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <button 
            onClick={handleBuyNow}
            className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base hover-lift"
          >
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Beli Sekarang
          </button>
          
          <button 
            onClick={handleContactMinka}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base hover-lift"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Hubungi Minka
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-orange-100" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
          <div className="flex items-center animate-float">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span>5.0 Rating</span>
          </div>
          <div className="flex items-center animate-float" style={{ animationDelay: '0.5s' }}>
            <Truck className="w-5 h-5 mr-2" />
            <span>Pengiriman Cepat</span>
          </div>
          <div className="flex items-center animate-float" style={{ animationDelay: '1s' }}>
            <Check className="w-5 h-5 mr-2" />
            <span>HALAL</span>
          </div>
        </div>
      </div>

      {/* Marketplace Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Pilih Marketplace
              </h3>
              <button
                onClick={handleClosePopup}
                className="text-gray-400 hover:text-gray-600 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 hover-scale"
              >
                <X className="w-5 h-5" />
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
                  className={`${marketplace.color} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-center animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
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
