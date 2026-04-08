const PILL =
  "border border-[#1a1a1a] rounded-[20px] px-4 py-1.5 text-sm text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#CBDEE1] transition-colors";

const BTN =
  "border border-[#1a1a1a] rounded-[4px] px-4 py-1.5 text-sm text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F5F5F0] transition-colors";

const TAG =
  "bg-[#CBDEE1] rounded-[20px] px-3 py-0.5 text-xs text-[#085041]";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-primary)]">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#CBDEE1] border-b border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-8 py-16 md:py-24">
          <p className="text-[#888780] text-xs mb-5 tracking-widest uppercase">
            Product designer · Los Angeles
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4 leading-tight">
            Mollie Anderson
          </h1>
          <p className="text-xl text-[#1a1a1a] mb-7">Design × engineering × AI</p>
          <p className="text-[#1a1a1a] mb-9 max-w-lg leading-relaxed text-sm">
            I design products at the intersection of AI, engineering, and human
            experience. My path through art museums, executive operations, and
            software engineering informs a practice equally fluent in pixels and
            code. Currently building design systems and AI-powered interfaces in
            Los Angeles.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/molliean"
              target="_blank"
              rel="noopener noreferrer"
              className={PILL}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mollie-anderson/"
              target="_blank"
              rel="noopener noreferrer"
              className={PILL}
            >
              LinkedIn
            </a>
            <a href="mailto:molliean29@gmail.com" className={PILL}>Email</a>
          </div>
        </div>
      </section>

      {/* ── Work ─────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-8">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-6">
          Work
        </p>
        <div className="border border-[#1a1a1a] rounded-[4px]">
          {/* Project 1: Creature */}
          <div className="p-8 bg-white border-b border-[#1a1a1a]">
            <div className="flex justify-between items-baseline gap-4 mb-4">
              <h2 className="text-lg font-bold text-[#1a1a1a]">Creature Books</h2>
              <span className="text-sm text-[#888780] shrink-0">
                Design system + Next.js app
              </span>
            </div>
            <p className="text-[#1a1a1a] mb-5 leading-relaxed text-sm">
              Creature is a book discovery and tracking app with a fully
              documented design system — token foundation, component specs, and
              a user flow diagram built in Figma. The frontend is built in
              Next.js with TypeScript using Claude Code, with an AI-powered
              mood-based book recommendation feature on the Explore screen.
              W&amp;B Weave is integrated for LLM observability, tracking every
              prompt and response through the discovery flow.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Claude API", "W&B Weave", "Next.js", "TypeScript"].map(
                (tag) => (
                  <span key={tag} className={TAG}>
                    {tag}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://creature-app.vercel.app/" target="_blank" rel="noopener noreferrer" className={BTN}>Live site</a>
              <a href="https://github.com/molliean/creature-app" target="_blank" rel="noopener noreferrer" className={BTN}>GitHub</a>
              <a href="https://www.figma.com/design/58i3A5rml54rTcRGa5QyP6/CB-APP?node-id=71-770&t=j5tDMJjWdvJwv8dN-1" target="_blank" rel="noopener noreferrer" className={BTN}>Figma design</a>
            </div>
          </div>

          {/* Project 2: CurateSphere */}
          <div className="p-8 bg-white">
            <div className="flex justify-between items-baseline gap-4 mb-4">
              <h2 className="text-lg font-bold text-[#1a1a1a]">CurateSphere</h2>
              <span className="text-sm text-[#888780] shrink-0">
                PERN stack web app
              </span>
            </div>
            <p className="text-[#1a1a1a] mb-5 leading-relaxed text-sm">
              CurateSphere is a full-stack art exhibition curation app built on
              the PERN stack, integrating the Harvard Art Museums API to give
              users access to over 244,000 artworks. Users can create, edit, and
              share personal exhibitions with advanced filtering by medium,
              culture, period, and technique. Built with React, Node.js,
              Express, PostgreSQL, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "PostgreSQL",
                "Express",
                "React",
                "Node.js",
                "Harvard Art Museums API",
              ].map((tag) => (
                <span key={tag} className={TAG}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://curate-sphere.netlify.app/" target="_blank" rel="noopener noreferrer" className={BTN}>Live site</a>
              <a href="https://github.com/molliean/curate-sphere" target="_blank" rel="noopener noreferrer" className={BTN}>GitHub</a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-[900px] mx-auto px-8">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-6">
          Experience
        </p>
        <div className="divide-y divide-[#1a1a1a]">
          <div className="grid grid-cols-[100px_1fr] gap-6 py-6">
            <span className="text-sm text-[#888780] pt-px">2024–25</span>
            <div>
              <p className="text-[#1a1a1a] text-sm font-medium">
                Software Engineer
              </p>
              <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
            </div>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-6 py-6">
            <span className="text-sm text-[#888780] pt-px">2022–24</span>
            <div>
              <p className="text-[#1a1a1a] text-sm font-medium">
                Senior EA to CEO
              </p>
              <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
            </div>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-6 py-6">
            <span className="text-sm text-[#888780] pt-px">Prior</span>
            <div>
              <p className="text-[#1a1a1a] text-sm font-medium">
                Art &amp; museum background
              </p>
              <p className="text-sm text-[#888780]">Various institutions</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="bg-[#1a1a1a] px-8 py-6">
        <div className="flex justify-between items-center">
          <span className="text-[#F5F5F0] text-sm">Mollie Anderson</span>
          <a
            href="mailto:molliean29@gmail.com"
            className="text-[#888780] text-sm hover:text-[#F5F5F0] transition-colors"
          >
            molliean29@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
