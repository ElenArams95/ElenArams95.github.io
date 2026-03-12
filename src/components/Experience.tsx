import { useEffect, useRef } from 'react'
import { EXPERIENCE } from '../data/experience'

function useFadeIn(ref: React.RefObject<Element | null>) {
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
  }, [ref])
}

function TimelineItem({ item }: { item: typeof EXPERIENCE[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref)

  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-marker" />
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role" dangerouslySetInnerHTML={{ __html: item.role }} />
            <p className="timeline-company">{item.company}</p>
          </div>
          <span className="timeline-date">{item.date}</span>
        </div>
        <p className="timeline-description">{item.description}</p>
        {item.achievements.length > 0 && (
          <ul className="timeline-achievements">
            {item.achievements.map((a, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: String(a) }} />
            ))}
          </ul>
        )}
        <div className="timeline-tech">
          {item.tech.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02.</span> Experience
        </h2>
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <TimelineItem key={item.company + item.date} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
