import React from 'react';
import { 
  Gamepad2, 
  Download, 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  Terminal, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';
import { UnityInspectorHUD } from './UnityInspectorHUD';
import { soundFx } from '../../utils/audio';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-cyber-secondary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-card/80 border border-cyber-primary/30 shadow-cyber-neon backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-primary" />
              </span>
              <span className="text-xs font-mono font-semibold text-cyber-primary tracking-wide">
                {candidateData.badge}
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-tight">
                {candidateData.name}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-gradient-to-r from-cyber-primary via-cyber-neonBlue to-cyber-secondary bg-clip-text text-transparent">
                  {candidateData.title}
                </span>
              </div>
            </div>

            {/* Resume Summary */}
            <p className="text-base sm:text-lg text-cyber-textMuted leading-relaxed max-w-2xl font-sans">
              Software Engineering graduate specializing in <span className="text-white font-medium">Unity 3D</span>, <span className="text-white font-medium">C# scripting</span>, and <span className="text-white font-medium">Cinemachine camera systems</span>. Bringing 5+ years of end-to-end operational execution to build responsive, player-first game mechanics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-cyber-darker bg-gradient-to-r from-cyber-primary to-cyber-neonBlue hover:from-cyber-primaryHover hover:to-cyber-primary shadow-cyber-neon hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>EXPLORE MY PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
                download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-bold text-cyber-textLight bg-cyber-card/80 border border-cyber-border hover:border-cyber-primary/50 hover:bg-cyber-panel transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyber-primary" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Tertiary: Contact Me */}
              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs font-semibold text-cyber-textMuted hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>LET'S CONNECT</span>
              </a>
            </div>

            {/* Social Links & Quick Specs */}
            <div className="pt-4 border-t border-cyber-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cyber-textMuted">
              <div className="flex items-center gap-3">
                <a
                  href={candidateData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={candidateData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${candidateData.email}`}
                  onClick={() => soundFx.playClick()}
                  className="p-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary transition-all"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5 text-cyber-primary">
                  <Terminal className="w-3.5 h-3.5" /> Unity 3D / C#
                </span>
                <span className="text-cyber-border">|</span>
                <span className="text-cyber-textLight">B.Sc. Software Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Unity Inspector HUD Visualizer */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 transition-transform duration-300 hover:scale-[1.01]">
              <UnityInspectorHUD />
            </div>
            {/* Glow backdrop behind HUD */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary/20 via-cyber-secondary/20 to-cyber-accent/20 rounded-2xl blur-xl opacity-50 -z-10" />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="mt-12 flex justify-center">
        <a
          href="#about"
          onClick={() => soundFx.playClick()}
          className="group flex flex-col items-center gap-1 text-[11px] font-mono text-cyber-textMuted hover:text-cyber-primary transition-colors"
        >
          <span>SCROLL_TO_EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyber-primary" />
        </a>
      </div>
    </section>
  );
};
