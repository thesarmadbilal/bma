
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/components/hero/services';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ServiceAssessment() {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  
  const questions = [
    {
      id: 'goal',
      question: 'What is your primary financial goal?',
      options: [
        { value: 'growth', label: 'Long-term wealth growth' },
        { value: 'income', label: 'Regular income generation' },
        { value: 'capital', label: 'Capital raising for business' },
        { value: 'trade', label: 'Active trading in markets' },
        { value: 'diversify', label: 'Diversification of investments' }
      ]
    },
    {
      id: 'timeframe',
      question: 'What is your investment timeframe?',
      options: [
        { value: 'short', label: 'Short-term (less than 1 year)' },
        { value: 'medium', label: 'Medium-term (1-5 years)' },
        { value: 'long', label: 'Long-term (more than 5 years)' }
      ]
    },
    {
      id: 'risk',
      question: 'How would you describe your risk tolerance?',
      options: [
        { value: 'low', label: 'Conservative - Minimal risk' },
        { value: 'moderate', label: 'Moderate - Balanced approach' },
        { value: 'high', label: 'Aggressive - Higher risk for higher returns' }
      ]
    },
    {
      id: 'experience',
      question: 'What is your level of investment experience?',
      options: [
        { value: 'beginner', label: 'Beginner - New to investing' },
        { value: 'intermediate', label: 'Intermediate - Some experience' },
        { value: 'advanced', label: 'Advanced - Experienced investor' }
      ]
    },
    {
      id: 'concern',
      question: 'What is your biggest financial concern?',
      options: [
        { value: 'returns', label: 'Maximizing returns' },
        { value: 'preservation', label: 'Capital preservation' },
        { value: 'tax', label: 'Tax efficiency' },
        { value: 'liquidity', label: 'Maintaining liquidity' },
        { value: 'inflation', label: 'Beating inflation' }
      ]
    }
  ];
  
  const currentQuestion = questions[step];
  
  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };
  
  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate results
      const recommendedServices = calculateRecommendations(answers);
      setResults(recommendedServices);
      setCompleted(true);
      
      toast({
        title: "Assessment Completed",
        description: "We've analyzed your needs and found suitable services",
      });
    }
  };
  
  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResults([]);
    setCompleted(false);
  };
  
  const calculateRecommendations = (userAnswers: Record<string, string>): string[] => {
    const recommendations: string[] = [];
    
    // Simple rule-based matching system
    if (userAnswers.goal === 'growth' || userAnswers.goal === 'income') {
      recommendations.push('investment-advisory');
    }
    
    if (userAnswers.goal === 'trade' || userAnswers.risk === 'high') {
      recommendations.push('equities');
    }
    
    if (userAnswers.goal === 'capital') {
      recommendations.push('investment-banking');
    }
    
    if (userAnswers.timeframe === 'short' && userAnswers.risk !== 'low') {
      recommendations.push('commodities');
    }
    
    if (userAnswers.experience === 'beginner') {
      recommendations.push('research');
    }
    
    if (userAnswers.concern === 'inflation' || userAnswers.concern === 'preservation') {
      recommendations.push('forex');
    }
    
    // Ensure we have at least 2 recommendations
    if (recommendations.length < 2) {
      if (!recommendations.includes('research')) {
        recommendations.push('research');
      }
      if (!recommendations.includes('investment-advisory') && recommendations.length < 2) {
        recommendations.push('investment-advisory');
      }
    }
    
    // Limit to 3 recommendations
    return recommendations.slice(0, 3);
  };
  
  const recommendedServices = results.map(id => 
    services.find(service => service.id === id)
  ).filter(Boolean);

  return (
    <section className="py-8" id="service-assessment">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Service Finder
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-3xl"
        >
          Answer a few questions to help us identify which of our services would best suit your needs
        </motion.p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Card className="w-full">
          {!completed ? (
            <>
              <CardHeader>
                <CardTitle>Question {step + 1} of {questions.length}</CardTitle>
                <CardDescription>
                  {currentQuestion.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={answers[currentQuestion.id] || ''}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option) => (
                    <div 
                      key={option.value}
                      className={`flex items-center space-x-2 rounded-lg border p-4 transition-all ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-primary bg-primary/5'
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <RadioGroupItem 
                        value={option.value} 
                        id={option.value} 
                      />
                      <Label 
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer font-medium"
                      >
                        {option.label}
                      </Label>
                      {answers[currentQuestion.id] === option.value && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => step > 0 && setStep(step - 1)}
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  className="gap-2"
                >
                  {step < questions.length - 1 ? 'Next' : 'Get Results'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle>Your Recommended Services</CardTitle>
                <CardDescription>
                  Based on your responses, we recommend the following services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recommendedServices.map((service, index) => service && (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="flex gap-4 p-4 border rounded-lg"
                    >
                      <div className="rounded-lg p-3 bg-primary/10 h-12 w-12 flex items-center justify-center shrink-0">
                        {React.createElement(service.icon, { className: "h-6 w-6 text-primary" })}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{service.title}</h3>
                        <p className="text-muted-foreground mt-1">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleReset} 
                  variant="outline" 
                  className="gap-2 w-full"
                >
                  <RefreshCw className="h-4 w-4" />
                  Start Over
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </section>
  );
}
