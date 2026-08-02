import { useState } from 'react'
import { faqItems } from '../data/mockData'

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <div className="space-y-4">
      {faqItems.map((item) => (
        <div key={item.id} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-6 shadow-card">
          <button className="flex w-full items-center justify-between text-left" onClick={() => setOpenId(openId === item.id ? null : item.id)}>
            <span className="text-lg font-semibold text-white">{item.question}</span>
            <span className="text-2xl text-gold">{openId === item.id ? '−' : '+'}</span>
          </button>
          {openId === item.id && <p className="mt-4 text-sm leading-7 text-slate-400">{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default FAQSection
