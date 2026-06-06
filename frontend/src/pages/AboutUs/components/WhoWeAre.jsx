import React from 'react'


const mvv = [
  {
    icon: "🎯",
    iconBg: "bg-[#00D4AA]/10",
    iconColor: "text-[#00D4AA]",
    title: "Our Mission",
    desc: "To empower organizations through innovative technology solutions that improve efficiency, drive growth, and create sustainable competitive advantages.",
  },
  {
    icon: "👁️",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    title: "Our Vision",
    desc: "To become a globally trusted technology partner recognized for innovation, excellence, and impactful digital transformation.",
  },
  {
    icon: "💎",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    title: "Our Values",
    values: ["Innovation", "Integrity", "Excellence", "Collaboration", "Customer Success", "Continuous Improvement"],
  },
];

const WhoWeAre = () =>{
  return (
    <>
     <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left – video thumbnail mock */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-[#0D1B2A] rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2 opacity-20 w-full h-full p-4">
                    {Array(16).fill(null).map((_, i) => (
                      <div key={i} className="bg-[#00D4AA] rounded opacity-30" />
                    ))}
                  </div>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                  <span className="text-white font-bold text-xl">Technify</span>
                </div>
              </div>
            </div>
    
            {/* Right – text */}
            <div>
              <p className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-gray-900 text-3xl font-bold leading-tight mb-5">
                A Team of Innovators, Problem Solvers & Technology Experts
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                <p>
                  Technify is a technology consulting and software development company committed
                  to delivering innovative, scalable, and secure digital solutions.
                </p>
                <p>
                  Our team combines business understanding, technical expertise, and strategic
                  thinking to help organizations solve complex challenges through technology.
                </p>
                <p>
                  From custom software and mobile applications to cloud infrastructure, AI-powered
                  solutions, and digital transformation consulting, we partner with businesses to
                  create measurable results.
                </p>
              </div>
    
              {/* MVV cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {mvv.map((item) => (
                  <div
                    key={item.title}
                    className="border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center text-xl mb-3`}>
                      {item.icon}
                    </div>
                    <h4 className="text-gray-900 font-bold text-sm mb-2">{item.title}</h4>
                    {item.desc ? (
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    ) : (
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {item.values.map((v) => (
                          <div key={v} className="flex items-center gap-1">
                            <span className="text-[#00D4AA] text-[10px]">✔</span>
                            <span className="text-gray-500 text-xs">{v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    
    </>
  )
}

export default WhoWeAre