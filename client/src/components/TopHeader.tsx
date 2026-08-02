import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TopHeader = () => (
  <div className="border-b border-slate-800/80 bg-slate-950/90 px-4 py-3 text-sm text-slate-300 backdrop-blur">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 lg:px-8">
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex items-center gap-2">
          <FaRegEnvelope className="text-gold" /> hello@summitsphere.com
        </span>
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-gold" /> +1 (212) 555-0198
        </span>
        <span>120 Park Avenue, New York, NY</span>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" aria-label="Facebook" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-gold hover:text-gold">
          <FaFacebookF size={14} />
        </a>
        <a href="#" aria-label="Twitter" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-gold hover:text-gold">
          <FaTwitter size={14} />
        </a>
        <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-gold hover:text-gold">
          <FaLinkedinIn size={14} />
        </a>
        <a href="#" aria-label="Instagram" className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-gold hover:text-gold">
          <FaInstagram size={14} />
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/registration" className="rounded-full border border-gold/50 px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold hover:text-slate-950">
          Register
        </Link>
        <Link to="/abstract-submission" className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accentDark">
          Submit Abstract
        </Link>
      </div>
    </div>
  </div>
)

export default TopHeader
