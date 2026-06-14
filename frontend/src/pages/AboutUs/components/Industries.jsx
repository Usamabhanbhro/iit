import React from 'react';
import {
  FaHospital, FaGraduationCap, FaHome, FaShoppingCart,
  FaIndustry, FaMoneyBillWave, FaLandmark, FaTruck,
  FaWifi, FaSolarPanel, FaUtensils
} from 'react-icons/fa';

const industries = [
  { key: 'healthcare', name: 'Healthcare', icon: <FaHospital className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'education', name: 'Education', icon: <FaGraduationCap className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'real-estate', name: 'Real Estate', icon: <FaHome className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'retail', name: 'Retail & E-Commerce', icon: <FaShoppingCart className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'manufacturing', name: 'Manufacturing', icon: <FaIndustry className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'finance', name: 'Finance', icon: <FaMoneyBillWave className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'government', name: 'Government', icon: <FaLandmark className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'logistics', name: 'Logistics', icon: <FaTruck className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'telecom', name: 'Telecom', icon: <FaWifi className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'energy', name: 'Energy', icon: <FaSolarPanel className="text-3xl md:text-4xl text-[#00D4AA]" /> },
  { key: 'hospitality', name: 'Hospitality', icon: <FaUtensils className="text-3xl md:text-4xl text-[#00D4AA]" /> },
];

// Duplicate industries for seamless marquee loop
const marqueeIndustries = [...industries, ...industries];

const Industries = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-2">
            Industries We Serve
          </p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
            Powering Businesses Across Industries
          </h2>
        </div>

        {/* Horizontal marquee (right → left) */}
        <div className="relative overflow-hidden w-full">
          <div className="marquee inline-flex gap-4">
            {marqueeIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border border-gray-100 hover:border-[#00D4AA] hover:shadow-md transition-all cursor-pointer min-w-[120px] flex-shrink-0"
              >
                <span className="text-3xl md:text-4xl">{ind.icon}</span>
                <span className="text-gray-700 text-sm font-medium whitespace-nowrap">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation – moves leftwards */}
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

export default Industries;