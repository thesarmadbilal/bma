
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/components/hero/services';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ServiceCarousel } from '@/components/carousel/ServiceCarousel';
import { ServiceIllustration } from '@/components/vectors/ServiceIllustration';
import { LucideIcon } from 'lucide-react';

// Define the Service type properly
interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tooltipType: string;
}

export function ServiceCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("visual");
  
  // Group services by category
  const investmentServices = services.filter(s => 
    ['equities', 'commodities', 'forex'].includes(s.id)
  );
  
  const advisoryServices = services.filter(s => 
    ['investment-banking', 'investment-advisory', 'research'].includes(s.id)
  );

  // Convert services to the format expected by ServiceCarousel with proper typing
  const mapToCarouselFormat = (serviceList: typeof services): Service[] => 
    serviceList.map(s => ({
      id: s.id,
      title: s.title,
      description: s.description,
      icon: s.icon as unknown as LucideIcon,
      tooltipType: s.id
    }));

  return (
    <section className="py-8" id="service-categories">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Services by Category
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-3xl"
        >
          Explore our services organized by category to find exactly what you need
        </motion.p>
      </div>
      
      <Tabs defaultValue="visual" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-2 mx-auto">
          <TabsTrigger value="visual">Visual Explorer</TabsTrigger>
          <TabsTrigger value="carousel">Service Carousel</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visual" className="pt-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <ServiceIllustration className="w-full max-w-2xl mx-auto" />
            </div>
            <div className="lg:w-1/3 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-lg bg-card border"
              >
                <h3 className="text-xl font-bold mb-4">How Our Services Connect</h3>
                <p className="text-muted-foreground mb-4">
                  At BMA Capital, we offer a comprehensive ecosystem of financial services that work together
                  to provide complete solutions for all your investment and financial needs.
                </p>
                <p className="text-muted-foreground">
                  From market research to trade execution, investment banking to asset management, our
                  integrated approach ensures you receive cohesive financial guidance.
                </p>
              </motion.div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="carousel" className="pt-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Investment Services</h3>
              <ServiceCarousel 
                services={mapToCarouselFormat(investmentServices)} 
                activeIndex={activeIndex % investmentServices.length} 
                onIndexChange={index => setActiveIndex(index)}
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Advisory Services</h3>
              <ServiceCarousel 
                services={mapToCarouselFormat(advisoryServices)} 
                activeIndex={activeIndex % advisoryServices.length} 
                onIndexChange={index => setActiveIndex(index)}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
