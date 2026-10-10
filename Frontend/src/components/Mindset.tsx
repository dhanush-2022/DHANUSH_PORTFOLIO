import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { mindsetStages } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Mindset() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % mindsetStages.length), 2400);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  return (
    <section aria-label="Security Operations Mindset" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Methodology"
          title="Security Operations Mindset"
          description="Security operations is a continuous cycle, not a checklist. Every investigation feeds back into how the next threat is observed and detected."
          align="center" />
        

        <Reveal delay={0.1}>
          <ol
            className="relative mt-16 grid gap-2 lg:grid-cols-6 lg:gap-4"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>
            
            {/* horizontal line (desktop) */}
            <div aria-hidden className="absolute left-[8.33%] right-[8.33%] top-8 hidden h-px overflow-hidden bg-white/[0.08] lg:block">
              <div className="liquid-line absolute inset-0" />
            </div>
            {/* vertical line (mobile) */}
            <div aria-hidden className="absolute bottom-8 left-8 top-8 w-px overflow-hidden bg-white/[0.08] lg:hidden">
              <div className="liquid-line-v absolute inset-0" />
            </div>

            {mindsetStages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = active === i;
              return (
                <li key={stage.name}>
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
                    className="flex w-full items-start gap-5 rounded-2xl p-1 text-left lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                    
                    <span className="relative grid h-16 w-16 shrink-0 place-items-center">
                      {isActive &&
                      <motion.span
                        layoutId="mindset-liquid"
                        className="liquid-node absolute inset-0 border border-signal/40 bg-[#0f2a22] shadow-[0_0_30px_-8px_rgba(63,207,159,0.55)]"
                        transition={{ type: 'spring', stiffness: 180, damping: 24 }} />

                      }
                      <span
                        className={`relative grid h-14 w-14 place-items-center rounded-full transition-[background-color,border-color,color] duration-300 ${
                        isActive ? 'text-signal' : 'border border-white/10 bg-ink-900 text-fg-muted'}`
                        }>
                        
                        <Icon size={20} strokeWidth={1.5} aria-hidden />
                      </span>
                    </span>
                    <span className="pt-2 lg:pt-0">
                      <span className="block font-mono text-[10.5px] tracking-[0.2em] text-fg-subtle lg:mt-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`mt-1 block font-mono text-[15px] font-medium tracking-[0.14em] transition-colors duration-300 ${
                        isActive ? 'text-fg' : 'text-fg-muted'}`
                        }>
                        
                        {stage.name.toUpperCase()}
                      </span>
                      <span
                        className={`mt-2 block text-sm leading-relaxed transition-colors duration-300 lg:px-2 ${
                        isActive ? 'text-fg-muted' : 'text-fg-subtle'}`
                        }>
                        
                        {stage.description}
                      </span>
                    </span>
                  </button>
                </li>);

            })}
          </ol>
        </Reveal>
      </div>
    </section>);

}