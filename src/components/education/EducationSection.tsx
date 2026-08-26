import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Award, 
  CheckCircle2,
  Code2,
  Sparkles
} from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-cyber-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // ACADEMIC_FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            EDUCATION & COMPUTER SCIENCE CORE
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-2xl mt-2">
            Formal Software Engineering degree providing rigorous foundations in OOP, data structures, and computer graphics.
          </p>
        </div>

        {/* Education Display */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="hud-panel p-6 sm:p-8 rounded-2xl border border-cyber-border hover:border-cyber-primary/50 transition-all duration-300 bg-cyber-card/80 text-left space-y-6"
            >
              {/* Header: Degree & Institution */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-cyber-border/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-cyber-primary" />
                    <h3 className="text-xl font-display font-bold text-white">
                      {item.degree}
                    </h3>
                  </div>
                  <div className="text-base font-mono font-semibold text-cyber-primary">
                    {item.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs">
                  <span className="px-3 py-1 rounded-lg bg-cyber-panel border border-cyber-border text-cyber-neonBlue font-semibold">
                    {item.period}
                  </span>
                  {item.cgpa && (
                    <span className="text-emerald-400 font-bold text-xs mt-1">
                      CGPA: {item.cgpa}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {item.highlights.map((h, idx) => (
                  <p key={idx} className="text-sm font-sans text-cyber-textLight leading-relaxed">
                    {h}
                  </p>
                ))}
              </div>

              {/* Coursework Tags */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-cyber-primary font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  Key Coursework & Engineering Labs
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {item.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-cyber-panel border border-cyber-border text-xs font-mono text-cyber-textLight"
                    >
                      <Code2 className="w-3.5 h-3.5 text-cyber-primary shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
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
