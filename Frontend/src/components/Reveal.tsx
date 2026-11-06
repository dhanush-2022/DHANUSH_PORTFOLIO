import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  fromSide?: 'left' | 'right';
};

export function Reveal({ children, className, delay = 0, y = 12, fromSide = 'right' }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: fromSide === 'left' ? -56 : 56, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease: easeOut }}>
      
      {children}
    </motion.div>);

}