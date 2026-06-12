import { Button } from '@heroui/react';
import React from 'react';
import { FaRocket, FaCalendarAlt, FaPhoneAlt, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#00D4AA] to-[#0099ff] py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side with rocket icon */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-2xl flex-shrink-0">
            <FaRocket className="text-red-500 text-2xl" />
          </div>
          <div>
            <h2 className="text-black text-2xl font-bold mb-1">
              Ready to Transform Your Idea into Reality?
            </h2>
            <p className="text-black/70 text-sm">
              Book your free consultation now and take the first step towards your digital success.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 flex-shrink-0">
          <Button
            className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition flex items-center gap-2"
            size="md"
          >
            <FaCalendarAlt className="text-black" />
            Book Free Consultation
            <FaArrowRight className="text-black" />
          </Button>

          <Button
            className="bg-black/20 border border-white/30 text-white font-semibold px-5 py-2 rounded-full hover:bg-black/30 transition flex flex-col items-center"
            size="md"
          >
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              <span>Make a Call</span>
            </div>
          </Button>

          <Button
            className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-green-700 transition flex flex-col items-center"
            size="md"
          >
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-white" />
              <span>Chat on WhatsApp</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;