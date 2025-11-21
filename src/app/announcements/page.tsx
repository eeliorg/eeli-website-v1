// app/about-us/page.tsx
'use client';

import HeroSection from '@/components/Announcement/Herosection';
import Events from '@/components/Announcement/Events';
import Join from '@/components/Announcement/Joincommunity';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function AnnouncementPage() {
  return (
    <main className="bg-pink-50">
      {/* Hero Section */}
      <HeroSection />
      <Events />
      <Join />
      <NewsletterSignup />
    </main>
  );
}
