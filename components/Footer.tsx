import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Légal: [
      { label: 'Politique de confidentialité', href: '/privacy', external: false },
      { label: 'Conditions d\'utilisation', href: '/terms', external: false },
    ],
    Support: [
      { label: 'Contact', href: '/contact', external: false },
      { label: 'FAQ', href: '/faq', external: false },
    ],
    Communauté: [
      { label: 'Twitter', href: 'https://twitter.com/memestory', external: true },
      { label: 'Instagram', href: 'https://instagram.com/memestory', external: true },
      { label: 'Discord', href: 'https://discord.gg/memestory', external: true },
    ],
  }

  return (
    <footer className="glass-effect mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold">M</span>
              </div>
              <span className="text-xl font-bold gradient-text">MemeStory</span>
            </div>
            <p className="text-gray-400 text-sm">
              Le réseau social pour partager tes mèmes, vidéos et citations préférées.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} MemeStory. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
