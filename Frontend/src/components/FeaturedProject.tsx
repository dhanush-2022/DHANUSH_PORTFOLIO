import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { flowStages, projectTags } from '../data/portfolio';
import { easeOut } from '../utils/motion';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function FeaturedProject() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % flowStages.length), 2800);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  const stage = flowStages[active];
  const StageIcon = stage.icon;

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading eyebrow="Featured Project" title="From attacker activity to analysed threat." />

        <Reveal delay={0.1} className="mt-14">
          <GlassCard interactive={false} className="grid gap-12 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-14">
            <div className="flex flex-col">
              <p className="font-mono text-xs tracking-[0.16em] text-signal">COWRIE + WAZUH SOC LAB</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-fg sm:text-[40px]">
                Honeypot-Based Threat Detection &amp; Log Analysis
              </h3>
              <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-[17px]">
                Designed and deployed a Linux-based SSH honeypot using Cowrie in a virtualized SOC laboratory environment.
                Simulated attacker activity from Kali Linux, collected honeypot logs, and integrated security events into
                Wazuh SIEM for centralized monitoring and incident analysis.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
                {projectTags.map((tag) =>
                <li key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[11.5px] text-fg-muted">
                    {tag}
                  </li>
                )}
              </ul>

              <div className="mt-10 rounded-2xl border border-white/[0.07] bg-ink/50 p-6 lg:mt-auto" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22, ease: easeOut }}>
                    
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle">
                        STAGE {String(active + 1).padStart(2, '0')} / {String(flowStages.length).padStart(2, '0')}
                      </p>
                      <StageIcon size={16} strokeWidth={1.6} className="text-signal" aria-hidden />
                    </div>
                    <p className="mt-3 font-mono text-[15px] font-medium tracking-[0.06em] text-fg">{stage.name.toUpperCase()}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{stage.detail}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Detection pipeline</p>
              <ol
                className="relative space-y-1.5"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}>
                
                <div aria-hidden className="absolute bottom-6 left-[24px] top-6 w-px overflow-hidden bg-white/[0.08]">
                  <div className="liquid-line-v absolute inset-0" />
                </div>
                {flowStages.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === active;
                  const passed = i < active;
                  return (
                    <li key={s.name}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => {
                          setPaused(true);
                          setActive(i);
                        }}
                        onBlur={() => setPaused(false)}
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className="relative flex w-full items-center gap-4 rounded-xl py-1.5 pr-3 text-left">
                        
                        {isActive &&
                        <motion.span
                          layoutId="flow-active"
                          className="absolute inset-0 rounded-xl border border-white/[0.06] bg-white/[0.03]"
                          transition={{ type: 'spring', stiffness: 320, damping: 32 }} />

                        }
                        <span
                          className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-[border-color,background-color,box-shadow,color] duration-300 ${
                          isActive ?
                          'border-signal/50 bg-[#0f2a22] text-signal shadow-[0_0_26px_-6px_rgba(63,207,159,0.55)]' :
                          passed ?
                          'border-white/10 bg-ink-800 text-fg-muted' :
                          'border-white/[0.07] bg-ink-900 text-fg-subtle'}`
                          }>
                          
                          <Icon size={18} strokeWidth={1.5} aria-hidden />
                        </span>
                        <span className="relative">
                          <span className="block font-mono text-[10.5px] tracking-[0.18em] text-fg-subtle">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={`block font-mono text-sm tracking-[0.1em] transition-colors duration-300 ${
                            isActive ? 'text-fg' : 'text-fg-muted'}`
                            }>
                            
                            {s.name.toUpperCase()}
                          </span>
                        </span>
                      </button>
                    </li>);

                })}
              </ol>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>);

}