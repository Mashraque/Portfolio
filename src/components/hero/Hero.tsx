import React from 'react';
import { 
  Gamepad2, 
  Download, 
  ArrowRight, 
  Mail, 
  Github, 
  ExternalLink,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';
import { UnityInspectorHUD } from './UnityInspectorHUD';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-laser-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Candidate Info & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-laser-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-laser-emerald" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {candidateData.badge}
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                {candidateData.name}
              </h1>
              <div className="mt-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-laser-cyan">
                  {candidateData.title}
                </span>
              </div>
            </div>

            {/* Summary Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
              Software Engineering graduate (B.Sc.) focused on <strong className="text-white font-semibold">Unity 2D/3D development</strong>, <strong className="text-white font-semibold">C# gameplay scripting</strong>, and responsive player mechanics. Combining computer science fundamentals with 5+ years of real-world operational problem-solving.
            </p>

            {/* Key Quick Tags */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-dark-panel border border-dark-border text-slate-300">
                🎮 Unity 2022.3 LTS
              </span>
              <span className="px-2.5 py-1 rounded bg-dark-panel border border-dark-border text-slate-300">
                💻 C# (.NET / OOP)
              </span>
              <span className="px-2.5 py-1 rounded bg-dark-panel border border-dark-border text-slate-300">
                🎓 B.Sc. in Software Engineering
              </span>
              <span className="px-2.5 py-1 rounded bg-dark-panel border border-dark-border text-slate-300">
                📍 Narayanganj / Remote
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-3 pt-3">
              {/* Primary: Play Pew Pew Orbit */}
              {candidateData.itch && (
                <a
                  href="https://its-mash-here.itch.io/pewpeworbit-beta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-dark-bg bg-laser-cyan hover:bg-laser-cyanLight shadow-laser-glow transition-all"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>PLAY "PEW PEW ORBIT" BETA</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              )}

              {/* Secondary: Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-slate-200 bg-dark-card border border-dark-border hover:border-slate-500 hover:bg-dark-panel transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Tertiary: Download Resume */}
              <a
                href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
                download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-slate-200 bg-dark-card border border-dark-border hover:border-slate-500 hover:bg-dark-panel transition-all"
              >
                <Download className="w-3.5 h-3.5 text-laser-cyan" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={candidateData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="mailto:nurul.mashraque@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>nurul.mashraque@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Unity Inspector Visualizer */}
          <div className="lg:col-span-5">
            <UnityInspectorHUD />
          </div>

        </div>
      </div>
    </section>
  );
};
