
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamTooltipProps {
  name: string;
  role: string;
  funFact: string;
  passion: string;
  image?: string;
  children: React.ReactNode;
}

export const TeamTooltip = ({
  name,
  role,
  funFact,
  passion,
  image,
  children,
}: TeamTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent 
          className="w-72 p-0 overflow-hidden border border-primary/20"
          sideOffset={5}
        >
          <div className="flex flex-col bg-card/95 backdrop-blur-sm rounded-md overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-3 flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-white/20">
                {image ? (
                  <AvatarImage src={image} alt={name} />
                ) : (
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <h4 className="font-medium">{name}</h4>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
            <div className="p-3 space-y-2">
              <div className="text-sm">
                <span className="font-medium">Passion: </span>
                {passion}
              </div>
              <div className="text-sm">
                <span className="font-medium">Fun Fact: </span>
                {funFact}
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
