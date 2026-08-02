const Registration = () => (
  <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-card">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-gold">Registration</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Secure your seat today</h1>
        <p className="mt-4 text-slate-400">Complete the registration form to reserve your access to premium sessions and networking opportunities.</p>
      </div>
      <form className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <input type="text" placeholder="Full name" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
          <input type="email" placeholder="Email address" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <input type="tel" placeholder="Phone number" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
          <input type="text" placeholder="Organization" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <select className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none">
            <option>Category</option>
            <option>Speaker</option>
            <option>Attendee</option>
            <option>Sponsor</option>
          </select>
          <select className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none">
            <option>Payment option</option>
            <option>Credit Card</option>
            <option>Wire Transfer</option>
            <option>Invoice</option>
          </select>
        </div>
        <textarea placeholder="Tell us about your interests" rows={5} className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
        <button type="submit" className="rounded-3xl bg-gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#d09f31]">
          Submit registration
        </button>
      </form>
    </div>
  </section>
)

export default Registration
