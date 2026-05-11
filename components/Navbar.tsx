// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (path: string) => pathname === path;

  return (
    <>
      <nav className="border-b border-white/10 bg-zinc-950 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-x-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl">
              <a href="/">💻</a>
            </div>
            <h1 className="text-1xl text-white font-semibold tracking-tighter">
              <a href="/" className="hover:text-emerald-400">Tannor Wallace</a>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-8 text-sm text-white font-medium">
            {!isCurrent('/') && <a href="/" className="hover:text-emerald-400">Home</a>}
            {!isCurrent('/about') && <a href="/about" className="hover:text-emerald-400">About</a>}
            {!isCurrent('/experience') && <a href="/experience" className="hover:text-emerald-400">Experience</a>}
            {!isCurrent('/portfolio') && <a href="/portfolio" className="hover:text-emerald-400">Portfolio</a>}
            {!isCurrent('/skills') && <a href="/skills" className="hover:text-emerald-400">Skills</a>}
            {!isCurrent('/hobbies') && <a href="/hobbies" className="hover:text-emerald-400">Hobbies</a>}
          </div>

          {/* Get In Touch Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-6 py-3 rounded-3xl text-sm transition-colors"
          >
            Get In Touch
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-white focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-white/10 py-6">
            <div className="flex flex-col items-center gap-y-6 text-lg text-white font-medium">
              {!isCurrent('/') && <a href="/" onClick={() => setIsOpen(false)}>Home</a>}
              {!isCurrent('/about') && <a href="/about" onClick={() => setIsOpen(false)}>About</a>}
              {!isCurrent('/experience') && <a href="/experience" onClick={() => setIsOpen(false)}>Experience</a>}
              {!isCurrent('/portfolio') && <a href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>}
              {!isCurrent('/skills') && <a href="/skills" onClick={() => setIsOpen(false)}>Skills</a>}
              {!isCurrent('/hobbies') && <a href="/hobbies" onClick={() => setIsOpen(false)}>Hobbies</a>}
              
              <button
                onClick={() => {
                  setModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-8 py-4 rounded-3xl w-11/12 mt-4"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}