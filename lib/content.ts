import raw from '@/content/content.json'

const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export type T = typeof raw.translations['es']

export async function getLocale(): Promise<Locale> {
  try {
    const { cookies } = await import('next/headers')
    const store = await cookies()
    const val = store.get('locale')?.value
    return val && LOCALES.includes(val as Locale) ? (val as Locale) : (raw.locale as Locale) ?? 'es'
  } catch {
    return (raw.locale as Locale) ?? 'es'
  }
}

export async function getT(): Promise<T> {
  const locale = await getLocale()
  return raw.translations[locale] as T
}
