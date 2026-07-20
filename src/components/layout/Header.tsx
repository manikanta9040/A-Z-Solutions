import Navbar from './Navbar'
import ThemeToggle from '../common/ThemeToggle'

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">A-Z Solutions</div>
      <Navbar />
      <ThemeToggle />
    </header>
  )
}
