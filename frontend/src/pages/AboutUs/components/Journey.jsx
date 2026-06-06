import React from 'react'


const journey = [
  { year: "2020", color: "bg-[#00D4AA]", title: "Technify Founded", desc: "Our journey began with a simple mission to solve real business problems with technology." },
  { year: "2021", color: "bg-blue-500", title: "First Enterprise Project", desc: "Successfully delivered our first enterprise solution and built long-term client relationships." },
  { year: "2022", color: "bg-purple-500", title: "Consulting Division", desc: "Launched technology consulting services to help businesses make smarter technology decisions." },
  { year: "2023", color: "bg-orange-500", title: "Expanded Team", desc: "Grew our team of skilled professionals and strengthened our delivery capabilities." },
  { year: "2024", color: "bg-pink-500", title: "AI & Automation", desc: "Added AI, automation, and advanced analytics to help businesses achieve more." },
  { year: "2025", color: "bg-cyan-500", title: "Multi-Industry Impact", desc: "Proudly serving clients across multiple industries and geographies with excellence." },
];



const Journey = () => {
  return (

<>
<section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Journey
          </p>
          <h2 className="text-black text-3xl md:text-4xl font-bold">
            Growing Together, Achieving More
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D4AA]/30 to-transparent" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {journey.map((j, i) => (
              <div key={j.year} className="flex flex-col items-center text-center relative">
                {/* Node */}
                <div className={`relative z-10 w-14 h-14 rounded-full ${j.color} flex items-center justify-center shadow-lg shadow-black/30 mb-4`}>
                  <span className="text-white font-bold text-xs">{j.year}</span>
                </div>
                <h4 className="text-black font-bold text-sm mb-2">{j.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

</>
)
}

export default Journey