import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award
} from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border text-xs font-mono text-laser-cyan mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Work Experience & Operations
          </h2>
          <p className="text-sm font-sans text-slate-400 max-w-xl mt-2">
            Proven professional track record in logistics, process optimization, and high-accuracy remote communication.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="laser-card rounded-xl p-6 space-y-4"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-dark-border">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-display font-bold text-white">
                      {item.role}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-panel text-laser-cyan border border-laser-cyan/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono font-semibold text-laser-cyan mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-dark-panel px-2.5 py-1 rounded border border-dark-border">
                    <Calendar className="w-3 h-3 text-laser-cyan" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-slate-400 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2 text-xs font-sans text-slate-300">
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-laser-cyan shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="p-3 rounded-lg bg-dark-panel border border-dark-border space-y-1">
                  <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                    <Award className="w-3 h-3" /> Key Impact:
                  </div>
                  {item.achievements.map((ach, aIdx) => (
                    <p key={aIdx} className="text-xs text-slate-300 pl-4">
                      • {ach}
                    </p>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
