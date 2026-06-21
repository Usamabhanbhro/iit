import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebookF />, label: 'f', url: "https://www.facebook.com/profile.php?id=100093519941812" },
  { icon: <FaLinkedinIn />, label: 'in', url: "https://www.linkedin.com/company/technifyltd" },
  { icon: <FaTwitter />, label: 'tw', url: "#" },   // replace with actual Twitter URL if available
  { icon: <FaYoutube />, label: 'yt', url: "#" },   // replace with actual YouTube URL if available
];

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
                <img src="/icon.png" alt="Technify logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white text-lg font-extrabold">Technify</div>
                <div className="text-[#00D4AA] text-[9px] tracking-wider uppercase">Innovate. Integrate. Implement.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] mb-5">
              We provide innovative software development and expert consulting services to help businesses grow, transform, and succeed.
            </p>

            {/* Social icons with links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition"
                >
                  {social.icon}
                </a>
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
              { name: "Portfolio", path: "/portfolio" },
              { name: "About Us", path: "/about" },
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

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Our Services</h4>
            {[
              "Technology Consulting",
              "Custom Software",
              "Mobile App Development",
              "Web & SaaS Development",
              "Cloud Solutions",
              "AI & Automation",
              "Maintenance & Support",
            ].map((service) => (
              <Link
                key={service}
                to="/services"
                className="block text-gray-400 text-sm mb-2 hover:text-[#00D4AA] transition-colors"
              >
                {service}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Resources</h4>
            {[
              "Case Studies",
              "Blog",
              "Whitepapers",
              "Documentation",
              "FAQ",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((resource) => (
              <a
                key={resource}
                href="#"
                className="block text-gray-400 text-sm mb-2 hover:text-[#00D4AA] transition-colors"
              >
                {resource}
              </a>
            ))}
          </div>

          {/* Contact Info + Quick contact form (optional) */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact Info</h4>
            <div className="space-y-2 mb-5">
            
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaEnvelope className="text-[#00D4AA] text-xs" />
                <span>info@technifyltd.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaGlobe className="text-[#00D4AA] text-xs" />
                <span>www.technifyltd.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-[#00D4AA] text-xs" />
                <span>Opp: Lumhs Laboratory, Near Ali Palace, Main Road Qasimabad, Hyderabad, Pakistan</span>
              </div>
            </div>

            {/* Optional: Quick message form – you can add it back if needed */}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">© 2026 Technify. All Rights Reserved.</p>
          <div className="flex gap-5">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-gray-500 text-xs hover:text-[#00D4AA] transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;