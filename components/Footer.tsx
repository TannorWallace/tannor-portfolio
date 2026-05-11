// components/Footer.tsx
'use client';

import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left - Brand + Copyright */}
          <div className="flex items-center gap-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
              💻
            </div>
            <div>
              <p className="font-semibold text-white text-lg text-left">Tannor Wallace</p>
              <p className="text-sm text-zinc-400">Full-Stack Developer • Caldwell, ID</p>
              

            </div>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-x-4">
            <a
              href="https://github.com/TannorWallace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors p-3 hover:bg-white/5 rounded-2xl text-3xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/tannor-wallace-141978190"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors p-3 hover:bg-white/5 rounded-2xl text-3xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          <button
                onClick={() => setModalOpen(true)}
                className="text-zinc-400 hover:text-emerald-400 transition-colors p-3 hover:bg-white/5 rounded-2xl text-3xl"
                aria-label="Email"
              >
                <MdOutlineEmail />
              </button>
        </div>

            <div>
              {/* Copyright */}
              <p className="text-xs text-zinc-500 mt-4 md:mt-6">
                © {new Date().getFullYear()} Tannor Wallace. Built with Next.js + Tailwind.
              </p></div>
          </div>
        </div>
      {/* </div> */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}