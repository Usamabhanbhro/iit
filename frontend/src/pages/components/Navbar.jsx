import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ React Router's Link
import { Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#020B18] text-white sticky top-0 z-50 border-b border-gray-700 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/icon.png" alt="logo" className="h-12 w-12 object-cover rounded" />
          <div className="leading-tight">
            <p className="font-bold text-2xl text-white">Technify</p>
            <p className="font-bold text-sm text-white">Innovative, Integrate, Implement</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-8 flex-1 justify-center">
          <Link to="/" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Home
          </Link>
          <Link to="/services" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Services
          </Link>
          <Link to="/portfolio" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Portfolio
          </Link>
          <Link to="/about" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            About
          </Link>
          <Link to="/consultation" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/5 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop right side */}
        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+022212345" className="inline-flex items-center gap-2 text-white hover:text-gray-200">
            <i className="fa-solid fa-phone text-white font-sm"></i>
            <span className="text-sm">022212345</span>
          </a>

          <a href="https://wa.me/923219997774" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-gray-200">
            <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
            <span className="text-sm">03219997774</span>
          </a>

          {/* ✅ React Router Link used here */}
          <Link to="/consultation">
            <Button className="inline-flex items-center font-semibold px-4 py-2 rounded-full text-white bg-gradient-to-r from-cyan-400 to-purple-600 shadow-md">
              Get Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${open ? 'block' : 'hidden'}`}>
          <div className="fixed inset-x-0 top-16 z-40 bg-[#020B18] border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 space-y-3">
              <Link to="/" className="block text-white font-medium py-2" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/services" className="block text-white font-medium py-2" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/portfolio" className="block text-white font-medium py-2" onClick={() => setOpen(false)}>Portfolio</Link>
              <Link to="/about" className="block text-white font-medium py-2" onClick={() => setOpen(false)}>About</Link>
              <Link to="/consultation" className="block text-white font-medium py-2" onClick={() => setOpen(false)}>Contact</Link>
              <div className="pt-2 border-t border-gray-700 mt-2">
                <a href="tel:+022212345" className="flex items-center gap-2 text-white py-2">
                  <i className="fa-solid fa-phone"></i> 022212345
                </a>
                <a href="https://wa.me/923219997774" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white py-2">
                  <i className="fa-brands fa-whatsapp text-green-500"></i> 03219997774
                </a>
                <div className="mt-3">
                  <Link to="/consultation" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-semibold py-2 rounded-full">
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;