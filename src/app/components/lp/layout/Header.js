"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { Montserrat } from 'next/font/google';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="z-10 shadow-md py-4 sticky top-0 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Express Marketing"
              width={150}
              height={42}
            />
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-10 text-lg text-gray-900 font-medium">
            <li>
              <Link href="#hero" scroll={true} className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" scroll={true} className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" scroll={true} className="hover:text-primary">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="#portfolio" scroll={true} className="hover:text-primary">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={true} className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Phone Number with Icon */}
        <div className="hidden md:flex items-center space-x-2 hover:text-primar">
          <FiPhone className="text-gray-900 y" size={20} />
          <Link href="tel:+1234567890" className="text-primary font-bold text-xl">
            +1 (234) 567-890
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4">
            <li>
              <Link href="#home" scroll={false} className="text-gray-700 hover:text-primary" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" scroll={false} className="text-gray-700 hover:text-primary" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#services" scroll={false} className="text-gray-700 hover:text-primary" onClick={toggleMenu}>
                What We Do
              </Link>
            </li>
            <li>
              <Link href="#portfolio" scroll={false} className="text-gray-700 hover:text-primary" onClick={toggleMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={false} className="text-gray-700 hover:text-primary" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
