import React, { useRef, useState, useEffect } from 'react';
import { 
  Gamepad2, 
  RotateCcw, 
  Sparkles, 
  Sliders, 
  Crosshair, 
  Zap, 
  ShieldAlert,
  Play,
  Volume2
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const MiniGameSandbox: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [wave, setWave] = useState(1);
  const [turretType, setTurretType] = useState<'laser' | 'plasma'>('laser');
  const [gravity, setGravity] = useState(false);
  const [enemiesDefeated, setEnemiesDefeated] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    // Game Entities
    interface Projectile {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      radius: number;
      life: number;
    }

    interface Enemy {
      x: number;
      y: number;
      vx: number;
      vy: number;
      hp: number;
      maxHp: number;
      radius: number;
      color: string;
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      size: number;
    }

    const turret = {
      x: 60,
      y: height / 2,
      angle: 0,
    };

    let projectiles: Projectile[] = [];
    let enemies: Enemy[] = [];
    let particles: Particle[] = [];

    // Spawn Initial Enemies
    const spawnEnemy = () => {
      enemies.push({
        x: width + 20,
        y: Math.random() * (height - 80) + 40,
        vx: -(Math.random() * 1.5 + 1.0),
        vy: (Math.random() - 0.5) * 0.8,
        hp: turretType === 'laser' ? 2 : 4,
        maxHp: turretType === 'laser' ? 2 : 4,
        radius: 14,
        color: '#f72585'
      });
    };

    for (let i = 0; i < 4; i++) {
      spawnEnemy();
    }

    const spawnInterval = setInterval(() => {
      if (enemies.length < 8) {
        spawnEnemy();
      }
    }, 1800);

    // Mouse Tracking for Turret Aiming
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      turret.angle = Math.atan2(mouseY - turret.y, mouseX - turret.x);
    };

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const angle = Math.atan2(mouseY - turret.y, mouseX - turret.x);

      const speed = turretType === 'laser' ? 12 : 8;
      projectiles.push({
        x: turret.x + Math.cos(angle) * 25,
        y: turret.y + Math.sin(angle) * 25,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: turretType === 'laser' ? '#00f5d4' : '#ffd166',
        radius: turretType === 'laser' ? 4 : 7,
        life: 100
      });

      soundFx.playClick();
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleCanvasClick);

    // Main Game Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background Grid
      ctx.strokeStyle = 'rgba(0, 245, 212, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Turret Base
      ctx.beginPath();
      ctx.arc(turret.x, turret.y, 22, 0, Math.PI * 2);
      ctx.fillStyle = '#0b132b';
      ctx.fill();
      ctx.strokeStyle = '#00f5d4';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Turret Barrel
      ctx.save();
      ctx.translate(turret.x, turret.y);
      ctx.rotate(turret.angle);
      ctx.fillStyle = turretType === 'laser' ? '#00f5d4' : '#ffd166';
      ctx.fillRect(0, -5, 30, 10);
      ctx.restore();

      // Update & Draw Projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const p = projectiles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (gravity) p.vy += 0.15; // Apply gravity if enabled
        p.life--;

        // Draw projectile
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Check collision with enemies
        for (let j = enemies.length - 1; j >= 0; j--) {
          const e = enemies[j];
          const dist = Math.hypot(p.x - e.x, p.y - e.y);
          if (dist < p.radius + e.radius) {
            e.hp--;
            p.life = 0;

            // Spawn explosion particles
            for (let k = 0; k < 6; k++) {
              particles.push({
                x: e.x,
                y: e.y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                color: '#f72585',
                alpha: 1,
                size: Math.random() * 3 + 1
              });
            }

            if (e.hp <= 0) {
              enemies.splice(j, 1);
              setScore((s) => s + 100);
              setEnemiesDefeated((d) => d + 1);
              soundFx.playChime();
            }
            break;
          }
        }

        if (p.x > width || p.x < 0 || p.y > height || p.y < 0 || p.life <= 0) {
          projectiles.splice(i, 1);
        }
      }

      // Update & Draw Enemies
      for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        e.x += e.vx;
        e.y += e.vy;

        // Bounce vertically
        if (e.y < 30 || e.y > height - 30) e.vy *= -1;

        // Draw enemy creep
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#1c2541';
        ctx.fill();
        ctx.strokeStyle = e.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw HP Bar above enemy
        const hpPercent = e.hp / e.maxHp;
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fillRect(e.x - 12, e.y - 20, 24, 3);
        ctx.fillStyle = '#f72585';
        ctx.fillRect(e.x - 12, e.y - 20, 24 * hpPercent, 3);

        // Remove if offscreen
        if (e.x < -30) {
          enemies.splice(i, 1);
        }
      }

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha -= 0.03;

        if (pt.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = pt.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleCanvasClick);
      clearInterval(spawnInterval);
      cancelAnimationFrame(animationId);
    };
  }, [turretType, gravity]);

  return (
    <section id="sandbox" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-primary/30 text-xs font-mono text-cyber-primary mb-3">
            <Crosshair className="w-3.5 h-3.5" />
            <span>04 // INTERACTIVE_SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide">
            C# & UNITY MECHANICS PLAYGROUND
          </h2>
          <p className="text-sm font-mono text-cyber-textMuted max-w-2xl mt-2">
            Click on the arena to fire turret projectiles and test real-time 2D physics & collision detection in the browser.
          </p>
        </div>

        {/* Sandbox Console Container */}
        <div className="max-w-4xl mx-auto bg-cyber-card/90 border border-cyber-border rounded-2xl overflow-hidden shadow-2xl hud-border">
          {/* Top HUD Bar */}
          <div className="bg-cyber-darker/90 px-6 py-3 border-b border-cyber-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-4">
              <span className="text-cyber-primary font-bold flex items-center gap-1.5">
                <Crosshair className="w-4 h-4" /> 2D TURRET ENGINE
              </span>
              <span className="text-cyber-textMuted">|</span>
              <span className="text-white">SCORE: <strong className="text-cyber-neonYellow">{score}</strong></span>
              <span className="text-white">TARGETS: <strong className="text-cyber-accent">{enemiesDefeated}</strong></span>
            </div>

            {/* Sandbox Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setTurretType(turretType === 'laser' ? 'plasma' : 'laser');
                }}
                className={`px-2.5 py-1 rounded border text-[11px] font-semibold transition-colors ${
                  turretType === 'laser'
                    ? 'border-cyber-primary text-cyber-primary bg-cyber-primary/10'
                    : 'border-cyber-neonYellow text-cyber-neonYellow bg-cyber-neonYellow/10'
                }`}
              >
                WEAPON: {turretType.toUpperCase()}
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setGravity(!gravity);
                }}
                className={`px-2.5 py-1 rounded border text-[11px] font-semibold transition-colors ${
                  gravity
                    ? 'border-cyber-neonBlue text-cyber-neonBlue bg-cyber-neonBlue/10'
                    : 'border-cyber-border text-cyber-textMuted'
                }`}
              >
                GRAVITY: {gravity ? 'ON' : 'OFF'}
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setScore(0);
                  setEnemiesDefeated(0);
                }}
                title="Reset Stats"
                className="p-1.5 rounded border border-cyber-border text-cyber-textMuted hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="relative bg-cyber-darker h-[360px] cursor-crosshair overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full block" />
            <div className="absolute bottom-3 right-4 text-[10px] font-mono text-cyber-textMuted pointer-events-none bg-cyber-darker/80 px-2.5 py-1 rounded border border-cyber-border/40">
              AIM: MOUSE // FIRE: CLICK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
