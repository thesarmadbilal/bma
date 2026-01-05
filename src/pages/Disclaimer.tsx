import React from 'react';
import { Navbar } from '@/components/Navbar';  // Make sure this path is correct
import { Footer } from '@/components/footer/Footer';  // Make sure this path is correct
import { Separator } from "@/components/ui/separator";

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar /> {/* Include the Navbar as in other pages */}

      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Disclaimer Header */}
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

        {/* Disclaimer Content */}
        <div className="text-base text-gray-700 mb-4">
          <p>
            The entire content of this Site is subject to copyright with all rights reserved and the information held is for your own personal use only. The information may not otherwise be reproduced, distributed or transmitted to any other person or incorporated in any way into another document or other material.
          </p>
          <p>
            This website may contain other proprietary notices and copyright information, the terms of which must be observed and followed. The information contained on this site is published in good faith and should be used for information purposes only. It is subject to change without notice and should not be taken as advice.
          </p>
          <p>
            No representation or warranty, express or implied, is made by BMA or by any person as to its accuracy or completeness and it should not be relied on as such. BMA shall have no liability for any loss or damage arising out of the use or reliance on the information provided including without limitation, any loss of profit or any other damage, direct or consequential.
          </p>
          <p>
            No information on this site constitutes investment, tax, legal or any other advice.
          </p>
          <p>
            We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in this disclaimer.
          </p>
          <p>
            Unauthorized downloading, re-transmission, storage in any medium, copying, redistribution, or republication for any purpose is strictly prohibited without the written permission of BMA.
          </p>
        </div>

        <Separator className="my-8" />
      </main>

      <Footer /> {/* Include the Footer as in other pages */}
    </div>
  );
};

export default Disclaimer;
