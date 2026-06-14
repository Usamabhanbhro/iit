import { Button } from '@heroui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import BookConsultationButton from '../../components/BookConsultationButton';

const Hero = () => {
  return (

    <>
      <section className="relative bg-[#020B18] overflow-hidden min-h-[520px] flex flex-col items-center pb-12">


        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
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
              <BookConsultationButton/>

              <Link to="/portfolio">
                <Button className="inline-flex items-center font-semibold px-8 py-4 bg-white/5 text-white border rounded-xl border-white/20 hover:bg-white/10 transition">
                  View Our Work
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right – team meeting visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-[#0D1B2A] border border-[#00D4AA]/20 rounded-2xl overflow-hidden shadow-2xl">
                {/* ---- FULL CARD IMAGE with overlay & text ---- */}
                {/* Right card image area */}
                <div className="relative h-48 overflow-hidden">
                  {/* Background image via img tag — covers the full area */}
                  <img
                    src="/technify2.png"
                    alt="Technify logo"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />


                </div>

                {/* Stats row (unchanged) */}
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

              {/* Since 2020 badge */}
              <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 bg-[#00D4AA] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
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