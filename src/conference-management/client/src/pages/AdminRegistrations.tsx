import { useState } from 'react'

type RegistrationItem = {
  id: number
  name: string
  email: string
  category: string
  status: 'Pending' | 'Approved' | 'Rejected'
}

const initialRegistrations: RegistrationItem[] = [
  { id: 1, name: 'Mina Chen', email: 'mina@example.com', category: 'Attendee', status: 'Pending' },
  { id: 2, name: 'Noah Reed', email: 'noah@example.com', category: 'Speaker', status: 'Approved' },
]

const AdminRegistrations = () => {
  const [registrations, setRegistrations] = useState(initialRegistrations)

  const updateStatus = (id: number, status: RegistrationItem['status']) => {
    setRegistrations((prev) => prev.map((item) => item.id === id ? { ...item, status } : item))
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-card">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Manage Registrations</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Review attendee submissions</h1>
        </div>
        <div className="space-y-4">
          {registrations.map((registration) => (
            <div key={registration.id} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">{registration.name}</h2>
                  <p className="mt-1 text-sm text-slate-400">{registration.email}</p>
                  <p className="mt-2 text-sm text-slate-500">Category: {registration.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">{registration.status}</span>
                  <button onClick={() => updateStatus(registration.id, 'Approved')} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-emerald-500 hover:text-emerald-400">Approve</button>
                  <button onClick={() => updateStatus(registration.id, 'Rejected')} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-500 hover:text-red-400">Reject</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminRegistrations
