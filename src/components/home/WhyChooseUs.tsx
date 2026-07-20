import Card from '../common/Card'

const features = [
  {
    title: 'Strategic digital design',
    description: 'Crafted interfaces and product flows that engage customers and increase conversions.',
  },
  {
    title: 'Reliable delivery',
    description: 'Fast, transparent execution so your projects stay on time and on budget.',
  },
  {
    title: 'Growth-focused support',
    description: 'Ongoing optimization and partnership to help your business scale with confidence.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-panel">
      <header className="section-heading">
        <h2 className="section-title">Why choose us</h2>
        <p className="section-copy">A-Z Solutions is built for modern teams that want clear outcomes and fast delivery.</p>
      </header>
      <div className="card-grid">
        {features.map((feature) => (
          <Card key={feature.title} className="info-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
