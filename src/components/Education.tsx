import { FC } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const Education: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  return (
    <section id="education" className="min-h-screen py-20 bg-primary border-t border-pop/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 ${headerInView ? 'scroll-slide-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Education & <span className="text-pop">Certifications</span>
            </h2>
            <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
              My academic journey and professional development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-pop/30 transform md:-translate-x-1/2"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <EducationItem key={index} edu={edu} index={index} />
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-pop/10 border border-pop/30 rounded-2xl px-8 py-6">
              <p className="text-secondary/80">
                <span className="text-pop font-semibold">Currently pursuing</span> Bachelor of Science in Information Technology
              </p>
              <p className="text-secondary/70 text-sm mt-2">
                University of Cebu Main Campus • 4th Year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface EducationItemProps {
  edu: typeof education[0];
  index: number;
}

const EducationItem: FC<EducationItemProps> = ({ edu, index }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${isInView ? 'scroll-slide-up' : ''}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-pop rounded-full transform md:-translate-x-1/2 border-4 border-primary"></div>

      {/* Content Card */}
      <div
        className={`flex-1 ml-16 md:ml-0 ${
          index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
        }`}
      >
        <div className="bg-primary border-2 border-pop/20 rounded-2xl p-6 hover:border-pop/40 transition-all duration-300">
          {/* Status Badge */}
          <div className="mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                edu.status === 'in-progress'
                  ? 'bg-pop/20 text-pop border border-pop/40'
                  : 'bg-secondary/10 text-secondary/70 border border-secondary/20'
              }`}
            >
              {edu.status === 'in-progress' ? 'Currently Pursuing' : 'Completed'}
            </span>
          </div>

          {/* Degree */}
          <div className="flex items-start gap-3 mb-3">
            <GraduationCap className="text-pop flex-shrink-0 mt-1" size={24} />
            <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
          </div>

          {/* Institution */}
          <div className="flex items-center gap-2 mb-2 text-secondary/80">
            <MapPin size={18} className="flex-shrink-0" />
            <p className="font-medium">{edu.institution}</p>
          </div>

          {/* Period */}
          <div className="flex items-center gap-2 text-pop">
            <Calendar size={18} className="flex-shrink-0" />
            <p className="text-sm font-medium">{edu.period}</p>
          </div>

          {/* Current Status Highlight */}
          {edu.status === 'in-progress' && (
            <div className="mt-4 pt-4 border-t border-pop/20">
              <p className="text-secondary/70 text-sm">
                <strong className="text-pop">Current:</strong> 4th Year Student
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1"></div>
    </div>
  );
};

export default Education;
