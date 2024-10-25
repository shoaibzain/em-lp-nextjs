"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'whatwedo', name: 'What We Do' },
    { id: 'packages', name: 'Packages' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-10 shadow-md py-4 top-0 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10">
      <nav className="w-full container px-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Express Marketing"
              width={150}
              height={42}
              priority
            />
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-10 text-lg text-gray-900 font-medium">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  scroll={true}
                  className={`hover:text-primary ${activeSection === section.id ? 'text-primary' : ''}`}
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Phone Number with Icon */}
        <div className="hidden md:flex items-center space-x-2 hover:text-primary">
          <FiPhone className="text-gray-900" size={20} />
          <Link href="tel:+1234567890" className="text-primary font-bold text-xl">
            +1 (234) 567-890
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden px-6 pb-4 transition duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                scroll={false}
                className={`text-gray-700 hover:text-primary ${activeSection === section.id ? 'text-primary' : ''}`}
                onClick={toggleMenu}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
