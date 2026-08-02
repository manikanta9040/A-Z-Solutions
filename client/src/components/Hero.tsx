import { motion } from 'framer-motion'
import { FaChevronDown, FaPlay, FaRocket, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-slate-950/80">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80"
        alt="Conference audience"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,179,1,0.24),_transparent_30%)]" />
    </div>

    <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-32">
      <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur">
            <FaRocket className="text-gold" /> Premium conference management experience
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Host unforgettable global conferences with premium clarity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build impactful events with refined registration flows, curated speakers, and executive-grade experiences for attendees and organizers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/registration" className="rounded-full bg-gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#dba11a]">
              Register Now
            </Link>
            <Link to="/conferences" className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:text-gold">
              Explore Conferences
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: '120+', label: 'Countries' },
              { value: '3.4K', label: 'Attendees' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-900/50 px-5 py-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-card backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Live Search</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Find the right event</h2>
            </div>
            <div className="rounded-2xl bg-accent/15 p-3 text-accent">
              <FaPlay />
            </div>
          </div>
          <SearchBar />
          <div className="mt-6 rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-300">
            <div className="flex items-center gap-3 text-gold">
              <FaUsers /> Trusted by professionals across 45+ industries
            </div>
            <p className="mt-4 leading-7 text-slate-400">From medical symposiums to AI leadership summits — our platform supports every major conference style.</p>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
      <FaChevronDown size={20} />
    </div>
  </section>
)

export default Hero
