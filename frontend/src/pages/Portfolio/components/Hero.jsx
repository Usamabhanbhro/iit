import { Button } from '@heroui/react';
import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
      <section className="relative bg-[#020B18] overflow-hidden py-8 px-6">
        {/* Grid bg */}
        <div className="absolute inset-0 opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-3">
              Our Portfolio
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
              Real Projects.{" "}
              <span className="text-white">Real Results.</span>
              <br />
              <span className="text-[#00D4AA]">Real Impact.</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              Explore our portfolio of successful projects where we transformed
              ideas into powerful digital solutions that helped businesses grow,
              operate efficiently, and achieve measurable results.
            </p>
            <div className="flex flex-wrap gap-4">

              <Link to="/portfolio">
                <Button
                  className="bg-[#00D4AA] text-black font-semibold px-6 py-4 rounded-full hover:brightness-110 transition"
                  size="lg"
                >
                  Start Your Project →
                </Button>
              </Link>

              <Link to="/consultation">
                <Button
                  variant="bordered"
                  className="text-white px-6 py-4 border border-white/50 rounded-full hover:bg-white/10 transition"
                  size="lg"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right – mock dashboard visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-[#0D1B2A] border border-[#00D4AA]/20 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-sm font-semibold">Dashboard</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                {/* Stat row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Total Balance", val: "$24,780.50", color: "text-white" },
                    { label: "Income", val: "$15,230.00", color: "text-green-400" },
                    { label: "Expenses", val: "$8,450.00", color: "text-red-400" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#0A1525] rounded-xl p-3">
                      <p className="text-gray-500 text-[10px] mb-1">{s.label}</p>
                      <p className={`${s.color} text-xs font-bold`}>{s.val}</p>
                    </div>
                  ))}
                </div>
                {/* Chart bars */}
                <div className="bg-[#0A1525] rounded-xl p-3 mb-3">
                  <p className="text-gray-400 text-[10px] mb-2">Monthly Overview</p>
                  <div className="flex items-end gap-1 h-12">
                    {[30, 55, 40, 70, 45, 80, 60, 75, 50, 65, 85, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 10 ? "#00D4AA" : "rgba(0,212,170,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Transaction list */}
                <div className="space-y-2">
                  {[
                    { name: "Payment from Client", amt: "+$2,500.00", color: "text-green-400" },
                    { name: "Office Supplies", amt: "-$350.00", color: "text-red-400" },
                    { name: "Subscription", amt: "-$129.00", color: "text-red-400" },
                  ].map((t) => (
                    <div key={t.name} className="flex justify-between items-center">
                      <span className="text-gray-400 text-[10px]">{t.name}</span>
                      <span className={`${t.color} text-[10px] font-semibold`}>{t.amt}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#00D4AA] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Live Preview ✓
              </div>
            </div>
          </div>
        </div>


        <div className="fiveBoxes w-full mt-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 border border-gray-700 rounded-lg p-6 bg-slate-800/50 w-full">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <i className="fa-regular fa-file text-purple-300 text-3xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">150+</h1>
                  <p className="text-sm text-gray-300 font-light">Projects Delivered</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-shield text-purple-300 text-3xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">98%</h1>
                  <p className="text-sm text-gray-300 font-light">Client Satisfaction</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-user text-purple-300 text-3xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">30+</h1>
                  <p className="text-sm text-gray-300 font-light">Active Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-clock text-purple-300 text-3xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">24/7</h1>
                  <p className="text-sm text-gray-300 font-light">Support Available</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
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
        </div>

      </section>
    </>
  )
}

export default Hero