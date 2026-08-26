import React from 'react';
import { 
  Gamepad2, 
  ArrowUpRight, 
  Github, 
  Sparkles, 
  Cpu, 
  ExternalLink,
  Layers
} from 'lucide-react';
import { Project } from '../../types';
import { soundFx } from '../../utils/audio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="hud-panel rounded-2xl border border-cyber-border hover:border-cyber-primary/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group text-left relative bg-cyber-card/70 hover:shadow-2xl">
      {/* Top Banner Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-cyber-darker">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyber-darker/90 text-cyber-primary border border-cyber-primary/40 backdrop-blur-md">
            {project.category}
          </span>

          {project.isPlaceholder ? (
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
              CONCEPT // PLACEHOLDER
            </span>
          ) : (
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
              RESUME VERIFIED
            </span>
          )}
        </div>

        {/* Platform Tag */}
        <div className="absolute bottom-2 left-3 text-[10px] font-mono text-cyber-textMuted bg-cyber-darker/80 px-2 py-0.5 rounded border border-cyber-border/60">
          {project.platform}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title & Tagline */}
          <h3 className="text-lg font-display font-bold text-white group-hover:text-cyber-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-sans text-cyber-textMuted mt-1 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Key Features Quick List */}
          <div className="mt-3 space-y-1.5 text-xs text-cyber-textLight">
            {project.mainFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-cyber-primary font-mono text-[11px]">›</span>
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-panel border border-cyber-border text-cyber-textLight"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyber-panel text-cyber-textMuted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Card Action Buttons */}
          <div className="pt-3 border-t border-cyber-border/60 flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playModalOpen();
                onSelect(project);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-cyber-darker bg-cyber-primary hover:bg-cyber-primaryHover shadow-cyber-neon transition-all"
            >
              <span>INSPECT SYSTEMS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={project.githubUrl || "https://github.com/Mashraque/Portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="p-2.5 rounded-xl border border-cyber-border bg-cyber-panel text-cyber-textMuted hover:text-white hover:border-cyber-primary transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
