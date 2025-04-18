'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Burada form verilerini işleyebilirsiniz
    console.log('Form verileri:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        İletişim
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Adres:</h3>
                <p className="text-gray-600">123 Example Street</p>
                <p className="text-gray-600">Bexley, London</p>
                <p className="text-gray-600">SE2 9DA</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">İletişim:</h3>
                <p className="text-gray-600">Tel: +44 20 1234 5678</p>
                <p className="text-gray-600">E-posta: info@icmgbexley.org</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Çalışma Saatleri:</h3>
                <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-gray-600">Cumartesi - Pazar: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Konum</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.686824721289!2d0.1234567!3d51.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzI0LjQiTiAwwrAwNyc0NC40IkU!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-6">İletişim Formu</h2>
          {isSubmitted ? (
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Mesajınız Alındı!
              </h3>
              <p className="text-gray-600">
                En kısa sürede size geri dönüş yapacağız.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ad Soyad */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* E-posta */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Konu */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Konu *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Seçiniz</option>
                  <option value="general">Genel Bilgi</option>
                  <option value="membership">Üyelik</option>
                  <option value="donation">Bağış</option>
                  <option value="activities">Etkinlikler</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              {/* Mesaj */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-colors"
              >
                Gönder
              </button>

              <p className="text-sm text-gray-500">
                * ile işaretli alanların doldurulması zorunludur.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
} 