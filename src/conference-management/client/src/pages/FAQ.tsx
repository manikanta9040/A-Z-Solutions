const FAQ = () => (
  <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Frequently asked questions</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Common conference questions answered</h1>
      <p className="mt-4 text-slate-400">Everything you need to know about event registration, submissions, and attendee services.</p>
    </div>
    <div className="space-y-6">
      {[
        {
          question: 'How can I register for an event?',
          answer: 'Visit the registration page, complete the form, and choose the payment option that best fits your organization.',
        },
        {
          question: 'Can I submit an abstract for review?',
          answer: 'Yes — our abstract submission page accepts summaries for consideration by the scientific committee.',
        },
        {
          question: 'Are sponsorship opportunities available?',
          answer: 'Contact our team through the contact page to explore tailored sponsor packages and brand exposure.',
        },
      ].map((item) => (
        <div key={item.question} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
          <h2 className="text-xl font-semibold text-white">{item.question}</h2>
          <p className="mt-3 text-slate-300">{item.answer}</p>
        </div>
      ))}
    </div>
  </section>
)

export default FAQ
