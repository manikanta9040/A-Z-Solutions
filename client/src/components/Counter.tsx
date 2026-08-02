import { useEffect, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  label: string
}

const Counter = ({ value, suffix = '', label }: CounterProps) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDisplayValue((prev) => {
        if (prev >= value) {
          window.clearInterval(timer)
          return value
        }
        return prev + 1
      })
    }, 20)

    return () => window.clearInterval(timer)
  }, [value])

  return (
    <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-6 text-center shadow-card">
      <p className="text-3xl font-semibold text-white">{displayValue}{suffix}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}

export default Counter
