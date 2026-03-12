import { useEffect, useRef } from 'react'
import { SKILLS } from '../data/skills'

function SkillCategory({ category }: { category: typeof SKILLS[0] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('fade-in')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          el.querySelectorAll<HTMLElement>('.skill-fill').forEach(fill => {
            fill.style.width = fill.dataset.width + '%'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-category" ref={ref}>
      <div className="skill-icon">{category.icon}</div>
      <h3>{category.title}</h3>
      <div className="skill-items">
        {category.skills.map(skill => (
          <div className="skill-item" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" data-width={skill.level} style={{ width: 0 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03.</span> Tech Stack
        </h2>
        <div className="skills-grid">
          {SKILLS.map(cat => (
            <SkillCategory key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
