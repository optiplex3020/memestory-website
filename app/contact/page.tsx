import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - MemeStory',
  description: 'Contactez l\'équipe MemeStory',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 gradient-text text-center">Contactez-nous</h1>
        <p className="text-xl text-gray-400 mb-12 text-center">
          Une question, un problème ou une suggestion ? Nous sommes là pour vous aider.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact cards */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:support@memestory.app"
              className="text-primary hover:text-secondary transition-colors"
            >
              support@memestory.app
            </a>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Discord</h3>
            <a
              href="https://discord.gg/memestory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              Rejoindre notre Discord
            </a>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <div className="text-4xl mb-4">🐦</div>
            <h3 className="text-xl font-semibold mb-2">Twitter</h3>
            <a
              href="https://twitter.com/memestory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              @memestory
            </a>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <div className="text-4xl mb-4">📷</div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <a
              href="https://instagram.com/memestory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              @memestory
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions Fréquentes</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Comment puis-je supprimer mon compte ?
              </h3>
              <p className="text-gray-400">
                Vous pouvez supprimer votre compte depuis les paramètres de l'application, section "Compte".
                Attention, cette action est irréversible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Comment signaler un contenu inapproprié ?
              </h3>
              <p className="text-gray-400">
                Appuyez sur le bouton "..." sur n'importe quel contenu et sélectionnez "Signaler".
                Notre équipe de modération examinera le contenu dans les plus brefs délais.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                L'application est-elle gratuite ?
              </h3>
              <p className="text-gray-400">
                Oui, MemeStory est entièrement gratuite. Nous proposons des fonctionnalités premium optionnelles
                pour soutenir le développement de l'application.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Sur quelles plateformes MemeStory est-elle disponible ?
              </h3>
              <p className="text-gray-400">
                MemeStory est disponible sur iOS (iPhone et iPad) et Android. Téléchargez-la gratuitement
                sur l'App Store ou Google Play.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Comment puis-je devenir créateur vérifié ?
              </h3>
              <p className="text-gray-400">
                Les créateurs vérifiés sont sélectionnés en fonction de leur activité, de la qualité de leur contenu
                et de leur engagement avec la communauté. Continuez à créer du contenu de qualité et nous vous
                contacterons si vous êtes éligible.
              </p>
            </div>
          </div>
        </div>

        {/* Support message */}
        <p className="text-center text-gray-400 mt-8">
          Notre équipe s'efforce de répondre à toutes les demandes dans les 24-48 heures.
        </p>
      </div>
    </div>
  )
}
