
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function BMATestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: "BMA Capital delivers exceptional service with their advanced trading platform. The research insights and prompt execution have consistently helped me make informed investment decisions in Pakistan's markets.",
      author: "Ahmed Khan",
      role: "Professional Trader, Karachi",
      initials: "AK"
    },
    {
      id: 2,
      content: "As a new investor in PSX, BMA's educational resources and attentive customer support made a significant difference. Their platform is intuitive and their team is always available to help navigate market complexities.",
      author: "Fatima Rashid",
      role: "Retail Investor, Lahore",
      initials: "FR"
    },
    {
      id: 3,
      content: "I've been with BMA Capital for over 5 years, and their consistent market analysis and professional execution have been instrumental in my portfolio growth. Their Roshan Digital Account services for overseas Pakistanis are unmatched.",
      author: "Saad Mahmood",
      role: "Expatriate Investor, Dubai",
      initials: "SM"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Investors <span className="text-red-600">Nationwide</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Join thousands of investors who choose BMA Capital for its seamless experience, security, and premium research.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card/20 backdrop-blur-md rounded-xl border border-white/10 p-8 md:p-12">
            <div className="absolute top-6 left-6 text-red-600/30">
              <Quote className="h-16 w-16" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-red-600">
                  <AvatarFallback className="bg-red-600/20 text-white">
                    {testimonials[activeTestimonial].initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? "bg-red-600 w-8" : "bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button 
                onClick={prevTestimonial} 
                variant="outline" 
                size="icon" 
                className="border-white/20 bg-card/30 hover:bg-card/50"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                onClick={nextTestimonial} 
                variant="outline" 
                size="icon" 
                className="border-white/20 bg-card/30 hover:bg-card/50"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="absolute -bottom-4 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Used by Pakistan's most successful investors</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="text-white font-bold text-2xl">HBL</div>
            <div className="text-white font-bold text-2xl">UBL</div>
            <div className="text-white font-bold text-2xl">OGDC</div>
            <div className="text-white font-bold text-2xl">MCB</div>
            <div className="text-white font-bold text-2xl">NBP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
