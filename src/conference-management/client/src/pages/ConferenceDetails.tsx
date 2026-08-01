const ConferenceDetails = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-card">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Conference details</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Elite Research Summit 2026</h1>
        </div>
        <div className="rounded-3xl bg-slate-900/90 px-5 py-4 text-sm text-slate-300">
          <p>Nov 24-26, 2026</p>
          <p>San Francisco, CA</p>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-slate-300">
          <p>
            Experience a premium assembly of innovators, academics, and corporate leaders focused on the future of science,
            technology, and executive leadership.
          </p>
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-8">
            <h2 className="text-2xl font-semibold text-white">Scientific sessions</h2>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>Future of AI research</li>
              <li>Corporate leadership strategies</li>
              <li>Product innovation & design</li>
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-8">
            <h2 className="text-2xl font-semibold text-white">Venue</h2>
            <p className="mt-3 text-slate-400">The Harbor Conference Center, featuring premium meeting spaces and executive networking lounges.</p>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-8">
            <h3 className="text-xl font-semibold text-white">Registration fees</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                <span>Standard pass</span>
                <span className="font-semibold text-white">$690</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                <span>Premium pass</span>
                <span className="font-semibold text-white">$1,120</span>
              </div>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-8">
            <h3 className="text-xl font-semibold text-white">Important dates</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Early registration closes: Sep 15, 2026</li>
              <li>Submission deadline: Oct 10, 2026</li>
              <li>Schedule published: Oct 25, 2026</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
)

export default ConferenceDetails
