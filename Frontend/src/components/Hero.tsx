import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { MotionStyle } from 'framer-motion';
import { ArrowRightIcon, DownloadIcon } from 'lucide-react';
import { profile } from '../data/portfolio';
import { easeOut } from '../utils/motion';
import { getResumeLink } from '../utils/resume';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const reduce = useReducedMotion();
  const resume = getResumeLink();
  const ref = useRef<HTMLElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);
  const [spotlightActive, setSpotlightActive] = useState(false);
  const rawSpotX = useMotionValue(0);
  const rawSpotY = useMotionValue(0);
  const spotX = useSpring(rawSpotX, { stiffness: 340, damping: 34, mass: 0.35 });
  const spotY = useSpring(rawSpotY, { stiffness: 340, damping: 34, mass: 0.35 });
  const spotXCss = useMotionTemplate`${spotX}px`;
  const spotYCss = useMotionTemplate`${spotY}px`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.85], [0, 72]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  function setSpotlightPosition(x: number, y: number) {
    if (reduce) {
      spotX.jump(x);
      spotY.jump(y);
      return;
    }
    rawSpotX.set(x);
    rawSpotY.set(y);
  }

  function moveSpotlight(clientX: number, clientY: number) {
    const bounds = typographyRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setSpotlightPosition(
      Math.max(0, Math.min(clientX - bounds.left, bounds.width)),
      Math.max(0, Math.min(clientY - bounds.top, bounds.height)),
    );
    setSpotlightActive(true);
  }

  function handleTypographyKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const bounds = typographyRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const step = event.shiftKey ? 40 : 20;
    let x = spotlightActive ? spotX.get() : bounds.width / 2;
    let y = spotlightActive ? spotY.get() : bounds.height / 2;
    switch (event.key) {
      case 'ArrowLeft':
        x = Math.max(0, x - step);
        break;
      case 'ArrowRight':
        x = Math.min(bounds.width, x + step);
        break;
      case 'ArrowUp':
        y = Math.max(0, y - step);
        break;
      case 'ArrowDown':
        y = Math.min(bounds.height, y + step);
        break;
      case 'Enter':
      case ' ':
        x = bounds.width / 2;
        y = bounds.height / 2;
        break;
      case 'Escape':
        setSpotlightActive(false);
        return;
      default:
        return;
    }
    event.preventDefault();
    setSpotlightPosition(x, y);
    setSpotlightActive(true);
  }

  const item = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease: easeOut }
  });

  return (
    <section ref={ref} id="home" className="hero-section relative flex min-h-[min(900px,100svh)] items-center pb-20 pt-28 lg:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10">
        <motion.div style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}>
          <motion.p {...item(0.05)} className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-[0.2em] text-fg-muted">
            <span className="text-fg text-xl font-semibold tracking-[0.14em] sm:text-2xl">SOC ANALYST</span>
            <span aria-hidden className="h-px w-6 bg-white/20" />
            <span>CYBERSECURITY ANALYST</span>
          </motion.p>

          <motion.div
            {...item(0.12)}
            ref={typographyRef}
            className={`hero-typography mt-6 ${spotlightActive ? 'has-spotlight' : ''}`}
            style={{
              '--spot-x': spotXCss,
              '--spot-y': spotYCss,
            } as MotionStyle}
            onPointerMove={(event) => moveSpotlight(event.clientX, event.clientY)}
            onPointerLeave={() => setSpotlightActive(false)}
            onFocus={() => {
              const bounds = typographyRef.current?.getBoundingClientRect();
              if (bounds) {
                setSpotlightPosition(bounds.width / 2, bounds.height / 2);
                setSpotlightActive(true);
              }
            }}
            onKeyDown={handleTypographyKeyDown}
            tabIndex={0}
            role="group"
            aria-label="Interactive identity typography. Use arrow keys to move the reveal, Enter to center it, and Escape to hide it."
          >
            <div className="hero-identity" aria-hidden="true">
              <span className="hero-identity__name">DHANUSH</span>
              <span className="hero-identity__roles">
                <span>ETHICAL HACKER</span>
              </span>
              <span className="hero-identity__description">
                Experienced in ethical hacking methodologies, reconnaissance, vulnerability identification, web application
                security testing, penetration testing fundamentals, and security assessment using industry-standard tools
                and techniques.
              </span>
            </div>
            <div className="hero-original">
              <h1 className="hero-title">
                {profile.name}
              </h1>
              <motion.p
                {...item(0.2)}
                className="hero-original__tagline mt-8 max-w-2xl text-2xl font-medium leading-snug tracking-[-0.02em] text-fg sm:text-[32px]">
                Defending Digital Infrastructure Through{' '}
                <span className="text-fg">Security Operations</span>
              </motion.p>
              <motion.p {...item(0.28)} className="hero-original__description mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
                Cybersecurity professional with hands-on experience in SOC monitoring, SIEM, vulnerability assessment,
                network security, threat hunting, incident investigation, and practical security operations.
              </motion.p>
            </div>
            <span className="sr-only">
              DHANUSH ETHICAL HACKER. Cybersecurity professional with hands-on experience in SOC monitoring, SIEM,
              vulnerability assessment, network security, threat hunting, incident investigation, and practical security
              operations. Cursor reveal: Experienced in ethical hacking methodologies, reconnaissance, vulnerability
              identification, web application security testing, penetration testing fundamentals, and security
              assessment using industry-standard tools and techniques.
            </span>
          </motion.div>

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
              className="glass-button group ml-1 inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg">
              <DownloadIcon size={15} aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-y-0.5" />
              <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-signal/60">
                Download Resume
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.25, ease: easeOut }}
          style={reduce ? undefined : { y: portraitY }}
          className="hero-portrait-wrap flex justify-center lg:justify-end"
        >
          <div className={`hero-portrait relative ${spotlightActive ? 'is-identity-active' : ''}`}>
            <div className="hero-portrait__halo" aria-hidden />
            <div className="hero-portrait__shadow" aria-hidden />
            <img
              src={`${import.meta.env.BASE_URL}Professional Portrait with Crossed Arms.png`}
              alt="Dhanush portrait"
              className="hero-portrait__image hero-portrait__base relative z-[1] object-contain"
            />
            <img
              src={`${import.meta.env.BASE_URL}Dhanush Hero Reveal.png`}
              alt=""
              aria-hidden="true"
              className="hero-portrait__image hero-portrait__reveal absolute inset-0 z-[2] object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>);

}