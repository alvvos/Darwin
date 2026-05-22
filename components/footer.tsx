import Link from 'next/link'
import { getT } from '@/lib/content'

export default async function Footer() {
  const t = await getT()
  const f = t.footer
  const nav = t.nav

  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-zinc-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">

        <div className="mb-12">
          <Link href="/" className="font-sans font-bold text-xl tracking-tight text-zinc-900 dark:text-white mb-4 inline-block hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
            {nav.brand}
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 font-light max-w-sm leading-relaxed mt-4">
            {f.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-16">
          <Link href="/" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {f.nav_inicio}
          </Link>
          <Link href="/como-lo-hacemos" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {f.nav_metodologia}
          </Link>

          <details className="relative group/sol">
            <summary className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer list-none flex items-center gap-1 select-none">
              {f.nav_soluciones}
              <svg className="w-3 h-3 transition-transform duration-200 group-open/sol:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="absolute bottom-full left-0 mb-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl min-w-[240px] z-10">
              <Link href="/soluciones" className="block px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-darwin-orange dark:hover:text-darwin-neonGreen hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {f.nav_soluciones}
              </Link>
              <div className="h-px bg-zinc-100 dark:bg-zinc-800 mx-4 my-0.5" />
              <Link href="/soluciones/coaching-y-liderazgo-evolutivo" className="block px-4 py-2.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {t.coaching_evolutivo.label}
              </Link>
              <Link href="/soluciones/tecnologia-para-tu-crecimiento" className="block px-4 py-2.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {t.tecnologia_crecimiento.label}
              </Link>
              <Link href="/soluciones/el-poder-de-lo-sencillo" className="block px-4 py-2.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {t.poder_sencillo.label}
              </Link>
              <Link href="/soluciones/aprender-con-ilusion" className="block px-4 py-2.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {t.aprender_ilusion.label}
              </Link>
              <Link href="/soluciones/decisiones-audaces-con-claridad" className="block px-4 py-2.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {t.decisiones_audaces.label}
              </Link>
              <Link href="/soluciones/autenticidad-como-superpoder" className="block px-4 py-2.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {t.autenticidad_superpoder.label}
              </Link>
              <Link href="/historias-de-evolucion/crecer-en-compania" className="block px-4 py-2.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                {t.historias_crecer.label}
              </Link>
            </div>
          </details>

          <Link href="/quien-soy" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {f.nav_quien_soy}
          </Link>
          <Link href="/hablemos" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
            {nav.hablemos}
          </Link>
          <Link href="/aviso-legal" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {f.aviso_legal}
          </Link>
          <Link href="/privacidad" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {f.privacidad}
          </Link>
          <Link href="/cookies" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {f.cookies}
          </Link>
        </nav>

        <div className="pt-8 border-t border-zinc-100 dark:border-white/5">
          <p className="text-xs text-zinc-400 font-light">
            {f.copyright} · {f.nif}
          </p>
        </div>

      </div>
    </footer>
  )
}
