
import React from "react";
import { motion } from "framer-motion";
import { Compass, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MissionVisionCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="h-full backdrop-blur-sm bg-card/50 border border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-8">
            <div className="rounded-full bg-primary/10 h-16 w-16 flex items-center justify-center mb-6">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To be the premier investment bank in Pakistan, renowned for our dedication to excellence, 
              integrity, and innovation. We strive to deliver exceptional value to our clients by providing 
              comprehensive financial services that meet their unique needs and help them achieve their 
              financial goals.
            </p>
            <p className="text-muted-foreground">
              BMA Capital is committed to fostering long-term relationships with our clients based on trust, 
              transparency, and consistent performance. We aim to contribute to the growth and development 
              of Pakistan's capital markets while creating sustainable value for all our stakeholders.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="h-full backdrop-blur-sm bg-card/50 border border-border/50 hover:shadow-lg transition-all">
          <CardContent className="p-8">
            <div className="rounded-full bg-primary/10 h-16 w-16 flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              To be recognized globally as the leading financial services provider from Pakistan, 
              setting the standard for excellence in investment banking, securities brokerage, and 
              asset management services.
            </p>
            <p className="text-muted-foreground">
              We envision a future where BMA Capital plays a pivotal role in connecting Pakistan's 
              financial markets with global investors, facilitating economic growth, and helping 
              individuals and institutions build and preserve wealth through innovative financial 
              solutions and expert guidance.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
