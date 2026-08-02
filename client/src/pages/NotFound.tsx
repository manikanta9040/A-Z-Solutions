import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="flex min-h-[calc(100vh-6rem)] items-center justify-center bg-slate-950 px-6 py-20 text-center text-slate-100">
    <div className="max-w-xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-12 shadow-card">
      <p className="text-sm uppercase tracking-[0.32em] text-gold">Page missing</p>
      <h1 className="mt-6 text-5xl font-semibold text-white">404</h1>
      <p className="mt-4 text-slate-400">The page you're looking for could not be found. Return to the homepage to continue exploring.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-3xl bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-accentDark"
      >
        Back to home
      </Link>
    </div>
  </section>
)

export default NotFound
