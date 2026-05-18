'use client'

import type { Locale } from '@/lib/content'

type Props = {
  locale: Locale
  onSwitch: (locale: Locale) => void
}

export function LangToggle({ locale, onSwitch }: Props) {
  const next: Locale = locale === 'es' ? 'en' : 'es'

  function handleClick() {
    document.cookie = `locale=${next}; path=/; max-age=${60 * 60 * 24 * 365}`
    onSwitch(next)
  }

  return (
    <button
      onClick={handleClick}
      className="text-xs font-mono tracking-[0.15em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white px-2.5 py-1 transition-colors duration-300 uppercase"
      aria-label={`Switch to ${next === 'en' ? 'English' : 'Español'}`}
    >
      {next.toUpperCase()}
    </button>
  )
}
