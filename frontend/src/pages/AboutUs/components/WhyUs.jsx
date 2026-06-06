import React from 'react'
const whyUs = [
  { icon: "🔬", title: "Innovation First", desc: "We leverage the latest technologies to build future-ready solutions." },
  { icon: "⚡", title: "Fast & Agile Delivery", desc: "Agile methodologies ensure faster delivery and adaptability to change." },
  { icon: "🔒", title: "Security By Design", desc: "We implement best practices to ensure your data and systems are always protected." },
  { icon: "📐", title: "Scalable Architecture", desc: "Our solutions are designed to grow with your business seamlessly." },
  { icon: "🤝", title: "Long-Term Partnership", desc: "We believe in building long-term relationships based on trust and results." },
  { icon: "💼", title: "Business-Focused Solutions", desc: "We align technology with your business goals to deliver real impact." },
];
const WhyUs = () => {
  return (
<>
            <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Why Businesses Trust Technify
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            What Makes Us the Right Technology Partner
          </h2>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="bg-slate-800 border flex-col  border-white/10 rounded-2xl p-5 text-center hover:border-green-500/40 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl mx-auto mb-3 group-hover:bg-green-500/20 transition">
                {w.icon}
              </div>
              <h4 className="text-white font-semibold text-xs mb-2">{w.title}</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

</>

)
}

export default WhyUs