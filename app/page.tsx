const PILL =
  "border border-[#1a1a1a] rounded-[20px] px-4 py-1.5 text-sm text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#EDE0C8] transition-colors";

const BTN =
  "border border-[#1a1a1a] rounded-[4px] px-4 py-1.5 text-sm text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F5F5F0] transition-colors";

const TAG =
  "border border-[#1a1a1a] rounded-[20px] px-3 py-0.5 text-xs text-[#1a1a1a]";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-primary)]">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#EDE0C8] border-b border-[#1a1a1a]">
        <div className="px-8 py-16 md:py-24">
          <p className="text-[#888780] text-sm mb-5 tracking-wide">
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
      <section className="px-8 py-16">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-6">
          Work
        </p>
        <div className="border border-[#1a1a1a] rounded-[4px] flex flex-col md:flex-row">
          {/* Project 1: Creature */}
          <div className="p-8 flex-1 md:border-r md:border-b-0 border-b border-[#1a1a1a]">
            <div className="flex justify-between items-baseline gap-4 mb-4">
              <h2 className="text-lg font-bold text-[#1a1a1a]">Creature</h2>
              <span className="text-sm text-[#888780] shrink-0">
                Design system + Next.js app
              </span>
            </div>
            <p className="text-[#1a1a1a] mb-5 leading-relaxed text-sm">
              A design system and AI-powered application exploring structured
              creativity. Includes a fully documented component library, a
              conversational interface built on the Claude API, and experiment
              tracking via W&amp;B Weave for observability across model runs.
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
              <a href="#" className={BTN}>Live site</a>
              <a href="#" className={BTN}>GitHub</a>
              <a href="#" className={BTN}>Case study</a>
            </div>
          </div>

          {/* Project 2: CurateSphere */}
          <div className="p-8 flex-1">
            <div className="flex justify-between items-baseline gap-4 mb-4">
              <h2 className="text-lg font-bold text-[#1a1a1a]">CurateSphere</h2>
              <span className="text-sm text-[#888780] shrink-0">
                PERN stack web app
              </span>
            </div>
            <p className="text-[#1a1a1a] mb-5 leading-relaxed text-sm">
              A full-stack art discovery platform powered by the Harvard Art
              Museums API. Users can browse collections, build personal
              galleries, and uncover connections across cultures and eras through
              a clean, browsable interface.
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
              <a href="#" className={BTN}>Live site</a>
              <a href="#" className={BTN}>GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────────── */}
      <section className="px-8 pb-16">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-6">
          Experience
        </p>
        <div className="border border-[#1a1a1a] rounded-[4px] divide-y divide-[#1a1a1a]">
          <div className="grid grid-cols-[100px_1fr] gap-6 px-8 py-6">
            <span className="text-sm text-[#888780] pt-px">2024–25</span>
            <div>
              <p className="text-[#1a1a1a] text-sm font-medium">
                Software Engineer
              </p>
              <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
            </div>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-6 px-8 py-6">
            <span className="text-sm text-[#888780] pt-px">2022–24</span>
            <div>
              <p className="text-[#1a1a1a] text-sm font-medium">
                Senior EA to CEO
              </p>
              <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
            </div>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-6 px-8 py-6">
            <span className="text-sm text-[#888780] pt-px">Prior</span>
            <div>
              <p className="text-[#1a1a1a] text-sm font-medium">
                Art &amp; museum background
              </p>
              <p className="text-sm text-[#888780]">Various institutions</p>
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
