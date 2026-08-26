import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  Terminal,
  MessageSquare
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';
import { soundFx } from '../../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateData.email);
    soundFx.playChime();
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields before dispatching message.');
      return;
    }
    setErrorMsg('');
    soundFx.playChime();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>08 // DIRECT_COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            LET'S BUILD SOMETHING PLAYABLE
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-2xl mt-2 leading-relaxed">
            I’m currently looking for junior Unity and game-development opportunities where I can contribute, learn, and grow with an experienced team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Email Card with Copy Button */}
            <div className="hud-panel p-5 rounded-2xl border border-cyber-border bg-cyber-card/80 space-y-2">
              <div className="text-[10px] font-mono uppercase text-cyber-textMuted flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-cyber-primary font-bold">
                  <Mail className="w-3.5 h-3.5" /> Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-cyber-primary hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
              <a
                href={`mailto:${candidateData.email}`}
                className="text-sm font-mono font-bold text-white hover:text-cyber-primary transition-colors block truncate"
              >
                {candidateData.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="hud-panel p-5 rounded-2xl border border-cyber-border bg-cyber-card/80 space-y-1">
              <div className="text-[10px] font-mono uppercase text-cyber-textMuted flex items-center gap-1.5 font-bold">
                <Phone className="w-3.5 h-3.5 text-cyber-neonBlue" /> Phone & WhatsApp
              </div>
              <a
                href={`tel:${candidateData.phone}`}
                className="text-sm font-mono font-bold text-white hover:text-cyber-neonBlue transition-colors block"
              >
                {candidateData.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="hud-panel p-5 rounded-2xl border border-cyber-border bg-cyber-card/80 space-y-1">
              <div className="text-[10px] font-mono uppercase text-cyber-textMuted flex items-center gap-1.5 font-bold">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Location & Availability
              </div>
              <div className="text-sm font-mono font-bold text-white">
                {candidateData.location}
              </div>
              <p className="text-xs font-sans text-cyber-textMuted">
                Available for on-site, hybrid, or remote developer positions worldwide.
              </p>
            </div>

            {/* Social & Repositories Card */}
            <div className="hud-panel p-5 rounded-2xl border border-cyber-border bg-cyber-card/80 space-y-3">
              <div className="text-[10px] font-mono uppercase text-cyber-textMuted font-bold">
                Developer Links
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={candidateData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-cyber-panel border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary text-xs font-mono text-cyber-textLight transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={candidateData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-cyber-panel border border-cyber-border hover:border-cyber-primary hover:text-cyber-primary text-xs font-mono text-cyber-textLight transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="hud-panel p-6 sm:p-8 rounded-2xl border border-cyber-border bg-cyber-card/90 shadow-2xl text-left hud-border">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-cyber-primary/20 border border-cyber-primary/40 flex items-center justify-center text-cyber-primary shadow-cyber-neon">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    MESSAGE DISPATCHED SUCCESSFULLY
                  </h3>
                  <p className="text-xs font-mono text-cyber-textMuted max-w-md">
                    Thank you for reaching out! I will review your transmission and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-cyber-panel border border-cyber-border text-xs font-mono text-cyber-primary hover:border-cyber-primary transition-all"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-mono text-cyber-primary font-bold flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4" />
                    <span>TRANSMISSION TERMINAL</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-cyber-textMuted uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Miller"
                        className="w-full px-4 py-2.5 rounded-xl bg-cyber-darker border border-cyber-border focus:border-cyber-primary text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-cyber-primary transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-cyber-textMuted uppercase">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@studio.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-cyber-darker border border-cyber-border focus:border-cyber-primary text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-cyber-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-cyber-textMuted uppercase">
                      Subject / Role Inquiry
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Junior Unity Developer Position // Studio Interview"
                      className="w-full px-4 py-2.5 rounded-xl bg-cyber-darker border border-cyber-border focus:border-cyber-primary text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-cyber-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-cyber-textMuted uppercase">
                      Transmission Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, game studio requirements, or interview invitations..."
                      className="w-full px-4 py-2.5 rounded-xl bg-cyber-darker border border-cyber-border focus:border-cyber-primary text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-cyber-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-cyber-darker bg-gradient-to-r from-cyber-primary via-cyber-neonBlue to-cyber-secondary hover:from-cyber-primaryHover hover:to-cyber-primary shadow-cyber-neon flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE TO CANDIDATE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
