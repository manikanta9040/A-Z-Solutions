import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import type { Conference } from '../types'
import { formatDate } from '../utils/formatters'

interface ConferenceCardProps {
  conference: Conference
}

const ConferenceCard = ({ conference }: ConferenceCardProps) => (
  <motion.article
    whileHover={{ y: -8, scale: 1.01 }}
    transition={{ duration: 0.2 }}
    className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 shadow-card"
  >
    <div className="relative h-56 overflow-hidden">
      <img src={conference.image || 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'} alt={conference.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      <div className="absolute left-5 top-5 rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
        {conference.category}
      </div>
    </div>
    <div className="space-y-5 p-8">
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span className="rounded-full border border-slate-700 px-3 py-1 capitalize">{conference.status}</span>
        <span className="font-semibold text-gold">{conference.price}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{conference.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{conference.description}</p>
      </div>
      <div className="space-y-3 text-sm text-slate-300">
        <div className="flex items-center gap-3">
          <FaRegCalendarAlt className="text-gold" />
          <span>{formatDate(conference.date)}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-gold" />
          <span>{conference.location}</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link to={`/conferences/${conference.slug}`} className="rounded-full border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-gold hover:text-gold">
          View Details
        </Link>
        <Link to="/registration" className="rounded-full bg-accent px-4 py-3 text-sm font-medium text-white transition hover:bg-accentDark">
          Register
        </Link>
      </div>
    </div>
  </motion.article>
)

export default ConferenceCard
