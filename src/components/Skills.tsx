import { FC } from 'react';
import { skills } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const categoryConfig = {
  languages: {
    label: 'Languages',
    emoji: '🔤',
    color: 'bg-violet-50 border-violet-100',
    badge: 'bg-violet-100 text-violet-700',
    bar: 'bg-gradient-to-r from-violet-400 to-indigo-500',
  },
  frameworks: {
    label: 'Frameworks & Libraries',
    emoji: '🧱',
    color: 'bg-blue-50 border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
    bar: 'bg-gradient-to-r from-blue-400 to-cyan-500',
  },
  platforms: {
    label: 'Platforms & Tools',
    emoji: '☁️',
    color: 'bg-emerald-50 border-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
    bar: 'bg-gradient-to-r from-emerald-400 to-teal-500',
  },
  practices: {
    label: 'Practices & Concepts',
    emoji: '📋',
    color: 'bg-amber-50 border-amber-100',
    badge: 'bg-amber-100 text-amber-700',
    bar: 'bg-gradient-to-r from-amber-400 to-orange-500',
  },
} as const;

const softSkills = [
  { label: 'Communication', icon: '💬' },
  { label: 'Leadership',    icon: '🏆' },
  { label: 'Creative Thinking', icon: '💡' },
  { label: 'Adaptability', icon: '🔄' },
];

const categories = ['languages', 'frameworks', 'platforms', 'practices'] as const;

const Skills: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: softRef, isInView: softInView } = useInView();

  return (
    <section id="skills" className="py-24 bg-bg border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerInView ? 'scroll-slide-up' : 'opacity-0'}`}
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Technical Skills
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((category, index) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;
            return (
              <SkillCard
                key={category}
                category={category}
                categorySkills={categorySkills}
                index={index}
              />
            );
          })}
        </div>

        {/* Soft Skills */}
        <div
          ref={softRef}
          className={`mt-6 bg-surface border border-border rounded-2xl p-8 shadow-card ${softInView ? 'scroll-slide-up' : 'opacity-0'}`}
        >
          <h3 className="text-lg font-semibold text-ink mb-6 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map(({ label, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-4 bg-bg rounded-xl border border-border hover:border-accent-mid hover:bg-accent-soft transition-all duration-200 text-center"
              >
                <span className="text-2xl">{icon}</span>
                <p className="text-sm font-medium text-body">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  category: keyof typeof categoryConfig;
  categorySkills: typeof skills;
  index: number;
}

const SkillCard: FC<SkillCardProps> = ({ category, categorySkills, index }) => {
  const { ref, isInView } = useInView();
  const cfg = categoryConfig[category];

  return (
    <div
      ref={ref}
      className={`bg-surface border border-border rounded-2xl p-6 shadow-card hover:shadow-card-md transition-all duration-300 ${
        isInView ? 'scroll-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cfg.color}`}>
          <span className="text-lg">{cfg.emoji}</span>
        </div>
        <div>
          <h3 className="font-semibold text-ink text-base">{cfg.label}</h3>
          <p className="text-xs text-muted">{categorySkills.length} skills</p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {categorySkills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} cfg={cfg} isInView={isInView} />
        ))}
      </div>
    </div>
  );
};

interface SkillBarProps {
  skill: typeof skills[0];
  cfg: typeof categoryConfig[keyof typeof categoryConfig];
  isInView: boolean;
}

const SkillBar: FC<SkillBarProps> = ({ skill, cfg, isInView }) => (
  <div>
    <div className="flex items-center justify-between mb-1.5">
      <span className="text-sm font-medium text-ink">{skill.name}</span>
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.badge}`}>
        {skill.proficiency}%
      </span>
    </div>
    <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
      <div
        className={`h-full rounded-full ${cfg.bar} ${isInView ? 'progress-fill' : ''}`}
        style={{ width: isInView ? `${skill.proficiency}%` : '0%' }}
      />
    </div>
  </div>
);

export default Skills;
