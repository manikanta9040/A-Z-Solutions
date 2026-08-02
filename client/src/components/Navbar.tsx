import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Conferences', path: '/conferences' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Committee', path: '/committee' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Admin', path: '/admin/login' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-slate-950/90 shadow-2xl shadow-slate-950/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-sky-500 text-xl shadow-card">
            A-Z
          </span>
          <span>
            A-Z <span className="text-gold">SOLUTIONS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white">
            Quick Links <HiChevronDown className="h-4 w-4" />
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-white transition hover:border-gold hover:text-gold md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-5 shadow-2xl shadow-slate-950/40 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-base font-medium text-slate-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
