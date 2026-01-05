
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

export default function Governance() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <GovernanceHeader />

        <div className="space-y-16">
          {/* Overview Section */}
          <GovernanceOverview />

          <Separator className="my-8" />

          {/* Board of Directors Section */}
          <BoardOfDirectors />

          <Separator className="my-8" />

          {/* Committees Section */}
          <BoardCommittees />

          <Separator className="my-8" />

          {/* Shareholding Pattern Section */}
          {/* <ShareholdingPattern /> */}

          {/* <Separator className="my-8" /> */}

          {/* Agent Details Section */}
          <AgentDetails />
        </div>
      </main>
      <Footer />
    </div>

  );
}
