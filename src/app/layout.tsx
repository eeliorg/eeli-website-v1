/// <reference types="react" />
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import PublicLayout from "@/components/layout/PublicLayout";
import ClientLoaderWrapper from "@/components/common/ClientLoaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EELI - Empowering Women, Uplifting Children",
  description:
    "Empowerment and Elevation Legacy International (EELI) - Dedicated to fostering joy, hope, and lasting change through mentorship, community support, and love.",
  keywords:
    "women empowerment, children support, mentorship, leadership development, faith-based organization, community support, healing, wholeness, purpose, mindset, resilience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logos/logo1.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLoaderWrapper>
          <PublicLayout>{children}</PublicLayout>
          <Analytics />
        </ClientLoaderWrapper>
      </body>
    </html>
  );
}
