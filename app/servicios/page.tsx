import Link from 'next/link';

export default function Servicios() {
  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6">

        <div className="max-w-3xl mb-20">
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">
            Nuestras soluciones
          </p>
          <h1 className="text-4xl md:text-6xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Diseñamos el puente hacia tu próximo nivel.
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            Olvídate de las siglas complejas. Nosotros hablamos de resultados tangibles que tu equipo y tus clientes puedan sentir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">

          <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">Identidad y estrategia de negocio</h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Miramos desde tu "yo del futuro" para decidir qué pasos dar hoy. Eliminamos los procesos "vampiro" que consumen energía sin aportar valor.
            </p>
          </div>

          <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">Experiencias útiles (factor wow)</h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Unimos el mundo físico y el digital. Si un cliente tiene que pensar demasiado, hemos fallado. Diseñamos para la alegría y la fluidez.
            </p>
          </div>

          <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">Conexión y diálogo</h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              No buscamos clics, buscamos defensores. Ayudamos a que tu marca sea algo que la gente quiera recomendar.
            </p>
          </div>

          <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">Acompañamiento de equipo</h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Formamos con paciencia. Convertimos el miedo a lo desconocido en la seguridad de tener un aliado digital en el bolsillo.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}