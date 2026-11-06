import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <Reveal fromSide="left" className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg ${
        centered ? 'justify-center' : ''}`
        }>
        
        <span aria-hidden className="h-px w-8 bg-signal" />
        {eyebrow}
      </p>
      <h2 className="display-heading mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>}
    </Reveal>);

}