import { useTypewriter } from '../hooks/useTypewriter'

const TAGS = ['ex-Adobe', '1M+ Card Migration', 'Visa / Mastercard', 'AWS', 'Open to Remote B2B']

export default function Hero() {
  const text = useTypewriter()

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">elen@dev ~ %</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">{text}</span>
              <span className="terminal-cursor">|</span>
            </p>
          </div>
        </div>
        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">Elen Aramyan</span>
        </h1>
        <p className="hero-subtitle">Senior Java &amp; Go Developer | Lead Engineer</p>
        <p className="hero-description">
          10+ years building enterprise-grade distributed systems in{' '}
          <span className="highlight">fintech</span>,{' '}
          <span className="highlight">payments</span>, and{' '}
          <span className="highlight">cloud infrastructure</span>.
        </p>
        <div className="hero-tags">
          {TAGS.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#experience" className="btn btn-secondary">View Experience</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
