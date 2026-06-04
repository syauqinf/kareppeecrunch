'use client'

import { useState } from 'react'
import { Shield, FileCheck, Award, CheckCircle, Eye, X } from 'lucide-react'
import { AnimateOnScroll, StaggerContainer, StaggerItem } from './MotionWrappers'

export default function Legalitas() {
  const [activeDocument, setActiveDocument] = useState(null)

  const legalDocuments = [
    {
      icon: Shield,
      title: 'Sertifikat Halal',
      description: 'Sertifikasi halal resmi dari MUI',
      file: '/legalitas/sertifikathalal.pdf',
      color: 'bg-green-500',
      preview: 'Dokumen sertifikat halal yang menjamin produk Kareppee Crunch sesuai syariat Islam'
    },
    {
      icon: FileCheck,
      title: 'Perizinan Berusaha',
      description: 'Surat izin usaha resmi pemerintah',
      file: '/legalitas/perizinanberusahaberbasisrisiko.pdf',
      color: 'bg-blue-500',
      preview: 'Dokumen perizinan berusaha berbasis risiko yang dikeluarkan oleh instansi berwenang'
    },
    {
      icon: Award,
      title: 'SPP-IRT',
      description: 'Pangan Industri Rumah Tangga',
      file: '/legalitas/spp-irt.pdf',
      color: 'bg-purple-500',
      preview: 'Surat pernyataan pangan industri rumah tangga untuk produk makanan'
    }
  ]

  const handleViewDocument = (document) => {
    setActiveDocument(document)
  }

  const closeDocument = () => {
    setActiveDocument(null)
  }

  return (
    <section id="legalitas" className="py-12 bg-gray-50" aria-label="Legalitas dan sertifikasi Kareppee Crunch">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Legalitas <span className="text-blue-600">Terjamin</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Dokumen resmi yang menjamin kualitas dan keamanan produk kami
          </p>
        </AnimateOnScroll>

        {/* Legal Documents Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {legalDocuments.map((doc, index) => (
            <StaggerItem key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-200 overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    <doc.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {doc.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Preview */}
              <div className="p-4 bg-gray-50 border-b border-gray-100 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <FileCheck className="w-4 h-4 text-gray-600" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {doc.preview}
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="p-4 bg-gray-50 mt-auto">
                <button 
                  onClick={() => handleViewDocument(doc)}
                  className="w-full bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center min-h-[48px]"
                  aria-label={`Lihat dokumen ${doc.title}`}
                >
                  <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
                  Lihat Dokumen
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badge */}
        <AnimateOnScroll className="text-center" delay={0.3}>
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
            <span className="text-green-800 font-medium text-sm">
              100% Legal dan Terpercaya
            </span>
          </div>
        </AnimateOnScroll>
      </div>

      {activeDocument && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview dokumen ${activeDocument.title}`}
          onClick={closeDocument}
        >
          <div
            className="relative flex h-[82vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-3">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{activeDocument.title}</h3>
                <p className="text-xs text-gray-500">{activeDocument.description}</p>
              </div>
              <button
                type="button"
                onClick={closeDocument}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                aria-label="Tutup preview dokumen"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <iframe
              src={`${activeDocument.file}#toolbar=1&navpanes=0&view=FitH`}
              title={`Preview ${activeDocument.title}`}
              className="h-full w-full bg-gray-100"
            />
          </div>
        </div>
      )}
    </section>
  )
}
