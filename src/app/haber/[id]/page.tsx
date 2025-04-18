import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Bu veriyi normalde bir API'den veya veritabanından alacaksınız
const news = [
  {
    id: 1,
    title: 'Ramazan Bayramı Etkinlikleri',
    content: `
      <p>Bu yıl düzenlenecek Ramazan Bayramı etkinliklerimiz kapsamında birçok özel program hazırladık.</p>
      
      <h3>Bayram Namazı</h3>
      <p>Bayram namazımız saat 07:00'de kılınacaktır. Tüm cemaatimiz davetlidir.</p>
      
      <h3>Bayramlaşma Programı</h3>
      <p>Namaz sonrası camimizde bayramlaşma programı düzenlenecektir. Program kapsamında:</p>
      <ul>
        <li>Kahvaltı ikramı</li>
        <li>Çocuklar için hediyeler</li>
        <li>Bayram şekeri dağıtımı</li>
      </ul>
      
      <h3>Özel Etkinlikler</h3>
      <p>Bayramın ikinci ve üçüncü günü için planladığımız etkinlikler:</p>
      <ul>
        <li>Çocuk şenliği</li>
        <li>Gençlik buluşması</li>
        <li>Aile pikniği</li>
      </ul>
    `,
    image: '/images/news/ramazan.jpg',
    date: '2024-04-10',
    author: 'ICMG Bexley Yönetimi',
  },
  {
    id: 2,
    title: 'Gençlik Programları',
    content: `
      <p>Gençlerimiz için düzenlediğimiz eğitim ve sosyal aktivite programları başlıyor.</p>
      
      <h3>Eğitim Programları</h3>
      <p>Hafta içi her akşam düzenlenecek eğitim programlarımız:</p>
      <ul>
        <li>İngilizce dersleri</li>
        <li>Matematik takviye kursları</li>
        <li>Üniversite hazırlık desteği</li>
      </ul>
      
      <h3>Sosyal Aktiviteler</h3>
      <p>Hafta sonları düzenlenecek sosyal aktivitelerimiz:</p>
      <ul>
        <li>Spor turnuvaları</li>
        <li>Gezi programları</li>
        <li>Kültür-sanat etkinlikleri</li>
      </ul>
    `,
    image: '/images/news/genclik.jpg',
    date: '2024-04-08',
    author: 'Gençlik Kolları',
  },
  {
    id: 3,
    title: 'Yeni Kurs Kayıtları',
    content: `
      <p>Yeni dönem Kuran-ı Kerim ve İslami ilimler kurs kayıtlarımız başlamıştır.</p>
      
      <h3>Kurs Programları</h3>
      <p>Açılacak kurslarımız:</p>
      <ul>
        <li>Kuran-ı Kerim (Başlangıç)</li>
        <li>Kuran-ı Kerim (İleri Seviye)</li>
        <li>Temel İslami Bilgiler</li>
        <li>Arapça (Başlangıç)</li>
      </ul>
      
      <h3>Kayıt Bilgileri</h3>
      <p>Kayıt için gerekli belgeler:</p>
      <ul>
        <li>Kimlik fotokopisi</li>
        <li>2 adet fotoğraf</li>
        <li>Kayıt formu</li>
      </ul>
    `,
    image: '/images/news/kurs.jpg',
    date: '2024-04-05',
    author: 'Eğitim Komisyonu',
  },
]

interface Props {
  params: {
    id: string
  }
}

export default function NewsPage({ params }: Props) {
  const newsItem = news.find((item) => item.id === parseInt(params.id))

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          {newsItem.title}
        </h1>

        <div className="mb-6 text-gray-600">
          <p>
            <span className="font-semibold">Tarih:</span>{' '}
            {new Date(newsItem.date).toLocaleDateString('tr-TR')}
          </p>
          <p>
            <span className="font-semibold">Yazar:</span> {newsItem.author}
          </p>
        </div>

        <div className="relative h-96 mb-8">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div
          className="prose prose-green max-w-none"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <Link
            href="/"
            className="text-green-700 hover:text-green-800 font-medium"
          >
            ← Anasayfaya Dön
          </Link>
        </div>
      </article>
    </div>
  )
} 