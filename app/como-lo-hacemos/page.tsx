import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { getT } from '@/lib/content'

export default async function Metodologia() {
  const t = await getT()
  const c = t.metodologia

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] overflow-hidden pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">

        {/* ── Intro + imagen cerebro ── */}
        <section className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
          <FadeIn direction="left" className="max-w-2xl flex flex-col justify-center">
            <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">{c.label}</p>
            <h1 className="text-4xl md:text-6xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              {c.h1_main} <span className="text-darwin-orange">{c.h1_accent}</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">{c.intro}</p>
          </FadeIn>

          <FadeIn direction="right" delay={120} className="relative hidden lg:block overflow-hidden border border-zinc-100 dark:border-white/5 min-h-[500px] group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-darwin-neonGreen to-darwin-orange z-10" />
            <img
              src="/57.png"
              alt="Sistema operativo cognitivo — Darwin in Digital Architectural Synthesis"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
            />
          </FadeIn>
        </section>

        {/* ── 6 pilares ── */}
        <section className="mb-24">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl font-medium text-zinc-900 dark:text-white">{c.pillars_heading}</h2>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">

              {[
                { num: c.p1_num, title: c.p1_title, body: c.p1_body, color: 'bg-darwin-orange' },
                { num: c.p2_num, title: c.p2_title, body: c.p2_body, color: 'bg-darwin-orange' },
                { num: c.p3_num, title: c.p3_title, body: c.p3_body, color: 'bg-darwin-orange' },
                { num: c.p4_num, title: c.p4_title, body: c.p4_body, color: 'bg-darwin-neonGreen' },
                { num: c.p5_num, title: c.p5_title, body: c.p5_body, color: 'bg-darwin-neonGreen' },
                { num: c.p6_num, title: c.p6_title, body: c.p6_body, color: 'bg-darwin-neonGreen' },
              ].map(({ num, title, body, color }) => (
                <div key={num} className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-[2px] ${color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`} />
                  <div className="text-zinc-400 font-mono text-xs tracking-widest mb-4">{num}</div>
                  <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">{title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">{body}</p>
                </div>
              ))}

            </div>
          </FadeIn>
        </section>

        {/* ── CTA ── */}
        <FadeIn>
          <section className="p-12 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-center relative overflow-hidden">
            <h2 className="text-2xl font-medium text-zinc-900 dark:text-white mb-4">{c.cta_heading}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 font-light">{c.cta_body}</p>
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
