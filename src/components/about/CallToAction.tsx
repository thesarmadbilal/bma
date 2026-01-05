
import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SvgWaveDivider } from "@/components/SvgWaveDivider";

export const CallToAction = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <SvgWaveDivider position="top" waveType="wave2" height={24} />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="bg-card/40 backdrop-blur-lg rounded-xl border border-primary/20 p-8 md:p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Write the Next Chapter Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every relationship begins with a conversation. Whether you're looking to invest, join our team, or simply learn more about our approach, we'd love to connect.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Button size="lg" className="gap-2 w-full md:w-auto">
                <Users className="h-4 w-4" />
                <span>Start a Conversation</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Button size="lg" variant="outline" className="gap-2 w-full md:w-auto">
                <Globe className="h-4 w-4" />
                <span>Explore Our Services</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Button size="lg" variant="secondary" className="gap-2 w-full md:w-auto">
                <Clock className="h-4 w-4" />
                <span>Book a Meeting</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
