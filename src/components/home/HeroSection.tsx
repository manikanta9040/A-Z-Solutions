import Button from '../common/Button'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <p className="eyebrow">Digital solutions for growing teams</p>
        <h1>Build modern web experiences with A-Z Solutions.</h1>
        <p className="hero-copy">
          We create custom websites, digital products, and strategic campaigns that help brands scale and connect with
          customers.
        </p>
        <div className="hero-actions">
          <Button className="button-primary">Explore services</Button>
          <Button variant="secondary" className="button-secondary">
            Contact us
          </Button>
        </div>
      </div>
      <div className="hero-panel">
        <h3>Featured service</h3>
        <p>Brand-focused web development and UX design for modern organizations.</p>
      </div>
    </section>
  )
}
