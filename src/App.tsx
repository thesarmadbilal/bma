import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import InvestorsPortal from "./pages/InvestorsPortal";
import Governance from "./pages/Governance";
import BusinessActivities from "./pages/BusinessActivities";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { ChatbotIcon } from "./components/ChatbotIcon";
import AlertBanner from './components/AlertBanner';  
import Disclaimer from "./pages/Disclaimer"; 
import Glossary from "./pages/Glossary";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Guide from "./pages/Guide";
import Coming from "./pages/Coming";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          {/* Place AlertBanner at the top of your page */}
          <AlertBanner />  {/* This will make it appear on all pages */}
          
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/investors" element={<InvestorsPortal />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/business-activities" element={<BusinessActivities />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/coming" element={<Coming />} />
          </Routes>
        </BrowserRouter>
        {/* <ChatbotIcon /> */}
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
