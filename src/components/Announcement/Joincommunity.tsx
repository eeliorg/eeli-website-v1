"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UserPlus, MessageCircle, Send, Facebook, Instagram, Users } from "lucide-react";

export default function JoinPageWithCTA() {
  const platforms = [
    {
      name: "WhatsApp",
      description: "Join our WhatsApp community",
      icon: MessageCircle,
      color: "text-green-600",
      bg: "bg-green-100",
      href: "https://chat.whatsapp.com/JA058BbNzXiLUsvlULq1s8?mode=ems_share_c",
    },
    {
      name: "Telegram",
      description: "Join our Telegram channel",
      icon: Send,
      color: "text-blue-600",
      bg: "bg-blue-100",
      href: "#",
    },
    {
      name: "Facebook",
      description: "Join our Facebook group",
      icon: Facebook,
      color: "text-blue-700",
      bg: "bg-blue-100",
      href: "https://www.facebook.com/share/1AeVLRGLYo/",
    },
    {
      name: "Instagram",
      description: "Follow us on Instagram",
      icon: Instagram,
      color: "text-pink-600",
      bg: "bg-pink-100",
      href: "https://www.instagram.com/real_eeli?utm_source=qr&igsh=MWgxazY1b2Y5cjhyNQ==",
    },
  ];

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

        {/* ================= JOIN COMMUNITY CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between mb-24"
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

        {/* ================= SOCIAL PLATFORMS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Join our social platforms and stay connected with the EELI community.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 hover:border-purple-100 transition-all duration-300 group"
            >
              <span
                className={`w-14 h-14 rounded-xl ${platform.bg} ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <platform.icon className="w-7 h-7" />
              </span>
              <h3 className="mt-5 font-semibold text-gray-900 text-lg group-hover:text-purple-600">
                {platform.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {platform.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* ================= GUIDELINES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center">
              <Users className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              Community Guidelines
            </h2>
          </div>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2 leading-relaxed">
            <li>Be respectful, kind, and supportive.</li>
            <li>Maintain confidentiality and protect each other's stories.</li>
            <li>No harassment, spam, or harmful content.</li>
            <li>Encourage growth, healing, and faith-based values.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
