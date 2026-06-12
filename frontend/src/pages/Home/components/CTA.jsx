import React from 'react'

const CTA = () => {
  return (
    <>
    <section className="py-16 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-72 h-72 bg-white/3 rounded-full" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/75 text-base">
            Let's build something amazing together. Schedule a free consultation with our experts.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <button className="bg-white text-indigo-600 border-none rounded-lg px-6 py-3 text-sm font-bold cursor-pointer flex items-center gap-2 hover:brightness-95 transition">
            Book Free Consultation →
          </button>
          <button className="bg-[#25D366] text-white border-none rounded-lg px-5 py-3 text-sm font-bold cursor-pointer flex items-center gap-2 hover:brightness-110 transition">
             Chat on WhatsApp
          </button>
          <button className="bg-purple-600 text-white border border-white-100 rounded-lg px-5 py-3 text-sm font-bold cursor-pointer flex items-center gap-2 hover:brightness-110 transition">
             Call Us Now
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default CTA