import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] overflow-hidden selection:bg-darwin-neonGreen selection:text-black transition-colors duration-300">
      
      <div className="absolute inset-0 z-0 bg-white dark:bg-[#050505] transition-colors duration-300">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 dark:opacity-20"></div>
      </div>

      <div className="relative z-10">
        
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-12 border-b border-zinc-200 dark:border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="max-w-2xl">
                <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs tracking-[0.15em] mb-8 uppercase">
                  Adaptación y disrupción tecnológica
                </p>
                
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.05] mb-8">
                  El futuro no es la tecnología.<br />
                  El futuro eres tú <span className="italic text-zinc-500 dark:text-zinc-400">(y tu equipo).</span>
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12 font-light">
                  El darwinismo digital es implacable: la tecnología evoluciona más rápido que nuestra capacidad de adaptación. Pero aquí no venimos a hablar de software, sino de supervivencia y relevancia humana.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                  <Link 
                    href="/hablemos" 
                    className="group flex items-center gap-4 text-zinc-900 dark:text-white font-medium text-lg tracking-wide hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors"
                  >
                    <span>Agendar café de 15 min</span>
                    <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                  
                  <div className="hidden sm:block w-[1px] h-8 bg-zinc-300 dark:bg-zinc-800"></div>
                  
                  <Link 
                    href="/como-lo-hacemos" 
                    className="text-zinc-600 dark:text-zinc-400 font-medium text-lg tracking-wide hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Descubrir metodología m.a.e.c.
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-white/5 p-8 rounded-sm">
                <img 
                  src="/Copia de CDarwin Perfil.jpg" 
                  alt="Ilustración del perfil de evolución" 
                  className="relative z-10 w-full max-w-lg mx-auto object-contain mix-blend-multiply dark:mix-blend-screen opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

            </div>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-[#050505] border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
              
              <div className="p-12 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
                <h3 className="text-2xl font-medium text-zinc-900 dark:text-white mb-6">Abandona el océano rojo</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-lg">
                  Deja de desangrarte compitiendo por precio. Te ayudamos a descubrir esa propuesta única que te traslada a un océano azul donde la competencia es irrelevante porque nadie puede replicar tu esencia humana.
                </p>
              </div>
              
              <div className="p-12 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-darwin-neonGreen transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <h3 className="text-2xl font-medium text-zinc-900 dark:text-white mb-6">Tecnología con alma</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-lg">
                  Las máquinas están para lo mecánico. Nosotros liberamos a tu equipo para que use lo que ninguna inteligencia artificial tiene: empatía, imaginación y sentido común.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="py-32 bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="container mx-auto px-6">
            
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white mb-6 tracking-tight">
                ¿En qué etapa de la metamorfosis estás?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-1 bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
              
              <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors">
                <div className="text-zinc-400 font-mono text-xs tracking-widest mb-6 uppercase">Fase 01</div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">La oruga</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  El peso de la rutina te impide moverte. Sientes que la organización es lenta y reactiva ante los cambios del mercado.
                </p>
              </div>

              <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-darwin-orange transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="text-darwin-orange font-mono text-xs tracking-widest mb-6 uppercase">Fase 02</div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">La crisálida</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Sientes la fricción del cambio, pero aún no sabes cómo romper el capullo. Hay iniciativas, pero falta integración y fluidez.
                </p>
              </div>

              <div className="p-10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-darwin-neonGreen transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="text-darwin-neonGreen font-mono text-xs tracking-widest mb-6 uppercase">Fase 03</div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">La mariposa</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Cooperación fluida, agilidad y una visión clara del valor futuro. La tecnología trabaja para las personas, no al revés.
                </p>
              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}