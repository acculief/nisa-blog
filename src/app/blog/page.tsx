import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: '新NISA・資産形成ブログ | お金の教科書',
  description: '20代から始める新NISA・iDeCo・資産形成の基礎知識をわかりやすく解説します。',
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      {posts.length === 0 && <p className="text-gray-500">記事がまだありません。</p>}
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{post.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
