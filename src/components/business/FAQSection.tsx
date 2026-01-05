
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: "How can I open my account?",
      answer: "Request BMA Trade to send account opening form or fill the account opening form available at BMA Trade website, duly sign off and send to BMA Trade Customer Services at BMA Trade Head Office Karachi along with ; Relevant account opening documents and PO/DD/ local bank cheque in favor BMA Capital Management Limited or CDC Transfer Order in favor of BMA Trade. Attested Copies of CNICs a. Account Holder b. Joint Account Holder (if any) c. Nominee (if any) d. Witnesses Other documents a. Power of Attorney b. Zakat Declaration"
    },
    {
      question: "How can I Trade?",
      answer: "You will be couriered a BMA Trade Trading Terminal CD for java based desktop application or use BMA Trade web portal for order execution or alternatively you may also call on +92 21 111 262 872 or drop email at bmatrade@bmacapital.com"
    },
    {
      question: "How can I Withdraw Funds and Shares",
      answer: "You can use your terminal and initiate payment request or email us or send a letter requesting payment against your account balance to BMA Trade Customer Support. Similarly in case of share transfer write letter to BMA Trade Customer Services and your shares will be transferred as per CDC regulatory framework upon you instructions"
    },
    {
      question: "How can Client contact Customer Services?",
      answer: "Clients residing either within or outside Pakistan can send an email at bmatrade@bmacapital.com detailing your query to us or by dialing +92 21 111 262 872 from outside Pakistan. Clients already have a CDC Investor’s A/C, what is the procedure to transfer shares from CDC Investor’s A/C to my BMA Trade  Account You will have to provide a CDC cheque (Transfer Order) in favor of  BMA Capital Management Limited”, our participant ID is 01826. Submit the cheque directly in the CDC and send us a copy of the cheque stating your BMA Trade user ID for follow up. As soon as your shares are received your BMA Trade account will be updated."
    },
    {
      question: "Can we have access to BMA Research?",
      answer: "Yes! BMA Trade clients can have direct access to BMA web research portal, as well as BMA emails its research and break outs to all clients on their registered email address."
    },
    {
      question: "Can my account be refused to be opened?",
      answer: "Yes, BMA Trade reserves the right to refuse any account without assigning any reason"
    }
  ];

  return (
    <section className="py-8" id="faqs">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-3xl"
        >
          Find answers to common questions about our services
        </motion.p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
