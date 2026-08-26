import React, { useEffect } from 'react';
import { 
  X, 
  Gamepad2, 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Github, 
  Download, 
  Video,
  Terminal,
  Sparkles
} from 'lucide-react';
import { Project } from '../../types';
import { soundFx } from '../../utils/audio';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-cyber-darker/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-cyber-card border border-cyber-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-auto hud-border">
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 bg-cyber-darker/95 px-6 py-4 border-b border-cyber-border flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyber-primary/20 border border-cyber-primary/40 flex items-center justify-center text-cyber-primary">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                <span>{project.title}</span>
                {project.isPlaceholder ? (
                  <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    CONCEPT / PLACEHOLDER
                  </span>
                ) : (
                  <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    RESUME VERIFIED
                  </span>
                )}
              </div>
              <p className="text-[10px] font-mono text-cyber-textMuted">
                {project.platform} • {project.unityVersion}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-lg border border-cyber-border bg-cyber-panel flex items-center justify-center text-cyber-textMuted hover:text-white hover:border-cyber-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-8 text-left">
          {/* Main Visual Image Banner */}
          <div className="relative rounded-xl overflow-hidden border border-cyber-border bg-cyber-darker aspect-[16/9] max-h-72">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-cyber-darker/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyber-border/80">
                <span className="text-xs font-mono font-bold text-cyber-primary">
                  ROLE: {project.role}
                </span>
              </div>
            </div>
          </div>

          {/* Overview & Tagline */}
          <div className="space-y-2">
            <h3 className="text-xl font-display font-bold text-white">
              {project.tagline}
            </h3>
            <p className="text-sm font-sans text-cyber-textLight leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Gameplay Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-primary font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Key Gameplay Features & Mechanics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.mainFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-cyber-panel/60 border border-cyber-border text-xs text-cyber-textLight font-sans"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyber-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview & C# Snippet (if available) */}
          {project.architectureOverview && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-neonBlue font-bold flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" /> System Architecture & Implementation
              </h4>
              <p className="text-xs font-sans text-cyber-textMuted bg-cyber-darker/60 p-3 rounded-lg border border-cyber-border">
                {project.architectureOverview}
              </p>

              {project.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyber-textMuted px-1">
                    <span className="flex items-center gap-1.5 text-cyber-primary">
                      <Code2 className="w-3.5 h-3.5" /> C# Script: {project.codeSnippet.filename}
                    </span>
                    <span>Unity / .NET C#</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-cyber-darker border border-cyber-border text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed shadow-inner">
                    <code>{project.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Key Development Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-accent font-bold flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5" /> Development Challenges & Engineering Solutions
              </h4>
              <div className="space-y-3">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-cyber-panel/40 border border-cyber-border space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-mono font-bold text-rose-400 shrink-0">[CHALLENGE]:</span>
                      <p className="font-sans text-cyber-textLight">{item.challenge}</p>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-cyber-border/40">
                      <span className="font-mono font-bold text-emerald-400 shrink-0">[SOLUTION]:</span>
                      <p className="font-sans text-cyber-textLight">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono uppercase text-cyber-textMuted font-bold">
              Technologies & Unity Packages
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-cyber-panel border border-cyber-border text-xs font-mono text-cyber-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Action Links */}
          <div className="pt-4 border-t border-cyber-border flex flex-wrap gap-3">
            <a
              href={project.githubUrl || "https://github.com/Mashraque/Portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-cyber-card border border-cyber-border hover:border-cyber-primary transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB REPOSITORY</span>
            </a>

            <a
              href="#contact"
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-cyber-darker bg-cyber-primary hover:bg-cyber-primaryHover shadow-cyber-neon transition-all"
            >
              <span>INQUIRE ABOUT THIS PROJECT</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
