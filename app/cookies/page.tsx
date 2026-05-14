import { FadeIn } from '@/components/fade-in'

export const metadata = {
  title: 'Política de Cookies | Darwin in Digital',
  description: 'Te explicamos de forma humana y sencilla qué son las cookies, cómo las utilizamos en Darwin in Digital para mejorar tu visita y cómo puedes controlarlas.',
}

export default function Cookies() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">

        <FadeIn direction="left">
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8 uppercase">Legal</p>
          <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
            Política de Cookies: Pequeñas ayudas para mejorar tu visita
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-16">
            En DARWIN IN DIGITAL SLU siempre defendemos que la tecnología debe ser un asistente amable, nunca un motivo de preocupación. Las famosas «cookies» son exactamente eso: pequeños asistentes invisibles. Una cookie es un diminuto archivo de texto que se guarda en tu navegador cuando visitas nuestra web. No son virus, no son programas espía y no pueden leer la información personal o privada de tu equipo.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="space-y-12">

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-6 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                ¿Para qué usamos a estos asistentes?
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-darwin-neonGreen" />
                  <p className="font-medium text-zinc-900 dark:text-white mb-2">Asistentes necesarios (Cookies técnicas)</p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                    Son las que permiten que la web funcione correctamente y cargue rápido. Por ejemplo, sirven para recordar si ya has aceptado este mismo aviso y no volver a molestarte con él.
                  </p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-darwin-orange" />
                  <p className="font-medium text-zinc-900 dark:text-white mb-2">Asistentes de aprendizaje (Cookies de análisis)</p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                    Nos ayudan a entender, de forma totalmente anónima, qué artículos te gustan más o si hay algún botón que está fallando. Esta información nos permite crear contenidos cada vez más motivadores y útiles para ti.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                Tu tranquilidad es lo primero: Tú tienes el control
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                No utilizamos estas herramientas para perseguirte con publicidad invasiva por todo internet. Aún así, la decisión sobre qué asistentes dejas entrar en tu navegador es exclusivamente tuya. Al entrar en nuestra web, tienes a tu disposición un panel donde puedes aceptar todas las cookies o configurar cuáles quieres permitir.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Si cambias de opinión más adelante, puedes borrarlas en cualquier momento desde las opciones de privacidad de tu propio navegador (Chrome, Safari, Firefox…). Si tienes alguna duda, escríbeme a{' '}
                <a href="mailto:miguel@darwinindigital.com" className="text-darwin-orange hover:underline transition-colors">
                  miguel@darwinindigital.com
                </a>{' '}
                y te ayudaré encantado.
              </p>
            </section>

          </div>
        </FadeIn>

      </div>
    </main>
  )
}
