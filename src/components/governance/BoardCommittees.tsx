
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Gavel } from 'lucide-react';

export const BoardCommittees = () => {
  return (
    <section id="committees" className="scroll-mt-20">
      <Card className="mb-6" id="committees">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Gavel className="h-6 w-6 text-primary" />
            <CardTitle>Board Committees</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p>
              The Board has established specialized committees to assist in fulfilling its oversight responsibilities 
              more effectively. Each committee operates under defined terms of reference and reports regularly to the Board.
            </p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold mb-3">Board Audit Committee</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Position</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Moazzam M. Malik</TableCell>
                        <TableCell>Chairman</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Miraal Malik</TableCell>
                        <TableCell>Director</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Jawad Bhatti</TableCell>
                        <TableCell>COO</TableCell>
                      </TableRow>
                       <TableRow>
                        <TableCell className="font-medium">Syed Hammad</TableCell>
                        <TableCell>CFO</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Shaheen Khalid</TableCell>
                        <TableCell>Company Secretary</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                {/* <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    <li>Monitoring the integrity of financial statements</li>
                    <li>Reviewing internal control and risk management systems</li>
                    <li>Overseeing the internal audit function</li>
                    <li>Recommending the appointment of external auditors</li>
                    <li>Reviewing significant financial reporting judgments</li>
                  </ul>
                </div> */}
              </div>
              
              <div>
                {/* <h3 className="text-lg font-semibold mb-3">Human Resources & Remuneration Committee</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Position</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Mr. Fawad Saeed</TableCell>
                        <TableCell>Chairman</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Ms. Tara Uzra Dawood</TableCell>
                        <TableCell>Member</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Mr. Moazzam M. Malik</TableCell>
                        <TableCell>Member</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div> */}
                
                {/* <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    <li>Recommending human resource management policies</li>
                    <li>Overseeing executive compensation programs</li>
                    <li>Succession planning for key management positions</li>
                    <li>Reviewing performance evaluation criteria for executives</li>
                    <li>Ensuring alignment of HR policies with corporate goals</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
