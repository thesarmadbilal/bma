
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TestimonialsCarousel = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "BMA Capital's expertise and personalized approach helped us secure the funding we needed to expand our operations. Their team was professional, knowledgeable, and committed to our success.",
      author: "Syed Hamza Ali",
      role: "CEO, TechVentures Pakistan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The research insights provided by BMA Capital have been instrumental in helping us navigate market volatility. Their analysis is thorough, timely, and consistently valuable for our investment decisions.",
      author: "Aisha Khan",
      role: "Investment Director, Global Funds Ltd",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    {
      quote: "As a first-time investor, I appreciated BMA Capital's patient guidance and educational approach. They helped me understand my options and build a portfolio aligned with my financial goals and risk tolerance.",
      author: "Rizwan Ahmed",
      role: "Private Client",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-b from-[#1A1F2C] to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-2">Testimonials</Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            We're proud of the relationships we've built and the success stories we've helped create.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-xl ${
                theme === 'dark'
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                  : 'bg-white shadow-lg border border-gray-100'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className={`absolute -inset-1 rounded-full blur opacity-30 ${
                      theme === 'dark' ? 'bg-primary' : 'bg-primary'
                    }`}></div>
                    <Avatar className="w-32 h-32 border-4 border-white/10 relative">
                      <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
                      <AvatarFallback>{testimonials[currentIndex].author.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <Quote className={`h-10 w-10 ${theme === 'dark' ? 'text-primary/40' : 'text-primary/40'} mb-4`} />
                  <blockquote className={`text-xl italic mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex flex-col">
                    <cite className={`font-bold text-lg not-italic ${theme === 'dark' ? '' : 'text-gray-900'}`}>
                      {testimonials[currentIndex].author}
                    </cite>
                    <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className={`rounded-full ${
                theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? theme === 'dark' 
                        ? 'bg-primary scale-125'
                        : 'bg-primary scale-125'
                      : theme === 'dark'
                        ? 'bg-gray-600 hover:bg-gray-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className={`rounded-full ${
                theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
