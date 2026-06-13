import React from "react";

import { FaPhone, FaWhatsapp, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0B1120] border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid – responsive: 1 column on mobile, 2 on tablet, 5 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center">
                <img src="icon.png" alt="" />
              </div>
              <div>
                <div className="text-white text-lg font-extrabold">Technify</div>
                <div className="text-[#00D4AA] text-[9px] tracking-wider uppercase">Innovate. Integrate. Implement.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] mb-5">
              We provide innovative software development and expert consulting services to help businesses grow, transform, and succeed.
            </p>
            <div className="flex gap-2">
              {["f", "in", "tw", "yt"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 text-xs font-bold cursor-pointer hover:bg-white/10 hover:text-white transition"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}


          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            {[
              { name: "Home", path: "/" },
              { name: "Consulting", path: "/consultation" },
              { name: "Services", path: "/services" },
              { name: "Industries", path: "#" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Technologies", path: "#" },
              { name: "About Us", path: "/about" },
              { name: "Blog", path: "#" },
              { name: "Contact", path: "/consultation" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-gray-400 text-sm mb-2 hover:text-[#00D4AA] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Our Services</h4>
            {[
              "Technology Consulting", "Custom Software", "Mobile App Development",
              "Web & SaaS Development", "Cloud Solutions", "AI & Automation",
              "Maintenance & Support",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="block text-gray-400 text-sm mb-2 hover:text-[#00D4AA] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Resources</h4>
            {[
              "Case Studies", "Blog", "Whitepapers", "Documentation",
              "FAQ", "Privacy Policy", "Terms & Conditions",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="block text-gray-400 text-sm mb-2 hover:text-[#00D4AA] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Contact & Message */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact Info</h4>

            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaPhone className="text-[#00D4AA] text-xs" />
                <span>0222678253</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaWhatsapp className="text-green-500 text-xs" />
                <span>03420372875 (WhatsApp 24/7)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaEnvelope className="text-[#00D4AA] text-xs" />
                <span>info@technifyltd.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaGlobe className="text-[#00D4AA] text-xs" />
                <span>www.technifyltd.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaMapMarkerAlt className="text-[#00D4AA] text-xs" />
                <span>Opp: Lumhs Laboratory, Near Ali Palace, Main Road Qasimabd, Hyderabad, Pakistan</span>
              </div>
            </div>

            <h4 className="text-white font-bold text-sm mb-3">Send Us a Message</h4>
            <div className="space-y-2">
              {["Email Address", "Phone Number", "Service Required"].map((p) => (
                <input
                  key={p}
                  type="text"
                  placeholder={p}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#00D4AA] transition"
                />
              ))}
              <textarea
                placeholder="Tell us about your project..."
                rows="3"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs resize-vertical outline-none focus:border-[#00D4AA] transition"
              />
              <button className="w-full bg-gradient-to-r from-[#00D4AA] to-[#0099ff] text-white font-bold text-sm py-2.5 rounded-lg hover:brightness-105 transition">
                Send Message →
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">© 2026 Technify. All Rights Reserved.</p>
          <div className="flex gap-5">
            {["Terms", "Privacy", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-gray-500 text-xs hover:text-[#00D4AA] transition">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;