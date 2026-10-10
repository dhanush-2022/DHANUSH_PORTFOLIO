import React from 'react';
import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-sm font-semibold text-fg">
            DK
          </span>
          <div>
            <p className="font-mono text-sm tracking-[0.14em] text-fg">DHANUSH K</p>
            <p className="text-sm text-fg-muted">{profile.roles.join(' | ')}</p>
          </div>
        </div>
        <p className="max-w-md text-[15px] italic text-fg-muted md:text-right">
          "Security is not a feature. It's a continuous operation."
        </p>
      </div>
      <div className="mx-auto max-w-[1320px] px-6 pb-10 lg:px-10">
        <p className="font-mono text-[11px] tracking-[0.14em] text-fg-subtle">© 2026 DHANUSH K · SALEM, INDIA</p>
      </div>
    </footer>);

}