import { Button } from '@heroui/react';
import React from 'react';
import { FaRocket, FaCalendarAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import BookConsultationButton from '../../components/BookConsultationButton';
import CallUsButton from '../../components/CallUsButton';
import WhatsappButton from '../../components/WhatsappButton';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-purple-900 py-16 px-6">
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
            <p className="text-black/70 text-sm font-semibold">
              Let's build something amazing together. Share your idea with our experts today!
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 flex-shrink-0">
          {/* Book Consultation Button */}
        <BookConsultationButton/>

          {/* Call Us Button */}
        <CallUsButton/>

          {/* WhatsApp Button */}
          <WhatsappButton/>
        </div>
      </div>
    </section>
  );
};

export default CTA;