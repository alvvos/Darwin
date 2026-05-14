'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

type ServiceLink = { href: string; label: string }

type Props = {
  nav: { metodologia: string; soluciones: string; quien_soy: string; hablemos: string }
  primaryServices: ServiceLink[]
  secondaryServices: ServiceLink[]
}

export function MobileNav({ nav, primaryServices, secondaryServices }: Props) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const close = () => { setOpen(false); setServicesOpen(false) }

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="fixed top-20 inset-x-0 bottom-0 bg-white dark:bg-[#050505] z-50 overflow-y-auto border-t border-zinc-200 dark:border-white/5">
          <nav className="container mx-auto px-6 py-4 flex flex-col">

            <Link href="/como-lo-hacemos" onClick={close}
              className="flex items-center py-4 border-b border-zinc-100 dark:border-zinc-800 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
              {nav.metodologia}
            </Link>

            {/* Soluciones expandable */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center justify-between py-4">
                <Link href="/servicios" onClick={close}
                  className="text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
                  {nav.soluciones}
                </Link>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {servicesOpen && (
                <div className="pb-4 pl-3 flex flex-col">
                  {primaryServices.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={close}
                      className="flex items-center gap-2.5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-darwin-orange flex-shrink-0" />
                      {label}
                    </Link>
                  ))}
                  <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-2 mx-1" />
                  {secondaryServices.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={close}
                      className="py-2.5 pl-4 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/quien-soy" onClick={close}
              className="flex items-center py-4 border-b border-zinc-100 dark:border-zinc-800 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
              {nav.quien_soy}
            </Link>

            <Link href="/hablemos" onClick={close}
              className="mt-8 flex items-center justify-center py-3.5 bg-zinc-900 dark:bg-darwin-neonGreen text-white dark:text-black font-medium text-sm hover:bg-darwin-orange transition-colors rounded-sm">
              {nav.hablemos}
            </Link>

          </nav>
        </div>
      )}
    </div>
  )
}
