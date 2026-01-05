
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface JourneyEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface JourneySectionProps {
  title: string;
  events: JourneyEvent[];
}

interface JourneyTimelineProps {
  sections: JourneySectionProps[];
}

export const JourneyTimeline = ({ sections }: JourneyTimelineProps) => {
  const [activeTab, setActiveTab] = useState(sections[0].title);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs 
        defaultValue={sections[0].title} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-8">
          {sections.map((section) => (
            <TabsTrigger 
              key={section.title} 
              value={section.title}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {sections.map((section) => (
          <TabsContent 
            key={section.title} 
            value={section.title}
            className="relative"
          >
            <div className="relative flex flex-col gap-12 mt-8 pb-8">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
              
              {section.events.map((event, index) => (
                <motion.div
                  key={event.year + event.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 relative"
                  onMouseEnter={() => setHoveredEvent(event.year + event.title)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  {/* Circle marker */}
                  <motion.div 
                    className="h-3 w-3 rounded-full bg-primary mt-1.5 z-10 flex-shrink-0 relative"
                    animate={{
                      scale: hoveredEvent === event.year + event.title ? 1.4 : 1,
                      backgroundColor: hoveredEvent === event.year + event.title 
                        ? "var(--accent)" 
                        : "var(--primary)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatePresence>
                      {hoveredEvent === event.year + event.title && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary mb-1">{event.year}</div>
                    <h3 className="text-lg font-medium mb-2">{event.title}</h3>
                    <motion.p 
                      className="text-muted-foreground text-sm"
                      initial={{ opacity: 0.8 }}
                      animate={{ 
                        opacity: hoveredEvent === event.year + event.title ? 1 : 0.8 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {event.description}
                    </motion.p>
                    
                    {event.image && (
                      <motion.div 
                        className="mt-3 overflow-hidden rounded-md"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: hoveredEvent === event.year + event.title ? "auto" : 0,
                          opacity: hoveredEvent === event.year + event.title ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-auto object-cover rounded-md"
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
