import { Button } from '@heroui/react'
import React from 'react'

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
            <Button
              className="bg-[#00D4AA] text-black font-semibold px-5 py-4 rounded-full"
              size="md"
            >
              Schedule Free Consultation →
            </Button>
            <Button
              variant="bordered"
              className="border-white/30 text-white px-5 py-4 border rounded-full hover:bg-white/10"
              size="md"
            >
              Call 0222678253
            </Button>
            <Button
              className="bg-green-600 text-white px-5 py-4 font-semibold rounded-full hover:bg-green-700"
              size="md"
            >
             WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
 

</>  

)

}

export default CTA