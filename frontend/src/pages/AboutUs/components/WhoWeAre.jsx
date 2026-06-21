import React from 'react';
import { FaBullseye, FaEye, FaGem, FaHandshake } from 'react-icons/fa';

const mvv = [
  {
    icon: <FaBullseye className="text-[#00D4AA] text-xl" />,
    iconBg: "bg-[#00D4AA]/10",
    title: "Our Mission",
    desc: "To empower organizations through innovative technology solutions that improve efficiency, drive growth, and create sustainable competitive advantages.",
  },
  {
    icon: <FaEye className="text-purple-400 text-xl" />,
    iconBg: "bg-purple-500/10",
    title: "Our Vision",
    desc: "To become a globally trusted technology partner recognized for innovation, excellence, and impactful digital transformation.",
  },
  {
    icon: <FaGem className="text-blue-400 text-xl" />,
    iconBg: "bg-blue-500/10",
    title: "Our Values",
    values: ["Innovation", "Integrity", "Excellence", "Collaboration", "Customer Success", "Continuous Improvement"],
  },
  {
    icon: <FaHandshake className="text-orange-400 text-xl" />,
    iconBg: "bg-orange-500/10",
    title: "Our Promise",
    desc: "We commit to delivering exceptional quality, transparent communication, and lasting partnerships that drive measurable business outcomes.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT – Paragraph Section */}
        <div>
          <p className="text-[#00D4AA] text-lg font-bold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-6">
            A Team of Innovators, Problem Solvers & Technology Experts
          </h2>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Technify is a technology consulting and software development company committed
              to delivering innovative, scalable, and secure digital solutions.
            </p>
            <p>
              Our team combines business understanding, technical expertise, and strategic
              thinking to help organizations solve complex challenges through technology.
            </p>
            <p>
              From custom software and mobile applications to cloud infrastructure, AI-powered
              solutions, and digital transformation consulting, we partner with businesses to
              create measurable results.
            </p>
          </div>
        </div>

        {/* RIGHT – Cards Section (4 cards, 2 columns) */}
        <div className="grid grid-cols-2 gap-6">
          {mvv.map((item) => (
            <div
              key={item.title}
              className="border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center text-xl mb-4`}>
                {item.icon}
              </div>
              <h4 className="text-gray-900 font-bold text-base mb-2">{item.title}</h4>
              {item.desc ? (
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              ) : (
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-2">
                  {item.values.map((v) => (
                    <div key={v} className="flex items-center gap-1.5">
                      <span className="text-[#00D4AA] text-xs">✓</span>
                      <span className="text-gray-600 text-xs">{v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;