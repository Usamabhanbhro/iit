import React from 'react';

const projects = [
  { 
    title: "FinTrack", 
    sub: "Financial Management Platform", 
    color: "#3b82f6", 
    type: "Web App",
    typeColor: "bg-blue-100 text-blue-700",
    image: "https://plus.unsplash.com/premium_photo-1664478157873-50d4963c1d11?q=80&w=1169&auto=format&fit=crop" 
  },
  { 
    title: "MediCare+", 
    sub: "Hospital Management System", 
    color: "#06b6d4", 
    type: "Android App",
    typeColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=1170&auto=format&fit=crop" 
  },
  { 
    title: "ShopEase", 
    sub: "E-commerce Marketplace", 
    color: "#8b5cf6", 
    type: "iOS App",
    typeColor: "bg-gray-100 text-gray-700",
    image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop" 
  },
  { 
    title: "Saloniq", 
    sub: "Salon Management SaaS", 
    color: "#ec4899", 
    type: "Desktop App",
    typeColor: "bg-orange-100 text-orange-700",
    image: "https://plus.unsplash.com/premium_photo-1664301489002-2fed4596c101?w=600&auto=format&fit=crop" 
  },
  { 
    title: "LearnHub", 
    sub: "E-Learning Platform", 
    color: "#22c55e", 
    type: "Android App",
    typeColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop" 
  },
  { 
    title: "EstatePro", 
    sub: "Real Estate Platform", 
    color: "#f59e0b", 
    type: "Web App",
    typeColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1532938811297-d6747067a6b7?q=80&w=1170&auto=format&fit=crop" 
  },
  // Add more examples with different types
  { 
    title: "Fitness Tracker", 
    sub: "Health & Wellness", 
    color: "#ef4444", 
    type: "iOS App",
    typeColor: "bg-gray-100 text-gray-700",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop" 
  },
  { 
    title: "TaskFlow", 
    sub: "Productivity Suite", 
    color: "#14b8a6", 
    type: "Desktop App",
    typeColor: "bg-orange-100 text-orange-700",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop" 
  },
  { 
    title: "ChatNow", 
    sub: "Messaging Platform", 
    color: "#f97316", 
    type: "Android App",
    typeColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop" 
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
              Featured Projects
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Solutions That Drive Real Results
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden cursor-pointer border border-gray-300 transition-all duration-300 bg-white hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Container */}
              <div
                className="h-44 relative bg-gray-100"
                style={{ background: `linear-gradient(135deg, ${p.color}30, ${p.color}10)` }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover relative z-10"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${p.color}20, transparent)` }}
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{p.title}</h3>
                    <p className="text-xs text-gray-500 m-0">{p.sub}</p>
                  </div>
                  {/* Dynamic badge based on app type */}
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${p.typeColor}`}
                  >
                    {p.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;