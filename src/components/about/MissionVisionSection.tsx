
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Compass, Target, Award } from "lucide-react";

export const MissionVisionSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-[#1A1F2C]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="container mx-auto px-4 md:px-8" id="mission">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>Our Purpose & Direction</h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            At BMA Capital, we're guided by a clear mission and a bold vision that drives everything we do.
            Our values form the foundation of our approach to business and client relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Compass />}
            title="Our Mission"
            description="To provide innovative financial solutions that empower our clients to achieve their investment goals with confidence and security."
            delay={0}
            gradient="from-blue-500/20 to-primary/20"
          />
          
          <ValueCard 
            icon={<Target />}
            title="Our Vision"
            description="To be Pakistan's most trusted investment partner, known for excellence, integrity, and consistently delivering superior returns for our clients."
            delay={0.1}
            gradient="from-purple-500/20 to-primary/20"
          />
          
          <ValueCard 
            icon={<Award />}
            title="Our Values"
            description="Integrity, excellence, innovation, client-centricity, and a commitment to the highest ethical standards in everything we do."
            delay={0.2}
            gradient="from-primary/20 to-purple-500/20"
          />
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  gradient: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay = 0, gradient }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.1 }}
      className={`relative overflow-hidden rounded-xl p-8 h-full ${
        theme === 'dark'
          ? 'bg-white/5 backdrop-blur-sm border border-white/10'
          : 'bg-white shadow-lg border border-gray-100'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 z-0`}></div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
          theme === 'dark' ? 'bg-white/10' : 'bg-primary/10'
        }`}>
          <div className="text-primary">{icon}</div>
        </div>
        
        <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>{title}</h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
      </div>
    </motion.div>
  );
};
