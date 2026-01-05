
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, ChartBar, Activity, TrendingUp, Rocket, Shield, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './theme/ThemeProvider';

export function CTASection() {
  const { theme } = useTheme();
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic background based on theme */}
      <div className={`absolute inset-0 z-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-primary/30"
                style={{
                  width: `${Math.random() * 150 + 50}px`,
                  height: `${Math.random() * 150 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 20 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-0"></div>
      
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm"
            >
              <Rocket className="h-3.5 w-3.5 mr-2" strokeWidth={2.5} />
              Begin Your Financial Journey
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Unlock Your <span className="text-primary relative">
                Trading Potential
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} md:text-xl max-w-lg`}
            >
              Join thousands of investors who've already discovered the edge of trading with BMA Capital's premium platform and expert analytics.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4 pt-4"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ChartBar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Premium Research
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Institutional-grade market insights
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Risk Management
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Advanced tools for portfolio protection
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Fast Executions
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Industry-leading trading speed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Smart Analytics
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    AI-powered market predictions
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-7 text-lg shadow-lg shadow-primary/25 flex items-center gap-2 group transition-all duration-300"  onClick={() => window.open('https://aof.bmatrade.com/', '_blank')}>
                  Start Trading Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <p className={`mt-3 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} max-w-md`}>
                Sign up today to access exclusive insights, real-time data, and premium research reports.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main card */}
            <div className={`relative z-10 ${theme === 'dark' ? 'neo-glow' : 'shadow-2xl'} rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'}`}>
              <div className={`p-8 backdrop-blur-md ${theme === 'dark' ? 'bg-card/50' : 'bg-white/90'}`}>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Portfolio Summary</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Last updated: Today at 15:30 PST</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'} text-sm font-medium`}>
                    Premium
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Portfolio Value */}
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-100'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Portfolio Value</span>
                        <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Rs. 14,587,219</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-500 text-sm flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +6.24%
                        </div>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>30-day gain</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 h-16 w-full">
                      {/* Simplified chart */}
                      <svg className="w-full h-full" viewBox="0 0 100 30">
                        <path 
                          d="M0,25 L5,22 L10,24 L15,21 L20,18 L25,16 L30,13 L35,15 L40,12 L45,9 L50,7 L55,5 L60,8 L65,6 L70,4 L75,7 L80,2 L85,5 L90,3 L95,1 L100,4"
                          fill="none" 
                          strokeWidth="2" 
                          className="text-primary"
                          stroke="currentColor"
                        />
                        <path 
                          d="M0,25 L5,22 L10,24 L15,21 L20,18 L25,16 L30,13 L35,15 L40,12 L45,9 L50,7 L55,5 L60,8 L65,6 L70,4 L75,7 L80,2 L85,5 L90,3 L95,1 L100,4 V30 H0 Z"
                          className="text-primary/10"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Performance metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-100'}`}>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Annual Return</span>
                      <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>+32.7%</div>
                      <div className="text-green-500 text-sm flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Outperforming KSE-100
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-100'}`}>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Risk Score</span>
                      <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Low 23/100</div>
                      <div className="text-green-500 text-sm flex items-center">
                        <div className="h-2.5 w-full bg-gray-300 rounded-full mt-1">
                          <div className="h-2.5 w-[23%] bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2"
                  >
                    {/* <Button className="bg-primary hover:bg-primary/90 text-white w-full py-6 text-lg rounded-lg shadow-md shadow-primary/20 group">
                      Get Your Personalized Portfolio
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button> */}
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            
            {/* Floating elements - only visible in dark mode for better contrast */}
            {theme === 'dark' && (
              <>
                <div className="absolute top-8 -right-12 w-28 h-28 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-sm animate-float"></div>
                <div className="absolute -bottom-8 left-10 w-20 h-20 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
