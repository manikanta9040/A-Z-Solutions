import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Testimonial } from '../types'
import { testimonials } from '../data/mockData'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial: Testimonial = testimonials[activeIndex]

  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
      <motion.div key={activeTestimonial.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="flex items-center gap-4">
          <img src={activeTestimonial.image} alt={activeTestimonial.name} className="h-16 w-16 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-semibold text-white">{activeTestimonial.name}</h3>
            <p className="text-sm text-slate-400">{activeTestimonial.role} • {activeTestimonial.company}</p>
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 text-slate-300">“{activeTestimonial.quote}”</p>
        <div className="mt-4 text-gold">{'★'.repeat(activeTestimonial.rating)}</div>
      </motion.div>
      <div className="mt-6 flex gap-2">
        {testimonials.map((item, index) => (
          <button key={item.id} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition ${index === activeIndex ? 'w-8 bg-gold' : 'w-2.5 bg-slate-700'}`} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
