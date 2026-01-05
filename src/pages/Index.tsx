
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
      {/* <ServiceOfferings /> */}
      {/* <MarketPerformanceSection /> */}
      <PakistanStockExchange />
      <InvestmentSectors />
      <LearningResourcesSection />
      <InternationalInvesting />

      <section>
        <div className="pt-20"></div>
        <div className="container mx-auto px-2 text-center md:px-6 lg:px-8">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">Live Stocks and Charts </CardTitle>
                <CardDescription >
                  <span className="text-2xl text-yellow-300 px-20 animate-pulse">Coming Soon</span>
                  </CardDescription>
                <div className="mt-4">
          
        </div>

              
              </CardHeader>
            </Card>
           </div>
          </section>
      {/* <BMATestimonials /> */}
      {/* <CTASection /> */}
      <BMAClientsSection />
      <div className="pt-8"></div>
      <MarketTicker />
      <Footer />
    </div>
  );
};

export default Index;
