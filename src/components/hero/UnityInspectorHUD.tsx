import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  Code2, 
  Gamepad2, 
  Sliders, 
  Flame, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const UnityInspectorHUD: React.FC = () => {
  const [selectedScript, setSelectedScript] = useState<'heat' | 'movement' | 'pooling'>('heat');
  const [heatPercent, setHeatPercent] = useState(65);
  const [moveSpeed, setMoveSpeed] = useState(8.0);
  const [jumpForce, setJumpForce] = useState(14.0);

  return (
    <div className="w-full bg-dark-card/90 backdrop-blur-xl border border-dark-border rounded-xl shadow-card-subtle overflow-hidden text-left font-mono text-xs">
      {/* Unity Window Title Bar */}
      <div className="bg-dark-darker px-4 py-2.5 border-b border-dark-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-semibold text-slate-400 ml-2">
            Unity Inspector — <span className="text-laser-cyan">Gameplay_Mechanics.cs</span>
          </span>
        </div>
        <span className="text-[10px] text-laser-emerald bg-laser-emerald/10 border border-laser-emerald/20 px-2 py-0.5 rounded">
          ● RUNNING
        </span>
      </div>

      {/* Script Selection Tabs */}
      <div className="flex border-b border-dark-border bg-dark-panel/50">
        <button
          onClick={() => setSelectedScript('heat')}
          className={`flex-1 py-2 px-3 text-center text-[11px] font-medium transition-colors border-b-2 ${
            selectedScript === 'heat'
              ? 'border-laser-cyan text-laser-cyan bg-dark-card'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          HeatIndicatorUI.cs
        </button>
        <button
          onClick={() => setSelectedScript('movement')}
          className={`flex-1 py-2 px-3 text-center text-[11px] font-medium transition-colors border-b-2 ${
            selectedScript === 'movement'
              ? 'border-laser-cyan text-laser-cyan bg-dark-card'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          PlayerMovement.cs
        </button>
        <button
          onClick={() => setSelectedScript('pooling')}
          className={`flex-1 py-2 px-3 text-center text-[11px] font-medium transition-colors border-b-2 ${
            selectedScript === 'pooling'
              ? 'border-laser-cyan text-laser-cyan bg-dark-card'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          ObjectPool.cs
        </button>
      </div>

      {/* Inspector Body */}
      <div className="p-4 space-y-4">
        {selectedScript === 'heat' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-dark-border/60">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-laser-rose" />
                PewPewOrbit.HeatIndicatorUI
              </span>
              <span className="text-[10px] text-slate-500">MonoBehaviour</span>
            </div>

            {/* Interactive Heat Slider */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400">Heat Level:</span>
                <span className={`font-bold ${heatPercent >= 90 ? 'text-laser-rose animate-pulse' : 'text-laser-cyan'}`}>
                  {heatPercent}% {heatPercent >= 90 ? '(OVERHEATED)' : ''}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={heatPercent}
                onChange={(e) => setHeatPercent(Number(e.target.value))}
                className="w-full h-1.5 bg-dark-panel rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Code Snippet Highlight */}
            <div className="p-2.5 rounded-lg bg-dark-darker border border-dark-border text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
              <span className="text-purple-400">float</span> heat = turret.HeatPercent;<br/>
              fillImage.fillAmount = heat;<br/>
              fillImage.color = heatGradient.Evaluate(heat);<br/>
              <span className="text-purple-400">if</span> (heat &gt;= <span className="text-emerald-400">1.0f</span>) PulseOverheatEffect();
            </div>
          </div>
        )}

        {selectedScript === 'movement' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-dark-border/60">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 text-laser-cyan" />
                RurouniKurenai.PlayerMovement
              </span>
              <span className="text-[10px] text-slate-500">2D Physics</span>
            </div>

            {/* Move Speed Slider */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400">[SerializeField] Move Speed:</span>
                <span className="text-laser-cyan font-bold">{moveSpeed.toFixed(1)} u/s</span>
              </div>
              <input
                type="range"
                min="4"
                max="15"
                step="0.5"
                value={moveSpeed}
                onChange={(e) => setMoveSpeed(Number(e.target.value))}
                className="w-full h-1.5 bg-dark-panel rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Jump Force Slider */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400">[SerializeField] Jump Force:</span>
                <span className="text-laser-cyan font-bold">{jumpForce.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="8"
                max="22"
                step="0.5"
                value={jumpForce}
                onChange={(e) => setJumpForce(Number(e.target.value))}
                className="w-full h-1.5 bg-dark-panel rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Code Snippet */}
            <div className="p-2.5 rounded-lg bg-dark-darker border border-dark-border text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
              <span className="text-purple-400">bool</span> isGrounded = Physics2D.OverlapCircle(feet.position, <span className="text-emerald-400">0.2f</span>, groundMask);<br/>
              rb.velocity = <span className="text-purple-400">new</span> Vector2(horizontal * moveSpeed, rb.velocity.y);
            </div>
          </div>
        )}

        {selectedScript === 'pooling' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-dark-border/60">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-laser-emerald" />
                Core.ObjectPool
              </span>
              <span className="text-[10px] text-slate-500">Memory Optimization</span>
            </div>

            <p className="text-[11px] text-slate-400 leading-normal">
              Pre-allocates bullet and VFX instances at startup to avoid runtime garbage collection allocations in WebGL.
            </p>

            <div className="p-2.5 rounded-lg bg-dark-darker border border-dark-border text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
              <span className="text-purple-400">public</span> GameObject GetPooledObject()<br/>
              &#123;<br/>
              &nbsp;&nbsp;<span className="text-purple-400">foreach</span> (<span className="text-purple-400">var</span> obj <span className="text-purple-400">in</span> pool)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (!obj.activeInHierarchy) <span className="text-purple-400">return</span> obj;<br/>
              &nbsp;&nbsp;<span className="text-purple-400">return</span> null;<br/>
              &#125;
            </div>
          </div>
        )}
      </div>

      {/* Footer Info Bar */}
      <div className="px-4 py-2 bg-dark-darker border-t border-dark-border flex items-center justify-between text-[10px] text-slate-500">
        <span>Target: WebGL / PC 60 FPS</span>
        <span className="text-laser-cyan flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> C# Tested & Verified
        </span>
      </div>
    </div>
  );
};
