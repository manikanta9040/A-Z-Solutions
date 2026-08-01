import { useState } from 'react'

type SpeakerItem = {
  id: number
  name: string
  role: string
  company: string
}

const initialSpeakers: SpeakerItem[] = [
  { id: 1, name: 'Dr. Amara Lin', role: 'Chief AI Officer', company: 'Northstar Labs' },
  { id: 2, name: 'Prof. Daniel Brooks', role: 'Director of Precision Health', company: 'Helix Institute' },
]

const AdminSpeakers = () => {
  const [speakers, setSpeakers] = useState(initialSpeakers)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)

  const resetForm = () => {
    setName('')
    setRole('')
    setCompany('')
    setEditingId(null)
  }

  const saveSpeaker = () => {
    if (!name || !role || !company) return

    if (editingId) {
      setSpeakers((prev) => prev.map((item) => item.id === editingId ? { ...item, name, role, company } : item))
    } else {
      setSpeakers((prev) => [...prev, { id: Date.now(), name, role, company }])
    }

    resetForm()
  }

  const editSpeaker = (speaker: SpeakerItem) => {
    setEditingId(speaker.id)
    setName(speaker.name)
    setRole(speaker.role)
    setCompany(speaker.company)
  }

  const removeSpeaker = (id: number) => {
    setSpeakers((prev) => prev.filter((speaker) => speaker.id !== id))
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-card">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Manage Speakers</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Add, edit, and remove featured experts</h1>
          </div>
          <button onClick={resetForm} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-gold hover:text-gold">
            {editingId ? 'Cancel Edit' : 'Clear Form'}
          </button>
        </div>

        <div className="mb-8 grid gap-4 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 md:grid-cols-3">
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Speaker name" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          <input value={role} onChange={(event) => setRole(event.target.value)} placeholder="Role" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Company" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          <div className="md:col-span-3">
            <button onClick={saveSpeaker} className="rounded-2xl bg-gold px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#dba11a]">
              {editingId ? 'Update Speaker' : 'Add Speaker'}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">{speaker.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{speaker.role} • {speaker.company}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => editSpeaker(speaker)} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-gold hover:text-gold">Edit</button>
                <button onClick={() => removeSpeaker(speaker.id)} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-500 hover:text-red-400">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminSpeakers
