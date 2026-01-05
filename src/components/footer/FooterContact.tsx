
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { FooterSocialLinks } from './FooterSocialLinks';

export const FooterContact = () => {
  const { theme } = useTheme();
  
  return (
    <div className="col-span-2 lg:col-span-1">
      <a href="/" className="flex items-center mb-4">
        <span className={`text-xl font-bold ${theme === 'dark' ? 'text-red-600' : 'text-red-700'}`}>BMA</span>
        <span className="text-xl font-semibold">Capital</span>
      </a>
      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-muted-foreground' : 'text-gray-600'}`}>
        BMA Capital is one of Pakistan's leading financial services firms, offering a full suite of solutions across Equity & Treasury Markets, Corporate Finance, Research, and Investment Advisory.
A pioneer in Privatization Advisory and known for its independent research and client-focused performance,
BMA ranks among the top brokers in Pakistan, backed by a strong network of international dealer relationships.
      </p>
      
      <div className="flex flex-col space-y-2 mb-4">
        <div className="flex items-start gap-2">
          <MapPin className={`h-4 w-4 mt-0.5 ${theme === 'dark' ? 'text-red-600' : 'text-red-700'}`} />
          <p className={`text-xs ${theme === 'dark' ? 'text-muted-foreground' : 'text-gray-600'}`}>
            Level 8, Unitower, I.I. Chundrigar Road, Karachi, Pakistan
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className={`h-4 w-4 ${theme === 'dark' ? 'text-red-600' : 'text-red-700'}`} />
          <a href="tel:+922111262111" className={`text-xs ${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-600 hover:text-red-700'} transition-colors`}>
            +92 21 111 262 111
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className={`h-4 w-4 ${theme === 'dark' ? 'text-red-600' : 'text-red-700'}`} />
          <a href="mailto:info@bmacapital.com" className={`text-xs ${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-600 hover:text-red-700'} transition-colors`}>
            info@bmacapital.com
          </a>
        </div>
      </div>
      
      {/* <FooterSocialLinks /> */}
    </div>
  );
};
