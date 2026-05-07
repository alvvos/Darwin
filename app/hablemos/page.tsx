import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Hablemos() {
  return (
    <main className="relative min-h-screen bg-zinc-50 pt-32 pb-24 selection:bg-darwin-neonGreen selection:text-black">
      <div className="container mx-auto px-6">
        
        {/* Enlace para volver atrás */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna de texto */}
          <div className="max-w-xl">
            <p className="text-zinc-500 font-sans text-xs tracking-[0.15em] mb-8">
              El primer paso
            </p>
            
            <h1 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-[1.1] mb-8 font-serif">
              Menos formularios, más conversaciones.
            </h1>
            
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed">
              <p>
                En un mundo de bots y cuestionarios fríos, nosotros elegimos la calidez del encuentro. Siguiendo el principio de seth godin, creemos que el marketing es un acto de generosidad. Por eso, nuestro primer paso no es venderte, es servirte.
              </p>
              
              <div className="p-6 bg-white border border-zinc-200 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-darwin-neonGreen"></div>
                <p className="text-zinc-900 font-medium mb-2">
                  ¿Te apetece un café de 15 minutos?
                </p>
                <p className="text-sm">
                  Sin presentaciones de ventas, sin compromisos. Solo 15 minutos de atención plena para escuchar tus frustraciones diarias.
                </p>
              </div>

              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-darwin-orange mt-2.5 flex-shrink-0"></span>
                  <p><strong className="font-medium text-zinc-900">Nuestro objetivo:</strong> entender tu realidad sin juzgar.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-darwin-orange mt-2.5 flex-shrink-0"></span>
                  <p><strong className="font-medium text-zinc-900">Tu beneficio:</strong> al terminar, tendrás al menos dos consejos prácticos e inmediatos para aplicar en tu negocio hoy mismo.</p>
                </li>
              </ul>

              <blockquote className="mt-12 pt-8 border-t border-zinc-200">
                <p className="text-lg italic text-zinc-500">
                  "La mejor tecnología del mundo no puede reemplazar una conversación honesta sobre lo que realmente está fallando."
                </p>
              </blockquote>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 p-8 lg:p-12 min-h-[600px] flex flex-col items-center justify-center text-center relative overflow-hidden group">
  {/* línea superior de acento */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-darwin-neonGreen to-darwin-orange"></div>

  {/* gran interrogación de fondo */}
  <div className="relative flex items-center justify-center mb-10 w-full">
    <div className="text-[15rem] leading-none font-light text-zinc-50 dark:text-zinc-900/50 select-none">
      ?
    </div>
  </div>
</div>

        </div>
      </div>
    </main>
  );
}