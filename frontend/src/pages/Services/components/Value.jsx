import React from 'react'

const values = [
  { icon: "👥", title: "Expert Team", desc: "Skilled professionals with vast experience in latest technologies." },
  { icon: "🎯", title: "Client-Centric Approach", desc: "We prioritize your business goals and deliver solutions that matter." },
  { icon: "⏰", title: "On-Time Delivery", desc: "Agile methodology and transparent communication ensure timely delivery." },
  { icon: "✅", title: "Quality Assurance", desc: "Strict quality standards and testing to deliver bug-free solutions." },
  { icon: "📈", title: "Scalable Solutions", desc: "Built to scale with your business and adapt to future needs." },
  { icon: "🤝", title: "Long-Term Partnership", desc: "We build relationships that test and grow together." },
];

const Value = () => {
  return (
<>
    <section className="bg-[#020B18] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-2">
            Why Businesses Choose Technify
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Value We Deliver
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center p-4 rounded-2xl border border-white/10 hover:border-[#00D4AA]/40 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-3xl mb-3">{v.icon}</span>
              <p className="text-white font-semibold text-sm mb-2">{v.title}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
</>

)
}

export default Value