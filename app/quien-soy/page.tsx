import { getT } from '@/lib/content'

export default async function QuienSoy() {
  const t = await getT()
  const c = t.quien_soy

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative bg-zinc-50 dark:bg-zinc-900/30 p-4 sm:p-8 border border-zinc-100 dark:border-white/5">
            <img
              src="/perfil.png"
              alt="Miguel Sánchez"
              className="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="order-1 lg:order-2 max-w-2xl">
            <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">
              {c.label}
            </p>

            <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
              {c.h1}
            </h1>

            <blockquote className="border-l-2 border-darwin-orange pl-6 mb-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light italic">
                {c.quote}
              </p>
            </blockquote>

            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              <p>{c.p1}</p>
              <p>{c.p2}</p>
              <p className="text-zinc-900 dark:text-white font-medium">{c.p3}</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}
