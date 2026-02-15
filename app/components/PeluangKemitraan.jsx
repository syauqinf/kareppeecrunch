'use client'

import { Users, TrendingUp, Shield, Zap, Package, CheckCircle, Phone, Star, ArrowRight, MessageCircle } from 'lucide-react'

export default function PeluangKemitraan() {
  const handleWhatsAppOrder = (packageName) => {
    const message = `Halo Minka, saya tertarik bergabung menjadi Reseller Kareppee Crunch Paket ${packageName}. Mohon info selanjutnya.`
    const whatsappUrl = `https://wa.me/62882019886782?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
  const packages = [
    {
      name: 'Paket Ekonomi',
      price: 'Rp 200rb',
      items: '20 pcs',
      description: 'Cocok untuk memulai perjalanan bisnis Anda',
      popular: false
    },
    {
      name: 'Paket Standar',
      price: 'Rp 470rb',
      items: '50 pcs',
      description: 'Pilihan favorit para reseller kami',
      popular: true
    },
    {
      name: 'Paket Pro',
      price: 'Rp 4jt',
      items: '500 pcs',
      description: 'Investasi cerdas untuk profit maksimal',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Modal Minimal',
      description: 'Mulai bisnis dengan investasi terjangkau',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Legal Terjamin',
      description: 'Bisnis dengan perizinan lengkap dan sah',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Sistem Terpadu',
      description: 'Dukungan penuh untuk kesuksesan bisnis',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Komunitas Suportif',
      description: 'Bergabung dengan jaringan reseller sukses',
      color: 'bg-orange-500'
    }
  ]

  const facilities = [
    {
      icon: Package,
      title: 'Order Otomatis',
      description: 'Sistem pemesanan modern dan efisien'
    },
    {
      icon: Star,
      title: 'Marketing Kit',
      description: 'Materi promosi profesional dan siap pakai'
    },
    {
      icon: CheckCircle,
      title: 'Mentoring Gratis',
      description: 'Bimbingan bisnis dari ahli berpengalaman'
    }
  ]

  return (
    <section id="peluang-kemitraan" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-8 shadow-lg">
            <Star className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Peluang <span className="text-orange-600">Reseller</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bergabung dengan ekosistem bisnis Kareppee Crunch dan raih kesuksesan finansial Anda
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Package Options */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pilihan Paket Reseller
            </h3>
            <p className="text-lg text-gray-600">
              Pilih paket yang sesuai dengan tujuan bisnis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 ${pkg.popular ? 'border-orange-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Best Seller
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h4>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 font-medium mb-2">
                    {pkg.items}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <button 
                    onClick={() => handleWhatsAppOrder(pkg.name.replace('Paket ', ''))}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Pesan Paket Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Fasilitas Eksklusif
            </h3>
            <p className="text-lg text-gray-600">
              Dukungan penuh untuk kesuksesan bisnis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-200">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {facility.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
