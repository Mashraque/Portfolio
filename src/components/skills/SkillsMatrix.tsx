import React from 'react';
import { 
  Cpu, 
  Code2, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { skillsCategories } from '../../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-dark-card/40 border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-panel border border-dark-border text-xs font-mono text-laser-cyan mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Engine & Scripting Competencies
          </h2>
          <p className="text-sm font-sans text-slate-400 max-w-xl mt-2">
            Solid foundations in Unity workflows, object-oriented C# architecture, and cross-functional operations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {skillsCategories.map((category) => (
            <div 
              key={category.id} 
              className="laser-card rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="pb-4 mb-4 border-b border-dark-border">
                  <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-laser-cyan" />
                    {category.categoryName}
                  </h3>
                  <p className="text-xs font-sans text-slate-400 mt-1">
                    {category.subtitle}
                  </p>
                </div>

                {/* Skill List */}
                <div className="space-y-3.5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-laser-cyan transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-panel text-slate-400 border border-dark-border">
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-[11px] font-sans text-slate-400 mt-0.5 leading-normal">
                          {skill.description}
                        </p>
                      )}
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
