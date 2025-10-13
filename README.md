# MemeStory Website

Site vitrine officiel de MemeStory - Le réseau social pour partager des mèmes, vidéos et citations.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Backend**: Firebase (Firestore)
- **Déploiement**: Vercel

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Démarrer en mode production
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Structure du Projet

```
memestory-website/
├── app/                    # Pages et routes (App Router)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── privacy/            # Politique de confidentialité
│   ├── terms/              # Conditions d'utilisation
│   ├── contact/            # Page de contact
│   ├── sitemap.ts          # Génération du sitemap
│   └── manifest.ts         # Web app manifest
├── components/             # Composants réutilisables
│   ├── Navigation.tsx      # Barre de navigation
│   ├── Footer.tsx          # Pied de page
│   ├── Hero.tsx            # Section hero
│   ├── Features.tsx        # Grid de fonctionnalités
│   ├── Screenshots.tsx     # Gallery de screenshots
│   ├── Download.tsx        # Section téléchargement
│   └── LiveStats.tsx       # Stats en temps réel
├── lib/
│   └── firebase.ts         # Configuration Firebase
├── public/                 # Assets statiques
│   ├── icon.png
│   ├── favicon.ico
│   └── robots.txt
└── styles/
    └── globals.css         # Styles globaux
```

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Mode sombre par défaut
- ✅ Animations fluides avec Framer Motion
- ✅ Stats en temps réel depuis Firebase
- ✅ SEO optimisé (sitemap, robots.txt, metadata)
- ✅ Progressive Web App (PWA)
- ✅ Pages légales (Privacy, Terms)
- ✅ Page de contact avec FAQ

## 🚀 Déploiement sur Vercel

### Option 1 : Via GitHub (Recommandé)

1. Pushez votre code sur GitHub
2. Connectez-vous à [Vercel](https://vercel.com)
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

### Option 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 🔧 Configuration Firebase

Les credentials Firebase sont déjà configurés dans `lib/firebase.ts`. Si vous souhaitez utiliser votre propre projet Firebase :

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com)
2. Copiez votre configuration Firebase
3. Remplacez les valeurs dans `lib/firebase.ts`

## 📱 Liens de téléchargement

Mettez à jour les liens de téléchargement dans `components/Download.tsx` :

- **App Store** : Remplacez `https://apps.apple.com/app/memestory`
- **Google Play** : Remplacez `https://play.google.com/store/apps/details?id=com.optiplex3020.MemeStory`

## 🎯 Configuration du domaine

1. Ajoutez votre domaine dans Vercel
2. Configurez les DNS selon les instructions de Vercel
3. Mettez à jour l'URL dans :
   - `app/sitemap.ts`
   - `public/robots.txt`
   - `app/layout.tsx` (OpenGraph URL)

## 📊 Analytics (Optionnel)

Pour ajouter Google Analytics ou d'autres analytics :

1. Installez le package approprié
2. Ajoutez le code de tracking dans `app/layout.tsx`

## 🔒 Variables d'environnement

Si vous utilisez des secrets ou API keys, créez un fichier `.env.local` :

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
# etc...
```

## 📝 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: '#4ECDC4',      // Turquoise
  secondary: '#45B7D1',    // Bleu
  accent: '#FF6B6B',       // Rouge
}
```

### Contenu

Modifiez le contenu dans :
- `components/Hero.tsx` - Titre et description
- `components/Features.tsx` - Fonctionnalités
- `app/privacy/page.tsx` - Politique de confidentialité
- `app/terms/page.tsx` - Conditions d'utilisation

## 🐛 Résolution de problèmes

### Les stats Firebase ne se chargent pas

Vérifiez que :
1. Firebase est correctement configuré
2. Les règles Firestore autorisent la lecture des collections
3. Les collections `users` et `memes` existent

### Erreur de build

```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

## 📄 Licence

Ce projet fait partie de l'application MemeStory. Tous droits réservés.

## 🤝 Support

Pour toute question ou problème :
- Email : support@memestory.app
- Discord : [Rejoindre](https://discord.gg/memestory)

---

Développé avec ❤️ par l'équipe MemeStory
