import { useEffect, useRef } from 'react'

interface Stat {
  target: number
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { target: 10, suffix: '+', label: 'Years Experience' },
  { target: 1, suffix: 'M+', label: 'Cardholders Migrated' },
  { target: 30, suffix: '+', label: 'Microservices Built' },
  { target: 10, suffix: 'K+ TPS', label: 'Payment Processing' },
]

function StatCard({ target, suffix, label }: Stat) {
  const numRef = useRef<HTMLSpanElement>(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true
          const duration = 2000
          const step = target / (duration / 16)
          let current = 0
          const update = () => {
            current += step
            if (current < target) {
              el.textContent = String(Math.ceil(current))
              requestAnimationFrame(update)
            } else {
              el.textContent = String(target)
            }
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div className="stat-card fade-in">
      <span className="stat-number" ref={numRef}>0</span>
      <span className="stat-suffix">{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>When a bank needs to migrate a million cardholders seamlessly, or an enterprise platform needs its monolith rearchitected into 30+ microservices, or Visa and Mastercard integrations need to work flawlessly in production — that's where I come in.</p>
            <p>I'm a <strong>Senior Java &amp; Go Developer</strong> and <strong>Lead Engineer</strong> with over a decade of experience building systems that handle millions of transactions. Currently leading backend engineering at a <strong>licensed digital banking platform</strong> processing payments across multiple markets.</p>
            <p>Previously at <strong>Adobe</strong>, I worked on Workfront and Fusion — decomposing monoliths, building enterprise integrations (Outlook, Salesforce, Jira), owning the full DevOps lifecycle, and cutting deployment times from 4 hours to 20 minutes.</p>
            <p>I thrive on complexity: payment schemes, regulatory compliance, high-throughput event-driven systems, and leading international engineering teams.</p>
          </div>
          <div className="about-stats">
            {STATS.map(stat => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
