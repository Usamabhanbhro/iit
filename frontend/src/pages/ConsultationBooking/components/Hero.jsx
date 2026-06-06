import { Button } from '@heroui/react';
import React from 'react'

const benefits = [
  { icon: "🛡️", title: "No Obligation", sub: "100% Free Consultation" },
  { icon: "💡", title: "Expert Guidance", sub: "Industry & Technology Experts" },
  { icon: "📋", title: "Actionable Insights", sub: "Get Strategy & Next Steps" },
  { icon: "🔒", title: "Confidential", sub: "Your information is 100% secure" },
];

const Hero = () => {
  return (
    <>
    <section className="relative bg-[#020B18] overflow-hidden min-h-[480px] flex items-center">
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,200,200,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,200,0.15) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D4AA]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
    
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left */}
            <div>
              <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-3">
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
                <Button
                  className="bg-[#00D4AA] text-black font-semibold px-6 rounded-full hover:brightness-110 transition"
                  size="lg"
                >
                  Book Free Consultation →
                </Button>
                <Button
                  variant="bordered"
                  className="border-white/30 text-white px-6 rounded-full hover:bg-white/10 transition"
                  size="lg"
                >
                  💬 Talk on WhatsApp
                </Button>
              </div>
            </div>
    
            {/* Right – visual card */}
            <div className="flex justify-end">
              <div className="relative w-full max-w-sm">
                {/* Meeting visual mock */}
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
    </>
  )
}

export default Hero