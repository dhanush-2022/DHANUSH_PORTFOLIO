import { StatusDot } from './StatusDot';

export function SocRadar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div aria-hidden className="absolute inset-[18%] rounded-full bg-aqua/[0.08] blur-3xl" />

      <img
        src={`${import.meta.env.BASE_URL}security-analyst.png`}
        alt="A cybersecurity analyst monitoring blue security dashboards"
        className="relative z-10 h-full w-full object-contain mix-blend-screen opacity-80"
      />

      <div className="glass absolute bottom-[6%] left-0 z-20 rounded-xl px-4 py-3 sm:left-[2%]">
        <p className="flex items-center gap-2 font-mono text-[10.5px] font-medium tracking-[0.16em] text-fg">
          <StatusDot />
          SECURITY OPERATIONS
        </p>
        <p className="mt-1 pl-4 font-mono text-[10.5px] tracking-[0.16em] text-fg-muted">SOC ANALYST</p>
      </div>
    </div>
  );
}
