export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">06.</span> Get in Touch
        </h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>I'm currently open to <strong>Remote B2B contracts</strong> for Senior Java Developer / Lead Go Developer roles, especially in <strong>fintech and payments</strong>.</p>
            <p>Whether you have a question, a project, or just want to say hi — my inbox is always open.</p>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/helen-golang-java-ai-engineer/" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">in</div>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:helen.aramyan@gmail.com" className="contact-card">
              <div className="contact-icon">@</div>
              <span>Email</span>
            </a>
          </div>
          <div className="contact-availability">
            <div className="availability-dot" />
            <span>Available for Remote B2B contracts</span>
          </div>
        </div>
      </div>
    </section>
  )
}
