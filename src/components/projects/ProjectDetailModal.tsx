import React, { useEffect } from 'react';
import { 
  X, 
  Gamepad2, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Terminal
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-darker/80 backdrop-blur-md">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-dark-card border border-dark-border rounded-xl shadow-2xl overflow-y-auto flex flex-col my-auto text-left">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-dark-darker/95 px-6 py-4 border-b border-dark-border flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-panel border border-dark-border flex items-center justify-center text-laser-cyan">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white flex items-center gap-2">
                <span>{project.title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-panel text-slate-300 border border-dark-border">
                  {project.developmentStatus}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                {project.platform} • {project.unityVersion}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-dark-border bg-dark-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Visual Banner */}
          <div className="relative rounded-lg overflow-hidden border border-dark-border bg-dark-darker aspect-[16/9] max-h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-dark-darker/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-laser-cyan border border-dark-border">
              Role: {project.role}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm font-sans text-slate-200 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Main Features */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Key Gameplay Mechanics
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.mainFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-laser-cyan shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Highlight */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-laser-cyan" />
                  Core C# Implementation — {project.codeSnippet.filename}
                </h4>
              </div>
              <div className="rounded-lg bg-dark-darker border border-dark-border p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Technical Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Technical Challenges & Solutions
              </h4>
              <div className="space-y-3">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-dark-panel border border-dark-border space-y-1">
                    <p className="text-xs font-semibold text-slate-200">
                      <span className="text-amber-400 font-mono">Challenge:</span> {item.challenge}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <span className="text-laser-emerald font-mono">Solution:</span> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-dark-panel border border-dark-border text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-dark-darker/95 px-6 py-4 border-t border-dark-border flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 bg-dark-card border border-dark-border hover:border-slate-500 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold text-dark-bg bg-laser-cyan hover:bg-laser-cyanLight transition-colors flex items-center gap-1.5"
              >
                <span>Play Live on Itch.io</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
