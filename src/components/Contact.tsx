import { FC } from 'react';
import { Mail, Phone, MapPin, Download, Github, Facebook } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const Contact: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView();
  const { ref: socialRef, isInView: socialInView } = useInView();

  return (
    <section id="contact" className="py-24 bg-bg border-t border-border">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerInView ? 'scroll-slide-up' : 'opacity-0'}`}
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Get in Touch
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </div>

        {/* Contact Cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ${cardsInView ? 'scroll-slide-up' : 'opacity-0'}`}
        >
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            id="contact-email"
            className="group flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl shadow-card hover:shadow-card-md hover:border-accent-mid transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
              <Mail size={20} className="text-accent group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-sm font-semibold text-ink break-all">{personalInfo.email}</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:09695345084"
            id="contact-phone"
            className="group flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl shadow-card hover:shadow-card-md hover:border-accent-mid transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-200">
              <Phone size={20} className="text-accent group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-wider mb-0.5">Phone</p>
              <p className="text-sm font-semibold text-ink">09695345084</p>
            </div>
          </a>

          {/* Location */}
          <div
            id="contact-location"
            className="flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl shadow-card"
          >
            <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-wider mb-0.5">Location</p>
              <p className="text-sm font-semibold text-ink">{personalInfo.location}</p>
            </div>
          </div>

          {/* Resume */}
          <a
            href={personalInfo.resumeUrl}
            download
            id="contact-download-cv"
            className="group flex items-center gap-4 p-5 bg-accent hover:bg-accent-hover text-white rounded-2xl shadow-card hover:shadow-card-md transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Download size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-0.5">Download</p>
              <p className="text-sm font-semibold">Curriculum Vitae</p>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div
          ref={socialRef}
          className={`bg-surface border border-border rounded-2xl p-8 shadow-card text-center ${socialInView ? 'scroll-slide-up' : 'opacity-0'}`}
        >
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-6">
            Connect with me
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href="https://github.com/Vinzz290034"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl border border-border text-body hover:text-accent hover:border-accent-mid hover:bg-accent-soft font-medium text-sm transition-all duration-200"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.facebook.com/share/1G5RiHk6Hs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl border border-border text-body hover:text-accent hover:border-accent-mid hover:bg-accent-soft font-medium text-sm transition-all duration-200"
            >
              <Facebook size={18} />
              Facebook
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl border border-border text-body hover:text-accent hover:border-accent-mid hover:bg-accent-soft font-medium text-sm transition-all duration-200"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted text-sm mt-8">
          Open to new opportunities and collaborations ✨
        </p>
      </div>
    </section>
  );
};

export default Contact;
