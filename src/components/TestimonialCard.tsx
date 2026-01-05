
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  avatar?: string;
  initials: string;
}

export function TestimonialCard({ content, author, role, avatar, initials }: TestimonialProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="relative">
            <svg className="absolute -top-6 -left-2 w-10 h-10 text-primary/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <p className="text-muted-foreground mb-3 pl-5">{content}</p>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              {avatar && <AvatarImage src={avatar} alt={author} />}
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
