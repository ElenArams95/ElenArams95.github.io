import { useRef } from 'react'
import { useParticles } from '../hooks/useParticles'

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useParticles(canvasRef)
  return <canvas id="particles" ref={canvasRef} />
}
