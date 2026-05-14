import { FadeIn } from '@/components/fade-in'

export const metadata = {
  title: 'Términos de Uso y Convivencia | Darwin in Digital',
  description: 'Las reglas de convivencia y respeto mutuo al navegar por la web de Darwin in Digital SLU. Protegiendo nuestras ideas y tu experiencia.',
}

export default function TerminosDeUso() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">

        <FadeIn direction="left">
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8 uppercase">Legal</p>
          <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
            Términos de Uso: Las reglas de convivencia en nuestra casa digital
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-16">
            Bienvenido a la web de DARWIN IN DIGITAL SLU. Hemos construido este espacio con muchísima ilusión, cuidado y sentido común para que encuentres la tranquilidad, la motivación y la guía que necesitas frente a los rápidos cambios tecnológicos. Al navegar por nuestra web, aceptas estos sencillos Términos de Uso. No buscamos imponerte normas estrictas, sino establecer unas reglas de convivencia basadas en el respeto mutuo.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="space-y-12">

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                1. El cuidado de nuestras ideas (Propiedad Intelectual)
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                Todo lo que ves en esta web —nuestros textos sobre evolución empresarial, la Metodología de Alineación y Evolución Conjunta, nuestro enfoque de capacitación, el diseño y la marca Darwin in Digital— es fruto de nuestra experiencia desde que fundamos la agencia en 2018. Todo ello está protegido por las leyes de propiedad intelectual.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Nos encanta que te inspires en nuestras reflexiones. Si quieres compartir alguna de nuestras ideas con tu equipo, siéntete libre de hacerlo, siempre y cuando menciones que la fuente original es Darwin in Digital e incluyas un enlace a nuestra web. Lo que te pedimos es que no copies ni utilices nuestros contenidos para fines comerciales propios sin habernos escrito antes a{' '}
                <a href="mailto:miguel@darwinindigital.com" className="text-darwin-orange hover:underline transition-colors">
                  miguel@darwinindigital.com
                </a>{' '}
                para pedirnos permiso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                2. Sentido común y buen uso
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Te pedimos que utilices esta página de forma cívica. Esto significa no utilizar los correos de contacto para enviarnos publicidad no deseada, no intentar dañar la tecnología que sostiene la web y mantener un trato respetuoso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                3. Enlaces a otros rincones
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                A veces incluimos enlaces a otras páginas que nos parecen útiles o inspiradoras. Aunque las recomendamos con la mejor intención, no tenemos control sobre ellas, por lo que no podemos hacernos responsables de cómo cuiden tu privacidad una vez salgas de nuestra web.
              </p>
            </section>

          </div>
        </FadeIn>

      </div>
    </main>
  )
}
