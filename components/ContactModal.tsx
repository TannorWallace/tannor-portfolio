// components/ContactModal.tsx
'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    console.log('=== EMAILJS DEBUG ===');
    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    setStatus('sending');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then((result) => {
        console.log('✅ EmailJS Success:', result.text);
        setStatus('success');
        form.current?.reset();
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2500);
      })
      .catch((error) => {
        console.error('❌ EmailJS Error:', error);
        setStatus('error');
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
      <div className="bg-zinc-900 border border-white/10 rounded-3xl max-w-lg w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <button
            onClick={onClose}
            className="text-3xl text-zinc-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-zinc-800 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-zinc-800 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-zinc-800 border border-white/10 rounded-3xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 resize-none"
              placeholder="Hi Tannor, I came across your portfolio..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-700 text-black font-medium py-4 rounded-3xl transition-colors text-lg"
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}