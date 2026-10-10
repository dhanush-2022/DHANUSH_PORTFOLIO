import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { navIds, navItems } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { easeOut } from '../utils/motion';
import { StatusDot } from './StatusDot';

export function Navbar() {
  const active = useActiveSection(navIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ease-out ${
      solid ? 'border-white/[0.06] bg-ink/75 backdrop-blur-xl' : 'border-transparent bg-transparent'}`
      }>
      
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-6 px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-[13px] font-semibold tracking-tight text-fg">
            DK
          </span>
          <span className="sr-only">Dhanush K — back to top</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'}`
                  }>
                  
                  {isActive &&
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.05]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }} />

                  }
                  <span className="relative">{item.label}</span>
                </a>
              </li>);

          })}
        </ul>

        <div className="hidden items-center gap-2.5 whitespace-nowrap font-mono text-[10.5px] tracking-[0.14em] text-fg-muted xl:flex">
          <StatusDot />
          AVAILABLE FOR CYBERSECURITY OPPORTUNITIES
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-fg lg:hidden">
          
          {open ? <XIcon size={18} /> : <MenuIcon size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: easeOut }}
          className="border-t border-white/[0.06] px-6 pb-6 pt-3 lg:hidden">
          
            <ul className="flex flex-col">
              {navItems.map((item) =>
            <li key={item.id}>
                  <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-white/[0.05] py-3.5 text-base ${
                active === item.id ? 'text-fg' : 'text-fg-muted'}`
                }>
                
                    {item.label}
                    {active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
                  </a>
                </li>
            )}
            </ul>
            <div className="mt-5 flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.14em] text-fg-muted">
              <StatusDot />
              AVAILABLE FOR OPPORTUNITIES
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}