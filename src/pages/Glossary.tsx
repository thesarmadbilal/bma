import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer/Footer";

export const glossaryData = {
  A: [
    { term: "Assets", definition: "What a firm or individual owns." },
    { term: "Accrued Interests", definition: "Interest that has been earned but not received." },
    { term: "Accumulation plan", definition: "An arrangement which enables an investor to purchase mutual fund shares regularly in large or small amounts." },
    { term: "Annual Report", definition: "A financial report sent yearly to a publicly held firm’s shareholders. This report must be audited by independent auditors." },
    { term: "Annuitant", definition: "An individual who purchases an annuity and will receive payments from that annuity." },
    { term: "Annuity", definition: "A contract that guarantees a series of payments in exchange for a lump sum investment." },
    { term: "Ask Price", definition: "A proposal to sell a specific quantity of securities at a named price." }
  ],
  B: [
    { term: "Back-end Load", definition: "A sales charge levied when mutual fund units are redeemed." },
    { term: "Balance Sheet", definition: "A financial statement showing the nature and amount of a company’s assets, liabilities and shareholders’ equity." },
    { term: "Balanced Fund", definition: "A mutual fund which has an investment policy of “balancing” its portfolio generally by including bonds and shares in varying proportions influenced by the fund’s investment outlook." },
    { term: "Bankers' Acceptance", definition: "Short-term bank paper with the repayment of principal and payment of interest guaranteed by the issuer’s bank." },
    { term: "Bear Market", definition: "A declining financial market." },
    { term: "Beta", definition: "A statistical term used to illustrate the relationship of the price of an individual security or mutual fund unit to similar securities or financial market indexes." },
    { term: "Bid Price", definition: "A proposal to buy a specific quantity of securities at a named price." },
    { term: "Blue Chip", definition: "A descriptive term usually applied to high grade equity securities." },
    { term: "Board of Directors", definition: "A committee elected by the shareholders of a company, empowered to act on their behalf in the management of company affairs." },
    { term: "Bond", definition: "A long-term debt instrument with the promise to pay a specified amount of interest and to return the principal amount on a specified maturity date." },
    { term: "Bond Fund", definition: "A mutual fund whose portfolio consists primarily of bonds." },
    { term: "Book Value", definition: "The value of net assets that belong to a company’s shareholders, as stated on the balance sheet." },
    { term: "Broker", definition: "An agent who handles the public’s orders to buy and sell securities, commodities, or other property." },
    { term: "Bull Market", definition: "An advancing financial market." },
    { term: "Buying on Margin", definition: "Purchasing a security partly with borrowed money." }
  ],
  C: [
    { term: "Capital", definition: "Generally, the money or property used in a business. The term is also used to apply to cash in reserve, savings, or other property of value." },
    { term: "Capital Cost Allowance", definition: "The loss that results when a capital asset is sold for less than its purchase price." },
    { term: "Capital Loss", definition: "The loss that results when a capital asset is sold for less than its purchase price." }
  ],
  D: [
    { term: "Debenture", definition: "A bond unsecured by any pledge of property. It is supported by the general credit of the issuing corporation." },
    { term: "Debt", definition: "Money owed by a person or company to another party." },
    { term: "Deferral", definition: "Delaying a financial obligation or the recognition of income." }
  ],
  E: [
    { term: "Earned Income", definition: "For tax purposes, earned income is generally the money made by an individual from employment. It also includes some taxable benefits." },
    { term: "Earning Statement", definition: "A financial statement showing the income and expenses of a business over a period of time." },
    { term: "Equity", definition: "The net worth of a company. This represents the ownership interest of the shareholders." },
    { term: "Equity Fund", definition: "A mutual fund whose portfolio consists primarily of common stocks." }
  ],
  F: [
    { term: "Face Value", definition: "The principal amount, or value at maturity, of a debt obligation." },
    { term: "Fair Market Value", definition: "The price a willing buyer would pay a willing seller if neither was under any compulsion to buy or sell." },
    { term: "Fiduciary", definition: "An individual or institution occupying a position of trust." },
    { term: "Fiscal Policy", definition: "The policy pursued by government to manage the economy through its spending and taxation powers." },
    { term: "Fixed Assets", definition: "Assets of a long-term nature, such as land and buildings." },
    { term: "Fixed Dollar Withdrawal Plan", definition: "A plan that provides fixed-dollar payments at specified intervals." },
    { term: "Fixed Liability", definition: "Any corporate liability that will not mature within the following fiscal period." },
    { term: "Fixed Income Investment", definition: "Investments that generate a fixed amount of income that does not vary over the life of the investment." },
    { term: "Fixed Period Withdrawal Plan", definition: "A plan through which holdings are depleted through regular withdrawals over a set period." },
    { term: "Front-End Load", definition: "A sales charge levied on the purchase of mutual fund units." },
    { term: "Fundamental analysis", definition: "A method of evaluating future prospects by analyzing financial statements." }
  ],
  G: [
    { term: "Growth Stock", definition: "Shares of companies whose earnings are expected to increase at an above-average rate." },
    { term: "Guaranteed Investment Certificates", definition: "A deposit instrument paying a predetermined rate of interest for a specified term." }
  ],
  I: [
    { term: "Income Fund", definition: "Mutual funds that invest primarily in fixed-income securities such as bonds and mortgages." },
    { term: "Index Fund", definition: "A mutual fund that matches its portfolio to that of a specific financial market index." },
    { term: "Inflation", definition: "A condition of increasing prices." },
    { term: "Interest", definition: "Payments made by a borrower to a lender for the use of the lender’s money." },
    { term: "International Fund", definition: "A mutual fund that invests in securities of several countries." },
    { term: "Intrinsic Value", definition: "The amount by which an option’s price exceeds its exercise price." }
  ],
  L: [
    { term: "Letter of Intent", definition: "An agreement whereby an investor agrees to make a series of purchases of mutual fund units." },
    { term: "Leverage", definition: "The financial advantage of an investment that controls property of greater value than the cash invested." },
    { term: "Liabilities", definition: "All debts or amounts owing by a company." },
    { term: "Life Annuity", definition: "An annuity under which payments are guaranteed for the life of the annuitant." },
    { term: "Liquidity", definition: "Ease with which an investment may be converted to cash." },
    { term: "Load", definition: "Commissions charged to holders of mutual fund units." }
  ],
  M: [
    { term: "Management Company", definition: "The entity responsible for the investment of the fund’s portfolio." },
    { term: "Management Expense Ratio", definition: "Total costs of operating a fund as a percentage of average assets." },
    { term: "Management Fee", definition: "The sum paid to the investment company’s adviser for supervising its operations." },
    { term: "Margin", definition: "An investor’s equity in the securities in his or her account." },
    { term: "Market Index", definition: "A vehicle used to denote trends in securities markets." },
    { term: "Market Price", definition: "The last reported price at which a security is sold." },
    { term: "Maturity", definition: "The date at which a bond or loan comes due and must be paid off." }
  ],
  N: [
    { term: "Net Asset Value", definition: "The value of all the holdings of a mutual fund, less the fund’s liabilities." },
    { term: "Net Asset Value Per Share", definition: "Net asset value of a mutual fund divided by the number of shares outstanding." },
    { term: "Net Load Fund", definition: "A mutual fund that does not charge a fee for buying or selling its shares." }
  ],
  O: [
    { term: "Odd Lot", definition: "Any number of securities that represents less than a board lot." },
    { term: "Open-end Fund", definition: "A mutual fund that continuously issues and redeems units." },
    { term: "Option", definition: "The right or obligation to buy or sell a security at a set price." }
  ],
  P: [
    { term: "Per Value", definition: "The principal amount, or value at maturity, of a debt obligation." },
    { term: "Permanent Life Insurance", definition: "Life insurance coverage with a savings component." },
    { term: "Portfolio", definition: "All the securities which an investor owns." },
    { term: "Price Earning Ratio", definition: "Market price divided by earnings per share." },
    { term: "Prospectus", definition: "The document by which a corporation offers new securities to the public." }
  ],
  R: [
    { term: "Ratio Withdrawal Plan", definition: "A plan providing investors income based on a percentage of units held." },
    { term: "Real Estate Fund", definition: "A mutual fund that invests primarily in real estate." },
    { term: "Redeemable", definition: "Preferred shares or bonds that can be repurchased by the issuer." }
  ],
  S: [
    { term: "Sales Charge", definition: "Commissions charged to mutual fund holders based on purchase or redemption price." },
    { term: "Securities Act", definition: "Legislation regulating the underwriting and sale of securities." },
    { term: "Shares", definition: "A document signifying part ownership in a company." }
  ],
  T: [
    { term: "Tax Credit", definition: "An income tax credit that directly reduces income tax payable." },
    { term: "Tax Deduction", definition: "A reduction of total income before tax payable is calculated." }
  ],
  U: [
    { term: "Underwriter", definition: "An investment firm that purchases securities directly from the issuer for resale." },
    { term: "Unit Trust", definition: "An unincorporated fund whose structure permits certain tax treatment." }
  ],
  V: [
    { term: "Variable Life Annuity", definition: "An annuity with payments depending on investment performance." }
  ],
  W: [
    { term: "Warrant", definition: "Certificates allowing the holder to buy shares in a company at a specified price." }
  ],
  Y: [
    { term: "Yield", definition: "Annual rate of return on investments." },
    { term: "Yield Curve", definition: "A graphical representation of yields across maturities." }
  ],
  Z: [
    { term: "Zero Coupon Bond", definition: "A bond that pays no interest and is initially sold at a discount." }
  ]
};


export default function Glossary() {
  const [openTerm, setOpenTerm] = useState<string | null>(null);

  const toggleTerm = (term: string) => {
    setOpenTerm(openTerm === term ? null : term); // Toggle term section
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Glossary</h1>
          <p className="text-muted-foreground">Explore terms and definitions related to investing and finance</p>
        </div>

        {/* 4-Column Layout for Alphabet Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.keys(glossaryData).map((letter) => (
            <section key={letter} className="space-y-4">
              {/* Alphabet Header */}
              <div className="text-2xl font-semibold text-left py-2 px-4 border-b border-gray-500">
                {letter}
              </div>

              {/* Accordion for Terms Under Each Letter */}
              <div className="space-y-4 pt-4">
                {glossaryData[letter].map((entry, index) => (
                  <div key={index} className="shadow-lg rounded-lg p-4 bg-white dark:bg-gray-800">
                    <button
                      onClick={() => toggleTerm(entry.term)}
                      className="text-xl font-medium text-left w-full mb-2 text-gray-900 dark:text-white"
                    >
                      {entry.term}
                    </button>

                    {openTerm === entry.term && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{entry.definition}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
