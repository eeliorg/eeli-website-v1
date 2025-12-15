"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-xl px-2 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500";

export default function JoinClient() {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 py-25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Forms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid gap-12 md:grid-cols-2 justify-center"
        >
          <Form role="Member" setShowThankYou={setShowThankYou} />
          <Form role="Volunteer" setShowThankYou={setShowThankYou} />
        </motion.div>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-purple-600 mb-3">
              Thank you for registering 💜
            </h2>
            <p className="text-gray-600">
              We’ve received your details and will be in touch.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Form({
  role,
  setShowThankYou,
}: {
  role: string;
  setShowThankYou: (v: boolean) => void;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 min-h-[560px] flex flex-col">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Become a {role}
      </h3>

      <form
        className="flex flex-col gap-6 flex-1"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;

          const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
          const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
          const email = (form.elements.namedItem("email") as HTMLInputElement).value;

          let payload: Record<string, any> = {
            role,
            firstName,
            lastName,
            email,
          };

          if (role === "Member") {
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

            const maleChildren = Number((form.elements.namedItem("maleChildren") as HTMLInputElement).value || 0);
            const femaleChildren = Number((form.elements.namedItem("femaleChildren") as HTMLInputElement).value || 0);
            const otherChildren = Number((form.elements.namedItem("otherChildren") as HTMLInputElement).value || 0);

            const maleChildrenAges =
              (form.elements.namedItem("maleChildrenAge") as HTMLInputElement)?.value
                .split(",")
                .map((v) => Number(v.trim()))
                .filter(Boolean) || [];

            const femaleChildrenAges =
              (form.elements.namedItem("femaleChildrenAge") as HTMLInputElement)?.value
                .split(",")
                .map((v) => Number(v.trim()))
                .filter(Boolean) || [];

            const otherChildrenAges =
              (form.elements.namedItem("otherChildrenAge") as HTMLInputElement)?.value
                .split(",")
                .map((v) => Number(v.trim()))
                .filter(Boolean) || [];

            payload = {
              ...payload,
              phone,
              maleChildren,
              femaleChildren,
              otherChildren,
              totalChildren: maleChildren + femaleChildren + otherChildren,
              maleChildrenAges,
              femaleChildrenAges,
              otherChildrenAges,
            };
          }

          if (role === "Volunteer") {
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
            const availability = (form.elements.namedItem("availability") as HTMLSelectElement).value;
            const experience = (form.elements.namedItem("experience") as HTMLSelectElement).value;

            payload = {
              ...payload,
              phone,
              availability,
              experience,
            };
          }

          try {
            const res = await fetch("/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed to register");

            setShowThankYou(true);
            form.reset();
          } catch (err: any) {
            alert(err.message);
          }
        }}
      >
        <input name="firstName" placeholder="First Name" required className={inputClass} />
        <input name="lastName" placeholder="Last Name" required className={inputClass} />
        <input name="email" type="email" placeholder="Email Address" required className={inputClass} />

        {role === "Member" ? (
          <>
            <input name="phone" placeholder="Phone Number" required className={inputClass} />

            <p className="text-gray-500 text-sm mb-2 mt-2">
              Children Information: provide the age of each child
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
              <input name="maleChildren" type="number" min={0} placeholder="No of Male" className={inputClass} />
              <input name="femaleChildren" type="number" min={0} placeholder="No of Female" className={inputClass} />
              <input name="otherChildren" type="number" min={0} placeholder="No of Other" className={inputClass} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input name="maleChildrenAge" placeholder="Ages of Male" className={inputClass} />
              <input name="femaleChildrenAge" placeholder="Ages of Female" className={inputClass} />
              <input name="otherChildrenAge" placeholder="Ages of Other" className={inputClass} />
            </div>
          </>
        ) : (
          <>
            <input name="phone" placeholder="Phone Number" required className={inputClass} />

            <select name="availability" required className={inputClass}>
              <option value="">Availability</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Flexible">Flexible</option>
              <option value="Specific Hours">Specific Hours</option>
            </select>

            <select name="experience" required className={inputClass}>
              <option value="">Level of Experience</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </>
        )}

        <button className="mt-auto w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition">
          Register as {role}
        </button>
      </form>
    </div>
  );
}
