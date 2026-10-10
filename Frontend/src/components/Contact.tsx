import React, { useState } from 'react';
import { CheckIcon, CopyIcon, DownloadIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { profile } from '../data/portfolio';
import { getResumeLink } from '../utils/resume';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';
import { StatusDot } from './StatusDot';

export function Contact() {
  const resume = getResumeLink();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <GlassCard interactive={false} className="grid gap-12 rounded-3xl p-7 sm:p-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:p-16">
            <div className="flex flex-col">
              <p className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-signal">
                <StatusDot />
                AVAILABLE FOR CYBERSECURITY OPPORTUNITIES
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl">
                Let's Secure
                <br />
                What Matters.
              </h2>
              <div className="mt-10 flex flex-wrap gap-3 lg:mt-auto lg:pt-12">
                <MagneticButton href={`mailto:${profile.email}`}>
                  <MailIcon size={16} aria-hidden />
                  Email Me
                </MagneticButton>
                <MagneticButton href={resume.href} download={resume.download} variant="secondary">
                  <DownloadIcon size={16} aria-hidden />
                  Download Resume
                </MagneticButton>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:border-l lg:border-white/[0.07] lg:pl-12">
              <div>
                <p className="text-xl font-semibold tracking-[-0.01em] text-fg">{profile.name}</p>
                <p className="mt-1 text-[15px] text-fg-muted">{profile.roles.join(' | ')}</p>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-fg-muted">
                  <MapPinIcon size={14} aria-hidden />
                  {profile.location}
                </p>
              </div>

              <dl className="space-y-5 border-t border-white/[0.07] pt-6">
                <div>
                  <dt className="font-mono text-[11px] tracking-[0.2em] text-fg-subtle">EMAIL</dt>
                  <dd className="mt-2 flex items-center justify-between gap-3">
                    <a href={`mailto:${profile.email}`} className="break-all text-[15px] text-fg transition-colors duration-200 hover:text-signal">
                      {profile.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? 'Email copied' : 'Copy email address'}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.08] text-fg-muted transition-colors duration-200 hover:border-white/20 hover:text-fg">
                      
                      {copied ? <CheckIcon size={14} className="text-signal" /> : <CopyIcon size={14} />}
                    </button>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] tracking-[0.2em] text-fg-subtle">PHONE</dt>
                  <dd className="mt-2">
                    <a href={profile.phoneHref} className="inline-flex items-center gap-2 text-[15px] text-fg transition-colors duration-200 hover:text-signal">
                      <PhoneIcon size={14} aria-hidden className="text-fg-muted" />
                      {profile.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>);

}