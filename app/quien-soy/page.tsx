import Link from 'next/link';

export default function QuienSoy() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative bg-zinc-50 dark:bg-zinc-900/30 p-4 sm:p-8 border border-zinc-100 dark:border-white/5">
            <img
              src="/Copia de d350df96-1967-427e-8f05-aaa24f67d3cf.jpeg"
              alt="Jorge inda"
              className="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="order-1 lg:order-2 max-w-2xl">
            <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">
              Quién soy
            </p>

            <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
              Jorge Inda: Rompiendo la inercia para liberar el talento.
            </h1>

            <blockquote className="border-l-2 border-darwin-orange pl-6 mb-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light italic">
                "El cambio comienza cuando nos permitimos pensar si lo que hago es lo mejor que puedo hacer."
              </p>
            </blockquote>

            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              <p>
                Con más de 23 años conectando negocios y comportamiento humano, he aprendido que el éxito no reside en el presupuesto tecnológico, sino en la aceptación cultural.
              </p>
              <p>
                Habiendo liderado equipos de más de 450 personas (como en havas), conozco el peso de la complejidad.
              </p>
              <p className="text-zinc-900 dark:text-white font-medium">
                Mi propósito es simple: ayudarte a que la próxima década no te suceda, sino que ocurra gracias a ti.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}