import React from 'react';
import { projectComponents } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';

export function ProjectDetails() {
  return (
    <section aria-labelledby="project-details-title" className="relative pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="project-details-title" className="text-2xl font-semibold tracking-[-0.02em] text-fg sm:text-3xl">
            Project Details
          </h2>
          <p className="font-mono text-xs tracking-[0.14em] text-fg-subtle">THREE LAYERS OF THE LAB</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projectComponents.map((component, i) => {
            const Icon = component.icon;
            return (
              <Reveal key={component.title} delay={i * 0.06} className="h-full">
                <GlassCard tilt className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-signal/10 text-signal">
                      <Icon size={19} strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-fg-subtle">{component.label.toUpperCase()}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-fg">{component.title}</h3>
                  <ul className="mt-5 space-y-3 border-t border-white/[0.06] pt-5">
                    {component.points.map((point) =>
                    <li key={point} className="flex items-start gap-3 text-[15px] text-fg-muted">
                        <span aria-hidden className="mt-[10px] h-px w-3 shrink-0 bg-signal/70" />
                        {point}
                      </li>
                    )}
                  </ul>
                </GlassCard>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}