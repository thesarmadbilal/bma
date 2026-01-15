
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Link } from 'react-router-dom';

interface FooterLinksProps {
  title: string;
  links: Array<{ label: string; href: string; }>;
}

export const FooterLinks = ({ title, links }: FooterLinksProps) => {
  const { theme } = useTheme();
  
  return (
    <div>
      <h3 className="font-medium mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => {
          const isExternal = link.href.startsWith('http://') || link.href.startsWith('https://');
          
          if (isExternal) {
            return (
              <li key={index}>
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 ${
                    theme === 'dark' 
                      ? 'text-muted-foreground hover:text-primary' 
                      : 'text-gray-600 hover:text-red-700'
                  } transition-colors`}
                >
                  <ChevronRight className="h-3 w-3" />
                  {link.label}
                </a>
              </li>
            );
          }
          
          return (
            <li key={index}>
              <Link 
                to={link.href} 
                className={`flex items-center gap-1 ${
                  theme === 'dark' 
                    ? 'text-muted-foreground hover:text-primary' 
                    : 'text-gray-600 hover:text-red-700'
                } transition-colors`}
              >
                <ChevronRight className="h-3 w-3" />
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
