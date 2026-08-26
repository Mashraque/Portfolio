import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { ParticleCanvas } from './components/hero/ParticleCanvas';
import { AboutMe } from './components/about/AboutMe';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { MiniGameSandbox } from './components/playground/MiniGameSandbox';
import { DevProcessTimeline } from './components/pipeline/DevProcessTimeline';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { EducationSection } from './components/education/EducationSection';
import { StatsDashboard } from './components/stats/StatsDashboard';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'sandbox', 'process', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-darker text-cyber-textLight font-sans selection:bg-cyber-primary selection:text-cyber-darker">
      {/* Loading Sequence */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Persistent Ambient Background Particle Canvas */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <StatsDashboard />
        <AboutMe />
        <SkillsMatrix />
        <ProjectsSection />
        <MiniGameSandbox />
        <DevProcessTimeline />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
