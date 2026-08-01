import { useState } from 'react'

type SpeakerItem = {
  id: number
  name: string
  role: string
}

const initialSpeakers: SpeakerItem[] = [
  { id: 1, name: 'Dr. Amara Lin', role: 'Chief AI Officer' },
  { id: 2, name: 'Prof. Daniel Brooks', role: 'Director of Precision Health' },
]

const AdminSpeakers = () => {
  const [speakers, setSpeakers] = useState(initialSpeakers)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const addSpeaker = () => {
    if (!name || !role) return
    setSpeakers((prev) => [...prev, { id: Date.now(), name, role }])
    setName('')
    setRole('')
  }

  return (
    <section style={{ minHeight: '80vh', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gap: 20 }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 24, padding: 24, background: '#fff' }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>Manage Speakers</h1>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr auto' }}>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Speaker name" style={{ padding: 12, borderRadius: 12, border: '1px solid #ddd' }} />
            <input value={role} onChange={(event) => setRole(event.target.value)} placeholder="Role" style={{ padding: 12, borderRadius: 12, border: '1px solid #ddd' }} />
            <button onClick={addSpeaker} style={{ padding: '12px 16px', borderRadius: 12, background: '#0b5ed7', color: '#fff', border: 'none', cursor: 'pointer' }}>Add</button>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {speakers.map((speaker) => (
            <div key={speaker.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e5e7eb', borderRadius: 20, padding: 16, background: '#fff' }}>
              <div>
                <h3 style={{ margin: 0 }}>{speaker.name}</h3>
                <p style={{ margin: '4px 0 0', color: '#666' }}>{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminSpeakers
