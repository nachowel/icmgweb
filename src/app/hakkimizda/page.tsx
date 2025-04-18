export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Hakkımızda
      </h1>

      {/* Mission & Vision */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
            <p className="text-gray-600">
              ICMG Bexley olarak misyonumuz, Müslümanların İngiltere Bexley
              toplumunda aktif ve olumlu bir rol oynamasını sağlamak, toplumsal
              uyumu güçlendirmek ve kültürler arası diyaloğu geliştirmektir.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
            <p className="text-gray-600">
              Vizyonumuz, Bexley&apos;de yaşayan Müslümanların dini, sosyal ve
              kültürel ihtiyaçlarını karşılayan, toplumsal entegrasyonu
              destekleyen ve farklı inançlar arasında köprü kuran bir merkez
              olmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Hizmet Alanlarımız
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Dini Hizmetler</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Cuma ve bayram namazları</li>
              <li>Kuran-ı Kerim dersleri</li>
              <li>Dini sohbetler ve seminerler</li>
              <li>İslami ilimler eğitimi</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sosyal Faaliyetler</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Kültürel etkinlikler</li>
              <li>Gençlik programları</li>
              <li>Aile danışmanlığı</li>
              <li>Toplumsal uyum projeleri</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Eğitim Hizmetleri</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Çocuk eğitim programları</li>
              <li>Yetişkin eğitim kursları</li>
              <li>Dil kursları</li>
              <li>Mesleki gelişim seminerleri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* History */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Tarihçemiz</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-6">
            ICMG Bexley, 2010 yılında Londra&apos;nın Bexley bölgesinde kurulmuş, 
            Türk toplumuna hizmet veren bir sivil toplum kuruluşudur.
          </p>
          <p className="text-gray-600 mb-6">
            ICMG Bexley&apos;in temel amacı, Türk toplumunun kültürel ve sosyal 
            değerlerini korumak, gençlerin eğitimine destek olmak ve toplumsal 
            dayanışmayı güçlendirmektir.
          </p>
          <p className="text-gray-600 mb-6">
            ICMG Bexley, Türk toplumunun İngiltere&apos;deki varlığını güçlendirmek 
            ve gelecek nesillere aktarmak için çalışmaktadır.
          </p>
          <p className="text-gray-600">
            Bugün, modern tesislerimiz ve geniş hizmet yelpazemizle Bexley&apos;deki
            en önemli İslami merkezlerden biri haline gelmiş bulunmaktayız.
            Farklı kültürlerden insanları bir araya getiren, toplumsal uyumu
            destekleyen ve İslami değerleri yaşatan bir kurum olarak
            faaliyetlerimizi sürdürmekteyiz.
          </p>
        </div>
      </section>
    </div>
  )
} 