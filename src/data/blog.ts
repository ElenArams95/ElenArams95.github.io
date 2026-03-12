export interface BlogPost {
  date: string
  tag: string
  title: string
  excerpt: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    date: 'Coming Soon',
    tag: 'Payments',
    title: 'How We Migrated 1M Cardholders With Zero Downtime',
    excerpt: 'A deep dive into the architecture and strategies behind migrating a million cardholders between issuing banks without a single second of service interruption.',
  },
  {
    date: 'Coming Soon',
    tag: 'Architecture',
    title: 'Event-Driven Settlement Systems in Fintech',
    excerpt: 'Why event-driven architecture is the right choice for building settlement and reconciliation systems, and the patterns that make it work at scale.',
  },
  {
    date: 'Coming Soon',
    tag: 'Java vs Go',
    title: 'When to Use Go Over Java in Payment Systems',
    excerpt: "After years of working with both languages in production payment systems, here's my framework for choosing the right tool for each microservice.",
  },
]
