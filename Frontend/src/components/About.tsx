import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRightIcon, DatabaseIcon, ServerIcon } from 'lucide-react';
import { aboutPipeline, trainingAreas } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % aboutPipeline.length), 1800);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHeading eyebrow="Profile" title="About Me" />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            <p>
              I'm a cybersecurity professional with hands-on training in Security Operations Center practices — monitoring,
              detecting, and investigating security events across networks, hosts, and applications.
            </p>
            <p>
              My practical work centers on <span className="text-fg">Wazuh SIEM</span> and{' '}
              <span className="text-fg">Cowrie honeypots</span>: deploying a honeypot in a virtualized SOC lab, capturing
              attacker activity, and analysing the resulting events through centralized SIEM monitoring.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <GlassCard tilt className="p-7 sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Hands-on training</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {trainingAreas.map((area) =>
              <li key={area} className="flex items-start gap-3 text-[15px] text-fg">
                  <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {area}
                </li>
              )}
            </ul>

            <div className="my-8 h-px bg-white/[0.07]" />

            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Practical focus</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
              { name: 'Wazuh SIEM', note: 'Centralized monitoring', icon: DatabaseIcon },
              { name: 'Cowrie Honeypot', note: 'Attacker interaction capture', icon: ServerIcon }].
              map(({ name, note, icon: Icon }) =>
              <div key={name} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-signal/10 text-signal">
                    <Icon size={17} strokeWidth={1.6} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-mono text-[13px] text-fg">{name}</span>
                    <span className="block text-xs text-fg-muted">{note}</span>
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-1 rounded-xl border border-white/[0.06] bg-ink/40 p-1.5" aria-label="Monitor, detect, investigate, respond">
              {aboutPipeline.map((stage, i) =>
              <React.Fragment key={stage}>
                  <span className="relative flex-1 rounded-lg px-2 py-2.5 text-center">
                    {step === i &&
                  <motion.span
                    layoutId="about-pipe"
                    className="liquid-node absolute inset-0 border border-signal/30 bg-signal/10"
                    transition={{ type: 'spring', stiffness: 220, damping: 28 }} />

                  }
                    <span
                    className={`relative font-mono text-[11px] tracking-[0.16em] transition-colors duration-300 ${
                    step === i ? 'text-signal' : 'text-fg-muted'}`
                    }>
                    
                      {stage.toUpperCase()}
                    </span>
                  </span>
                  {i < aboutPipeline.length - 1 &&
                <ChevronRightIcon size={14} className="hidden shrink-0 text-fg-subtle sm:block" aria-hidden />
                }
                </React.Fragment>
              )}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>);

}