'use client';

import HeroSection from '@/components/Landingpage/HeroSection';
import CommunitySection from '@/components/Landingpage/CommunitySection';
import ResourcesSection from '@/components/Landingpage/ResourcesSection';
import MissionStatement from '@/components/Landingpage/Missionstate';
import Testimonials from '@/components/Landingpage/Testimonial';
import DonateCard from '@/components/Landingpage/Donatecard';
import FAQSection from '@/components/Landingpage/FAQSection';
import NewsletterSignup from '@/components/NewsletterSignup';



export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* extracted sections as components */}
      <HeroSection />
      <CommunitySection />
      <ResourcesSection />
      <MissionStatement />
      <Testimonials />
      <DonateCard />
      <FAQSection />
      <NewsletterSignup />
    </div>
  );
}