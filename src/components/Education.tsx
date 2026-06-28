import { FC } from 'react';
import { GraduationCap, CalendarDays, MapPin, CheckCircle2, Clock, Award, FileText } from 'lucide-react';
import { education, certifications } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const Education: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="education" className="py-24 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerInView ? 'scroll-slide-up' : 'opacity-0'}`}
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Education
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            My academic journey and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <EducationItem key={index} edu={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Graduation Banner */}
        <div className="mt-14">
          <div className="bg-accent-soft border border-accent-mid rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-accent" size={24} />
            </div>
            <div>
              <p className="font-semibold text-ink">
                <span className="text-accent">Graduated</span> with a Bachelor of Science in Information Technology
              </p>
              <p className="text-body text-sm mt-1">
                University of Cebu Main Campus · June 9, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        {certifications && certifications.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                <Award className="text-rose-600" size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ink">Certifications & Achievements</h3>
                <p className="text-xs text-muted">Verified credentials & professional courses</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

interface CertificationCardProps {
  cert: typeof certifications[0];
  index: number;
}

const CertificationCard: FC<CertificationCardProps> = ({ cert, index }) => {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`bg-surface border border-border rounded-2xl p-6 shadow-card hover:shadow-card-md transition-all duration-200 ${
        isInView ? 'scroll-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="font-bold text-ink text-base">{cert.name}</h4>
          <p className="text-sm text-accent font-medium mt-0.5">{cert.issuer}</p>
        </div>
        <span className="text-xs text-muted bg-bg border border-border px-3 py-1 rounded-full font-medium">
          Issued: {cert.date}
        </span>
      </div>
      {cert.description && (
        <p className="text-sm text-body leading-relaxed mt-2 border-t border-border pt-3">
          {cert.description}
        </p>
      )}
      {cert.fileUrl && (
        <div className="mt-4 flex items-center justify-end border-t border-border/50 pt-3">
          <a
            href={cert.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            <FileText size={14} /> View Certificate
          </a>
        </div>
      )}
    </div>
  );
};

interface EducationItemProps {
  edu: typeof education[0];
  index: number;
}

const EducationItem: FC<EducationItemProps> = ({ edu, index }) => {
  const { ref, isInView } = useInView();
  const isActive = edu.status === 'in-progress';

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 ${isInView ? 'scroll-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 relative z-10 mt-1">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-card ${
            isActive
              ? 'bg-accent border-accent text-white'
              : 'bg-surface border-border text-muted'
          }`}
        >
          {isActive
            ? <Clock size={18} />
            : <CheckCircle2 size={18} />
          }
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`flex-1 bg-surface border rounded-2xl p-6 shadow-card hover:shadow-card-md transition-shadow duration-200 mb-2 ${
          isActive ? 'border-accent-mid' : 'border-border'
        }`}
      >
        {/* Status Badge */}
        <div className="mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
              isActive
                ? 'bg-accent-soft text-accent'
                : 'bg-bg text-muted border border-border'
            }`}
          >
            {isActive ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                In Progress
              </>
            ) : (
              <>
                <CheckCircle2 size={11} />
                Completed
              </>
            )}
          </span>
        </div>

        {/* Degree */}
        <h3 className="text-base font-bold text-ink mb-2 leading-snug">
          {edu.degree}
        </h3>

        {/* Institution & Period */}
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5 text-sm text-body">
            <MapPin size={13} className="text-muted" />
            {edu.institution}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted">
            <CalendarDays size={13} />
            {edu.period}
          </span>
        </div>

        {/* Graduation note — shown only for the BSIT degree */}
        {edu.degree.includes('Information Technology') && (
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-sm text-body">
              <strong className="text-accent">Graduated:</strong> June 9, 2026
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
