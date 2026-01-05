
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

export const FooterSocialLinks = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex space-x-4">
      <a href="https://www.facebook.com/BMACapital/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-500 hover:text-red-700'} transition-colors`}>
        <Facebook className="h-5 w-5" />
      </a>
      <a href="https://twitter.com/bmacapital" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-500 hover:text-red-700'} transition-colors`}>
        <Twitter className="h-5 w-5" />
      </a>
      <a href="https://www.instagram.com/bmacapital/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-500 hover:text-red-700'} transition-colors`}>
        <Instagram className="h-5 w-5" />
      </a>
      <a href="https://www.linkedin.com/company/bma-capital-management-limited/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-500 hover:text-red-700'} transition-colors`}>
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
};
