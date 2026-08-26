import React from 'react';
import { 
  Gamepad2, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Sparkles,
  Download
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';
import { soundFx } from '../../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-darker border-t border-cyber-border py-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-cyber-border/60">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-primary/40 flex items-center justify-center text-cyber-primary shadow-cyber-neon">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-white text-base tracking-wider">
                {candidateData.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyber-primary">
              {candidateData.title} // Software Engineer
            </p>
            <p className="text-xs font-sans text-cyber-textMuted max-w-sm leading-relaxed">
              Committed to crafting engaging, high-performance 3D & 2D games with clean C# architecture, physics systems, and Cinemachine choreography.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-cyber-textMuted">
              <a href="#home" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› Home</a>
              <a href="#about" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› About Me</a>
              <a href="#skills" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› Skills Matrix</a>
              <a href="#projects" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› Featured Games</a>
              <a href="#process" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› Dev Pipeline</a>
              <a href="#experience" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› Experience</a>
              <a href="#education" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› Education</a>
              <a href="#contact" onClick={() => soundFx.playClick()} className="hover:text-cyber-primary transition-colors">› Contact</a>
            </div>
          </div>

          {/* Resume & Social Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Connect & Verify
            </div>
            <div className="flex gap-2">
              <a
                href={candidateData.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-2.5 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary text-cyber-textLight transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={candidateData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-2.5 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary text-cyber-textLight transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${candidateData.email}`}
                onClick={() => soundFx.playClick()}
                className="p-2.5 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary text-cyber-textLight transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
              download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 text-xs font-mono text-cyber-primary hover:underline pt-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cyber-textMuted">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {candidateData.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-cyber-textLight">
              Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for games
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-primary text-cyber-primary transition-all flex items-center gap-1"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] font-bold">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};