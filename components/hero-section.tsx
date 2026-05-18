'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useRef, useEffect } from 'react'
import type { T } from '@/lib/content'

/**
 * Parallax de scroll con doble capa:
 *
 *   Capa trasera (imagen Darwin) — avanza al 38 % de la velocidad del scroll
 *   Capa delantera (texto)       — se mueve a velocidad natural (0 % de offset)
 *
 * El observador percibe profundidad porque ambas capas se desplazan a distintas
 * velocidades respecto al viewport: diferencia de ~62 % de h por scroll completo.
 *
 * Cálculo: offset = -rect.top × SPEED + INITIAL_Y
 *   • El contenedor (-38 % arriba, -38 % abajo) tiene 176 vh de alto.
 *   • Con object-cover la imagen llena la altura exacta del contenedor, lo que
 *     sitúa la cara de Darwin (~15 % del alto de imagen) a -105 px del viewport
 *     cuando rect.top = 0. INITIAL_Y compensa ese desplazamiento para que la
 *     cara sea visible desde el primer fotograma sin crear huecos en los bordes
 *     (el cálculo demuestra que image_top permanece siempre por encima del
 *     viewport durante todo el recorrido de scroll).
 */

const SPEED     = 0.38
const INITIAL_Y = 40  // px; mueve la imagen hacia abajo para mostrar la cara

export function HeroSection({ content }: { content: T['home']['hero'] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      const img     = imgRef.current
      if (!section || !img) return

      const rect = section.getBoundingClientRect()
      // Fuera del viewport: no calcular
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      img.style.transform = `translateY(${-rect.top * SPEED + INITIAL_Y}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // estado inicial
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hero = content

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden border-b border-zinc-200 dark:border-white/5"
    >

      {/* ── Capa 1: imagen Darwin — desktop
          Ocupa el ancho completo con objectPosition '0 % 35 %':
          dado que el contenedor es más alto (por el padding parallax)
          la imagen se escala para cubrir la altura, generando overflow
          horizontal. Al alinear desde el borde izquierdo, Darwin queda
          en el tercio derecho del viewport (~70 %).
      ── */}
      <div
        ref={imgRef}
        aria-hidden
        className="absolute inset-x-0 will-change-transform"
        style={{ top: '-38%', bottom: '-38%' }}
      >
        <img
          src="/9.jpg"
          alt=""
          className="w-full h-full object-cover opacity-95 dark:opacity-45 object-[center_30%] sm:object-[0%_35%]"
          draggable={false}
        />
      </div>

      {/* ── Capa 2: gradientes de legibilidad ── */}
      {/* fade horizontal: blanco/oscuro desde izquierda hasta ~70 % */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none
          bg-gradient-to-r
          from-white          via-white/88   to-white/8
          dark:from-[#050505] dark:via-[#050505]/82 dark:to-[#050505]/4"
      />
      {/* vignette vertical: cabecera y pie más opacos */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none
          bg-gradient-to-b
          from-white/35 via-transparent to-white/55
          dark:from-[#050505]/45 dark:via-transparent dark:to-[#050505]/65"
      />

      {/* ── Capa 3: texto (velocidad natural de scroll = plano delantero) ── */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-[50ch]">

            <p className="font-mono text-xs tracking-[0.22em] text-zinc-500 dark:text-zinc-400 mb-8 uppercase
                          selection:bg-darwin-neonGreen selection:text-black">
              {hero.label}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-[5.75rem] font-medium
                           text-zinc-900 dark:text-white
                           tracking-tight leading-[1.0] mb-8
                           selection:bg-darwin-neonGreen selection:text-black">
              {hero.h1_line1}<br />
              {hero.h1_line2}<br />
              {hero.h1_line3}<br />
              <span className="italic font-light text-zinc-400 dark:text-zinc-500">
                {hero.h1_line4}
              </span>
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5 font-light">
              {hero.p1}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-14 font-light">
              {hero.p2}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <Link
                href="/hablemos"
                className="group flex items-center gap-4 text-zinc-900 dark:text-white font-medium text-lg tracking-wide hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors duration-300"
              >
                <span>{hero.cta_primary}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <div className="hidden sm:block w-px h-8 bg-zinc-300 dark:bg-zinc-700" />
              <Link
                href="/como-lo-hacemos"
                className="text-zinc-600 dark:text-zinc-400 font-medium text-lg tracking-wide hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
              >
                {hero.cta_secondary}
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Indicador de scroll ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-30 dark:opacity-20">
        <div
          className="w-px h-10 bg-zinc-500 dark:bg-zinc-400 origin-top"
          style={{ animation: 'expandLine 2.2s ease-in-out infinite' }}
        />
        <div className="w-1.5 h-1.5 rounded-full bg-darwin-neonGreen animate-pulse" />
      </div>

    </section>
  )
}
