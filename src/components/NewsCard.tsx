import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  id: number
  title: string
  summary: string
  image: string
}

const NewsCard = ({ id, title, summary, image }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <Link
          href={`/haber/${id}`}
          className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
        >
          Devamını Oku
        </Link>
      </div>
    </div>
  )
}

export default NewsCard 