import { notFound } from "next/navigation";
import { samplePosts } from "@/lib/content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return samplePosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = samplePosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | EELI Blog`,
    description: post.summary,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = samplePosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">{post.title}</h1>
        <div className="mt-2 text-gray-600">By {post.author}</div>
        <div className="mt-6 prose prose-purple max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}



