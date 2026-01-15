import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { useTheme } from '@/components/theme/ThemeProvider';
import { FooterContact } from './FooterContact';
import { FooterLinks } from './FooterLinks';

export const Footer = () => {
  const { theme } = useTheme();

  const linkSections = {
    feedback: {
      title: "Your Feedback",
      links: [
        { label: "PSX Complaint", href: "https://www.psx.com.pk/psx/resources-and-tools/investors/investors-complaints" },
        { label: "Investor Complaint (SECP)", href: "https://www.secp.gov.pk/media-center/guide-books/general-guide-books/" },
        { label: "Investor Education (SECP)", href: "https://www.secp.gov.pk/media-center/guide-books/general-guide-books/" },
      ]
    },
    otherLinks: {
      title: "Other Links",
      links: [
        { label: "PSX", href: "https://www.psx.com.pk/" },
        { label: "SECP", href: "https://www.secp.gov.pk/" },
        { label: "BOI", href: "https://www.secp.gov.pk/" },
        { label: "SBP", href: "https://www.sbp.org.pk/index.html" },
        { label: "MOF", href: "https://www.finance.gov.pk/" },
        { label: "PMEX", href: "https://pmex.com.pk/" },
      ]
    },
    services: {
      title: "Business Activities",
      links: [
        { label: "Equities", href: "/business-activities?service=equities#services" },
        { label: "Investment Banking", href: "/business-activities?service=investment-banking#services" },
        { label: "Investment Advisory", href: "/business-activities?service=investment-advisory#services" },
        { label: "Commodities", href: "/business-activities?service=commodities#services" },
        { label: "Money Market/Forex", href: "/business-activities?service=forex#services" },
        { label: "Research", href: "/business-activities?service=research#services" },
      ]
    },
    markets: {
      title: "Markets",
      links: [
        { label: "Pakistan Stock Exchange", href: "#" },
        { label: "Money Markets", href: "#" },
        { label: "Mutual Funds", href: "#" },
        { label: "International Markets", href: "#" },
        { label: "Fixed Income", href: "#" },
        { label: "Commodities", href: "#" },
      ]
    },
    resources: {
      title: "About Us",
      links: [
        { label: "BMA at a Glance", href: "/about#glance" },
        { label: "Vision & Missions", href: "/about#mission" },
        { label: "Board Audit Committee", href: "/governance#committees" },
        { label: "Board of Directors", href: "/governance#board" },
      ]
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Branch Network", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
        { label: "FAQs", href: "#" },
      ]
    }
  };

  return (
    <footer className={`py-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <FooterContact />
          <FooterLinks {...linkSections.feedback} />
          <FooterLinks {...linkSections.otherLinks} />
          <FooterLinks {...linkSections.services} />
          <FooterLinks {...linkSections.resources} />
        </div>
        
        <Separator className={`my-8 ${theme === 'dark' ? 'opacity-20' : 'opacity-40'}`} />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-muted-foreground' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} BMA Capital Management Ltd. All rights reserved.
          </p>
          
          {/* Logo in the center */}
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="https://softech-systems.com/">
              <img 
                src="/lovable-uploads/softtech.png" 
                alt="Logo 1" 
                className="h-8 w-auto mx-4 cursor-pointer"
              />
            </a>
            <a href="https://www.shareholderagahi.com/">
              <img 
                src="/lovable-uploads/aghi.gif" 
                alt="Logo 2" 
                className="h-8 w-auto mx-4 cursor-pointer"
              />
            </a>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/disclaimer" className={`text-sm ${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-600 hover:text-red-700'} transition-colors`}>Disclaimer</Link>
            
            {/* <a href="#" className={`text-sm ${theme === 'dark' ? 'text-muted-foreground hover:text-red-600' : 'text-gray-600 hover:text-red-700'} transition-colors`}>Sitemap</a> */}
          </div>
        </div>
        
        <div className={`mt-6 p-4 rounded-lg text-xs text-center ${theme === 'dark' ? 'bg-gray-800/50 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
          DISCLAIMER: Every investment in securities/commodities involves risk including the possible loss of principal amount invested. BMA Capital Management Ltd. does not guarantee any returns or profits on investments made. Past performance is not indicative of future returns.
        </div>
        <div className="mt-6 flex justify-center"> <img src="/lovable-uploads/SECP.jpg" alt="Securities & Exchange Commission of Pakistan (SECP) Investor Complaint Banner" className="w-100 h-100" /> </div>
      </div>
    </footer>
  );
};
