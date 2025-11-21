'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Mic2 } from 'lucide-react';
import { client } from '@/sanity/lib/sanity';

type EventItem = {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speaker: string;
  link: string;
  image: string;
};

const query = `*[_type == "event"] | order(date desc) {
  _id,
  title,
  date,
  time,
  location,
  description,
  speaker,
  link,
  "image": image.asset->url
}`;

export default function Events() {
  const today = new Date();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await client.fetch(query);
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  // Add "Upcoming / Concluded" labels
  const processedEvents = useMemo(() => {
    return events.map(event => {
      const eventDate = new Date(event.date);
      const status = eventDate > today ? 'Upcoming' : 'Concluded';
      return { ...event, status };
    });
  }, [events, today]);

  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Concluded'>('All');

  const filteredEvents = useMemo(() => {
    if (filter === 'All') return processedEvents;
    return processedEvents.filter(e => e.status === filter);
  }, [filter, processedEvents]);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-purple-950"
        >
          Our Events
        </motion.h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Discover our empowering gatherings, workshops, and conferences designed to inspire growth and connection.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {['All', 'Upcoming', 'Concluded'].map((tab, i) => (
            <motion.button
              key={i}
              onClick={() => setFilter(tab as any)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === tab
                  ? 'bg-purple-950 text-white shadow-md'
                  : 'bg-purple-100 text-purple-950 hover:bg-purple-200'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-500 py-10">Loading events...</div>
      )}

      {/* Event Cards */}
      {!loading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 group w-full sm:w-[90%] mx-auto"
              >
                {/* Event Image */}
                <div className="relative w-full h-48">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      No Image
                    </div>
                  )}

                  <div
                    className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      event.status === 'Upcoming'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    {event.status}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col text-left h-[220px] justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-950 mb-2 truncate">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                      <Calendar className="w-4 h-4 text-purple-700" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Time */}
                    {event.time && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                        <Clock className="w-4 h-4 text-purple-700" />
                        <span>{event.time}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                      <Mic2 className="w-4 h-4 text-purple-700" />
                      <span>{event.speaker}</span>
                    </div>
                  </div>

                  {/* Description preview */}
                 <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                      <Mic2 className="w-4 h-4 text-purple-700" />
                      <span>{event.description}</span>
                    </div>

                   {/* Event Location */}
                    {event.location && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-0">
                        <Clock className="w-4 h-4 text-purple-700" />
                        <span>{event.location}</span>
                      </div>
                    )}

                  {/* Event Link */}
                  {event.link && (
                    <Link
                      href={event.link}
                      target="_blank"
                      className="text-purple-700 font-semibold hover:underline mt-1 text-sm mb-2"
                    >
                      Join Event →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
