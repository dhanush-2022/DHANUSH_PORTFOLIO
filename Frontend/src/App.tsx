import React from 'react';
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
import { SectionDivider } from './components/SectionDivider';
import { Toolkit } from './components/Toolkit';

export function App() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-clip bg-[radial-gradient(circle_at_top,_rgba(84,182,166,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(82,111,216,0.10),_transparent_28%),#07090B] font-sans text-fg">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Expertise />
        <Toolkit />
        <SectionDivider />
        <FeaturedProject />
        <ProjectDetails />
        <SectionDivider />
        <Experience />
        <Credentials />
        <SectionDivider />
        <Mindset />
        <Contact />
      </main>
      <Footer />
    </div>);

}