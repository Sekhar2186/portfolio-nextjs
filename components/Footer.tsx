
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
        {/* LEFT: Logo */}
        <div className="flex justify-center md:justify-start">
          <Link to="/" className="flex items-center">
            <span className="text-gold font-bold text-xl">AI</span>
            <span className="text-white font-normal text-xl">with Surya</span>
          </Link>
        </div>

        {/* CENTER: Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Courses', path: '/projects' },
            { name: 'About', path: '/about' },
            { name: 'YouTube', path: '#' },
            { name: 'Contact', path: '/contact' },
            { name: 'Privacy', path: '#' },
            { name: 'Terms', path: '#' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: Copyright */}
        <div className="text-center md:text-right text-white/40 text-sm">
          © 2025 AI with Surya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
