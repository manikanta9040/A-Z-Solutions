import { useEffect, useState } from 'react'
import { api } from '../services/api'
import type { Conference } from '../types'

export const useConferences = () => {
  const [data, setData] = useState<Conference[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    api.get<Conference[]>('/conferences')
      .then((conferences) => {
        if (active) setData(conferences)
      })
      .catch((requestError: Error) => {
        if (active) setError(requestError.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => { active = false }
  }, [])

  return { data, loading, error }
}
