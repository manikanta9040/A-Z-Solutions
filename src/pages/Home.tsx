import HeroSection from '../components/home/HeroSection'
import UpcomingConferences from '../components/home/UpcomingConferences'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <HeroSection />
      <UpcomingConferences />
      <WhyChooseUs />
      <Testimonials />
      <section style={{ padding: '3rem 1.5rem', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', borderRadius: 24, border: '1px solid #e5e7eb', background: '#fff', padding: 32 }}>
          <h2 style={{ fontSize: 28, marginBottom: 8 }}>Admin Portal</h2>
          <p style={{ color: '#666', lineHeight: 1.7, marginBottom: 20 }}>Manage conferences, speakers, registrations, and news from a dedicated admin workspace.</p>
          <Link to="/admin/login" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 999, background: '#0b5ed7', color: '#fff', textDecoration: 'none' }}>Open Admin Page</Link>
        </div>
      </section>
      <CTASection />
    </>
  )
}
