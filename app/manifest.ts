import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MemeStory',
    short_name: 'MemeStory',
    description: 'Le réseau social ultime pour découvrir et partager des mèmes, vidéos drôles et citations inspirantes',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#4ECDC4',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
