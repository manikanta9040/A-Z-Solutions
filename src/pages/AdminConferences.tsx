import { useState } from 'react'

type ConferenceItem = {
  id: number
  title: string
  location: string
}

const initialConferences: ConferenceItem[] = [
  { id: 1, title: 'Global AI Summit 2026', location: 'Singapore' },
  { id: 2, title: 'Precision Healthcare Forum', location: 'Zurich' },
]

const AdminConferences = () => {
  const [conferences, setConferences] = useState(initialConferences)
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')

  const addConference = () => {
    if (!title || !location) return
    setConferences((prev) => [...prev, { id: Date.now(), title, location }])
    setTitle('')
    setLocation('')
  }

  const removeConference = (id: number) => {
    setConferences((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <section style={{ minHeight: '80vh', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gap: 20 }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 24, padding: 24, background: '#fff' }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>Manage Conferences</h1>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr auto' }}>
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Conference title" style={{ padding: 12, borderRadius: 12, border: '1px solid #ddd' }} />
            <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Location" style={{ padding: 12, borderRadius: 12, border: '1px solid #ddd' }} />
            <button onClick={addConference} style={{ padding: '12px 16px', borderRadius: 12, background: '#0b5ed7', color: '#fff', border: 'none', cursor: 'pointer' }}>Add</button>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          {conferences.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e5e7eb', borderRadius: 20, padding: 16, background: '#fff' }}>
              <div>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ margin: '4px 0 0', color: '#666' }}>{item.location}</p>
              </div>
              <button onClick={() => removeConference(item.id)} style={{ padding: '8px 12px', borderRadius: 999, border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminConferences
