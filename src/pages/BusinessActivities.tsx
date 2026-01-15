
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/footer/Footer';
import { HeroHeader } from '@/components/hero/HeroHeader';
import { ServiceShowcase } from '@/components/business/ServiceShowcase';
import { ServiceCategories } from '@/components/business/ServiceCategories';
import { ServiceExplorer } from '@/components/business/ServiceExplorer';
import { ClientStories } from '@/components/business/ClientStories';
import { ServiceAssessment } from '@/components/business/ServiceAssessment';
import { FAQSection } from '@/components/business/FAQSection';
import { CTASection } from '@/components/CTASection';
import { useHashNavigation } from '@/hooks/useHashNavigation';

export default function BusinessActivities() {
  // Handle hash-based scrolling
  useHashNavigation();
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      <main>
        <div className="pt-20 pb-16 text-center">
          <HeroHeader 
            title="Our Business Activities" 
            subtitle=""
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container max-w-7xl mx-auto px-4 space-y-24 pb-24"
        >
          <ServiceShowcase />
          {/* <ServiceCategories /> */}
          {/* <ServiceExplorer /> */}
          {/* <ClientStories /> */}
          <ServiceAssessment />
          <FAQSection />
        </motion.div>
        
        {/* <CTASection /> */}
      </main>
      
      <Footer />
    </div>
  );
}
