import { useState } from 'react'

type ConferenceItem = {
  id: number
  title: string
  location: string
  category: string
  date: string
  description: string
}

const initialConferences: ConferenceItem[] = [
  {
    id: 1,
    title: 'Global AI Summit 2026',
    location: 'Singapore',
    category: 'AI',
    date: '2026-09-18',
    description: 'Premium event for applied AI leaders and research teams.',
  },
  {
    id: 2,
    title: 'Precision Healthcare Forum',
    location: 'Zurich',
    category: 'Healthcare',
    date: '2026-10-02',
    description: 'A multidisciplinary forum for healthcare innovation leaders.',
  },
]

const AdminConferences = () => {
  const [conferences, setConferences] = useState(initialConferences)
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)

  const resetForm = () => {
    setTitle('')
    setLocation('')
    setCategory('')
    setDate('')
    setDescription('')
    setEditingId(null)
  }

  const addConference = () => {
    if (!title || !location || !category || !date || !description) return

    if (editingId) {
      setConferences((prev) => prev.map((item) => item.id === editingId ? { ...item, title, location, category, date, description } : item))
    } else {
      setConferences((prev) => [...prev, { id: Date.now(), title, location, category, date, description }])
    }

    resetForm()
  }

  const editConference = (item: ConferenceItem) => {
    setEditingId(item.id)
    setTitle(item.title)
    setLocation(item.location)
    setCategory(item.category)
    setDate(item.date)
    setDescription(item.description)
  }

  const removeConference = (id: number) => {
    setConferences((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-card">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Manage Conferences</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Create, edit, and remove conferences</h1>
          </div>
          <button onClick={resetForm} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-gold hover:text-gold">
            {editingId ? 'Cancel Edit' : 'Clear Form'}
          </button>
        </div>

        <div className="mb-8 space-y-4 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Conference title" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
            <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Location" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
            <input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
            <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          </div>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Conference description" rows={4} className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          <button onClick={addConference} className="rounded-2xl bg-gold px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#dba11a]">
            {editingId ? 'Update Conference' : 'Add Conference'}
          </button>
        </div>

        <div className="space-y-4">
          {conferences.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-400">{item.location} • {item.category} • {item.date}</p>
                <p className="mt-2 text-sm leading-7 text-slate-500">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => editConference(item)} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-gold hover:text-gold">Edit</button>
                <button onClick={() => removeConference(item.id)} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-500 hover:text-red-400">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminConferences
