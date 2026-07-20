import { useFetchConferences } from '../../hooks/useFetchConferences'
import Card from '../common/Card'
import { formatDate } from '../../utils/formatDate'

export default function UpcomingConferences() {
  const { conferences, loading, error } = useFetchConferences()

  if (loading) {
    return <div className="section-panel">Loading services…</div>
  }

  if (error) {
    return <div className="section-panel">Error: {error}</div>
  }

  return (
    <section className="section-panel">
      <header className="section-heading">
        <h2 className="section-title">Core services</h2>
        <p className="section-copy">Explore the ways A-Z Solutions helps clients build modern digital experiences.</p>
      </header>
      <div className="card-grid">
        {conferences.map((conference) => (
          <Card key={conference.id} className="conference-card">
            <h3>{conference.title}</h3>
            <p>{conference.summary}</p>
            <p>
              <strong>{formatDate(conference.date)}</strong> · {conference.location}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
