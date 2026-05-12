// components/Portfolio.tsx
export default function Portfolio() {
  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-x-2 text-emerald-400 text-sm font-medium tracking-widest mb-4">
            PORTFOLIO
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-16">
            Featured Projects
          </h1>

          {/* Nails by Mykala - Main Feature */}
          <div className="bg-zinc-900/50 border border-emerald-500/20 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="inline-block bg-emerald-500 text-black text-xs font-semibold px-4 py-1 rounded-2xl mb-4">
                  Full-Stack • AI Powered
                </div>
                <h2 className="text-4xl font-semibold text-white mb-4">Nails by Mykala</h2>
                <p className="text-emerald-300 mb-6">Professional nail salon web application</p>
                
                <p className="text-zinc-400 leading-relaxed mb-8">
                  A complete full-stack web app for a professional nail salon. Features an interactive gallery with swipe navigation, 
                  full CRUD comment system, admin panel, and an AI-powered nail art generator using Grok Imagine.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-3xl">Next.js 16</span>
                  <span className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-3xl">Python</span>
                  <span className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-3xl">TypeScript</span>
                  <span className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-3xl">Tailwind CSS</span>
                  <span className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-3xl">FastAPI</span>
                  <span className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-3xl">PostgreSQL</span>
                  <span className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-3xl">Cloudinary</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-sm px-4 py-2 rounded-3xl">Grok Imagine AI</span>
                </div>

                <div className="flex gap-x-4">
                  <a href="https://nails-by-mykala.vercel.app/" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-8 py-4 rounded-3xl transition-colors">
                    Visit Live Site →
                  </a>
                  <a href="https://github.com/TannorWallace" target="_blank" className="border border-white/40 hover:border-white text-white font-medium px-8 py-4 rounded-3xl transition-colors">
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="md:col-span-5">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl border border-emerald-500/30 flex items-center justify-center text-8xl">
                  <img src="/resources/My_works_1.png" alt="Nails by Mykala" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-zinc-500 text-sm">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}