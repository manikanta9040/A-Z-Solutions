import type { CategoryItem, CommitteeMember, Conference, FAQItem, GalleryImage, NewsItem, Speaker, Sponsor, Testimonial } from '../types'

export const conferences: Conference[] = [
  {
    id: 1,
    title: 'Global AI Summit 2026',
    slug: 'global-ai-summit-2026',
    category: 'AI',
    date: '2026-09-18',
    location: 'Singapore',
    description: 'A premium gathering of research leaders, founders, and policy experts shaping applied AI.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    registrationDeadline: '2026-08-25',
    price: '$650',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Precision Healthcare Forum',
    slug: 'precision-healthcare-forum',
    category: 'Healthcare',
    date: '2026-10-02',
    location: 'Zurich',
    description: 'A multidisciplinary forum connecting clinicians, healthtech founders, and bio-data teams.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    registrationDeadline: '2026-09-10',
    price: '$590',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Cybersecurity Leadership Summit',
    slug: 'cybersecurity-leadership-summit',
    category: 'Cyber Security',
    date: '2026-11-14',
    location: 'London',
    description: 'Executive sessions on resilient digital strategy, compliance, and emerging threat intelligence.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    registrationDeadline: '2026-10-20',
    price: '$720',
    status: 'upcoming',
  },
]

export const categories: CategoryItem[] = [
  { id: 1, name: 'Medical', slug: 'medical', icon: '🩺', description: 'Clinical innovation and care delivery' },
  { id: 2, name: 'Engineering', slug: 'engineering', icon: '⚙️', description: 'Product systems and industrial transformation' },
  { id: 3, name: 'Technology', slug: 'technology', icon: '💻', description: 'Emerging platforms and digital acceleration' },
  { id: 4, name: 'Science', slug: 'science', icon: '🔬', description: 'Research and experimentation' },
  { id: 5, name: 'Business', slug: 'business', icon: '📈', description: 'Leadership and strategic growth' },
  { id: 6, name: 'AI', slug: 'ai', icon: '🤖', description: 'Responsible and applied intelligence' },
]

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dr. Amara Lin',
    role: 'Chief AI Officer',
    company: 'Northstar Labs',
    country: 'Singapore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Amara leads applied AI strategy for regulated industries and enterprise transformation.',
    socials: { linkedin: '#', twitter: '#', website: '#' },
  },
  {
    id: 2,
    name: 'Prof. Daniel Brooks',
    role: 'Director of Precision Health',
    company: 'Helix Institute',
    country: 'UK',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Daniel advances care delivery systems through personalized medicine and analytics.',
    socials: { linkedin: '#', twitter: '#', website: '#' },
  },
]

export const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: 'Dr. Sofia Patel',
    role: 'Scientific Chair',
    institution: 'Global Medical Research Institute',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Prof. Marcus Reed',
    role: 'Program Director',
    institution: 'Innovation and Policy Lab',
    country: 'Germany',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Elena Cruz',
    role: 'Head of Events',
    company: 'Vertex Group',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'The experience felt premium, polished, and genuinely elevating for our delegates.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Omar Hassan',
    role: 'Program Manager',
    company: 'Lumen Labs',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=800&q=80',
    quote: 'Every touchpoint was seamless — from registration to the closing session.',
    rating: 5,
  },
]

export const sponsors: Sponsor[] = [
  { id: 1, name: 'BluePeak', logo: 'BP' },
  { id: 2, name: 'Nexora', logo: 'NX' },
  { id: 3, name: 'Aurelia', logo: 'AU' },
  { id: 4, name: 'Vanta', logo: 'VT' },
]

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'How global conferences are evolving in 2026',
    excerpt: 'Explore the trends shaping speaker selection, sponsor engagement, and hybrid programming.',
    category: 'Insights',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    date: '2026-07-18',
  },
  {
    id: 2,
    title: 'Announcing the next round of scientific committee members',
    excerpt: 'A closer look at the new experts joining the advisory board.',
    category: 'Announcements',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    date: '2026-06-29',
  },
]

export const faqItems: FAQItem[] = [
  { id: 1, question: 'How do I register for a conference?', answer: 'Select your event, click register, and complete the short form to reserve your place.' },
  { id: 2, question: 'Can I submit an abstract?', answer: 'Yes. The abstract submission area allows you to upload your proposal for review.' },
  { id: 3, question: 'Is there a group registration option?', answer: 'Yes. Our team can support bulk registration for academic or corporate groups.' },
]

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80', alt: 'Conference stage', category: 'Events' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517457373958-b7b4f6f5d3f8?auto=format&fit=crop&w=900&q=80', alt: 'Networking session', category: 'Networking' },
  { id: 3, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', alt: 'Audience engagement', category: 'Audience' },
]
