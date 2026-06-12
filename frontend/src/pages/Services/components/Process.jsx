import React from 'react'

const processSteps = [
  { num: "01", title: "Discover", desc: "Understanding your business, goals and challenges." },
  { num: "02", title: "Plan", desc: "Planning the right strategy and technology roadmap." },
  { num: "03", title: "Design", desc: "Creating intuitive designs and seamless user experiences." },
  { num: "04", title: "Develop", desc: "Building robust, scalable and secure solutions." },
  { num: "05", title: "Test", desc: "Rigorous testing for quality, performance and security." },
  { num: "06", title: "Deploy", desc: "Seamless deployment with minimal disruption to your business." },
  { num: "07", title: "Support", desc: "Continuous support and optimization for long-term success." },
];


const Process = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-2">
              Our Development Process
            </p>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
              A Proven Process That Ensures Success
            </h2>
          </div>

          {/* Steps row */}
          {/* Process Steps with Arrows */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-6 lg:gap-2">
            {processSteps.map((step, i) => (
              <React.Fragment key={step.num}>
                {/* Step card */}
                <div className="flex flex-col items-center text-center w-40 sm:w-48">
                  <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[#00D4AA] bg-white flex items-center justify-center mb-3">
                    <span className="text-[#00D4AA] text-lg font-bold">{step.num}</span>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm mb-1">{step.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow between steps (except after last) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center text-[#00D4AA] text-5xl font-bold mx-1">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Process