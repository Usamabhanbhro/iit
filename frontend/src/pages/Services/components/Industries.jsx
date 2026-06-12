import React from 'react'
import { FaHospital, FaGraduationCap, FaHome, FaShoppingCart, FaIndustry, FaMoneyBillWave, FaLandmark, FaTruck } from 'react-icons/fa'

const industries = [
  { key: 'healthcare', name: 'Healthcare' },
  { key: 'education', name: 'Education' },
  { key: 'real-estate', name: 'Real Estate' },
  { key: 'retail', name: 'Retail & E-Commerce' },
  { key: 'manufacturing', name: 'Manufacturing' },
  { key: 'finance', name: 'Finance' },
  { key: 'government', name: 'Government' },
  { key: 'logistics', name: 'Logistics' },
]

const iconMap = {
  healthcare: <FaHospital className="text-3xl md:text-4xl text-[#00D4AA]" />,
  education: <FaGraduationCap className="text-3xl md:text-4xl text-[#00D4AA]" />,
  'real-estate': <FaHome className="text-3xl md:text-4xl text-[#00D4AA]" />,
  retail: <FaShoppingCart className="text-3xl md:text-4xl text-[#00D4AA]" />,
  manufacturing: <FaIndustry className="text-3xl md:text-4xl text-[#00D4AA]" />,
  finance: <FaMoneyBillWave className="text-3xl md:text-4xl text-[#00D4AA]" />,
  government: <FaLandmark className="text-3xl md:text-4xl text-[#00D4AA]" />,
  logistics: <FaTruck className="text-3xl md:text-4xl text-[#00D4AA]" />,
}

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
                key={ind.key}
                className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border border-gray-100 hover:border-[#00D4AA] hover:shadow-md transition-all cursor-pointer min-w-[90px]"
              >
                <span className="text-3xl md:text-4xl">{iconMap[ind.key]}</span>
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
