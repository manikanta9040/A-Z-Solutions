import { useEffect, useState } from 'react'
import type { Conference } from '../types/conference'
import { getConferences } from '../services/conferenceService'

export function useFetchConferences() {
  const [conferences, setConferences] = useState<Conference[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getConferences()
      .then((data) => setConferences(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { conferences, loading, error }
}
