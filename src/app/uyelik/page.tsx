'use client'

import { useState } from 'react'

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    birthPlace: '',
    birthDate: '',
    phone: '',
    email: '',
    notes: '',
    membershipFee: '',
    customFee: '',
    giftAid: true,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Burada form verilerini işleyebilirsiniz
    console.log('Form verileri:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Başvurunuz Alındı! / Your Application Has Been Received!
            </h2>
            <p className="text-gray-600">
              Üyelik başvurunuz başarıyla alınmıştır. En kısa sürede sizinle
              iletişime geçeceğiz.
            </p>
            <p className="text-gray-600">
              Your membership application has been successfully received. We will contact you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              Üyelik Başvuru Formu / Membership Application Form
            </h1>
            <p className="text-gray-600 mb-6">
              ICMG Bexley&apos;e üye olarak topluluğumuzun bir parçası olabilir, 
              etkinliklerimize katılabilir ve desteklerimizden yararlanabilirsiniz.
            </p>
            <p className="text-gray-600">
              Please fill out the form to join the ICMG Bexley family.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ad Soyad */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ad Soyad / Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Adınız ve soyadınız / Your full name"
              />
            </div>

            {/* Adres */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Adres / Address *
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Tam adresinizi yazınız / Enter your full address"
              />
            </div>

            {/* Doğum Yeri */}
            <div>
              <label
                htmlFor="birthPlace"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Doğum Yeri / Place of Birth *
              </label>
              <input
                type="text"
                id="birthPlace"
                name="birthPlace"
                required
                value={formData.birthPlace}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Örn: İstanbul, Türkiye / E.g.: Istanbul, Turkey"
              />
            </div>

            {/* Doğum Tarihi */}
            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Doğum Tarihi / Date of Birth *
              </label>
              <input
                type="text"
                id="birthDate"
                name="birthDate"
                required
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="GG/AA/YYYY formatında yazınız / Enter in DD/MM/YYYY format"
              />
            </div>

            {/* Telefon */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefon / Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="+44 20 1234 5678"
              />
            </div>

            {/* E-posta */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-posta / Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="ornek@email.com / example@email.com"
              />
            </div>

            {/* Not */}
            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Eklemek İstedikleriniz / Additional Information
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Eklemek istediğiniz bilgileri buraya yazabilirsiniz... / You can write any additional information here..."
              />
            </div>

            {/* Üyelik Aidat Miktarı */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Üyelik Aidat Miktarı / Membership Fee Amount
              </h3>
              <div className="space-y-2">
                {['5', '10', '20', '30', '50', '100', '200'].map((amount) => (
                  <div key={amount} className="flex items-center">
                    <input
                      type="radio"
                      id={`fee-${amount}`}
                      name="membershipFee"
                      value={amount}
                      checked={formData.membershipFee === amount}
                      onChange={handleChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <label htmlFor={`fee-${amount}`} className="ml-3 block text-sm font-medium text-gray-700">
                      £{amount}
                    </label>
                  </div>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="fee-other"
                    name="membershipFee"
                    value="other"
                    checked={formData.membershipFee === 'other'}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <label htmlFor="fee-other" className="ml-3 block text-sm font-medium text-gray-700">
                    Diğer / Other:
                  </label>
                  {formData.membershipFee === 'other' && (
                    <input
                      type="text"
                      name="customFee"
                      value={formData.customFee}
                      onChange={handleChange}
                      className="ml-2 px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="£"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Gift Aid Declaration */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Gift Aid Declaration</h3>
              
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    Evet, Gift Aid&apos;den yararlanmak istiyorum.
                  </p>
                  <p className="mb-2">
                    &quot;Evet&quot; kutusunu işaretleyerek, ICMG Bexley&apos;in, aksini bildirene kadar yaptığım tüm nitelikli bağışların yanı sıra gelecekteki bağışlara ilişkin vergiyi geri talep etmesini kabul ediyorum.
                  </p>
                  <p className="mb-2">
                    O vergi yılında tüm bağışlarım üzerinden talep edilen Gift Aid tutarından daha az Gelir Vergisi ve/veya Sermaye Kazançları Vergisi ödersem herhangi bir fark ödememin istenebileceğini anlıyorum. ICMG Bexley&apos;in verdiğim her 1 £ üzerinden 25 peni vergiyi geri alacağını anlıyorum.
                  </p>
                  <p className="mb-2">
                    Formda yazılan bilgilerimin beyanda zikredilen amaçlar doğrultusunda kaydedilip kullanılmasını kabul ediyorum. Veri koruma beyanını okudum ve kabul ediyorum. Verilen onay beyanları her zaman iptal edilebilir.
                  </p>
                </div>

                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    Yes, I would like to claim Gift Aid.
                  </p>
                  <p className="mb-2">
                    By ticking the "Yes" box, I agree I would like ICMG Bexley to reclaim the tax on all qualifying donations I have made, as well as any future donations, until I notify them otherwise.
                  </p>
                  <p className="mb-2">
                    I understand that if I pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all my donations in that tax year I may be asked to pay any difference. I understand that ICMG Bexley will reclaim 25p of tax on every £1 that I give.
                  </p>
                  <p className="mb-2">
                    I agree that my information written in the form will be recorded and used for the purposes stated in the declaration. I have read and accept the data protection declaration. Declarations of consent given can be revoked at any time.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="giftAidYes"
                      name="giftAid"
                      checked={formData.giftAid}
                      onChange={handleChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="giftAidYes" className="ml-2 block text-sm font-medium text-gray-700">
                      Evet - Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="giftAidNo"
                      name="giftAid"
                      checked={!formData.giftAid}
                      onChange={(e) => setFormData(prev => ({ ...prev, giftAid: !e.target.checked }))}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="giftAidNo" className="ml-2 block text-sm font-medium text-gray-700">
                      Hayır - No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Başvuru Yap / Submit Application
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              * ile işaretli alanların doldurulması zorunludur. / Fields marked with * are required.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
} 