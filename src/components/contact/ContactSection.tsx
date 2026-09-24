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
  ExternalLink
} from 'lucide-react';
import { candidateData } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    // Form mailto fallback
    window.location.href = `mailto:${candidateData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border text-xs font-mono text-laser-cyan mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm font-sans text-slate-400 max-w-lg mt-2">
            I'm currently seeking Junior Unity Developer & Gameplay Programmer roles. Let's discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-3 text-left">
            
            {/* Email Card */}
            <div className="laser-card p-4 rounded-xl space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-laser-cyan font-semibold">
                  <Mail className="w-3.5 h-3.5" /> Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-laser-cyan hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${candidateData.email}`}
                className="text-xs font-mono font-medium text-slate-200 hover:text-laser-cyan transition-colors block truncate"
              >
                {candidateData.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="laser-card p-4 rounded-xl space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1.5 font-semibold">
                <Phone className="w-3.5 h-3.5 text-laser-cyan" /> Phone & WhatsApp
              </div>
              <a
                href={`tel:${candidateData.phone}`}
                className="text-xs font-mono font-medium text-slate-200 hover:text-laser-cyan transition-colors block"
              >
                {candidateData.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="laser-card p-4 rounded-xl space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1.5 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-laser-cyan" /> Location
              </div>
              <p className="text-xs font-sans text-slate-300">
                {candidateData.location}
              </p>
              <p className="text-[11px] font-mono text-laser-emerald">
                Open to Remote & On-site Roles
              </p>
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-xl bg-dark-card border border-dark-border flex items-center justify-around">
              <a
                href={candidateData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">|</span>
              {candidateData.itch && (
                <a
                  href={candidateData.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-laser-cyan transition-colors"
                >
                  <span>itch.io</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <span className="text-slate-700">|</span>
              <a
                href={candidateData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="laser-card p-6 rounded-xl text-left">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-laser-emerald mx-auto" />
                  <h3 className="text-base font-display font-bold text-white">
                    Email Client Triggered!
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. If your mail client didn't open automatically, feel free to copy my email directly: <span className="text-laser-cyan font-mono">{candidateData.email}</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Miller"
                        className="w-full px-3 py-2 rounded-lg bg-dark-panel border border-dark-border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-laser-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@studio.com"
                        className="w-full px-3 py-2 rounded-lg bg-dark-panel border border-dark-border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-laser-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Junior Unity Developer Opportunity"
                      className="w-full px-3 py-2 rounded-lg bg-dark-panel border border-dark-border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-laser-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Maruf, we'd like to talk about an opportunity..."
                      className="w-full px-3 py-2 rounded-lg bg-dark-panel border border-dark-border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-laser-cyan transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg text-xs font-mono font-bold text-dark-bg bg-laser-cyan hover:bg-laser-cyanLight transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
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
