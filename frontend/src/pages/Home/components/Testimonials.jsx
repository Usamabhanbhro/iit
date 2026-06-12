import React from 'react'
import { FaHospital, FaGraduationCap, FaBuilding, FaShoppingCart, FaIndustry, FaMoneyBillWave, FaLandmark, FaTruck } from 'react-icons/fa'

 const testimonials = [
    {
      quote: "Technify transformed our digital business operations with a robust and scalable platform. Their team is professional, responsive and truly understands our needs.",
      name: "Ahsan Raza", role: "CEO, HealthPlus", stars: 5,
    },
    {
      quote: "Excellent communication, timely delivery, and outstanding support throughout the project. Highly recommended!",
      name: "Imran Sheikh", role: "CTO, Finevo", stars: 5,
    },
  ];

const Testimonials = () => {
  return (
    <>
     <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Testimonials */}
        <div>
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">What Our Clients Say</p>
          <div className="flex flex-col gap-5 mt-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {Array(t.stars).fill(null).map((_, j) => <span key={j} className="text-amber-500 text-sm">★</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Industries We Serve</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { name: "Healthcare", icon: <FaHospital /> }, { name: "Education", icon: <FaGraduationCap /> },
              { name: "Real Estate", icon: <FaBuilding /> }, { name: "Retail & E-Commerce", icon: <FaShoppingCart /> },
              { name: "Manufacturing", icon: <FaIndustry /> }, { name: "Finance", icon: <FaMoneyBillWave /> },
              { name: "Government", icon: <FaLandmark /> }, { name: "Logistics", icon: <FaTruck /> },
            ].map((ind, i) => (
              <div key={i} className="text-center p-5 border border-gray-200 rounded-xl transition-all cursor-pointer bg-white hover:border-indigo-600 hover:bg-indigo-50 hover:-translate-y-0.5">
                <div className="text-3xl mb-2 text-indigo-600 flex justify-center">{ind.icon}</div>
                <div className="text-[11px] font-bold text-gray-700 leading-tight uppercase tracking-tight">{ind.name}</div>
              </div>
            ))}
          </div>
          <div className="text-right mt-4">
            <button className="bg-transparent border-none text-indigo-600 text-sm font-bold cursor-pointer hover:underline">View All Industries →</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials