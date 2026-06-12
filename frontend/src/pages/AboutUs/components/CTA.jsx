import { Button } from '@heroui/react';
import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#020B18] to-purple-950 py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">
            Ready to Work With a Trusted Technology Partner?
          </h2>
          <p className="text-white/70 text-sm">
            Let's build something amazing together. We are ready to help you grow.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 flex-shrink-0">
          <Button
            className="bg-white text-black font-semibold px-5 py-4 rounded-xl hover:bg-gray-100 transition flex items-center gap-2"
            size="md"
          >
            <FaCalendarAlt className="text-black" />
            Book Free Consultation
          </Button>
          <Button
            className="bg-black/20 border border-white/30 text-white font-semibold px-5 py-4 rounded-xl hover:bg-black/30 transition flex items-center gap-2"
            size="md"
          >
            <FaPhoneAlt className="text-white" />
            Make a Call
          </Button>
          <Button
            className="bg-green-600 text-white font-semibold px-5 py-4 rounded-xl hover:bg-green-700 transition flex items-center gap-2"
            size="md"
          >
            <FaWhatsapp className="text-white" />
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;