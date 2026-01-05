
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CircuitPattern } from "@/components/vectors/CircuitPattern";

export const JourneyMap = () => {
  const { theme } = useTheme();
  const [activeYear, setActiveYear] = useState<string>("2020");
  
  const milestones = [
    {
      year: "1992",
      title: "The Beginning",
      description: "BMA Capital was founded with a vision to revolutionize Pakistan's financial landscape.",
      achievement: "Established first office in Karachi"
    },
    {
      year: "2000",
      title: "Expansion Era",
      description: "Expanded services to cover investment banking, brokerage, and asset management.",
      achievement: "Opened offices in Lahore and Islamabad"
    },
    {
      year: "2010",
      title: "Digital Transformation",
      description: "Pioneered online trading platforms for retail investors in Pakistan.",
      achievement: "Launched BMA Trade - Pakistan's first comprehensive digital trading platform"
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Recognized internationally for research excellence and investment advisory.",
      achievement: "Named 'Best Investment Bank in Pakistan' by Euromoney for three consecutive years"
    },
    {
      year: "Today",
      title: "The Future",
      description: "Continuing to innovate and lead in Pakistan's evolving financial marketplace.",
      achievement: "Managing over $250M in assets with a growing client base across the region"
    }
  ];

  return (
    <section id="journey" className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-[#1A1F2C] to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="absolute inset-0 opacity-10">
        <CircuitPattern className={theme === 'dark' ? 'text-primary' : 'text-primary'} />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-2">Our Journey</Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>
            Three Decades of Growth & Innovation
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Follow our journey from a small financial services provider to becoming Pakistan's 
            premier investment banking institution.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-0 right-0 h-1 top-8 bg-gray-200 dark:bg-gray-800 z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 mb-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-center mb-8 md:mb-0"
              >
                <button
                  onClick={() => setActiveYear(milestone.year)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto transition-all duration-300 ${
                    activeYear === milestone.year
                      ? theme === 'dark'
                        ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/20'
                        : 'bg-primary text-white scale-110 shadow-lg shadow-primary/20'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">{milestone.year}</span>
                </button>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {milestone.title}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Active milestone content */}
          {milestones.map((milestone) => (
            <motion.div
              key={`content-${milestone.year}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeYear === milestone.year ? 1 : 0,
                height: activeYear === milestone.year ? 'auto' : 0
              }}
              className="overflow-hidden"
            >
              {activeYear === milestone.year && (
                <Card className={`p-8 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                    : 'bg-white border border-gray-100 shadow-lg'
                }`}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Badge variant="outline" className="mb-2">{milestone.year}</Badge>
                      <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>
                        {milestone.title}
                      </h3>
                      <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {milestone.description}
                      </p>
                      <div className={`p-4 rounded-lg ${
                        theme === 'dark' ? 'bg-primary/10 border border-primary/20' : 'bg-primary/5 border border-primary/10'
                      }`}>
                        <p className="text-primary font-medium">Key Achievement:</p>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                          {milestone.achievement}
                        </p>
                      </div>
                    </div>
                    <div className={`rounded-lg overflow-hidden ${
                      theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                    } flex items-center justify-center`}>
                      <YearIllustration year={milestone.year} />
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface YearIllustrationProps {
  year: string;
}

const YearIllustration: React.FC<YearIllustrationProps> = ({ year }) => {
  const { theme } = useTheme();
  
  // This is a simple placeholder. In a real implementation, you might have specific illustrations for each year
  return (
    <div className="p-8 text-center">
      <div className={`text-8xl font-bold mb-4 ${
        theme === 'dark'
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary'
          : 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-primary'
      }`}>
        {year}
      </div>
      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
        {year === "1992" && "The start of our journey"}
        {year === "2000" && "Expanding our horizons"}
        {year === "2010" && "Embracing digital innovation"}
        {year === "2020" && "Reaching new heights"}
        {year === "Today" && "Looking toward tomorrow"}
      </p>
    </div>
  );
};
