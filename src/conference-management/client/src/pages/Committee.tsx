const Committee = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Organizing committee</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Leadership behind the conference</h1>
      <p className="mt-4 text-slate-400">Meet the team coordinating the summit experience, academic reviews, and speaker curation.</p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <article key={index} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 text-center shadow-card">
          <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-gradient-to-br from-accent to-sky-500" />
          <h2 className="text-xl font-semibold text-white">Member {index + 1}</h2>
          <p className="mt-2 text-sm text-slate-400">Program Chair</p>
          <p className="mt-4 text-slate-300">Guiding agenda design and conference partnerships with premium standards.</p>
        </article>
      ))}
    </div>
  </section>
)

export default Committee
