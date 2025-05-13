// components/ui/ProductCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  price: string | number // Update type untuk handle format currency
  imageUrl: string
  href: string // Tambahkan properti href
  className?: string
}

export default function ProductCard({ 
  title, 
  price, 
  imageUrl, 
  href,
  className = '' 
}: ProductCardProps) {
  return (
    <Link href={href} className={`block group ${className}`}>
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
        <div className="aspect-square relative bg-gray-100">
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-gray-700 font-medium">
            {typeof price === 'number' ? `$${price.toFixed(2)}` : price}
          </p>
        </div>
      </div>
    </Link>
  )
}