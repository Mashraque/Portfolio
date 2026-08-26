import React, { useState } from 'react';
import { 
  Gamepad2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { soundFx } from '../../utils/audio';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: '3D Game', label: '3D Games' },
    { id: '2D Game', label: '2D Games' },
    { id: 'Prototype', label: 'Tech Prototypes' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-cyber-darker/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED_PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            UNITY GAMES & GAMEPLAY SYSTEMS
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-2xl mt-2">
            Explore 3D strategy loops, narrative Cinemachine adventures, and responsive gameplay prototypes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyber-primary text-cyber-darker border-cyber-primary shadow-cyber-neon'
                    : 'bg-cyber-card text-cyber-textMuted border-cyber-border hover:border-cyber-primary/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Notice for Recruiters */}
        <div className="mt-12 p-4 rounded-xl bg-cyber-card/60 border border-cyber-border text-center max-w-2xl mx-auto text-xs font-mono text-cyber-textMuted">
          <span className="text-cyber-primary font-bold">RECRUITER NOTE:</span> Mariya's Mythical Mayhem and Romantic Quest are extracted directly from the candidate's verified resume. Supplementary prototypes highlight specific physics and mobile optimization skills.
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
