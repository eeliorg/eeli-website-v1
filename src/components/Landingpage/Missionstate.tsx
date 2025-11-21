'use client';

import { motion } from 'framer-motion';

export default function MissionState() {
  return (
    <section className="bg-pink-50 py-16 px-6 text-center flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-xl sm:text-xl lg:text-3xl font-medium text-gray-900 leading-snug">
          At EELI, support is heartfelt —{' '}
          <span className="text-purple-500">
            every action is guided by love, dignity, and empowerment.
          </span>{' '}
          <br />
          We uplift women and children every step of the way.
        </h2>
      </motion.div>
    </section>
  );
}
