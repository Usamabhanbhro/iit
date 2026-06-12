import { Button } from '@heroui/react'
import React from 'react'
import { FaBriefcase, FaRobot, FaCloud, FaMobileAlt, FaCog } from 'react-icons/fa';


const Home_HeroSection = () => {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden bg-[#020B18] min-h-screen flex items-center">
        {/* Glow Effects */}
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[radial-gradient(ellipse,_rgba(59,130,246,0.12)_0%,_transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[radial-gradient(ellipse,_rgba(99,102,241,0.1)_0%,_transparent_70%)] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
              <span className="text-[#00D4AA] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Trusted Software Development &amp; Technology Consulting Company
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              We Build Technology That{" "}
              <span className="bg-[#00D4AA] bg-clip-text text-transparent">
                Helps Businesses Grow
              </span>{" "}
              Faster, Operate Smarter, and Lead Their Industry
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Technify delivers end-to-end software development and technology consulting services that transform ideas into intelligent, scalable and secure digital solutions that drive real business results.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                href="/consultation"
                size="lg"
                radius="full"
                className="font-bold px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl text-white shadow shadow-[#00D4AA]/25 flex items-center gap-2 hover:brightness-110 transition"
              >
                Book Free Consultation
                <span>→</span>
              </Button>
              <Button
                href="#work"
                size="lg"
                radius="full"
                className="font-semibold px-8 py-4 bg-white/5 text-white border rounded-xl border-white/20 hover:bg-white/10 transition flex items-center gap-2"
              >
                View Our Work
                <span>→</span>
              </Button>
            </div>

            {/* Checks */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {["Technology Consulting", "Custom Software", "Mobile Apps", "Cloud Solutions", "AI & Automations"].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <span className="w-[18px] h-[18px] rounded-full bg-green-500/15 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <polyline points="2,6 5,9 10,3" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-white text-sm font-semibold">{t}</span>
                </div>
              ))}
            </div>

            {/* Stats bar - Fixed */}
            <div className="w-full mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 border border-gray-700 rounded-xl p-5 bg-slate-800/50">
                {/* Stat 1 */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <i className="fa-regular fa-file text-purple-300 text-2xl md:text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">150+</h3>
                    <p className="text-xs text-gray-300">Projects Delivered</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-shield text-purple-300 text-2xl md:text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">98%</h3>
                    <p className="text-xs text-gray-300">Client Satisfaction</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-user text-purple-300 text-2xl md:text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">30+</h3>
                    <p className="text-xs text-gray-300">Active Clients</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-clock text-purple-300 text-2xl md:text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">24/7</h3>
                    <p className="text-xs text-gray-300">Support Available</p>
                  </div>
                </div>

                {/* Stat 5 */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-calendar text-purple-300 text-2xl md:text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">5+</h3>
                    <p className="text-xs text-gray-300">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - 3D Visual */}
          <div className="relative flex justify-center items-center">
            {/* Main orb */}
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_40%_35%,_rgba(59,130,246,0.25)_0%,_rgba(99,102,241,0.15)_40%,_rgba(2,11,24,0)_70%)] rounded-full absolute top-0 left-0 animate-pulse" />

              {/* Center glowing circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px] bg-[radial-gradient(circle,_rgba(59,130,246,0.4)_0%,_rgba(99,102,241,0.2)_50%,_transparent_70%)] rounded-full shadow-[0_0_60px_rgba(59,130,246,0.5),_0_0_120px_rgba(99,102,241,0.3)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[radial-gradient(circle,_#60a5fa_0%,_#818cf8_100%)] shadow-[0_0_30px_rgba(96,165,250,0.8)]" />
              </div>

              {/* Orbiting service cards */}
            import { FaBriefcase, FaRobot, FaCloud, FaMobileAlt, FaCog } from 'react-icons/fa';

// ... inside your component
{[
  { label: "Consulting", icon: <FaBriefcase className="text-sm text-[#00D4AA]" />, angle: 0, r: 130 },
  { label: "AI Solutions", icon: <FaRobot className="text-sm text-[#00D4AA]" />, angle: 72, r: 130 },
  { label: "Cloud Systems", icon: <FaCloud className="text-sm text-[#00D4AA]" />, angle: 144, r: 130 },
  { label: "Mobile Apps", icon: <FaMobileAlt className="text-sm text-[#00D4AA]" />, angle: 216, r: 130 },
  { label: "Custom Software", icon: <FaCog className="text-sm text-[#00D4AA]" />, angle: 288, r: 130 },
].map(({ label, icon, angle, r }) => {
  const rad = (angle - 90) * Math.PI / 180;
  const x = 170 + r * Math.cos(rad) - 48;
  const y = 170 + r * Math.sin(rad) - 20;
  return (
    <div
      key={label}
      className="absolute bg-[#0D1B2A]/90 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 backdrop-blur-md shadow-2xl"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <span className="flex items-center">{icon}</span>
      <span className="text-white text-[10px] font-bold whitespace-nowrap">{label}</span>
    </div>
  );
})}

              {/* Ring */}
              <svg className="absolute top-0 left-0 w-full h-full opacity-15" viewBox="0 0 420 420">
                <circle cx="210" cy="210" r="155" stroke="#3B82F6" strokeWidth="1" fill="none" strokeDasharray="8 6" />
                <circle cx="210" cy="210" r="115" stroke="#6366F1" strokeWidth="1" fill="none" strokeDasharray="4 8" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home_HeroSection