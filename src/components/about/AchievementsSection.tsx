
import React from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

export const AchievementsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.15 }}
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
      >
        <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground">Best Investment Bank in Pakistan - Euromoney Awards (2018-2022)</p>
          </li>
          <li className="flex items-start gap-3">
            <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground">Excellence in Research - LSEG Awards (2020, 2021)</p>
          </li>
          <li className="flex items-start gap-3">
            <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground">Top Financial Advisory Firm - Finance Asia (2017-2021)</p>
          </li>
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.15 }}
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
      >
        <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground">$5M+ contributed to financial literacy programs across Pakistan</p>
          </li>
          <li className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground">1000+ students mentored through our Young Investors Program</p>
          </li>
          <li className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground">20+ community development projects funded in underserved areas</p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};
