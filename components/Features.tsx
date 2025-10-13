'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🎭',
    title: 'Mèmes Illimités',
    description: 'Découvre des milliers de mèmes drôles et partage les tiens avec la communauté.',
  },
  {
    icon: '🎥',
    title: 'Vidéos Virales',
    description: 'Regarde et partage des vidéos courtes et hilarantes qui font le buzz.',
  },
  {
    icon: '💬',
    title: 'Citations Inspirantes',
    description: 'Inspire-toi et inspire les autres avec des citations mémorables.',
  },
  {
    icon: '🔄',
    title: 'Reposts',
    description: 'Republie tes contenus préférés avec ton propre commentaire.',
  },
  {
    icon: '🎁',
    title: 'Système de Récompenses',
    description: 'Gagne des points et débloque des badges en étant actif.',
  },
  {
    icon: '💌',
    title: 'Messagerie',
    description: 'Discute en privé avec tes amis et partage des mèmes exclusifs.',
  },
  {
    icon: '🔥',
    title: 'Trending',
    description: 'Découvre ce qui est tendance et ne rate aucun contenu viral.',
  },
  {
    icon: '👥',
    title: 'Communauté Active',
    description: 'Rejoins une communauté passionnée et crée des connexions.',
  },
  {
    icon: '🌙',
    title: 'Mode Sombre',
    description: 'Interface élégante optimisée pour un confort visuel maximal.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding">
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
            Des fonctionnalités <span className="gradient-text">exceptionnelles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tout ce dont tu as besoin pour créer, partager et découvrir du contenu incroyable.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
