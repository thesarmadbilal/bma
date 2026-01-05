
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart } from "lucide-react";

interface StoryCardProps {
  title: string;
  author: string;
  story: string;
  year: string;
  category: string;
  delay?: number;
}

export const StoryCard = ({
  title,
  author,
  story,
  year,
  category,
  delay = 0,
}: StoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(likes + 1);
  };

  const truncatedStory = 
    story.length > 120 && !isExpanded 
      ? `${story.substring(0, 120)}...` 
      : story;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: delay * 0.1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card 
        className="backdrop-blur-sm bg-card/60 border border-border/50 overflow-hidden h-full cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-5 space-y-3 h-full flex flex-col">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="bg-primary/5 text-xs">
              {year}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-none text-xs">
              {category}
            </Badge>
          </div>
          
          <h3 className="text-lg font-medium">{title}</h3>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={isExpanded ? "expanded" : "collapsed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-grow"
            >
              <p className="text-muted-foreground text-sm">
                {truncatedStory}
              </p>
              {story.length > 120 && !isExpanded && (
                <button className="text-primary text-xs mt-2 flex items-center gap-1">
                  <BookOpen className="h-3 w-3" /> Read more
                </button>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between items-center pt-2 mt-auto">
            <p className="text-sm font-medium">— {author}</p>
            <motion.button
              onClick={handleLike}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Heart className="h-3 w-3" /> {likes > 0 ? likes : ""}
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
