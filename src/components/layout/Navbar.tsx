import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/services">Solutions</NavLink>
      <NavLink to="/speakers">Speakers</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}
