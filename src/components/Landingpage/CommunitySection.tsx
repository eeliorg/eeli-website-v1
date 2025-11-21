'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/sanity';

export default function CommunitySection() {
  const rowHeight = 'h-[380px]';

  const [events, setEvents] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch from Sanity
  useEffect(() => {
    const fetchEvents = async () => {
      const query = `
        *[_type == "event"] | order(date asc) {
          title,
          date,
          time,
          location,
          description,
          speaker,
          "imageUrl": image.asset->url,
          link
        }
      `;
      const data = await client.fetch(query);
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`bg-pink-100 relative rounded-2xl p-5 sm:p-6 flex flex-col shadow-md ${rowHeight}`}
        >
          <div className="w-auto max-w-[650px]">
            <Image
              src="/logos/womankid.png"
              alt="woman and child"
              width={450}
              height={450}
              className="object-contain mx-auto hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div className="text-center">
            <h3 className="text-purple-950 font-medium mt-2 text-xs sm:text-base">
              Where Love Begins and Grows
            </h3>
            <p className="text-purple-900 text-xs sm:text-xs">
              How we empower the bond between women and their children.
            </p>
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`flex flex-col items-center text-center lg:text-left ${rowHeight} justify-between`}
        >
          <div className="mb-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
              Get Involved
            </h2>
            <p className="text-sm text-gray-700 max-w-[400px]">
              Together, we can uplift voices and build lasting legacies that empower women and transform generations.
            </p>
          </div>

          {/* Event Card */}
          <div
            className="relative bg-cover bg-center rounded-2xl p-3 sm:p-4 text-white shadow-md overflow-hidden w-full h-[280px] flex flex-col justify-between"
            style={{ backgroundImage: "url('/logos/playcard.png')" }}
          >

            {!events.length ? (
              <p className="text-center text-white">Loading events...</p>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col justify-between h-full mt-2"
                >
                  <div>
                    <h3 className="text-lg sm:text-lg font-semibold mb-2 mt-1">Upcoming Events</h3>

                    <div className="flex flex-col gap-2">
                      {/* Title */}
                      {events[currentIndex].link && (
                      <Link
                        href={events[currentIndex].link}
                        target="_blank"
                        className="flex items-center bg-white/20 rounded-xl px-1 py-1.5 hover:bg-purple-950 transition w-[70%] mx-auto lg:mx-0"
                      >
                        <Image src="/logos/little.png" alt="icon" width={12} height={12} />
                        <span className="text-white text-[11px] font-medium ml-2 truncate">
                          {events[currentIndex].title}
                        </span>
                      </Link>
                      )}

                      {/* Date */}
                      <div className="flex items-center bg-white/20 rounded-xl px-1 py-1.5 w-[70%] mx-auto lg:mx-0">
                        <Image src="/logos/flower.png" alt="calendar" width={12} height={12} />
                        <span className="text-white text-[11px] font-medium ml-2 truncate">
                          {formatDate(events[currentIndex].date)}
                        </span>
                      </div>

                      {/* Time */}
                      <div className="flex items-center bg-white/20 rounded-xl px-1 py-1.5 w-[70%] mx-auto lg:mx-0">
                        <Image src="/logos/sunrise.png" alt="clock" width={12} height={12} />
                        <span className="text-white text-[11px] font-medium ml-2 truncate">
                          {events[currentIndex].time}
                        </span>
                      </div>

                      {/* Speaker */}
                      <div className="flex items-center bg-white/20 rounded-xl px-1 py-1.5 w-[70%] mx-auto lg:mx-0">
                        <Image src="/logos/voice.png" alt="mic" width={12} height={12} />
                        <span className="text-white text-[11px] font-medium ml-2 truncate">
                          {events[currentIndex].location}
                        </span>
                      </div>

                      {/* Speaker */}
                      <div className="flex items-center bg-white/20 rounded-xl px-1 py-1.5 w-[70%] mx-auto lg:mx-0">
                        <Image src="/logos/voice.png" alt="mic" width={12} height={12} />
                        <span className="text-white text-[11px] font-medium ml-2 truncate">
                          {events[currentIndex].speaker}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-center mt-2 gap-3 text-gray-100">
                    <ArrowLeft onClick={handlePrev} className="w-6 h-6 cursor-pointer" />
                    <div className="flex gap-1 text-sm">
                      {events.map((_, index) => (
                        <span
                          key={index}
                          className={index === currentIndex ? 'text-white font-bold' : 'text-gray-300'}
                        >
                          -
                        </span>
                      ))}
                    </div>
                    <ArrowRight onClick={handleNext} className="w-6 h-6 cursor-pointer" />
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </motion.div>

        {/* --- RIGHT SECTION (Join Community) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col justify-between ${rowHeight}`}
        >
          <div className="flex flex-col justify-start h-full"> 
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Join Community
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Be part of a strong, supportive network where women and children thrive.
            </p>

            <div className="flex justify-center mb-4 flex-grow items-center">
              <Image
                src="/logos/community.png"
                alt="community image"
                width={110}
                height={110}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <Link
            href="/join"
            className="bg-purple-950 hover:bg-purple-900 text-white flex items-center justify-center gap-2 rounded-full py-2 font-semibold text-xs transition-all"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Join EELI Community</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
