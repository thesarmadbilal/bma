
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Gavel, Users, FileText } from 'lucide-react';

export const GovernanceOverview = () => {
  return (
    <section id="overview" className="scroll-mt-20">
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <CardTitle>Governance Framework</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            BMA Capital Management Limited is committed to maintaining the highest standards of corporate governance 
            and ethical business practices. Our governance framework is designed to ensure transparency, 
            accountability and responsible decision-making at all levels of the organization.
          </p>
          <p>
            The company adheres to the principles and guidelines set forth by the Securities and Exchange Commission 
            of Pakistan (SECP) and continuously strives to implement best practices in corporate governance.
          </p>
          
          <Separator className="my-4" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Legal Framework</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our operations comply with all applicable laws, regulations and codes of conduct prescribed by 
                regulatory authorities, ensuring legal compliance across all business activities.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Board Oversight</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The Board of Directors provides strategic guidance, oversees management performance, and ensures 
                the company's interests are protected while balancing stakeholder concerns.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Risk Management</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our comprehensive risk management framework identifies, assesses and mitigates potential risks, 
                ensuring sustainable growth and protection of investor interests.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Disclosure Policy</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We maintain transparent communication with all stakeholders through timely and accurate disclosure 
                of information regarding financial performance and governance matters.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
