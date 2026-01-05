
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from '@/components/business/QuoteIcon';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ClientStories() {
  const stories = [
    {
      id: 'story1',
      quote: "BMA Capital's equities team provided exceptional guidance that helped us navigate market volatility with confidence.",
      client: "Investment Corporation Ltd",
      position: "Director of Investments",
      service: "Equities"
    },
    {
      id: 'story2',
      quote: "The investment banking team at BMA Capital was instrumental in our successful IPO. Their strategic advice and execution were flawless.",
      client: "Tech Solutions Pakistan",
      position: "CEO",
      service: "Investment Banking"
    },
    {
      id: 'story3',
      quote: "BMA's research reports have consistently provided us with valuable insights that inform our investment decisions.",
      client: "National Pension Fund",
      position: "Portfolio Manager",
      service: "Research"
    },
    {
      id: 'story4',
      quote: "Their commodity trading platform and expert guidance have helped us hedge effectively against market fluctuations.",
      client: "Agricultural Exports Co.",
      position: "Chief Financial Officer",
      service: "Commodities"
    },
    {
      id: 'story5',
      quote: "The personalized investment advisory services have been pivotal in optimizing our portfolio for long-term growth.",
      client: "Family Office Services",
      position: "Wealth Manager",
      service: "Investment Advisory"
    }
  ];

  return (
    <section className="py-8" id="client-stories">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Client Success Stories
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-3xl"
        >
          See how our services have made a difference for our clients across different sectors
        </motion.p>
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4 px-1">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[350px] flex-shrink-0"
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <QuoteIcon className="h-10 w-10 text-primary/20" />
                  </div>
                  <blockquote className="text-lg mb-6">
                    "{story.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{story.client}</div>
                    <div className="text-sm text-muted-foreground">{story.position}</div>
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {story.service}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}
