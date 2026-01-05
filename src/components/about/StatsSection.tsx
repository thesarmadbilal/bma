
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { StatCounter } from "@/components/StatCounter";

export const StatsSection = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <Badge className="mb-2">Our Impact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey has been marked by meaningful milestones that reflect our commitment to excellence and service.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatCounter 
            value={30}
            suffix="+"
            title="Years of Service"
            duration={2000}
            delay={100}
          />
          <StatCounter 
            value={250}
            suffix="M+"
            prefix="$"
            title="Assets Managed"
            duration={2500} 
            delay={300}
          />
          <StatCounter 
            value={15}
            suffix="K+"
            title="Clients Served"
            duration={2200}
            delay={500}
          />
          <StatCounter 
            value={25}
            suffix="+"
            title="Industry Awards"
            duration={1800}
            delay={700}
          />
        </div>
      </div>
    </div>
  );
};
