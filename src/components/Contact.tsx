import { FC } from 'react';
import { Mail, Phone, MapPin, Download, Github, Facebook } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const Contact: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  return (
    <section id="contact" className="min-h-screen py-20 bg-primary border-t border-pop/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 ${headerInView ? 'scroll-slide-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Get in <span className="text-pop">Touch</span>
            </h2>
            <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just to say hi!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ContactCard type="email" />
            <ContactCard type="phone" />
            <ContactCard type="location" />
            <ContactCard type="resume" />
          </div>

          {/* Social Links */}
          <div className="bg-primary border-2 border-pop/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-secondary mb-6 text-center">
              Connect with me
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/Vinzz290034"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-pop/10 p-4 rounded-full hover:bg-pop/20 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="text-pop" size={28} />
              </a>
              <a
                href="https://www.facebook.com/share/1G5RiHk6Hs/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-pop/10 p-4 rounded-full hover:bg-pop/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="text-pop" size={28} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group bg-pop/10 p-4 rounded-full hover:bg-pop/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="text-pop" size={28} />
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-secondary/60 text-sm">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

type ContactCardType = 'email' | 'phone' | 'location' | 'resume';

interface ContactCardProps {
  type: ContactCardType;
}

const ContactCard: FC<ContactCardProps> = ({ type }) => {
  const divRef = useInView();
  const aRef = useInView();

  const renderCard = () => {
    switch (type) {
      case 'email':
        return (
          <a
            ref={aRef.ref as any}
            href={`mailto:${personalInfo.email}`}
            className={`group bg-primary border-2 border-pop/20 rounded-2xl p-8 hover:border-pop hover:bg-pop/5 transition-all duration-300 ${
              aRef.isInView ? 'scroll-slide-up' : ''
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pop/10 p-4 rounded-full group-hover:bg-pop/20 transition-colors">
                <Mail className="text-pop" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary">Email</h3>
                <p className="text-secondary/70 text-sm">Send me an email</p>
              </div>
            </div>
            <p className="text-pop font-medium break-all">{personalInfo.email}</p>
          </a>
        );
      case 'phone':
        return (
          <a
            ref={aRef.ref as any}
            href="tel:09695345084"
            className={`group bg-primary border-2 border-pop/20 rounded-2xl p-8 hover:border-pop hover:bg-pop/5 transition-all duration-300 ${
              aRef.isInView ? 'scroll-slide-up' : ''
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pop/10 p-4 rounded-full group-hover:bg-pop/20 transition-colors">
                <Phone className="text-pop" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary">Phone</h3>
                <p className="text-secondary/70 text-sm">Give me a call</p>
              </div>
            </div>
            <p className="text-pop font-medium">09695345084</p>
          </a>
        );
      case 'location':
        return (
          <div
            ref={divRef.ref}
            className={`bg-primary border-2 border-pop/20 rounded-2xl p-8 ${divRef.isInView ? 'scroll-slide-up' : ''}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pop/10 p-4 rounded-full">
                <MapPin className="text-pop" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary">Location</h3>
                <p className="text-secondary/70 text-sm">Based in</p>
              </div>
            </div>
            <p className="text-secondary/80 font-medium">{personalInfo.location}</p>
          </div>
        );
      case 'resume':
        return (
          <a
            ref={aRef.ref as any}
            href={personalInfo.resumeUrl}
            download
            className={`group bg-gradient-to-br from-pop/20 to-pop/10 border-2 border-pop/40 rounded-2xl p-8 hover:border-pop hover:from-pop/30 hover:to-pop/20 transition-all duration-300 ${
              aRef.isInView ? 'scroll-slide-up' : ''
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pop/20 p-4 rounded-full group-hover:bg-pop/30 transition-colors">
                <Download className="text-pop" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary">Download CV</h3>
                <p className="text-secondary/70 text-sm">Get my resume</p>
              </div>
            </div>
            <p className="text-pop font-medium">CURRICULUM VITAE.pdf</p>
          </a>
        );
    }
  };

  return renderCard();
};

export default Contact;
