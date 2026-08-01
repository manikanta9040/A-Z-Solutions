import { useState } from 'react'

type RegistrationItem = {
  id: number
  name: string
  email: string
  category: string
}

const initialRegistrations: RegistrationItem[] = [
  { id: 1, name: 'Mina Chen', email: 'mina@example.com', category: 'Attendee' },
  { id: 2, name: 'Noah Reed', email: 'noah@example.com', category: 'Speaker' },
]

const AdminRegistrations = () => {
  const [registrations] = useState(initialRegistrations)

  return (
    <section style={{ minHeight: '80vh', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gap: 16 }}>
        {registrations.map((registration) => (
          <div key={registration.id} style={{ border: '1px solid #e5e7eb', borderRadius: 20, padding: 16, background: '#fff' }}>
            <h3 style={{ margin: 0 }}>{registration.name}</h3>
            <p style={{ margin: '4px 0 0', color: '#666' }}>{registration.email}</p>
            <p style={{ margin: '4px 0 0', color: '#666' }}>Category: {registration.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminRegistrations
