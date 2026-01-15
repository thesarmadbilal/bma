
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Separator } from "@/components/ui/separator";
import { GovernanceHeader } from '@/components/governance/GovernanceHeader';
import { GovernanceOverview } from '@/components/governance/GovernanceOverview';
import { BoardOfDirectors } from '@/components/governance/BoardOfDirectors';
import { BoardCommittees } from '@/components/governance/BoardCommittees';
import { ShareholdingPattern } from '@/components/governance/ShareholdingPattern';
import { AgentDetails } from '@/components/governance/AgentDetails';
import { Footer } from '@/components/footer/Footer';
import { useHashNavigation } from '@/hooks/useHashNavigation';

export default function Governance() {
  // Handle hash-based scrolling
  useHashNavigation();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <GovernanceHeader />

        <div className="space-y-16">
          <GovernanceOverview />
          <Separator className="my-8" />
          <BoardOfDirectors />
          <Separator className="my-8" />
          <BoardCommittees />
          <Separator className="my-8" />
          <AgentDetails />
        </div>
      </main>
      <Footer />
    </div>

  );
}
