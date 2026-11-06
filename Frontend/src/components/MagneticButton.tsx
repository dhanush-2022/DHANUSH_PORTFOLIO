import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  download?: boolean | string;
  className?: string;
};

export function MagneticButton({ href, children, variant = 'primary', download, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const styles =
  variant === 'primary' ?
  'glass-button glass-button--accent text-white' :
  'glass-button text-fg';

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download || undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      style={{ x: sx, y: sy }}
      className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-[background-color,border-color,box-shadow] duration-200 ease-out ${styles} ${className}`}>
      
      {children}
    </motion.a>);

}