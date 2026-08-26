import React from 'react';
import { 
  FileCode, 
  Gamepad2, 
  Cpu, 
  Sparkles, 
  ShieldAlert, 
  Rocket, 
  ArrowRight,
  CheckCircle2,
  Workflow
} from 'lucide-react';
import { developmentPipeline } from '../../data/portfolioData';

export const DevProcessTimeline: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    FileCode,
    Gamepad2,
    Cpu,
    Sparkles,
    ShieldAlert,
    Rocket
  };

  return (
    <section id="process" className="py-20 relative bg-cyber-darker/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>05 // DEVELOPMENT_PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            HOW I CRAFT PLAYABLE GAMES
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-2xl mt-2">
            A structured 6-stage engineering process from initial mechanics blueprint to optimized build release.
          </p>
        </div>

        {/* Pipeline Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {developmentPipeline.map((step) => {
            const Icon = iconMap[step.icon] || Cpu;
            return (
              <div
                key={step.stepNumber}
                className="hud-panel p-6 rounded-2xl border border-cyber-border hover:border-cyber-primary/50 transition-all duration-300 flex flex-col justify-between group relative text-left bg-cyber-card/70"
              >
                <div>
                  {/* Top Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-cyber-primary/15 border border-cyber-primary/30 flex items-center justify-center font-mono font-bold text-cyber-primary text-sm group-hover:scale-110 transition-transform">
                      0{step.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-cyber-textMuted tracking-wider">
                      {step.codeName}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon className="w-5 h-5 text-cyber-primary shrink-0" />
                    <h3 className="text-base font-display font-bold text-white group-hover:text-cyber-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-sans text-cyber-textMuted leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-3 border-t border-cyber-border/40">
                  <div className="text-[10px] font-mono uppercase text-cyber-primary font-bold mb-2">
                    Key Deliverables:
                  </div>
                  <div className="space-y-1">
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-cyber-textLight">
                        <CheckCircle2 className="w-3 h-3 text-cyber-primary shrink-0" />
                        <span className="text-[11px] font-mono">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
