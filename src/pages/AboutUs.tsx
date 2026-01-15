
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SvgWaveDivider } from "@/components/SvgWaveDivider";
import { AboutHeroCreative } from "@/components/about/AboutHeroCreative";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { TeamShowcase } from "@/components/about/TeamShowcase";
import { JourneyMap } from "@/components/about/JourneyMap";
import { AchievementsTimeline } from "@/components/about/AchievementsTimeline";
import { OfficeLocations } from "@/components/about/OfficeLocations";
import { TestimonialsCarousel } from "@/components/about/TestimonialsCarousel";
import { CallToAction } from "@/components/about/CallToAction";
import { useHashNavigation } from "@/hooks/useHashNavigation";

export default function AboutUs() {
  // Handle hash-based scrolling
  useHashNavigation();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <section className="relative">
        <SvgWaveDivider position="top" waveType="wave2" height={24} />
        <MissionVisionSection />
      </section>
      <section className="py-12 md:py-16" id="glance">
      <div className="container bg-background mx-auto px-4">
        <div className="shadow-xl rounded-lg overflow-hidden">
          <img
            src="/lovable-uploads/BMA-Glance.jpg"
            alt="Descriptive text for the image"
            className="w-full h-auto object-contain" 
          />
    </div>
  </div>
</section>
      <TeamShowcase />
      <AchievementsTimeline />
      <OfficeLocations />
      <section className="relative"> 
      </section>  
      <Footer />
    </div>
  );
}
