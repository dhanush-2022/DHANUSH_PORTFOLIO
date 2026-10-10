import React from 'react';

export function SectionDivider() {
  return (
    <div aria-hidden className="mx-auto max-w-[1320px] px-6 lg:px-10">
      <div className="relative h-px w-full overflow-hidden bg-white/[0.05]">
        <div className="liquid-line absolute inset-0 opacity-40" />
      </div>
    </div>);

}