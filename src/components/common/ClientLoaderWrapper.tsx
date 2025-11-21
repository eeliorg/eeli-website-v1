"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";

export default function ClientLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent && <LoadingScreen />}

      <div
        className={`transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
