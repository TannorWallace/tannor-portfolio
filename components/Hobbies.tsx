// components/Hobbies.tsx
export default function Hobbies() {
  return (
    <section className="py-16 md:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-x-2 text-emerald-400 text-sm font-medium tracking-widest mb-4">
            HOBBIES
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 md:mb-8">
            My Hobby Hoard
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 md:mb-16">
            From the grimdark battles of my Imperial Fists army in Warhammer 40,000 
            to turning raw wood on the lathe, 3D printing practical fixes, metal casting, 
            and exploring the Idaho outdoors — these are the hobbies that keep my hands busy and my mind inspired.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Warhammer 40k - Special Card (full width on mobile) */}
            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8 col-span-1 md:col-span-1">
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="text-3xl font-semibold text-white mb-2">Warhammer 40,000</h3>
              <p className="text-emerald-300 text-sm mb-6">The one that consumes my thoughts all day since 2006</p>
              <p className="text-zinc-400 mb-6">
                Imperial Fists army • ~2100 pts Strike Force<br />
                I love the deep lore, painting, and the tabletop game. Still using my imagination at 38.
              </p>
              <div className="text-xs text-zinc-500">
                Current roster includes Tor Garadon, Gravis Captains, Hellblasters, Infernus Squads, and more.
              </div>
            </div>

            {/* Other hobby cards */}
            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="text-5xl mb-4">🪵</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Woodturning</h3>
              <p className="text-zinc-400">
                My favorite tool is the lathe. Taking a piece of wood headed for the burn pile and turning it into something beautiful and useful is pure magic.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="text-5xl mb-4">🖨️</div>
              <h3 className="text-2xl font-semibold text-white mb-2">3D Printing</h3>
              <p className="text-zinc-400">
                Problem-solving made physical. From fixing household issues to printing toys for Bridger — it's one of the most practical hobbies I have.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="text-5xl mb-4">🌼</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Yard Work &amp; Gardening</h3>
              <p className="text-zinc-400">
                I love making sure my trees thrive and planting flowers for bees and monarch butterflies (Idaho&apos;s state insect).
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="text-5xl mb-4">🚲</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Riding My Bike</h3>
              <p className="text-zinc-400">
                No destination, no fitness goal — just riding because it feels good. Rediscovered thanks to my neighbor in his 70s.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Cooking</h3>
              <p className="text-zinc-400">
                My wife says it&apos;s my love language. I just have to admit that I like tasty things.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Metal Casting</h3>
              <p className="text-zinc-400">
                I started this as a way to get a pirate treasure chest but couldn&apos;t afford gold. Now I melt down old electronics and pour them into molds.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="text-5xl mb-4">🌲</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Woodland Adventures</h3>
              <p className="text-zinc-400">
                Rock walks with the family, being in the trees, snow, lakes, and rivers — basically anything that gets me outside in Idaho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}