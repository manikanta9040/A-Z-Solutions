const About = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">About A-Z SOLUTIONS</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">A premium conference experience built for modern leaders.</h1>
      <p className="mt-4 text-slate-400">We craft elegant event journeys that combine scientific rigor, executive presence, and high-value networking.</p>
    </div>
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-card">
        <h2 className="text-2xl font-semibold text-white">Our mission</h2>
        <p className="text-slate-300">Empower event organizers to deliver memorable experiences through premium design, advanced scheduling, and curated attendee engagement.</p>
      </div>
      <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-card">
        <h2 className="text-2xl font-semibold text-white">Our approach</h2>
        <p className="text-slate-300">We combine elegant interfaces, robust planning workflows, and communication tools to create each conference with precision.</p>
      </div>
    </div>
  </section>
)

export default About
