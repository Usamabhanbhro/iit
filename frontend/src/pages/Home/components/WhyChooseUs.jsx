import React from 'react'
import { FaSearch, FaClipboardList, FaPalette, FaLaptopCode, FaCheckCircle, FaRocket } from 'react-icons/fa'

const C = {
  white: "#ffffff",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  indigo: "#6366f1",
  purple: "#8b5cf6",
  cyan: "#00D4AA",
  cyanDim: "rgba(0,212,170,0.1)",
  cyanBorder: "rgba(0,212,170,0.3)",
  navy: "#020b18",
  navyMid: "#0d1b2a",
}

const steps = [
    { num: "01", title: "Discover", desc: "Understanding your business, goals and challenges.", icon: <FaSearch className="text-indigo-600 text-2xl md:text-3xl" />, color: C.indigo },
    { num: "02", title: "Strategy", desc: "Planning the right solution and technology roadmap.", icon: <FaClipboardList className="text-[#00D4AA] text-2xl md:text-3xl" />, color: C.cyan },
    { num: "03", title: "Design", desc: "Creating intuitive and engaging user experiences.", icon: <FaPalette className="text-purple-600 text-2xl md:text-3xl" />, color: C.purple },
    { num: "04", title: "Development", desc: "Building robust, scalable and secure solutions.", icon: <FaLaptopCode className="text-blue-500 text-2xl md:text-3xl" />, color: "#3b82f6" },
    { num: "05", title: "Testing", desc: "Rigorous testing for quality, performance and security.", icon: <FaCheckCircle className="text-green-500 text-2xl md:text-3xl" />, color: "#22c55e" },
    { num: "06", title: "Launch & Support", desc: "Deployment, support and continuous improvement.", icon: <FaRocket className="text-red-500 text-2xl md:text-3xl" />, color: "#ef4444" },
  ];

const WhyChooseUs = () => {
  return (
    <>
     <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
          Our Proven Process
        </p>
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
          How We Deliver Excellence
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
          {/* connector line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-indigo-500 to-[#00d4aa] z-0 rounded-full" />
          {steps.map((s, i) => (
            <div key={i} className="text-center px-2 relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center mb-4 transition-all duration-300 shadow-sm"
                style={{
                  backgroundColor: `${s.color}1a`,
                  border: `2px solid ${s.color}`,
                  boxShadow: `0 0 15px ${s.color}25`
                }}
              >
                <span className="text-xl md:text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[150px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default WhyChooseUs