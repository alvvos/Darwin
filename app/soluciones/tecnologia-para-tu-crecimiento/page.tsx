import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { getT } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Tecnología para Tu Crecimiento',
  description: 'La tecnología como trampolín hacia tu porqué. Usa la IA como tu aliada para recuperar tiempo, claridad mental y el espacio donde nacen las ideas que cambian las reglas del juego.',
  alternates: { canonical: 'https://darwinindigital.com/soluciones/tecnologia-para-tu-crecimiento' },
  openGraph: {
    title: 'Tecnología para Tu Crecimiento | Darwin in Digital',
    description: 'La tecnología como motor de tu bienestar y mayor potencial. Libera tu tiempo para crear, liderar e inspirar.',
    url: 'https://darwinindigital.com/soluciones/tecnologia-para-tu-crecimiento',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://darwinindigital.com/soluciones/tecnologia-para-tu-crecimiento#service',
      name: 'Tecnología para Tu Crecimiento',
      description: 'La tecnología como motor de tu bienestar y mayor potencial. Libera tu tiempo para crear, liderar e inspirar.',
      provider: { '@id': 'https://darwinindigital.com/#organization' },
      url: 'https://darwinindigital.com/soluciones/tecnologia-para-tu-crecimiento',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo ayuda la tecnología a mi crecimiento?',
          acceptedAnswer: { '@type': 'Answer', text: 'Al asumir tareas monótonas, te regala «claridad mental», el activo más escaso de la era moderna, para que te enfoques en conectar e inspirar.' },
        },
        {
          '@type': 'Question',
          name: '¿Por qué es vital la ilusión?',
          acceptedAnswer: { '@type': 'Answer', text: 'Porque el miedo paraliza el aprendizaje. A veces el mayor cambio no es técnico, sino psicológico: ver la herramienta como un regalo, no como una amenaza.' },
        },
      ],
    },
  ],
}

export default async function TecnologiaCrecimiento() {
  const t = await getT()
  const c = t.tecnologia_crecimiento

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-6">

        <FadeIn direction="left" className="max-w-3xl mb-20">
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">{c.label}</p>
          <h1 className="text-4xl md:text-6xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">{c.h1}</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{c.intro}</p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="border border-zinc-200 dark:border-zinc-800 mb-16">
            <div className="p-10 bg-white dark:bg-zinc-900">
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-white mb-4">{c.h2}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">{c.body}</p>
              <div className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <p className="text-zinc-700 dark:text-zinc-300 font-light">
                  <span className="font-medium text-zinc-900 dark:text-white">{c.bullet1_strong}</span> {c.bullet1_text}
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 font-light">
                  <span className="font-medium text-zinc-900 dark:text-white">{c.bullet2_strong}</span> {c.bullet2_text}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <section className="mb-16">
          <FadeIn>
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-white mb-8">{c.faq_heading}</h2>
            <div className="space-y-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
              {[
                { q: c.faq_1_q, a: c.faq_1_a },
                { q: c.faq_2_q, a: c.faq_2_a },
              ].map(({ q, a }, i) => (
                <div key={i} className="p-8 bg-white dark:bg-zinc-900">
                  <p className="font-medium text-zinc-900 dark:text-white mb-3">{q}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <FadeIn>
          <section className="p-12 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-center">
            <Link
              href="/hablemos"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-zinc-900 dark:bg-darwin-neonGreen text-white dark:text-black font-medium hover:bg-darwin-neonGreen dark:hover:bg-darwin-light hover:text-black transition-colors duration-300"
            >
              {c.cta_button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </FadeIn>

      </div>
    </main>
  )
}
