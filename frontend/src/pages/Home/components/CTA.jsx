import { Button } from '@heroui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import BookConsultationButton from '../../components/BookConsultationButton'
import WhatsappButton from '../../components/WhatsappButton'
import CallUsButton from '../../components/CallUsButton'

const CTA = () => {
  return (
    <>
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-72 h-72 bg-white/3 rounded-full" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/75 text-base">
              Let's build something amazing together. Schedule a free consultation with our experts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <BookConsultationButton/>
            <WhatsappButton/>
            <CallUsButton/>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA