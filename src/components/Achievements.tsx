import { useEffect, useRef } from 'react'
import { ACHIEVEMENTS } from '../data/achievements'

function AchievementCard({ achievement }: { achievement: typeof ACHIEVEMENTS[0] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('fade-in')
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="achievement-card" ref={ref}>
      <div className="achievement-icon">{achievement.icon}</div>
      <h3>{achievement.title}</h3>
      <p>{achievement.description}</p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section className="section section-alt" id="achievements">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">04.</span> Key Achievements
        </h2>
        <div className="achievements-grid">
          {ACHIEVEMENTS.map(a => (
            <AchievementCard key={a.title} achievement={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
