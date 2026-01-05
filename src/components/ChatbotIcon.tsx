
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Paperclip, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { usePSXData, formatPrice } from '@/services/psx-data';

// Define message types
interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatbotIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      content: "Hello! I'm BMA's AI assistant. How can I help you with your investments today?", 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { theme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { indices } = usePSXData();

  // Get KSE-100 index or use fallback
  const kse100 = indices.find(i => i.name === 'KSE-100');
  const indexValue = kse100?.current || 79852.64;
  const indexChange = kse100?.change || 423.75;
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (minimized) setMinimized(false);
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        content: inputValue,
        sender: 'user' as const,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);
      
      // Simulate bot response after delay
      setTimeout(() => {
        let responseContent = "Thank you for your question. I'll help you with that. Is there anything specific about BMA investments you'd like to know?";
        
        // Custom responses based on keywords
        const lowercaseInput = inputValue.toLowerCase();
        if (lowercaseInput.includes('kse') || lowercaseInput.includes('index')) {
          responseContent = `The KSE-100 index is currently at ${formatPrice(indexValue)} with a change of ${indexChange >= 0 ? '+' : ''}${indexChange.toFixed(2)} today. Would you like more detailed market analysis?`;
        } else if (lowercaseInput.includes('account') || lowercaseInput.includes('open') || lowercaseInput.includes('trade')) {
          responseContent = "To open a trading account with BMA Capital, you'll need to complete our online application form. Would you like me to guide you through the process?";
        } else if (lowercaseInput.includes('stock') || lowercaseInput.includes('share')) {
          responseContent = "BMA Capital offers comprehensive stock trading services with advanced research tools. Which stocks are you interested in?";
        }
        
        const botMessage = {
          id: messages.length + 2,
          content: responseContent,
          sender: 'bot' as const, 
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div 
          className={`
            ${theme === 'dark' ? 'bg-card border-border/40' : 'bg-white border-gray-200'} 
            rounded-2xl shadow-xl w-[380px] max-w-[calc(100vw-3rem)] 
            ${minimized ? 'h-[72px]' : 'h-[500px] max-h-[calc(100vh-6rem)]'}
            flex flex-col overflow-hidden border transition-all duration-300 ease-in-out
            animate-fade-in backdrop-blur-md
          `}
        >
          <div className={`flex items-center justify-between px-4 py-3 border-b ${theme === 'dark' ? 'border-border/30' : 'border-gray-100'}`}>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/lovable-uploads/91f00e51-1eb2-4c7a-b09f-27fff1525b21.png" alt="BMA Logo" />
                <AvatarFallback className="bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">BMA Investment Assistant</h3>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <div className="flex">
              <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-8 w-8">
                {minimized ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {!minimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto scrollbar-none">
                {/* Market info card */}
                <div className={`mb-4 p-3 rounded-lg ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50'} border border-border/30`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium">PSX Live</span>
                    </div>
                    <div className={`text-xs px-1.5 py-0.5 rounded-full ${indexChange >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                      {indexChange >= 0 ? '+' : ''}{indexChange.toFixed(2)}%
                    </div>
                  </div>
                  <div className="text-sm font-medium mt-1">KSE-100: {formatPrice(indexValue)}</div>
                </div>
                
                {/* Chat messages */}
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'bot' && (
                        <Avatar className="h-6 w-6 mr-2 mt-1 flex-shrink-0">
                          <AvatarImage src="/lovable-uploads/91f00e51-1eb2-4c7a-b09f-27fff1525b21.png" alt="BMA Assistant" />
                          <AvatarFallback className="bg-primary/10">
                            <Bot className="h-3 w-3 text-primary" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div 
                        className={`${
                          message.sender === 'user' 
                            ? `${theme === 'dark' ? 'bg-primary text-white' : 'bg-primary text-white'} rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl`
                            : `${theme === 'dark' ? 'bg-muted' : 'bg-gray-100'} rounded-tr-2xl rounded-br-2xl rounded-tl-2xl`
                        } p-3 max-w-[70%] text-sm animate-fade-in`}
                      >
                        {message.content}
                        <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      
                      {message.sender === 'user' && (
                        <Avatar className="h-6 w-6 ml-2 mt-1 flex-shrink-0">
                          <AvatarFallback className="bg-gray-800/50">
                            <User className="h-3 w-3" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 flex-shrink-0">
                        <AvatarImage src="/lovable-uploads/91f00e51-1eb2-4c7a-b09f-27fff1525b21.png" alt="BMA Assistant" />
                        <AvatarFallback className="bg-primary/10">
                          <Bot className="h-3 w-3 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className={`${theme === 'dark' ? 'bg-muted' : 'bg-gray-100'} p-3 rounded-full`}>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className={`p-4 border-t ${theme === 'dark' ? 'border-border/30' : 'border-gray-100'}`}>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Textarea 
                    placeholder="Ask about market trends, stocks, or account opening..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className={`min-h-[2.5rem] max-h-[6rem] resize-none py-2 ${theme === 'dark' ? 'bg-muted/50' : 'bg-gray-50'}`}
                  />
                  <Button 
                    size="icon" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full h-8 w-8"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-muted-foreground">Powered by BMA Capital</span>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <Button 
          onClick={toggleChat}
          size="icon" 
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 animate-scale-in"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat assistant</span>
          <div className="absolute -inset-1 rounded-full bg-primary opacity-30 animate-ping"></div>
          <div className="absolute -inset-1 rounded-full bg-primary opacity-0 animate-ping [animation-delay:300ms]"></div>
        </Button>
      )}
    </div>
  );
}
