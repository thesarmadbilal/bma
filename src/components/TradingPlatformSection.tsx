
import React from 'react';
import { Button } from './ui/button';
import {
  Smartphone,
  Laptop,
  Download,
  Share2,
  TrendingUp,
  ChevronRight,
  Bell,
  LineChart,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const TradingPlatformSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/20 text-red-500 px-4 py-1 rounded-full mb-3">
            <span className="font-medium">Trading Platform</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Advanced <span className="text-red-600">Trading Tools</span> in Your Pocket
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience our innovative Mobile Trading App, designed for both beginners and professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center mt-1">
                  <LineChart className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Real-time Market Data</h3>
                  <p className="text-gray-400">
                    Get instant access to real-time price updates, live charts, and comprehensive market data for informed decision making.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center mt-1">
                  <Share2 className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Multi-device Syncing</h3>
                  <p className="text-gray-400">
                    Seamlessly switch between desktop and mobile with synchronized watchlists, portfolios, and preferences.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center mt-1">
                  <Bell className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Notifications</h3>
                  <p className="text-gray-400">
                    Set up custom price alerts and get instant notifications when market conditions meet your criteria.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center mt-1">
                  <ShieldCheck className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Advanced Security</h3>
                  <p className="text-gray-400">
                    Industry-leading security measures including biometric authentication and end-to-end encryption.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full gap-2">
                <Download className="h-4 w-4" /> Download App
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-full">
                Learn More <ChevronRight className="h-4 w-4" />
              </Button>
            </div> */}
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {/* Mobile App Screens with Animation */}
              <div className="relative h-[500px] w-full">
                {/* Background Phone */}
                <motion.div 
                  className="absolute left-[15%] top-4 z-10"
                  initial={{ y: 20, rotate: -5 }}
                  animate={{ y: [20, 0, 20], rotate: [-5, -8, -5] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  <div className="relative shadow-xl rounded-3xl border-8 border-gray-800 w-44">
                    <img 
                      src="/lovable-uploads/app22.jpeg" 
                      alt="Mobile Trading App - Login" 
                      className="rounded-xl w-full"
                    />
                    {/* Screen Glare Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl opacity-50"></div>
                  </div>
                </motion.div>
                
                {/* Center Phone */}
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 z-30"
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  <div className="relative shadow-2xl rounded-3xl border-8 border-gray-800 w-48">
                    <img 
                      src="/lovable-uploads/Login.jpg" 
                      alt=" Mobile Traduing App - Home" 
                      className="rounded-xl w-full"
                    />
                    {/* Animated Notification */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                      transition={{ 
                        repeat: Infinity,
                        repeatDelay: 5,
                        duration: 0.5 
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg"
                    >
                      2
                    </motion.div>
                    {/* Screen Glare Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl opacity-50"></div>
                  </div>
                </motion.div>
                
                {/* Right Phone */}
                <motion.div 
                  className="absolute right-[15%] top-4 z-20"
                  initial={{ y: 10, rotate: 5 }}
                  animate={{ y: [10, 30, 10], rotate: [5, 8, 5] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  <div className="relative shadow-xl">
                    {/* <img 
                      src="/lovable-uploads/9220a23c-d62b-4eb9-b40a-b6138c1b37a6.png" 
                      alt="StockTRAK Mobile App - Portfolio" 
                      className="rounded-xl w-full"
                    /> */}
                    {/* Screen Glare Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-xl opacity-50"></div>
                  </div>
                </motion.div>
                
                {/* Animated connection lines between phones */}
                <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 500">
                  <motion.path
                    d="M120,200 C160,180 240,180 280,200"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <motion.path
                    d="M120,220 C160,240 240,240 280,220"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                  />
                </svg>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity }}
              className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to={'https://www.facebook.com/share/v/17k9TxqL4D/'}>
          <Button 
            variant="outline" 
            className="border-red/20 hover:bg-red/10 rounded-full"
          >
            View Client Success Stories <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>

        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-800/50 border border-gray-700 rounded-xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-1"
              >
                50K+
              </motion.div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-1"
              >
                4.8/5
              </motion.div>
              <div className="text-gray-400">App Store Rating</div>
            </div>
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-1"
              >
                99.9%
              </motion.div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-1"
              >
                24/7
              </motion.div>
              <div className="text-gray-400">Customer Support</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
