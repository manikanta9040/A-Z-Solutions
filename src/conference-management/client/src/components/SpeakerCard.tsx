import { motion } from 'framer-motion'
import { FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa'
import type { Speaker } from '../types'

interface SpeakerCardProps {
  speaker: Speaker
}

const SpeakerCard = ({ speaker }: SpeakerCardProps) => (
  <motion.article whileHover={{ y: -6 }} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-7 shadow-card">
    <img src={speaker.image} alt={speaker.name} className="h-56 w-full rounded-[1.5rem] object-cover" />
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
      <p className="mt-2 text-sm font-medium text-gold">{speaker.role}</p>
      <p className="mt-2 text-sm text-slate-400">{speaker.company} • {speaker.country}</p>
      <p className="mt-4 text-sm leading-7 text-slate-300">{speaker.bio}</p>
    </div>
    <div className="mt-6 flex items-center gap-3">
      <a href="#" className="rounded-full border border-slate-700 p-3 text-slate-300 transition hover:border-gold hover:text-gold"><FaLinkedinIn /></a>
      <a href="#" className="rounded-full border border-slate-700 p-3 text-slate-300 transition hover:border-gold hover:text-gold"><FaTwitter /></a>
      <a href="#" className="rounded-full border border-slate-700 p-3 text-slate-300 transition hover:border-gold hover:text-gold"><FaGlobe /></a>
    </div>
  </motion.article>
)

export default SpeakerCard
