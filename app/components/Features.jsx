'use client'

import { Leaf, Award, Clock, Truck, Users, CheckCircle, Sparkles, HandHeart, FileCheck, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: 'Bahan Baku & Higienitas',
      description: 'Terbuat dari singkong pilihan berkualitas tinggi yang diproses secara bersih dan higienis untuk menjamin mutu di setiap kemasannya.',
      color: 'bg-green-500'
    },
    {
      icon: Sparkles,
      title: 'Tekstur Premium',
      description: 'Melalui teknik pengolahan khusus, kami menghasilkan tekstur yang lebih kriuk dan ringan, serta tidak keras.',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      title: 'Teknik Produksi Autentik',
      description: 'Kami tetap setia menggunakan cara tradisional dengan memipihkan adonan di atas daun pisang sebelum proses pengukusan hingga pengeringan.',
      color: 'bg-orange-500'
    },
    {
      icon: HandHeart,
      title: 'Dampak Sosial Ekonomi',
      description: 'Kami membangun ekosistem berkelanjutan dengan menyerap hasil panen langsung dari petani lokal untuk mendukung kesejahteraan masyarakat.',
      color: 'bg-blue-500'
    },
    {
      icon: FileCheck,
      title: 'Legalitas Lengkap & Terpercaya',
      description: 'Menjamin keamanan konsumsi dengan izin edar resmi: NIB, Sertifikat SPP-IRT dan Sertifikat Halal Indonesia.',
      color: 'bg-red-500'
    },
    {
      icon: Globe,
      title: 'Aksesibilitas Nasional',
      description: 'Telah dipercaya oleh pelanggan di berbagai wilayah Indonesia melalui platform digital dan Official Shop resmi.',
      color: 'bg-indigo-500'
    }
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nilai <span className="text-orange-600">Unggulan</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Keunggulan yang membuat Kareppee Crunch berbeda dan terpercaya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
