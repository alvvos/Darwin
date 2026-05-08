import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { LangToggle } from './lang-toggle'
import { getT, getLocale } from '@/lib/content'

export default async function Header() {
  const [t, locale] = await Promise.all([getT(), getLocale()])
  const nav = t.nav

  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-darwin-dark/80 backdrop-blur-2xl transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="font-sans font-bold text-lg tracking-tight text-zinc-900 dark:text-darwin-light hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors duration-300">
          {nav.brand}
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/como-lo-hacemos" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-darwin-light transition-colors relative group">
              {nav.metodologia}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-darwin-neonGreen transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/servicios" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-darwin-light transition-colors relative group">
              {nav.soluciones}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-darwin-neonGreen transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/quien-soy" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-darwin-light transition-colors relative group">
              {nav.quien_soy}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-darwin-neonGreen transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LangToggle locale={locale} />
            <ThemeToggle />

            <Link
              href="/hablemos"
              className="text-sm font-medium text-white bg-zinc-900 dark:bg-darwin-neonGreen dark:text-black px-6 py-2 hover:bg-darwin-orange dark:hover:bg-darwin-light transition-all duration-300 rounded-sm"
            >
              {nav.hablemos}
            </Link>
          </div>
        </div>

      </div>
    </header>
  )
}
