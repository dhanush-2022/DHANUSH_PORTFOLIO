import { DownloadIcon, FileTextIcon } from 'lucide-react';
import { getResumeLink } from '../utils/resume';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';

export function Resume() {
  const resume = getResumeLink();

  return (
    <section id="resume" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal fromSide="left">
          <GlassCard className="flex flex-col items-start justify-between gap-8 p-7 sm:flex-row sm:items-center sm:p-10">
            <div className="flex items-start gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-signal/20 bg-signal/[0.08] text-signal">
                <FileTextIcon size={20} strokeWidth={1.6} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg">Resume</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-fg sm:text-3xl">Experience, skills &amp; education</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted">Download my resume for a concise overview of my cybersecurity experience and training.</p>
              </div>
            </div>
            <MagneticButton href={resume.href} download={resume.download} className="shrink-0">
              <DownloadIcon size={16} aria-hidden />
              Download Resume
            </MagneticButton>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
