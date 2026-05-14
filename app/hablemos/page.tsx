import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { getT } from '@/lib/content'

export default async function Hablemos() {
  const t = await getT()
  const c = t.hablemos

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] pt-32 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 pb-24">

        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          {c.back}
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Columna texto ── */}
          <FadeIn direction="left">
            <div className="max-w-xl">
              <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">{c.label}</p>
              <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">{c.h1}</h1>

              <div className="space-y-6 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                <p>{c.p1}</p>

                <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-darwin-neonGreen" />
                  <p className="text-zinc-900 dark:text-white font-medium mb-2">{c.card_title}</p>
                  <p className="text-sm">{c.card_body}</p>
                </div>

                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-darwin-orange mt-2.5 flex-shrink-0" />
                    <p><strong className="font-medium text-zinc-900 dark:text-white">{c.bullet1_strong}</strong> {c.bullet1_text}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-darwin-orange mt-2.5 flex-shrink-0" />
                    <p><strong className="font-medium text-zinc-900 dark:text-white">{c.bullet2_strong}</strong> {c.bullet2_text}</p>
                  </li>
                </ul>

                <blockquote className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-lg italic text-zinc-500 dark:text-zinc-400">{c.quote}</p>
                </blockquote>
              </div>
            </div>
          </FadeIn>

          {/* ── Columna contacto ── */}
          <FadeIn direction="right" delay={120}>
            <div className="bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-darwin-neonGreen to-darwin-orange" />

              <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-10 uppercase">{c.contact_label}</p>

              <div className="space-y-8">
                <div className="group">
                  <p className="text-xs font-mono tracking-widest text-zinc-400 mb-2 uppercase">{c.gmail_label}</p>
                  <div className="flex items-center gap-4 p-5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 group-hover:border-darwin-neonGreen transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-darwin-neonGreen flex-shrink-0" />
                    <a href="mailto:miguel@darwinindigital.com" className="text-zinc-900 dark:text-white font-medium tracking-wide hover:text-darwin-orange transition-colors">miguel@darwinindigital.com</a>
                  </div>
                </div>

                <div className="group">
                  <p className="text-xs font-mono tracking-widests text-zinc-400 mb-2 uppercase">{c.phone_label}</p>
                  <div className="flex items-center gap-4 p-5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 group-hover:border-darwin-orange transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-darwin-orange flex-shrink-0" />
                    <a href="tel:+34629317055" className="text-zinc-900 dark:text-white font-medium tracking-wide hover:text-darwin-orange transition-colors">629 317 055</a>
                  </div>
                </div>
              </div>

              <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">{c.response_note}</p>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* ── Be the Kind One ── */}
      <div className="relative h-64 md:h-80 overflow-hidden border-t border-zinc-200 dark:border-white/5 group">
        <img
          src="/1.png"
          alt="Be the kind one — Darwin in Digital"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] scale-[1.03] group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-zinc-50/20 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
      </div>
    </main>
  )
}
