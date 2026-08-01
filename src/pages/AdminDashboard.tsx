import { Link, useNavigate } from 'react-router-dom'

const cards = [
  { title: 'Manage Conferences', path: '/admin/conferences' },
  { title: 'Manage Speakers', path: '/admin/speakers' },
  { title: 'Manage Registrations', path: '/admin/registrations' },
  { title: 'Manage News', path: '/admin/news' },
]

const AdminDashboard = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  return (
    <section style={{ minHeight: '80vh', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e5e7eb', borderRadius: 24, padding: 24, background: '#fff' }}>
          <div>
            <h1 style={{ fontSize: 28, margin: 0 }}>Admin Dashboard</h1>
            <p style={{ color: '#666', marginTop: 8 }}>Manage your conferences and content.</p>
          </div>
          <button onClick={logout} style={{ padding: '10px 16px', borderRadius: 999, border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>Logout</button>
        </div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {cards.map((card) => (
            <Link key={card.title} to={card.path} style={{ padding: 20, borderRadius: 20, border: '1px solid #e5e7eb', background: '#fff', textDecoration: 'none', color: '#111' }}>
              <h3>{card.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminDashboard
