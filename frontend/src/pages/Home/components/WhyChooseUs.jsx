import React from 'react';
import { FaSearch, FaClipboardList, FaPalette, FaLaptopCode, FaCheckCircle, FaRocket, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const steps = [
  { num: "01", title: "Discover", desc: "Understanding your business, goals and challenges.", icon: <FaSearch />, color: "indigo" },
  { num: "02", title: "Strategy", desc: "Planning the right solution and technology roadmap.", icon: <FaClipboardList />, color: "cyan" },
  { num: "03", title: "Design", desc: "Creating intuitive and engaging user experiences.", icon: <FaPalette />, color: "purple" },
  { num: "04", title: "Development", desc: "Building robust, scalable and secure solutions.", icon: <FaLaptopCode />, color: "blue" },
  { num: "05", title: "Testing", desc: "Rigorous testing for quality, performance and security.", icon: <FaCheckCircle />, color: "green" },
  { num: "06", title: "Launch & Support", desc: "Deployment, support and continuous improvement.", icon: <FaRocket />, color: "red" },
];

const marqueeSteps = [...steps, ...steps];

const WhyChooseUs = () => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'indigo':
        return { border: 'border-indigo-500', bg: 'bg-indigo-500/10', shadow: 'shadow-indigo-500/20', badge: 'bg-indigo-500', text: 'text-indigo-600' };
      case 'cyan':
        return { border: 'border-[#00D4AA]', bg: 'bg-[#00D4AA]/10', shadow: 'shadow-[#00D4AA]/20', badge: 'bg-[#00D4AA]', text: 'text-[#00D4AA]' };
      case 'purple':
        return { border: 'border-purple-500', bg: 'bg-purple-500/10', shadow: 'shadow-purple-500/20', badge: 'bg-purple-500', text: 'text-purple-600' };
      case 'blue':
        return { border: 'border-blue-500', bg: 'bg-blue-500/10', shadow: 'shadow-blue-500/20', badge: 'bg-blue-500', text: 'text-blue-600' };
      case 'green':
        return { border: 'border-green-500', bg: 'bg-green-500/10', shadow: 'shadow-green-500/20', badge: 'bg-green-500', text: 'text-green-600' };
      case 'red':
        return { border: 'border-red-500', bg: 'bg-red-500/10', shadow: 'shadow-red-500/20', badge: 'bg-red-500', text: 'text-red-600' };
      default:
        return { border: 'border-gray-500', bg: 'bg-gray-500/10', shadow: 'shadow-gray-500/20', badge: 'bg-gray-500', text: 'text-gray-600' };
    }
  };

  return (
    <section className="pt-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-md font-bold text-indigo-600 uppercase tracking-widest mb-2">
          Our Proven Process
        </p>
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
          How We Deliver Excellence
        </h2>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden w-full py-4">
        <div className="marquee inline-flex gap-8 items-center">
          {marqueeSteps.map((step, idx) => {
            const colors = getColorClasses(step.color);
            return (
              <React.Fragment key={idx}>
                {/* Step card */}
                <div className="flex flex-col items-center text-center w-56 flex-shrink-0 relative">
                  <div className="relative inline-block">
                    <div
                      className={`w-20 h-20 rounded-full border-2 ${colors.border} ${colors.bg} flex items-center justify-center mb-4 transition-all duration-300 shadow-md ${colors.shadow}`}
                    >
                      <span className={`text-2xl md:text-3xl ${colors.text}`}>
                        {step.icon}
                      </span>
                    </div>
                    <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${colors.badge} text-white text-[11px] font-bold flex items-center justify-center shadow-md border border-white/40 z-10`}>
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[180px] break-words whitespace-normal">
                    {step.desc}
                  </p>
                </div>
                {/* Arrow after each step except the last */}
                {idx < marqueeSteps.length - 1 && (
                  <div className="flex items-center text-[#00D4AA] text-3xl self-center">
                    <FaArrowRight />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 35s linear infinite;
          white-space: nowrap;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;