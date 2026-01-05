
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/components/hero/services';
import { ServiceType } from '@/components/hero/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FeatureCard } from '@/components/FeatureCard';
import { useTheme } from '@/components/theme/ThemeProvider';
import { LucideIcon } from 'lucide-react';

export function ServiceExplorer() {
  const { theme } = useTheme();
  const [expandedService, setExpandedService] = useState<string | null>(null);
  
  const handleExpand = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };
  
  const serviceFeatures = (service: ServiceType) => {
    return service.features?.slice(0, 3).map((feature, i) => ({
      id: `${service.id}-feature-${i}`,
      title: feature.split(':')[0] || feature,
      description: feature.split(':')[1] || 'Comprehensive solution for your financial needs',
      icon: service.icon as LucideIcon
    })) || [];
  };

  return (
    <section className="py-8" id="service-explorer">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Explore Our Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-3xl"
        >
          Dive deeper into each of our service offerings to understand how we can help you achieve your financial goals
        </motion.p>
      </div>
      
      <div className="rounded-lg border overflow-hidden">
        <Accordion 
          type="single" 
          collapsible 
          value={expandedService || undefined}
          onValueChange={(value) => setExpandedService(value || null)}
          className={theme === 'dark' ? 'bg-card/50' : 'bg-card'}
        >
          {services.map((service) => (
            <AccordionItem key={service.id} value={service.id}>
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <div className="rounded-full p-2 bg-primary/10">
                    {React.createElement(service.icon, { className: "h-5 w-5 text-primary" })}
                  </div>
                  <div>
                    <h3 className="font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground hidden md:block">
                      {service.description.substring(0, 70)}...
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6">{service.fullDescription || service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {serviceFeatures(service).map((feature, index) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <FeatureCard
                          icon={service.icon as LucideIcon}
                          title={feature.title}
                          description={feature.description}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-muted/30 bg-white p-4 rounded-lg">
                    {/* <h4 className="font-medium mb-3">All Features</h4> */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features?.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
