'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { JSX } from 'react';

export default function HeroSection(): JSX.Element {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-pink-50 py-25 px-4 overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start md:col-span-2"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl w-full h-80 sm:h-96 md:h-[32rem] bg-cover bg-center group"
              style={{ backgroundImage: "url('/logos/abouthero.jpg')" }}
            >

              {/* Overlay Text */}
              <div className="absolute left-4 top-4 md:left-8 md:top-8 z-30 text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                  Empowering Women,
                </h3>
                <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                  Uplifting Children,
                </h3>
                <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                  Transforming Generation.
                </h3>
                <p className="mt-2 text-xs sm:text-sm md:text-sm text-white/90 max-w-xs shadow-sm drop-shadow-md">
                  EELI is dedicated to fostering joy, hope, and lasting change
                  through mentorship, community support, and love.
                </p>
              </div>

              {/* Floating Badges */}
              <div className="absolute right-4 bottom-4 grid grid-cols-2 gap-3 z-20">
                {(() => {
                  const items = [
                    { id: '1', text: 'Women Who Flourish', icon: '/logos/flower.png' },
                    { id: '2', text: 'Are Empowered', icon: '/logos/ballon.png' },
                    { id: '3', text: 'The Future', icon: '/logos/sunrise.png' },
                    { id: '4', text: 'Are the Children', icon: '/logos/voice.png' },
                  ];
                  return items.map((item, i) => (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                      style={{
                        animation: `float 3s ease-in-out ${i * 0.15}s infinite`,
                        minWidth: 120,
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt={`${item.text} icon`}
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-xs font-medium text-slate-800">
                        {item.text}
                      </span>
                    </div>
                  ));
                })()}
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between text-center md:text-left h-80 sm:h-96 md:h-[32rem] md:col-span-1"
          >
            {/* Floating Pill */}
            <div className="flex justify-center md:justify-start">
              <div
                role="button"
                tabIndex={0}
                className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-md"
                style={{
                  animation: `float 3s ease-in-out 0s infinite`,
                  minWidth: 110,
                }}
              >
                <Image src="/logos/little.png" alt="logo" width={14} height={14} />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Little Dreams, Big Futures
                </span>
              </div>
            </div>

            {/* Heading + Text */}
            <div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight inline-flex items-center justify-center md:justify-start">
                <span>
                  Every Child
                  <br />
                  Deserves To Smile
                </span>
                <span
                  className="ml-3 inline-block"
                  style={{ animation: 'float 3s ease-in-out 0.2s infinite' }}
                  aria-hidden
                >
                  <Image src="/logos/smile.png" alt="smile" width={36} height={36} />
                </span>
              </h2>

              <p className="mt-2 text-slate-700 max-w-xs mx-auto md:mx-0">
                We believe every child deserves joy, love, and the chance to grow
                in a safe and supportive environment. Through community care and
                compassion, we create moments that light up their world.
              </p>
            </div>

            {/* Bottom Image */}
            <div className="flex justify-center md:justify-start mt-4 md:mt-0">
              <div className="group relative rounded-lg overflow-hidden shadow-md w-72 sm:w-96 md:w-[28rem] h-48 sm:h-56 md:h-[15rem]">
                <Image
                  src="/logos/hero2.png"
                  alt="Child smiling"
                  fill
                  sizes="(max-width: 800px) 60vw, 480px"
                  className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        @media (max-width: 420px) {
          .floating { animation-duration: 4s; }
        }
      `}</style>
    </motion.section>
  );
}
