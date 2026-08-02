import { useState } from 'react'

type NewsItem = {
  id: number
  title: string
  category: string
  excerpt: string
}

const initialNews: NewsItem[] = [
  { id: 1, title: 'Conference updates now live', category: 'Announcements', excerpt: 'New speaker announcements and event updates have been published.' },
]

const AdminNews = () => {
  const [news, setNews] = useState(initialNews)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)

  const resetForm = () => {
    setTitle('')
    setCategory('')
    setExcerpt('')
    setEditingId(null)
  }

  const saveNews = () => {
    if (!title || !category || !excerpt) return

    if (editingId) {
      setNews((prev) => prev.map((item) => item.id === editingId ? { ...item, title, category, excerpt } : item))
    } else {
      setNews((prev) => [...prev, { id: Date.now(), title, category, excerpt }])
    }

    resetForm()
  }

  const editNews = (item: NewsItem) => {
    setEditingId(item.id)
    setTitle(item.title)
    setCategory(item.category)
    setExcerpt(item.excerpt)
  }

  const removeNews = (id: number) => {
    setNews((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-card">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Manage News</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Publish and manage updates</h1>
          </div>
          <button onClick={resetForm} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-gold hover:text-gold">
            {editingId ? 'Cancel Edit' : 'Clear Form'}
          </button>
        </div>

        <div className="mb-8 space-y-4 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="News title" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
            <input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          </div>
          <textarea value={excerpt} onChange={(event) => setExcerpt(event.target.value)} placeholder="Excerpt" rows={4} className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 outline-none" />
          <button onClick={saveNews} className="rounded-2xl bg-gold px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#dba11a]">
            {editingId ? 'Update News' : 'Add News'}
          </button>
        </div>

        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                  <p className="mt-1 text-sm text-slate-400">{item.category}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{item.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => editNews(item)} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-gold hover:text-gold">Edit</button>
                  <button onClick={() => removeNews(item.id)} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-500 hover:text-red-400">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminNews
