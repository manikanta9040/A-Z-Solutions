import { motion } from 'framer-motion'
import { sponsors } from '../data/mockData'

const Sponsors = () => (
  <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
    <div className="flex animate-[marquee_18s_linear_infinite] gap-8 py-2">
      {[...sponsors, ...sponsors].map((sponsor, index) => (
        <motion.div key={`${sponsor.id}-${index}`} whileHover={{ scale: 1.05 }} className="flex min-w-[180px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/90 px-6 py-4 text-lg font-semibold text-slate-300">
          {sponsor.logo}
        </motion.div>
      ))}
    </div>
  </div>
)

export default Sponsors
