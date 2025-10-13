'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Download() {
  return (
    <section id="download" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prêt à <span className="gradient-text">commencer</span> ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Télécharge MemeStory gratuitement et rejoins des milliers d'utilisateurs qui partagent leur passion.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* App Store Button */}
              <motion.a
                href="https://apps.apple.com/app/memestory"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect hover:bg-white/10 px-6 py-3 rounded-xl flex items-center space-x-3 transition-all w-full sm:w-auto"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Télécharger sur</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.optiplex3020.MemeStory"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect hover:bg-white/10 px-6 py-3 rounded-xl flex items-center space-x-3 transition-all w-full sm:w-auto"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Télécharger sur</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* Additional info */}
            <p className="mt-8 text-sm text-gray-400">
              Gratuit • Compatible iOS 13+ et Android 8+ • Aucune carte de crédit requise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
