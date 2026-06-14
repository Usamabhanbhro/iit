import React from 'react';
import { FaFlask, FaBolt, FaLock, FaChartLine, FaHandshake, FaBriefcase } from 'react-icons/fa';

const whyUs = [
  { 
    icon: <FaFlask className="text-[#00D4AA] text-xl" />, 
    title: "Innovation First", 
    desc: "We leverage the latest technologies to build future-ready solutions." 
  },
  { 
    icon: <FaBolt className="text-[#00D4AA] text-xl" />, 
    title: "Fast & Agile Delivery", 
    desc: "Agile methodologies ensure faster delivery and adaptability to change." 
  },
  { 
    icon: <FaLock className="text-[#00D4AA] text-xl" />, 
    title: "Security By Design", 
    desc: "We implement best practices to ensure your data and systems are always protected." 
  },
  { 
    icon: <FaChartLine className="text-[#00D4AA] text-xl" />, 
    title: "Scalable Architecture", 
    desc: "Our solutions are designed to grow with your business seamlessly." 
  },
  { 
    icon: <FaHandshake className="text-[#00D4AA] text-xl" />, 
    title: "Long-Term Partnership", 
    desc: "We believe in building long-term relationships based on trust and results." 
  },
  { 
    icon: <FaBriefcase className="text-[#00D4AA] text-xl" />, 
    title: "Business-Focused Solutions", 
    desc: "We align technology with your business goals to deliver real impact." 
  },
];

// Duplicate the array to create a seamless loop
const marqueeWhyUs = [...whyUs, ...whyUs];

const WhyUs = () => {
  return (
    <section className="bg-slate-900 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-500 text-md font-semibold uppercase tracking-widest mb-2">
            Why Businesses Trust Technify
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            What Makes Us the Right Technology Partner
          </h2>
        </div>

        {/* Horizontal marquee (right → left) */}
        <div className="relative overflow-hidden w-full">
          <div className="marquee inline-flex gap-4">
            {marqueeWhyUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-white/10 rounded-2xl p-5 text-center hover:border-green-500/40 hover:-translate-y-1 transition-all duration-200 group w-56 flex-shrink-0"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold text-xs mb-2">{item.title}</h4>
                <p className="text-gray-500 text-[12px] leading-relaxed text-wrap">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation – moves leftwards (right → left) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WhyUs;