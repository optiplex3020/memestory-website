import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - MemeStory',
  description: 'Politique de confidentialité de MemeStory',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Politique de Confidentialité</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-lg">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Bienvenue sur MemeStory. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Données collectées</h2>
            <p>Nous collectons les informations suivantes :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Informations de profil (nom, email, photo de profil)</li>
              <li>Contenu que vous publiez (mèmes, vidéos, citations)</li>
              <li>Interactions (likes, commentaires, partages)</li>
              <li>Données d'utilisation et statistiques anonymisées</li>
            </ul>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Utilisation des données</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fournir et améliorer nos services</li>
              <li>Personnaliser votre expérience</li>
              <li>Communiquer avec vous</li>
              <li>Assurer la sécurité de la plateforme</li>
            </ul>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Partage des données</h2>
            <p>
              Nous ne vendons jamais vos données personnelles à des tiers. Nous pouvons partager des données uniquement dans les cas suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Avec votre consentement explicite</li>
              <li>Pour se conformer à des obligations légales</li>
              <li>Pour protéger nos droits et notre sécurité</li>
            </ul>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Vos droits</h2>
            <p>Vous avez le droit de :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accéder à vos données personnelles</li>
              <li>Corriger vos informations</li>
              <li>Supprimer votre compte</li>
              <li>Exporter vos données</li>
              <li>Vous opposer au traitement de vos données</li>
            </ul>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données
              contre tout accès non autorisé, perte ou divulgation.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, contactez-nous à :
              <br />
              <a href="mailto:privacy@memestory.app" className="text-primary hover:text-secondary transition-colors">
                privacy@memestory.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
