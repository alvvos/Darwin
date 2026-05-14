import { FadeIn } from '@/components/fade-in'

export const metadata = {
  title: 'Política de Privacidad | Cuidamos de ti | Darwin in Digital',
  description: 'Descubre cómo en Darwin in Digital protegemos tu información y respetamos tu privacidad con el mismo cuidado con el que acompañamos a tu equipo.',
}

export default function Privacidad() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">

        <FadeIn direction="left">
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8 uppercase">Legal</p>
          <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
            Política de Privacidad: Cuidamos tus datos como cuidamos a las personas
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-16">
            En nuestra labor diaria, enseñamos a las empresas y a los líderes a poner a las personas en el centro de todas sus decisiones. Sería profundamente incoherente por nuestra parte no aplicar ese mismo respeto, cuidado y ética a la información que decides compartir con nosotros. Esta Política de Privacidad tiene un único objetivo: explicarte de forma clara y sencilla qué hacemos con tus datos personales cuando decides escribirnos, agendar un café o navegar por nuestra web.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="space-y-12">

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                1. ¿Quién es el responsable de cuidar tu información?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                El responsable de velar por tus datos es <strong className="font-medium text-zinc-800 dark:text-zinc-200">DARWIN IN DIGITAL SLU</strong>, con domicilio en C/ Cerro de Álamos Blancos, núm. 67 — 28035 Madrid, y CIF B88024955.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                2. Nuestro compromiso legal y el uso de tus datos
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                De conformidad con el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD) y la Ley Orgánica 15/1999 de 13 de diciembre (LOPD), te informamos que los datos personales recogidos en esta web o a través de nuestros correos serán incluidos en un fichero bajo la responsabilidad de DARWIN IN DIGITAL SLU.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                <strong className="font-medium text-zinc-800 dark:text-zinc-200">¿Para qué los usamos?</strong> Exclusivamente con la finalidad de cumplir los compromisos entre las partes, responder a tus dudas, agendar nuestras charlas y enviarte información de valor si así nos lo has pedido.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                3. La regla de oro: Tu confianza no se vende
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Tu confianza es nuestro mayor pilar. Te garantizamos que los datos que nos facilites nunca serán vendidos, alquilados ni cedidos a terceras empresas para que te envíen publicidad invasiva.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                4. Tus derechos sobre tu propia información
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Tú tienes el control absoluto sobre tus datos. En cualquier momento puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición. Para hacerlo, envíanos un correo a{' '}
                <a href="mailto:miguel@darwinindigital.com" className="text-darwin-orange hover:underline transition-colors">
                  miguel@darwinindigital.com
                </a>{' '}
                o escríbenos a nuestra dirección física en Madrid (C/ Cerro de Álamos Blancos, núm. 67 — 28035). Te atenderemos con la máxima rapidez y cercanía.
              </p>
            </section>

          </div>
        </FadeIn>

      </div>
    </main>
  )
}
