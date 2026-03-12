export interface Achievement {
  icon: string
  title: string
  description: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: '🏦',
    title: 'Bank-to-Bank Migration',
    description: 'Led the full migration of 1M+ cardholders between issuing banks with zero downtime and full regulatory compliance across multiple markets.',
  },
  {
    icon: '💳',
    title: 'Payment Scheme Integrations',
    description: 'Architected and delivered direct integrations with Visa (VTS, Visa Direct), Mastercard (MDES, Mastercard Send), MPGS, and UnionPay.',
  },
  {
    icon: '⚡',
    title: '10K+ TPS Processing',
    description: 'Built real-time payment authorization pipelines handling 10,000+ transactions per second with sub-100ms latency.',
  },
  {
    icon: '🚀',
    title: 'Monolith to Microservices',
    description: "Decomposed Adobe Workfront's monolith into 30+ independently deployable microservices used by Fortune 500 clients.",
  },
  {
    icon: '⏱',
    title: 'Deployment: 4h to 20min',
    description: 'Automated the entire CI/CD pipeline, cutting deployment time by 92% and enabling 3+ releases per day.',
  },
  {
    icon: '🌐',
    title: 'Enterprise Connectors',
    description: 'Built production integrations for Adobe Fusion: Outlook, Salesforce, Jira, Workday — handling 5M+ daily API calls.',
  },
]
