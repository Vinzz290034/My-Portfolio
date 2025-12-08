import { FC } from 'react';
import { Github, Facebook, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t-2 border-pop/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-pop mb-4">
              {personalInfo.name.split(' ')[0]}
            </h3>
            <p className="text-secondary/70 text-sm leading-relaxed">
              A Full Stack Developer passionate about creating modern web applications and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-pop mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-secondary/70 hover:text-pop transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-pop mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-secondary/70 hover:text-pop transition-colors text-sm"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href="tel:09695345084"
                className="flex items-center gap-2 text-secondary/70 hover:text-pop transition-colors text-sm"
              >
                <Phone size={16} />
                <span>09695345084</span>
              </a>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/Vinzz290034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/70 hover:text-pop transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/1G5RiHk6Hs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/70 hover:text-pop transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-secondary/70 hover:text-pop transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pop/20">
          <p className="text-secondary/60 text-sm text-center">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
