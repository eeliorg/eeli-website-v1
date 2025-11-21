'use client';

import { motion } from 'framer-motion';

export default function ChildrenSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#f2f0f0]" aria-labelledby="children-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-purple-600 font-semibold text-base sm:text-lg">Little Dreams, Big Futures</p>
            <h2 id="children-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">Every Child Deserves to Smile</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6">We believe every child deserves joy, love, and the chance to grow in a safe and supportive environment. Through community care and compassion, we create moments that light up their world.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}