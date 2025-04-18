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
    giftAid: 'yes', // 'yes' | 'no'
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
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Form başlıkları */}
          {/* ... diğer alanlar değişmediği için çıkarıldı ... */}

          {/* Gift Aid Declaration */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Gift Aid Declaration</h3>

            {/* Açıklamalar kısmı değişmedi */}
            {/* ... */}

            {/* Gift Aid Radyo Butonları */}
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
                Üyelik şartlarını kabul ettiğinizi belirtmek için &quot;Kabul ediyorum&quot; kutucuğunu işaretleyiniz.
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
