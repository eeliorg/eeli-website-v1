"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name  }),
      });

      const data = await res.json();

      if (data.success) {
      setStatus("success");
      setMessage(data.message);
      setEmail("");
      setName("");
    } else {
      setStatus("error");
      setMessage(data.error || "Something went wrong.");

      return;
    }

    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative rounded-xs overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/logos/purplebg.jpg')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-10 text-center">
        <div className="max-w-2xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Mail className="w-6 h-6 text-purple-950" />
            <h3 className="text-2xl font-bold">Stay Connected</h3>
          </motion.div>

          <p className="text-gray-200 mb-8 text-base sm:text-lg leading-relaxed">
            Get updates on our programs, resources, and community events. Join our newsletter for
            inspiration and support.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              disabled={status === "loading"}
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              disabled={status === "loading"}
            />

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-950 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2"
            >
            {status === "loading" ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Subscribing...</span>
              </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </motion.button>
            </form>


          {/* Status Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center space-x-2"
            >
              {status === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-300" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-300" />
              )}
              <span className={status === "success" ? "text-green-300" : "text-red-300"}>
                {message}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
