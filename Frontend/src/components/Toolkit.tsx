import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheckIcon } from 'lucide-react';
import { tools } from '../data/portfolio';
import type { Tool } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const toolById = new Map(tools.map((tool) => [tool.id, tool]));
const leftTools = ['kali', 'cowrie', 'network'].map((id) => toolById.get(id)).filter((tool): tool is Tool => !!tool);
const rightTools = ['siem', 'wazuh', 'web'].map((id) => toolById.get(id)).filter((tool): tool is Tool => !!tool);
const linuxTool = tools.find((tool) => tool.id === 'linux');

const connectors = [
  { id: 'kali', path: 'M42 32 L36 14 L34 14' },
  { id: 'cowrie', path: 'M40 39 H34' },
  { id: 'network', path: 'M42 46 L36 64 L34 64' },
  { id: 'siem', path: 'M58 32 L64 14 L66 14' },
  { id: 'wazuh', path: 'M60 39 H66' },
  { id: 'web', path: 'M58 46 L64 64 L66 64' },
  { id: 'linux', path: 'M50 53 V84' },
];

export function Toolkit() {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="toolkit" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Security Tools"
          title="Security Operations Ecosystem"
          description="The tools behind my lab and internship work — and how they connect from attack simulation to analysis." />
        

        <Reveal delay={0.1} className="soc-ecosystem relative mt-16 hidden h-[620px] grid-cols-[minmax(0,1fr)_280px_minmax(0,1fr)] grid-rows-[repeat(3,minmax(0,1fr))_112px] gap-x-6 gap-y-3 overflow-hidden rounded-3xl p-6 lg:grid">
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="soc-ecosystem__glow absolute inset-0" aria-hidden />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {connectors.map(({ id, path }, index) => {
              const lit = hovered === id;
              return (
                <g key={id}>
                  <path d={path} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                  <motion.path
                    d={path}
                    fill="none"
                    pathLength={1}
                    stroke={lit ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.32)'}
                    strokeWidth={lit ? 1.75 : 1}
                    vectorEffect="non-scaling-stroke"
                    initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.35 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: false, margin: '-80px' }}
                    transition={{
                      pathLength: { duration: reduce ? 0 : 0.75, delay: reduce ? 0 : index * 0.12, ease: [0.23, 1, 0.32, 1] },
                      opacity: { duration: reduce ? 0 : 0.3, delay: reduce ? 0 : index * 0.12 },
                    }}
                    style={{ transition: 'stroke 300ms cubic-bezier(0.23,1,0.32,1)' }} />
                </g>);
            })}
          </svg>

          {leftTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className="z-10 w-full max-w-[420px] place-self-center"
              style={{ gridColumn: 1, gridRow: index + 1 }}
              onMouseEnter={() => setHovered(tool.id)}
              onMouseLeave={() => setHovered(null)}
              initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: hovered && hovered !== tool.id ? 0.76 : 1, scale: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.12 + index * 0.08, ease: 'easeOut' }}>
              <ToolBadge tool={tool} active={hovered === tool.id} />
            </motion.div>
          ))}

          {rightTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className="z-10 w-full max-w-[420px] place-self-center"
              style={{ gridColumn: 3, gridRow: index + 1 }}
              onMouseEnter={() => setHovered(tool.id)}
              onMouseLeave={() => setHovered(null)}
              initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: hovered && hovered !== tool.id ? 0.76 : 1, scale: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.12 + index * 0.08, ease: 'easeOut' }}>
              <ToolBadge tool={tool} active={hovered === tool.id} />
            </motion.div>
          ))}

          <div className="soc-hub relative z-20 col-start-2 row-span-3 grid h-[230px] w-[230px] place-self-center place-items-center rounded-full">
            <div className="soc-hub__ring absolute inset-[-18px] rounded-full border border-white/10" aria-hidden />
            <div className="soc-hub__ring soc-hub__ring--inner absolute inset-[-7px] rounded-full border border-white/20" aria-hidden />
            <div className="relative flex flex-col items-center text-center">
              <ShieldCheckIcon className="mb-2 text-signal drop-shadow-[0_0_14px_rgba(255,51,79,0.9)]" size={44} strokeWidth={1.7} aria-hidden />
              <span className="font-sans text-5xl font-bold tracking-tight text-white">SOC</span>
              <span className="mt-1 font-sans text-xl text-fg">Security Lab</span>
              <span className="mt-3 h-1 w-12 rounded-full bg-white/70" aria-hidden />
            </div>
          </div>

          {linuxTool && (
            <motion.div
              className="z-10 w-full max-w-[420px] place-self-center"
              style={{ gridColumn: 2, gridRow: 4 }}
              onMouseEnter={() => setHovered(linuxTool.id)}
              onMouseLeave={() => setHovered(null)}
              initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: hovered && hovered !== linuxTool.id ? 0.76 : 1, scale: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.12, ease: 'easeOut' }}>
              <ToolBadge tool={linuxTool} active={hovered === linuxTool.id} />
            </motion.div>
          )}
        </Reveal>

        <div className="soc-hub relative mx-auto mb-8 grid h-48 w-48 place-items-center rounded-full lg:hidden">
          <div className="relative flex flex-col items-center text-center">
            <ShieldCheckIcon className="mb-1 text-signal" size={32} strokeWidth={1.7} aria-hidden />
            <span className="font-sans text-4xl font-bold tracking-tight text-white">SOC</span>
            <span className="font-sans text-base text-fg">Security Lab</span>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:hidden">
          {tools.map((tool, i) =>
          <Reveal key={tool.id} fromSide={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.04}>
              <ToolBadge tool={tool} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

type ToolBadgeProps = {
  tool: Tool;
};

function ToolBadge({ tool, active = false }: ToolBadgeProps & { active?: boolean }) {
  const Icon = tool.icon;
  return (
    <div className={`soc-tool-card ${active ? 'soc-tool-card--active' : ''}`}>
      <div className="soc-tool-card__inner flex min-h-[116px] items-center gap-5 px-7 py-5">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-signal">
          <Icon size={30} strokeWidth={1.7} aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block font-sans text-lg font-semibold leading-tight text-white">{tool.name}</span>
          <span className="mt-1 block text-sm leading-snug text-fg-muted">{tool.role}</span>
        </span>
      </div>
    </div>);
}