import type { Metadata } from 'next'
import { ParallaxBand } from '@/components/parallax-band'
import { FadeIn } from '@/components/fade-in'
import { getT } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Soluciones y Servicios',
  description: 'Diseñamos el puente hacia tu próximo nivel. Identidad y estrategia, experiencias útiles, conexión y diálogo, acompañamiento de equipo. Resultados tangibles, sin siglas complejas.',
  alternates: { canonical: 'https://darwinindigital.com/servicios' },
  openGraph: {
    title: 'Soluciones y Servicios | Darwin in Digital',
    description: 'Diseñamos el puente hacia tu próximo nivel. Resultados tangibles que tu equipo y tus clientes puedan sentir.',
    url: 'https://darwinindigital.com/servicios',
  },
}

export default async function Servicios() {
  const t = await getT()
  const c = t.servicios

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] pt-32 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 pb-24">

        {/* ── Intro: texto + People ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn direction="left">
            <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">{c.label}</p>
            <h1 className="text-4xl md:text-6xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">{c.h1}</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{c.intro}</p>
          </FadeIn>

          <FadeIn direction="right" delay={120} className="hidden lg:block relative overflow-hidden border border-zinc-200 dark:border-white/5 h-80 group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-darwin-neonGreen to-darwin-orange z-10" />
            <img
              src="/59.png"
              alt="Equipos y redes de adaptación — Darwin in Digital"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
            />
          </FadeIn>
        </div>

        {/* ── Tarjetas de servicios ── */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">

            <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{c.s1_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{c.s1_body}</p>
            </div>

            <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{c.s2_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{c.s2_body}</p>
            </div>

            <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{c.s3_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{c.s3_body}</p>
            </div>

            <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{c.s4_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{c.s4_body}</p>
            </div>

          </div>
        </FadeIn>

      </div>

      {/* ── Parallax — pista evolutiva ── */}
      <ParallaxBand
        src="/58.png"
        alt="Zero-point. Evolutionary start."
        height="h-[20rem] md:h-[28rem]"
        speed={0.22}
      />
    </main>
  )
}
