import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Menu, 
  X, 
  Download, 
  Volume2, 
  VolumeX, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(soundFx.getAudioEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleAudioToggle = () => {
    const newState = soundFx.toggleAudio();
    setAudioEnabled(newState);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-darker/90 backdrop-blur-md border-b border-cyber-border/80 shadow-glass-panel py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-lg bg-cyber-card border border-cyber-primary/40 flex items-center justify-center group-hover:border-cyber-primary group-hover:shadow-cyber-neon transition-all duration-200">
            <Gamepad2 className="w-5 h-5 text-cyber-primary group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-display font-bold text-white text-base tracking-wider">
              <span>MASHRAQUE</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse" />
            </div>
            <p className="text-[10px] font-mono text-cyber-textMuted tracking-wider">
              UNITY GAME DEV // C#
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-cyber-card/60 backdrop-blur-md border border-cyber-border/80 rounded-full px-3 py-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyber-darker font-bold bg-cyber-primary shadow-cyber-neon'
                    : 'text-cyber-textMuted hover:text-white hover:bg-cyber-panel/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Audio Toggle, Resume CTA, Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={handleAudioToggle}
            title={audioEnabled ? 'SFX Audio: ON (Click to Mute)' : 'SFX Audio: OFF (Click to Enable)'}
            className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all ${
              audioEnabled
                ? 'border-cyber-primary/50 text-cyber-primary bg-cyber-primary/10 shadow-cyber-neon'
                : 'border-cyber-border text-cyber-textMuted hover:text-white bg-cyber-card/60'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Download Resume Button */}
          <a
            href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
            download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold text-cyber-darker bg-gradient-to-r from-cyber-primary to-cyber-neonBlue hover:from-cyber-primaryHover hover:to-cyber-primary transition-all duration-200 shadow-cyber-neon hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME // PDF</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden w-10 h-10 rounded-lg border border-cyber-border bg-cyber-card flex items-center justify-center text-cyber-textLight hover:text-cyber-primary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-cyber-darker/95 backdrop-blur-xl border-b border-cyber-border p-6 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-xs font-mono font-medium flex items-center justify-between border transition-all ${
                    isActive
                      ? 'bg-cyber-primary/20 border-cyber-primary text-cyber-primary'
                      : 'bg-cyber-card border-cyber-border text-cyber-textMuted hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-cyber-primary" />}
                </a>
              );
            })}
          </div>

          <a
            href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
            download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-mono font-bold text-cyber-darker bg-cyber-primary hover:bg-cyber-primaryHover shadow-cyber-neon"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD RESUME (PDF)
          </a>
        </div>
      )}
    </header>
  );
};