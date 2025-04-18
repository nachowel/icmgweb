import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'Toplumsal Uyum Projelerimiz',
    summary: 'ICMG Bexley olarak toplumsal uyum projelerimiz kapsamında yürüttüğümüz çalışmalar ve elde ettiğimiz başarılar...',
    image: '/images/articles/uyum.jpg',
    date: '2024-04-15',
    author: 'Toplumsal Uyum Komisyonu',
    category: 'Toplumsal Uyum',
  },
  {
    id: 2,
    title: 'Eğitim Faaliyetlerimiz',
    summary: 'Çocuklarımız ve gençlerimiz için düzenlediğimiz eğitim faaliyetleri ve bu alandaki hedeflerimiz...',
    image: '/images/articles/egitim.jpg',
    date: '2024-04-10',
    author: 'Eğitim Komisyonu',
    category: 'Eğitim',
  },
  {
    id: 3,
    title: 'Gençlik Programları',
    summary: 'Gençlerimiz için hazırladığımız özel programlar ve gençlik komisyonumuzun çalışmaları...',
    image: '/images/articles/genclik.jpg',
    date: '2024-04-05',
    author: 'Gençlik Komisyonu',
    category: 'Gençlik',
  },
  {
    id: 4,
    title: 'Dini Hizmetlerimiz',
    summary: 'Camimizde sunduğumuz dini hizmetler ve bu alandaki gelişmeler...',
    image: '/images/articles/dini.jpg',
    date: '2024-04-01',
    author: 'Dini Hizmetler Komisyonu',
    category: 'Dini Hizmetler',
  },
]

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Makaleler
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                {article.category}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{new Date(article.date).toLocaleDateString('tr-TR')}</span>
                <span className="mx-2">•</span>
                <span>{article.author}</span>
              </div>

              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {article.title}
              </h2>

              <p className="text-gray-600 mb-4">{article.summary}</p>

              <Link
                href={`/makaleler/${article.id}`}
                className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
              >
                Devamını Oku
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 