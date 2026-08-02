import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const AdminLogin = () => {
  const [email, setEmail] = useState('admin@summitsphere.com')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) return
    setSubmitting(true)
    setError(null)
    try {
      const result = await api.post<{ token: string }>('/auth/login', { email, password })
      localStorage.setItem('adminToken', result.token)
      navigate('/admin/dashboard')
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Login failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-card lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Admin Access</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Secure management panel</h1>
          <p className="mt-4 text-slate-400">Sign in to create, edit, and remove conferences, speakers, news, and registrations.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
          <div className="space-y-5">
            {error && <p className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Admin ID or email" required className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 outline-none" />
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" required className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 outline-none" />
            <button type="submit" disabled={submitting} className="w-full rounded-2xl bg-gold px-5 py-4 font-semibold text-slate-950 transition hover:bg-[#dba11a] disabled:cursor-not-allowed disabled:opacity-60">{submitting ? 'Logging in...' : 'Login'}</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AdminLogin
