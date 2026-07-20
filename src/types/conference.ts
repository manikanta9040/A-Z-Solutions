export interface Conference {
  id: string
  title: string
  date: string
  location: string
  summary: string
  speakers: string[]
  agenda: Array<{ time: string; title: string; description: string }>
  venue: {
    name: string
    address: string
    mapUrl: string
  }
}
