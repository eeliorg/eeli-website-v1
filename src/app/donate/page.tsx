"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake } from "lucide-react";

function usePaymentLinks() {
  return {
    stripe: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#",
    paypal: process.env.NEXT_PUBLIC_PAYPAL_DONATE_LINK || "#",
    stripeMonthly: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_LINK || "#",
    paypalMonthly: process.env.NEXT_PUBLIC_PAYPAL_MONTHLY_LINK || "#",
  };
}

export default function DonatePage() {
  const links = usePaymentLinks();
  const [amount, setAmount] = useState<number | "">(50);
  const [currency, setCurrency] = useState("USD");
  const [showModal, setShowModal] = useState(false);

  const validatedAmount = useMemo(() => {
    if (amount === "") return 0;
    const n = Number(amount);
    return Number.isFinite(n) && n > 0 ? Math.round(n) : 0;
  }, [amount]);

  function openLink(base: string) {
    if (!base || base === "#") return;
    const url = new URL(base);
    if (validatedAmount > 0) {
      url.searchParams.set("amount", String(validatedAmount));
      url.searchParams.set("currency", currency);
    }
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[380px] w-full overflow-hidden">
        <Image src="/logos/donatepay.jpg" alt="Donate Hero" fill className="object-cover scale-105" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Your Support Changes Lives</h1>
            <p className="text-lg text-white/90 mt-3 max-w-2xl mx-auto">
              Every contribution provides mentorship, education, shelter support & hope.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUICK DONATE */}
      <section className="py-12 px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-5xl rounded-3xl overflow-hidden group cursor-pointer"
        >
          <div className="relative w-full h-[340px] md:h-[420px]">
            <Image src="/logos/purplebg.jpg" fill alt="Donate Background" className="object-cover group-hover:scale-105 transition-all duration-700" />

            <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-3xl font-bold text-white">Make a Quick Donation</h2>
              <p className="text-white/90 mt-2 max-w-xl">Even the smallest amount can change everything.</p>

              <div className="mt-6 bg-white/20 backdrop-blur-lg p-4 rounded-xl flex flex-col sm:flex-row gap-3 w-full max-w-xl">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-white text-gray-800 px-3 py-2 rounded-lg"
                >
                  <option>USD</option>
                  <option>NGN</option>
                  <option>EUR</option>
                </select>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Amount"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70"
                />

                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.07 }}
                  className="bg-purple-900 text-white px-6 py-2 rounded-lg animate-pulse hover:bg-purple-700 transition"
                >
                  Donate
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MONTHLY SPONSOR CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="py-16 px-4 text-center bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <HeartHandshake className="w-12 h-12 text-purple-700 mx-auto" />
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Become a Monthly Sponsor</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-3">
          Your monthly support ensures stability, education & care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button onClick={() => openLink(links.stripeMonthly)} className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-xl">
            Sponsor via Stripe
          </button>
          <button onClick={() => openLink(links.paypalMonthly)} className="px-6 py-3 bg-white border border-purple-300 hover:border-purple-600 text-purple-700 rounded-xl">
            Sponsor via PayPal
          </button>
        </div>
      </motion.section>

      {/* OUTREACH PHOTOS */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <h3 className="text-center text-3xl font-bold text-gray-900 mb-10">Your Donation at Work</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
          <Image src="/gallery/eeli13.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
          <Image src="/gallery/eeli14.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
          <Image src="/gallery/eeli15.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
          <Image src="/gallery/eeli16.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
          <Image src="/gallery/eeli19.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
          <Image src="/gallery/eeli20.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
          <Image src="/gallery/eeli23.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
          <Image src="/gallery/eeli24.jpg" width={600} height={300} alt="Outreach" className="rounded-xl object-cover" />
        </div>
      </motion.section>

      {/* DONATION METHOD MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full text-center"
            >
              <h3 className="text-xl font-bold text-gray-900">Choose Your Donation Method</h3>

              <div className="mt-6 flex flex-col gap-4">
                <button onClick={() => openLink(links.stripe)} className="bg-purple-700 hover:bg-purple-600 text-white w-full py-3 rounded-xl">
                  Continue with Stripe
                </button>
                <button onClick={() => openLink(links.paypal)} className="bg-white border border-purple-300 text-purple-700 w-full py-3 rounded-xl hover:border-purple-600">
                  Continue with PayPal
                </button>
              </div>

              <button onClick={() => setShowModal(false)} className="mt-6 text-gray-600 hover:text-gray-900">
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
