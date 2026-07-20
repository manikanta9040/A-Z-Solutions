import type { Conference } from '../../types/conference'

interface ConferenceCardProps {
  conference: Conference
}

export default function ConferenceCard({ conference }: ConferenceCardProps) {
  return (
    <article className="conference-card">
      <h3>{conference.title}</h3>
      <p>{conference.summary}</p>
      <p>
        <strong>{conference.date}</strong> · {conference.location}
      </p>
    </article>
  )
}
