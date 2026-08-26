import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Terminal,
  Zap
} from 'lucide-react';
import { skillsCategories } from '../../data/portfolioData';
import { SkillItem, SkillLevel } from '../../types';
import { soundFx } from '../../utils/audio';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Capabilities', icon: Sparkles },
    { id: 'game-dev', label: 'Unity & Gameplay', icon: Cpu },
    { id: 'programming', label: 'C# & Architecture', icon: Code2 },
    { id: 'tools-operations', label: 'Tools & Operations', icon: Wrench },
  ];

  const getLevelBadgeClass = (level: SkillLevel) => {
    switch (level) {
      case 'Core Skill':
        return 'bg-cyber-primary/15 text-cyber-primary border-cyber-primary/40';
      case 'Working Knowledge':
        return 'bg-cyber-neonBlue/15 text-cyber-neonBlue border-cyber-neonBlue/40';
      case 'Currently Learning':
        return 'bg-cyber-accent/15 text-cyber-accent border-cyber-accent/40';
      default:
        return 'bg-cyber-panel text-cyber-textMuted border-cyber-border';
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillsCategories
    : skillsCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL_ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            SKILLS & ARCHITECTURAL EXPERTISE
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-2xl mt-2">
            Engineered through practical Unity game development, software engineering labs, and commercial operations rigor.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyber-primary text-cyber-darker border-cyber-primary shadow-cyber-neon'
                    : 'bg-cyber-card text-cyber-textMuted border-cyber-border hover:border-cyber-primary/40 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              {/* Category Subheader */}
              <div className="flex items-center justify-between border-b border-cyber-border/80 pb-2">
                <div className="text-left">
                  <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-primary" />
                    {category.categoryName}
                  </h3>
                  <p className="text-xs font-mono text-cyber-textMuted mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-cyber-primary uppercase tracking-wider px-2 py-0.5 rounded bg-cyber-primary/10 border border-cyber-primary/30">
                  {category.skills.length} MODULES
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill: SkillItem, idx: number) => (
                  <div
                    key={idx}
                    className={`hud-panel p-4 rounded-xl border transition-all duration-300 text-left relative group flex flex-col justify-between ${
                      skill.highlight
                        ? 'border-cyber-primary/40 shadow-cyber-neon bg-cyber-card/90'
                        : 'border-cyber-border hover:border-cyber-primary/30'
                    }`}
                  >
                    <div>
                      {/* Top Skill Row: Name + Badge */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-sm font-mono font-bold text-white group-hover:text-cyber-primary transition-colors">
                          {skill.name}
                        </h4>
                        {skill.highlight && (
                          <Zap className="w-3.5 h-3.5 text-cyber-primary shrink-0 animate-pulse" />
                        )}
                      </div>

                      {/* Description */}
                      {skill.description && (
                        <p className="text-xs text-cyber-textMuted font-sans mb-4 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    {/* Skill Level Tag */}
                    <div className="pt-2 border-t border-cyber-border/40 flex items-center justify-between">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${getLevelBadgeClass(skill.level)}`}>
                        {skill.level}
                      </span>
                      <span className="text-[9px] font-mono text-cyber-textMuted">
                        UNITY_C#
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
