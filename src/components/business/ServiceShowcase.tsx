
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/components/hero/services';
import { ServiceCard } from '@/components/business/ServiceCard';
import { ServiceDetail } from '@/components/business/ServiceDetail';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme/ThemeProvider';
import { FilterIcon, Grid3X3, List } from 'lucide-react';

export function ServiceShowcase() {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredServices = filter 
    ? services.filter(service => service.id === filter)
    : services;

  return (
    <section className="relative" id="services">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Our Comprehensive Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-3xl"
        >
          Discover our wide range of financial services designed to help you achieve your financial goals. 
          From equities trading to investment banking, we offer cutting-edge solutions tailored to your needs.
        </motion.p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={filter === null ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter(null)}
          >
            All Services
          </Button>
          {services.map(service => (
            <Button
              key={service.id}
              variant={filter === service.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(service.id)}
            >
              {service.title}
            </Button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button 
            variant="outline" 
            size="icon"
            className={viewMode === 'grid' ? 'bg-muted' : ''}
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className={viewMode === 'list' ? 'bg-muted' : ''}
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <ServiceCard 
              key={service.id}
              service={service}
              onClick={() => setSelectedService(service.id)}
              isSelected={selectedService === service.id}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredServices.map(service => (
            <ServiceDetail
              key={service.id}
              service={service}
              compact={true}
              onClose={() => {}}
            />
          ))}
        </div>
      )}
      
      {selectedService && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-8"
        >
          <ServiceDetail
            service={services.find(s => s.id === selectedService)!}
            onClose={() => setSelectedService(null)}
          />
        </motion.div>
      )}
    </section>
  );
}
