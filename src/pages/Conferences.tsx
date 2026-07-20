import SectionTitle from '../components/common/SectionTitle'
import ConferenceFilters from '../components/conference/ConferenceFilters'
import UpcomingConferences from '../components/home/UpcomingConferences'

export default function Solutions() {
  return (
    <>
      <SectionTitle title="Solutions" subtitle="Discover our services and digital offerings." />
      <ConferenceFilters />
      <UpcomingConferences />
    </>
  )
}
