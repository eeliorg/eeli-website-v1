"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UserPlus } from "lucide-react";

const inputClass =
  "w-full border border-gray-300 rounded-xl px-2 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500";

export default function JoinPageWithCTA() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 py-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-purple-600 font-semibold uppercase tracking-wide">
            Join Our Community
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Register With <span className="text-purple-600">EELI</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Sign up as a member or volunteer and stay connected with impact and opportunities.
          </p>
        </motion.div>

        {/* ================= CTA CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-start h-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Join Community
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Be part of a strong, supportive network where women and children thrive.
            </p>

            <div className="flex justify-center mb-4 grow items-center">
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
    </div>
  );
}
