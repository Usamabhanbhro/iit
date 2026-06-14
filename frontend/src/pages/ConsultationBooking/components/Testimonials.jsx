import { Card } from '@heroui/react';
import React from 'react';
import { FaBuilding, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: "The consultation helped us clarify our product vision and choose the right tech stack. Highly recommended!",
    name: "Muhammad Ali",
    role: "Co-Founder, ShopEase",
    company: "ShopEase",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
  },
  {
    text: "Technify's team provided exceptional insights and a clear roadmap for our digital transformation.",
    name: "Fatima Noor",
    role: "CEO, EduLearn",
    company: "EduLearn",
    image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
  },
  {
    text: "The strategy session was impactful and saved us months of trial and error. Great experience!",
    name: "Omar Raza",
    role: "CTO, FinTrack",
    company: "FinTrack",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
  },
];

// Duplicate testimonials to create a seamless loop (appear to repeat)
const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-[#0D1B2A] py-16 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        {/* Horizontal marquee (right → left) */}
        <div className="relative overflow-hidden w-full">
          <div className="marquee inline-flex gap-6">
            {marqueeTestimonials.map((t, idx) => (
              <Card
                key={idx}
                className="bg-[#020B18] border border-white/10 hover:border-[#00D4AA]/30 transition-all duration-200 w-80 md:w-96 flex-shrink-0"
              >
                <div className="p-6">
                  {/* Quote icon */}
                  <div className="w-8 h-8 rounded-lg bg-[#00D4AA]/10 flex items-center justify-center mb-4">
                    <FaQuoteLeft className="text-[#00D4AA] text-lg" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.text}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar image */}
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/60x60?text=User';
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{t.name}</p>
                        <p className="text-gray-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                    {/* Company badge with icon */}
                    <div className="flex items-center gap-1.5 bg-[#0D1B2A] px-2 py-1 rounded-lg">
                      <FaBuilding className="text-[#00D4AA] text-xs" />
                      <span className="text-gray-400 text-xs font-medium">{t.company}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation – moves leftwards (right → left) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .marquee {
          animation: marquee 40s linear infinite;
          white-space: nowrap;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;