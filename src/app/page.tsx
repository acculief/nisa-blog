import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts().slice(0, 5);
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">お金の教科書</h1>
      <p className="text-gray-600 mb-10">20代から始める新NISA・資産形成のわかりやすい解説ブログ</p>
      <h2 className="text-xl font-semibold mb-4">最新記事</h2>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 font-medium">
              {post.title}
            </Link>
            <span className="text-gray-400 text-sm ml-2">{post.date}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/blog" className="text-blue-600 hover:underline">記事一覧を見る →</Link>
      </div>
    </main>
  );
}
