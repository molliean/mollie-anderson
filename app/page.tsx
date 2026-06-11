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
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-10 md:pb-16">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4 leading-tight">
            Mollie Anderson
          </h1>
          <p className="text-lg sm:text-xl text-[#1a1a1a] mb-7">Operations × Engineering × Design × AI</p>
          <p className="text-[#1a1a1a] mb-5 max-w-2xl leading-relaxed text-sm">
            I&apos;m an operations specialist and product builder based in Los Angeles, with a
            background that runs from the galleries of the Metropolitan
            Museum of Art to the AI developer platform powering the world's most advanced models.
            After nearly a decade of executive support across major cultural institutions and high-growth tech,
            I completed a software engineering bootcamp and shipped several
            frontend and backend features in production at Weights &amp; Biases.
          </p>
          <p className="text-[#1a1a1a] mb-9 max-w-2xl leading-relaxed text-sm">
            I bring the visual instincts of years in the arts, the judgment and systems
            thinking of running an executive office, and the technical fluency to design and build what I imagine.
            Whether supporting a leadership team, designing a product, or shipping code,
            I care most about doing work with craft and making the people around me more effective.
            Lately I've been especially interested in how AI tools can transform the way all of this work gets done,
            and in my spare time I've been building apps end-to-end with Claude Code and Figma MCP.
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
            {/* <a
              href="https://drive.google.com/file/d/1f5f90mYcdxWVueXbnLYaezAuLrgBKg6W/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={PILL}
            >
              Resume
            </a> */}
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
          <p className="text-xs uppercase tracking-widest font-medium text-[#555550] mb-6">
            Projects
          </p>
          <div className="border border-[#1a1a1a] rounded-[4px]">
            {/* Project 1: Creature Books */}
            <div className="p-6 sm:p-8 bg-white border-b border-[#1a1a1a]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-4">
                <h2 className="text-lg font-bold text-[#1a1a1a]">Creature Books</h2>
                <span className="text-sm text-[#888780] sm:shrink-0">
                  AI-powered Next.js app
                </span>
              </div>
              <p className="text-[#1a1a1a] mb-5 leading-relaxed text-sm">
                Creature Books is an AI-powered book discovery and tracking app with a fully
                documented design system in Figma. The frontend is built in
                Next.js with TypeScript using Claude Code with Figma MCP, and includes a
                mood-based book recommendation feature on the Explore screen using the Claude API.
                W&amp;B Weave is integrated for LLM observability, tracking every
                prompt and response through the discovery flow.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma MCP", "Claude Code", "W&B Weave"].map(
                  (tag) => (
                    <span key={tag} className={TAG}>
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-wrap gap-3">
              <a href="https://creature-app.vercel.app/" target="_blank" rel="noopener noreferrer" className={BTN}>Live site</a>
              <a href="https://www.figma.com/design/58i3A5rml54rTcRGa5QyP6/CB-APP?node-id=71-770&t=j5tDMJjWdvJwv8dN-1" target="_blank" rel="noopener noreferrer" className={BTN}>Figma designs</a>
                {/* <a href="https://www.notion.so/End-to-end-app-Creature-Books-33de7a11edf58079a64cc611a8628b8c?showMoveTo=true&saveParent=true" target="_blank" rel="noopener noreferrer" className={BTN}>Case study</a> */}
                <a href="https://github.com/molliean/creature-app" target="_blank" rel="noopener noreferrer" className={BTN}>GitHub</a>
                <a href="https://wandb.ai/molliean29-test/creature-app/overview" target="_blank" rel="noopener noreferrer" className={BTN}>Weave dashboard</a>
              </div>
            </div>

            {/* Project 2: CurateSphere */}
            <div className="p-6 sm:p-8 bg-white border-b border-[#1a1a1a]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-4">
                <h2 className="text-lg font-bold text-[#1a1a1a]">CurateSphere</h2>
                <span className="text-sm text-[#888780] sm:shrink-0">
                 Full-stack web app
                </span>
              </div>
              <p className="text-[#1a1a1a] mb-5 leading-relaxed text-sm">
                CurateSphere is a full-stack art curation app built on
                the PERN stack, integrating the Harvard Art Museums API to give
                users access to over 244,000 artworks. Users can create, edit, and
                share personal exhibitions with advanced filtering by medium,
                culture, period, and technique. Originally built it 2024, I recently redesigned the entire UI in Figma with a new design system and component library, and rebuilt the frontend with Figma MCP and Claude Code.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "PostgreSQL",
                  "Express",
                  "React",
                  "Node.js",
                  "Tailwind CSS",
                ].map((tag) => (
                  <span key={tag} className={TAG}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://curate-sphere-git-redesign-molliean29-6542s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className={BTN}>Deployed redesign</a>
                <a href="https://curate-sphere.netlify.app/" target="_blank" rel="noopener noreferrer" className={BTN}>Deployed original</a>
                <a href="https://www.figma.com/design/UILGjDnILVrmreHgQdoybi/CurateSphere-redesign?node-id=0-1&p=f&t=UsD6dySaDiicpahM-0" target="_blank" rel="noopener noreferrer" className={BTN}>Figma designs</a>
                <a href="https://github.com/molliean/curate-sphere/tree/redesign" target="_blank" rel="noopener noreferrer" className={BTN}>GitHub</a>
              </div>
            </div>

            {/* Project 3: W&B Design Challenge */}
            {/* <div className="p-6 sm:p-8 bg-white">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-4">
                <h2 className="text-base font-bold text-[#1a1a1a]">W&amp;B Design Challenge: Frozen Visualizations in Reports</h2>
                <span className="text-sm text-[#888780] sm:shrink-0">UX case study</span>
              </div>
              <p className="text-[#1a1a1a] mb-5 text-sm leading-relaxed">
                Self-initiated design challenge based on a real W&amp;B product problem in Reports. I designed two solutions in Figma, built an interactive prototype, deployed a coded version, and wrote a full case study.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.notion.so/W-B-Design-Challenge-Frozen-Visualizations-in-Reports-2aae7a11edf580b0b46cc34686c11708" target="_blank" rel="noopener noreferrer" className={BTN}>Case study</a>
                <a href="https://www.figma.com/design/sgyRIOEziHeyk5mAgKK9cR/W-B-Frozen-Visualizations?node-id=18-3&t=1vE6rG57yvcyrr3w-0" target="_blank" rel="noopener noreferrer" className={BTN}>Figma file</a>
                <a href="https://interactivfreeze-indicator.vercel.app/" target="_blank" rel="noopener noreferrer" className={BTN}>Prototype</a>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8">
          <p className="text-xs uppercase tracking-widest font-medium text-[#555550] mb-6">
            Experience
          </p>
          <div className="divide-y divide-[#1a1a1a]">
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2024–25</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Software Engineer</p>
                <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
                <p className="text-sm text-[#888780] mt-1">Shipped ~100 PRs across frontend and backend using React, Go, and GraphQL. Built shared UI components from Figma designs and contributed to standardizing component usage across internal tools.</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2022–24</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Senior EA to CEO/Co-Founder & CFO</p>
                <p className="text-sm text-[#888780]">Weights &amp; Biases</p>
                <p className="text-sm text-[#888780] mt-1">Managed cross-functional alignment, executive communications, and organizational systems across a fully remote global team.</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2019–22</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Executive Assistant to the Director</p>
                <p className="text-sm text-[#888780]">J. Paul Getty Trust</p>
                <p className="text-sm text-[#888780] mt-1">Supported the Director of one of the world&apos;s leading art institutions. Managed operational workflows, donor correspondence, and institutional events.</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2015–19</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Assistant Administrator</p>
                <p className="text-sm text-[#888780]">The Metropolitan Museum of Art</p>
                <p className="text-sm text-[#888780] mt-1">Coordinated projects and research for exhibitions; co-chaired museum-wide fundraising initiatives; managed collection of archival photographs; co-authored peer-reviewed publications.</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2013–15</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">Records Coordinator</p>
                <p className="text-sm text-[#888780]">Conservation Center for Art and Historic Artifacts</p>
                <p className="text-sm text-[#888780] mt-1">Managed logistics and project archive at art conservation center serving museums, historical societies, and private clients throughout the mid-Atlantic region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ───────────────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8">
          <p className="text-xs uppercase tracking-widest font-medium text-[#555550] mb-6">
            Education
          </p>
          <div className="divide-y divide-[#1a1a1a]">
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2024</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">General Assembly</p>
                <p className="text-sm text-[#888780]">Software Engineering Bootcamp</p>
                <p className="text-xs text-[#888780] mt-1">New York, NY / Remote</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2009–13</span>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">University of Pennsylvania</p>
                <p className="text-sm text-[#888780]">BA with Honors in Philosophy · Minors in French &amp; History</p>
                <p className="text-xs text-[#888780] mt-1">Philadelphia, PA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Publications ─────────────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8">
          <p className="text-xs uppercase tracking-widest font-medium text-[#555550] mb-6">
            Publications
          </p>
          <p className="text-sm text-[#888780] mb-6">Research from my work co-chairing the <a href="https://www.metmuseum.org/perspectives/time-based-media-working-group-introduction" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#555550] transition-colors">Time-Based Media Working Group</a> at the Met.</p>
          <div className="divide-y divide-[#1a1a1a]">
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2021</span>
              <div>
                <p className="text-sm text-[#888780]">Lia Kramer, Alexandra Nichols, <strong>Mollie Anderson</strong>, Nora W. Kennedy, Glenn Wharton, Lorena Ramirez-Lopez. <strong>Conducting a Time-Based Media Conservation Assessment and Survey at The Metropolitan Museum of Art.</strong> <em>Journal of the American Institute for Conservation.</em> DOI: 10.1080/01971360.2020.1855866</p>
              </div>
            </div>
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-6 py-6">
              <span className="text-sm text-[#888780] pt-px">2023</span>
              <div>
                <p className="text-sm text-[#888780]">Lia Kramer, Alexandra Nichols, <strong>Mollie Anderson</strong>, Nora W. Kennedy, Glenn Wharton, Lorena Ramirez-Lopez. <strong>&ldquo;Institutional Assessments and Collection Surveys for Time-Based Media Conservation.&rdquo;</strong> <em>Conservation of Time-Based Media Art,</em> edited by Deena Engel and Joanna Phillips, Routledge, Abingdon, Oxon, pp. 39–64. DOI: 10.4324/9781003034865</p>
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
