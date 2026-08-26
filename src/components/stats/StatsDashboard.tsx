import React from 'react';
import { 
  Gamepad2, 
  Cpu, 
  Code2, 
  Briefcase, 
  Flame, 
  Activity,
  Sparkles
} from 'lucide-react';
import { statisticsData } from '../../data/portfolioData';

export const StatsDashboard: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Gamepad2,
    Cpu,
    Code2,
    Briefcase,
    Flame
  };

  return (
    <section className="py-16 relative bg-cyber-darker border-y border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {statisticsData.map((stat) => {
            const Icon = iconMap[stat.icon] || Gamepad2;
            return (
              <div
                key={stat.id}
                className="hud-panel p-5 rounded-2xl border border-cyber-border hover:border-cyber-primary/40 transition-all duration-300 text-left relative group overflow-hidden bg-cyber-card/80"
              >
                {/* Background glow icon */}
                <Icon className="absolute -right-2 -bottom-2 w-16 h-16 text-cyber-primary/5 pointer-events-none group-hover:text-cyber-primary/10 transition-colors" />

                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyber-panel flex items-center justify-center text-cyber-primary border border-cyber-border group-hover:border-cyber-primary/40">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono text-cyber-primary uppercase tracking-wider">
                    HUD_METRIC
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-cyber-primary transition-colors tracking-tight">
                  {stat.value}
                </div>

                <div className="text-xs font-mono font-bold text-cyber-textLight mt-1 line-clamp-1">
                  {stat.label}
                </div>

                <div className="text-[11px] font-sans text-cyber-textMuted mt-0.5 line-clamp-1">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
