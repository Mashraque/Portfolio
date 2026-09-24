import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-dark-card/40 border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-panel border border-dark-border text-xs font-mono text-laser-cyan mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Education & Computer Science Core
          </h2>
          <p className="text-sm font-sans text-slate-400 max-w-xl mt-2">
            Formal Software Engineering degree providing rigorous foundations in OOP, algorithms, and software architecture.
          </p>
        </div>

        {/* Education Display */}
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="laser-card rounded-xl p-6 space-y-5"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-dark-border">
                <div>
                  <h3 className="text-base font-display font-bold text-white">
                    {item.degree}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-laser-cyan mt-0.5">
                    {item.institution}
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-dark-panel border border-dark-border text-slate-300">
                    {item.period}
                  </span>
                  {item.cgpa && (
                    <span className="text-laser-emerald text-xs">
                      {item.cgpa}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 text-xs font-sans text-slate-300">
                {item.highlights.map((h, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {h}
                  </p>
                ))}
              </div>

              {/* Coursework Tags */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-laser-cyan" />
                  Key Coursework & Labs:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-dark-panel border border-dark-border text-xs font-mono text-slate-300"
                    >
                      {course}
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
