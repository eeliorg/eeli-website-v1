"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import NewsletterSignup from "@/components/NewsletterSignup";
import { client } from "@/sanity/lib/sanity";
import { PortableText } from "@portabletext/react";

// Post Type matching your schema
type Post = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: any[];
  publishedAt: string;
};

//  Updated GROQ query (matching your schema)
const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  excerpt,
  content,
  publishedAt
}`;

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-15 lg:py-22 h-[70vh] flex items-center justify-center bg-black/60">
        <Image
          src="/logos/self-employed.jpg"
          alt="EELI Blog Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-purple-300 font-semibold text-lg mb-2">EELI Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Leadership, Mindset & Impact
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Stories and insights that inspire growth, faith, and transformation.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No blog posts available yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post._id}
                onClick={() => setSelectedPost(post)}
                className="cursor-pointer group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-56">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-sm text-gray-500 mb-1">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString()
                      : "No date"}
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 text-purple-600 font-semibold group-hover:underline">
                    Read more →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={selectedPost._id}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative w-full h-64">
                {selectedPost.image ? (
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <motion.button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black transition"
                >
                  ✕
                </motion.button>
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {selectedPost.publishedAt
                    ? new Date(selectedPost.publishedAt).toLocaleDateString()
                    : ""}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h2>

                {/* PortableText Renderer */}
                <div className="prose prose-lg max-w-none">
                  <PortableText value={selectedPost.content} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <NewsletterSignup />
    </div>
  );
}
