'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const screenshots = [
  {
    title: 'Feed Principal',
    description: 'Découvre un flux infini de mèmes et vidéos',
    color: 'from-primary to-secondary',
    image: '/assets/HomeScreen.PNG',
  },
  {
    title: 'Explore',
    description: 'Trouve les contenus tendances et catégories',
    color: 'from-secondary to-accent',
    image: '/assets/Explorer.PNG',
  },
  {
    title: 'Profil',
    description: 'Personnalise ton profil et gère tes contenus',
    color: 'from-accent to-primary',
    image: '/assets/Profile.PNG',
  },
  {
    title: 'Messages',
    description: 'Discute avec tes amis en temps réel',
    color: 'from-primary to-accent',
    image: null, // Placeholder en attendant la 4ème image
  },
]

export default function Screenshots() {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Une interface <span className="gradient-text">intuitive</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conçue pour offrir une expérience fluide et agréable sur tous les appareils.
          </p>
        </motion.div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Phone mockup */}
              <div className="glass-effect rounded-3xl p-4 aspect-[9/16] relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative h-full flex items-center justify-center">
                  {screenshot.image ? (
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="text-6xl opacity-50">💌</div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{screenshot.title}</h3>
                <p className="text-sm text-gray-400">{screenshot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about screenshots */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          Les captures d'écran sont à titre indicatif et peuvent différer de l'application finale
        </motion.p>
      </div>
    </section>
  )
}
