// components/about/HeroSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-pink-50 py-15 lg:py-22 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Background Image with Overlay */}
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="/logos/abouthero.jpg" // 🔸replace with your actual image path
            alt="EELI Empowerment Image"
            width={1600}
            height={800}
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-3xl" />

          {/* Centered Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            {/* Small Button Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-purple-600/20 text-white text-sm font-semibold px-5 py-2 rounded-full uppercase tracking-wider mb-4"
            >
              About Us
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 mb-4"
            >
              Get To Know More About EELI
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-2xl mx-auto text-base sm:text-lg text-gray-100 leading-relaxed"
            >
              EELI empowers women and children through support, education, and life-changing community programs.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
