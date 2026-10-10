import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
import { experience } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading eyebrow="Experience" title="Professional Experience" />

        <div className="relative mt-14 pl-10 lg:grid lg:grid-cols-[240px_1fr] lg:gap-14 lg:pl-0">
          {/* timeline line */}
          <div aria-hidden className="absolute bottom-0 left-[11px] top-2 w-px overflow-hidden bg-white/[0.08] lg:left-[263px]">
            <div className="liquid-line-v absolute inset-0" />
          </div>
          <span
            aria-hidden
            className="absolute left-[5px] top-2 grid h-[13px] w-[13px] place-items-center rounded-full border border-signal/60 bg-ink shadow-[0_0_14px_rgba(63,207,159,0.5)] lg:left-[257px]">
            
            <span className="h-[5px] w-[5px] rounded-full bg-signal" />
          </span>

          <Reveal className="mb-6 lg:mb-0 lg:pt-0.5">
            <p className="font-mono text-sm tracking-[0.08em] text-fg">{experience.shortPeriod}</p>
            <p className="mt-1.5 font-mono text-xs tracking-[0.14em] text-fg-subtle">INTERNSHIP</p>
          </Reveal>

          <Reveal delay={0.08} className="lg:pl-10">
            <GlassCard className="p-7 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-[28px]">{experience.role}</h3>
                  <p className="mt-1.5 text-base text-signal">{experience.company}</p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-fg-muted">
                  <BriefcaseIcon size={18} strokeWidth={1.5} aria-hidden />
                </span>
              </div>
              <p className="sr-only">{experience.period}</p>
              <ul className="mt-8 grid gap-x-10 gap-y-4 border-t border-white/[0.06] pt-7 md:grid-cols-2">
                {experience.responsibilities.map((item) =>
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-fg-muted">
                    <span aria-hidden className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {item}
                  </li>
                )}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>);

}