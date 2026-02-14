'use client'

import { Star, Quote, Heart } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Bahrul Rannu',
      avatar: 'BR',
      rating: 5,
      product: 'Kareppee Hotlado & Coklat',
      review: 'Saya suka keduanya varian hotlado & coklat. Yang rasa hotlado enak banget pokoknya mantul dan wajib order lagi sih😋😁'
    },
    {
      id: 2,
      name: 'Sharifah Ulya',
      avatar: 'SU',
      rating: 5,
      product: 'Kareppee Green Matcha',
      review: 'Udah cobain, enak recommended, harganya juga murah. Teksturnya renyah, beda dengan kerupuk singkong lain, yang ini lebih gurih dan tidak keras.'
    },
    {
      id: 3,
      name: 'Rijal Ucil',
      avatar: 'RU',
      rating: 5,
      product: 'Kareppee Pedas Daun Jeruk',
      review: 'Barang datang dengan cepat, aman dan rasanya enakk banget jadi ketagihan, thank you so much!'
    },
    {
      id: 4,
      name: 'Farsya Arrayyan',
      avatar: 'FA',
      rating: 5,
      product: 'Kareppee Hotlado',
      review: 'Enak poooolll, ga nyangka si rasanya, baru nyobain Kareppee pertama kali😋 Cocok di lidahku.'
    }
  ]

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-200 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 animate-scale-in" data-aos="zoom-in" data-aos-duration="600">
            <Heart className="w-8 h-8 text-orange-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata <span className="text-orange-600">Pelanggan</span> Kami
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testimoni dari pelanggan setia Kareppee Crunch yang telah merasakan kelezatan kerupuk singkong premium kami
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={review.id} className="group relative" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100}>
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300 h-full flex flex-col relative overflow-hidden hover-lift">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-orange-600" />
                </div>

                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shadow-lg hover-scale">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Badge */}
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full border border-orange-200 font-medium">
                    {review.product}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                  "{review.review}"
                </p>

                {/* Bottom Accent */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center text-orange-500">
                      <Heart className="w-4 h-4 fill-current mr-1" />
                      <span className="text-xs font-medium">Verified Purchase</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden hover-lift transition-all duration-300" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8">Dipercaya oleh Para Pelanggan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group hover-scale cursor-default">
                <div className="text-4xl font-bold mb-2 transition-transform duration-300">Semua</div>
                <div className="text-orange-100">Pelanggan Puas</div>
              </div>
              <div className="group hover-scale cursor-default">
                <div className="text-4xl font-bold mb-2 transition-transform duration-300">5.0</div>
                <div className="text-orange-100">Rating Rata-rata</div>
              </div>
              <div className="group hover-scale cursor-default">
                <div className="text-4xl font-bold mb-2 transition-transform duration-300">98%</div>
                <div className="text-orange-100">Repeat Order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
