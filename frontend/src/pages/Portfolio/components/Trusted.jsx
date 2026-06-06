import React from 'react'

const trustedLogos = ["HBL", "sysco", "efu LIFE", "Upaisa", "TPL Trakker", "NIC Pakistan", "CARFIRST"];


const Trusted = () => {
  return (

    <>
     <section className="bg-[#020B18] py-12 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-widest mb-8">
              Trusted By Businesses Worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {trustedLogos.map((logo) => (
                <div
                  key={logo}
                  className="text-gray-500 font-bold text-sm md:text-base hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
)
}

export default Trusted