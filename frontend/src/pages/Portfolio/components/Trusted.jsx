import React from 'react';

const Trusted = () => {
  // Logo array for easy duplication
  const logos = [
    { src: "https://crystalpng.com/wp-content/uploads/2025/10/efu-logo.png", alt: "efu logo" },
    { src: "https://crystalpng.com/wp-content/uploads/2024/11/Jazz-5G-Logo.png", alt: "jazz logo" },
    { src: "https://crystalpng.com/wp-content/uploads/2024/10/HBL-logo.png", alt: "HBL logo" },
    { src: "https://mir-s3-cdn-cf.behance.net/projects/404/8f4cb2119667613.Y3JvcCwyNDg5LDE5NDcsNTA1LDI2NA.png", alt: "company logo" },
    { src: "https://championsofchangecoalition.org/wp-content/uploads/2022/12/Logo-TPL-Trakker.png", alt: "TPL Trakker logo" },
    { src: "https://upload.wikimedia.org/wikipedia/en/f/f3/National_Incubation_Center_Logo.png", alt: "NIC Pakistan logo" },
  ];

  // Duplicate logos for seamless looping
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
        Trusted by leading companies
      </p>

      {/* Marquee container */}
      <div className="relative overflow-hidden w-full">
        <div className="marquee inline-flex gap-12 md:gap-20 items-center">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-12 md:h-16 lg:h-20 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 md:max-h-16 lg:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS keyframes animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Trusted;