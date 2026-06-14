import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const processSteps = [
  { num: "01", title: "Discover", desc: "Understanding your business, goals and challenges." },
  { num: "02", title: "Plan", desc: "Planning the right strategy and technology roadmap." },
  { num: "03", title: "Design", desc: "Creating intuitive designs and seamless user experiences." },
  { num: "04", title: "Develop", desc: "Building robust, scalable and secure solutions." },
  { num: "05", title: "Test", desc: "Rigorous testing for quality, performance and security." },
  { num: "06", title: "Deploy", desc: "Seamless deployment with minimal disruption to your business." },
  { num: "07", title: "Support", desc: "Continuous support and optimization for long-term success." },
];

const marqueeSteps = [...processSteps, ...processSteps];

const Process = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00D4AA] text-lg font-bold uppercase tracking-widest mb-2">
            Our Development Process
          </p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
            A Proven Process That Ensures Success
          </h2>
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="marquee inline-flex gap-8">
            {marqueeSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center w-48 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-[#00D4AA] bg-white flex items-center justify-center mb-3">
                    <span className="text-[#00D4AA] text-lg font-bold">{step.num}</span>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm mb-1">{step.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed w-32 text-wrap">{step.desc}</p>
                </div>
                {idx < marqueeSteps.length - 1 && (
                  <div className="flex items-center text-[#00D4AA] text-3xl self-center mt-6">
                    <FaArrowRight />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Left → Right marquee animation */}
     <style jsx>{`
  @keyframes marquee {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .marquee {
    animation: marquee 30s linear infinite;
    white-space: nowrap;
    width: max-content;
  }
  .marquee:hover {
    animation-play-state: paused;
  }
`}</style>
    </section>
  );
};

export default Process;