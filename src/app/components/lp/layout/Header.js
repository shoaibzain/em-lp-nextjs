"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="hidden lg:flex">
          <ul className="flex space-x-5 lg:space-x-7 xl:space-x-10 text-lg text-gray-900 font-medium">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  scroll={true}
                  className={`hover:text-primary ${section.id === 'hero' ? 'text-primary' : ''}`}
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Phone Number with Icon */}
        <div className="hidden lg:flex items-center space-x-2 hover:text-primary">
          <FiPhone className="text-gray-900" size={20} />
          <Link href="tel:+1234567890" className="text-primary font-bold text-xl">
            +1 (234) 567-890
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
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
      <div id="mobile-menu" className={`lg:hidden pt-8 lg:pt-0 px-6 pb-4 transition duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-gray-900">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                scroll={true}
                className={`hover:text-primary ${section.id === 'hero' ? 'text-primary' : ''}`}
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
