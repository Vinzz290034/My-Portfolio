import { FC } from 'react';
import { Github, Facebook, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home',      href: '#home'      },
    { label: 'Projects',  href: '#projects'  },
    { label: 'Skills',    href: '#skills'    },
    { label: 'Education', href: '#education' },
    { label: 'Contact',   href: '#contact'   },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-ink mb-2">
              Vince Andrew
            </h3>
            <p className="text-sm text-body leading-relaxed mb-5">
              Full Stack Developer passionate about creating clean, modern web experiences.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Vinzz290034"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent-soft border border-border transition-all duration-200"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.facebook.com/share/1G5RiHk6Hs/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent-soft border border-border transition-all duration-200"
              >
                <Facebook size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent-soft border border-border transition-all duration-200"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-body hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-body hover:text-accent transition-colors duration-200"
              >
                <Mail size={15} className="text-muted flex-shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </a>
              <a
                href="tel:09695345084"
                className="flex items-center gap-2.5 text-sm text-body hover:text-accent transition-colors duration-200"
              >
                <Phone size={15} className="text-muted flex-shrink-0" />
                09695345084
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
