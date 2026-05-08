'use client'
import { useRef, useEffect, useState } from 'react'

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const initial: Record<string, string> = {
    up: 'translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    none: '',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${initial[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
