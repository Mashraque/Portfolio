import React from 'react';
import { 
  Gamepad2, 
  ArrowUpRight, 
  Github, 
  ExternalLink,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="laser-card rounded-xl overflow-hidden flex flex-col justify-between text-left group">
      
      {/* Thumbnail Header */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-dark-darker border-b border-dark-border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-dark-darker/90 text-laser-cyan border border-laser-cyan/30 backdrop-blur-md">
            {project.category}
          </span>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-darker/90 text-slate-300 border border-dark-border backdrop-blur-md">
            {project.developmentStatus}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title & Tagline */}
          <h3 className="text-base font-display font-bold text-white group-hover:text-laser-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-sans text-slate-400 mt-1 leading-relaxed">
            {project.tagline}
          </p>

          {/* Key Features List */}
          <div className="mt-3 space-y-1.5 text-xs text-slate-300">
            {project.mainFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-laser-cyan font-mono text-[11px]">›</span>
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-panel border border-dark-border text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-panel text-slate-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="pt-3 border-t border-dark-border flex items-center justify-between gap-2">
            <button
              onClick={() => onSelect(project)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-dark-panel border border-dark-border hover:border-laser-cyan/50 hover:text-white transition-all flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5 text-laser-cyan" />
              <span>Details & Code</span>
            </button>

            <div className="flex items-center gap-2">
              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-dark-bg bg-laser-cyan hover:bg-laser-cyanLight transition-colors flex items-center gap-1"
                >
                  <span>Play</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-panel transition-colors"
                  title="View GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
