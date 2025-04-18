import NewsCard from "@/components/NewsCard";
import ArticleCarousel from "@/components/ArticleCarousel";

const news = [
  {
    id: 1,
    title: "Ramazan Bayramı Etkinlikleri",
    summary: "Bu yıl düzenlenecek Ramazan Bayramı etkinliklerimiz hakkında detaylı bilgi...",
    image: "/images/news/ramazan-bayrami.jpg",
  },
  {
    id: 2,
    title: "Gençlik Programları",
    summary: "Gençlerimiz için düzenlediğimiz eğitim ve sosyal aktivite programları...",
    image: "/images/news/genclik-programlari.jpg",
  },
  {
    id: 3,
    title: "Yeni Kurs Kayıtları",
    summary: "Yeni dönem Kuran-ı Kerim ve İslami ilimler kurs kayıtlarımız başlamıştır...",
    image: "/images/news/kurs-kayitlari.jpg",
  },
];

const articles = [
  {
    id: 1,
    title: "Toplumsal Uyum Projelerimiz",
    content: "ICMG Bexley olarak toplumsal uyum projelerimiz kapsamında...",
    images: ["/images/articles/toplumsal-uyum1.jpg", "/images/articles/toplumsal-uyum2.jpg"],
  },
  {
    id: 2,
    title: "Eğitim Faaliyetlerimiz",
    content: "Çocuklarımız ve gençlerimiz için düzenlediğimiz eğitim faaliyetleri...",
    images: ["/images/articles/egitim-faaliyetleri1.jpg", "/images/articles/egitim-faaliyetleri2.jpg"],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-6">
          ICMG BEXLEY
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          ICMG Bexley, Müslümanların İngiltere Bexley toplumunda toplumsal
          katılımı, konumlandırılması ve kabulüne odaklanan bir sosyal-dini
          harekettir.
        </p>
      </section>

      {/* News Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Makaleler</h2>
        <ArticleCarousel articles={articles} />
      </section>
    </div>
  );
}
