
import { Navbar } from "@/components/Navbar";
import { MarketTicker } from "@/components/MarketTicker";
import { ServiceOfferings } from "@/components/ServiceOfferings";
import { InvestmentSectors } from "@/components/InvestmentSectors";
import { InternationalInvesting } from "@/components/InternationalInvesting";
import { NewHeroSection } from "@/components/NewHeroSection";
import { PakistanStockExchange } from "@/components/PakistanStockExchange";
import { BMATestimonials } from "@/components/BMATestimonials";
import { CTASection } from "@/components/CTASection";
import { MarketPerformanceSection } from "@/components/MarketPerformanceSection";
import { TradingPlatformSection } from "@/components/TradingPlatformSection";
import { BMAClientsSection } from "@/components/BMAClientsSection";
import { LearningResourcesSection } from "@/components/LearningResourcesSection";
import { Footer } from "@/components/footer/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MarketTicker />
      <NewHeroSection />
      <TradingPlatformSection />
      
      <InvestmentSectors />
      <LearningResourcesSection />
      <PakistanStockExchange />
      <InternationalInvesting />
      <BMAClientsSection />
      <div className="pt-8"></div>
      <MarketTicker />
      <Footer />
    </div>
  );
};

export default Index;
