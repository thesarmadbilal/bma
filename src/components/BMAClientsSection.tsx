
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
import { Link } from 'react-router-dom';

export function BMAClientsSection() {
  const { theme } = useTheme();
  
  const clients = [
    { 
      id: 1, 
      name: 'UBL', 
      logo: '/lovable-uploads/ubl.png',
      width: '120px' 
    },
    { 
      id: 2, 
      name: 'AGP', 
      logo: '/lovable-uploads/AGP.png',
      width: '100px' 
    },
    { 
      id: 3, 
      name: 'PPL', 
      logo: '/lovable-uploads/ppl.png',
      width: '110px' 
    },
    { 
      id: 4, 
      name: 'PIA', 
      logo: '/lovable-uploads/pia-logo.png',
      width: '160px' 
    },
    { 
      id: 5, 
      name: 'Etisalat', 
      logo: '/lovable-uploads/etisalat-logo.png',
      width: '120px' 
    },
    { 
      id: 6, 
      name: 'HBL', 
      logo: '/lovable-uploads/HBL.png',
      width: '120px' 
    },
    { 
      id: 7, 
      name: 'PSO', 
      logo: '/lovable-uploads/pso.png',
      width: '120px' 
    },
    { 
      id: 8, 
      name: 'FFC', 
      logo: '/lovable-uploads/FFC-Logo.png',
      width: '120px' 
    },
    { 
      id: 9, 
      name: 'Meezan Bank', 
      logo: '/lovable-uploads/meezan-.png',
      width: '120px' 
    },
    
    { 
      id: 11, 
      name: 'MCPL', 
      logo: '/lovable-uploads/mpc.png',
      width: '120px' 
    },
    { 
      id: 12, 
      name: 'Lucky Cement', 
      logo: '/lovable-uploads/lucky-logo.png',
      width: '120px' 
    },

  ];

  return (
    <section className={`py-16 transition-colors duration-300 ${
      theme === 'dark' ? '' : 'bg-gray-50'
    }`}>
      <div className="container max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Pakistan's Leading Organizations</h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-muted-foreground'
          }`}>
            For over three decades, BMA Capital has provided investment solutions to Pakistan's most prominent corporations, government institutions, and financial entities.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className={`group relative hover:scale-110 transition-all duration-300 p-6 rounded-lg border ${
                theme === 'dark' 
                  ? 'backdrop-blur-md bg-white/5 border-white/10' 
                  : 'bg-white shadow-light-card border-gray-100'
              }`}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-14 md:h-16 object-contain transition-all duration-300"
                style={{ maxWidth: client.width }}
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 ${
                theme === 'dark' ? 'bg-red-600/10' : 'bg-red-50'
              }`}></div>
              <div className={`absolute -bottom-2 left-0 right-0 text-center text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-300 font-medium ${
                theme === 'dark' ? 'text-primary' : 'text-red-700'
              }`}>
                {client.name}
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
