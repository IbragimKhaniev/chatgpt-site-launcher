import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createRequest } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

const Builder = () => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [preview, setPreview] = useState<string>('');

  const handleSend = async () => {
    if (!input.trim() || !siteId) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');

    try {
      const response = await createRequest({
        description: input,
        siteId: siteId
      });

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response.content 
      }]);

      setPreview(response.content);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process your request. Please try again.",
      });
    }
  };

  return (
    <div className="h-screen w-full">
      <ResizablePanelGroup direction="horizontal">
        {/* Demo Panel */}
        <ResizablePanel defaultSize={50}>
          <div className="h-full w-full p-6">
            <Card className="h-full w-full glass">
              <div className="p-4">
                {preview ? (
                  <div dangerouslySetInnerHTML={{ __html: preview }} />
                ) : (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Demo Panel</h2>
                    <p>Your preview will appear here</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Chat Panel */}
        <ResizablePanel defaultSize={50}>
          <div className="h-full flex flex-col">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">Chat with AI</h2>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-12'
                        : 'bg-muted mr-12'
                    }`}
                  >
                    {message.content}
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Builder;