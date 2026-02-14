'use client'

import { MapPin, Clock, Calendar, Award, Heart, Target, Users } from 'lucide-react'

export default function Story() {
  const businessInfo = [
    {
      icon: MapPin,
      title: 'Lokasi Usaha',
      value: 'Perumahan Fakultas Teknik Unhas Gowa, Blok H59',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      value: 'Senin-Minggu (08.00 - 22.00)',
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      title: 'Mulai Beroperasi',
      value: 'Juni 2025',
      color: 'bg-orange-500'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Teknik Autentik',
      description: 'Menggunakan teknik pengolahan tradisional untuk menghasilkan kerupuk berkualitas'
    },
    {
      icon: Users,
      title: 'Dukungan Lokal',
      description: 'Membeli langsung dari petani lokal untuk mendukung ekonomi masyarakat'
    },
    {
      icon: Target,
      title: 'Kualitas Terjamin',
      description: 'Produk premium yang dibuat dengan standar kualitas tinggi'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 animate-scale-in" data-aos="zoom-in" data-aos-duration="600">
            <Award className="w-8 h-8 text-orange-600" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-orange-600">Kareppee Crunch</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kareppee Crunch adalah produsen kerupuk singkong asli Gowa dengan kualitas premium
          </p>

          {/* Business Type */}
          <div className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-full mt-6 animate-scroll-in" data-aos="fade-up" data-aos-delay="200">
            <span className="text-lg font-semibold">Kerupuk Singkong</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Business Description */}
          <div data-aos="fade-right" data-aos-duration="700">
            <div className="bg-gray-50 rounded-2xl p-8 hover-lift transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ringkasan Usaha
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kareppee Crunch adalah produsen kerupuk singkong asal Gowa yang 
                  memproduksi camilan tradisional dengan kualitas modern.
                </p>
                
                <p>
                  Kami menggunakan bahan baku singkong pilihan dari petani lokal 
                  dan mengolahnya dengan teknik autentik khas Makassar.
                </p>
                
                <p>
                  Setiap produk dibuat dengan standar kualitas tinggi untuk 
                  memastikan kepuasan pelanggan.
                </p>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-4" data-aos="fade-left" data-aos-duration="700">
            {businessInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover-lift transition-all duration-300" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100}>
                <div className="flex items-start space-x-4">
                  <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 hover-scale`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-orange-50 rounded-2xl p-12 hover-lift transition-all duration-300" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prinsip yang menjadi dasar dalam setiap produk yang kami buat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center h-full" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col hover-lift transition-all duration-300">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm flex-1">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
