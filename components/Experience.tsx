// components/Experience.tsx
export default function Experience() {
  return (
    <section className="py-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-x-2 text-emerald-400 text-sm font-medium tracking-widest mb-4">
            EXPERIENCE
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-16 ">
            My Professional Journey
          </h1>

          <div className="space-y-20 pt-12">
            {/* Blue Cross */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-emerald-400">IT Engineer II (Software Developer)</h2>
                  <p className="text-emerald-300">Blue Cross of Idaho • Boise, ID</p>
                </div>
                <p className="text-zinc-500 text-sm">July 2022 – January 2026</p>
              </div>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Led full migration from Tortoise SVN to GitLab, creating Python automation scripts and SOPs that achieved 100% team adoption.
                </li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Designed and implemented Python tools delivering real-time member data to on-call agents, significantly boosting customer satisfaction.
                </li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Developed new features and proactive alerts to integrate evolving policy requirements and maximize member benefit utilization.
                </li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Authored secure SQL stored procedures and real-time queries for call-flow automation and grievance/appeals processing.
                </li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Spearheaded secure API-to-API data transfer program connecting Medicare/Medicaid government endpoints to Blue Cross systems.
                </li>
              </ul>
            </div>

            {/* Ameriben */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-emerald-400">Software Developer I</h2>
                  <p className="text-emerald-300">Ameriben IEC Group • Boise, ID</p>
                </div>
                <p className="text-zinc-500 text-sm">2019 – 2022</p>
              </div>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Developed and integrated new features into core business applications using Microsoft technologies and Agile/Scrum methodologies.</li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Managed source control and team collaboration via Azure DevOps, enforcing version control best practices.</li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Performed thorough debugging and testing to prevent production issues and maintain high system reliability.</li>
              </ul>
            </div>

            {/* Modis / Experis /Contract R&D years */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white underline underline-offset-4 decoration-emerald-400">System Performance Technician III</h2>
                  <p className="text-emerald-300">Modis IT and Engineering / Experis • Boise, ID</p>
                </div>
                <p className="text-zinc-500 text-sm">2010 – 2019</p>
              </div>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Conducted research, development, and ISO 14001 compliance testing while coordinating with local and international engineering teams.</li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Performed firmware uploads to hardware components, tested firmware changes and their effects on print hardware.</li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Measured results with precision laser tools to achieve 100% accurate data.</li>
                <li className="flex gap-x-3"><span className="text-emerald-400">•</span> Managed multiple concurrent projects and resolved customer escalations from contractors to government agencies.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}