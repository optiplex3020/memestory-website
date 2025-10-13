import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MemeStory - Partage tes mèmes, vidéos et citations préférées',
  description: 'Le réseau social ultime pour découvrir et partager des mèmes, vidéos drôles et citations inspirantes. Rejoins la communauté MemeStory !',
  keywords: ['memes', 'vidéos', 'citations', 'réseau social', 'communauté', 'partage'],
  authors: [{ name: 'MemeStory Team' }],
  openGraph: {
    title: 'MemeStory - Ton réseau social de mèmes',
    description: 'Découvre et partage des mèmes, vidéos et citations avec une communauté passionnée',
    type: 'website',
    url: 'https://memestory.app',
    images: ['/assets/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MemeStory - Partage tes mèmes préférés',
    description: 'Le réseau social ultime pour les amateurs de mèmes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
