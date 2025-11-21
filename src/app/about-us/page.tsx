// app/about-us/page.tsx
'use client';

import HeroSection from '@/components/About/Herosection';
import MissionVision from '@/components/About/MissionVisionSection';
import WhoWeAre from '@/components/About/Whoweare';
import ValueNumbers from '@/components/About/ValueNumber';
import MissionStatement from '@/components/Landingpage/Missionstate';
import OurTeam from '@/components/About/Ourteam';
import OurVolunteers from '@/components/About/OurVolunteers';
import DonateCard from '@/components/Landingpage/Donatecard';
import FAQSection from '@/components/Landingpage/FAQSection';

export default function AboutUsPage() {
  return (
    <main className="bg-pink-50">
      {/* Hero Section */}
      <HeroSection />

       <MissionVision />

      
      <WhoWeAre />

    
      <ValueNumbers />

      <MissionStatement />

      <OurTeam />

   
     <OurVolunteers />

  
      <DonateCard />

     
      <FAQSection /> 
    </main>
  );
}
