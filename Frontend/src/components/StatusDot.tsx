import React from 'react';

type StatusDotProps = {
  className?: string;
};

export function StatusDot({ className = '' }: StatusDotProps) {
  return (
    <span aria-hidden className={`relative inline-flex h-2 w-2 shrink-0 ${className}`}>
      <span className="pulse-soft absolute inset-0 rounded-full bg-signal" />
      <span className="relative h-2 w-2 rounded-full bg-signal" />
    </span>);

}