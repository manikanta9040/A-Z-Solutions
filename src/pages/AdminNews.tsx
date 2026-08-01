import { useState } from 'react'

type NewsItem = {
  id: number
  title: string
  category: string
}

const initialNews: NewsItem[] = [{ id: 1, title: 'Conference updates now live', category: 'Announcements' }]

const AdminNews = () => {
  const [news, setNews] = useState(initialNews)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  const addNews = () => {
    if (!title || !category) return
    setNews((prev) => [...prev, { id: Date.now(), title, category }])
    setTitle('')
    setCategory('')
  }

  return (
    <section style={{ minHeight: '80vh', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gap: 20 }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 24, padding: 24, background: '#fff' }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>Manage News</h1>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr auto' }}>
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="News title" style={{ padding: 12, borderRadius: 12, border: '1px solid #ddd' }} />
            <input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" style={{ padding: 12, borderRadius: 12, border: '1px solid #ddd' }} />
            <button onClick={addNews} style={{ padding: '12px 16px', borderRadius: 12, background: '#0b5ed7', color: '#fff', border: 'none', cursor: 'pointer' }}>Add</button>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {news.map((item) => (
            <div key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: 20, padding: 16, background: '#fff' }}>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: '4px 0 0', color: '#666' }}>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminNews
