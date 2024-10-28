"use client";

import { useState } from 'react';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function About() {
  // Set the first section 'digital-marketing' as active by default
  const [activeSection, setActiveSection] = useState('seo');

  const toggleSection = (section) => {
    // Reset to default 'digital-marketing' if the clicked section is not active or is reset
    setActiveSection(section === activeSection ? 'seo' : section);
  };

  const sections = [
    { id: 'digital-marketing', title: 'Digital<br>Marketing' },
    { id: 'seo', title: 'Search Engine<br>Optimization' },
    { id: 'web-design', title: 'Website Design<br>& Development' },
  ];

  return (
    <section
      id="whatwedo"
      className="about relative h-screen bg-black bg-contain bg-no-repeat bg-left bg-[url('/images/about-bg.png')]"
    >
      <div className="w-full container px-4">
        <div className="flex w-96 mx-auto gap-12 h-screen relative -top-28">
          {sections.map(({ id, title }) => (
            <div
              key={id}
              className={`w-24 bg-primary h-2/4 flex items-end justify-end cursor-pointer clip-custom-sharp transition-all duration-300 ${activeSection === id ? 'h-full' : ''}`}
              onClick={() => toggleSection(id)}
              aria-expanded={activeSection === id}
              aria-controls={`${id}-content`}
            >
              <div
                className="transform rotate-180 writing-mode pt-4 pl-1"
                dangerouslySetInnerHTML={{ __html: `<span class="text-xl font-normal whitespace-nowrap text-white">${title}</span>` }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center h-min top-[32%] xl:top-[38%]">
          <div
            className={`text-7xl xl:text-8xl font-bold text-transparent text-stroke bg-clip-text uppercase tracking-tighter text-center ${openSans.className}`}
          >
            What We Do
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-left">
          {activeSection === 'digital-marketing' && (
            <div id="digital-marketing-content" className="relative w-80 left-20">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          )}
          {activeSection === 'seo' && (
            <div id="seo-content" className="relative left-[14rem] w-80">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
              <button className="group rounded-full bg-primary px-2 py-1 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700">
                Get Started
              </button>
            </div>
          )}
          {activeSection === 'web-design' && (
            <div id="web-design-content" className="relative -left-20 w-80">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
              <button className="group rounded-full bg-primary px-2 py-1 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700">
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
