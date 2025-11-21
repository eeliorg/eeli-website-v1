'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';

export default function ResourcesSection() {
  return (
    <section className="py-6 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-pink-300/20 rounded-3xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

          {/* --- SECTION 1: IMAGE --- */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/logos/Handbook.png"
              alt="Mental health illustration"
              width={320}
              height={320}
              className="rounded-2xl object-contain"
              priority
            />
          </motion.div>

          {/* --- SECTION 2: TEXT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {/* Header and paragraph */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug">
                Guide To Managing Mental Health Issues:<br />
                <span className="text-purple-700">Anxiety, Depression, And Burnout</span>
              </h2>
              <p className="mt-1.5 text-gray-700 text-xs sm:text-sm leading-relaxed max-w-md">
                This handbook provides practical tools, insights, and supportive strategies 
                to help you understand, manage, and navigate mental health challenges such as 
                anxiety, depression, and burnout — both in your personal and professional life.
              </p>
            </div>

            {/* Two mini sections with icons */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-5">
              {/* Section 1 */}
              <div className="flex-1 relative">
                <Image
                  src="/logos/brain.png"
                  alt="Understand icon"
                  width={20}
                  height={20}
                  className="mb-2"
                />
                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                  Understand What You're Feeling
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Learn how to identify the signs of anxiety, depression, and burnout — 
                  and what they mean for your mental and emotional well-being.
                </p>
              </div>

              {/* Divider for desktop */}
              <div className="hidden sm:flex w-px bg-gray-300 mx-2"></div>

              {/* Section 2 */}
              <div className="flex-1 relative">
                <Image
                  src="/logos/control.png"
                  alt="Control icon"
                  width={20}
                  height={20}
                  className="mb-2"
                />
                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                  Take Back Control
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Discover practical tools and coping strategies to manage stress, 
                  set boundaries, and build a healthier mindset.
                </p>
              </div>
            </div>

            {/* --- Download Button --- */}
            <motion.a
              href="/resources/Guide to Managing Mental Health Issues.pdf" // 👈 Your PDF path
              download // Forces download instead of opening
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 inline-flex items-center justify-center bg-purple-950 text-white py-2 px-4 rounded-full font-semibold text-xs sm:text-sm w-fit hover:bg-purple-900 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD HANDBOOK
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
