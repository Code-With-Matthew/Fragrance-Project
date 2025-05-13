// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { fetchProductById } from '@/lib/api';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';

const STORE_CONFIG = {
  currency: 'Rp', 
};

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl text-primary">
            {formatCurrency(product.price, STORE_CONFIG.currency)}
          </p>

          <div className="space-y-2">
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="w-full border-2 border-black text-black py-3 rounded hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">
              {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}