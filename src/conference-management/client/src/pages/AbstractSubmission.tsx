const AbstractSubmission = () => (
  <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-card">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-gold">Abstract submission</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Share your research with the world</h1>
        <p className="mt-4 text-slate-400">Submit your abstract to be considered for a featured presentation or poster session at our next summit.</p>
      </div>
      <form className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <input type="text" placeholder="Full name" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
          <input type="email" placeholder="Email address" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <input type="text" placeholder="Affiliation" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
          <input type="text" placeholder="Proposal title" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-4 text-slate-300">
          <label className="block text-sm font-medium text-slate-200">Abstract summary</label>
          <textarea rows={6} placeholder="200-300 words" className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none" />
        </div>
        <button type="submit" className="rounded-3xl bg-accent px-6 py-4 text-sm font-semibold text-white transition hover:bg-accentDark">
          Submit abstract
        </button>
      </form>
    </div>
  </section>
)

export default AbstractSubmission
