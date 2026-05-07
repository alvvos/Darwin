import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-zinc-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="font-sans font-bold text-xl tracking-tight text-zinc-900 dark:text-white mb-4 inline-block hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
              Darwin in digital.
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 font-light max-w-sm leading-relaxed mt-4">
              Humanizamos la tecnología y capacitamos a los equipos para adoptar un rol evolutivo ante los avances digitales.
            </p>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-white font-medium mb-6">Explorar</h4>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/como-lo-hacemos" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Metodología
              </Link>
              <Link href="/servicios" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Soluciones
              </Link>
              <Link href="/quien-soy" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Quién soy
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-white font-medium mb-6">Conectar</h4>
            <nav className="flex flex-col space-y-4">
              <Link href="/hablemos" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-darwin-orange dark:hover:text-darwin-neonGreen transition-colors">
                Agendar café
              </Link>
              <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Linkedin
              </a>
              <a href="mailto:hola@darwinindigital.com" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Email
              </a>
            </nav>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 font-light">
            © 2026 darwin in digital. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6">
            <Link href="/aviso-legal" className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Política de cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}