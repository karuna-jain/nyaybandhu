import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, X, Mic, Info, User, Bot } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface ChatMessage {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

let globalChatbotOpen = false;

const Chatbot: React.FC = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(globalChatbotOpen);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Namaste! I'm Nyaybandhu Assistant. How can I help you with legal information today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const location = useLocation();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setIsOpen(true);
        globalChatbotOpen = true;
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(globalChatbotOpen);
  }, [location.pathname]);

  useEffect(() => {
    globalChatbotOpen = isOpen;
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [messages, input]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setShowWelcome(false);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const response = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const botMessage: ChatMessage = {
        id: messages.length + 2,
        text: data.answer || "Sorry, I couldn't find an answer.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          text: "Error connecting to backend.",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceToggle = () => {
    if (!browserSupportsSpeechRecognition) {
      toast({
        title: "Not supported",
        description: "Your browser does not support speech recognition.",
        duration: 3000,
      });
      return;
    }
  
    if (!isRecording) {
      setIsRecording(true);
      resetTranscript();
      SpeechRecognition.startListening({ continuous: false });
  
      toast({
        title: "Voice recording started",
        description: "Speak now...",
        duration: 3000,
      });
    } else {
      SpeechRecognition.stopListening();
      setIsRecording(false);
  
      // Wait a bit to ensure transcript has finished updating
      setTimeout(() => {
        const trimmedTranscript = transcript.trim();
  
        if (trimmedTranscript) {
          toast({
            title: "Voice recorded",
            description: "Transcription added to input box.",
            duration: 3000,
          });
  
          setInput((prev) => prev + (prev ? ' ' : '') + trimmedTranscript);
          resetTranscript(); // Clear it for next recording
        } else {
          toast({
            title: "No speech detected",
            description: "Try again.",
            duration: 3000,
          });
        }
      }, 500); // <-- Delay gives time for transcript to finalize
    }
  };
  

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const quickQuestions = [
    "What are my fundamental rights?",
    "How do I file an RTI application?",
    "Tell me about IPC Section 498A",
    "What is the process for filing a consumer complaint?"
  ];

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window animate-scale-in">
          <div className="chatbot-header">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-india-blue mr-2">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Nyaybandhu Assistant</h3>
                <div className="text-[10px] flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 mr-1 animate-pulse"></span>
                  Online | AI-powered legal advisor
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:text-white/80">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="chatbot-messages">
            {showWelcome && messages.length === 1 && (
              <div className="welcome-screen mb-4 animate-fade-in">
                <div className="bg-gradient-to-r from-india-blue/10 to-india-blue/5 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-medium text-india-blue mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-1" /> About Nyaybandhu Assistant
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    I'm an AI-powered legal assistant that can help with information about Indian laws, 
                    legal procedures, and your rights. I support multiple languages including Hindi, 
                    English, Sindhi, and Konkani.
                  </p>
                </div>

                <h4 className="text-xs font-medium text-muted-foreground mb-2">Try asking about:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="text-xs justify-start h-auto py-2 border-india-blue/20 hover:bg-india-blue/5"
                      onClick={() => {
                        setInput(question);
                        handleSendMessage();
                      }}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message ${msg.sender} animate-fade-in`}>
                {msg.sender === 'bot' ? (
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-india-blue flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                      <Bot className="h-3 w-3" />
                    </div>
                    <div>{msg.text}</div>
                  </div>
                ) : (
                  <div className="flex items-start justify-end">
                    <div>{msg.text}</div>
                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 ml-2 mt-1 flex-shrink-0">
                      <User className="h-3 w-3" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-message bot typing">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-india-blue flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                    <Bot className="h-3 w-3" />
                  </div>
                  <span className="typing-animation"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <Textarea 
              ref={textareaRef}
              value={input}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything about Indian laws..." 
              className="chatbot-input"
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={handleVoiceToggle} variant="ghost" className="mic-button">
                  <Mic className={`h-5 w-5 ${isRecording ? 'text-red-500 animate-pulse' : ''}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                {isRecording ? "Stop recording" : "Start voice input"}
              </TooltipContent>
            </Tooltip>

            <Button onClick={handleSendMessage} className="send-button">
              <Send className="h-5 w-5" />
            </Button>
          </div>

        </div>
      ) : (
        <Button 
          variant="ghost" 
          size="icon" 
          className="chatbot-toggle floating-pulse" 
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
