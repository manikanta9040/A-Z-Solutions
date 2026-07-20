import type { Conference } from '../types/conference'
import { CONFERENCES_PATH } from '../utils/constants'
import { fetchJson } from './api'

export async function getConferences() {
  return fetchJson<Conference[]>(CONFERENCES_PATH)
}

export async function getConferenceById(id: string) {
  const conferences = await getConferences()
  return conferences.find((conference) => conference.id === id)
}
