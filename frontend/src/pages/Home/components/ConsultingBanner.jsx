import React from 'react'
import { FaCheck } from 'react-icons/fa'

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

const items = [
    "Digital Transformation Strategy", "IT Infrastructure Assessment",
    "Cloud Migration Planning", "Cybersecurity Consulting",
    "Software Architecture Consulting", "ERP & Enterprise Advisory",
    "AI Strategy & Implementation", "Startup Technology Advisory",
    "Process Automation Consulting", "Project Rescue & Tech Audits",
  ];

const ConsultingBanner = () => {
  return (
    <>
     <section className="py-20 px-6 bg-gradient-to-br from-[#0d1b2a] to-[#020b18] relative overflow-hidden">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <span className="text-[#00D4AA] text-xs font-bold uppercase tracking-widest mb-3 block">Strategic Technology Consulting</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Expert Guidance Before You Invest
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-7">
            Make informed technology decisions with confidence. Our consultants help you identify opportunities, reduce risks, and build a roadmap for digital success.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white border-none rounded-lg px-7 py-3 text-sm font-bold cursor-pointer flex items-center gap-2 shadow-lg hover:brightness-110 transition">
            Schedule Free Consultation →
          </button>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-white/5 rounded-lg p-5 grid grid-cols-2 gap-4">
            {items.map(item => (
              <div key={item} className="flex items-start gap-2 pb-3 border-b border-gray-700 last:border-b-0">
                <span className="w-5 h-5 rounded-full bg-[#00D4AA]/15 border border-[#00D4AA]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaCheck className="text-[#00D4AA] w-2.5 h-2.5" />
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ConsultingBanner