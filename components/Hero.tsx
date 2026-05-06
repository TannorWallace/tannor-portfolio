// components/Hero.tsx
'use client';

import { useState } from 'react';

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left side - text content */}
        <div className="space-y-4">
          {/* Location badge */}
          <div className="inline-flex items-center gap-x-2 bg-white/10 text-emerald-400 text-sm font-medium px-6 py-3 rounded-3xl border border-emerald-500/20">
            📍 Caldwell, Idaho
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter">
            Hello, I'm<br />Tannor Wallace
          </h1>
          
          <p className="text-2xl text-emerald-300 font-light">
          
            Full-Stack Developer • Software Engineer
          </p>
          
          <p className="max-w-md text-xl text-zinc-400 leading-relaxed">
            I build reliable systems, write clean code, and love turning complex problems into simple solutions.
          </p>
          
          <div className="flex items-center gap-x-4 pt-4">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg px-8 py-4 rounded-3xl flex items-center gap-x-3 transition-colors"
            >
              See My Experience
            </button>
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="border border-white/40 hover:border-white text-white font-medium text-lg px-8 py-4 rounded-3xl transition-colors"
            >
              Download Resume →
            </button>
          </div>
        </div>
        
        {/* Right side - visual */}
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl flex items-center justify-center border border-emerald-500/20 shadow-2xl">
            <div className="text-[140px] leading-none">💻</div> {/* Image of me here later */}
          </div>
        </div>
      </div>
    </main>
  );
}