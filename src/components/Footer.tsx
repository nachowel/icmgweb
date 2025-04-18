import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { href: '#', label: 'YouTube', icon: 'youtube' },
    { href: '#', label: 'Instagram', icon: 'instagram' },
    { href: '#', label: 'Facebook', icon: 'facebook' },
    { href: '#', label: 'WhatsApp', icon: 'whatsapp' },
  ]

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Misyon & Vizyon */}
          <div>
            <h3 className="text-lg font-bold mb-4">Misyon & Vizyon</h3>
            <p className="text-sm">
              ICMG Bexley olarak misyonumuz, Müslümanların İngiltere Bexley
              toplumunda aktif ve olumlu bir rol oynamasını sağlamaktır.
              Vizyonumuz, toplumsal uyum ve karşılıklı anlayışı geliştirmektir.
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <div className="space-y-2 text-sm">
              <p>Adres: 123 Example Street</p>
              <p>Bexley, London</p>
              <p>SE2 9DA</p>
              <p>Tel: +44 20 1234 5678</p>
              <p>E-posta: info@icmgbexley.org</p>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <div className="space-y-2 text-sm">
              <p>
                <Link href="/bagis" className="hover:text-green-300">
                  Bağış Yap
                </Link>
              </p>
              <p>
                <Link href="/uyelik" className="hover:text-green-300">
                  Üye Ol
                </Link>
              </p>
              <p>
                <Link href="/hakkimizda" className="hover:text-green-300">
                  Hakkımızda
                </Link>
              </p>
              <p>
                <Link href="/iletisim" className="hover:text-green-300">
                  İletişim
                </Link>
              </p>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className="hover:text-green-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.label}</span>
                  <i className={`fab fa-${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ICMG Bexley. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 