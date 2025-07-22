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
      className="about relative mt-10"
    >
      
    </section>
  );
}
