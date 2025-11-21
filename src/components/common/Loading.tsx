"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-pink-50 z-[9999] transition-opacity duration-700 ${
        isLoading ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Header Text */}
      <h1 className="mb-6 text-4xl font-bold tracking-widest text-purple-900 animate-pulse">
        EELI
      </h1>

      {/* Heart Loader */}
      <div className="relative w-[50px] aspect-square text-purple-950">
        {/* Heart shape */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 60% 65%, currentColor 62%, transparent 65%) top left,
              radial-gradient(circle at 40% 65%, currentColor 62%, transparent 65%) top right,
              linear-gradient(to bottom left, currentColor 42%, transparent 43%) bottom left,
              linear-gradient(to bottom right, currentColor 42%, transparent 43%) bottom right
            `,
            backgroundSize: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Pulsing animation layer */}
        <div
          className="absolute inset-0 opacity-40 animate-[pulseExpand_1s_infinite]"
          style={{
            background: `
              radial-gradient(circle at 60% 65%, currentColor 62%, transparent 65%) top left,
              radial-gradient(circle at 40% 65%, currentColor 62%, transparent 65%) top right,
              linear-gradient(to bottom left, currentColor 42%, transparent 43%) bottom left,
              linear-gradient(to bottom right, currentColor 42%, transparent 43%) bottom right
            `,
            backgroundSize: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Keyframes */}
        <style jsx>{`
          @keyframes pulseExpand {
            to {
              transform: scale(1.8);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
