
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, TrendingUp, Users, Globe, Star } from "lucide-react";

export const AchievementsTimeline = () => {
  const { theme } = useTheme();
  
  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Investment Banking Excellence",
      description: "Voted 'Best Investment Bank in Pakistan' by Euromoney for five consecutive years (2018-2022).",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Asset Management Growth",
      description: "Achieved consistent above-market returns, growing managed assets from $50M to $250M in five years.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Client Trust",
      description: "Expanded client base to over 15,000 individuals and 500 institutional investors across Pakistan.",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Community Impact",
      description: "Invested $5M+ in financial literacy programs reaching over 50,000 students across Pakistan.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Recognition",
      description: "Research team recognized by LSEG for excellence in financial analysis and market insights.",
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Digital Innovation",
      description: "Launched Pakistan's first comprehensive mobile trading platform with over 100,000 active users.",
    }
  ];

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-[#1A1F2C]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-2">Our Impact</Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>
            Milestones & Achievements
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Our journey has been marked by significant achievements that reflect our commitment to excellence and innovation.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description, delay = 0 }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.1 }}
      className={`relative overflow-hidden rounded-xl p-6 h-full ${
        theme === 'dark'
          ? 'bg-white/5 backdrop-blur-sm border border-white/10'
          : 'bg-white shadow-md border border-gray-100'
      }`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
          theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'
        }`}>
          {icon}
        </div>
        
        <div>
          <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? '' : 'text-gray-900'}`}>{title}</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
        </div>
      </div>
      
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full ${
        theme === 'dark' ? 'bg-primary/5' : 'bg-primary/5'
      }`}></div>
    </motion.div>
  );
};
