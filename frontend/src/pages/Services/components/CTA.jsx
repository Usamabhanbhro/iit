import { Button } from '@heroui/react'
import React from 'react'

import BookConsultationButton from '../../components/BookConsultationButton'
import CallUsButton from '../../components/CallUsButton'
import WhatsappButton from '../../components/WhatsappButton'

const CTA = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#020B18] to-purple-950 py-8 px-6">
        <div className="max-w-full mx-auto">
          <div className="bg-gradient-to-r from-[#0D2137] to-[#0A1929] border border-[#00D4AA]/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Partner with Technify for innovative solutions that drive growth,
                improve efficiency and create a lasting impact.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <BookConsultationButton/>
              <WhatsappButton/>
              <CallUsButton/>
            </div>
          </div>
        </div>
      </section>


    </>

  )

}

export default CTA