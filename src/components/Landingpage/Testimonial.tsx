'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { client } from "@/sanity/lib/sanity";

type Testimonials = {
  _id: string;
  name: string;
  countryFlag: string;
  image: string;
  message: string;
};

const query = `*[_type == "testimonial"] {
  _id,
  name,
  "countryFlag": flag.asset->url,
  "image": photo.asset->url,
  message
}`;

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    async function getTestimonials() {
      const data = await client.fetch(query);
      setTestimonials(data);
    }
    getTestimonials();
  }, []);

  useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLargeScreen, testimonials.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-pink-50 py-15 px-3 sm:px-5 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-left">
          <div className="bg-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full inline-block">
            Testimonials
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Real Stories, Real Strength, <br />
            From <span className="text-purple-600">Women</span> and{' '}
            <span className="text-purple-600">Children</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative p-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${current * 320}px` }}
            transition={{
              duration: isTransitioning ? 0.7 : 0,
              ease: "easeInOut"
            }}
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t._id}
                className="
                  bg-white rounded-2xl shadow-md p-6
                  flex-shrink-0
                  w-[250px] sm:w-[260px] md:w-[280px] lg:w-[300px]
                  transition-transform duration-700
                "
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full border-4 border-purple-700/50 p-0.5 flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <Image
                      src={t.countryFlag}
                      alt="flag"
                      width={18}
                      height={18}
                      className="inline-block mt-1"
                    />
                  </div>
                </div>

                <p className="text-gray-700 text-sm italic leading-relaxed">
                  “{t.message}”
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots for mobile */}
          {!isLargeScreen && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    current === index ? "bg-purple-700" : "bg-purple-300"
                  } transition-all duration-300`}
                ></span>
              ))}
            </div>
          )}

          {/* Arrows */}
          {isLargeScreen && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-700/50 text-white p-3 rounded-full shadow-md hover:bg-purple-800 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-700/50 text-white p-3 rounded-full shadow-md hover:bg-purple-800 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
