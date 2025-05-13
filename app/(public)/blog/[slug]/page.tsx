import { notFound } from 'next/navigation';
import { fetchBlogPosts } from '@/lib/api';
import { formatDate } from '@/lib/utils';

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await fetchBlogPosts();
  const post = posts.find(p => 
    p.title.toLowerCase().replace(/ /g, '-') === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-4">By {post.author}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </header>

        <div className="prose max-w-none">
          {post.content || (
            <>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </>
          )}
        </div>
      </article>
    </div>
  );
}