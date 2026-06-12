import React from 'react';
import { 
  FaChartLine, 
  FaRobot, 
  FaMapMarkedAlt, 
  FaDollarSign, 
  FaExclamationTriangle, 
  FaRocket 
} from 'react-icons/fa';

const consultationOfferings = [
  { icon: <FaChartLine className="text-[#00D4AA] text-2xl" />, label: "Business & Technical Assessment" },
  { icon: <FaRobot className="text-[#00D4AA] text-2xl" />, label: "Customized Technology Recommendations" },
  { icon: <FaMapMarkedAlt className="text-[#00D4AA] text-2xl" />, label: "Project Roadmap & Timeline" },
  { icon: <FaDollarSign className="text-[#00D4AA] text-2xl" />, label: "Budget Estimation & Planning" },
  { icon: <FaExclamationTriangle className="text-[#00D4AA] text-2xl" />, label: "Risk Analysis & Best Practices" },
  { icon: <FaRocket className="text-[#00D4AA] text-2xl" />, label: "Growth & Scaling Strategies" },
];

const Offerings = () => {
  return (
    <section className="bg-[#0D1B2A] border-y border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-white font-semibold text-base mb-6">
          What You'll Get in Your Consultation
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {consultationOfferings.map((o) => (
            <div
              key={o.label}
              className="flex flex-col items-center text-center gap-2 p-3 rounded-xl border border-white/5 hover:border-[#00D4AA]/30 transition-all"
            >
              <span className="text-2xl">{o.icon}</span>
              <p className="text-gray-300 text-xs font-medium leading-tight">{o.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;