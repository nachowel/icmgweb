import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles = [
  {
    id: 1,
    title: 'Toplumsal Uyum Projelerimiz',
    content: `
      <p>ICMG Bexley olarak toplumsal uyum projelerimiz kapsamında birçok başarılı çalışma yürütmekteyiz. Bu projeler, toplumumuzun farklı kesimleri arasında köprü kurmayı ve karşılıklı anlayışı geliştirmeyi hedeflemektedir.</p>

      <h3>Yürüttüğümüz Projeler</h3>
      <ul>
        <li>Kültürlerarası Diyalog Programları</li>
        <li>Toplumsal Uyum Seminerleri</li>
        <li>Ortak Etkinlikler ve Festivaller</li>
        <li>Gönüllülük Projeleri</li>
      </ul>

      <h3>Elde Ettiğimiz Başarılar</h3>
      <p>Son bir yıl içerisinde:</p>
      <ul>
        <li>500+ katılımcıya ulaştık</li>
        <li>20+ ortak etkinlik düzenledik</li>
        <li>10+ farklı toplum grubuyla işbirliği yaptık</li>
        <li>%85 memnuniyet oranı elde ettik</li>
      </ul>

      <h3>Gelecek Planlarımız</h3>
      <p>Önümüzdeki dönemde:</p>
      <ul>
        <li>Gençlik değişim programları başlatacağız</li>
        <li>Kültürlerarası sanat projeleri düzenleyeceğiz</li>
        <li>Toplumsal uyum eğitimleri yaygınlaştıracağız</li>
        <li>Yerel kurumlarla işbirliklerini artıracağız</li>
      </ul>
    `,
    image: '/images/articles/uyum.jpg',
    date: '2024-04-15',
    author: 'Toplumsal Uyum Komisyonu',
    category: 'Toplumsal Uyum',
  },
  {
    id: 2,
    title: 'Eğitim Faaliyetlerimiz',
    content: `
      <p>Eğitim komisyonumuz, çocuklarımız ve gençlerimizin ihtiyaçlarına yönelik kapsamlı bir eğitim programı yürütmektedir.</p>

      <h3>Eğitim Programlarımız</h3>
      <ul>
        <li>Kuran-ı Kerim Dersleri</li>
        <li>İslami İlimler Eğitimi</li>
        <li>Dil Kursları</li>
        <li>Ödev Destek Programı</li>
      </ul>

      <h3>Başarılarımız</h3>
      <p>Eğitim alanında:</p>
      <ul>
        <li>200+ öğrenciye eğitim verdik</li>
        <li>15+ uzman eğitmenle çalıştık</li>
        <li>%90 başarı oranı elde ettik</li>
        <li>10+ mezun öğrencimiz üniversiteye yerleşti</li>
      </ul>
    `,
    image: '/images/articles/egitim.jpg',
    date: '2024-04-10',
    author: 'Eğitim Komisyonu',
    category: 'Eğitim',
  },
  {
    id: 3,
    title: 'Gençlik Programları',
    content: `
      <p>Gençlik komisyonumuz, gençlerimizin sosyal, kültürel ve dini gelişimlerine katkı sağlayan programlar düzenlemektedir.</p>

      <h3>Programlarımız</h3>
      <ul>
        <li>Gençlik Buluşmaları</li>
        <li>Spor Turnuvaları</li>
        <li>Kültür Gezileri</li>
        <li>Eğitim Seminerleri</li>
      </ul>

      <h3>Hedeflerimiz</h3>
      <p>Gençlerimiz için:</p>
      <ul>
        <li>Sağlıklı bir sosyal çevre oluşturmak</li>
        <li>Dini bilgilerini geliştirmek</li>
        <li>Toplumsal sorumluluk bilinci kazandırmak</li>
        <li>Kariyer planlamasına destek olmak</li>
      </ul>
    `,
    image: '/images/articles/genclik.jpg',
    date: '2024-04-05',
    author: 'Gençlik Komisyonu',
    category: 'Gençlik',
  },
  {
    id: 4,
    title: 'Dini Hizmetlerimiz',
    content: `
      <p>Camimiz, dini hizmetler alanında toplumumuzun ihtiyaçlarını karşılamak için çalışmaktadır.</p>

      <h3>Hizmetlerimiz</h3>
      <ul>
        <li>Cuma ve Bayram Namazları</li>
        <li>Dini Sohbetler</li>
        <li>Nikah ve Cenaze Hizmetleri</li>
        <li>Dini Danışmanlık</li>
      </ul>

      <h3>Gelişmeler</h3>
      <p>Son dönemde:</p>
      <ul>
        <li>Yeni eğitim salonları açıldı</li>
        <li>Dijital hizmetler geliştirildi</li>
        <li>Kadınlar için özel programlar başlatıldı</li>
        <li>Çocuklara yönelik etkinlikler artırıldı</li>
      </ul>
    `,
    image: '/images/articles/dini.jpg',
    date: '2024-04-01',
    author: 'Dini Hizmetler Komisyonu',
    category: 'Dini Hizmetler',
  },
]

interface Props {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((item) => item.id === parseInt(params.id))

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-green-700 text-white px-4 py-2 rounded-full">
            {article.category}
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <span>{new Date(article.date).toLocaleDateString('tr-TR')}</span>
            <span className="mx-2">•</span>
            <span>{article.author}</span>
          </div>
        </div>

        <div
          className="prose prose-green max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <Link
            href="/makaleler"
            className="text-green-700 hover:text-green-800 font-medium"
          >
            ← Makalelere Dön
          </Link>
        </div>
      </article>
    </div>
  )
} 