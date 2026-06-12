import { Button } from '@heroui/react';
import React from 'react';
import { FaRocket, FaCalendarAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#00D4AA] to-[#0099ff] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-2xl flex-shrink-0">
            <FaRocket className="text-red-500 text-2xl" />
          </div>
          <div>
            <h2 className="text-black text-2xl font-bold mb-1">
              Have a Project in Mind?
            </h2>
            <p className="text-black/70 text-sm">
              Let's build something amazing together. Share your idea with our experts today!
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 flex-shrink-0">
          {/* Book Consultation Button */}
          <Button
            className="bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition flex items-center gap-2 px-6 py-2.5"
            size="lg"
          >
            <div className="flex flex-col items-start">
              <span>Book Free Consultation</span>
              <span className="text-xs text-gray-500 font-normal">Schedule a free call</span>
            </div>
          </Button>

          {/* Call Us Button */}
          <Button
            className="bg-black/20 border border-white/30 text-white font-semibold rounded-full hover:bg-black/30 transition px-6 py-2.5"
            size="lg"
          >
            <div className="flex flex-col items-start">
              <span>Call Us Now</span>
            </div>
          </Button>

          {/* WhatsApp Button */}
          <Button
            className="bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition px-6 py-2.5"
            size="lg"
          >
            <div className="flex flex-col items-start">
              <span>Chat on WhatsApp</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;