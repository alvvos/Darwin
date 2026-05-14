import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { getT } from '@/lib/content'

export default async function CoachingEvolutivo() {
  const t = await getT()
  const c = t.coaching_evolutivo

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] overflow-hidden pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">

        {/* ── Intro ── */}
        <section className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
          <FadeIn direction="left" className="max-w-2xl flex flex-col justify-center">
            <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">{c.label}</p>
            <blockquote className="border-l-2 border-darwin-orange pl-6 mb-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light italic">{c.intro_quote}</p>
            </blockquote>
            <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">{c.h1}</h1>
            <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              <p>{c.p1}</p>
              <p>{c.p2}</p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={120} className="relative hidden lg:block overflow-hidden border border-zinc-100 dark:border-white/5 min-h-[500px] group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-darwin-neonGreen to-darwin-orange z-10" />
            <img
              src="/15.png"
              alt="Coaching evolutivo — Darwin in Digital"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
            />
          </FadeIn>
        </section>

        {/* ── 4 pilares ── */}
        <section className="mb-24">
          <FadeIn delay={80}>
            <div className="grid md:grid-cols-2 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
              {[
                { title: c.h2_1, body: c.body_1, color: 'bg-darwin-orange' },
                { title: c.h2_2, body: c.body_2, color: 'bg-darwin-orange' },
                { title: c.h2_3, body: c.body_3, color: 'bg-darwin-neonGreen' },
                { title: c.h2_4, body: c.body_4, color: 'bg-darwin-neonGreen' },
              ].map(({ title, body, color }, i) => (
                <div key={i} className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-[2px] ${color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`} />
                  <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-24">
          <FadeIn>
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-white mb-8">{c.faq_heading}</h2>
            <div className="space-y-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
              {[
                { q: c.faq_1_q, a: c.faq_1_a },
                { q: c.faq_2_q, a: c.faq_2_a },
                { q: c.faq_3_q, a: c.faq_3_a },
              ].map(({ q, a }, i) => (
                <div key={i} className="p-8 bg-white dark:bg-zinc-900">
                  <p className="font-medium text-zinc-900 dark:text-white mb-3">{q}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── CTA ── */}
        <FadeIn>
          <section className="p-12 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-center relative overflow-hidden">
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
