import { Button } from '@heroui/react'
import React from 'react'

const Hero = () => {
  return (
<>
    <section className="relative bg-[#020B18] overflow-hidden min-h-[480px] flex items-center">

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
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
              className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold px-6 py-4 rounded-full hover:brightness-110 transition"
              size="lg"
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="bordered"
              className="border-white/30 text-white px-6 py-4 border rounded-full hover:bg-white/10 transition"
              size="lg"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Right – themed image with overlay and info nodes */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md md:max-w-lg h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/34803972/pexels-photo-34803972.jpeg"
              alt="Team collaborating on technology"
              className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-700 hover:scale-100 mix-blend-overlay opacity-90"
            />

            {/* Gradient overlay to blend image with theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020B18]/70 via-transparent to-[#0D1B2A]/60" />

            {/* Center card (larger) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 md:w-52 h-20 md:h-24 bg-[#0D1B2A]/85 border border-[#00D4AA]/30 rounded-2xl px-5 py-3 backdrop-blur-md flex items-center justify-center z-10">
              <p className="text-white text-base md:text-lg font-bold text-center leading-tight">
                TECHNOLOGY
                <br />
                SOLUTIONS
              </p>
            </div>

            {/* Corner info nodes (CONSULT moved to top-left) */}
            {[
              { label: "CONSULT", sub: "Strategy & Advisory", pos: "top-6 left-6" },
              { label: "DEVELOP", sub: "Build & Integrate", pos: "bottom-6 left-6" },
              { label: "DEPLOY", sub: "Launch & Scale", pos: "top-6 right-6" },
              { label: "SUPPORT", sub: "Optimize & Evolve", pos: "bottom-6 right-6" },
            ].map((node) => (
              <div
                key={node.label}
                className={`absolute ${node.pos} bg-[#0D1B2A]/95 border border-[#00D4AA]/30 rounded-lg px-3 py-2 text-center max-w-[160px] z-20`}
              >
                <p className="text-[#00D4AA] text-xs md:text-sm font-bold">{node.label}</p>
                <p className="text-gray-300 text-[10px] md:text-xs">{node.sub}</p>
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