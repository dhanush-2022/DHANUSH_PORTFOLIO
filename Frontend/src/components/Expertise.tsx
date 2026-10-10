import React from 'react';
import { skills } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Expertise() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Security Expertise"
          description="Core disciplines practiced across SOC monitoring, testing, and investigation work." />
        
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.title} delay={Math.min(i * 0.04, 0.3)} className="h-full">
                <GlassCard className="group flex h-full flex-col p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-aqua transition-[color,border-color,box-shadow] duration-300 group-hover:border-signal/30 group-hover:text-signal group-hover:shadow-[0_0_18px_-6px_rgba(63,207,159,0.6)]">
                    <Icon size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-fg">{skill.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-fg-muted">{skill.description}</p>
                </GlassCard>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}