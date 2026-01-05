
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users } from 'lucide-react';

export const BoardOfDirectors = () => {
  return (
    <section id="board" className="scroll-mt-20">
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            <CardTitle>Board of Directors</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p>
              The Board of Directors at BMA Capital Management Limited consists of experienced professionals 
              with diverse expertise in finance, investment management, and corporate governance.
            </p>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Experience</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Moazzam M. Malik</TableCell>
                    <TableCell>Chairman</TableCell>
                    <TableCell>Moazzam is one of the Founding Partners of BMA Capital since 1992. He has been instrumental in transforming the firm into one of the country’s first professionally managed financial institutions and a top-five player in securities brokering, investment banking, and asset management. He was pivotal in the deregulation of the telecom sector which ultimately led to the explosive growth and raised over US$1bn for the govt. in licensing fees.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Miraal Malik</TableCell>
                    <TableCell>Director</TableCell>
                    <TableCell>Miraal joined BMA Capital in 2020 and has worked in the Online Trade and Human Resources Departments.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jawad Bhatti</TableCell>
                    <TableCell>Chief Operating Officer (COO)</TableCell>
                    <TableCell>Jawad is an MBA qualified customer services/marketing professional with fourteen years of customer services and quality assurance experience. </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Syed Hammad</TableCell>
                    <TableCell>Chief Finanical Officer (CFO)</TableCell>
                    <TableCell>Hammad joined BMA Capital in January 2022 as Head of Compliance and Internal Audit and was appointed CFO in March 2024.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
