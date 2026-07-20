import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section-panel">
      <h2 className="section-title">Page not found</h2>
      <p className="section-copy">The page you are looking for does not exist.</p>
      <Link to="/" className="button button-secondary">
        Return home
      </Link>
    </section>
  )
}
