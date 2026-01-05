import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqData: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle FAQ section
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg bg-white dark:bg-gray-800 shadow-sm"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-6 py-4 text-lg font-medium"
          >
            {item.question}
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
