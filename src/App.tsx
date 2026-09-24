import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { AboutMe } from './components/about/AboutMe';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { EducationSection } from './components/education/EducationSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about', 'experience', 'education', 'contact'];
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
    <div className="min-h-screen bg-dark-bg text-slate-100 font-sans selection:bg-laser-cyan selection:text-dark-bg">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <SkillsMatrix />
        <AboutMe />
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