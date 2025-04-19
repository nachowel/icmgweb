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
    giftAid: 'yes',
    termsAccepted: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form verileri:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
              Üyelik başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
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
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Üyelik Başvurusu / Membership Application</h2>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Ad Soyad / Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-posta / Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefon / Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Birth Date */}
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
              Doğum Tarihi / Date of Birth *
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              required
              value={formData.birthDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Birth Place */}
          <div className="mb-4">
            <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-700">
              Doğum Yeri (Şehir ve Ülke) / Place of Birth (City and Country) *
            </label>
            <input
              type="text"
              id="birthPlace"
              name="birthPlace"
              required
              value={formData.birthPlace}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Adres / Address *
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Notlar / Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Membership Fee */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Üyelik Ücreti / Membership Fee *
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="fee10"
                  name="membershipFee"
                  value="10"
                  checked={formData.membershipFee === '10'}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <label htmlFor="fee10" className="ml-2 block text-sm text-gray-700">
                  £10
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="fee20"
                  name="membershipFee"
                  value="20"
                  checked={formData.membershipFee === '20'}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <label htmlFor="fee20" className="ml-2 block text-sm text-gray-700">
                  £20
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="feeCustom"
                  name="membershipFee"
                  value="custom"
                  checked={formData.membershipFee === 'custom'}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <label htmlFor="feeCustom" className="ml-2 block text-sm text-gray-700">
                  Diğer / Other
                </label>
                {formData.membershipFee === 'custom' && (
                  <input
                    type="number"
                    name="customFee"
                    value={formData.customFee}
                    onChange={handleChange}
                    className="ml-2 block w-24 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="£"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Gift Aid Declaration */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Gift Aid Declaration</h3>
            <p className="text-sm text-gray-600 mb-4">
              I want to Gift Aid all of my donations to ICMG Bexley. I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all my donations in that tax year it is my responsibility to pay any difference.
            </p>
            <div className="flex items-center space-x-8 mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="giftAid"
                  value="yes"
                  checked={formData.giftAid === 'yes'}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <span className="text-sm text-gray-700">Evet - Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="giftAid"
                  value="no"
                  checked={formData.giftAid === 'no'}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <span className="text-sm text-gray-700">Hayır - No</span>
              </label>
            </div>
          </div>

          {/* Membership Terms Acceptance */}
          <div className="border-t pt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                required
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="termsAccepted" className="ml-2 block text-sm font-medium text-gray-700">
                Üyelik şartlarını kabul ettiğinizi belirtmek için "Kabul ediyorum" kutucuğunu işaretleyiniz.
              </label>
            </div>
          </div>

          {/* Submit Button */}
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
  )
}
