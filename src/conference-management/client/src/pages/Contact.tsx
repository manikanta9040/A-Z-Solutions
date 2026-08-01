const Contact = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Get in touch</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Let us support your next conference.</h1>
      <p className="mt-4 text-slate-400">Send us a message and our event success team will help you build an executive event that exceeds expectations.</p>
    </div>
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-card">
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <input type="text" placeholder="Full name" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
            <input type="email" placeholder="Email address" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
          </div>
          <input type="text" placeholder="Subject" className="rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
          <textarea placeholder="Your message" rows={6} className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none" />
          <button type="submit" className="rounded-3xl bg-gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#d09f31]">
            Send message
          </button>
        </form>
      </div>
      <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-card text-slate-300">
        <div>
          <h2 className="text-2xl font-semibold text-white">Connect with our team</h2>
          <p className="mt-4 text-slate-400">For partnership inquiries, speaker proposals, or media requests.</p>
        </div>
        <div className="space-y-4 text-sm">
          <p className="font-semibold text-white">Email</p>
          <p>hello@summitsphere.com</p>
          <p className="font-semibold text-white">Phone</p>
          <p>+1 (212) 555-0198</p>
          <p className="font-semibold text-white">Office</p>
          <p>120 Park Avenue, New York, NY</p>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
