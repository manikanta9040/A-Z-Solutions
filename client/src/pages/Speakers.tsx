const Speakers = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Featured experts</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Speakers shaping the future</h1>
      <p className="mt-4 text-slate-400">Discover the thought leaders and presenters who will lead conversations across science and industry.</p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <article key={index} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
          <div className="h-32 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900" />
          <h2 className="mt-6 text-2xl font-semibold text-white">Dr. Avery Collins</h2>
          <p className="mt-2 text-slate-400">Chief Innovation Officer, Global Labs</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Expert in AI ethics and enterprise strategy with a history of delivering high-impact keynote sessions.
          </p>
        </article>
      ))}
    </div>
  </section>
)

export default Speakers
