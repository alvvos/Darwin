import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Metodologia() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] overflow-hidden pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="max-w-2xl">
            <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8">
              Nuestra hoja de ruta
            </p>
            
            <h1 className="text-4xl md:text-6xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              M.a.e.c.: un sistema operativo para la <span className="text-darwin-orange">evolución humana.</span>
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Para que el cambio sea seguro y duradero, aplicamos la metodología de alineación y evolución conjunta. Es nuestra hoja de ruta para que la transformación no sea un trauma, sino un proceso natural.
            </p>
          </div>

          <div className="relative hidden lg:flex flex-col bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-white/5 p-8 rounded-sm overflow-hidden min-h-[500px]">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-darwin-neonGreen to-darwin-orange"></div>

  <h3 className="text-sm font-mono tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">Sistema operativo cognitivo</h3>

  {/* contenedor de la animación geométrica */}
  <div className="flex-grow flex items-center justify-center relative my-12">
    <div className="relative w-64 h-64 flex items-center justify-center">
      
      {/* anillo exterior: el entorno / la economía novel */}
      <div className="absolute inset-0 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-full animate-[spin_30s_linear_infinite]"></div>

      {/* órbitas de sistemas autónomos (ia) */}
      <div className="absolute inset-6 border border-zinc-200 dark:border-zinc-800 rounded-full animate-[spin_20s_linear_infinite_reverse]">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-darwin-neonGreen rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(57,255,20,0.6)]"></div>
      </div>
      <div className="absolute inset-14 border border-zinc-200 dark:border-zinc-800 rounded-full animate-[spin_15s_linear_infinite]">
         <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* pulso cultural / cognitivo */}
      <div className="absolute inset-20 border border-darwin-orange/40 rounded-full animate-ping opacity-30"></div>

      {/* núcleo humano central */}
      <div className="relative w-16 h-16 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center shadow-lg z-10">
        <div className="w-6 h-6 bg-darwin-orange rounded-full animate-pulse shadow-[0_0_20px_rgba(255,140,0,0.6)]"></div>
      </div>

      {/* red de conexiones */}
      <svg className="absolute inset-0 w-full h-full text-zinc-200 dark:text-zinc-800 -z-10" viewBox="0 0 100 100">
        <line x1="50" y1="50" x2="50" y2="0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="50" y1="50" x2="93" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="50" y1="50" x2="7" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>
      
    </div>
  </div>

  {/* leyenda explicativa */}
  <div className="space-y-4 relative z-10 border-t border-zinc-200 dark:border-zinc-800 pt-6">
    <div className="flex items-start gap-3 group">
      <div className="w-2 h-2 rounded-full bg-darwin-orange mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light"><strong className="font-medium text-zinc-900 dark:text-white">Reimaginación:</strong> la cultura como núcleo inquebrantable del cambio.</p>
    </div>
    <div className="flex items-start gap-3 group">
      <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light"><strong className="font-medium text-zinc-900 dark:text-white">Ingeniería inversa:</strong> diseño desde un futuro motivador.</p>
    </div>
    <div className="flex items-start gap-3 group">
      <div className="w-2 h-2 rounded-full bg-darwin-neonGreen mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light"><strong className="font-medium text-zinc-900 dark:text-white">Amplificación:</strong> la agencia humana operando sobre la ia.</p>
    </div>
  </div>
</div>
        </section>

        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-medium text-zinc-900 dark:text-white">
              Los 6 pilares de Darwinin
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
            
            <div className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-darwin-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-zinc-400 font-mono text-xs tracking-widest mb-4">01</div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Sinergia y compromiso</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                No somos externos; somos parte de tu equipo hasta que el objetivo se cumple.
              </p>
            </div>

            <div className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-darwin-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-zinc-400 font-mono text-xs tracking-widest mb-4">02</div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Empatía cultural</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                Protegemos tu esencia. "la supervivencia del más auténtico" significa que la tecnología debe hablar tu idioma, no al revés.
              </p>
            </div>

            <div className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-darwin-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-zinc-400 font-mono text-xs tracking-widest mb-4">03</div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Estrategia desde las personas</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                Usamos los datos para entender sentimientos, no solo números.
              </p>
            </div>

            <div className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-darwin-neonGreen transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-zinc-400 font-mono text-xs tracking-widest mb-4">04</div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Activación ágil</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                Siguiendo a Paul Graham, "hacemos cosas que no escalen" al principio para aprender rápido y fallar barato.
              </p>
            </div>

            <div className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-darwin-neonGreen transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-zinc-400 font-mono text-xs tracking-widest mb-4">05</div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Inteligencia evolutiva</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                Menos "Big Data" y más "Big Common Sense". Decisiones prácticas para problemas reales.
              </p>
            </div>

            <div className="group p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-darwin-neonGreen transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-zinc-400 font-mono text-xs tracking-widest mb-4">06</div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Cimientos tecnológicos</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">
                Elegimos herramientas que enamoren a tu trabajador porque le hacen la vida más fácil.
              </p>
            </div>

          </div>
        </section>

        <section className="p-12 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 text-center relative overflow-hidden">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-white mb-4">
            ¿Aplicamos este sistema operativo en tu empresa?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 font-light">
            Da el primer paso para liberar el talento de tu equipo sin compromisos.
          </p>
          <Link 
            href="/hablemos" 
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-zinc-900 dark:bg-darwin-neonGreen text-white dark:text-black font-medium hover:bg-darwin-neonGreen dark:hover:bg-darwin-light hover:text-black transition-colors duration-300"
          >
            Agendar 15 minutos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </main>
  );
}