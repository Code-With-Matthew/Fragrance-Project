import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  price: number
  imageUrl: string
  currency?: string
}

export const ProductCard = ({ 
  id,
  name,
  price,
  imageUrl,
  currency = 'USD'
}: ProductCardProps) => {
  return (
    <Link 
      href={`/products/${id}`}
      className="group block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="mt-1 text-gray-700 font-medium">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency
          }).format(price)}
        </p>
      </div>
    </Link>
  )
}