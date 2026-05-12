// components/About.tsx
export default function About() {
  return (
    <section id="about" className="py-24  border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Left - Personal Story */}
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-x-2 text-emerald-400 text-sm font-medium tracking-widest">
              ABOUT ME
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
              Hello, I'm Tannor.
            </h2>
            
            <div className="prose prose-invert max-w-none text-lg text-zinc-400 leading-relaxed space-y-6">
              <p>
                I live in Caldwell, Idaho with my wife <span className="text-emerald-300">Mykala</span>, 
                our son <span className="text-emerald-300">Bridger</span>, two dogs (Harvey Dent & Roman), 
                and three cats (Joey, Merri, and Tina).
              </p>
              
              <p>
                I'm a proud <span className="text-emerald-300">"hobby hoarder"</span>. Once something catches my interest, 
                I tend to jump straight into the deep end. Whether it's building, creating, or exploring the outdoors — 
                I love learning and making things with my hands.
              </p>

              <div className="pt-6">
                <p className="text-emerald-400 font-medium mb-4">A few things that consume most of my thoughts these days:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-zinc-400">
                  <li className="flex items-start gap-x-3"><span className="text-emerald-500">•</span> Warhammer 40,000 (been hooked since 2006)</li>
                  <li className="flex items-start gap-x-3"><span className="text-emerald-500">•</span> Woodturning on my lathe</li>
                  <li className="flex items-start gap-x-3"><span className="text-emerald-500">•</span> 3D printing & problem-solving</li>
                  <li className="flex items-start gap-x-3"><span className="text-emerald-500">•</span> Yard work & helping the bees</li>
                  <li className="flex items-start gap-x-3"><span className="text-emerald-500">•</span> Riding my bike with no destination</li>
                  <li className="flex items-start gap-x-3"><span className="text-emerald-500">•</span> Cooking (my love language, according to my wife.)</li>
                </ul>
              </div>
            </div>

            <p className="text-zinc-400 text-lg">
              Favorite color: <span className="text-emerald-300">Black</span> (with green a very close second). 
              I'm friendly, enthusiastic, curious, a bit weird, happy to offer a helping hand, and always up for a good conversation and laugh.
            </p>
          </div>

          {/* ew and image of me */}
          <div className="md:col-span-5">
            <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl border border-emerald-500/20 flex items-center justify-center overflow-hidden">
              <div className="text-[160px] opacity-10">🏠</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}