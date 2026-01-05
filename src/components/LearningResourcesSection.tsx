
import React from 'react';
import { ResourceCard } from './ResourceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  BookOpen, 
  Video,
  FileText, 
  BarChart, 
  Users, 
  Calendar
} from 'lucide-react';

export function LearningResourcesSection() {
  const courses = [
    {
      title: "Trading Fundamentals",
      description: "Master the basics of trading in Pakistan's stock market with our comprehensive beginner course.",
      icon: BookOpen,
      buttonText: "Start Learning",
      buttonLink: "https://knowledgecenter.psx.com.pk/"
    },
    {
      title: "Technical Analysis",
      description: "Learn how to read charts, identify patterns and make data-driven trading decisions.",
      icon: BarChart,
      buttonText: "Explore Course",
      buttonLink: "https://knowledgecenter.psx.com.pk/"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides on platform features, technical analysis, and trading strategies.",
      icon: Video,
      buttonText: "Watch Videos",
      buttonLink: "https://www.youtube.com/playlist?list=PLeRl8yuPsT6LN8RBq0IkBHGW32q2LxmTY&si=gIDbRm34_Yn90lj6"
    }
  ];
  
  const resources = [
    {
      title: "Market Research Reports",
      description: "Daily market insights, analysis reports, and stock recommendations from our expert analysts.",
      icon: FileText,
      buttonText: "Read Research",
      buttonLink: "mailto:research@bmacapital.com"
    },
    {
      title: "Trading Community",
      description: "Join discussions with fellow traders, share ideas, and learn from others' experiences.",
      icon: Users,
      buttonText: "Join Community",
      buttonLink: "https://chat.whatsapp.com/EHoUzna1nxULnyo71OZnMe"
    },
    // {
    //   title: "Upcoming Webinars",
    //   description: "Live sessions with market experts covering timely topics and trading strategies.",
    //   icon: Calendar,
    //   buttonText: "Register Now",
    //   buttonLink: "#"
    // }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Learn to Trade Like a Pro</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Access our comprehensive educational resources designed for traders of all levels
          </p>
        </div>
        
        <Tabs defaultValue="courses" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="courses">Courses & Tutorials</TabsTrigger>
              <TabsTrigger value="resources">Market Resources</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="courses" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <ResourceCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  icon={course.icon}
                  buttonText={course.buttonText}
                  buttonLink={course.buttonLink}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  buttonText={resource.buttonText}
                  buttonLink={resource.buttonLink}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 p-6 rounded-xl border border-red-600/30 bg-red-600/5 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to start your learning journey?</h3>
              <p className="text-muted-foreground">Create a free account to access all our educational resources.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition-all" onClick={() => window.open('https://aof.bmatrade.com/', '_blank')}>
                Sign Up Free
              </button>
              {/* <button className="px-6 py-2 bg-red-600 text-white hover:bg-red-700 rounded-full transition-all" onClick={() => window.open('https://aof.bmatrade.com/', '_blank')}>
                View All Media
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
