
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, MessageCircle, BookOpen, Star } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorType: 'expert' | 'community';
  date: string;
  readTime: string;
  topics: string[];
  rating: number;
  votes: number;
}

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <Card 
      className={`bg-gradient-to-br ${post.authorType === 'expert' ? 'from-primary/5 to-primary/10' : 'from-blue-500/5 to-blue-500/10'} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:shadow-lg overflow-hidden`}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge 
            variant={post.authorType === 'expert' ? "default" : "secondary"}
            className={post.authorType === 'expert' ? "bg-primary/20 hover:bg-primary/30 text-primary" : "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"}
          >
            {post.authorType === 'expert' ? 'Expert Insight' : 'Community Voice'}
          </Badge>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            <span>{post.rating}</span>
            <span className="text-gray-500">({post.votes})</span>
          </div>
        </div>
        <CardTitle className="text-xl mt-2 hover:text-primary transition-colors">
          <a href="#">{post.title}</a>
        </CardTitle>
        <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-gray-300">{post.excerpt}</p>
        <div className="flex gap-2 mt-3">
          {post.topics.map((topic, idx) => (
            <Badge key={idx} variant="outline" className="bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <Button variant="ghost" size="sm" className="text-primary">
          Read More <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white">
            <MessageCircle className="h-4 w-4" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <BookOpen className="h-4 w-4" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
