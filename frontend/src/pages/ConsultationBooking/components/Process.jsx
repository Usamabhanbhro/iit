import React from 'react'

const processSteps = [
  { num: "1", icon: "✉️", title: "Confirmation", desc: "You'll receive a confirmation email instantly" },
  { num: "2", icon: "📅", title: "Consultation Call", desc: "Meet with our expert at the scheduled time" },
  { num: "3", icon: "🎯", title: "Strategy Discussion", desc: "We analyze your needs & discuss the best solution" },
  { num: "4", icon: "📋", title: "Custom Roadmap", desc: "Get a tailored roadmap and recommendations" },
  { num: "5", icon: "🚀", title: "Project Kickoff", desc: "Move forward with confidence and start building" },
];

const Process = () => {
  return (
    <>
     <section className="bg-[#020B18] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl font-bold text-center mb-12">
              What Happens After You Book?
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-0px)] h-[2px] bg-gradient-to-r from-[#00D4AA]/40 to-transparent z-0" />
                  )}
    
                  {/* Step circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full border-2 border-[#00D4AA]/50 bg-[#0D1B2A] flex items-center justify-center text-2xl mb-3 hover:border-[#00D4AA] transition-colors">
                    {step.icon}
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#00D4AA] text-black text-[10px] font-bold flex items-center justify-center">
                      {step.num}
                    </div>
                  </div>
    
                  <p className="text-white font-semibold text-sm mb-1">{step.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </>
  )
}

export default Process