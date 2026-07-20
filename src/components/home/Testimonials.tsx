import { TESTIMONIALS } from '../../utils/constants'

export default function Testimonials() {
  return (
    <section className="section-panel">
      <header className="section-heading">
        <h2 className="section-title">Attendee feedback</h2>
        <p className="section-copy">What leaders have said after attending our events.</p>
      </header>
      <div className="card-grid">
        {TESTIMONIALS.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-panel">
            <p>“{testimonial.quote}”</p>
            <p>
              <strong>{testimonial.name}</strong> — {testimonial.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
