import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LangToggle } from './lang-toggle'
import { MobileNav } from './mobile-nav'
import { getT, getLocale } from '@/lib/content'

export default async function Header() {
  const [t, locale] = await Promise.all([getT(), getLocale()])
  const nav = t.nav

  const primaryServices = [
    { href: '/servicios/coaching-y-liderazgo-evolutivo', label: t.coaching_evolutivo.label },
  ]

  const secondaryServices = [
    { href: '/servicios/tecnologia-para-tu-crecimiento', label: t.tecnologia_crecimiento.label },
    { href: '/servicios/el-poder-de-lo-sencillo',        label: t.poder_sencillo.label },
    { href: '/servicios/aprender-con-ilusion',            label: t.aprender_ilusion.label },
    { href: '/servicios/decisiones-audaces-con-claridad', label: t.decisiones_audaces.label },
    { href: '/servicios/autenticidad-como-superpoder',    label: t.autenticidad_superpoder.label },
    { href: '/historias-de-evolucion/crecer-en-compania', label: t.historias_crecer.label },
  ]

  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-darwin-dark/80 backdrop-blur-2xl transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="font-sans font-bold text-lg tracking-tight text-zinc-900 dark:text-darwin-light hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors duration-300">
          {nav.brand}
        </Link>

        <div className="flex items-center gap-3 md:gap-10">

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/como-lo-hacemos" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-darwin-light transition-colors relative group">
              {nav.metodologia}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-darwin-neonGreen transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Soluciones con dropdown */}
            <div className="relative group">
              <Link href="/servicios" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-darwin-light transition-colors relative flex items-center gap-1">
                {nav.soluciones}
                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-darwin-neonGreen transition-all duration-300 group-hover:w-full" />
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl min-w-[260px]">
                  {primaryServices.map(({ href, label }) => (
                    <Link key={href} href={href}
                      className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-darwin-orange dark:hover:text-darwin-neonGreen hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                      <span className="w-1 h-1 rounded-full bg-darwin-orange flex-shrink-0" />
                      {label}
                    </Link>
                  ))}
                  <div className="h-px bg-zinc-100 dark:bg-zinc-800 mx-5 my-1" />
                  {secondaryServices.map(({ href, label }) => (
                    <Link key={href} href={href}
                      className="block px-5 py-2.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-darwin-light hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/quien-soy" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-darwin-light transition-colors relative group">
              {nav.quien_soy}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-darwin-neonGreen transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* ── Controls ── */}
          <div className="flex items-center gap-2 md:gap-4">
            <LangToggle locale={locale} />
            <ThemeToggle />

            <Link
              href="/hablemos"
              className="hidden md:inline-flex text-sm font-medium text-white bg-zinc-900 dark:bg-darwin-neonGreen dark:text-black px-6 py-2 hover:bg-darwin-orange dark:hover:bg-darwin-light transition-all duration-300 rounded-sm"
            >
              {nav.hablemos}
            </Link>

            <MobileNav nav={nav} primaryServices={primaryServices} secondaryServices={secondaryServices} />
          </div>

        </div>
      </div>
    </header>
  )
}
