import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [email, setEmail] = useState('admin@summitsphere.com')
  const [password, setPassword] = useState('admin123')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    localStorage.setItem('adminToken', 'demo-admin-token')
    navigate('/admin/dashboard')
  }

  return (
    <section style={{ minHeight: '80vh', padding: '3rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 900, width: '100%', border: '1px solid #e5e7eb', borderRadius: 24, padding: 32, background: '#fff' }}>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>Admin Login</h1>
        <p style={{ marginBottom: 24, color: '#666' }}>Access the conference management dashboard.</p>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" style={{ padding: 14, borderRadius: 12, border: '1px solid #ddd' }} />
          <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" type="password" style={{ padding: 14, borderRadius: 12, border: '1px solid #ddd' }} />
          <button type="submit" style={{ padding: 14, borderRadius: 12, background: '#0b5ed7', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    </section>
  )
}

export default AdminLogin
