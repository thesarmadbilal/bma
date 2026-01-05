
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText } from 'lucide-react';

export const ShareholdingPattern = () => {
  return (
    <section id="shareholding" className="scroll-mt-20">
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <CardTitle>Pattern of Shareholding</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p>
              The shareholding pattern of BMA Capital Management Limited reflects a diverse ownership structure 
              with a combination of institutional investors, individual shareholders, and management stakeholders.
            </p>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category of Shareholders</TableHead>
                    <TableHead className="text-right">Number of Shares</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Directors and their spouses</TableCell>
                    <TableCell className="text-right">6,250,000</TableCell>
                    <TableCell className="text-right">25.00%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Associated companies</TableCell>
                    <TableCell className="text-right">8,750,000</TableCell>
                    <TableCell className="text-right">35.00%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Institutional investors</TableCell>
                    <TableCell className="text-right">5,000,000</TableCell>
                    <TableCell className="text-right">20.00%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Individual shareholders</TableCell>
                    <TableCell className="text-right">3,750,000</TableCell>
                    <TableCell className="text-right">15.00%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Others</TableCell>
                    <TableCell className="text-right">1,250,000</TableCell>
                    <TableCell className="text-right">5.00%</TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/10">
                    <TableCell className="font-semibold">Total</TableCell>
                    <TableCell className="text-right font-semibold">25,000,000</TableCell>
                    <TableCell className="text-right font-semibold">100.00%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold">Major Shareholders</h3>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Shareholder Name</TableHead>
                      <TableHead className="text-right">Number of Shares</TableHead>
                      <TableHead className="text-right">Percentage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">BMA Holdings (Pvt) Limited</TableCell>
                      <TableCell className="text-right">6,250,000</TableCell>
                      <TableCell className="text-right">25.00%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Moazzam M. Malik</TableCell>
                      <TableCell className="text-right">3,750,000</TableCell>
                      <TableCell className="text-right">15.00%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Muddassar Malik</TableCell>
                      <TableCell className="text-right">2,500,000</TableCell>
                      <TableCell className="text-right">10.00%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Asia Frontier Capital Limited</TableCell>
                      <TableCell className="text-right">2,500,000</TableCell>
                      <TableCell className="text-right">10.00%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
