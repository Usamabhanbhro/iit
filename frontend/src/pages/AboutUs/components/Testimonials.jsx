import { Card } from '@heroui/react';
import React, { useState } from 'react'

const testimonials = [
  {
    stars: 5,
    text: "Technify transformed our business operations with a powerful SaaS solution. Their consulting and development team is exceptional, responsive, and truly understands our needs.",
    name: "Dr. Ali Khan",
    role: "CEO, MediCare+",
    avatar: "AK",
    color: "bg-teal-600",
  },
  {
    stars: 5,
    text: "Their consulting services helped us choose the right technology stack and build a scalable platform. The results exceeded our expectations.",
    name: "Sarah Ahmed",
    role: "COO, ShopEase",
    avatar: "SA",
    color: "bg-orange-600",
  },
  {
    stars: 5,
    text: "Technify is more than a service provider; they are our technology partner. Their expertise in cloud and automation helped us save time and costs.",
    name: "Usman Tariq",
    role: "CTO, FinTrack",
    avatar: "UT",
    color: "bg-purple-600",
  },
];


const Testimonials = () => {
      const [active, setActive] = useState(0);

  return (
    <>
    <section className="bg-white py-20 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-black text-3xl md:text-4xl font-bold">
            Success Stories from Our Valued Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              onClick={() => setActive(i)}
              className={`cursor-pointer bg-white transform transition-all duration-200 ${
                active === i
                  ? "border-black/50 shadow-lg shadow-[#00D4AA]/10 -translate-y-1"
                  : "border-black/20 hover:shadow-lg hover:-translate-y-1 hover:border-black/40"
              }`}
            >
              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={j < t.stars ? "text-yellow-400" : "text-gray-600"}>
                      ★
                    </span>
                  ))}
                </div>
                {/* Quote */}
                <div className="relative mb-6">
                  <span className="absolute -top-1 -left-1 text-[#00D4AA]/20 text-4xl font-serif leading-none">"</span>
                  <p className="text-gray-700 text-sm leading-relaxed pt-3">{t.text}</p>
                </div>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-black text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-600 text-xs">{t.role}</p>
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