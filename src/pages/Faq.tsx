import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";  // Adjust path if needed
import { Footer } from "@/components/footer/Footer";  // Adjust path if needed
import { FaChevronDown, FaChevronUp } from "react-icons/fa";  // Import icons

const faqData = [
  {
    category: "Account",
    questions: [
      {
        question: "How can I update my account details?",
        answer:
          "To amend basic details in your BMA Trade account records and CDC records, you are requested to send us a written request duly signed by account holder(s). The signature(s) should match with records provided in the Account Opening Form. Email a scanned copy from your registered email address."
      },
      {
        question: "How can I get a new password?",
        answer:
          "To generate a new password, email bmatrade@bmacapital.com from your registered email address. After verification, the new password will be sent to you."
      },
      {
        question: "How to reactivate / unblock my account ID?",
        answer:
          "Account ID is blocked after three unsuccessful login attempts. To reactivate, email bmatrade@bmacapital.com with your BMA Trade Account number from your registered email address."
      },
      {
        question: "How can I activate CDC web/IVR/SMS services?",
        answer:
          "Send a written request duly signed by the account holder(s). Your request will be processed within 24 working hours and communicated via email and SMS."
      },
      {
        question: "Can I change my account package?",
        answer:
          "Yes. You need to send the signed Account Package form after marking the desired package to BMA Trade through courier or email."
      }
    ]
  },
  {
    category: "Funds & Deposits",
    questions: [
      {
        question: "How can I deposit funds in my trading account?",
        answer:
          "Deposit funds through cash/cheque/DD/Pay order at any Bank Al Habib branch. Mention your Account Title and BMA Trade User ID on the slip and email a scanned copy to bmatrade@bmacapital.com. Funds are credited within hours for cash and subject to clearance for cheque deposits."
      },
      {
        question: "Can I transfer funds to my trading account online?",
        answer:
          "Yes. Use Inter Bank Funds Transfer (IBFT) from your bank to the BMA Capital Management account, then forward the confirmation email to bmatrade@bmacapital.com with your BMA Trade User ID."
      },
      {
        question: "How can I withdraw cash from my trading account?",
        answer:
          "Select the ‘Cash withdrawal’ option in your trading software or app, choose Bank Transfer or Cheque Delivery, enter the amount, and submit. Withdrawal depends on settlement availability, CGT liability, and minimum maintenance balance."
      }
    ]
  },
  {
    category: "Trading Charges & Taxes",
    questions: [
      {
        question: "What are CDC/UIN maintenance fees?",
        answer:
          "NCCPL and CDC charge annual maintenance fees. NCCPL’s UIN fee is Rs. 200 per applicant and CDC Sub account fee is Rs. 400 per account."
      },
      {
        question: "What types of taxes are charged on my trading?",
        answer:
          "Federal Excise Duty (FED) or Sindh Sales Tax (SST) at 13% of brokerage/commission is charged. Capital Gains Tax (CGT) is also applied based on holding period."
      },
      {
        question: "What are custody charges?",
        answer:
          "Custody charges for CDC eligible securities are 0.03% per annum of the market value of shares and charged monthly."
      }
    ]
  },
  {
    category: "Order Execution & Markets",
    questions: [
      {
        question: "Where can I trade shares less than lot size?",
        answer:
          "Odd Lots are traded in the separate Odd Lot (ODL) market at the PSX. In the Buy/Sell window, select ‘ODL’ from the market options. Lot sizes vary depending on share price."
      },
      {
        question: "How much time will it take to execute my order?",
        answer:
          "BMA Trade terminal provides fast execution. Under normal conditions, orders are executed within two seconds depending on market and internet conditions."
      }
    ]
  },
  {
    category: "Futures",
    questions: [
      {
        question: "How much margin is available in futures trading?",
        answer:
          "Margin exposure is up to 4 times your available equity (cash + reduced custody value of shares) for deliverable futures. Past month’s contract schedules are announced by PSX."
      }
    ]
  },
  {
    category: "Shares Transfer",
    questions: [
      {
        question: "How can I transfer my shares from another brokerage to BMA trading account?",
        answer:
          "Write a letter to the other brokerage with Participant Name: BMA Capital Management Limited, Participant ID: 01826, your CDC sub A/C, trading A/C, share name and quantity. Also send a copy to BMA for follow-up."
      },
      {
        question: "Can I transfer my shares from BMA to another brokerage?",
        answer:
          "Yes. Log in to your BMA Trade terminal, go to VIEWS Menu → Transfer Custody, fill in symbol, volume and CDC Investor account, and submit. Transfers depend on CGT liability and minimum maintenance balance."
      },
      {
        question: "Can I transfer my securities from one BMA account to another?",
        answer:
          "Yes, through the Transfer Custody option in your BMA Trade terminal by entering the required details and submitting."
      },
      {
        question: "How can I transfer my shares/custody from CDC investor account to BMA trading account?",
        answer:
          "Courier your CDC cheque from the transaction order book to CDC or transfer online via CDC web access. Include Participant Name (BMA Capital Management Limited) and CDC-Sub Account number."
      },
      {
        question: "How can I transfer physical shares to my BMA trading account?",
        answer:
          "Send physical shares with verified transfer deed, Securities Deposit Form, attested CNIC copies and a covering letter mentioning your USER ID/Account number to the mailing address. The process takes about 10–15 working days."
      }
    ]
  }
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index); 
  };

  return (
    <div className="min-h-screen bg-background"> 
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h1> 
        <p className="text-muted-foreground mb-8 text-white">
          Answers to common questions about account services, trading, and transfers.
        </p>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((categoryData, index) => (
            <div key={index}>
              {/* Category Title */}
              <h2 className="text-2xl font-semibold text-white mb-4">{categoryData.category}</h2> 

              {/* FAQ Items under the Category */}
              <div className="space-y-4">
                {categoryData.questions.map((item, faqIndex) => (
                  <div key={faqIndex} className="border-b border-border py-4">
                    {/* FAQ Question with Icon */}
                    <button
                      onClick={() => toggleFAQ(faqIndex)}
                      className="w-full text-left text-lg font-medium flex justify-between items-center text-white" 
                    >
                      <span>{item.question}</span>
                      {/* Icon */}
                      {openFAQ === faqIndex ? (
                        <FaChevronUp className="text-xl" />
                      ) : (
                        <FaChevronDown className="text-xl" />
                      )}
                    </button>

                    {/* FAQ Answer */}
                    {openFAQ === faqIndex && (
                      <div className="text-sm text-gray-700 text-white mt-2"> 
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
