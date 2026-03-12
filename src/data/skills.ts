export interface SkillItem {
  name: string
  level: number
}

export interface SkillCategory {
  icon: string
  title: string
  skills: SkillItem[]
}

export const SKILLS: SkillCategory[] = [
  {
    icon: '⚒',
    title: 'Languages',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Go', level: 80 },
      { name: 'SQL', level: 90 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    icon: '⛅',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Docker', level: 90 },
      { name: 'Terraform', level: 65 },
    ],
  },
  {
    icon: '⚙',
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', level: 95 },
      { name: 'Kafka', level: 85 },
      { name: 'gRPC', level: 75 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    icon: '📎',
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Redis', level: 85 },
      { name: 'Oracle', level: 75 },
      { name: 'MongoDB', level: 65 },
    ],
  },
  {
    icon: '💰',
    title: 'Payments & Fintech',
    skills: [
      { name: 'Visa / Mastercard', level: 90 },
      { name: '3DS2 / Tokenization', level: 85 },
      { name: 'PCI-DSS', level: 85 },
      { name: 'Core Banking', level: 80 },
    ],
  },
  {
    icon: '🤖',
    title: 'Architecture & AI',
    skills: [
      { name: 'DDD / CQRS / Saga', level: 85 },
      { name: 'Event-Driven', level: 90 },
      { name: 'RAG Pipelines', level: 65 },
      { name: 'LLM Integration', level: 60 },
    ],
  },
]
