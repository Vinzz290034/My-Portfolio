import { useState, useEffect, FC } from 'react';
import { Menu, X } from 'lucide-react';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home',      href: '#home'      },
    { label: 'Projects',  href: '#projects'  },
    { label: 'Skills',    href: '#skills'    },
    { label: 'Education', href: '#education' },
    { label: 'Contact',   href: '#contact'   },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="group flex items-center gap-3 animate-fade-in"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:shadow-card-md group-hover:scale-105 transition-all duration-300 bg-surface flex items-center justify-center border border-border">
              <img src="/Vinzz.png" alt="Vinzz Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-ink tracking-tight group-hover:text-accent transition-colors duration-200">
                Vince Andrew Santoya
              </span>
              <span className="text-xs text-muted font-medium tracking-wide">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 animate-fade-in delay-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-body hover:text-accent hover:bg-accent-soft transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="ml-3 px-5 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-card-md"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-body hover:text-accent hover:bg-accent-soft transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-4 animate-slide-down">
            <div className="bg-surface border border-border rounded-xl shadow-card-lg p-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-body hover:text-accent hover:bg-accent-soft transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-border">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="block px-4 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg text-center transition-all duration-200"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
