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
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-24">
          <p className="text-[#888780] text-xs mb-5 tracking-widest uppercase">
            Product designer · Los Angeles
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4 leading-tight">
            Mollie Anderson
          </h1>
          <p className="text-lg sm:text-xl text-[#1a1a1a] mb-7">Design × engineering × AI</p>
          <p className="text-[#1a1a1a] mb-9 max-w-2xl leading-relaxed text-sm">
            I&apos;m a product designer and engineer based in Los Angeles, with a
            background that runs from the photo labs of the Metropolitan
            Museum of Art to the engineering team of one of the leading AI
            developer platforms. I spent two years as senior executive assistant
            to the CEO of Weights &amp; Biases, learning how fast-moving
            technical products get built and shipped, then completed a software
            engineering bootcamp and joined the team as an engineer, where I shipped
            frontend and backend features in production. Product design is where
            each of these threads converge: the visual instincts from my arts
            background, the systems thinking from operations, and the technical
            fluency from engineering. I'm excited about building delightful products and exploring the power of AI to enhance design
            workflows.
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
      <section className="py-12 sm:py-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8">
          <p className="text-xs uppercase tracking-widest text-[#888780] mb-6">
            Work
          </p>
          <div className="border border-[#1a1a1a] rounded-[4px]">
            {/* Project 1: Creature Books */}
            <div className="p-6 sm:p-8 bg-white border-b border-[#1a1a1a]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-4">
                <h2 className="text-lg font-bold text-[#1a1a1a]">Creature Books (2026)</h2>
                <span className="text-sm text-[#888780] sm:shrink-0">
                  Design system + Next.js app
                </span>
              </div>
              <p className="text-[#1a1a1a] mb-5 leading-relaxed text-sm">
                Creature is a book discovery and tracking app with a fully
                documented design system, including a token foundation, component specs, and
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
            <div className="p-6 sm:p-8 bg-white">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-4">
                <h2 className="text-lg font-bold text-[#1a1a1a]">CurateSphere (2024)</h2>
                <span className="text-sm text-[#888780] sm:shrink-0">
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
      <section className="pb-12 sm:pb-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8">
          <p className="text-xs uppercase tracking-widest text-[#888780] mb-6">
            Experience
          </p>
          <div className="divide-y divide-[#1a1a1a]">
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2024–25</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Software Engineer</p>
                <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
                <p className="text-xs text-[#888780] mt-1">Shipped ~100 PRs across frontend and backend using React, Go, and GraphQL. Built shared UI components from Figma designs and contributed to standardizing component usage across internal tools.</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2022–24</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Senior EA to CEO</p>
                <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
                <p className="text-xs text-[#888780] mt-1">Managed cross-functional alignment, executive communications, and organizational systems across a fully remote global team.</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2019–22</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Executive Assistant to the Director</p>
                <p className="text-sm text-[#888780]">J. Paul Getty Trust</p>
                <p className="text-xs text-[#888780] mt-1">Supported the Director of one of the world&apos;s leading art institutions. Managed board-facing communications, donor correspondence, and institutional events.</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2015–19</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Assistant Administrator</p>
                <p className="text-sm text-[#888780]">The Metropolitan Museum of Art</p>
                <p className="text-xs text-[#888780] mt-1">Coordinated projects and research for photography exhibitions; managed collection of archival photographs; co-authored peer-reviewed publications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="bg-[#1a1a1a] px-4 sm:px-8 py-6">
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
