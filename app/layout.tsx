import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { getLocale } from "@/lib/content";

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://darwinindigital.com'),
  title: {
    template: '%s | Darwin in Digital',
    default: 'Darwin in Digital | Adaptación y disrupción tecnológica',
  },
  description: 'Humanizamos la tecnología y capacitamos a los equipos para adoptar un rol evolutivo ante los avances digitales. El futuro no es la tecnología. El futuro eres tú.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://darwinindigital.com',
    siteName: 'Darwin in Digital',
    title: 'Darwin in Digital | Adaptación y disrupción tecnológica',
    description: 'Humanizamos la tecnología y capacitamos a los equipos para adoptar un rol evolutivo ante los avances digitales.',
    images: [{ url: '/9.jpg', width: 1200, height: 800, alt: 'Darwin in Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darwin in Digital | Adaptación y disrupción tecnológica',
    description: 'Humanizamos la tecnología y capacitamos a los equipos para adoptar un rol evolutivo ante los avances digitales.',
    images: ['/9.jpg'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://darwinindigital.com/#organization',
      name: 'Darwin in Digital',
      url: 'https://darwinindigital.com',
      email: 'miguel@darwinindigital.com',
      telephone: '+34629317055',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'miguel@darwinindigital.com',
        telephone: '+34629317055',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://darwinindigital.com/#website',
      url: 'https://darwinindigital.com',
      name: 'Darwin in Digital',
      description: 'Humanizamos la tecnología y capacitamos a los equipos para adoptar un rol evolutivo ante los avances digitales.',
      publisher: { '@id': 'https://darwinindigital.com/#organization' },
      inLanguage: 'es',
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased flex flex-col min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#050505] dark:text-white transition-colors duration-300`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}