'use client'

import { ArrowRight, Star, ChefHat, MapPin } from 'lucide-react'

export default function HeroWithBackground({ backgroundImage = null }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Potato Field */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative">
          {backgroundImage ? (
            <img 
              src={backgroundImage} 
              alt="Kareppee Crunch Potato Field" 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/20 to-orange-900/40"></div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/20 to-orange-900/40"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-700 font-bold text-2xl">KC</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">Kareppee Crunch</h1>
                  <p className="text-orange-100 text-sm">Made with Love from Indonesia</p>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Dari
                <br />
                <span className="text-orange-200">Ubi Pilihan</span>
                <br />
                Untuk Indonesia
              </h2>

              {/* Description */}
              <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-lg">
                Nikmati keripik singkong premium yang dibuat dari bahan alami pilihan. 
                Perfect Quick, Perfect Taste, Perfect Mood.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-orange-700 hover:bg-orange-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                  Discover Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-700 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                  <MapPin className="mr-2 w-5 h-5" />
                  Find in Store
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">4.9 (2,341+ Reviews)</span>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  HALAL
                </div>
              </div>
            </div>

            {/* Right Content - Product Display */}
            <div className="relative">
              {/* Burlap Sacks */}
              <div className="relative">
                {/* Main Product Bag */}
                <div className="absolute top-10 right-10 z-30 transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 shadow-2xl">
                    <div className="bg-white rounded-xl p-4">
                      <div className="w-32 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <ChefHat className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-orange-700 font-bold text-sm">Kareppee</p>
                          <p className="text-orange-600 text-xs">Crunch</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Burlap Sack 1 */}
                <div className="absolute bottom-0 left-0 z-20">
                  <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-2xl p-6 shadow-xl transform -rotate-6">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-orange-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-3xl">🍠</span>
                      </div>
                      <p className="font-bold">Premium Ubi</p>
                    </div>
                  </div>
                </div>

                {/* Loose Potatoes */}
                <div className="absolute top-20 left-10 z-10">
                  <div className="bg-orange-600 rounded-full w-12 h-12 shadow-lg"></div>
                </div>
                <div className="absolute top-32 left-20 z-10">
                  <div className="bg-orange-500 rounded-full w-10 h-10 shadow-lg"></div>
                </div>
                <div className="absolute bottom-20 right-20 z-10">
                  <div className="bg-orange-600 rounded-full w-14 h-14 shadow-lg"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 right-20 z-10">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce">
                    <span className="text-2xl">🌶️</span>
                  </div>
                </div>
                <div className="absolute bottom-10 right-0 z-10">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                    <span className="text-2xl">🍠</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Slogan */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 text-white">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-orange-100 font-bold">⚡</span>
                </div>
                <span className="font-semibold text-lg">Perfect Quick</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-orange-100 font-bold">👅</span>
                </div>
                <span className="font-semibold text-lg">Perfect Taste</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-orange-100 font-bold">😊</span>
                </div>
                <span className="font-semibold text-lg">Perfect Mood</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Right Button */}
      <div className="absolute top-6 right-6 z-30">
        <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-orange-700 font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center">
          <MapPin className="mr-2 w-4 h-4" />
          Find in Store
        </button>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
