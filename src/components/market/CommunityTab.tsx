import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  TrendingUp, Filter, CirclePlus, MessageCircle, 
  BookOpen, Star, ChevronRight, Users, Award 
} from 'lucide-react';

export function CommunityTab() {
  const { toast } = useToast();

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Impact of Energy Sector Reforms on KSE-100 Index',
      excerpt: 'Analysis of recent policy changes and their potential long-term effects on energy stocks.',
      author: 'Ahmed Khan',
      authorType: 'expert',
      date: 'April 22, 2025',
      readTime: '6 min read',
      topics: ['Energy', 'Policy'],
      rating: 4.8,
      votes: 127
    },
    {
      id: 2,
      title: 'Banking Sector Q1 Performance: Key Takeaways',
      excerpt: 'Comprehensive review of Q1 earnings reports from Pakistan\'s top 5 banks with future outlook.',
      author: 'Sara Ali',
      authorType: 'expert',
      date: 'April 18, 2025',
      readTime: '8 min read',
      topics: ['Banking', 'Earnings'],
      rating: 4.9,
      votes: 156
    },
    {
      id: 3,
      title: 'Cement Industry: Construction Boom or Temporary Surge?',
      excerpt: 'Evaluating the sustainability of recent growth in cement demand across Pakistan.',
      author: 'Farhan Ahmed',
      authorType: 'community',
      date: 'April 15, 2025',
      readTime: '5 min read',
      topics: ['Cement', 'Construction'],
      rating: 4.5,
      votes: 93
    },
    {
      id: 4,
      title: 'Tech IPOs: What to Expect in 2025',
      excerpt: 'Preview of upcoming technology listings and their potential market impact.',
      author: 'Sana Malik',
      authorType: 'community',
      date: 'April 10, 2025',
      readTime: '7 min read',
      topics: ['Technology', 'IPO'],
      rating: 4.6,
      votes: 112
    }
  ];

  // Trending topics data
  const trendingTopics = [
    { id: 1, name: 'Interest Rates', size: 'large', count: 245 },
    { id: 2, name: 'Inflation', size: 'large', count: 212 },
    { id: 3, name: 'Tech Stocks', size: 'medium', count: 178 },
    { id: 4, name: 'Banking', size: 'medium', count: 156 },
    { id: 5, name: 'Energy', size: 'medium', count: 143 },
    { id: 6, name: 'Privatization', size: 'small', count: 97 },
    { id: 7, name: 'Real Estate', size: 'small', count: 89 },
    { id: 8, name: 'IPOs', size: 'small', count: 76 },
    { id: 9, name: 'Cement', size: 'small', count: 68 },
    { id: 10, name: 'Dividends', size: 'xsmall', count: 54 }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">Community Pulse</h3>
          <p className="text-gray-300 mt-1">Insights and discussions from PSX investors and experts</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-white/20 hover:bg-white/10"
            onClick={() => toast({
              title: "Coming Soon",
              description: "Content contribution feature will be available next week."
            })}
          >
            <CirclePlus className="h-4 w-4" />
            Contribute
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-white/20 hover:bg-white/10"
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Content Navigation */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="bg-black/20 border border-white/10 p-1 mb-4">
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="expert">Expert Insights</TabsTrigger>
          <TabsTrigger value="community">Community Voices</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
        </TabsList>

        <TrendingTopicsSection topics={trendingTopics} />
        <BlogPostsGrid posts={blogPosts} />
        <QuestionCanvasSection onSubmit={(question) => toast({
          title: "Question Submitted",
          description: "Our experts will review your question soon."
        })} />
      </Tabs>
    </div>
  );
}

function TrendingTopicsSection({ topics }: { topics: any[] }) {
  return (
    <div className="bg-gray-900/30 rounded-lg p-4 mb-6">
      <div className="flex items-center mb-3">
        <TrendingUp className="h-4 w-4 text-primary mr-2" />
        <h4 className="text-white font-medium">Trending Topics</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map(topic => {
          let sizeClass = "text-xs px-2 py-1";
          let bgClass = "bg-white/10";
          
          if (topic.size === 'large') {
            sizeClass = "text-sm px-3 py-1.5 font-medium";
            bgClass = "bg-primary/20 hover:bg-primary/30";
          } else if (topic.size === 'medium') {
            sizeClass = "text-xs px-2.5 py-1.5";
            bgClass = "bg-blue-500/20 hover:bg-blue-500/30";
          } else if (topic.size === 'small') {
            sizeClass = "text-xs px-2 py-1";
            bgClass = "bg-gray-500/20 hover:bg-gray-500/30";
          } else {
            sizeClass = "text-[10px] px-1.5 py-0.5";
            bgClass = "bg-gray-600/20 hover:bg-gray-600/30";
          }
          
          return (
            <button 
              key={topic.id} 
              className={`rounded-full ${sizeClass} ${bgClass} text-white transition-all hover:scale-105`}
            >
              {topic.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BlogPostsGrid({ posts }: { posts: any[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map(post => (
        <Card 
          key={post.id} 
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
      ))}
    </div>
  );
}

function QuestionCanvasSection({ onSubmit }: { onSubmit: (question: string) => void }) {
  const [question, setQuestion] = React.useState('');

  const handleSubmit = () => {
    onSubmit(question);
    setQuestion('');
  };

  return (
    <div className="mt-8 bg-gradient-to-br from-blue-950/30 to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
      <div className="flex items-center mb-4">
        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
          <MessageCircle className="h-4 w-4 text-blue-400" />
        </div>
        <div>
          <h4 className="text-lg font-medium text-white">Question Canvas</h4>
          <p className="text-sm text-gray-300">Submit your investment questions for expert answers</p>
        </div>
      </div>
      
      <div className="mt-4 flex gap-3">
        <Input 
          placeholder="Ask a question about Pakistan Stock Exchange..."
          className="bg-black/20 border-white/10 text-white placeholder:text-gray-500"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      
      <div className="mt-6">
        <h5 className="text-sm font-medium text-white mb-3">Popular Questions</h5>
        <div className="space-y-3">
          <div className="bg-black/20 rounded-lg p-3 hover:bg-black/30 transition-colors cursor-pointer">
            <div className="flex justify-between">
              <p className="text-white text-sm">How will rising interest rates affect bank stocks in Q2?</p>
              <Badge className="bg-green-600/20 text-green-400 hover:bg-green-600/30">Answered</Badge>
            </div>
            <div className="flex items-center mt-2 text-xs text-gray-400">
              <Users className="h-3 w-3 mr-1" />
              <span>8 community answers</span>
              <span className="mx-2">•</span>
              <Award className="h-3 w-3 mr-1" />
              <span>Expert reviewed</span>
            </div>
          </div>
          
          <div className="bg-black/20 rounded-lg p-3 hover:bg-black/30 transition-colors cursor-pointer">
            <div className="flex justify-between">
              <p className="text-white text-sm">What sectors are likely to benefit from the new budget?</p>
              <Badge className="bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30">In Review</Badge>
            </div>
            <div className="flex items-center mt-2 text-xs text-gray-400">
              <Users className="h-3 w-3 mr-1" />
              <span>4 community answers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
