
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield } from 'lucide-react';

export const AgentDetails = () => {
  return (
    <section id="agent" className="scroll-mt-20">
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <CardTitle>Agent Details</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p>
              BMA Capital Management Limited serves as an agent/consultant for various financial services 
              and investment products. Below are the details of our agent registrations and authorizations.
            </p>
            
            <div className="space-y-10">
              <div>
                {/* <h3 className="text-lg font-semibold mb-3">Registration Details</h3> */}
                {/* <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>License Type</TableHead>
                        <TableHead>Registration Number</TableHead>
                        <TableHead>Issuing Authority</TableHead>
                        <TableHead>Date of Issue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Securities Broker</TableCell>
                        <TableCell>BRK-471</TableCell>
                        <TableCell>Securities & Exchange Commission of Pakistan</TableCell>
                        <TableCell>January 15, 2004</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Investment Advisor</TableCell>
                        <TableCell>IA-056</TableCell>
                        <TableCell>Securities & Exchange Commission of Pakistan</TableCell>
                        <TableCell>March 10, 2005</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Consultant to an Issue</TableCell>
                        <TableCell>CI-028</TableCell>
                        <TableCell>Securities & Exchange Commission of Pakistan</TableCell>
                        <TableCell>August 22, 2007</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Securities Manager</TableCell>
                        <TableCell>SM-042</TableCell>
                        <TableCell>Securities & Exchange Commission of Pakistan</TableCell>
                        <TableCell>November 5, 2008</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div> */}
              </div>
              
              {/* <div>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Head Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Level 8, Unitower, I.I. Chundrigar Road<br />
                      Karachi 74000, Pakistan
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tel: +92 21 111 262 111<br />
                      Fax: +92 21 3243 0748<br />
                      Email: info@bmacapital.com
                    </p>
                  </div>
                  
                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Compliance Officer</h4>
                    <p className="text-sm text-muted-foreground">
                      Mr. Ahmad Khan<br />
                      Compliance Department
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tel: +92 21 111 262 111 Ext. 2064<br />
                      Email: compliance@bmacapital.com
                    </p>
                  </div>
                </div>
              </div> */}

               <div>
              
                <div>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Head Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Level 8, Unitower, I.I. Chundrigar Road<br />
                      Karachi 74000, Pakistan
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tel: +92 21 111 262 111<br />
                      Fax: +92 21 3243 0748<br />
                      Email: info@bmacapital.com
                    </p>
                  </div>

                  
                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Compliance Officer</h4>
                    <p className="text-sm text-muted-foreground">
                      Mr. Ahmad Khan<br />
                      Compliance Department
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tel: +92 21 111 262 111 Ext. 2064<br />
                      Email: compliance@bmacapital.com
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">Branch Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Head Office</h4>
                    <p className="text-sm text-muted-foreground">
                      801, 8th Floor, Unitower, I.I. Chundrigar Road<br />
                      Karachi 74000, Pakistan<br />
                      Tel: 021-111-262-111, 021-32437048
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Muhammad Irfan
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Pakistan Stock Exchange Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Room No. 141, 3rd Floor, Stock Exchange Building, Stock Exchange Road, Karachi.<br />
                      Tel: 021-32466254, 021-32437094
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Anwer Hussain
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Bahadurabad Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office No. 3, Mezzanine Floor, Akbar Manzil, Main Bahadurabad Roundabout, Karachi.<br />
                      Tel: 021-34860392-4
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Muhammad Zaki
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Islamabad Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office No. 104, 1st Floor, Gulistan Khan House Plaza, Fazal-e-Haq Road, Blue Area Islamabad.<br />
                      Tel: 051-2802354-5
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Sheeraz Ahmed
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Lahore Cavalry Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      2nd Floor, 74-Commercial Area, main Cavalry Ground, Lahore.<br />
                      Tel: 042-36676164-20
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Hamid Ilyas
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Gujranwala Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office # 51, Block-H, Ground Floor, Trust Plaza, Gujranwala.<br />
                      Tel: 055-3848501, 055-3848505
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Faisal Yaqoob Khokhar
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Multan Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office # 607-A, 6th Floor, Plot # 74, The United Mall, Abdali Road, Multan.<br />
                      Tel: 061-4576612
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Umar Farooq
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Gulshan-e-Iqbal Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office No. 2-B, 1st Floor, Wali Center, Block 13-C, Gulshan-e-Iqbal, Karachi.<br />
                      Tel: 021-34852023
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Muhammad Arsalan
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Lahore Gulberg Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office # 402, 7th Floor, Mega Tower, 63-B Main Boulevard, Gulberg-II, Lahore.<br />
                      Tel: 042-35762953-57
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Muhammad Salman
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Sialkot Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      2nd Floor, Sialkot Business & Commerce Centre, Paris Road, Sialkot.<br />
                      Tel: 052-4581261-3
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Ihsan Ullah
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Faisalabad Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Mezzanine Floor, State Life Building # 2, Plot # 833, Liaquat Road, Faisalabad.<br />
                      Tel: 041-2612621-5
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Khawaja Haseeb Ahmad
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Lahore LSE Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      1st Floor Room# 110-111, LSE Building, 19- Khayaban-e-Aiwam-e-Iqbal, Lahore.<br />
                      Tel: 042-36209391-34
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Irshad Ali
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Sargodha Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Ground Floor, Shan Plaza, Block No. 16, Main Khushab Road, Near Allied Bank Limited, Sargodha.<br />
                      Tel: 048-3767187-18
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Ali Shan Azhar
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Chakwal Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office No. 12, 1st Floor, Ejaz Plaza, Talagang Road Chakwal.<br />
                      Tel: 0543-5538505
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Farrukh Nadeem
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">North Nazimabad Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      D-14 Office No 02, 2nd Floor Block “H”, MCB Building, Near 5 Star Round About, North Nazimabad Karachi.<br />
                      Tel: 021-36672301-00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Muhammad Farooq Ansari
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Peshawar Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Shop No. F1 & F2, 1st Floor Mall Tower 35, The Mall Peshawar Cantt.<br />
                      Tel: 091-5274770-72
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Ihsan Muhammad
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">DHA Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Office #1, 1st Floor, Building #17-C, Main Khayaban-e-Shahbaz Commercial, Phase VI, Defense Housing Authority, Karachi.<br />
                      Tel: 021-35240578
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Murtaza Shahbazker
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Jhelum Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      2nd Floor, Khalid Plaza, Plot#7/89, Kazim Kamal Road, Jhelum, Punjab.<br />
                      Tel: 0542-695094-97
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Rehmat Hayat
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Gujar Khan Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      1st Floor, Office # 101 & 102, Akbar Kayani Plaza, GT Road, Gujar Khan, Punjab.<br />
                      Tel: 051-3762083
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Haroon Mukhtar
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/10 p-4 rounded-lg">
                    <h4 className="font-medium">Bahawalpur Branch</h4>
                    <p className="text-sm text-muted-foreground">
                      Plot # 13-A, 1st Floor, Office # 2, Model Town-B, Punjab.<br />
                      Tel: 062-2883158
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Agent: Noman Iqbal
                    </p>
                  </div>
                </div>
              </div>
              </div>
 

            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
