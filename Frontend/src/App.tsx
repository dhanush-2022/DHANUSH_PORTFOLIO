import { useCallback, useState } from 'react';
import { About } from './components/About';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Credentials } from './components/Credentials';
import { Experience } from './components/Experience';
import { Expertise } from './components/Expertise';
import { FeaturedProject } from './components/FeaturedProject';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Mindset } from './components/Mindset';
import { Navbar } from './components/Navbar';
import { ProjectDetails } from './components/ProjectDetails';
import { SocRadar } from './components/SocRadar';
import { GlassCard } from './components/GlassCard';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';
import { SectionDivider } from './components/SectionDivider';
import { Toolkit } from './components/Toolkit';
import { Resume } from './components/Resume';
import { LoadingScreen } from './components/LoadingScreen';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={finishLoading} />}
      <div className="portfolio-shell relative isolate min-h-screen w-full overflow-x-clip bg-ink font-sans text-fg">
        <Background />
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Expertise />
          <Toolkit />
          <SectionDivider />
          <FeaturedProject />
          <ProjectDetails />
          <SectionDivider />
          <section id="soc" className="relative py-24 lg:py-32">
            <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-10">
              <div>
                <SectionHeading
                  eyebrow="Security Operations Center"
                  title="SOC Analyst Focus"
                  description="Monitoring, detecting, and investigating security events across networks, hosts, and applications." />
                <Reveal fromSide="right" delay={0.1} className="mt-8">
                  <GlassCard className="p-6 sm:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">Hands-on lab</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-fg">Cowrie + Wazuh</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
                      Deployed a Cowrie honeypot in a virtualized SOC lab, captured attacker activity, and analyzed the resulting events through Wazuh SIEM.
                    </p>
                    <a href="#projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal transition-colors hover:text-white">
                      Explore the project <span aria-hidden>→</span>
                    </a>
                  </GlassCard>
                </Reveal>
              </div>
              <Reveal fromSide="left" delay={0.15} className="mx-auto w-full max-w-[520px] lg:sticky lg:top-24">
                <SocRadar />
              </Reveal>
            </div>
          </section>
          <SectionDivider />
          <Credentials />
          <SectionDivider />
          <Mindset />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );

}