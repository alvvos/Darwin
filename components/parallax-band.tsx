'use client'
import { useRef, useEffect, useState } from 'react'

export function ParallaxBand({
  src,
  alt = '',
  height = 'h-[28rem]',
  speed = 0.2,
  overlay = false,
}: {
  src: string
  alt?: string
  height?: string
  speed?: number
  overlay?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(center * speed)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [speed])

  return (
    <div ref={containerRef} className={`relative ${height} overflow-hidden`}>
      {overlay && (
        <div className="absolute inset-0 z-10 bg-black/20 dark:bg-black/50" />
      )}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${offset}px) scale(1.25)` }}
      />
    </div>
  )
}
