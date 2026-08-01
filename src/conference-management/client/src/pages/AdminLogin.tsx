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
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-card lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Admin Access</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Secure management panel</h1>
          <p className="mt-4 text-slate-400">Sign in to create, edit, and remove conferences, speakers, news, and registrations.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
          <div className="space-y-5">
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email address" className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 outline-none" />
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 outline-none" />
            <button type="submit" className="w-full rounded-2xl bg-gold px-5 py-4 font-semibold text-slate-950 transition hover:bg-[#dba11a]">Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AdminLogin
