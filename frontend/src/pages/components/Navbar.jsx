import { Button, Link } from "@heroui/react";

const Navbar = () => {
  return (
    <nav className="bg-[#020B18] text-white sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img src="/icon.jpeg" alt="logo" className="h-12 w-12 object-cover rounded" />

          <div className="leading-tight">
            <p className="font-bold text-2xl text-white">Technify</p>
            <p className="font-bold text-sm text-white">Innovative, Integrate, Implement</p>
          </div>

        </div>

        {/* Center Links */}
        <div className="hidden sm:flex gap-8 flex-1 justify-center">
          <Link href="/" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Home
          </Link>
          <Link href="/services" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Services
          </Link>
          <Link href="/portfolio" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Portfolio
          </Link>
          <Link href="/about" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            About
          </Link>
          <Link href="/consultation" className="font-medium text-white hover:text-gray-200 hover:underline hover:decoration-teal-400 underline-offset-4 transition">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a href="tel:+022212345" className="hidden sm:inline-flex items-center gap-2 text-white hover:text-gray-200">
           <i className="fa-solid fa-phone text-white font-sm"></i>
            <span className="text-sm">022212345</span>
          </a>

          <a href="https://wa.me/923219997774" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 text-white hover:text-gray-200">
          <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
            <span className="text-sm">03219997774</span>
          </a>

          <Button
            as={Link}
            href="/consultation"
            className="hidden sm:inline-flex items-center font-semibold px-4 py-2 rounded-full text-white bg-gradient-to-r from-cyan-400 to-purple-600 shadow-md"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
