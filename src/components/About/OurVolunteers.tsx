'use client';

import { motion } from 'framer-motion';

const volunteers = [
  {
    name: 'Uche Vivian',
    role: 'Volunteer',
    image: '/logos/uche.png',
  },
  {
    name: 'Sandra Adesanya',
    role: 'Volunteer',
    image: '/logos/sandra.png',
  },
  {
    name: 'Grace Uwaifo',
    role: 'Volunteer/Business Director',
    image: '/logos/grace.png',
  },
];

export default function OurVolunteers() {
  return (
    <section className="bg-gradient-to-b from-white via-pink-50 to-purple-50 py-20 relative overflow-hidden">
      {/* floating shapes */}
      <div className="absolute -top-10 left-0 w-40 h-40 bg-purple-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-56 h-56 bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse delay-700"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-purple-800 mb-4"
        >
          Our Dedicated Volunteers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          The heart of EELI lies in our amazing volunteers — selfless individuals
          who give their time, compassion, and energy to uplift communities and
          make change happen every day.
        </motion.p>

        {/* Volunteer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {volunteers.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                type: 'spring',
              }}
              viewport={{ once: true }}
              className="relative bg-white shadow-lg rounded-3xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full max-w-sm"
            >
              {/* image */}
              <div className="relative h-[320px] w-full overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 rounded-t-3xl"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* name + role */}
              <div className="py-6 px-4">
                <h3 className="text-xl font-bold text-purple-800">
                  {person.name}
                </h3>
                <p className="text-gray-600">{person.role}</p>
              </div>

              {/* hover reveal */}
              <motion.div
                className="absolute inset-0 bg-purple-500/20 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                initial={false}
              >
                <p className="text-sm italic px-6">
                  “Empowering lives through service and compassion.”
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
