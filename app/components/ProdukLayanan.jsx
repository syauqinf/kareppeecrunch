'use client'

import { Package, ChefHat, Gift, Users } from 'lucide-react'

export default function ProdukLayanan() {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  const services = [
    {
      id: 1,
      icon: Package,
      title: 'Kerupuk Singkong Varian Rasa',
      subtitle: 'Signature',
      description: 'Produk utama berupa kerupuk singkong dengan tekstur ringan dan renyah yang tersedia dalam berbagai pilihan rasa inovatif.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 2,
      icon: ChefHat,
      title: 'Camilan Tradisional Autentik Makassar',
      subtitle: 'Heritage Recipe',
      description: 'Produk camilan yang tetap mempertahankan metode pengolahan warisan "Tanah Daeng" dengan teknik pipih daun pisang, menjadikannya pilihan utama bagi konsumen yang mencari cita rasa lokal yang autentik namun berkualitas modern.',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: Gift,
      title: 'Paket Oleh-Oleh Khas',
      subtitle: 'Gowa/Makassar',
      description: 'Layanan penyediaan paket camilan praktis dalam kemasan standing pouch yang menarik dan higienis, dirancang khusus untuk memenuhi kebutuhan wisatawan atau pelanggan sebagai buah tangan khas Sulawesi Selatan yang tahan lama.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      icon: Users,
      title: 'Pasokan Bahan Baku Lokal Terintegrasi',
      subtitle: 'Social Impact',
      description: 'Sebagai bagian dari dampak sosial, kami mengelola rantai pasok singkong berkualitas tinggi yang didapat langsung dari petani lokal, menjamin kesegaran bahan baku sekaligus mendukung keberlanjutan ekonomi masyarakat sekitar.',
      color: 'from-blue-500 to-blue-600'
    }
  ]

  return (
    <section id="produk-layanan" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <Package className="w-8 h-8 text-orange-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Produk & <span className="text-orange-600">Layanan</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Produk utama dan layanan unggulan dari Kareppee Crunch
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={service.id} className="group relative">
              {/* Service Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-full flex flex-col relative overflow-hidden">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <span className="inline-flex items-center bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-medium">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500 pointer-events-none"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Tertarik dengan Produk dan Layanan Kami?
            </h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Jelajahi berbagai pilihan produk dan layanan terbaik dari Kareppee Crunch untuk memenuhi kebutuhan Anda
            </p>
            <button 
              onClick={(e) => {
                handleSmoothScroll(e, '#products')
              }}
              className="bg-white text-orange-700 hover:bg-orange-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <Package className="w-5 h-5 mr-2" />
              Lihat Semua Produk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
