'use client'

import { MessageCircle, ExternalLink } from 'lucide-react'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Original',
      description: 'Rasa klasik autentik dengan gurih alami singkong',
      price: 'Rp 15.000',
      image: '/images/varian/original.jpg',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Hotlado',
      description: 'Perpaduan pedas dan gurih yang menggugah selera',
      price: 'Rp 16.000',
      image: '/images/varian/hotlado.jpg',
      badge: 'Hot'
    },
    {
      id: 3,
      name: 'Jagung Bakar',
      description: 'Rasa manis gurih jagung bakar yang khas',
      price: 'Rp 17.000',
      image: '/images/varian/jagungbakar.jpg',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Pedas Daun Jeruk',
      description: 'Pedas segar dengan aroma daun jeruk yang unik',
      price: 'Rp 18.000',
      image: '/images/varian/pedasdaunjeruk.jpg',
      badge: 'Limited'
    },
    {
      id: 5,
      name: 'Green Matcha',
      description: 'Perpaduan matcha premium dengan singkong renyah',
      price: 'Rp 19.000',
      image: '/images/varian/greenmatcha.jpg',
      badge: 'Premium'
    },
    {
      id: 6,
      name: 'Cokelat',
      description: 'Manis cokelat premium yang melengkapi rasa',
      price: 'Rp 18.500',
      image: '/images/varian/cokelat.jpg',
      badge: 'Sweet'
    }
  ]

  const handleOrder = (productName) => {
    const message = `Hai Minka, saya ingin memesan varian ${productName}`
    const whatsappUrl = `https://wa.me/62882019886782?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-duration="700">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Varian <span className="text-orange-600">Kareppee Crunch</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
            Pilih rasa favorit Anda dari berbagai varian lezat
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col hover-lift relative overflow-hidden" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100}>
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10 animate-fade-in">
                  <span className={`${
                    product.badge === 'Best Seller' ? 'bg-orange-500' :
                    product.badge === 'Hot' ? 'bg-red-500' :
                    product.badge === 'Premium' ? 'bg-purple-500' :
                    product.badge === 'New' ? 'bg-green-500' :
                    product.badge === 'Limited' ? 'bg-yellow-500' :
                    'bg-pink-500'
                  } text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product Image - Square */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image}
                  alt={`Kareppee Crunch ${product.name} - ${product.description}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                  {product.description}
                </p>

                {/* Order Now Button */}
                <button 
                  onClick={() => handleOrder(product.name)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 md:py-3 px-3 md:px-4 rounded-lg transition-all duration-300 flex items-center justify-center mt-auto text-sm md:text-base hover-lift"
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Order Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Section */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
          <p className="text-sm text-gray-500 font-light">
            Katalog lengkap tersedia di{' '}
            <a 
              href="https://drive.google.com/drive/folders/1we-JKgjZGsFZ_qSZYO7Fnb2wV1kgQUsi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 underline transition-colors duration-200"
            >
              Google Drive
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
