import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation - MemeStory',
  description: 'Conditions d\'utilisation de MemeStory',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Conditions d'Utilisation</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-lg">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptation des conditions</h2>
            <p>
              En utilisant MemeStory, vous acceptez ces conditions d'utilisation. Si vous n'acceptez pas ces conditions,
              veuillez ne pas utiliser notre application.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Utilisation du service</h2>
            <p>Vous vous engagez à :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fournir des informations exactes et à jour</li>
              <li>Ne pas usurper l'identité d'autrui</li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas publier de contenu illégal, offensant ou inapproprié</li>
              <li>Ne pas utiliser le service à des fins commerciales sans autorisation</li>
            </ul>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Contenu utilisateur</h2>
            <p>
              En publiant du contenu sur MemeStory, vous conservez la propriété de votre contenu mais nous accordez
              une licence mondiale, non exclusive et gratuite pour utiliser, afficher et distribuer votre contenu
              sur notre plateforme.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Conduite interdite</h2>
            <p>Il est strictement interdit de :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Harceler, menacer ou intimider d'autres utilisateurs</li>
              <li>Publier du spam ou du contenu publicitaire non sollicité</li>
              <li>Tenter de pirater ou de perturber le service</li>
              <li>Utiliser des bots ou des scripts automatisés</li>
              <li>Collecter des données d'autres utilisateurs</li>
            </ul>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Modération</h2>
            <p>
              Nous nous réservons le droit de modérer, supprimer ou restreindre tout contenu qui viole ces conditions
              ou que nous jugeons inapproprié. Nous pouvons suspendre ou fermer votre compte en cas de violation grave.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Propriété intellectuelle</h2>
            <p>
              MemeStory et tous ses éléments (logo, design, code) sont protégés par le droit d'auteur et autres
              droits de propriété intellectuelle. Toute reproduction non autorisée est interdite.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation de responsabilité</h2>
            <p>
              MemeStory est fourni "tel quel" sans garantie d'aucune sorte. Nous ne sommes pas responsables des
              dommages directs ou indirects résultant de l'utilisation du service.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront
              effet dès leur publication. L'utilisation continue du service après modification constitue une acceptation
              des nouvelles conditions.
            </p>
          </section>

          <section className="glass-effect p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
            <p>
              Pour toute question concernant ces conditions, contactez-nous à :
              <br />
              <a href="mailto:legal@memestory.app" className="text-primary hover:text-secondary transition-colors">
                legal@memestory.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
