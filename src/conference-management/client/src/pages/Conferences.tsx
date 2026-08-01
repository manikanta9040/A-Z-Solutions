const Conferences = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Conference portfolio</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Explore all upcoming summits</h1>
      <p className="mt-4 text-slate-400">Browse conferences by category, location, and date to plan your attendance or speaker application.</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <article key={index} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card transition hover:-translate-y-1 hover:border-gold/60">
          <div className="mb-4 rounded-3xl bg-gradient-to-br from-accent to-sky-500 p-4 text-white">Conference Event {index + 1}</div>
          <h2 className="text-2xl font-semibold text-white">Elite Research Summit</h2>
          <p className="mt-3 text-slate-400">An immersive conference experience with high-level keynotes, panels, and networking sessions.</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
            <span>Date: Nov {12 + index}, 2026</span>
            <span>Location: Los Angeles, CA</span>
            <span>Category: Innovation</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/conferences/elite-research-summit" className="rounded-full border border-slate-700/80 bg-slate-900/80 px-5 py-3 text-sm text-white transition hover:border-gold hover:text-gold">
              Details
            </a>
            <a href="/registration" className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#d09f31]">
              Register
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Conferences
