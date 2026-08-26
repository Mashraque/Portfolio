import React, { useState, useEffect } from 'react';
import { Terminal, Gamepad2, Sparkles, FastForward } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "INITIALIZING_UNITY_RUNTIME...",
    "LOADING_C#_GAMEPLAY_SYSTEMS...",
    "MOUNTING_CINEMACHINE_VIRTUAL_CAMERAS...",
    "PREPARING_GAME_PROJECTS_HUD..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            soundFx.playChime();
            onComplete();
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next >= 25 && currentStep === 0) setCurrentStep(1);
        if (next >= 55 && currentStep === 1) setCurrentStep(2);
        if (next >= 85 && currentStep === 2) setCurrentStep(3);
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [currentStep, onComplete]);

  const handleSkip = () => {
    soundFx.playClick();
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cyber-darker text-cyber-textLight select-none">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Glowing Center Core */}
      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-2xl bg-cyber-card border border-cyber-primary/40 flex items-center justify-center shadow-cyber-neon animate-pulse-glow">
            <Gamepad2 className="w-10 h-10 text-cyber-primary" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-cyber-secondary border border-cyber-accent/50 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-cyber-accent animate-spin" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-display font-black tracking-widest text-white mb-1">
          MASHRAQUE <span className="text-cyber-primary">PORTFOLIO</span>
        </h2>
        <p className="text-xs font-mono text-cyber-textMuted tracking-wider mb-6">
          UNITY GAME DEVELOPER // SYSTEM INITIALIZATION
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-cyber-card border border-cyber-border rounded-lg p-1.5 mb-3 relative overflow-hidden shadow-inner">
          <div
            className="h-3 rounded bg-gradient-to-r from-cyber-primary via-cyber-neonBlue to-cyber-secondary transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-2 bg-white opacity-75 animate-pulse" />
          </div>
        </div>

        {/* Status Line */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-cyber-textMuted mb-6 px-1">
          <span className="flex items-center gap-1.5 text-cyber-primary">
            <Terminal className="w-3.5 h-3.5" />
            {steps[currentStep]}
          </span>
          <span className="font-bold text-white">{progress}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="group inline-flex items-center gap-1.5 text-xs font-mono text-cyber-textMuted hover:text-cyber-primary transition-colors py-1.5 px-3 rounded border border-cyber-border/60 hover:border-cyber-primary/50 bg-cyber-card/60 backdrop-blur"
        >
          <FastForward className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          SKIP_INTRO [ESC]
        </button>
      </div>
    </div>
  );
};
