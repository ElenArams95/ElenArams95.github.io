export interface TimelineItem {
  role: string
  company: string
  date: string
  description: string
  achievements: Array<string | { text: string; bold?: string[] }>
  tech: string[]
  isCurrent?: boolean
}

export const EXPERIENCE: TimelineItem[] = [
  {
    isCurrent: true,
    role: 'Lead Senior Java / Go Developer',
    company: 'Licensed Digital Banking Platform',
    date: 'Dec 2022 — Present',
    description: 'Leading backend engineering for a card issuing platform serving 20M+ cardholders across multiple markets.',
    achievements: [
      'Led full migration of <strong>1M+ cardholders</strong> between issuing banks — zero downtime, full regulatory compliance',
      'Architected integrations with <strong>Visa</strong> (VTS, Visa Direct), <strong>Mastercard</strong> (MDES, Mastercard Send), <strong>MPGS</strong>, UnionPay',
      'Built real-time payment processing pipelines handling <strong>10K+ TPS</strong>',
      'Designed event-driven settlement, reconciliation, and dispute systems',
      'Implemented <strong>3DS2 authentication</strong>, tokenization, and PCI-DSS compliant card lifecycle management',
      'Integrated core banking systems (ledger, KYC, transaction management)',
    ],
    tech: ['Java 17+', 'Go', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'AWS', 'Kubernetes', 'Docker'],
  },
  {
    role: 'Senior Software Developer',
    company: 'Adobe — Fusion',
    date: 'Jul 2021 — Jul 2022',
    description: 'Core backend engineer on the workflow automation platform connecting 200+ enterprise applications.',
    achievements: [
      'Designed and built production connectors: <strong>Microsoft Outlook, Salesforce, Jira, Workday</strong>',
      'Architected connector framework handling <strong>5M+ daily API calls</strong> across customer tenants',
      'Built OAuth2 and API key authentication flows for third-party integrations',
      'Drove <strong>Go adoption</strong> for high-performance microservices alongside Java codebase',
      'Mentored junior and mid-level engineers, led code reviews and architecture discussions',
    ],
    tech: ['Java', 'Go', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'REST', 'OAuth2', 'PostgreSQL'],
  },
  {
    role: 'Software Developer II → Senior Developer',
    company: 'Adobe — Workfront',
    date: 'Dec 2017 — Jul 2021',
    description: 'Backend engineer on Workfront — an enterprise project management platform processing millions of daily requests.',
    achievements: [
      'Led disaggregation of monolith into <strong>30+ independently deployable microservices</strong>',
      'Reduced deployment time from <strong>4 hours to 20 minutes</strong> through CI/CD automation',
      'Rewrote legacy Java services — <strong>60% faster responses</strong>, reduced technical debt by 40%',
      'Improved test coverage from 45% to <strong>85%</strong>',
      'Optimized high-load PostgreSQL and Oracle queries — reduced p95 latency by <strong>50%</strong>',
      'Owned full DevOps lifecycle: Jenkins, Docker, AWS infrastructure, monitoring',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Oracle', 'Jenkins', 'Docker', 'SonarQube', 'DataDog'],
  },
  {
    role: 'Software Developer',
    company: 'Webb Fontaine',
    date: 'Oct 2016 — Dec 2017',
    description: 'Software engineer at a global leader in customs and trade automation, providing AI-powered solutions to governments across 10+ countries.',
    achievements: [
      'Developed Java-based automation frameworks for customs declaration processing',
      'Built financial application modules for duty calculation and tariff classification',
      'Integrated with government regulatory systems and cross-border data exchange protocols',
    ],
    tech: ['Java', 'Spring', 'REST', 'Oracle DB', 'Linux'],
  },
  {
    role: 'Software Developer',
    company: 'IBM ISTC',
    date: 'Mar 2016 — Oct 2016',
    description: "Built FoodMiX — an AI-powered recipe recommendation startup from the ground up within IBM's startup incubator.",
    achievements: [],
    tech: ['Java', 'Spring', 'REST', 'PostgreSQL', 'ML'],
  },
]
