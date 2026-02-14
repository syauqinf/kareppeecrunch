'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'

export default function PusatBantuan() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Apa itu Kareppee Crunch?',
      answer: 'Kareppee Crunch adalah merek kerupuk singkong premium yang dibuat dari singkong pilihan berkualitas tinggi dengan proses produksi yang higienis. Produk kami menggunakan resep terbaik dengan cita rasa autentik Indonesia. Kami telah memiliki kelengkapan dokumen legalitas lengkap termasuk Sertifikat Halal MUI, Perizinan Berusaha Berbasis Risiko, dan SPP-IRT untuk menjamin keamanan dan kualitas produk yang Anda konsumsi.'
    },
    {
      question: 'Bagaimana cara memesan produk Kareppee Crunch?',
      answer: 'Anda dapat memesan melalui website kami, WhatsApp, atau marketplace favorit Anda. Cukup pilih varian yang diinginkan, tambahkan ke keranjang, lalu ikuti proses pembayaran. Kami juga melayani pemesanan dalam jumlah besar untuk acara atau reseller.'
    },
    {
      question: 'Bagaimana cara pengiriman produk?',
      answer: 'Kami melayani pengiriman ke seluruh Indonesia dengan berbagai pilihan ekspedisi terpercaya. Waktu pengiriman bervariasi tergantung lokasi tujuan. Untuk informasi lebih lanjut, silakan hubungi customer service kami.'
    },
    {
      question: 'Apakah produk Kareppeee Crunch aman dikonsumsi?',
      answer: 'Ya, produk kami 100% aman dikonsumsi. Kami telah memiliki sertifikat HALAL dari MUI, menggunakan bahan alami tanpa pengawet berbahaya, dan diproduksi dengan standar keamanan pangan yang ketat.'
    },
    {
      question: 'Bagaimana jika ada masalah dengan pesanan?',
      answer: 'Jika Anda mengalami masalah dengan pesanan, jangan ragu untuk menghubungi kami. Tim customer service siap membantu menyelesaikan setiap keluhan dengan solusi terbaik untuk kepuasan Anda.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="pusat-bantuan" className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pusat <span className="text-orange-600">Bantuan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover-lift transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">
                Pertanyaan yang Sering Diajukan
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-orange-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover-lift"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 50}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 hover:to-orange-50 transition-all duration-300 flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 transition-transform duration-300">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-orange-600 animate-bounce-gentle" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-600" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-white border-t border-orange-100 animate-slide-up">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
