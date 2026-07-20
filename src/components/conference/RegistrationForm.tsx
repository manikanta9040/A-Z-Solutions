export default function RegistrationForm() {
  return (
    <section className="section-panel registration-panel">
      <h3>Register now</h3>
      <form>
        <label>
          Full name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email address
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <button className="button button-primary" type="button">
          Submit registration
        </button>
      </form>
    </section>
  )
}
