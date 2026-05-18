import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { getT } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Autenticidad como Superpoder',
  description: 'En un mar de algoritmos, tu vulnerabilidad, humor y ética son tus activos más escasos y magnéticos. La supervivencia del más auténtico. Amplifica tu verdad en el mundo digital.',
  alternates: { canonical: 'https://darwinindigital.com/soluciones/autenticidad-como-superpoder' },
  openGraph: {
    title: 'Autenticidad como Superpoder | Darwin in Digital',
    description: 'Tu autenticidad es tu mayor ventaja en un mundo digital. La IA no puede clonar lo que eres.',
    url: 'https://darwinindigital.com/soluciones/autenticidad-como-superpoder',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://darwinindigital.com/soluciones/autenticidad-como-superpoder#service',
      name: 'Autenticidad como Superpoder',
      description: 'Desarrollo del liderazgo desde la identidad y los valores propios. Amplifica tu verdad en el entorno digital.',
      provider: { '@id': 'https://darwinindigital.com/#organization' },
      url: 'https://darwinindigital.com/soluciones/autenticidad-como-superpoder',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Por qué la autenticidad es clave hoy?',
          acceptedAnswer: { '@type': 'Answer', text: 'Porque es lo único que la IA no puede clonar. La eficiencia se compra; la lealtad se gana siendo real.' },
        },
        {
          '@type': 'Question',
          name: '¿Cómo aplico la autenticidad en digital?',
          acceptedAnswer: { '@type': 'Answer', text: 'Siendo transparente, admitiendo fallos y manteniendo una coherencia total entre lo que dices y lo que haces.' },
        },
      ],
    },
  ],
}

export default async function AutenticidadSuperpoder() {
  const t = await getT()
  const c = t.autenticidad_superpoder

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
