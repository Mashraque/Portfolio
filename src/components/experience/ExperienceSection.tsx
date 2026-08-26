import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>06 // PROFESSIONAL_HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            EXPERIENCE & OPERATIONAL LEADERSHIP
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-2xl mt-2">
            5+ years of real-world operational execution, cross-functional vendor negotiation, and real-time clinical documentation.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-cyber-border -z-10" />

          {experienceData.map((item, idx) => (
            <div
              key={item.id}
              className="relative pl-12 sm:pl-20 text-left group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-cyber-darker border-2 border-cyber-primary group-hover:scale-125 transition-transform flex items-center justify-center shadow-cyber-neon">
                <span className="w-2 h-2 rounded-full bg-cyber-primary" />
              </div>

              {/* Card Body */}
              <div className="hud-panel p-6 sm:p-8 rounded-2xl border border-cyber-border hover:border-cyber-primary/50 transition-all duration-300 bg-cyber-card/80 space-y-4">
                {/* Header: Role, Company & Period */}
                <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-cyber-border/60">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyber-primary transition-colors">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyber-primary/15 text-cyber-primary border border-cyber-primary/30 font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-mono font-bold text-cyber-primary mt-1">
                      {item.company}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-neonBlue bg-cyber-panel px-3 py-1 rounded-lg border border-cyber-border">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-cyber-textMuted mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Type subtitle */}
                <div className="text-xs font-mono text-cyber-textMuted">
                  DOMAIN: <span className="text-cyber-textLight">{item.type}</span>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-2 text-xs font-sans text-cyber-textLight">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyber-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Achievements Box */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="p-3 rounded-xl bg-cyber-panel/50 border border-cyber-border/80 space-y-1">
                    <div className="text-[10px] font-mono text-cyber-neonYellow uppercase font-bold flex items-center gap-1.5">
                      <Award className="w-3 h-3" /> Key Impact & Outcomes:
                    </div>
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="text-xs font-sans text-cyber-textMuted pl-4 relative">
                        <span className="absolute left-0 text-cyber-neonYellow">›</span>
                        {ach}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech & Skills Used */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-cyber-darker border border-cyber-border text-cyber-textLight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
