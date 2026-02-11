'use client'

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, Heart } from 'lucide-react'

const Footer = () => {
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
  const companyLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Visi & Misi', href: '#about' },
    { name: 'Karir', href: '#' },
    { name: 'Blog', href: '#' }
  ]

  const productLinks = [
    { name: 'Semua Produk', href: '#products' },
    { name: 'Kareppee Original', href: '#products' },
    { name: 'Kareppee Pedas', href: '#products' },
    { name: 'Kareppee Keju', href: '#products' },
    { name: 'Kareppee BBQ', href: '#products' }
  ]

  const supportLinks = [
    { name: 'Pusat Bantuan', href: '#pusat-bantuan' },
    { name: 'Cara Pemesanan', href: '#alur-pemesanan' },
    { name: 'Pengiriman', href: '#pusat-bantuan' },
    { name: 'Pembayaran', href: '#pusat-bantuan' },
    { name: 'Kebijakan Retur', href: '#pusat-bantuan' },
    { name: 'Syarat & Ketentuan', href: '#' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 sm:col-span-1" data-aos="fade-up">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <img 
                src="/images/logo.png" 
                alt="Kareppee Crunch" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
            
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
              Keripik singkong premium dengan cita rasa autentik Indonesia. 
            </p>
            <div className="flex gap-3 md:gap-4 mt-2">
              {/* Instagram */}
              <a className="text-gray-400 hover:text-orange-400 transition-colors" href="https://instagram.com/kareppeecrunch" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              
              {/* Facebook */}
              <a className="text-gray-400 hover:text-orange-400 transition-colors" href="https://www.facebook.com/61583619765023/" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a className="text-gray-400 hover:text-orange-400 transition-colors" href="https://tiktok.com/@kareppeecrunch" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-bold text-white mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a className="text-gray-300 text-sm hover:text-orange-400 transition-colors" href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Beranda</a></li>
              <li><a className="text-gray-300 text-sm hover:text-orange-400 transition-colors" href="#products" onClick={(e) => handleSmoothScroll(e, '#products')}>Katalog</a></li>
              <li><a className="text-gray-300 text-sm hover:text-orange-400 transition-colors" href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>Tentang Kami</a></li>
              <li><a className="text-gray-300 text-sm hover:text-orange-400 transition-colors" href="#reviews" onClick={(e) => handleSmoothScroll(e, '#reviews')}>Testimoni</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-bold text-white mb-4">Bantuan</h4>
            <ul className="space-y-3">
              <li><a className="text-gray-300 text-sm hover:text-orange-400 transition-colors" href="#pusat-bantuan" onClick={(e) => handleSmoothScroll(e, '#pusat-bantuan')}>FAQ</a></li>
              <li><a className="text-gray-300 text-sm hover:text-orange-400 transition-colors" href="#cta" onClick={(e) => handleSmoothScroll(e, '#cta')}>Hubungi Kami</a></li>
              <li><a className="text-gray-300 text-sm hover:text-orange-400 transition-colors" href="#peluang-kemitraan" onClick={(e) => handleSmoothScroll(e, '#peluang-kemitraan')}>Peluang Kemitraan</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-bold text-white mb-4">Mitra Kami</h4>
            <p className="text-gray-300 text-sm mb-4">Didukung oleh mitra terpercaya kami.</p>
            <div className="flex flex-col items-start gap-4">
              {/* Mitra 1 */}
              <div className="flex items-start justify-start w-32 h-16">
                <img src="/images/dekat-lokal.png" alt="DekatLokal" className="max-h-full max-w-full object-contain" />
              </div>

              {/* Mitra 2 */}
              <div className="flex items-start justify-start w-32 h-16">
                <img src="/images/rumah-bumn.png" alt="Rumah BUMN" className="max-h-full max-w-full object-contain" />
              </div>

              {/* Mitra 3 */}
              <div className="flex items-start justify-start w-32 h-16">
                <img src="/images/bank-bri.png" alt="Bank BRI" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-400 text-xs">
            &copy;2026 Kareppee Crunch. All rights reserved | Powered by DekatLokal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
