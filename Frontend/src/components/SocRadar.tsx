import React from 'react';
import { ShieldCheckIcon } from 'lucide-react';
import { StatusDot } from './StatusDot';

type RadarNode = {
  x: number;
  y: number;
  threat?: boolean;
};

const nodes: RadarNode[] = [
{ x: 128, y: 112 },
{ x: 262, y: 96 },
{ x: 310, y: 210 },
{ x: 92, y: 236 },
{ x: 168, y: 300 },
{ x: 276, y: 296 },
{ x: 236, y: 152, threat: true },
{ x: 146, y: 178 }];


const links: [number, number][] = [
[0, 7],
[7, 3],
[7, 4],
[1, 6],
[6, 2],
[2, 5],
[4, 5],
[0, 1]];


const ticks = Array.from({ length: 72 }, (_, i) => i * 5);

export function SocRadar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* liquid glass core */}
      <div aria-hidden className="absolute inset-[22%] grid place-items-center">
        <div className="liquid-soft h-full w-full bg-aqua/[0.08] blur-2xl" />
      </div>

      <svg viewBox="0 0 400 400" className="relative h-full w-full" role="img" aria-label="Abstract security radar visualization">
        <defs>
          <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3FCF9F" stopOpacity="0" />
            <stop offset="100%" stopColor="#3FCF9F" stopOpacity="0.22" />
          </linearGradient>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5BC4D6" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#5BC4D6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="190" fill="url(#core)" />
        {[190, 150, 110, 70].map((r) =>
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        )}
        <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(91,196,214,0.12)" strokeWidth="1" strokeDasharray="2 6" />

        {ticks.map((deg) => {
          const rad = deg * Math.PI / 180;
          const long = deg % 30 === 0;
          const r1 = long ? 180 : 185;
          return (
            <line
              key={deg}
              x1={200 + Math.sin(rad) * r1}
              y1={200 - Math.cos(rad) * r1}
              x2={200 + Math.sin(rad) * 190}
              y2={200 - Math.cos(rad) * 190}
              stroke={long ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.08)'}
              strokeWidth="1" />);


        })}
        <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(255,255,255,0.05)" />
        <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(255,255,255,0.05)" />

        <g className="radar-sweep">
          <path d="M200 200 L200 10 A190 190 0 0 1 322.1 54.5 Z" fill="url(#sweep)" />
          <line x1="200" y1="200" x2="322.1" y2="54.5" stroke="rgba(63,207,159,0.55)" strokeWidth="1" />
        </g>

        {links.map(([a, b]) =>
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="rgba(91,196,214,0.22)"
          strokeWidth="1"
          className="flow-dash" />

        )}

        {nodes.map((n, i) =>
        <g key={`${n.x}-${n.y}`}>
            {n.threat ?
          <>
                <circle cx={n.x} cy={n.y} r="10" fill="none" stroke="rgba(224,160,78,0.35)">
                  <animate attributeName="r" values="5;16;5" dur="3.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle cx={n.x} cy={n.y} r="3.5" fill="#E0A04E" />
              </> :

          <>
                <circle cx={n.x} cy={n.y} r="6" fill="rgba(63,207,159,0.08)" stroke="rgba(63,207,159,0.3)" />
                <circle cx={n.x} cy={n.y} r="2.2" fill="#3FCF9F">
                  <animate
                attributeName="opacity"
                values="1;0.45;1"
                dur={`${3 + i % 3}s`}
                begin={`${i * 0.4}s`}
                repeatCount="indefinite" />
              
                </circle>
              </>
          }
          </g>
        )}

        <text x="200" y="24" textAnchor="middle" className="fill-fg-subtle font-mono" fontSize="8" letterSpacing="2">
          000°
        </text>
        <text x="380" y="203" textAnchor="end" className="fill-fg-subtle font-mono" fontSize="8" letterSpacing="2">
          090°
        </text>
      </svg>

      {/* glass core */}
      <div className="glass absolute left-1/2 top-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full">
        <ShieldCheckIcon size={24} strokeWidth={1.5} className="text-signal" aria-hidden />
      </div>

      {/* status */}
      <div className="glass absolute bottom-[6%] left-0 rounded-xl px-4 py-3 sm:left-[2%]">
        <p className="flex items-center gap-2 font-mono text-[10.5px] font-medium tracking-[0.16em] text-signal">
          <StatusDot />
          SECURITY OPERATIONS
        </p>
        <p className="mt-1 pl-4 font-mono text-[10.5px] tracking-[0.16em] text-fg-muted">SOC ANALYST</p>
      </div>
    </div>);

}