import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950/95 pt-16 pb-10 text-slate-400">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">A-Z SOLUTIONS</h3>
        <p className="max-w-xs text-sm leading-6 text-slate-400">
          A premium conference experience designed for professional events, scientific gatherings, and executive summits.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Explore</h4>
        <div className="space-y-2 text-sm text-slate-400">
          <a href="/about" className="block hover:text-white">About</a>
          <a href="/conference" className="block hover:text-white">Conferences</a>
          <a href="/speakers" className="block hover:text-white">Speakers</a>
          <a href="/contact" className="block hover:text-white">Contact</a>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Contact</h4>
        <div className="space-y-3 text-sm text-slate-400">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 h-4 w-4 text-gold" />
            <span>120 Park Avenue, New York, NY</span>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 h-4 w-4 text-gold" />
            <span>hello@summitsphere.com</span>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-1 h-4 w-4 text-gold" />
            <span>+1 (212) 555-0198</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Subscribe</h4>
        <p className="text-sm text-slate-400">Receive event updates, speaker announcements, and registration alerts.</p>
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent"
          />
          <button className="rounded-2xl bg-gold px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#d09f31]">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      © 2026 A-Z SOLUTIONS. Crafted for modern conference experiences.
    </div>
  </footer>
)

export default Footer
