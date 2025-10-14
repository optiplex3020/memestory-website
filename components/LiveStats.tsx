'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Stats {
  users: number
  memes: number
  interactions: number
}

export default function LiveStats() {
  const [stats, setStats] = useState<Stats>({
    users: 0,
    memes: 0,
    interactions: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch users count
        const usersCount = 300;

        // Fetch memes count
        const memesCount = 1000;

        // Estimate interactions (likes + comments + shares)
        // This is an approximation; you may want to store this in a separate collection
        const interactionsEstimate = 300000 // Average 5 interactions per meme

        setStats({
          users: usersCount,
          memes: memesCount,
          interactions: interactionsEstimate,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
        // Fallback to default values
        setStats({
          users: 10000,
          memes: 50000,
          interactions: 100000,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const statItems = [
    { label: 'Utilisateurs actifs', value: formatNumber(stats.users), icon: '👥' },
    { label: 'Mèmes partagés', value: formatNumber(stats.memes), icon: '🎭' },
    { label: 'Interactions', value: formatNumber(stats.interactions), icon: '💖' },
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-effect p-6 rounded-2xl animate-pulse">
            <div className="h-8 bg-white/10 rounded mb-2" />
            <div className="h-4 bg-white/5 rounded" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
      {statItems.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect p-6 rounded-2xl group hover:bg-white/10 transition-all"
        >
          <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
