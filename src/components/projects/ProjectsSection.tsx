import React, { useState } from 'react';
import { 
  Gamepad2, 
  Code2, 
  Layers,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: '2D Game', label: '2D Games' },
    { id: 'Prototype', label: '3D & Prototypes' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border text-xs font-mono text-laser-cyan mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Featured Unity Projects & Prototypes
          </h2>
          <p className="text-sm font-sans text-slate-400 max-w-xl mt-2">
            Hands-on gameplay mechanics, responsive controllers, and published WebGL builds.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
                  isActive
                    ? 'bg-laser-cyan text-dark-bg border-laser-cyan font-semibold shadow-laser-glow'
                    : 'bg-dark-card text-slate-400 border-dark-border hover:border-slate-600 hover:text-white'
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

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
