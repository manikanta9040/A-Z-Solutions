import { useEffect, useState } from 'react'
import { api } from '../services/api'

type ConferenceItem = {
  id: number
  title: string
  slug: string
  location: string
  category: string
  date: string
  description: string
  featured?: boolean
  status?: string
}

const createSlug = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const AdminConferences = () => {
  const [conferences, setConferences] = useState<ConferenceItem[]>([])
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const loadConferences = async () => {
    try {
      setConferences(await api.get<ConferenceItem[]>('/conferences'))
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to load conferences')
    }
  }

  useEffect(() => { void loadConferences() }, [])

  const resetForm = () => {
    setTitle('')
    setLocation('')
    setCategory('')
    setDate('')
    setDescription('')
    setEditingId(null)
  }

  const saveConference = async () => {
    if (!title || !location || !category || !date || !description) {
      setError('Complete every field before saving.')
      return
    }

    setSaving(true)
    setError(null)
    const payload = { title, slug: createSlug(title), location, category, date, description, featured: false, status: 'upcoming' }

    try {
      if (editingId) {
        await api.put(`/conferences/${editingId}`, payload)
      } else {
        await api.post('/conferences', payload)
      }
      await loadConferences()
      resetForm()
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to save conference')
    } finally {
      setSaving(false)
    }
  }

  const editConference = (item: ConferenceItem) => {
    setEditingId(item.id)
    setTitle(item.title)
    setLocation(item.location)
    setCategory(item.category)
    setDate(item.date)
    setDescription(item.description)
    setError(null)
  }

  const removeConference = async (id: number) => {
    setError(null)
    try {
      await api.delete(`/conferences/${id}`)
      await loadConferences()
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to delete conference')
    }
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

        {error && <p className="mb-6 rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}

        <div className="mb-8 space-y-4 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Conference title" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
            <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Location" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
            <input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
            <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          </div>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Conference description" rows={4} className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          <button disabled={saving} onClick={saveConference} className="rounded-2xl bg-gold px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#dba11a] disabled:cursor-not-allowed disabled:opacity-60">
            {saving ? 'Saving...' : editingId ? 'Update Conference' : 'Add Conference'}
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
                <button onClick={() => void removeConference(item.id)} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-500 hover:text-red-400">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminConferences
