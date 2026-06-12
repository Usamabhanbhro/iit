import React from 'react';

const results = [
  { val: "70%", desc: "Reduction in manual operations", client: "MediCare+ HMS" },
  { val: "2X", desc: "Increase in online sales", client: "ShopEase" },
  { val: "35%", desc: "Improvement in customer retention", client: "Saloniq SaaS" },
  { val: "60%", desc: "Faster decision making with automation", client: "FinTrack" },
];

const CaseStudies = () => {
  return (
    <section className="py-20 px-6 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left – text & results */}
        <div>
          <p className="text-[#00D4AA] text-xs font-bold uppercase tracking-widest mb-3">Case Studies & Results</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Delivering Impact That Matters
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Real numbers from real clients who transformed their business with our technology solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 border text-white/90 rounded-lg p-5 hover:bg-white/10 transition">
                <div className="text-4xl mb-2">{r.val}</div>
                <div className="text-sm mb-2">{r.desc}</div>
                <div className="text-xs font-bold">→ {r.client}</div>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-white/5 border border-white/15 text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
            View All Case Studies →
          </button>
        </div>

        {/* Right – image card with proper sizing */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7654119/pexels-photo-7654119.jpeg"
            alt="Impact across industries"
            className="w-full h-auto max-h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;