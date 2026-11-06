import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const floatingNodes = [
{ left: '8%', top: '18%', delay: '0s' },
{ left: '86%', top: '12%', delay: '-4s' },
{ left: '72%', top: '64%', delay: '-8s' },
{ left: '18%', top: '72%', delay: '-2s' },
{ left: '48%', top: '38%', delay: '-11s' },
{ left: '92%', top: '86%', delay: '-6s' }];


export function Background() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pastHero, setPastHero] = useState(false);
  const { scrollYProgress } = useScroll();
  const cyanOpacity = useTransform(scrollYProgress, [0, 0.25, 0.58, 1], [0.85, 0.4, 1, 0.55]);
  const blueOpacity = useTransform(scrollYProgress, [0, 0.35, 0.72, 1], [0.55, 1, 0.4, 0.75]);
  const violetOpacity = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [0.35, 0.55, 1, 0.45]);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  const pointerPresent = useMotionValue(0);
  const spotlightOpacity = useSpring(pointerPresent, { stiffness: 70, damping: 24 });

  useEffect(() => {
    const updateVideoVisibility = () => {
      const hero = document.getElementById('home');
      setPastHero(hero ? hero.getBoundingClientRect().bottom <= 0 : window.scrollY > window.innerHeight);
    };

    updateVideoVisibility();
    window.addEventListener('scroll', updateVideoVisibility, { passive: true });
    window.addEventListener('resize', updateVideoVisibility);
    return () => {
      window.removeEventListener('scroll', updateVideoVisibility);
      window.removeEventListener('resize', updateVideoVisibility);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!pastHero || reduce) {
      video.pause();
      return;
    }

    video.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      console.error('Background video playback failed:', error);
    });
  }, [pastHero, reduce]);

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    const handle = (e: PointerEvent) => {
      x.set(e.clientX - 260);
      y.set(e.clientY - 260);
      pointerPresent.set(1);
    };
    const handleLeave = () => pointerPresent.set(0);
    window.addEventListener('pointermove', handle, { passive: true });
    window.addEventListener('pointerleave', handleLeave);
    return () => {
      window.removeEventListener('pointermove', handle);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, [pointerPresent, reduce, x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      {!reduce && (
        <>
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${pastHero ? 'opacity-30' : 'opacity-0'}`}
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            <source src={`${import.meta.env.BASE_URL}portfolio-background.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-ink/65" />
        </>
      )}
      <motion.div style={{ opacity: reduce ? 0.65 : cyanOpacity }} className="ambient-light ambient-light--cyan absolute -left-[12%] -top-[14%] h-[65vh] w-[65vh]" />
      <motion.div
        style={{ opacity: reduce ? 0.55 : blueOpacity, animationDelay: '-10s', animationDuration: '36s' }}
        className="ambient-light ambient-light--blue absolute -right-[14%] top-[18%] h-[75vh] w-[75vh]"
      />
      
      <motion.div
        style={{ opacity: reduce ? 0.45 : violetOpacity, animationDelay: '-18s', animationDuration: '42s' }}
        className="ambient-light ambient-light--violet absolute -bottom-[20%] left-[25%] h-[70vh] w-[70vh]"
      />

      <div className="bg-grid absolute inset-0" />
      {floatingNodes.map((node) =>
      <span
        key={`${node.left}-${node.top}`}
        className="float-node absolute h-1 w-1 rounded-full bg-aqua/70"
        style={{ left: node.left, top: node.top, animationDelay: node.delay }} />

      )}
      <div className="noise absolute -inset-[50%]" />
      <motion.div
        style={{ x: sx, y: sy, opacity: spotlightOpacity }}
        className="cursor-spotlight absolute left-0 top-0 hidden h-[520px] w-[520px] rounded-full md:block" />
      
    </div>);

}