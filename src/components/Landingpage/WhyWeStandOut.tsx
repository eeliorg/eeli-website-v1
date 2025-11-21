'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyWeStandOut() {
  const cards = [
    {
      icon: '/logos/smile.png', // 🟣 replace with your actual file name
      title: 'Compassion-Driven Mission',
      desc: 'We lead with love, ensuring every woman and child feels seen, heard, and supported through every program we deliver.',
    },
    {
      icon: '/logos/sunrise.png', 
      title: 'Community-Centered Impact',
      desc: 'We respond to real needs, from mentorship to food drives, creating meaningful change.',
    },
    {
      icon: '/logos/little.png', 
      title: 'Empowerment That Truly Lasts',
      desc: 'We don’t just offer help, we build confidence, independence, and purpose in every woman and child we serve.',
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Button */}
        <div className="flex justify-center mb-6">
          <button className="bg-pink-300/20 text-purple-900 text-xs sm:text-sm font-semibold py-2 px-6 rounded-full shadow-md">
            Why We Stand Out
          </button>
        </div>

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
          What Makes Us Best
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-6 text-left border border-gray-100"
            >
              <div className="mb-3">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="mx-auto sm:mx-0"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




