import React from 'react';

const testimonials = [
  {
    stars: 5,
    text: "Technify transformed our business operations with a powerful SaaS solution. Their consulting and development team is exceptional, responsive, and truly understands our needs.",
    name: "Dr. Ali Khan",
    role: "CEO, MediCare+",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  },
  {
    stars: 5,
    text: "Their consulting services helped us choose the right technology stack and build a scalable platform. The results exceeded our expectations.",
    name: "Sarah Ahmed",
    role: "COO, ShopEase",
    image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  },
  {
    stars: 5,
    text: "Technify is more than a service provider; they are our technology partner. Their expertise in cloud and automation helped us save time and costs.",
    name: "Usman Tariq",
    role: "CTO, FinTrack",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  },
];

// Duplicate testimonials for seamless looping
const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-black text-3xl md:text-4xl font-bold">
            Success Stories from Our Valued Clients
          </h2>
        </div>

        {/* Horizontal marquee (right → left) */}
        <div className="relative overflow-hidden w-full">
          <div className="marquee inline-flex gap-6">
            {marqueeTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-80 md:w-96 flex-shrink-0"
              >
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className={j < t.stars ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Quote */}
                  <div className="relative mb-6">
                    <span className="absolute -top-1 -left-1 text-[#00D4AA]/20 text-4xl font-serif leading-none">"</span>
                    <p className="text-gray-700 text-sm leading-relaxed pt-3 text-wrap">{t.text}</p>
                  </div>
                  {/* Author with image */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/80x80?text=User';
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-black text-sm font-semibold">{t.name}</p>
                      <p className="text-gray-600 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation – right to left (moves leftwards) */}
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