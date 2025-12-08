import { FC } from 'react';
import { Code, Database, Wrench, Smartphone } from 'lucide-react';
import { skills } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const Skills: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: softSkillsRef, isInView: softSkillsInView } = useInView();
  const categoryIcons = {
    frontend: <Code className="text-pop" size={24} />,
    backend: <Database className="text-pop" size={24} />,
    database: <Database className="text-pop" size={24} />,
    tools: <Wrench className="text-pop" size={24} />,
  };

  const categoryNames = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database',
    tools: 'Tools & Other Skills',
  };

  const categories = ['frontend', 'backend', 'database', 'tools'] as const;

  return (
    <section id="skills" className="min-h-screen py-20 bg-primary border-t border-pop/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 ${headerInView ? 'scroll-slide-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Technical <span className="text-pop">Skills</span>
            </h2>
            <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to build modern applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <SkillCard key={category} category={category} categorySkills={categorySkills} categoryNames={categoryNames} categoryIcons={categoryIcons} />
              );
            })}
          </div>

          {/* Soft Skills */}
          <div ref={softSkillsRef} className={`mt-12 bg-primary border-2 border-pop/20 rounded-2xl p-8 ${softSkillsInView ? 'scroll-slide-up' : ''}`}>
            <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center gap-3">
              <Smartphone className="text-pop" size={24} />
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Communication Skills',
                'Leadership Experience',
                'Creative & Innovative Thinking',
                'Learning/Adaptability Skills',
              ].map((softSkill) => (
                <div
                  key={softSkill}
                  className="bg-pop/10 border border-pop/30 rounded-lg p-4 text-center hover:bg-pop/20 transition-colors"
                >
                  <p className="text-secondary font-medium">{softSkill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

interface SkillCardProps {
  category: 'frontend' | 'backend' | 'database' | 'tools';
  categorySkills: typeof skills;
  categoryNames: Record<'frontend' | 'backend' | 'database' | 'tools', string>;
  categoryIcons: Record<'frontend' | 'backend' | 'database' | 'tools', React.ReactNode>;
}

const SkillCard: FC<SkillCardProps> = ({ category, categorySkills, categoryNames, categoryIcons }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-primary border-2 border-pop/20 rounded-2xl p-6 hover:border-pop/40 transition-all duration-300 ${
        isInView ? 'scroll-slide-up' : ''
      }`}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        {categoryIcons[category]}
        <h3 className="text-xl font-semibold text-secondary">
          {categoryNames[category]}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {categorySkills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-secondary font-medium">{skill.name}</span>
              <span className="text-pop text-sm">{skill.proficiency}%</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-secondary/10 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-pop to-pop-dark h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
