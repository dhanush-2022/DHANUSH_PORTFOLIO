import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { easeOut } from '../utils/motion';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  tilt?: boolean;
};

export function GlassCard({ children, className = '', interactive = true, tilt = false }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 140, damping: 20 });
  const springRy = useSpring(ry, { stiffness: 140, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    if (tilt && !reduce) {
      ry.set((px - 0.5) * 4);
      rx.set(-(py - 0.5) * 4);
    }
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={interactive ? handleMove : undefined}
      onMouseLeave={interactive ? handleLeave : undefined}
      style={tilt ? { rotateX: springRx, rotateY: springRy, transformPerspective: 1200 } : undefined}
      whileHover={interactive && !reduce ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: easeOut }}
      className={`glass rounded-2xl ${interactive ? 'glass-interactive' : ''} ${className}`}>
      
      {children}
    </motion.div>);

}