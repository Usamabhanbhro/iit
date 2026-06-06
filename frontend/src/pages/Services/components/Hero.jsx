import { Button } from '@heroui/react'
import React from 'react'

const Hero = () => {
  return (
<>
    <section className="relative bg-[#020B18] overflow-hidden min-h-[480px] flex items-center">

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
            End-to-End Technology Solutions That Drive{" "}
            <span className="text-[#00D4AA]">Real Results</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
            Technify offers a comprehensive range of software development and
            technology consulting services to help businesses innovate, transform
            and grow. From strategy to implementation, we deliver solutions that
            create measurable impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-semibold px-6 py-4 rounded-full hover:brightness-110 transition"
              size="lg"
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="bordered"
              className="border-white/30 text-white px-6 py-4 border rounded-full hover:bg-white/10 transition"
              size="lg"
            >
              ▶ View Our Work
            </Button>
          </div>
        </div>

        {/* Right – diagram */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72">
            {/* Center box */}
            <div className="absolute inset-0 m-auto w-36 h-16 bg-[#0D1B2A] border border-[#00D4AA]/40 rounded-xl flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-white text-xs font-bold text-center leading-tight">
                TECHNOLOGY
                <br />
                SOLUTIONS
              </span>
            </div>
            {/* Orbit nodes */}
            {[
              { label: "CONSULT", sub: "Strategy & Advisory", pos: "top-4 left-1/2 -translate-x-1/2" },
              { label: "DEVELOP", sub: "Build & Integrate", pos: "bottom-4 left-4" },
              { label: "DEPLOY", sub: "Launch & Scale", pos: "top-4 right-4" },
              { label: "SUPPORT", sub: "Optimize & Evolve", pos: "bottom-4 right-4" },
            ].map((node) => (
              <div
                key={node.label}
                className={`absolute ${node.pos} bg-[#0D1B2A] border border-[#00D4AA]/30 rounded-lg px-3 py-2 text-center`}
              >
                <p className="text-[#00D4AA] text-xs font-bold">{node.label}</p>
                <p className="text-gray-400 text-[10px]">{node.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
</>

)
}

export default Hero