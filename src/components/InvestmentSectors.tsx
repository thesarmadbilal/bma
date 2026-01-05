
import React, { useState, useEffect } from 'react';
import { CircuitPattern } from './vectors/CircuitPattern';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'framer-motion';

export function InvestmentSectors() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleSectors, setVisibleSectors] = useState(sectors);
  const [displayCount, setDisplayCount] = useState(8);

  // Filter sectors based on search and category
  useEffect(() => {
    let filtered = sectors;
    
    if (searchTerm) {
      filtered = filtered.filter(sector => 
        sector.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(sector => sector.category === selectedCategory);
    }
    
    setVisibleSectors(filtered);
  }, [searchTerm, selectedCategory]);

  // Get unique categories
  const categories = Array.from(new Set(sectors.map(sector => sector.category)));

  return (
    <section className="py-16 gradient-dark relative overflow-hidden" id="investment-sectors">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 relative z-10">
          <div className="inline-block bg-red-600/20 text-red-500 px-4 py-1 rounded-full mb-3">
            <span className="font-medium">People</span>
          </div>
          <h2 className="text-3xl font-bold text-[#fff] mb-3">
            <span className="text-white"></span> People at BMA
          </h2>
          <p className="text-[#fff] max-w-2xl mx-auto">
            Recognized experience of conducting transactions across nearly a dozen sectors in Pakistan employees at BMA are expert professionals pioneering financial services and market leadership in Pakistan's capital markets and privatization.
          </p>
          
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma11.jpeg"
                category="category"
              />
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma22.jpeg"
                category="category"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma33.jpeg"
                category="category"
              />
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma44.jpeg"
                category="category"
              />
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma55.jpeg"
                category="category"
              />
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma66.jpeg"
                category="category"
              />
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma77.jpeg"
                category="category"
              />
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <SectorCard 
                name="name"
                image="/lovable-uploads/bma88.jpeg"
                category="category"
              />
              
            </motion.div>

            
            
        </div>
        
        {/* {visibleSectors.length > displayCount && (
          <div className="mt-12 text-center relative z-10">
            <Button 
              className="gap-2 bg-red-600 hover:bg-red-700 text-white" 
              size="lg"
              onClick={() => setDisplayCount(prev => prev + 8)}
            >
              Load More Sectors <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )} */}
        
        {visibleSectors.length <= displayCount && visibleSectors.length < sectors.length && (
          <div className="mt-12 text-center relative z-10">
            <Button 
              className="gap-2 bg-red-600 hover:bg-red-700 text-white" 
              size="lg"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
                setDisplayCount(8);
              }}
            >
              View All Sectors <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <CircuitPattern className="absolute top-0 left-0 w-full h-full" />
      </div>
    </section>
  );
}

interface SectorCardProps {
  name: string;
  image: string;
  category: string;
}

const SectorCard: React.FC<SectorCardProps> = ({ name, image, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative rounded-lg overflow-hidden h-48 sm:h-64 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-300" /> */}
      
      {/* <div className="absolute top-3 right-3">
        <span className="px-2 py-1 bg-red-600/80 text-white text-xs rounded-full">
          {category}
        </span>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300"
           style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0)' }}>
        <h3 className="text-white font-medium text-lg">{name}</h3>
        
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-red-400 text-sm mt-1"
          >
            <span>Learn more</span>
            <ArrowRight className="h-3 w-3" />
          </motion.div>
        )}
      </div> */}
    </div>
  );
};

// Expanded sectors with categories
const sectors = [
  {
    name: "Aviation",
    image: "https://images.unsplash.com/photo-1608650389963-faadb772ead7?q=80&w=1000&auto=format&fit=crop",
    category: "Transportation"
  },
  {
    name: "Banking",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000&auto=format&fit=crop",
    category: "Financial Services"
  },
  {
    name: "Telecommunication",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
    category: "Technology"
  },
  {
    name: "Power / Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
    category: "Utilities"
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1000&auto=format&fit=crop",
    category: "Healthcare"
  },
  {
    name: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1589758443946-66d61f3e0bf8?q=80&w=1000&auto=format&fit=crop",
    category: "Energy"
  },
  {
    name: "Steel",
    image: "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?q=80&w=1000&auto=format&fit=crop",
    category: "Manufacturing"
  },
  {
    name: "Consumer Goods",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1000&auto=format&fit=crop",
    category: "Retail"
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    category: "Real Estate"
  },
  {
    name: "Pharmaceuticals",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
    category: "Healthcare"
  },
  {
    name: "Textiles",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000&auto=format&fit=crop",
    category: "Manufacturing"
  },
  {
    name: "Logistics",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop",
    category: "Transportation"
  },
  {
    name: "Agriculture",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1000&auto=format&fit=crop",
    category: "Agriculture"
  },
  {
    name: "Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
    category: "Infrastructure"
  },
  {
    name: "Insurance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
    category: "Financial Services"
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    category: "Services"
  }
];
