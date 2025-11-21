'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What does EELI stand for?",
    answer:
      "EELI stands for Empowerment and Elevation Legacy International. We are dedicated to empowering women and uplifting children through mentorship, community support, and faith-based programs.",
  },
  {
    question: "How can I get involved with EELI?",
    answer:
      "You can get involved by joining our community, volunteering as a mentor, attending our events, or making a donation to support our programs.",
  },
  {
    question: "Who can benefit from EELI's programs?",
    answer:
      "Our programs are designed for women seeking personal growth, leadership development, and mentorship, as well as children and families in need of support and educational empowerment.",
  },
  {
    question: "Where does EELI operate?",
    answer:
      "EELI operates primarily in Canada, with our main office located in Barrie, Ontario. We also provide virtual programs and support worldwide.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Intro */}
        <div className="space-y-6">
          <button className="bg-pink-300/20 text-purple-950 font-semibold px-4 py-2 rounded-full shadow-sm">
            Common Questions
          </button>
          <h3 className="text-4xl font-bold text-gray-900">
            Your Questions Answered
          </h3>
          <p className="text-lg text-gray-600">
            Everything You Need to Know About EELI
          </p>
        </div>

        {/* Right side - FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.01 }}
                viewport={{ once: true }}
                className={`rounded-xl border border-pink-100 overflow-hidden transition-colors ${
                  isOpen ? 'bg-pink-100/30' : 'bg-white'
                } hover:bg-pink-300/20`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-4"
                >
                  <h4 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-purple-900" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-4 text-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
