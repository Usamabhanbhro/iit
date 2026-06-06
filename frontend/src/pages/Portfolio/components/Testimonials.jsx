import { Card } from '@heroui/react';
import React, { useState } from 'react'


const testimonials = [
  {
    stars: 5,
    text: "Technify delivered an exceptional solution that streamlined our operations and increased our productivity significantly. Their team is highly professional and skilled.",
    name: "Imran Sheikh",
    role: "CEO, FinTrack",
    avatar: "IS",
    avatarBg: "bg-purple-600",
  },
  {
    stars: 4,
    text: "The team at Technify understood our requirements perfectly and delivered a robust platform that exceeded our expectations. Highly recommended!",
    name: "Sarah Ahmed",
    role: "COO, ShopEase",
    avatar: "SA",
    avatarBg: "bg-teal-600",
  },
  {
    stars: 5,
    text: "Their technical expertise and support are outstanding. They are our go-to technology partner for all our digital transformation needs.",
    name: "Usman Tariq",
    role: "CTO, EstatePro",
    avatar: "UT",
    avatarBg: "bg-orange-600",
  },
];


const Testimonials = () => {

    const [active, setActive] = useState(0);

  return (
    
    <>
    <section className="bg-[#0D1B2A] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#00D4AA] text-xs font-semibold uppercase tracking-widest mb-2">
                What Our Clients Say
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <Card
                  key={i}
                  className={`bg-[#020B18] border transition-all duration-300 ${
                    active === i ? "border-[#00D4AA]/50 shadow-lg shadow-[#00D4AA]/10" : "border-white/10"
                  }`}
                  onClick={() => setActive(i)}
                >
                  <div className="p-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className={j < t.stars ? "text-yellow-400 text-sm" : "text-gray-600 text-sm"}>
                          ★
                        </span>
                      ))}
                    </div>
                    {/* Quote */}
                    <div className="relative mb-6">
                      <span className="absolute -top-2 -left-1 text-[#00D4AA]/20 text-5xl font-serif leading-none">"</span>
                      <p className="text-gray-400 text-sm leading-relaxed relative z-10 pt-2">
                        {t.text}
                      </p>
                    </div>
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                        {t.avatar}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{t.name}</p>
                        <p className="text-gray-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
    
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-[#00D4AA]" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Testimonials