
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChartPieIcon, BarChart3, BadgeDollarSign, Building2, Check } from "lucide-react";
import { AnimatedScrollArea } from "@/components/AnimatedScrollArea";
import { useTheme } from "@/components/theme/ThemeProvider";

type SolutionStep = "start" | "individual" | "business" | "result";

interface SolutionOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  href: string;
}

export const SolutionFinder = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [step, setStep] = useState<SolutionStep>("start");
  const [clientType, setClientType] = useState<"individual" | "business" | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectOption = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleNext = () => {
    if (step === "start") {
      setStep(clientType === "individual" ? "individual" : "business");
    } else {
      setStep("result");
    }
  };

  const handleReset = () => {
    setStep("start");
    setClientType(null);
    setSelectedOptions([]);
  };

  const individualOptions = [
    { id: "invest", label: "Invest in stocks" },
    { id: "grow", label: "Grow my wealth" },
    { id: "plan", label: "Financial planning" },
    { id: "international", label: "International investments" }
  ];

  const businessOptions = [
    { id: "funding", label: "Raise capital" },
    { id: "merger", label: "Merger or acquisition" },
    { id: "restructure", label: "Corporate restructuring" },
    { id: "advisory", label: "Financial advisory" }
  ];

  const getSolutions = (): SolutionOption[] => {
    const solutions: SolutionOption[] = [];

    if (clientType === "individual") {
      if (selectedOptions.includes("invest")) {
        solutions.push({
          id: "equities",
          title: "Equities Trading",
          description: "Start investing in the Pakistan Stock Market with our expert guidance.",
          icon: ChartPieIcon,
          color: "bg-purple-500",
          href: "/#equities"
        });
      }
      
      if (selectedOptions.includes("grow")) {
        solutions.push({
          id: "asset-management",
          title: "Asset Management",
          description: "Let our experts manage your portfolio for long-term growth.",
          icon: BarChart3,
          color: "bg-orange-500",
          href: "/#asset-management"
        });
      }
      
      if (selectedOptions.includes("plan") || selectedOptions.includes("international")) {
        solutions.push({
          id: "financial-services",
          title: "Financial Services",
          description: "Comprehensive financial planning and advisory services.",
          icon: BadgeDollarSign,
          color: "bg-blue-500",
          href: "/#financial-services"
        });
      }
    } else if (clientType === "business") {
      if (selectedOptions.includes("funding") || selectedOptions.includes("merger") || selectedOptions.includes("restructure")) {
        solutions.push({
          id: "investment-banking",
          title: "Investment Banking",
          description: "Strategic advisory, M&A, and capital raising services.",
          icon: Building2,
          color: "bg-pink-500",
          href: "/#investment-banking"
        });
      }
      
      if (selectedOptions.includes("advisory")) {
        solutions.push({
          id: "financial-services",
          title: "Financial Services",
          description: "Corporate financial advisory and risk management.",
          icon: BadgeDollarSign,
          color: "bg-blue-500",
          href: "/#financial-services"
        });
      }
    }

    // If no specific options selected, show all services
    if (solutions.length === 0) {
      return [
        {
          id: "equities",
          title: "Equities Trading",
          description: "Access Pakistan's stock market with expert research and execution.",
          icon: ChartPieIcon,
          color: "bg-purple-500",
          href: "/#equities"
        },
        {
          id: "investment-banking",
          title: "Investment Banking",
          description: "Strategic advisory, M&A, and capital raising services.",
          icon: Building2,
          color: "bg-pink-500",
          href: "/#investment-banking"
        },
        {
          id: "asset-management",
          title: "Asset Management",
          description: "Professional portfolio management with a focus on long-term growth.",
          icon: BarChart3,
          color: "bg-orange-500",
          href: "/#asset-management"
        },
        {
          id: "financial-services",
          title: "Financial Services",
          description: "Comprehensive advisory services for individuals and businesses.",
          icon: BadgeDollarSign,
          color: "bg-blue-500",
          href: "/#financial-services"
        }
      ];
    }

    return solutions;
  };

  return (
    <Card className={`overflow-hidden border ${isDark ? 'border-white/10 bg-card/20' : 'border-gray-200 bg-white'}`}>
      <CardContent className="p-0">
        <AnimatePresence mode="wait">
          {step === "start" && (
            <motion.div 
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <h3 className="text-lg font-medium mb-3">Find Your Financial Solution</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let us help you discover which BMA service best fits your needs.
              </p>
              
              <div className="flex flex-col space-y-3 mb-4">
                <Button
                  variant="outline"
                  className={`justify-start px-4 py-6 h-auto ${
                    clientType === "individual" ? "border-primary" : ""
                  }`}
                  onClick={() => setClientType("individual")}
                >
                  <div className="flex items-start">
                    <div className="mr-3">
                      {clientType === "individual" ? (
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Individual Investor</p>
                      <p className="text-xs text-muted-foreground">I'm looking for personal investment solutions</p>
                    </div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className={`justify-start px-4 py-6 h-auto ${
                    clientType === "business" ? "border-primary" : ""
                  }`}
                  onClick={() => setClientType("business")}
                >
                  <div className="flex items-start">
                    <div className="mr-3">
                      {clientType === "business" ? (
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Business</p>
                      <p className="text-xs text-muted-foreground">I need corporate financial solutions</p>
                    </div>
                  </div>
                </Button>
              </div>
              
              <Button 
                className="w-full"
                disabled={!clientType}
                onClick={handleNext}
              >
                Continue <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </motion.div>
          )}
          
          {(step === "individual" || step === "business") && (
            <motion.div 
              key="options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <h3 className="text-lg font-medium mb-3">What are you looking for?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select all that apply to your situation
              </p>
              
              <div className="flex flex-col space-y-3 mb-4">
                {(step === "individual" ? individualOptions : businessOptions).map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className={`justify-start px-4 py-3 h-auto ${
                      selectedOptions.includes(option.id) ? "border-primary" : ""
                    }`}
                    onClick={() => handleSelectOption(option.id)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">
                        {selectedOptions.includes(option.id) ? (
                          <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted" />
                        )}
                      </div>
                      <p>{option.label}</p>
                    </div>
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={handleReset}
                >
                  Back
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handleNext}
                >
                  View Solutions <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}
          
          {step === "result" && (
            <motion.div 
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <h3 className="text-lg font-medium mb-3">Recommended Solutions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your needs, here are the BMA services that can help you:
              </p>
              
              <div className="flex flex-col space-y-3 mb-4">
                <AnimatedScrollArea className="max-h-40 pr-2">
                  {getSolutions().map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <motion.div
                        key={solution.id}
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="mb-3 last:mb-0"
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start px-4 py-3 h-auto"
                          asChild
                        >
                          <a href={solution.href}>
                            <div className="flex items-center">
                              <div className={`mr-3 ${solution.color} p-2 rounded-full bg-opacity-20`}>
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                              <div className="text-left">
                                <p className="font-medium">{solution.title}</p>
                                <p className="text-xs text-muted-foreground">{solution.description}</p>
                              </div>
                            </div>
                          </a>
                        </Button>
                      </motion.div>
                    );
                  })}
                </AnimatedScrollArea>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={handleReset}
                >
                  Start Over
                </Button>
                <Button 
                  className="flex-1"
                  asChild
                >
                  <a href="#service-offerings">View All Services</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};
