interface TimelineItem {
  title: string
  date: string
  description: string
}

const items: TimelineItem[] = [
  { title: 'Abstract Submission', date: 'Aug 15, 2026', description: 'Submit your research or idea.' },
  { title: 'Acceptance Notice', date: 'Sep 05, 2026', description: 'Receive review outcomes and next steps.' },
  { title: 'Registration Deadline', date: 'Sep 25, 2026', description: 'Secure your place before the event closes.' },
  { title: 'Conference Launch', date: 'Oct 12, 2026', description: 'Join the live sessions and networking.' },
]

const Timeline = () => (
  <div className="relative space-y-8">
    {items.map((item, index) => (
      <div key={item.title} className="relative flex gap-5">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-sm font-semibold text-gold">
            {index + 1}
          </div>
          {index < items.length - 1 && <div className="mt-2 h-full w-px bg-slate-700" />} 
        </div>
        <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">{item.date}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
)

export default Timeline
