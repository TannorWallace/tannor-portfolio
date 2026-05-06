// components/Navbar.tsx
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-zinc-950 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-x-3">
          <div className="w-9 h-9 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl"><a href="/">💻</a></div>
          <h1 className="text-1xl text-white font-semibold tracking-tighter"><a href="/" className="hover:text-emerald-400">Tannor Wallace</a></h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8 text-sm text-white font-medium">
          <a href="/" className="hover:text-emerald-400">Home</a>
          <a href="/about" className="hover:text-emerald-400">About</a>
          <a href="/experience" className="hover:text-emerald-400">Experience</a>
          <a href="/portfolio" className="hover:text-emerald-400">Portfolio</a>
          <a href="/skills" className="hover:text-emerald-400">Skills</a>
          <a href="/hobbies" className="hover:text-emerald-400">Hobbies</a>
        </div>

        {/* Desktop Get In Touch Button */}
        <button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-6 py-3 rounded-3xl text-sm">
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
            <a href="/" className="hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="/about" className="hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="/experience" className="hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Experience
            </a>
            <a href="/portfolio" className="hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
            <a href="/skills" className="hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href="/hobbies" className="hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Hobbies
            </a>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-8 py-4 rounded-3xl w-11/12 mt-4">
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}