
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
}

export function GlassCard({ children, className, variant = 'default', ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "backdrop-blur-md rounded-xl border shadow-lg overflow-hidden",
        variant === 'default' ? "border-white/10" : "border-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
