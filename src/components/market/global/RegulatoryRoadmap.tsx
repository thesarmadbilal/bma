
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RoadmapStepProps {
  stepNumber: number;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  hasButtons?: boolean;
}

function RoadmapStep({ 
  stepNumber, 
  title, 
  description, 
  buttonText, 
  onButtonClick,
  hasButtons 
}: RoadmapStepProps) {
  const { toast } = useToast();

  return (
    <div className="bg-black/20 rounded-lg p-4 relative pl-12">
      <div className="absolute left-4 top-4 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
        {stepNumber}
      </div>
      <h5 className="font-medium text-white mb-1">{title}</h5>
      <p className="text-sm text-gray-300">{description}</p>
      {buttonText && onButtonClick && (
        <Button 
          variant="link" 
          className="text-primary p-0 h-auto mt-2 text-sm"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
      {hasButtons && (
        <div className="grid grid-cols-2 gap-4 mt-3">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => toast({
              title: "Consultation Scheduled",
              description: "Our international investment advisor will contact you shortly."
            })}
          >
            Schedule Consultation
          </Button>
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            Download Full Guide
          </Button>
        </div>
      )}
    </div>
  );
}

export function RegulatoryRoadmap() {
  const { toast } = useToast();

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-white/10 p-6">
      <h4 className="text-lg font-medium text-white mb-3 flex items-center">
        <FileText className="h-5 w-5 text-primary mr-2" />
        International Investor Roadmap
      </h4>
      <p className="text-sm text-gray-300 mb-6">Step-by-step guide to investing in Pakistan from abroad</p>
      
      <div className="space-y-4">
        <RoadmapStep 
          stepNumber={1}
          title="Open a Roshan Digital Account (RDA)"
          description="Non-resident Pakistanis and foreigners can open this special account remotely with minimal documentation."
          buttonText="Download RDA Setup Guide"
          onButtonClick={() => toast({
            title: "Guide Downloaded",
            description: "RDA setup guide has been sent to your email."
          })}
        />
        
        <RoadmapStep 
          stepNumber={2}
          title="Complete KYC & Regulatory Requirements"
          description="Verify your identity through our secure digital platform and complete regulatory paperwork."
          buttonText="Start Documentation Wizard"
          onButtonClick={() => toast({
            title: "Documentation Wizard",
            description: "Our team will assist you with required documentation."
          })}
        />
        
        <RoadmapStep 
          stepNumber={3}
          title="Fund Your Investment Account"
          description="Transfer funds securely from your international bank account to your Pakistan investment account."
        />
        
        <RoadmapStep 
          stepNumber={4}
          title="Begin Your Investment Journey"
          description="Access Pakistani stocks, bonds, mutual funds, and alternative investments with full repatriation rights."
          hasButtons
        />
      </div>
    </div>
  );
}
