import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const floatingNodes = [
{ left: '8%', top: '18%', delay: '0s' },
{ left: '86%', top: '12%', delay: '-4s' },
{ left: '72%', top: '64%', delay: '-8s' },
{ left: '18%', top: '72%', delay: '-2s' },
{ left: '48%', top: '38%', delay: '-11s' },
{ left: '92%', top: '86%', delay: '-6s' }];


export function Background() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const handle = (e: PointerEvent) => {
      x.set(e.clientX - 260);
      y.set(e.clientY - 260);
    };
    window.addEventListener('pointermove', handle, { passive: true });
    return () => window.removeEventListener('pointermove', handle);
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="liquid-blob absolute -left-[12%] -top-[14%] h-[65vh] w-[65vh] bg-signal/[0.09]" />
      <div
        className="liquid-blob absolute -right-[14%] top-[18%] h-[75vh] w-[75vh] bg-aqua/[0.07]"
        style={{ animationDelay: '-10s', animationDuration: '36s' }} />
      
      <div
        className="liquid-blob absolute -bottom-[20%] left-[25%] h-[70vh] w-[70vh] bg-steel/[0.07]"
        style={{ animationDelay: '-18s', animationDuration: '42s' }} />
      
      <div className="bg-grid absolute inset-0" />
      {floatingNodes.map((node) =>
      <span
        key={`${node.left}-${node.top}`}
        className="float-node absolute h-1 w-1 rounded-full bg-aqua/70"
        style={{ left: node.left, top: node.top, animationDelay: node.delay }} />

      )}
      <div className="noise absolute -inset-[50%]" />
      <motion.div
        style={{ x: sx, y: sy, background: 'radial-gradient(circle, rgba(63,207,159,0.07), transparent 62%)' }}
        className="absolute left-0 top-0 hidden h-[520px] w-[520px] rounded-full md:block" />
      
    </div>);

}