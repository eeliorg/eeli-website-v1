// components/about/WhoWeAre.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Soft gradient background for calm feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 opacity-70"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center lg:text-left">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-purple-800 mb-8"
        >
          Who We Are
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
                src="/logos/8652549.jpg"
                alt="Empowerment & Elevation"
                width={700}
                height={450}
                className="object-cover w-full h-[320px] sm:h-[370px]"
            />
            <div className="absolute inset-0 bg-purple-800/5"></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-4"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-purple-700">Empowerment & Elevation Legacy International (EELI)</span>{' '}
              is a community-driven organization committed to uplifting women and children
              through compassion, support, and empowerment.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We provide practical tools, emotional guidance, and life-changing programs
              that inspire growth, build resilience, and create lasting impact in
              communities — locally and globally.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              At EELI, we believe in nurturing the bond between mothers and children while
              helping families thrive. Together, we’re shaping a legacy of love,
              empowerment, and transformation that echoes through generations.
            </p>

            {/* Subtle motion accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full w-40 mt-6 mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
