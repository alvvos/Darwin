import type { Locale } from './content'

export function setLocale(locale: Locale) {
  if (typeof document !== 'undefined') {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
    window.location.reload()
  }
}
