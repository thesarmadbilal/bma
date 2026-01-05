
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: number;
  title: string;
  preview: string;
  author: string;
  readTime: string;
  category: string;
  date: string;
}

export function BlogsTab() {
  const { toast } = useToast();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Evolution of Pakistan's Capital Markets",
      preview: "An in-depth look at how Pakistan's financial markets have transformed over the decades...",
      author: "Sarah Ahmed",
      readTime: "8 min read",
      category: "Market Analysis",
      date: "April 23, 2025"
    },
    {
      id: 2,
      title: "ESG Investing: A New Frontier",
      preview: "Understanding the rise of sustainable investing in Pakistan's market context...",
      author: "Zain Abbas",
      readTime: "6 min read",
      category: "Sustainable Finance",
      date: "April 21, 2025"
    },
    {
      id: 3,
      title: "Tech Sector: The Next Big Thing?",
      preview: "Analyzing the potential of Pakistan's growing technology sector...",
      author: "Ayesha Khan",
      readTime: "5 min read",
      category: "Sector Analysis",
      date: "April 19, 2025"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold">Latest Insights</h3>
          <p className="text-muted-foreground">Expert analysis and market perspectives</p>
        </div>
        <Button variant="outline" className="hidden md:flex">
          View All Posts
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              
              <h4 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h4>
              
              <p className="text-muted-foreground mb-4">
                {post.preview}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{post.author}</span>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => toast({
                    title: "Premium Content",
                    description: "Please sign in to read the full article."
                  })}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
