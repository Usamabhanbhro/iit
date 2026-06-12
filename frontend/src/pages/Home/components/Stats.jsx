import React from 'react'

const Stats = () => {
  return (
    <>
    <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "200+", label: "Clients Served" },
            { val: "500+", label: "Projects Delivered" },
            { val: "50+", label: "Team Members" },
            { val: "4.9★", label: "Average Rating" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black text-white">{s.val}</div>
              <div className="text-sm md:text-base text-white/75 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Stats