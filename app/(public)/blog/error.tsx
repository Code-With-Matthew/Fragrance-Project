'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog Error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Failed to load blog posts</h2>
      <button
        onClick={() => reset()}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Try again
      </button>
    </div>
  );
}