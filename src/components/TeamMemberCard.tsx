
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  passion?: string;
  funFact?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  bio,
  imageSrc,
  passion,
  funFact
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get initials for avatar fallback
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="h-full"
    >
      <Card 
        className={`overflow-hidden h-full transition-all duration-300 backdrop-blur-sm 
          bg-card/50 border border-border/50 hover:shadow-lg ${isExpanded ? 'shadow-xl' : ''}`}
      >
        <CardContent className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={imageSrc} 
              alt={name} 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-primary mb-3">{title}</p>
            <p className="text-muted-foreground text-sm mb-4">{bio}</p>
            
            <motion.div 
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {(passion || funFact) && (
                <div className="pt-2 pb-4 space-y-3">
                  {passion && (
                    <div>
                      <Badge variant="outline" className="mb-1">Passion</Badge>
                      <p className="text-sm text-muted-foreground">{passion}</p>
                    </div>
                  )}
                  {funFact && (
                    <div>
                      <Badge variant="outline" className="mb-1">Fun Fact</Badge>
                      <p className="text-sm text-muted-foreground">{funFact}</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
            
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-2">
                <button 
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  aria-label={`Connect with ${name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </button>
                <button 
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  aria-label={`Email ${name}`}
                >
                  <Mail className="h-4 w-4 text-primary" />
                </button>
              </div>
              
              {(passion || funFact) && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 text-sm text-primary flex items-center gap-1 hover:underline"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
