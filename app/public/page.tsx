// app/page.tsx
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/lib/constants'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Lorem Ipsum is simply dummy text</h1>
          <p className="text-xl text-gray-600">LOADED BY LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING</p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">ABOUT US</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">POPULAR PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">BLOG POSTS</h2>
        {/* Blog posts implementation */}
      </section>
    </main>
  )
}