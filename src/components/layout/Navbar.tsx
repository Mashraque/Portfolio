import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Menu, 
  X, 
  Download, 
  Github, 
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border/80 shadow-card-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-laser-cyan/50 transition-colors">
            <Gamepad2 className="w-5 h-5 text-laser-cyan group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-white text-sm tracking-wide">
              <span>MASHRAQUE</span>
              <span className="inline-block w-2 h-2 rounded-full bg-laser-emerald animate-pulse" />
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              JUNIOR UNITY DEVELOPER
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-card/60 backdrop-blur-md border border-dark-border/70 rounded-full px-4 py-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-dark-bg font-bold bg-laser-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-dark-panel/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={candidateData.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          {candidateData.itch && (
            <a
              href={candidateData.itch}
              target="_blank"
              rel="noopener noreferrer"
              title="Itch.io Profile"
              className="px-2.5 py-1.5 rounded-lg bg-dark-card border border-dark-border text-xs font-mono font-medium text-slate-300 hover:text-laser-cyan hover:border-laser-cyan/40 transition-colors flex items-center gap-1.5"
            >
              <span>itch.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          <a
            href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
            download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-100 bg-dark-card border border-dark-border hover:border-laser-cyan/50 hover:bg-dark-panel transition-all"
          >
            <Download className="w-3.5 h-3.5 text-laser-cyan" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-card border-b border-dark-border px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-mono text-slate-300 hover:text-white hover:bg-dark-panel"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-dark-border flex items-center gap-3">
            <a
              href="./assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf"
              download="Md_Nurul_Mashraque_Maruf_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-lg text-xs font-mono font-semibold bg-laser-cyan text-dark-bg"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};