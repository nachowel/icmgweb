export default function DonationPage() {
  const donationOptions = [
    {
      title: 'Genel Bağış',
      description:
        'Camimizin genel giderleri ve faaliyetleri için kullanılacak bağışlar.',
      suggested: ['£10', '£20', '£50', '£100'],
    },
    {
      title: 'Eğitim Fonu',
      description:
        'Çocuklarımızın ve gençlerimizin eğitim faaliyetleri için kullanılacak bağışlar.',
      suggested: ['£25', '£50', '£100', '£250'],
    },
    {
      title: 'Yardım Fonu',
      description:
        'İhtiyaç sahiplerine yardım için kullanılacak bağışlar.',
      suggested: ['£15', '£30', '£75', '£150'],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Bağış Yap
      </h1>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600 mb-6">
          ICMG Bexley olarak, toplumumuza hizmet etmek ve İslami değerleri
          yaşatmak için çalışıyoruz. Yapacağınız bağışlar, bu yoldaki
          çalışmalarımızı sürdürmemize yardımcı olacaktır.
        </p>
        <p className="text-gray-600">
          Bağışlarınız için teşekkür ederiz. Allah hayrınızı kabul etsin.
        </p>
      </div>

      {/* Bank Details */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-6">Banka Bilgileri</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Banka Hesap Bilgileri:</h3>
            <p className="text-gray-600">Banka: Example Bank</p>
            <p className="text-gray-600">Hesap Adı: ICMG Bexley</p>
            <p className="text-gray-600">Sort Code: 12-34-56</p>
            <p className="text-gray-600">Hesap No: 12345678</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Önemli Notlar:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Açıklama kısmına adınızı yazınız</li>
              <li>Gift Aid için lütfen bizimle iletişime geçiniz</li>
              <li>Düzenli bağış için standing order kurabilirsiniz</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Donation Options */}
      <div className="grid md:grid-cols-3 gap-8">
        {donationOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
            <p className="text-gray-600 mb-6">{option.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {option.suggested.map((amount, i) => (
                <button
                  key={i}
                  className="bg-green-50 text-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>
            <button className="w-full mt-6 bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-colors">
              Bağış Yap
            </button>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Diğer bağış yöntemleri veya sorularınız için lütfen{' '}
          <a href="/iletisim" className="text-green-700 hover:underline">
            bizimle iletişime geçin
          </a>
          .
        </p>
      </div>
    </div>
  )
} 