import { FC } from 'react';
import { Download } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Hero: FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden pt-24 md:pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pop rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pop rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-pop rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://res.cloudinary.com/deua2yipj/image/upload/ar_1:1,c_auto,g_auto/2c17c1b2-9043-4c49-95b1-40489152c427.jpg"
                alt="Vince Andrew D. Santoya"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-pop shadow-2xl shadow-pop/50"
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-6 animate-slide-up delay-100">
            <span className="inline-block px-4 py-2 bg-pop/10 border border-pop/30 rounded-full text-pop text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 tracking-tight animate-slide-up delay-200">
            Hi, I'm <span className="text-pop">Vince Andrew</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary/80 mb-8 animate-slide-up delay-300">
            {personalInfo.role}
          </h2>

          {/* Bio */}
          <p className="text-lg md:text-xl text-secondary/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-400">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-500">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-pop hover:bg-pop-dark text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pop/50"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-pop text-pop hover:bg-pop hover:text-primary font-semibold rounded-lg transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pop rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-pop rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
