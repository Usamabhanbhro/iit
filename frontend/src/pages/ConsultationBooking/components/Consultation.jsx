import { Card } from '@heroui/react';
import React, { useState } from 'react';
import { FaStar, FaShieldAlt, FaCheck, FaStar as FaStarSolid } from 'react-icons/fa';

const consultants = [
  {
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    name: "Hassan Naeem",
    role: "CEO & Tech Strategist",
    exp: "12+ Years Experience",
    skills: ["Digital Transformation", "AI & Product Strategy"],
    rating: "4.9",
    reviews: "120+",
    recommended: true,
  },
  {
    image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    name: "Ayesha Khan",
    role: "Solutions Architect",
    exp: "9+ Years Experience",
    skills: ["Cloud Architecture", "Enterprise Solutions"],
    rating: "4.8",
    reviews: "95+",
    recommended: false,
  },
  {
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    name: "Usman Tariq",
    role: "CTO & Technology Expert",
    exp: "10+ Years Experience",
    skills: ["Software Architecture", "Scalable Systems"],
    rating: "4.9",
    reviews: "110+",
    recommended: false,
  },
  {
    image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    name: "Sara Malik",
    role: "Product Strategy Lead",
    exp: "8+ Years Experience",
    skills: ["Product Strategy", "Business Analysis"],
    rating: "4.8",
    reviews: "86+",
    recommended: false,
  },
];

const Consultation = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#0D1B2A] py-16 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-1">Meet Your Consultants</h2>
          <p className="text-gray-400 text-sm">Book a session with our experienced experts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {consultants.map((c, i) => (
            <Card
              key={c.name}
              onClick={() => setSelected(i)}
              className={`cursor-pointer transition-all duration-200 border bg-[#020B18] overflow-visible ${
                selected === i
                  ? "border-[#00D4AA] shadow-lg shadow-[#00D4AA]/10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="p-5 relative">
                {/* Recommended badge */}
                {c.recommended && (
                  <div className="absolute -top-3 left-4 bg-[#00D4AA] text-black text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FaStarSolid className="text-black text-[10px]" />
                    Recommended
                  </div>
                )}

                {/* Avatar image + radio */}
                <div className="flex items-start justify-between mb-4 mt-2">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/80x80?text=User';
                      }}
                    />
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selected === i ? "border-[#00D4AA]" : "border-white/20"
                  }`}>
                    {selected === i && <div className="w-2.5 h-2.5 rounded-full bg-[#00D4AA]" />}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-white font-bold text-sm mb-0.5">{c.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{c.role}</p>

                <div className="flex items-center gap-1.5 mb-3">
                  <FaShieldAlt className="text-[#00D4AA] text-xs" />
                  <span className="text-gray-300 text-xs">{c.exp}</span>
                </div>

                <div className="space-y-1.5 mb-4">
                  {c.skills.map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <FaCheck className="text-[#00D4AA] text-[10px]" />
                      <span className="text-gray-400 text-xs">{s}</span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 pt-3 border-t border-white/5">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-white text-xs font-semibold">{c.rating}</span>
                  <span className="text-gray-500 text-xs">({c.reviews})</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;