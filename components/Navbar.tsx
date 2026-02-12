
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[72px] z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gold-subtle">
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-gold font-bold text-xl transition-all group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">Sekhar</span>
          </Link>

          {/* CENTER: Navigation Links (Home, About, Projects, Contact) */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${isActive(link.path) ? 'text-gold' : 'text-background-dark/80 dark:text-white/80'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT: Search & Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all flex items-center justify-center bg-surface-light dark:bg-surface-dark"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all flex items-center justify-center bg-surface-light dark:bg-surface-dark"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gold"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>

          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-[72px] left-0 right-0 bg-background-light dark:bg-background-dark border-b border-gold-subtle px-6 py-6 flex flex-col gap-6 z-40">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-gold ${isActive(link.path)
                    ? 'text-gold'
                    : 'text-background-dark dark:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

        </div>
      </nav>
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
