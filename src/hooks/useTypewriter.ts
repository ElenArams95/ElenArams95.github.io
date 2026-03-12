import { useEffect, useState } from 'react'

const COMMANDS = [
  'cat about.me --skills java,go,aws',
  'deploy --env production --zero-downtime',
  'migrate --cardholders 1000000 --status success',
  'kubectl get pods -n payments',
  'git push origin feature/visa-integration',
]

export function useTypewriter() {
  const [text, setText] = useState('')

  useEffect(() => {
    let cmdIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId: ReturnType<typeof setTimeout>

    function tick() {
      const current = COMMANDS[cmdIndex]
      let speed: number

      if (isDeleting) {
        charIndex--
        setText(current.substring(0, charIndex))
        speed = 30
      } else {
        charIndex++
        setText(current.substring(0, charIndex))
        speed = 80
      }

      if (!isDeleting && charIndex === current.length) {
        speed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        cmdIndex = (cmdIndex + 1) % COMMANDS.length
        speed = 500
      }

      timeoutId = setTimeout(tick, speed)
    }

    timeoutId = setTimeout(tick, 80)
    return () => clearTimeout(timeoutId)
  }, [])

  return text
}
