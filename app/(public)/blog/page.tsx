import { fetchBlogPosts } from '@/lib/api';
import { formatDate, generateSlug } from '@/lib/utils';

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="border-b pb-8 group"
          >
            <a 
              href={`/blog/${generateSlug(post.title)}`}
              className="block hover:text-primary transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-4">By {post.author}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <p className="text-gray-600">{post.excerpt}</p>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}