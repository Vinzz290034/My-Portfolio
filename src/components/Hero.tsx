import { FC } from 'react';
import { Download, ArrowDown, Github, Facebook, Mail } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import ParticleBackground from './ParticleBackground';

// Gradient style for "Vince Andrew" — inline so it always renders correctly
const nameGradientStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const Hero: FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg pt-20"
    >
      {/* Interactive dot-grid canvas — dots scatter on mouse hover */}
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Text content ────────────────── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-soft border border-accent-mid rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] tracking-tight mb-6 animate-slide-up delay-100">
              Hi, I'm{' '}
              <span style={nameGradientStyle}>Vince Andrew</span>
            </h1>

            {/* Role */}
            <p className="text-xl md:text-2xl font-medium text-body mb-5 animate-slide-up delay-200">
              {personalInfo.role}
            </p>

            {/* Bio */}
            <p className="text-base md:text-lg text-body leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-slide-up delay-300">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10 animate-slide-up delay-400">
              <a
                href={personalInfo.resumeUrl}
                download
                id="hero-download-resume"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-card-md text-sm"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                id="hero-get-in-touch"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-surface hover:bg-bg border border-border-dark text-ink font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-card-md text-sm"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up delay-500">
              <a
                href="https://github.com/Vinzz290034"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg text-muted hover:text-accent hover:bg-accent-soft transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1G5RiHk6Hs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-lg text-muted hover:text-accent hover:bg-accent-soft transition-all duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg text-muted hover:text-accent hover:bg-accent-soft transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* ── Profile Photo ───────────────── */}
          <div className="flex-shrink-0 animate-fade-in delay-200">
            <div className="relative">
              {/* Decorative ring — indigo + rose gradient border */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/20 via-accent-mid/20 to-rose/15 blur-sm" />
              <div
                className="absolute -inset-1 rounded-full border-2"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #6366F1, #F43F5E) border-box',
                  borderColor: 'transparent',
                }}
              />

              <img
                src="https://res.cloudinary.com/deua2yipj/image/upload/ar_1:1,c_auto,g_auto/2c17c1b2-9043-4c49-95b1-40489152c427.jpg"
                alt="Vince Andrew D. Santoya"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-card-xl border-4 border-surface"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-surface border border-border shadow-card-md rounded-xl px-3 py-2 flex items-center gap-2">
                <span className="text-lg">💻</span>
                <div>
                  <p className="text-xs font-semibold text-ink leading-none">Full Stack</p>
                  <p className="text-xs text-muted leading-none mt-0.5">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects"
            className="flex flex-col items-center gap-1.5 text-muted hover:text-accent transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
