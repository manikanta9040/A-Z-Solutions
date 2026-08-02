import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email.includes('@')) {
      setMessage('Please enter a valid email address.')
      return
    }
    setMessage('Thanks for subscribing. Weekly updates are on the way.')
    setEmail('')
  }

  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Stay in the loop</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">Subscribe for premium event updates</h3>
        <p className="mt-4 text-slate-400">Get access to announcements, speaker news, and conference highlights.</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="flex-1 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none" />
        <button type="submit" className="rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition hover:bg-accentDark">Subscribe</button>
      </form>
      {message && <p className="mt-4 text-sm text-slate-400">{message}</p>}
    </div>
  )
}

export default Newsletter
