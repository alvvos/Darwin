import { HeroSection } from '@/components/hero-section'
import { FadeIn } from '@/components/fade-in'
import { getT } from '@/lib/content'

export default async function Home() {
  const t = await getT()
  const { pillars, metamorphosis, hero } = t.home

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">

      {/* ── Hero con parallax de scroll ── */}
      <HeroSection content={hero} />

      {/* ── Dos pilares ── */}
      <section className="py-24 bg-white dark:bg-[#050505] border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">

            <div className="p-12 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
              <h3 className="text-2xl font-medium text-zinc-900 dark:text-white mb-6">{pillars.p1_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-lg">{pillars.p1_body}</p>
            </div>

            <div className="p-12 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-darwin-neonGreen transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <h3 className="text-2xl font-medium text-zinc-900 dark:text-white mb-6">{pillars.p2_title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-lg">{pillars.p2_body}</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Metamorfosis ── */}
      <section className="py-32 bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-5 gap-10 items-center mb-16">
            <FadeIn direction="left" className="lg:col-span-3">
              <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight">
                {metamorphosis.heading}
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={100} className="hidden lg:block lg:col-span-2 relative overflow-hidden h-40 border border-zinc-200 dark:border-zinc-800">
              <img
                src="/54.jpg"
                alt="Darwinian Digital Architecture: Survival of the Adapters"
                className="w-full h-full object-cover object-left grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
              />
            </FadeIn>
          </div>

          <FadeIn>
            <div className="grid md:grid-cols-3 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">

              <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
                <div className="text-zinc-400 font-mono text-xs tracking-widest mb-6 uppercase">{metamorphosis.phase1_label}</div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{metamorphosis.phase1_title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{metamorphosis.phase1_body}</p>
              </div>

              <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-darwin-orange transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="text-darwin-orange font-mono text-xs tracking-widest mb-6 uppercase">{metamorphosis.phase2_label}</div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{metamorphosis.phase2_title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{metamorphosis.phase2_body}</p>
              </div>

              <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-darwin-neonGreen transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="text-darwin-neonGreen font-mono text-xs tracking-widest mb-6 uppercase">{metamorphosis.phase3_label}</div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">{metamorphosis.phase3_title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{metamorphosis.phase3_body}</p>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

    </main>
  )
}
