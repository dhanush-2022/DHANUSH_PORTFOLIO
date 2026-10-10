import React, { useState } from 'react';
import { toolLinks, tools } from '../data/portfolio';
import type { Tool } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const toolById: Record<string, Tool> = Object.fromEntries(tools.map((t) => [t.id, t]));

export function Toolkit() {
  const [hovered, setHovered] = useState<string | null>(null);

  const isConnected = (id: string) =>
  !hovered || id === hovered || toolLinks.some(([a, b]) => a === hovered && b === id || b === hovered && a === id);

  return (
    <section id="toolkit" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Toolkit"
          title="Security Operations Ecosystem"
          description="The tools behind my lab and internship work — and how they connect from attack simulation to analysis." />
        

        <Reveal delay={0.1} className="relative mt-16 hidden h-[480px] lg:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {toolLinks.map(([a, b]) => {
              const A = toolById[a];
              const B = toolById[b];
              const lit = hovered === a || hovered === b;
              return (
                <g key={`${a}-${b}`}>
                  <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="rgba(255,255,255,0.07)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                  <line
                    x1={A.x}
                    y1={A.y}
                    x2={B.x}
                    y2={B.y}
                    className="flow-dash"
                    stroke={lit ? 'rgba(63,207,159,0.85)' : 'rgba(91,196,214,0.32)'}
                    strokeWidth={lit ? 1.5 : 1}
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: 'stroke 300ms cubic-bezier(0.23,1,0.32,1)' }} />
                  
                </g>);

            })}
          </svg>

          {tools.map((tool) =>
          <div
            key={tool.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
            style={{ left: `${tool.x}%`, top: `${tool.y}%`, opacity: isConnected(tool.id) ? 1 : 0.35 }}
            onMouseEnter={() => setHovered(tool.id)}
            onMouseLeave={() => setHovered(null)}>
            
              <ToolBadge tool={tool} className={tool.hub ? 'w-[240px]' : 'w-[210px]'} />
            </div>
          )}
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:hidden">
          {tools.map((tool, i) =>
          <Reveal key={tool.id} delay={i * 0.04}>
              <ToolBadge tool={tool} className="w-full" />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

type ToolBadgeProps = {
  tool: Tool;
  className?: string;
};

function ToolBadge({ tool, className = '' }: ToolBadgeProps) {
  const Icon = tool.icon;
  return (
    <GlassCard className={`flex items-center gap-3.5 px-4 py-3.5 ${tool.hub ? 'border-signal/25' : ''} ${className}`}>
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
        tool.hub ? 'bg-signal/15 text-signal shadow-[0_0_20px_-6px_rgba(63,207,159,0.6)]' : 'bg-white/[0.04] text-aqua'}`
        }>
        
        <Icon size={18} strokeWidth={1.5} aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-mono text-[13px] font-medium text-fg">{tool.name}</span>
        <span className="block truncate text-xs text-fg-muted">{tool.role}</span>
      </span>
    </GlassCard>);

}