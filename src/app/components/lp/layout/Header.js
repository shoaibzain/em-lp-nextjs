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
    { id: 'affordable', name: 'Packages' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-3">
      <nav className="mx-auto w-full container px-10 flex justify-between items-center">
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

        {/* Right: Phone Number with Icon */}
        <div className="hover:text-secondary">
          <a
            href="tel:+1234567890"
            className="text-primary hover:text-secondary text-xl font-semibold flex items-center gap-2"
          >
            <FiPhone size={20} />
            +1 (234) 567-890
          </a>
        </div>
      </nav>
    </header>
  );
}
