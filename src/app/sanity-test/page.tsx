import { client } from "@/sanity/lib/client";

export default async function SanityTestPage() {
  const posts = await client.fetch(`*[_type == "post"]{
    title,
    author,
    publishedAt
  }`);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sanity Connection Test ✅</h1>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  );
}
