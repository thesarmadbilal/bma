
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight, Globe, CheckCircle2, ArrowRight, TrendingUp, DollarSign, BarChart2, Shield, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './theme/ThemeProvider';

export function InternationalInvesting() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-white'} relative overflow-hidden`}>
      {/* Background globe animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] ${theme === 'dark' ? 'opacity-15' : 'opacity-5'}`}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 240, ease: "linear", repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gridGradient)" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="24" fill="none" stroke="url(#gridGradient)" strokeWidth="0.1" />
            <line x1="2" y1="50" x2="98" y2="50" stroke="url(#gridGradient)" strokeWidth="0.1" />
            <line x1="50" y1="2" x2="50" y2="98" stroke="url(#gridGradient)" strokeWidth="0.1" />
            <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" />
            <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" transform="rotate(30,50,50)" />
            <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" transform="rotate(60,50,50)" />
            <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" transform="rotate(90,50,50)" />
            <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" transform="rotate(120,50,50)" />
            <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="url(#gridGradient)" strokeWidth="0.2" transform="rotate(150,50,50)" />
            
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === 'dark' ? "#1d4ed8" : "#3b82f6"} stopOpacity="0.4" />
                <stop offset="100%" stopColor={theme === 'dark' ? "#10b981" : "#10b981"} stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-red-600/10 backdrop-blur-sm border border-red-500/10 mb-6 self-start">
              <Globe className={`h-4 w-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-red-700'}`}>
                Roshan Digital Account
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className={`${theme === 'dark' ? 'bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent' : 'text-red-700'}`}>
                Invest in Pakistan
              </span> 
              <br />
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>From Anywhere in the World</span>
            </h2>
            
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
              Experience hassle-free investment in Pakistan's vibrant stock market through your Roshan Digital Account. 
              Trade directly in PSX listed securities with real-time market access and professional guidance.
            </p>
            
            <div className="space-y-4 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className={`h-8 w-8 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-red-500/20 to-red-600/20' : 'bg-red-100'} flex items-center justify-center`}>
                  <CheckCircle2 className={`h-4 w-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Remote Account Opening - 100% Digital Process</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className={`h-8 w-8 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-red-500/20 to-red-600/20' : 'bg-red-100'} flex items-center justify-center`}>
                  <CheckCircle2 className={`h-4 w-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Full Repatriation of Capital & Profits</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className={`h-8 w-8 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-red-500/20 to-red-600/20' : 'bg-red-100'} flex items-center justify-center`}>
                  <CheckCircle2 className={`h-4 w-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Tax Advantage - Only 10% CGT & 15% Dividend Tax</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className={`h-8 w-8 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-red-500/20 to-red-600/20' : 'bg-red-100'} flex items-center justify-center`}>
                  <CheckCircle2 className={`h-4 w-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Dedicated Research & Advisory Services</p>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* <Button className={`${theme === 'dark' ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gradient-to-r from-red-600 to-red-700'} hover:opacity-90 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 shadow-lg ${theme === 'dark' ? 'shadow-red-900/20' : 'shadow-red-700/20'}`}>
                Open Account Now <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className={`${theme === 'dark' ? 'border-white/20 hover:bg-white/10 text-white' : 'border-red-200 hover:bg-red-50 text-red-700'} rounded-full px-6 py-6 text-lg`}>
                Download Forms
              </Button> */}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`relative rounded-2xl overflow-hidden ${theme === 'dark' ? 'border border-white/10' : 'border border-red-100'} shadow-2xl`}>
              <motion.div 
                className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-red-600/20 to-red-700/20' : 'bg-gradient-to-br from-red-50 to-red-100'} backdrop-blur-sm z-0`}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10 p-8 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-full ${theme === 'dark' ? 'bg-gradient-to-br from-red-600 to-red-700' : 'bg-gradient-to-br from-red-600 to-red-700'} flex items-center justify-center`}>
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Roshan Digital Account</h3>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Your investment dashboard</p>
                    </div>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`p-2 ${theme === 'dark' ? 'bg-white/10' : 'bg-red-100'} backdrop-blur-sm rounded-full cursor-pointer`}
                  >
                    <BarChart2 className={`h-5 w-5 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* <div className={`${theme === 'dark' ? 'bg-white/10' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-4 border ${theme === 'dark' ? 'border-white/5' : 'border-red-100'}`}>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Account Balance</p>
                    <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>$64,280.00</p>
                    <div className="flex items-center gap-1 text-green-400 text-sm mt-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>+12.8%</span>
                      <span className={theme === 'dark' ? 'text-gray-400 ml-1' : 'text-gray-500 ml-1'}>this year</span>
                    </div>
                  </div> */}
                  
                  {/* <div className={`${theme === 'dark' ? 'bg-white/10' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-4 border ${theme === 'dark' ? 'border-white/5' : 'border-red-100'}`}>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-1`}>PKR Balance</p>
                    <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Rs 10.4M</p>
                    <div className="flex items-center gap-1 text-green-400 text-sm mt-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>+8.5%</span>
                      <span className={theme === 'dark' ? 'text-gray-400 ml-1' : 'text-gray-500 ml-1'}>this month</span>
                    </div>
                  </div> */}
                </div>
                
                <div className={`w-full rounded-xl shadow-lg mb-6 border overflow-hidden ${theme === 'dark' ? 'border-white/10' : 'border-red-100'}`}>
                  <div className={`p-3 ${theme === 'dark' ? 'bg-black/20' : 'bg-white'} flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <Shield className={`h-4 w-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`} />
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Secure Investment Portal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Connected</span>
                    </div>
                  </div>
                  <img 
                    src="/lovable-uploads/roshan.jpg" 
                    alt="Roshan Digital Account"
                    className="w-full h-36 object-cover object-top"
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-8 w-8 rounded-full border-2 ${theme === 'dark' ? 'border-gray-800' : 'border-white'} flex items-center justify-center text-xs font-bold ${
                          ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500'][i]
                        }`}
                      >
                        {['JS', 'MN', 'AR', 'ZK'][i]}
                      </div>
                    ))}
                    <div className={`h-8 w-8 rounded-full border-2 ${theme === 'dark' ? 'border-gray-800' : 'border-white'} ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-xs font-bold`}>
                      +1218
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-sm font-medium text-white flex items-center gap-1" onClick={() => window.open('https://bmatrade.com/roshan-digital-account/', '_blank')}
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </motion.button>
                </div>
              </div>
            </div>
            
            
           
            
            
          </motion.div>
        </div>
      </div>
      
      {/* Gradient background effects */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      
     
    </section>
  );
}

