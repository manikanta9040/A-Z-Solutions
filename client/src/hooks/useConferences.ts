import { useEffect, useState } from 'react'
import { conferences as mockConferences } from '../data/mockData'
import type { Conference } from '../types'

export const useConferences = () => {
  const [data, setData] = useState<Conference[]>(mockConferences)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 400)
    return () => window.clearInterval(timer)
  }, [])

  return { data, loading }
}
