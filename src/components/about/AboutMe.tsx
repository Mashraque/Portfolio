import React from 'react';
import { 
  User, 
  MapPin, 
  Cpu, 
  Code2, 
  Gamepad2, 
  Sparkles, 
  Download, 
  CheckCircle2,
  Languages,
  Award,
  Terminal
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';
import { soundFx } from '../../utils/audio';

export const AboutMe: React.FC = () => {
  const quickCards = [
    { label: 'Current Role', value: candidateData.quickStats.currentRole, icon: Gamepad2, color: 'text-cyber-primary' },
    { label: 'Primary Engine', value: candidateData.quickStats.primaryEngine, icon: Cpu, color: 'text-cyber-neonBlue' },
    { label: 'Main Language', value: candidateData.quickStats.mainLanguage, icon: Code2, color: 'text-cyber-accent' },
    { label: 'Target Platform', value: candidateData.quickStats.preferredPlatform, icon: Sparkles, color: 'text-cyber-neonYellow' },
    { label: 'Location', value: candidateData.quickStats.location, icon: MapPin, color: 'text-emerald-400' },
    { label: 'Availability', value: candidateData.quickStats.availability, icon: CheckCircle2, color: 'text-cyber-primary' },
  ];

  return (
    <section id="about" className="py-20 relative bg-cyber-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 // CANDIDATE_PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            ENGINEERING PLAYABLE EXPERIENCES
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-xl mt-2">
            Blending Software Engineering discipline with interactive Unity game mechanics.
          </p>
        </div>

        {/* Main Grid: Portrait Card + Detailed Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Holographic Portrait Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer HUD Corner Accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyber-primary z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyber-primary z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-cyber-primary z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyber-primary z-20 pointer-events-none" />

              {/* Glowing Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-cyber-card border border-cyber-border group-hover:border-cyber-primary/60 transition-all duration-300 shadow-2xl">
                <img
                  src="./assets/images/profile.png"
                  alt="Md. Nurul Mashraque Maruf - Junior Unity Game Developer"
                  className="w-full h-auto object-cover object-top aspect-[4/5] filter saturate-[1.05] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Holographic Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent opacity-80" />

                {/* Bottom HUD Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-cyber-darker/90 backdrop-blur-md border border-cyber-border/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-white">
                        Md. Nurul Mashraque Maruf
                      </div>
                      <div className="text-[10px] font-mono text-cyber-primary">
                        B.Sc. Software Engineering
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-1 rounded bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/40">
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>

              {/* Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyber-primary/20 to-cyber-secondary/20 rounded-2xl blur-xl opacity-40 -z-10" />
            </div>
          </div>

          {/* Right: Narrative Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-cyber-textLight leading-relaxed text-sm sm:text-base">
              {candidateData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="font-sans text-cyber-textLight/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Language Badges */}
            <div className="p-4 rounded-xl bg-cyber-card/70 border border-cyber-border/80">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyber-primary mb-2">
                <Languages className="w-4 h-4" />
                <span>COMMUNICATION & LANGUAGES</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {candidateData.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-panel border border-cyber-border text-xs font-mono"
                  >
                    <span className="text-white font-semibold">{lang.language}:</span>
                    <span className="text-cyber-primary">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download CTA Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
                download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold text-cyber-darker bg-cyber-primary hover:bg-cyber-primaryHover shadow-cyber-neon transition-all"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD FULL RESUME (PDF)
              </a>

              <span className="text-xs font-mono text-cyber-textMuted">
                Verified Candidate Data • Narayanganj, Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* Quick Info HUD Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="hud-panel p-3.5 rounded-xl border border-cyber-border hover:border-cyber-primary/40 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-cyber-textMuted tracking-wider">
                    {card.label}
                  </span>
                  <Icon className={`w-4 h-4 ${card.color}`} />
                </div>
                <div className="text-xs font-mono font-bold text-white truncate" title={card.value}>
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
