import { Link, useNavigate } from 'react-router-dom'

const cards = [
  { title: 'Manage Conferences', description: 'Create, edit, or delete events', path: '/admin/conferences', accent: 'bg-gold/15 text-gold' },
  { title: 'Manage Speakers', description: 'Add or remove featured speakers', path: '/admin/speakers', accent: 'bg-accent/15 text-accent' },
  { title: 'Manage Registrations', description: 'Review attendee submissions', path: '/admin/registrations', accent: 'bg-sky-500/15 text-sky-400' },
  { title: 'Manage News', description: 'Publish updates and announcements', path: '/admin/news', accent: 'bg-emerald-500/15 text-emerald-400' },
]

const AdminDashboard = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Admin Dashboard</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Conference management control center</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">Use this workspace to manage public conference listings, speaker profiles, attendee registrations, and site announcements.</p>
          </div>
          <button onClick={logout} className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200 transition hover:border-gold hover:text-gold">
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.title} to={card.path} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card transition hover:-translate-y-1 hover:border-gold/60">
              <div className={`mb-4 inline-flex rounded-full px-3 py-2 text-sm font-semibold ${card.accent}`}>
                {card.title}
              </div>
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminDashboard
