'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    number: 100,
    label: 'Women Empowered',
    description: 'Mentorship, skills training, and support programs.',
  },
  {
    number: 120,
    label: 'Children Reached',
    description: 'School drives, food programs, and holiday support.',
  },
  {
    number: 50,
    label: 'Community Events',
    description: 'Workshops, healing sessions, and leadership seminars.',
  },
  {
    number: 90,
    label: 'Families Assisted',
    description:
      'Providing financial relief, emotional support, and practical care to families in need.',
  },
];

export default function ValueNumber() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [finished, setFinished] = useState(stats.map(() => false));

  useEffect(() => {
    if (!isInView) return;

    stats.forEach((stat, index) => {
      let start = Math.floor(Math.random() * 30) + 10; // start between 10–40
      let end = stat.number;
      let duration = 1200 + index * 300;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * eased);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setFinished((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      };

      requestAnimationFrame(animate);
    });
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-purple-50 to-pink-50 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-purple-800 mb-12"
        >
          Our Impact in Numbers
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                type: 'spring',
              }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-3xl p-4 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Animated number */}
              <motion.h3
                className={`text-5xl font-extrabold mb-2 ${
                  finished[i]
                    ? 'text-purple-700 animate-pulse-glow'
                    : 'text-purple-600'
                }`}
              >
                {counts[i]}+
              </motion.h3>

              <p className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </p>
              <p className="text-gray-600 text-base">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


