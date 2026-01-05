
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
import { Phone, Mail, MessageSquare } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function AboutUs() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
    

      <section className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-[#1A1F2C]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
            <div className="container mx-auto px-4" id="glance">
                <h2 className="text-3xl font-bold text-center mb-8">Find us on Maps</h2>
                <div className="shadow-xl rounded-lg overflow-hidden">
                <img
                    src="/lovable-uploads/location-map.jpg"
                    alt="Descriptive text for the image"
                    className="w-full h-auto object-contain" 
                />
                </div>
            </div>
            </section>
          <section className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-[#1A1F2C]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className=" shadow-lg border rounded-lg p-6 text-center">
              <Phone className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="text-xl font-semibold mb-4">Call Center</h3>
              <p className="text-lg text-white text-gray-700">+92-21-111-262-872</p>
            </div>

            <div className=" shadow-lg border rounded-lg p-6 text-center">
              <Mail className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="text-xl font-semibold mb-4">Email Address</h3>
              <p className="text-lg text-white text-gray-700">bmatrade@bmacapital.com</p>
            </div>

           
            <div className=" shadow-lg border rounded-lg p-6 text-center">
              <MessageSquare className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="text-xl font-semibold mb-4">WhatsApp & Phone</h3>
              <p className="text-lg text-white  text-gray-700">+92-321-2111245 (WhatsApp)</p>
              <p className="text-lg text-white text-gray-700">+92-21-111-262-872 (Phone)</p>
            </div>
          </div>

         
          <div className="shadow-lg border rounded-lg p-6 text-center mt-8">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <p className="text-lg text-white text-gray-700">Monday to Friday</p>
            <p className="text-lg text-white text-gray-700">9:00 am to 6:00 pm</p>
            <p className="text-lg text-white text-gray-700">Friday lunch break: 1:00 pm to 2:00 pm</p>
          </div>
        </div>
      </section>
        
      
      <OfficeLocations />
      
      <section className="relative">
        {/* <SvgWaveDivider position="top" waveType="wave2" height={24} /> */}
        {/* <TestimonialsCarousel /> */}
      </section>
      
      {/* <CallToAction /> */}
      
      <Footer />
    </div>
  );
}
