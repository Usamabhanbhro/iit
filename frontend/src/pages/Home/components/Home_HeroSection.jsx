import { Button } from '@heroui/react';
import React from 'react';
import { FaBriefcase, FaRobot, FaCloud, FaMobileAlt, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookConsultationButton from '../../components/BookConsultationButton';

const Home_HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020B18] min-h-screen flex flex-col">
      {/* Glow Effects */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[radial-gradient(ellipse,_rgba(59,130,246,0.12)_0%,_transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[radial-gradient(ellipse,_rgba(99,102,241,0.1)_0%,_transparent_70%)] rounded-full pointer-events-none" />

      {/* Main content (centered) */}
      <div className="flex-1 flex items-center">
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
              <span className="bg-gradient-to-r from-cyan-400 to-[#00d4aa] bg-clip-text text-transparent">
                Helps Businesses Grow
              </span>{" "}
              Faster, Operate Smarter, and Lead Their Industry
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Technify delivers end-to-end software development and technology consulting services that transform ideas into intelligent, scalable and secure digital solutions that drive real business results.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">

           <BookConsultationButton/>

              <Link to="/portfolio">
                <Button className="inline-flex items-center font-semibold px-8 py-4 bg-white/5 text-white border rounded-xl border-white/20 hover:bg-white/10 transition">
                  View Our Work
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>

            {/* Checks */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {["Technology Consulting", "Custom Software", "Mobile Apps", "Cloud Solutions", "AI & Automations", "Web Solutions"].map(t => (
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
          </div>

          {/* RIGHT CONTENT - Orbiting cards */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
              {/* Background glow */}
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_40%_35%,_rgba(59,130,246,0.25)_0%,_rgba(99,102,241,0.15)_40%,_rgba(2,11,24,0)_70%)] rounded-full absolute top-0 left-0 animate-pulse" />

              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px] bg-[radial-gradient(circle,_rgba(59,130,246,0.4)_0%,_rgba(99,102,241,0.2)_50%,_transparent_70%)] rounded-full shadow-[0_0_60px_rgba(59,130,246,0.5),_0_0_120px_rgba(99,102,241,0.3)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[radial-gradient(circle,_#60a5fa_0%,_#818cf8_100%)] shadow-[0_0_30px_rgba(96,165,250,0.8)]" />
              </div>

              {/* Orbiting cards */}
              <div className="absolute inset-0">
                {[
                  { label: "Consulting", icon: <FaBriefcase className="text-sm text-[#00D4AA]" />, angle: 0 },
                  { label: "AI Solutions", icon: <FaRobot className="text-sm text-[#00D4AA]" />, angle: 72 },
                  { label: "Cloud Systems", icon: <FaCloud className="text-sm text-[#00D4AA]" />, angle: 144 },
                  { label: "Mobile Apps", icon: <FaMobileAlt className="text-sm text-[#00D4AA]" />, angle: 216 },
                  { label: "Custom Software", icon: <FaCog className="text-sm text-[#00D4AA]" />, angle: 288 },
                ].map(({ label, icon, angle }) => {
                  const radius = window.innerWidth >= 1024 ? 130 : 100;
                  return (
                    <div
                      key={label}
                      className="absolute top-1/2 left-1/2 bg-[#0D1B2A]/90 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 backdrop-blur-md shadow-2xl whitespace-nowrap"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                      }}
                    >
                      <span className="flex items-center">{icon}</span>
                      <span className="text-white text-[10px] font-bold">{label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Rings */}
              <svg className="absolute top-0 left-0 w-full h-full opacity-15" viewBox="0 0 420 420">
                <circle cx="210" cy="210" r="155" stroke="#3B82F6" strokeWidth="1" fill="none" strokeDasharray="8 6" />
                <circle cx="210" cy="210" r="115" stroke="#6366F1" strokeWidth="1" fill="none" strokeDasharray="4 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH STATS BAR (outside max-w container) */}
      <div className="w-full mt-12">
        <div className="bg-[#020B20] border border-gray-700 py-6 w-full">
          <div className="max-w-7xl mx-auto px-6">
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
      </div>
    </section>
  );
};

export default Home_HeroSection;