import { useEffect, useRef } from 'react'
import { BLOG_POSTS } from '../data/blog'

function BlogCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  const ref = useRef<HTMLElement>(null)

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
    <article className="blog-card" ref={ref}>
      <div className="blog-meta">
        <span className="blog-date">{post.date}</span>
        <span className="blog-tag">{post.tag}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <a href="#" className="blog-link">Read more →</a>
    </article>
  )
}

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">05.</span> Blog
        </h2>
        <p className="section-subtitle">Thoughts on engineering, payments, and distributed systems.</p>
        <div className="blog-grid">
          {BLOG_POSTS.map(post => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
