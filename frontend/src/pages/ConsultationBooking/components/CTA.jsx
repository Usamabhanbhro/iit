import { Button } from '@heroui/react';
import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import BookConsultationButton from '../../components/BookConsultationButton';
import CallUsButton from '../../components/CallUsButton';
import WhatsappButton from '../../components/WhatsappButton';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#020B18] to-slate-800 py-14 px-6">
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
              <BookConsultationButton/>
          <CallUsButton/>
          <WhatsappButton/>
        </div>
      </div>
    </section>
  );
};

export default CTA;