'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Article {
  id: number
  title: string
  content: string
  images: string[]
}

interface ArticleCarouselProps {
  articles: Article[]
}

const ArticleCarousel = ({ articles }: ArticleCarouselProps) => {
  const [currentArticle, setCurrentArticle] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articles.length)
    setCurrentImage(0)
  }

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length)
    setCurrentImage(0)
  }

  const nextImage = () => {
    const article = articles[currentArticle]
    setCurrentImage((prev) => (prev + 1) % article.images.length)
  }

  const prevImage = () => {
    const article = articles[currentArticle]
    setCurrentImage((prev) => (prev - 1 + article.images.length) % article.images.length)
  }

  const article = articles[currentArticle]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 md:h-96">
        <Image
          src={article.images[currentImage]}
          alt={article.title}
          fill
          className="object-cover"
        />
        {/* Image Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevImage}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            &#8249;
          </button>
          <button
            onClick={nextImage}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            &#8250;
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">{article.title}</h3>
        <p className="text-gray-600 mb-6">{article.content}</p>

        {/* Article Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevArticle}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Önceki Makale
          </button>
          <button
            onClick={nextArticle}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Sonraki Makale
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleCarousel 