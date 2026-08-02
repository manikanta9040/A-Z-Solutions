const Blog = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Insights and news</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">The latest from A-Z SOLUTIONS</h1>
      <p className="mt-4 text-slate-400">Explore event highlights, speaker announcements, and conference strategy articles.</p>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <article key={index} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
          <div className="mb-4 h-40 rounded-3xl bg-gradient-to-br from-accent to-sky-500" />
          <h2 className="text-2xl font-semibold text-white">Conference insight {index + 1}</h2>
          <p className="mt-3 text-slate-400">A short briefing on event design, speaker selection, and attendee engagement strategy.</p>
          <a href="/blog" className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-white">
            Read more →
          </a>
        </article>
      ))}
    </div>
  </section>
)

export default Blog
