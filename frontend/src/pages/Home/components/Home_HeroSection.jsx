import { Button } from '@heroui/react'
import React from 'react'

const Home_HeroSection = () => {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden bg-[#020B18]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
                <span className="text-[#00D4AA] text-xs font-semibold uppercase tracking-widest">
                  Trusted Software Development & Technology Consulting Company
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight">
                We build Technology that <span className="text-cyan-500">helps business grow</span>  Faster, Operate Smarter, and lead their industry
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                Technify dekivers end to end software development and technology consulting services that transform ideas into intelligent scalable and secure digitalsolutions that drive real business results.
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

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-6">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 text-xl"></i>
                  <span className="text-sm font-semibold text-white">Technology Consulting</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 text-xl"></i>
                  <span className="text-sm font-semibold text-white">Custom Software</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 text-xl"></i>
                  <span className="text-sm font-semibold text-white">Mobile Apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 text-xl"></i>
                  <span className="text-sm font-semibold text-white">Cloud Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 text-xl"></i>
                  <span className="text-sm font-semibold text-white">AI & Automations</span>
                </div>

              </div>

              {/* LOWER 5 BOXES */}
              <div className="fiveBoxes flex gap-3 border border-gray-700 rounded-lg p-6 mt-8 bg-slate-800/50 w-fit">
                <div className="flex items-center gap-4 bg-transparent">
                  <div className="flex-shrink-0">
                    <i className="fa-regular fa-file text-purple-300 text-3xl"></i>
                  </div>

                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">150+</h1>
                    <p className="text-sm text-gray-300 font-light">Projects Delivered</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-transparent">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-shield text-purple-300 text-3xl"></i>
                  </div>

                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">98%</h1>
                    <p className="text-sm text-gray-300 font-light">Client Satisfaction</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-transparent">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-user text-purple-300 text-3xl"></i>
                  </div>

                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">30+</h1>
                    <p className="text-sm text-gray-300 font-light">Active Cients</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-transparent">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-clock text-purple-300 text-3xl"></i>
                  </div>

                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">24/7</h1>
                    <p className="text-sm text-gray-300 font-light">Support Available</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-transparent">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-calendar text-purple-300 text-3xl"></i>
                  </div>

                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">5+</h1>
                    <p className="text-sm text-gray-300 font-light">Years of Excellence</p>
                  </div>
                </div>



              </div>



            </div>

            {/* Right Content - Hero Image/Illustration */}
            <div className="hidden md:flex justify-center relative">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl rotate-6 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                  <div className="relative z-10 text-white text-center p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 opacity-80"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    <p className="text-2xl font-bold">Innovate</p>
                    <p className="text-indigo-200">with confidence</p>
                  </div>
                </div>
                {/* Floating card decoration */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 rotate-[-6deg]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">150+</p>
                      <p className="text-xs text-gray-500">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating contact container (right side) */}
              {/* Floating Contact Pill — Right Side of Hero */}
              <div className="flex flex-col items-center gap-2 bg-[#0D1B2A]/90 border border-white/10 rounded-2xl px-3 py-2 shadow-2xl backdrop-blur-sm">

                {/* Call Us */}
                <a href="tel:+920222678253" className="flex flex-col items-center gap-1.5 group">
                  <div className="w-11 h-11 rounded-full bg-[#1a2a3a] border border-white/10 flex items-center justify-center group-hover:border-[#00D4AA]/50 group-hover:bg-[#00D4AA]/10 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] font-medium">Call Us</span>
                </a>

                {/* Divider */}
                <div className="w-6 h-px bg-white/10" />

                <a href="https://wa.me/923420372875" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 group">
                  <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center group-hover:bg-green-400 group-hover:scale-105 transition-all duration-200 shadow-lg shadow-green-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .001 5.373.001 12a11.93 11.93 0 001.66 6.04L0 24l6.12-1.6A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.18-3.48-8.52zM12 21.6a9.6 9.6 0 01-4.96-1.34l-.35-.21-3.64.95.97-3.56-.22-.36A9.6 9.6 0 1121.6 12 9.61 9.61 0 0112 21.6zm5.2-7.4c-.28-.14-1.67-.82-1.93-.92s-.45-.14-.64.14-.73.92-.9 1.1-.33.2-.61.07a7.84 7.84 0 01-2.28-1.41 8.5 8.5 0 01-1.58-1.97c-.17-.28 0-.43.13-.57s.28-.33.42-.5a1.84 1.84 0 00.28-.47.52.52 0 000-.5c-.07-.14-.64-1.53-.87-2.1s-.46-.47-.64-.48h-.54a1.05 1.05 0 00-.76.36 3.2 3.2 0 00-1 2.38 5.55 5.55 0 001.16 2.95c.14.18 1.93 2.95 4.68 4.13a15.77 15.77 0 001.56.58 3.76 3.76 0 001.73.11c.53-.08 1.62-.66 1.85-1.3s.23-1.18.16-1.3-.25-.18-.53-.32z" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] font-medium">WhatsApp</span>
                </a>

                {/* Divider */}
                <div className="w-6 h-px bg-white/10" />

                {/* Email Us */}
                <a href="mailto:info@technifyltd.com" className="flex flex-col items-center gap-1.5 group">
                  <div className="w-11 h-11 rounded-full bg-indigo-500 flex items-center justify-center group-hover:bg-indigo-400 group-hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] font-medium">Email Us</span>
                </a>

              </div>
            </div>
          </div >
        </div >

        {/* Decorative elements */}
        < div className="absolute top-20 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" ></div >
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section >
    </>
  )
}

export default Home_HeroSection