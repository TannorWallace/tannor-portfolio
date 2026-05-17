// components/Hero.tsx
'use client';
import { FaDownload } from "react-icons/fa6";
import { useState } from 'react';

// Mobile download function to see if it works, but it does not work on mobile. I need to google this and figure out how to make it work on mobile. I think it might be a security issue with mobile browsers, but I'm not sure.
export default function Hero() {
const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resources/Tannor_Wallace_Resume.pdf';
    link.download = 'Tannor_Wallace_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <main className="min-h-screen flex items-center text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left side - text content */}
        <div className="space-y-4">
  
          <a 
            href="https://www.google.com/maps/place/Caldwell,+ID" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-white/20 text-emerald-400 text-sm font-medium px-6 py-3 rounded-3xl border border-emerald-500/20 transition-colors">
            📍 Caldwell, Idaho
          </a>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter">
            Hello, I'm<br />Tannor Wallace!
          </h1>
          
          <p className="text-2xl text-emerald-300 font-light">
            Full-Stack Developer • Software Engineer
          </p>
          
          <p className="max-w-md text-xl text-zinc-400 leading-relaxed">
            I am able to build reliable systems, write clean code, and I love turning complex problems into simple solutions.
          </p>
          
          <div className="flex items-center gap-x-4 pt-4">
            {/* Experience Button */}
            <a 
              href="/experience"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg px-8 py-4 rounded-3xl flex items-center gap-x-3 transition-colors">
              See My Experience
            </a>

            {/* DOWN LOAD WORKS! Need to update the nails AI page.*/}
            {/* Download doesnt work on mobile...need to google this*/}

            <button 
              onClick={handleDownloadResume}
              className="border border-white/40 hover:border-white text-white font-medium text-lg px-8 py-4 rounded-3xl transition-colors hover:text-emerald-400 flex items-center gap-x-3">
              See My Resume <FaDownload />
            </button>
          </div>
        </div>
        
        {/* Ugh need a picture of me that i guess people might find not disgusting */}
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl flex items-center justify-center border border-emerald-500/20 shadow-2xl">
            <div className="text-[140px] leading-none "><img className="w-90 h-100 rounded-3xl" src="/resources/headshot3.webp" alt="Tannor Wallace" /></div> {/* Image of me here later */}
          </div>
        </div>
      </div>
    </main>
  );
}