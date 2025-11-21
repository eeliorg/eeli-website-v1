'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const media = [
  { type: 'image', src: '/gallery/eeli1.jpg' },
  { type: 'image', src: '/gallery/eeli2.jpg' },
  { type: 'image', src: '/gallery/eeli3.jpg' },
  { type: 'image', src: '/gallery/eeli4.jpg' },
  { type: 'image', src: '/gallery/eeli5.jpg' },
  { type: 'image', src: '/gallery/eeli6.jpg' },
  { type: 'image', src: '/gallery/eeli7.jpg' },
  { type: 'image', src: '/gallery/eeli8.jpg' },
  { type: 'image', src: '/gallery/eeli9.jpg' },
  { type: 'image', src: '/gallery/eeli10.jpg' },
  { type: 'image', src: '/gallery/eeli11.jpg' },
  { type: 'image', src: '/gallery/eeli12.jpg' },
  { type: 'image', src: '/gallery/eeli13.jpg' },
  { type: 'image', src: '/gallery/eeli14.jpg' },
  { type: 'image', src: '/gallery/eeli15.jpg' },
  { type: 'image', src: '/gallery/eeli16.jpg' },
  { type: 'image', src: '/gallery/eeli17.jpg' },
  { type: 'image', src: '/gallery/eeli18.jpg' },
  { type: 'image', src: '/gallery/eeli19.jpg' },
  { type: 'image', src: '/gallery/eeli20.jpg' },
  { type: 'image', src: '/gallery/eeli21.jpg' },
  { type: 'image', src: '/gallery/eeli22.jpg' },
  { type: 'image', src: '/gallery/eeli23.jpg' },
  { type: 'image', src: '/gallery/eeli24.jpg' },
  { type: 'image', src: '/gallery/eeli25.jpg' },
  { type: 'image', src: '/gallery/eeli26.jpg' },
  { type: 'image', src: '/gallery/eeli27.jpg' },
  { type: 'image', src: '/gallery/eeli28.jpg' },
  { type: 'video', src: '/gallery/eelivideo.mp4' },
  { type: 'video', src: '/gallery/eelivideo2.mp4' },
  { type: 'video', src: '/gallery/eelivideo3.mp4' },
  { type: 'video', src: '/gallery/eelivideo4.mp4' },
  { type: 'video', src: '/gallery/eelivideo5.mp4' },
];


export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === 'ArrowRight')
        setSelected((prev) => (prev! + 1) % media.length);
      if (e.key === 'ArrowLeft')
        setSelected((prev) => (prev! - 1 + media.length) % media.length);
      if (e.key === 'Escape') setSelected(null);
    },
    [selected]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-purple-800 mb-4"
        >
          Our Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Highlights from our outreach and community impact programs.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {media.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelected(i)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-44 md:h-56 object-cover rounded-xl hover:scale-105 transition"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-44 md:h-56 object-cover rounded-xl hover:scale-105 transition"
                muted
                autoPlay
                loop
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white hover:text-pink-300"
              >
                <X size={32} />
              </button>

              <button
                onClick={() =>
                  setSelected((prev) => (prev! - 1 + media.length) % media.length)
                }
                className="absolute left-0 md:-left-12 p-2 rounded-full bg-white/20 hover:bg-white/40"
              >
                <ChevronLeft size={36} className="text-white" />
              </button>

              {media[selected].type === 'image' ? (
                <img
                  src={media[selected].src}
                  className="max-h-[80vh] rounded-xl object-contain"
                />
              ) : (
                <video
                  src={media[selected].src}
                  className="max-h-[80vh] rounded-xl object-contain"
                  controls
                  autoPlay
                />
              )}

              <button
                onClick={() =>
                  setSelected((prev) => (prev! + 1) % media.length)
                }
                className="absolute right-0 md:-right-12 p-2 rounded-full bg-white/20 hover:bg-white/40"
              >
                <ChevronRight size={36} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
