import { Button } from '@heroui/react';
import React from 'react'

const stats = [
  { icon: "🧩", value: "150+", label: "Projects Delivered" },
  { icon: "😊", value: "30+",  label: "Active Clients" },
  { icon: "🏭", value: "10+",  label: "Industries Served" },
  { icon: "🛡️", value: "98%", label: "Client Satisfaction" },
  { icon: "🕐", value: "24/7", label: "Support Available" },
  { icon: "⏱️", value: "5+",  label: "Years of Excellence" },
];

const Hero = () => {
    return (

        <>
            <section className="relative bg-[#020B18] overflow-hidden min-h-[520px] flex flex-col items-center pb-12">
                
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
                    {/* Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-full px-4 py-1.5 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
                            <span className="text-[#00D4AA] text-xs font-semibold uppercase tracking-widest">
                                Trusted Software Development & Technology Consulting Company
                            </span>
                        </div>

                        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-3">
                            About <span className="text-[#00D4AA]">Technify</span>
                        </h1>
                        <h2 className="text-gray-300 text-xl font-semibold mb-5">
                            Building Technology That Powers Business Growth
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                            At Technify, we help startups, enterprises, and organizations transform ideas
                            into scalable digital solutions. Through innovative software development,
                            technology consulting, AI solutions, cloud services, and digital transformation
                            strategies, we empower businesses to grow faster, operate smarter, and remain
                            competitive in an ever-changing digital world.
                        </p>
                        <div className="flex flex-wrap gap-4">
                           <Button
                  href="/consultation"
                  size="lg"
                  radius="full"
                  className="font-semibold px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-2xl shadow-lg flex items-center gap-2"
                >
                  Book Free Consultation
                  <span className="text-lg">→</span>
                </Button>
                <Button
                  href="#work"
                  size="lg"
                  radius="full"
                  className="font-semibold px-8 py-4 bg-slate-900/60 text-white border border-white hover:bg-slate-800 rounded-2xl shadow-lg flex items-center gap-2"
                >
                  View Our Work
                  <span className="text-lg">→</span>
                </Button>
                        </div>
                    </div>

                    {/* Right – team meeting visual */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="bg-[#0D1B2A] border border-[#00D4AA]/20 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Mock "office" scene */}
                                <div className="bg-gradient-to-br from-[#0a1628] to-[#0d2137] h-48 flex items-center justify-center relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="grid grid-cols-3 gap-3 opacity-40">
                                            {Array(9).fill(null).map((_, i) => (
                                                <div key={i} className="w-12 h-8 bg-[#00D4AA]/20 rounded-lg" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-14 h-14 rounded-full bg-[#00D4AA]/20 border-2 border-[#00D4AA]/40 flex items-center justify-center text-2xl mb-2">
                                            🏢
                                        </div>
                                        <span className="text-white font-bold text-lg">Technify</span>
                                        <span className="text-[#00D4AA] text-xs">Innovate. Integrate. Implement.</span>
                                    </div>
                                </div>
                                {/* Stats row */}
                                <div className="grid grid-cols-3 gap-0 border-t border-white/5">
                                    {[
                                        { val: "150+", label: "Projects" },
                                        { val: "30+", label: "Clients" },
                                        { val: "98%", label: "Satisfaction" },
                                    ].map((s, i) => (
                                        <div
                                            key={s.label}
                                            className={`p-4 text-center ${i < 2 ? "border-r border-white/5" : ""}`}
                                        >
                                            <p className="text-[#00D4AA] text-lg font-bold">{s.val}</p>
                                            <p className="text-gray-500 text-xs">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -top-3 -right-3 bg-[#00D4AA] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                                Since 2020 ✓
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats block at bottom of hero (not fixed) */}
                <div className="mt-12 w-full">
                  <div className="max-w-7xl mx-auto px-6 py-6 bg-[#020B20] border border-gray-700 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 items-center text-center">
                      <div>
                        <div className="flex flex-col items-center">
                          <i className="fa-regular fa-file text-purple-300 text-3xl mb-2"></i>
                          <h3 className="text-2xl font-bold text-white">150+</h3>
                          <p className="text-sm text-gray-300">Projects Delivered</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center">
                          <i className="fa-solid fa-shield text-purple-300 text-3xl mb-2"></i>
                          <h3 className="text-2xl font-bold text-white">98%</h3>
                          <p className="text-sm text-gray-300">Client Satisfaction</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center">
                          <i className="fa-solid fa-user text-purple-300 text-3xl mb-2"></i>
                          <h3 className="text-2xl font-bold text-white">30+</h3>
                          <p className="text-sm text-gray-300">Active Clients</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center">
                          <i className="fa-solid fa-clock text-purple-300 text-3xl mb-2"></i>
                          <h3 className="text-2xl font-bold text-white">24/7</h3>
                          <p className="text-sm text-gray-300">Support Available</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center">
                          <i className="fa-solid fa-calendar text-purple-300 text-3xl mb-2"></i>
                          <h3 className="text-2xl font-bold text-white">5+</h3>
                          <p className="text-sm text-gray-300">Years of Excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>

        </>

    )
}

export default Hero