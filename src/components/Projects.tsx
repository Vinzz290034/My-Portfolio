import { FC } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mockData';
import { useInView } from '../hooks/useInView';

const Projects: FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  return (
    <section id="projects" className="min-h-screen py-20 bg-primary border-t border-pop/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 ${headerInView ? 'scroll-slide-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Featured <span className="text-pop">Projects</span>
            </h2>
            <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
              A showcase of my development work and technical projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Vinzz290034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-pop text-pop hover:bg-pop hover:text-primary font-semibold rounded-lg transition-all duration-300"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`group bg-primary border-2 border-pop/20 rounded-2xl overflow-hidden hover:border-pop/60 transition-all duration-300 hover:transform hover:scale-105 ${
        isInView ? 'scroll-slide-up' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-secondary/5">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-pop transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-secondary/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-pop/10 border border-pop/30 text-pop text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-pop/20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary/70 hover:text-pop transition-colors text-sm"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary/70 hover:text-pop transition-colors text-sm"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="text-secondary/50 text-sm italic">In development</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
