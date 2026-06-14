import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
    <section className="bg-white py-12 px-6 ">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-14">
          <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Journey
          </p>
          <h2 className="text-black text-3xl md:text-4xl font-bold">
            Growing Together, Achieving More
          </h2>
        </div>

        {/* Mobile/Tablet: Grid layout (no arrows) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:hidden ">
          {journey.map((j) => (
            <div key={j.year} className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-full ${j.color} flex items-center justify-center shadow-lg shadow-black/30 mb-4`}>
                <span className="text-white font-bold text-xs">{j.year}</span>
              </div>
              <h4 className="text-black font-bold text-sm mb-2">{j.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{j.desc}</p>
            </div>
          ))}
        </div>

        {/* Desktop: Flex row with arrows */}
        <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:items-start gap-5">
          {journey.map((j, idx) => (
            <React.Fragment key={j.year}>
              <div className="flex flex-col items-center text-center w-40">
                <div className={`w-14 h-14 rounded-full ${j.color} flex items-center justify-center shadow-lg shadow-black/30 mb-4`}>
                  <span className="text-white font-bold text-xs">{j.year}</span>
                </div>
                <h4 className="text-black font-bold text-sm mb-2">{j.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{j.desc}</p>
              </div>
              {idx < journey.length - 1 && (
                <div className="flex items-center text-[#00D4AA] text-2xl self-center mt-6">
                  <FaArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;