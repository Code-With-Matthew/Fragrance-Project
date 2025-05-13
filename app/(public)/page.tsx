import ProductCard from '@/components/ui/ProductCard'
import { fetchProducts, fetchBlogPosts } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import { STORE_CONFIG } from '@/lib/storeConfig'
import { formatCurrency } from '@/lib/utils'

export default async function HomePage() {
  const [products, posts] = await Promise.all([
    fetchProducts(),
    fetchBlogPosts()
  ])

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {STORE_CONFIG.name}
          </h1>
          <p className="text-xl text-gray-600">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={formatCurrency(product.price, STORE_CONFIG.currency)}
              imageUrl={product.imageUrl}
              href={`/products/${product.id}`}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
            </p>
            <a 
              href="/about"
              className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.slice(0, 2).map((post) => (
            <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <a href={`/blog/${post.slug}`} className="block">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <time>{formatDate(post.date)}</time>
                </div>
                <p className="text-gray-600">{post.excerpt}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}