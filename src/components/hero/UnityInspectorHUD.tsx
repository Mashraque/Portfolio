import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  RotateCw, 
  Box, 
  Camera, 
  Cpu, 
  Sliders, 
  Code, 
  CheckCircle2, 
  Eye,
  Crosshair,
  Layers
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const UnityInspectorHUD: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedNode, setSelectedNode] = useState('PlayerController');
  const [moveSpeed, setMoveSpeed] = useState(8.5);
  const [waveCount, setWaveCount] = useState(14);
  const [fov, setFov] = useState(60);
  const [drawGizmos, setDrawGizmos] = useState(true);

  const hierarchyItems = [
    { id: 'PlayerController', label: 'Player_Mashraque (C#)', icon: Box, tag: 'Player' },
    { id: 'CinemachineCam', label: 'CM_VirtualCam_01', icon: Camera, tag: 'Cinemachine' },
    { id: 'WaveSpawner', label: 'EnemyWaveSpawner_3D', icon: Cpu, tag: 'Systems' },
    { id: 'GameManager', label: 'GameManager_Singleton', icon: Layers, tag: 'Core' },
  ];

  return (
    <div className="w-full bg-cyber-card/90 backdrop-blur-xl border border-cyber-border rounded-xl shadow-2xl overflow-hidden font-mono text-xs text-cyber-textLight">
      {/* Top Unity Window Titlebar */}
      <div className="bg-cyber-darker/90 px-4 py-2 border-b border-cyber-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-semibold text-cyber-textMuted ml-2">
            Unity 2022.3 LTS — Stage: <span className="text-cyber-primary">Gameplay_Showcase.unity</span>
          </span>
        </div>

        {/* Play/Pause Simulator Controls */}
        <div className="flex items-center gap-1 bg-cyber-panel px-2 py-0.5 rounded border border-cyber-border/70">
          <button
            onClick={() => {
              soundFx.playClick();
              setIsPlaying(!isPlaying);
            }}
            title={isPlaying ? 'Pause Simulation' : 'Play Simulation'}
            className={`p-1 rounded transition-colors ${
              isPlaying ? 'text-cyber-primary bg-cyber-primary/20' : 'text-cyber-textMuted hover:text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setWaveCount((w) => w + 1);
            }}
            title="Step Next Wave"
            className="p-1 rounded text-cyber-textMuted hover:text-white"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Editor Main Content: Hierarchy + Inspector Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-cyber-border">
        {/* Left: Hierarchy Tree */}
        <div className="md:col-span-5 p-3 bg-cyber-panel/40">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-cyber-textMuted mb-2 pb-1 border-b border-cyber-border/40">
            <span className="flex items-center gap-1 font-bold">
              <Layers className="w-3 h-3 text-cyber-primary" /> Hierarchy
            </span>
            <span className="text-cyber-primary">4 ACTIVE</span>
          </div>

          <div className="space-y-1">
            {hierarchyItems.map((item) => {
              const isSelected = selectedNode === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedNode(item.id);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded transition-all text-left ${
                    isSelected
                      ? 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/40 font-semibold'
                      : 'text-cyber-textLight hover:bg-cyber-card/70 border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <Icon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    <span className="truncate">{item.label}</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyber-darker text-cyber-textMuted shrink-0">
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mini Live Simulation Status */}
          <div className="mt-4 p-2.5 rounded-lg bg-cyber-darker/70 border border-cyber-border/60 text-[10px]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-cyber-textMuted">Status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                60.0 FPS // RUNNING
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cyber-textMuted">Active Wave:</span>
              <span className="text-cyber-neonBlue font-bold">Wave #{waveCount}</span>
            </div>
          </div>
        </div>

        {/* Right: Inspector Properties Panel */}
        <div className="md:col-span-7 p-3 bg-cyber-card/40">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-cyber-textMuted mb-2 pb-1 border-b border-cyber-border/40">
            <span className="flex items-center gap-1 font-bold">
              <Sliders className="w-3 h-3 text-cyber-neonBlue" /> Inspector: {selectedNode}
            </span>
            <span className="text-cyber-neonBlue">Serialized Fields</span>
          </div>

          {selectedNode === 'PlayerController' && (
            <div className="space-y-2.5">
              {/* Transform Header */}
              <div className="bg-cyber-darker/60 p-2 rounded border border-cyber-border/40 text-[10px]">
                <div className="text-cyber-textMuted mb-1 font-bold">Transform</div>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <span className="bg-cyber-panel/80 py-0.5 rounded text-rose-400">X: 0.00</span>
                  <span className="bg-cyber-panel/80 py-0.5 rounded text-emerald-400">Y: 1.25</span>
                  <span className="bg-cyber-panel/80 py-0.5 rounded text-sky-400">Z: 4.80</span>
                </div>
              </div>

              {/* MoveSpeed Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-cyber-textMuted">Movement Speed [m/s]</span>
                  <span className="text-cyber-primary font-bold">{moveSpeed.toFixed(1)}f</span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="15.0"
                  step="0.5"
                  value={moveSpeed}
                  onChange={(e) => setMoveSpeed(parseFloat(e.target.value))}
                  className="w-full h-1 bg-cyber-panel rounded-lg appearance-none cursor-pointer accent-cyber-primary"
                />
              </div>

              {/* Script Status */}
              <div className="flex items-center justify-between text-[10px] bg-cyber-panel/60 px-2 py-1.5 rounded border border-cyber-border/40">
                <span className="flex items-center gap-1 text-cyber-textMuted">
                  <Code className="w-3 h-3 text-cyber-primary" /> Script: PlayerController.cs
                </span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3" /> Attached
                </span>
              </div>
            </div>
          )}

          {selectedNode === 'CinemachineCam' && (
            <div className="space-y-2.5">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-cyber-textMuted">Field of View (FOV)</span>
                  <span className="text-cyber-neonBlue font-bold">{fov}°</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="90"
                  value={fov}
                  onChange={(e) => setFov(parseInt(e.target.value))}
                  className="w-full h-1 bg-cyber-panel rounded-lg appearance-none cursor-pointer accent-cyber-neonBlue"
                />
              </div>

              <div className="bg-cyber-darker/60 p-2 rounded border border-cyber-border/40 text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-cyber-textMuted">LookAt Target:</span>
                  <span className="text-cyber-primary font-bold">Player_Mashraque</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-textMuted">Blend Style:</span>
                  <span className="text-cyber-textLight">EaseInOut (1.2s)</span>
                </div>
              </div>
            </div>
          )}

          {selectedNode === 'WaveSpawner' && (
            <div className="space-y-2.5">
              <div className="flex justify-between text-[10px] bg-cyber-darker/60 p-2 rounded border border-cyber-border/40">
                <span className="text-cyber-textMuted">Active Wave Count:</span>
                <span className="text-cyber-accent font-bold">Wave #{waveCount}</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-cyber-textMuted">Spawn Interval:</span>
                <span className="text-cyber-primary">1.5 sec (Poisson Curve)</span>
              </div>
            </div>
          )}

          {selectedNode === 'GameManager' && (
            <div className="space-y-2.5">
              <div className="bg-cyber-darker/60 p-2 rounded border border-cyber-border/40 text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-cyber-textMuted">Singleton Instance:</span>
                  <span className="text-emerald-400 font-bold">DontDestroyOnLoad</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-textMuted">Architecture:</span>
                  <span className="text-cyber-primary">Observer & State Pattern</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Gizmos Toggle */}
          <div className="mt-3 pt-2 border-t border-cyber-border/40 flex items-center justify-between text-[10px]">
            <button
              onClick={() => {
                soundFx.playClick();
                setDrawGizmos(!drawGizmos);
              }}
              className="flex items-center gap-1 text-cyber-textMuted hover:text-white"
            >
              <Eye className="w-3 h-3 text-cyber-primary" />
              <span>Gizmos: <strong className={drawGizmos ? 'text-cyber-primary' : 'text-cyber-textMuted'}>{drawGizmos ? 'ON' : 'OFF'}</strong></span>
            </button>
            <span className="text-cyber-textMuted">C# // .NET 8.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
