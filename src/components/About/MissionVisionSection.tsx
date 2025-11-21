'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MissionVisionSection() {
  return (
    <section className="bg-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-2 mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 text-center mb-6">
            Our Mission & Vision
           </h2>
        {/* === Mission Card === */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Image Left */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
              <Image
                src="/logos/womensupport.jpg"
                alt="EELI Mission"
                width={600}
                height={300}
                className="rounded-3xl object-cover w-full h-[250px]"
              />
            </div>
          </motion.div>

          {/* Text Right */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block bg-purple-500/20 text-purple-800 font-semibold px-5 py-2 rounded-full mb-4"
            >
              Our Mission
            </motion.div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              At EELI, our mission is to empower women and children through love, dignity,
              and faith-based community programs. We provide resources, mentorship, and
              educational support to help every individual rise to their fullest potential.
            </p>
          </motion.div>
        </motion.div>

        {/* === Vision Card === */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Image Right */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
              <Image
                src="/logos/about1.jpg"
                alt="EELI Vision"
                width={600}
                height={300}
                className="rounded-3xl object-cover w-full h-[250px]"
              />
            </div>
          </motion.div>

          {/* Text Left */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block bg-purple-500/20 text-purple-800 font-semibold px-5 py-2 rounded-full mb-4"
            >
              Our Vision
            </motion.div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              We envision a world where women and children thrive without limits — where
              compassion, empowerment, and opportunity transform lives and communities for
              generations to come.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
