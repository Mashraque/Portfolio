import React from 'react';
import { 
  Gamepad2, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Download
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-darker border-t border-dark-border py-10 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-border">
          
          {/* Brand & Title */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <Gamepad2 className="w-5 h-5 text-laser-cyan" />
              <span className="font-display font-bold text-white text-sm tracking-wide">
                {candidateData.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Junior Unity Developer & Gameplay Programmer • Narayanganj, Bangladesh
            </p>
          </div>

          {/* Social & Resume Links */}
          <div className="flex items-center gap-3">
            <a
              href={candidateData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {candidateData.itch && (
              <a
                href={candidateData.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-dark-card border border-dark-border text-xs font-mono font-medium text-slate-300 hover:text-laser-cyan hover:border-laser-cyan/40 transition-colors flex items-center gap-1"
                title="Itch.io"
              >
                <span>itch.io</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <a
              href={candidateData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-laser-cyan hover:border-laser-cyan/40 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <span>Built with React, TypeScript & Tailwind CSS. Hosted on GitHub Pages.</span>
          <span>© {new Date().getFullYear()} Md. Nurul Mashraque Maruf. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};