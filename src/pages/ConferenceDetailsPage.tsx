import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getConferenceById } from '../services/conferenceService'
import type { Conference } from '../types/conference'
import ConferenceDetails from '../components/conference/ConferenceDetails'
import SpeakerList from '../components/conference/SpeakerList'
import VenueSection from '../components/conference/VenueSection'
import RegistrationForm from '../components/conference/RegistrationForm'

export default function ConferenceDetailsPage() {
  const { id } = useParams()
  const [conference, setConference] = useState<Conference | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    getConferenceById(id)
      .then((data) => setConference(data ?? null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="section-panel">Loading service details…</div>
  }

  if (!conference) {
    return <div className="section-panel">Service not found.</div>
  }

  return (
    <>
      <ConferenceDetails conference={conference} />
      <SpeakerList />
      <VenueSection />
      <RegistrationForm />
    </>
  )
}
