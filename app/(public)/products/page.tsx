// app/products/page.tsx
import ProductCard from '@/components/ui/ProductCard'
import { fetchProducts } from '@/lib/api'
import { STORE_CONFIG } from '@/lib/storeConfig'
import { formatCurrency } from '@/lib/utils'

export default async function ProductsPage() {
  const products = await fetchProducts()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={formatCurrency(product.price, STORE_CONFIG.currency)}
            imageUrl={product.imageUrl}
            href={`/products/${product.id}`}
          />
        ))}
      </div>
    </div>
  )
}