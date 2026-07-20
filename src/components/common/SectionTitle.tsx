interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="section-heading">
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-copy">{subtitle}</p> : null}
    </header>
  )
}
