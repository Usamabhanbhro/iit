import { Link } from "@heroui/react";

const Footer = () => {
  return (
    <footer className="bg-[#020B18] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="font-bold text-2xl text-white mb-4">Technify</p>
            <p className="text-gray-400 text-sm">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link color="foreground" href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link color="foreground" href="/services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link color="foreground" href="/services" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link color="foreground" href="/services" className="hover:text-white transition-colors">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link color="foreground" href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link color="foreground" href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link color="foreground" href="/consultation" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@technify.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-700 my-8" />
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Technify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
