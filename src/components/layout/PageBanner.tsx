interface PageBannerProps {
  title: string
  subtitle: string
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="hero-panel">
      <p className="eyebrow">A-Z Solutions</p>
      <h1>{title}</h1>
      <p className="hero-copy">{subtitle}</p>
    </section>
  )
}
