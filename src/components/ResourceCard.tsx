
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type ResourceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  buttonLink: string;
}

export function ResourceCard({ title, description, icon: Icon, buttonText, buttonLink }: ResourceCardProps) {
  return (
    <Card className="transition-all hover:shadow-md h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
