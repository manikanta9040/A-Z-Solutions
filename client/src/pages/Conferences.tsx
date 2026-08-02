import ConferenceCard from '../components/ConferenceCard'
import { useConferences } from '../hooks/useConferences'

const Conferences = () => {
  const { data: conferences, loading, error } = useConferences()

  return (
  <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Conference portfolio</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Explore all upcoming summits</h1>
      <p className="mt-4 text-slate-400">Browse conferences by category, location, and date to plan your attendance or speaker application.</p>
    </div>
    {loading ? <p className="text-slate-400">Loading conferences...</p> : error ? <p className="text-red-200">Unable to load conferences: {error}</p> : conferences.length === 0 ? <p className="text-slate-400">No conferences have been published yet.</p> : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {conferences.map((conference) => <ConferenceCard key={conference.id} conference={conference} />)}
      </div>
    )}
  </section>
)

}

export default Conferences
