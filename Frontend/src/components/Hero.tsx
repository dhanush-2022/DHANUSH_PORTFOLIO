import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, DownloadIcon } from 'lucide-react';
import { profile } from '../data/portfolio';
import { easeOut } from '../utils/motion';
import { getResumeLink } from '../utils/resume';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const reduce = useReducedMotion();
  const resume = getResumeLink();

  const item = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: easeOut }
  });

  return (
    <section id="home" className="relative pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10">
        <div>
          <motion.p {...item(0.05)} className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-[0.2em] text-fg-muted">
            <span className="text-signal">SOC ANALYST</span>
            <span aria-hidden className="h-px w-6 bg-white/20" />
            <span>CYBERSECURITY ANALYST</span>
          </motion.p>

          <motion.h1
            {...item(0.12)}
            className="mt-6 text-6xl font-semibold leading-[0.95] tracking-[-0.045em] text-fg sm:text-7xl lg:text-[104px]">
            {profile.name}
          </motion.h1>

          <motion.p
            {...item(0.2)}
            className="mt-8 max-w-2xl text-2xl font-medium leading-snug tracking-[-0.02em] text-fg sm:text-[32px]">
            Defending Digital Infrastructure Through{' '}
            <span className="text-signal">Security Operations</span>
          </motion.p>

          <motion.p {...item(0.28)} className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            Cybersecurity professional with hands-on experience in SOC monitoring, SIEM, vulnerability assessment, network
            security, threat hunting, incident investigation, and practical security operations.
          </motion.p>

          <motion.div {...item(0.36)} className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects">
              View My Projects
              <ArrowRightIcon size={16} aria-hidden />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
            <a
              href={resume.href}
              download={resume.download || undefined}
              className="group ml-1 inline-flex h-12 items-center gap-2 px-2 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg">
              <DownloadIcon size={15} aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-y-0.5" />
              <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-signal/60">
                Download Resume
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: easeOut }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] shadow-[0_0_60px_rgba(18,94,84,0.18)]">
            <img
<<<<<<< HEAD
              src="/Professional Portrait with Crossed Arms.png"
              alt="Dhanush portrait"
              className="h-[540px] w-auto object-cover max-w-full sm:h-[620px]"
            />
=======
  src={`${import.meta.env.BASE_URL}Professional Portrait with Crossed Arms.png`}
  alt="Dhanush portrait"
  className="h-[540px] w-auto max-w-full object-cover sm:h-[620px]"
/>
>>>>>>> 79a189032710b2f2c955064a2f9fd2d4eff4919e
          </div>
        </motion.div>
      </div>
    </section>);

}