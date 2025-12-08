import { useState, useRef, useEffect, FormEvent, ChangeEvent, FC } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: FC = () => {
  // Configure your Flowise chatbot here
  const FLOWISE_URL = process.env.REACT_APP_FLOWISE_URL || '';
  const FLOWISE_CHAT_ID = process.env.REACT_APP_FLOWISE_CHAT_ID || '';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hi! I'm Vince's portfolio assistant. Ask me about his skills, projects, education, or professional experience!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  const handleSend = async () => {
    if (!input.trim() || isStreaming) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev: Message[]) => [...prev, { role: 'user', content: userMessage }]);
    setIsStreaming(true);
    setStreamingMessage('');

    try {
      // Check if Flowise is configured
      if (!FLOWISE_URL || !FLOWISE_CHAT_ID) {
        setMessages((prev: Message[]) => [
          ...prev,
          {
            role: 'assistant',
            content: '⚙️ Chatbot is not configured yet. Please set up Flowise AI and configure the environment variables:\n\n- REACT_APP_FLOWISE_URL\n- REACT_APP_FLOWISE_CHAT_ID'
          }
        ]);
        setIsStreaming(false);
        return;
      }

      // Call Flowise API
      const response = await fetch(`${FLOWISE_URL}/api/v1/prediction/${FLOWISE_CHAT_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Flowise API error: ${response.statusText}`);
      }

      const data = await response.json();
      const assistantMessage = data.text || data.answer || 'Sorry, I could not process your request.';

      setMessages((prev: Message[]) => [...prev, { role: 'assistant', content: assistantMessage }]);
      setStreamingMessage('');
    } catch (error: any) {
      console.error('❌ Chatbot Error:', error);
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, something went wrong. ${error.message}`
        }
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-pop hover:bg-pop-dark text-primary p-4 rounded-full shadow-lg shadow-pop/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-primary border-2 border-pop/30 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-pop/10 border-b border-pop/30 px-6 py-4">
            <h3 className="text-secondary font-semibold flex items-center gap-2">
              <Bot size={20} className="text-pop" />
              Portfolio Assistant
            </h3>
            <p className="text-secondary/60 text-sm mt-1">
              Powered by AI
            </p>
          </div>

          {/* Messages */}
          <div className="h-96 bg-primary/50 p-4 overflow-y-auto">
            {messages.map((message: Message, index: number) => (
              <div
                key={index}
                className={`mb-4 flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-pop' : 'bg-pop/20'
                }`}>
                  {message.role === 'user' ? <User size={16} className="text-primary" /> : <Bot size={16} className="text-pop" />}
                </div>
                <div className={`max-w-[75%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-pop text-primary'
                    : 'bg-pop/10 border border-pop/30 text-secondary'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {streamingMessage && (
              <div className="mb-4 flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-pop/20">
                  <Bot size={16} className="text-pop" />
                </div>
                <div className="max-w-[75%] rounded-lg p-3 bg-pop/10 border border-pop/30 text-secondary">
                  <p className="text-sm whitespace-pre-wrap">{streamingMessage}</p>
                  <span className="inline-block w-2 h-4 bg-pop ml-1 animate-pulse"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-pop/30 p-4 bg-primary">
            <form
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                disabled={isStreaming}
                className="flex-1 bg-primary border border-pop/30 rounded-lg px-4 py-2 text-secondary placeholder-secondary/50 focus:outline-none focus:border-pop transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="bg-pop hover:bg-pop-dark disabled:bg-pop/50 text-primary p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
