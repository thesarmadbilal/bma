
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
}

export function PricingCard({ name, description, price, popular, features, buttonText }: PricingCardProps) {
  return (
    <Card className={`flex flex-col transition-all ${popular ? "border-primary shadow-lg" : ""} h-full`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-sm mt-2">{description}</CardDescription>
          </div>
          {popular && (
            <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
              Popular
            </span>
          )}
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? "" : "variant-outline"}`}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
