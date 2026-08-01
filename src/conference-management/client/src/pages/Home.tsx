import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ConferenceCard from '../components/ConferenceCard'
import CategoryCard from '../components/CategoryCard'
import Counter from '../components/Counter'
import SpeakerCard from '../components/SpeakerCard'
import CommitteeCard from '../components/CommitteeCard'
import Timeline from '../components/Timeline'
import Testimonials from '../components/Testimonials'
import Sponsors from '../components/Sponsors'
import Gallery from '../components/Gallery'
import FAQSection from '../components/FAQSection'
import Newsletter from '../components/Newsletter'
import ContactSection from '../components/ContactSection'
import { categories, committeeMembers, speakers } from '../data/mockData'
import { useConferences } from '../hooks/useConferences'

const stats = [
  { value: 120, suffix: '+', label: 'Countries' },
  { value: 320, suffix: '+', label: 'Speakers' },
  { value: 4500, suffix: '+', label: 'Attendees' },
  { value: 85, suffix: '+', label: 'Partners' },
]

const Home = () => {
  const { data: conferences, loading } = useConferences()

  return (
    <div className="overflow-hidden">
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Featured Conferences</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Curated events for premium audiences</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">From global summits to scientific forums, every experience is designed for excellence, networking, and audience engagement.</p>
        </div>
        {loading ? (
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 text-slate-400">Loading featured conferences...</div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {conferences.map((conference) => (
              <ConferenceCard key={conference.id} conference={conference} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Conference Categories</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Explore opportunities across every sector</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Why Choose Us</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Built for organizers who expect excellence</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Global Reach', 'Connect with delegates from every major region.'],
            ['Professional Networking', 'Facilitate meaningful interactions and follow-up opportunities.'],
            ['Certification', 'Offer verified credentials and event recognition.'],
            ['Publication Opportunities', 'Support research visibility and editorial partnerships.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Featured Speakers</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Recognized experts and thought leaders</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">Our speaker roster combines authority, research depth, and storytelling to create unforgettable sessions.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Scientific Committee</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The advisory team behind every experience</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {committeeMembers.map((member) => (
            <CommitteeCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Important Dates</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A clear timeline for every stage</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">Stay ahead with structured milestones from abstract submission to event delivery.</p>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Testimonials</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trusted by global organizers</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Sponsors</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Proudly supported by visionary partners</h2>
        </div>
        <Sponsors />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Gallery</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Moments from previous events</h2>
        </div>
        <Gallery />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Clear answers for organizers and delegates</h2>
        </div>
        <FAQSection />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Newsletter />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ContactSection />
      </section>
    </div>
  )
}

export default Home
