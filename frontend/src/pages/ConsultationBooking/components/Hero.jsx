import { Button } from '@heroui/react';
import React from 'react';
import { 
  FaShieldAlt, 
  FaLightbulb, 
  FaClipboardList, 
  FaLock, 
  FaWhatsapp,
  FaArrowRight 
} from 'react-icons/fa';
import BookConsultationButton from '../../components/BookConsultationButton';

const benefits = [
  { icon: <FaShieldAlt className="text-[#00D4AA] text-lg" />, title: "No Obligation", sub: "100% Free Consultation" },
  { icon: <FaLightbulb className="text-[#00D4AA] text-lg" />, title: "Expert Guidance", sub: "Industry & Technology Experts" },
  { icon: <FaClipboardList className="text-[#00D4AA] text-lg" />, title: "Actionable Insights", sub: "Get Strategy & Next Steps" },
  { icon: <FaLock className="text-[#00D4AA] text-lg" />, title: "Confidential", sub: "Your information is 100% secure" },
];

const Hero = () => {
  return (
    <section className="relative bg-[#020B18] overflow-hidden min-h-[480px] flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          <p className="text-[#00D4AA] text-sm font-semibold tracking-widest mb-3">
            Book Consultation
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
            Schedule Your Free
            <br />
            <span className="text-[#00D4AA]">Strategy Consultation</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-lg">
            Get expert guidance to turn your ideas into powerful digital solutions.
            Our consultants will help you choose the right technology, plan your
            project, and maximize your ROI.
          </p>

          {/* Benefits row */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{b.icon}</span>
                <div>
                  <p className="text-white text-sm font-semibold">{b.title}</p>
                  <p className="text-gray-500 text-xs">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
           <BookConsultationButton/>
            <Button
              variant="bordered"
              className="border-white/30 text-white px-6 py-4 border border-white/10 rounded-xl hover:bg-white/10 transition flex items-center gap-2"
              size="lg"
            >
              <FaWhatsapp className="text-green-500" />
              Talk on WhatsApp
            </Button>
          </div>
        </div>

        {/* Right – visual card (unchanged except arrow and possible icon replacements) */}
        <div className="flex justify-end">
          <div className="relative w-full max-w-sm">
            <div className="bg-[#0D1B2A] border border-[#00D4AA]/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
                <span className="text-gray-400 text-xs">Strategy. Technology. Growth.</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Transforming Ideas</h3>
              <p className="text-[#00D4AA] text-sm mb-5">Into Impactful Solutions</p>

              {/* Mock chart */}
              <div className="bg-[#020B18] rounded-xl p-4 mb-4">
                <p className="text-gray-500 text-xs mb-3">Business Growth</p>
                <div className="flex items-end gap-1 h-16">
                  {[20, 35, 28, 50, 42, 65, 55, 80, 70, 90, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i >= 9 ? "#00D4AA" : `rgba(0,212,170,${0.15 + i * 0.05})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-[#020B18] rounded-xl p-3 text-center">
                  <p className="text-[#00D4AA] text-lg font-bold">98%</p>
                  <p className="text-gray-500 text-[10px]">Client Satisfaction</p>
                </div>
                <div className="flex-1 bg-[#020B18] rounded-xl p-3 text-center">
                  <p className="text-[#00D4AA] text-lg font-bold">150+</p>
                  <p className="text-gray-500 text-[10px]">Successful Consultations</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-[#00D4AA] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Free ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;