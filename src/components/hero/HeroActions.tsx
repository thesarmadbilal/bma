
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ArrowRight } from '@/components/icons/MarketIcons';
import { useToast } from '@/hooks/use-toast';

export const HeroActions = () => {
  const { theme } = useTheme();
  const { toast } = useToast();

  const handleStartInvesting = () => {
    toast({
      title: "Let's Get Started!",
      description: "We're excited to help you start your investment journey.",
      duration: 3000,
    });
  };

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }} 
      className="flex flex-wrap gap-4"
    >
      <Button 
        size="lg" 
        className="rounded-full px-8 py-6 text-base font-medium gap-2 group bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
        onClick={() => window.open('https://aof.bmatrade.com/', '_blank')}
      >
        Start Your Investment Journey
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <div>

      <Button 
        size="lg" 
        variant="outline" 
        className={`rounded-full px-6 py-6 mr-4 text-base font-medium ${
          theme === 'dark' 
            ? 'border-white/20 text-white hover:bg-white/10' 
            : 'border-gray-300 text-gray-800 hover:bg-gray-100'
        }`}
        asChild
      >
        <a href="https://bmatrade.com/roshan-digital-account/">
          RDA
        </a>
      </Button>

      <Button 
        size="lg" 
        variant="secondary"
        className="rounded-full px-6 py-6 mr-4 text-base font-medium gap-2"
        asChild
      >
        <a href="https://cgp.cdcaccess.com.pk/cdc/cgp/r/centralized-gateway-portal/login?intermediary=NFQT49OG5RQKY">
          CGP
        </a>
      </Button>

      <Button 
        size="lg" 
        variant="outline"
        className={`rounded-full px-6 py-6 mr-4 text-base font-medium bg-gradient-to-r from-primary/10 to-purple-600/10 ${
          theme === 'dark' 
            ? 'border-primary/30 text-white hover:bg-primary/20' 
            : 'border-primary/30 text-gray-800 hover:bg-primary/20'
        }`}
        asChild
      >
        <a href="https://aof.bmatrade.com/">
          BMA
        </a>
      </Button>
      </div>
    </motion.div>
  );
};
