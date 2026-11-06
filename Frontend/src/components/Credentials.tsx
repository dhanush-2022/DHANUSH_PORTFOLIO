import { AwardIcon } from 'lucide-react';
import { certification } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Credentials() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <div className="mt-14">
          <Reveal>
            <GlassCard className="flex flex-col p-7 sm:p-10">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">Certification</p>
                <AwardIcon size={20} strokeWidth={1.5} className="text-aqua" aria-hidden />
              </div>
              <h3 className="display-heading mt-8 text-2xl font-semibold tracking-[-0.02em] sm:text-[28px]">{certification.title}</h3>
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