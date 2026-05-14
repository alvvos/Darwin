import { FadeIn } from '@/components/fade-in'

export const metadata = {
  title: 'Aviso Legal y Transparencia | Darwin in Digital',
  description: 'Conoce todos los datos legales y registrales de Darwin in Digital SLU. Creemos en la transparencia absoluta y en hacer negocios de persona a persona.',
}

export default function AvisoLegal() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">

        <FadeIn direction="left">
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8 uppercase">Legal</p>
          <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
            Aviso Legal: Transparencia y confianza ante todo
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-16">
            En Darwin in Digital, creemos firmemente que las buenas relaciones, tanto humanas como de negocios, se basan en la transparencia y en mirar a las personas a los ojos. Por eso, y en estricto cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), queremos presentarnos formalmente y dejarte claro quiénes somos y quién está detrás de este espacio.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="space-y-12">

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-6 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                Nuestros datos identificativos y registrales
              </h2>
              <div className="space-y-3 text-zinc-600 dark:text-zinc-400 font-light">
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Identidad</span>
                  <span>DARWIN IN DIGITAL SLU</span>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">NIF/CIF</span>
                  <span>B88024955</span>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Fundación</span>
                  <span>06/02/2018</span>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Actividad</span>
                  <span>Agencias de publicidad (CNAE 7311 / SIC 7311)</span>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Domicilio</span>
                  <span>C/ Cerro de Álamos Blancos, núm. 67 — 28035 Madrid</span>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Email</span>
                  <a href="mailto:miguel@darwinindigital.com" className="text-darwin-orange hover:underline transition-colors">
                    miguel@darwinindigital.com
                  </a>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Registro</span>
                  <span>Registro Mercantil de Madrid, Tomo 37174, Folio 104, Sección General, Hoja M-663450, Inscripción 1.ª</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                Nuestra responsabilidad contigo
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                El propósito de esta web es compartir nuestra filosofía y explicarte cómo podemos aliviar la carga tecnológica de tu día a día. Las reflexiones e historias que publicamos están basadas en nuestros años de experiencia y aplicamos siempre el sentido común. Sin embargo, son de carácter informativo. Aplicar grandes cambios a tu negocio requiere un análisis personalizado que, por supuesto, estaremos encantados de realizar si decides tomarte un café con nosotros.
              </p>
            </section>

          </div>
        </FadeIn>

      </div>
    </main>
  )
}
