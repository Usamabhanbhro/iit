import React from 'react'

const industries = [
  { icon: "🏥", name: "Healthcare" },
  { icon: "🎓", name: "Education" },
  { icon: "🏠", name: "Real Estate" },
  { icon: "🛒", name: "Retail & E-Commerce" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "💰", name: "Finance" },
  { icon: "🏛️", name: "Government" },
  { icon: "🚛", name: "Logistics" },
];


const Industries = () => {
  return (

    <>
    <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#00D4AA] text-xs font-semibold uppercase tracking-widest mb-2">
                Industries We Serve
              </p>
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
                Empowering Businesses Across Diverse Industries
              </h2>
            </div>
    
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 hover:border-[#00D4AA]/40 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-[#00D4AA]/10 flex items-center justify-center text-2xl transition">
                    {ind.icon}
                  </div>
                  <span className="text-gray-700 text-xs font-medium text-center leading-tight">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
    
    </>
)
}

export default Industries