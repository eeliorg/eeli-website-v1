"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function DonateCard() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("NGN");
  const [showModal, setShowModal] = useState(false);

  const stripeLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#";
  const paypalLink = process.env.NEXT_PUBLIC_PAYPAL_DONATE_LINK || "#";

  const handleDonate = () => {
    const numericAmount = parseFloat(amount);
    if (!numericAmount || numericAmount <= 0) {
      alert("Please enter a valid donation amount greater than 0 💕");
      return;
    }
    setShowModal(true);
  };

  const openPayment = (base: string) => {
    if (!base || base === "#") return;
    const url = new URL(base);
    url.searchParams.set("amount", amount);
    url.searchParams.set("currency", currency);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="bg-pink-50 py-5 sm:py-5 px-2 sm:px-4 flex justify-center">
        <div className="relative rounded-3xl overflow-hidden w-full max-w-5xl" style={{ height: "400px" }}>
          <Image src="/logos/purplebg.jpg" alt="Donation Background" fill className="object-cover" />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
            <div className="bg-white/15 p-6 rounded-2xl max-w-2xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                Help Us Uplift Women and Children. <br />
                <span>Make a Donation Today.</span>
              </h2>
            </div>

            <div className="mt-8 bg-white/15 backdrop-blur-sm p-4 rounded-2xl flex flex-wrap justify-center items-center gap-3 w-full max-w-md">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="flex-1 min-w-[90px] px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold"
              >
                <option value="USD">$ USD</option>
              </select>

              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 min-w-[120px] px-4 py-2 rounded-lg border border-purple-800 bg-white/10 text-white placeholder-white/70"
              />

              <button
                onClick={handleDonate}
                className="flex-1 min-w-[120px] bg-purple-950 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900">Choose Your Donation Method</h3>

              <div className="mt-6 flex flex-col gap-4">
                <button
                  onClick={() => openPayment(stripeLink)}
                  className="flex items-center justify-center gap-3 bg-purple-700 hover:bg-purple-600 text-white w-full py-3 rounded-xl"
                >
                  <Image src="/logos/stripe.png" width={22} height={22} alt="Stripe" />
                  Donate with Stripe
                </button>

                <button
                  onClick={() => openPayment(paypalLink)}
                  className="flex items-center justify-center gap-3 bg-white border border-purple-300 text-purple-700 w-full py-3 rounded-xl hover:border-purple-600"
                >
                  <Image src="/logos/paypal.png" width={24} height={24} alt="PayPal" />
                  Donate with PayPal
                </button>
              </div>

              <button onClick={() => setShowModal(false)} className="mt-6 text-gray-600 hover:text-gray-900">
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
