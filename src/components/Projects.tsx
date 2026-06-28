import { FC, useState } from 'react';
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const Projects: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="projects" className="py-24 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 ${headerInView ? 'scroll-slide-up' : 'opacity-0'}`}
        >
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/Vinzz290034"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-github"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            View all on GitHub
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const VISIBLE_TAGS = 3;

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, isInView } = useInView();
  const [techExpanded, setTechExpanded] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

  const hasMoreTags = project.techStack.length > VISIBLE_TAGS;
  const visibleTags = techExpanded ? project.techStack : project.techStack.slice(0, VISIBLE_TAGS);

  return (
    <div
      ref={ref}
      className={`group bg-surface border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${
        isInView ? 'scroll-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-bg flex-shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />

        {/* Status pill */}
        {!project.liveUrl && !project.githubUrl && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 bg-surface/90 backdrop-blur-sm text-muted text-xs font-medium rounded-full border border-border">
              In development
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTags.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 bg-accent-soft text-accent text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {/* "+N" toggle — shows remaining count or collapses */}
          {hasMoreTags && (
            <button
              onClick={() => setTechExpanded((v) => !v)}
              className="px-2.5 py-0.5 bg-bg text-muted hover:bg-accent-soft hover:text-accent text-xs font-medium rounded-full border border-border transition-colors duration-150"
            >
              {techExpanded
                ? '− less'
                : `+${project.techStack.length - VISIBLE_TAGS} more`}
            </button>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description — clamped with "See more / See less" */}
        <div className="mb-5 flex-1">
          <p className={`text-body text-sm leading-relaxed ${descExpanded ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>
          <button
            onClick={() => setDescExpanded((v) => !v)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover mt-1.5 transition-colors"
          >
            {descExpanded ? (
              <><ChevronUp size={13} /> See less</>
            ) : (
              <><ChevronDown size={13} /> See more</>
            )}
          </button>
        </div>


        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-accent transition-colors duration-200"
            >
              <Github size={15} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              Visit <ArrowRight size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
