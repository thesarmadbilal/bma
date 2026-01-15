import React from 'react';
import { Navbar } from '@/components/Navbar';  // Make sure this path is correct
import { Footer } from '@/components/footer/Footer';  // Make sure this path is correct
import { Separator } from "@/components/ui/separator";

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar /> {/* Include the Navbar as in other pages */}

      <main className="container max-w-7xl mx-auto px-4 py-8">
  
        <h1 className="text-3xl font-bold mb-6">Coming Soon</h1>
        <Separator className="my-8" />
        <div className="text-base text-gray-700 mb-4">
          <p>
            This page is coming sooon!
          </p>
         
        </div>

        
      </main>

      <Footer /> {/* Include the Footer as in other pages */}
    </div>
  );
};

export default Disclaimer;
