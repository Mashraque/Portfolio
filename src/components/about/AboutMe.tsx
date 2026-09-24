import React from 'react';
import { 
  User, 
  MapPin, 
  Cpu, 
  Code2, 
  Gamepad2, 
  Download, 
  CheckCircle2,
  Languages,
  Award,
  ExternalLink
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';

export const AboutMe: React.FC = () => {
  const quickCards = [
    { label: 'Current Focus', value: candidateData.quickStats.currentRole, icon: Gamepad2 },
    { label: 'Primary Engine', value: candidateData.quickStats.primaryEngine, icon: Cpu },
    { label: 'Main Language', value: candidateData.quickStats.mainLanguage, icon: Code2 },
    { label: 'Target Platforms', value: candidateData.quickStats.preferredPlatform, icon: CheckCircle2 },
    { label: 'Location', value: candidateData.quickStats.location, icon: MapPin },
    { label: 'Availability', value: candidateData.quickStats.availability, icon: CheckCircle2 },
  ];

  return (
    <section id="about" className="py-20 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border text-xs font-mono text-laser-cyan mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            About Me & Career Trajectory
          </h2>
          <p className="text-sm font-sans text-slate-400 max-w-xl mt-2">
            Bridging software engineering training, real-world operational maturity, and a genuine drive for Unity gameplay development.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left: Clean Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full rounded-2xl overflow-hidden laser-card p-2">
              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-dark-panel">
                <img
                  src="./assets/images/profile.png"
                  alt="Md. Nurul Mashraque Maruf"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="font-display font-bold text-white text-base">
                  {candidateData.name}
                </h3>
                <p className="text-xs font-mono text-laser-cyan mt-0.5">
                  B.Sc. in Software Engineering
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Narayanganj, Bangladesh • Open to Remote Roles
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
              {candidateData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Language & Transferable Strengths */}
            <div className="pt-4 border-t border-dark-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-lg bg-dark-card border border-dark-border">
                <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">
                  Languages
                </span>
                <p className="text-xs font-semibold text-white">
                  Bengali (Native) • English (Fluent / Professional)
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-dark-card border border-dark-border">
                <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">
                  Typing & Communication
                </span>
                <p className="text-xs font-semibold text-white">
                  80 WPM (95%+ Accuracy) • High Precision
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
                download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-dark-bg bg-laser-cyan hover:bg-laser-cyanLight transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Verified Resume</span>
              </a>
            </div>

          </div>

        </div>

        {/* Quick Spec Cards Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-left">
          {quickCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="p-3.5 rounded-lg bg-dark-card border border-dark-border">
                <div className="flex items-center gap-1.5 text-laser-cyan mb-1">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{card.label}</span>
                </div>
                <p className="text-xs font-medium text-slate-200 line-clamp-1">
                  {card.value}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
