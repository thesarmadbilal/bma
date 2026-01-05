
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Users, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function QuestionCanvas() {
  const { toast } = useToast();

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
        />
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => toast({
            title: "Question Submitted",
            description: "Our experts will review your question soon."
          })}
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
