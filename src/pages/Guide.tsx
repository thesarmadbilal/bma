import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function Guide() {
  const [selectedSection, setSelectedSection] = useState("introduction");

  <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Investor's Corner</h1>
          <p className="text-muted-foreground">Your gateway to informed investment decisions</p>
        </div>

  // Content for each section based on the extracted information
  const sections: any = {
    introduction: {
      title: "Introduction",
      content: (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">What is Stock Exchange?</h3>
          <p className="mb-6">
            A stock exchange, share market or bourse is an organization that provides “trading” facilities for stock brokers and traders. It allows the trading of shares of listed companies and other financial instruments like Term Finance Certificates and Derivatives. The Pakistan Stock Exchange (PSX) uses the Karachi Automated Trading System (KATS) for trading, ensuring speed and lower transaction costs. Trades on an exchange are performed by TREC holders.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">Why Do Companies Go Public?</h3>
          <p className="mb-6">
            Companies go public primarily to raise capital by offering shares to the public. Going public reduces reliance on traditional financiers, such as banks and individual investors. It also facilitates business expansion without increasing debt or depleting cash reserves. History shows that companies going public tend to grow faster than those remaining private. They also become more competitive in acquiring other firms.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">What Are Shares?</h3>
          <p className="mb-6">
            Shares represent ownership in a company. When you buy shares, you are buying a stake in that company. Investors can buy and sell shares on the stock exchange. The shareholders might receive dividends, depending on the company’s profits, and the value of shares can appreciate over time.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">IPO and Book Building</h3>
          <p className="mb-6">
            The Initial Public Offering (IPO) is when a company sells its shares to the public for the first time. This process allows companies to raise funds directly from investors. The IPO price is determined through a process called Book Building, where underwriters gauge demand from institutional investors to set the most efficient price.
          </p>
        </>
      ),
    },
    generalInformation: {
      title: "General Information",
      content: (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">Why Should I Invest in Shares?</h3>
          <p className="mb-6">
            Almost everyone worldwide has an interest in shares, whether they realize it or not. Millions of people own shares directly, while many more have an indirect stake via pension schemes, life insurance policies, NIT units, and mutual funds. Shares give the opportunity for better rewards over the long term.
          </p>
          <p className="mb-6">
            Investing in shares differs from saving in a bank or National Saving Scheme. There is more risk, but the opportunity for better reward over the long term. With deposits, you earn interest but get back exactly what you put in; with shares you may receive dividends and capital growth. Funds invested in equities over the long term have historically outperformed regular savings.
          </p>
          <p className="mb-6">
            Before investing in stocks, understand your financial position and goals. Protect regular obligations and prepare for unexpected expenses before investing your surplus. There are three rationales for owning shares:
          </p>
          <ul className="list-disc ml-8 mb-6">
            <li>Ownership in a company — voting rights, dividends, share of assets on liquidation.</li>
            <li>Liquidity of funds — easier access than banks; start with low capital.</li>
            <li>Capital appreciation — earn via dividends and price increases.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-8 mb-4">Risks of Investing</h3>
          <p className="mb-6">
            Stocks are volatile; uncertainty is always part of investing. You can manage risk by diversification and disciplined decisions.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">Minimum Investment & Market Lot</h3>
          <p className="mb-6">
            Minimum initial investment varies by account type (Classic vs Premium) and trading lot requirements. Lot sizes depend on share price, calculated bi‑annually by NCCPL.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">How Can I Buy and Sell Shares?</h3>
          <p className="mb-6">
            You can buy shares at IPO or in the secondary market through brokers, banks, or online platforms. Most dealings occur in the secondary market. You can contact brokers by phone, internet, or in person to buy/sell shares.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">How Can I Decide Which Shares to Buy?</h3>
          <p className="mb-6">
            Brokers help with buying/selling; you decide based on goals, timeframe, and risk. PSX offers different market segments including Cash Market, CFS MKII, and Deliverable Future Contracts.
          </p>
        </>
      ),
    },
    marketAndItsWorking: {
      title: "Market and Its Working",
      content: (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">Market Performance Measures</h3>
          <p className="mb-6">
            Market performance is measured by Market Capitalization, Value Turnover, Traded Volume, and Composite Index.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">What Influences Market Movements?</h3>
          <p className="mb-6">
            Market sentiment is influenced by economic, political, and fiscal factors. Interest rates, foreign exchange, inflation, and growth rates affect stock market performance.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">Stock Market Indices</h3>
          <p className="mb-6">
            The **KSE‑100 Index** is the benchmark index of PSX, representing the top 100 companies by market capitalization. Other indices include **KSE‑30** (free float of top 30 companies) and **KSE‑All Share** (all listed stocks).
          </p>
        </>
      ),
    },
    regulatingTheStockMarket: {
      title: "Regulating the Stock Market",
      content: (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">Regulatory Framework</h3>
          <p className="mb-6">
            The Securities and Exchange Commission of Pakistan (SECP) regulates the securities market, ensuring corporate compliance and investor protection. SECP oversees rules and market conduct. PSX operates under SECP guidelines, promoting transparency and fairness.
          </p>
          <p className="mb-6">
            PSX trading is carried out by licensed brokers (TREC Holders) who follow PSX Rule Book standards. Surveillance systems and codes of conduct help prevent manipulation and unfair practices.
          </p>
        </>
      ),
    },
    taxesAndLegalAspects: {
      title: "Taxes and Legal Aspects",
      content: (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">Income Tax</h3>
          <p className="mb-6">
            Dividend income tax is generally deducted at source. Tax implications vary by individual tax status.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">Capital Gains Tax (CGT)</h3>
          <p className="mb-6">
            Capital gains earned when shares are sold for profit are subject to CGT. Rates depend on holding period and regulations.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">Other Tax Considerations</h3>
          <p className="mb-6">
            Investors may encounter taxes like Federal Excise Duty (FED) and Sindh Sales Tax (SST) on brokerage and commission charges. Consult a tax advisor for detailed guidance.
          </p>
        </>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-background text-gray-900 dark:text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">Investor Guide</h1>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <ul className="space-y-4">
              {Object.keys(sections).map((section) => (
                <li
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`cursor-pointer p-2 rounded hover:bg-primary dark:hover:bg-primary/30 ${
                    selectedSection === section ? "bg-primary text-white" : ""
                  }`}
                >
                  {sections[section].title}
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div className="w-3/4 bg-white dark:bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold dark:text-white">{sections[selectedSection]?.title}</h2>
            <div className="mt-4 dark:text-white">{sections[selectedSection]?.content}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
