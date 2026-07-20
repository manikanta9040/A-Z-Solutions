import type { Conference } from '../../types/conference'
import { formatDate } from '../../utils/formatDate'

interface ConferenceDetailsProps {
  conference: Conference
}

export default function ConferenceDetails({ conference }: ConferenceDetailsProps) {
  return (
    <section className="section-panel">
      <h2>{conference.title}</h2>
      <p>{conference.summary}</p>
      <p>
        <strong>{formatDate(conference.date)}</strong> · {conference.location}
      </p>
      <div className="overview-grid">
        {conference.agenda.map((item) => (
          <article key={item.time} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.time}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
