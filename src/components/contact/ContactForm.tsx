export default function ContactForm() {
  return (
    <section className="section-panel">
      <h2 className="section-title">Get in touch</h2>
      <form>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="hello@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows={4} placeholder="Tell us about your question" />
        </label>
        <button className="button button-primary" type="button">
          Send message
        </button>
      </form>
    </section>
  )
}
