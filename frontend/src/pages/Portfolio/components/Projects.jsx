import { Card } from '@heroui/react';
import React, { useState } from 'react';

const filterTabs = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "SaaS Solutions",
  "Enterprise Solutions",
  "AI & Automation",
  "Cloud Solutions",
];

const projects = [
  {
    id: 1,
    badge: "SaaS Platform",
    badgeColor: "bg-purple-500",
    title: "FinTrack – Finance Management",
    desc: "A comprehensive financial management platform for businesses to track, analyze and optimize their financial operations.",
    category: "SaaS Solutions",
    img: "https://plus.unsplash.com/premium_photo-1664478157873-50d4963c1d11?q=80&w=1169&auto=format&fit=crop",
    imgBg: "from-purple-900/30 to-purple-950/10"
  },
  {
    id: 2,
    badge: "Healthcare",
    badgeColor: "bg-teal-500",
    title: "MediCare+ – Hospital Management",
    desc: "Complete hospital management system for appointment scheduling, patient records, billing and reporting.",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=1170&auto=format&fit=crop",
    imgBg: "from-teal-900/30 to-teal-950/10"
  },
  {
    id: 3,
    badge: "E-Commerce",
    badgeColor: "bg-orange-500",
    title: "ShopEase – Online Marketplace",
    desc: "Full-featured e-commerce marketplace with multi-vendor support, secure payments and advanced analytics.",
    category: "Web Development",
    img: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop",
    imgBg: "from-orange-900/30 to-orange-950/10"
  },
  {
    id: 4,
    badge: "Mobile App",
    badgeColor: "bg-pink-500",
    title: "SalonIQ – Salon Management",
    desc: "Mobile app for salon owners to manage appointments, staff, services, inventory and customer loyalty programs.",
    category: "Mobile Apps",
    img: "https://plus.unsplash.com/premium_photo-1664301489002-2fed4596c101?w=600&auto=format&fit=crop",
    imgBg: "from-pink-900/30 to-pink-950/10"
  },
  {
    id: 5,
    badge: "Real Estate",
    badgeColor: "bg-green-600",
    title: "EstatePro – Property Platform",
    desc: "Real estate platform for property listing, customer management, inquiries and advanced search.",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1532938811297-d6747067a6b7?q=80&w=1170&auto=format&fit=crop",
    imgBg: "from-green-900/30 to-green-950/10"
  },
  {
    id: 6,
    badge: "Education",
    badgeColor: "bg-blue-500",
    title: "LearnHub – E-Learning Platform",
    desc: "E-learning platform with interactive courses, live classes, assessments and progress tracking.",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop",
    imgBg: "from-blue-900/30 to-blue-950/10"
  },
  {
    id: 7,
    badge: "AI Solution",
    badgeColor: "bg-violet-500",
    title: "AI Document Intelligence",
    desc: "AI-powered document processing solution that extracts, classifies and analyzes data with high accuracy.",
    category: "AI & Automation",
    img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop",
    imgBg: "from-violet-900/30 to-violet-950/10"
  },
  {
    id: 8,
    badge: "Enterprise",
    badgeColor: "bg-cyan-600",
    title: "BizCore – ERP System",
    desc: "Enterprise resource planning system that streamlines operations, finance, HR, inventory and reporting.",
    category: "Enterprise Solutions",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop",
    imgBg: "from-cyan-900/30 to-cyan-950/10"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-[#020B18] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 items-center">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveFilter(tab);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tab
                  ? "bg-[#00D4AA] text-black"
                  : "bg-[#0D1B2A] text-gray-400 border border-white/10 hover:border-[#00D4AA]/40 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
          {/* Sort dropdown */}
          <div className="ml-auto">
            <select className="bg-[#0D1B2A] border border-white/10 text-gray-400 text-sm rounded-full px-4 py-2 outline-none">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="bg-[#0D1B2A] border border-white/10 hover:border-[#00D4AA]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D4AA]/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Project image area */}
              <div
                className={`bg-gradient-to-br ${
                  project.imgBg || "from-gray-800 to-gray-900"
                } h-36 flex items-center justify-center relative overflow-hidden`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-300"
                />
                {/* Badge */}
                <div
                  className={`absolute top-3 left-3 ${project.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-full`}
                >
                  {project.badge}
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#00D4AA] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {project.desc}
                </p>
                <button className="text-[#00D4AA] text-xs font-semibold hover:underline">
                  View Case Study →
                </button>
              </div>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Projects;