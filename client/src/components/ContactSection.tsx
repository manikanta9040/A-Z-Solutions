import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaRegEnvelope } from 'react-icons/fa'

const ContactSection = () => (
  <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
      <h3 className="text-2xl font-semibold text-white">Send us a message</h3>
      <form className="mt-8 space-y-5">
        <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none" />
        <input type="email" placeholder="Your email" className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none" />
        <input type="text" placeholder="Subject" className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none" />
        <textarea rows={6} placeholder="Your message" className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none" />
        <button className="rounded-full bg-gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#dba11a]">Submit Enquiry</button>
      </form>
    </div>
    <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-card">
      <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex items-center gap-3 text-gold">
          <FaMapMarkerAlt />
          <span className="text-sm uppercase tracking-[0.3em]">Visit us</span>
        </div>
        <p className="mt-4 text-slate-300">120 Park Avenue, New York, NY 10017</p>
      </div>
      <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex items-center gap-3 text-gold">
          <FaPhoneAlt />
          <span className="text-sm uppercase tracking-[0.3em]">Call us</span>
        </div>
        <p className="mt-4 text-slate-300">+1 (212) 555-0198</p>
      </div>
      <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex items-center gap-3 text-gold">
          <FaRegEnvelope />
          <span className="text-sm uppercase tracking-[0.3em]">Email us</span>
        </div>
        <p className="mt-4 text-slate-300">hello@summitsphere.com</p>
      </div>
      <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex items-center gap-3 text-gold">
          <FaRegClock />
          <span className="text-sm uppercase tracking-[0.3em]">Business hours</span>
        </div>
        <p className="mt-4 text-slate-300">Mon – Fri • 8:00 AM to 6:00 PM</p>
      </div>
    </div>
  </div>
)

export default ContactSection
