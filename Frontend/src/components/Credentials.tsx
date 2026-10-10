import React from 'react';
import { AwardIcon, GraduationCapIcon, MapPinIcon } from 'lucide-react';
import { certification, education } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Credentials() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading eyebrow="Credentials" title="Education & Certifications" />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <GlassCard className="flex h-full flex-col p-7 sm:p-10">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Education</p>
                <GraduationCapIcon size={20} strokeWidth={1.5} className="text-aqua" aria-hidden />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-[28px]">{education.degree}</h3>
              <p className="mt-2 text-lg text-fg-muted">{education.field}</p>
              <div className="min-h-10 flex-1" aria-hidden />
              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/[0.06] pt-6">
                <div>
                  <p className="text-[15px] font-medium text-fg">{education.institution}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-fg-muted">
                    <MapPinIcon size={13} aria-hidden />
                    {education.location}
                  </p>
                </div>
                <p className="font-mono text-sm tracking-[0.08em] text-signal">{education.period}</p>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <GlassCard className="flex h-full flex-col p-7 sm:p-10">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Certification</p>
                <AwardIcon size={20} strokeWidth={1.5} className="text-aqua" aria-hidden />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-[28px]">{certification.title}</h3>
              <p className="mt-2 text-lg text-fg-muted">{certification.issuer}</p>
              <div className="mt-10 border-t border-white/[0.06] pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Training areas</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {certification.areas.map((area) =>
                  <li
                    key={area}
                    className="rounded-full border border-signal/20 bg-signal/[0.06] px-3 py-1.5 font-mono text-[12px] text-fg">
                    
                      {area}
                    </li>
                  )}
                </ul>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>);

}