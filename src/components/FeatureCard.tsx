
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="transition-all hover:shadow-md h-full">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
