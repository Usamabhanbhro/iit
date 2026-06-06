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
          <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-2">
            Industries We Serve
          </p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
            Powering Businesses Across Industries
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border border-gray-100 hover:border-[#00D4AA] hover:shadow-md transition-all cursor-pointer min-w-[90px]"
            >
              <span className="text-3xl">{ind.icon}</span>
              <span className="text-gray-700 text-sm font-medium">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
)
}

export default Industries