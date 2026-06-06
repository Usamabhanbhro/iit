import { Card } from '@heroui/react';
import React from 'react'



const testimonials = [
  {
    text: "The consultation helped us clarify our product vision and choose the right tech stack. Highly recommended!",
    name: "Muhammad Ali",
    role: "Co-Founder, ShopEase",
    company: "ShopEase",
    avatar: "MA",
    color: "bg-orange-600",
  },
  {
    text: "Technify's team provided exceptional insights and a clear roadmap for our digital transformation.",
    name: "Fatima Noor",
    role: "CEO, EduLearn",
    company: "EduLearn",
    avatar: "FN",
    color: "bg-teal-600",
  },
  {
    text: "The strategy session was impactful and saved us months of trial and error. Great experience!",
    name: "Omar Raza",
    role: "CTO, FinTrack",
    company: "FinTrack",
    avatar: "OR",
    color: "bg-purple-600",
  },
];


const Testimonials = () => {
  return (
    
    <>
     <section className="bg-[#0D1B2A] py-16 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl font-bold text-center mb-10">
              What Our Clients Say
            </h2>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="bg-[#020B18] border border-white/10 hover:border-[#00D4AA]/30 transition-all duration-200"
                >
                  <div className="p-6">
                    {/* Quote mark */}
                    <div className="w-8 h-8 rounded-lg bg-[#00D4AA]/10 flex items-center justify-center mb-4">
                      <span className="text-[#00D4AA] text-lg font-serif leading-none">"</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.text}</p>
    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {t.avatar}
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">{t.name}</p>
                          <p className="text-gray-500 text-xs">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#0D1B2A] px-2 py-1 rounded-lg">
                        <span className="text-xs">🏢</span>
                        <span className="text-gray-400 text-xs font-medium">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Testimonials