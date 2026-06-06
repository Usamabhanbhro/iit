import React from 'react'


const expertise = [
  { icon: "💡", title: "Technology Consulting", desc: "Strategic technology guidance to help you make the right technology decisions." },
  { icon: "⚙️", title: "Software Development", desc: "Custom web, mobile, and enterprise applications built for your needs." },
  { icon: "🤖", title: "AI & Automation", desc: "Intelligent automation and AI solutions that streamline operations." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Scalable, secure and cost-effective cloud infrastructure and migration." },
  { icon: "🛡️", title: "Cybersecurity", desc: "Protecting your systems, data, and digital assets with best practices." },
  { icon: "🔄", title: "Digital Transformation", desc: "End-to-end transformation to modernize your business and processes." },
];



const Expertise = () => {
  return (
    <>
    
    <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#00D4AA] text-xs font-semibold uppercase tracking-widest mb-2">
                Our Expertise
              </p>
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
                Comprehensive Solutions Under One Roof
              </h2>
            </div>
    
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {expertise.map((e) => (
                <div
                  key={e.title}
                  className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center text-2xl mx-auto mb-3 group-hover:bg-[#00D4AA]/20 transition">
                    {e.icon}
                  </div>
                  <h4 className="text-gray-900 font-semibold text-xs mb-2">{e.title}</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    
    </>

  )
}

export default Expertise