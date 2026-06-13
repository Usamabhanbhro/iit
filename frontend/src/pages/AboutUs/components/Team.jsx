import { Card } from '@heroui/react';
import React from 'react';

const team = [
  {
    image: "sir_rafique.jpg", // professional man in suit
    name: "Rafique Ahmed Bhutto",
    role: "Chief Executive Officer",
    desc: "Visionary leader with expertise in business strategy, technology innovation, and building high-performance teams.",
  },
  {
    image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg", // confident man
    name: "Ahsan Raza",
    role: "Chief Technology Officer",
    desc: "Tech enthusiast and architect driving innovation, engineering excellence, and scalable technology solutions.",
  },
  {
    image: "https://images.pexels.com/photos/7869056/pexels-photo-7869056.jpeg", // professional woman
    name: "Sana Malik",
    role: "Head of Projects",
    desc: "Project management expert ensuring timely delivery, quality, and client satisfaction across all engagements.",
  },
  {
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg", // smiling man
    name: "Umer Farooq",
    role: "Consulting Lead",
    desc: "Strategic consultant helping businesses make smart technology decisions and drive digital transformation.",
  },
];

const Team = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00D4AA] text-xs font-semibold uppercase tracking-widest mb-2">
            Meet the Leadership Team
          </p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
            The Minds Behind Technify
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <Card
              key={member.name}
              className="border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="flex items-start gap-4 p-5">
                {/* LEFT — Image (replaces initials) */}
                <div className="w-24 h-28 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT — Info */}
                <div className="flex flex-col justify-start">
                  <h3 className="text-gray-900 font-bold text-base mb-0.5">{member.name}</h3>
                  <p className="text-[#00D4AA] text-xs font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{member.desc}</p>
                  {/* LinkedIn Icon */}
                  <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-xs cursor-pointer hover:bg-blue-200 transition">
                    in
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;