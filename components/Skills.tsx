// components/Skills.tsx
export default function Skills() {
  return (
    <section className="py-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-x-2 text-emerald-400 text-sm font-medium tracking-widest mb-4">
            SKILLS
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-16">
            What I Bring
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-zinc-400">
            
            {/* Languages */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
              <h3 className="text-emerald-400 font-medium mb-6 text-lg">Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Python</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">TypeScript</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">JavaScript</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">C#</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Next.js</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Angular</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Vue.js</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">jQuery</span>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
              <h3 className="text-emerald-400 font-medium mb-6 text-lg">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">FastAPI</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Django</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Flask</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Node.js</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Tailwind CSS</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Bootstrap</span>
              </div>
            </div>

            {/* Databases */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
              <h3 className="text-emerald-400 font-medium mb-6 text-lg">Databases</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Microsoft SQL Server</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">PostgreSQL</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">MySQL</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">MongoDB</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">SQLite</span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
              <h3 className="text-emerald-400 font-medium mb-6 text-lg">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Azure DevOps</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Docker</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Vercel</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Render</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Cloudinary</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">GitHub</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">GitLab</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">CI/CD</span>
              </div>
            </div>

            {/* Tools & Methodologies */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 lg:col-span-2">
              <h3 className="text-emerald-400 font-medium mb-6 text-lg">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">VS Code</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Visual Studio</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">PyCharm</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Postman</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Jira</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Agile / Scrum</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Kanban</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">MVC</span>
                <span className="bg-zinc-800 px-5 py-2 rounded-3xl text-sm">Test Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}