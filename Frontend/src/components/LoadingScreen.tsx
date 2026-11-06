import { useEffect, useState } from 'react';

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const loadingDuration = prefersReducedMotion ? 200 : 2100;
    const exitDuration = prefersReducedMotion ? 250 : 650;

    const exitTimer = window.setTimeout(() => setIsExiting(true), loadingDuration);
    const completeTimer = window.setTimeout(onComplete, loadingDuration + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen${isExiting ? ' loading-screen--exiting' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <video
        className="loading-screen__video"
        src={`${import.meta.env.BASE_URL}portfolio-loading.mp4`}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="loading-screen__grid" aria-hidden="true" />
      <div className="loading-screen__glow" aria-hidden="true" />
      <div className="loading-screen__content">
        <div className="loading-screen__circle">
          <svg className="loading-screen__ring" viewBox="0 0 100 100" aria-hidden="true">
            <circle className="loading-screen__ring-track" cx="50" cy="50" r="43" />
            {Array.from({ length: 8 }, (_, index) => (
              <circle
                key={index}
                className="loading-screen__shard"
                cx="50"
                cy="50"
                r="43"
                strokeDashoffset={index * 33.75}
              />
            ))}
            <circle className="loading-screen__ring-progress" cx="50" cy="50" r="43" />
          </svg>
          <div className="loading-screen__core">
            <div className="loading-screen__mark" aria-hidden="true">DK</div>
            <p className="loading-screen__eyebrow">Cybersecurity portfolio</p>
            <h1 className="loading-screen__title">Dhanush K</h1>
            <p className="loading-screen__status">
              <span className="loading-screen__dot" aria-hidden="true" />
              Initializing portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
