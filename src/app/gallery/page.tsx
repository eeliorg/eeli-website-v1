'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Loader2, Play } from 'lucide-react';
import { client } from "@/sanity/lib/sanity"; 

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  title?: string;
}

export default function GalleryPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Dynamic Data from Sanity
  useEffect(() => {
    async function fetchGallery() {
      try {
        const query = `*[_type == "resource"] {
          "type": mediaType,
          "title": title,
          "src": select(
            mediaType == 'video' => video.asset->url,
            mediaType == 'image' => image.asset->url
          )
        }`;
        
        const data = await client.fetch(query);
        // Filter out any entries where the file might be missing
        const validMedia = data.filter((item: any) => item.src !== null);
        setMedia(validMedia);
      } catch (error) {
        console.error("Error loading gallery:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  // 2. Keyboard Navigation Logic
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === 'ArrowRight')
        setSelected((prev) => (prev! + 1) % media.length);
      if (e.key === 'ArrowLeft')
        setSelected((prev) => (prev! - 1 + media.length) % media.length);
      if (e.key === 'Escape') setSelected(null);
    },
    [selected, media.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // 3. Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="animate-spin text-purple-600 mb-4" size={48} />
        <p className="text-gray-500 font-medium">Loading Gallery...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-linear-to-b from-pink-50 via-white to-purple-50 py-30 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-purple-800 mb-4"
        >
          Our Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Explore the impact of our community programs through photos and videos.
          We show you how your donations and support make a difference and impact lives.
        </motion.p>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {media.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-md"
            onClick={() => setSelected(i)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.title || "Gallery Image"}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={item.src}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg">
                    <Play size={20} className="text-purple-600 fill-purple-600 ml-1" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/55 flex justify-center items-center z-50 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white hover:text-pink-400 transition-colors"
              >
                <X size={40} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => setSelected((prev) => (prev! - 1 + media.length) % media.length)}
                className="absolute -left-4 md:-left-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <ChevronLeft size={40} />
              </button>

              <div className="w-full h-full flex flex-col items-center">
                {media[selected].type === 'image' ? (
                  <img
                    src={media[selected].src}
                    className="max-h-[60vh] w-auto rounded-xl object-contain shadow-2xl"
                    alt={media[selected].title || "Gallery item"}
                  />
                ) : (
                  <video
                    src={media[selected].src}
                    className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
                    controls
                    autoPlay
                  />
                )}
                {media[selected].title && (
                  <p className="text-white mt-4 text-lg font-medium tracking-wide">
                    {media[selected].title}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelected((prev) => (prev! + 1) % media.length)}
                className="absolute -right-4 md:-right-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <ChevronRight size={40} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}