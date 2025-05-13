// components/ui/ProductCard.tsx
import Image from 'next/image'

interface ProductCardProps {
  title: string
  price: string
  imageUrl: string
}

export default function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square relative bg-gray-100">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-700">{price}</p>
        <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}