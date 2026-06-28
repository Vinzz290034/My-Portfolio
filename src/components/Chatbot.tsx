import { useState, useRef, useEffect, FormEvent, ChangeEvent, FC } from 'react';
import { MessageCircle, X, Send, Bot, User, RotateCcw } from 'lucide-react';
import { personalInfo, skills, certifications, projects } from '../data/mockData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: FC = () => {
  const FLOWISE_URL = import.meta.env.VITE_API_HOST || '';
  const FLOWISE_CHAT_ID = import.meta.env.VITE_FLOWISE_CHAT_ID || '';

  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState(() => Math.random().toString(36).substring(2, 15));
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hi! I'm Vince's portfolio assistant. Ask me about my skills, projects, education, or professional experience!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: "👋 Hi! I'm Vince's portfolio assistant. Ask me about my skills, projects, education, or professional experience!"
      }
    ]);
    setInput('');
    // Generate new sessionId to start a fresh thread in Flowise
    setSessionId(Math.random().toString(36).substring(2, 15));
  };

  // Local fallback response generator if Flowise is offline or not configured
  const getLocalAnswer = (question: string): string => {
    const q = question.toLowerCase();

    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('greet')) {
      return "Hello! I'm Vince's AI assistant. How can I help you explore his portfolio today?";
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('app')) {
      const projectList = projects.map(p => `• **${p.title}** - ${p.description.slice(0, 100)}...`).join('\n\n');
      return `Vince has built several key projects:\n\n${projectList}\n\nFeel free to check out the details in the Projects section above!`;
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('framework') || q.includes('database') || q.includes('tool')) {
      // Group skills by category
      const languagesList = skills.filter(s => s.category === 'languages').map(s => s.name).join(', ');
      const frameworksList = skills.filter(s => s.category === 'frameworks').map(s => s.name).join(', ');
      const platformsList = skills.filter(s => s.category === 'platforms').map(s => s.name).join(', ');
      const practicesList = skills.filter(s => s.category === 'practices').map(s => s.name).join(', ');

      return `Vince's technical skillset includes:\n\n` +
        `• **Languages**: ${languagesList}\n` +
        `• **Frameworks & Libraries**: ${frameworksList}\n` +
        `• **Platforms & Tools**: ${platformsList}\n` +
        `• **Practices & Concepts**: ${practicesList}`;
    }

    if (q.includes('cert') || q.includes('cisco') || q.includes('ccna') || q.includes('cyber')) {
      const certList = certifications.map(c => `• **${c.name}** issued by *${c.issuer}* (${c.date})`).join('\n');
      return `Vince holds the following verified certifications:\n\n${certList}\n\nPDF certificates are viewable directly in the Education section!`;
    }

    if (q.includes('education') || q.includes('college') || q.includes('study') || q.includes('graduate') || q.includes('school')) {
      return `Vince graduated with a **Bachelor of Science in Information Technology** from the **University of Cebu Main Campus** on June 9, 2026.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('social') || q.includes('facebook') || q.includes('github') || q.includes('hire')) {
      return `You can reach Vince at:\n\n` +
        `• **Email**: ${personalInfo.email}\n` +
        `• **Phone**: 09695345084\n` +
        `• **Location**: ${personalInfo.location}\n\n` +
        `You can also find his GitHub and Facebook links in the Contact section!`;
    }

    return "I can answer questions about Vince's projects, technical skills, certifications, education, and contact details. Ask me about any of those topics!";
  };

  const handleSend = async () => {
    if (!input.trim() || isStreaming) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsStreaming(true);

    try {
      // If Flowise isn't configured, immediately use local mock
      if (!FLOWISE_URL || !FLOWISE_CHAT_ID) {
        // Add a slight artificial delay for realism
        setTimeout(() => {
          const localAnswer = getLocalAnswer(userMessage);
          setMessages((prev) => [...prev, { role: 'assistant', content: localAnswer }]);
          setIsStreaming(false);
        }, 600);
        return;
      }

      const username = import.meta.env.VITE_FLOWISE_USERNAME || '';
      const password = import.meta.env.VITE_FLOWISE_PASSWORD || '';

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (username && password) {
        headers['Authorization'] = `Basic ${btoa(`${username}:${password}`)}`;
      }

      // Call Flowise API
      const response = await fetch(`${FLOWISE_URL}/api/v1/prediction/${FLOWISE_CHAT_ID}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          question: userMessage,
          overrideConfig: {
            sessionId: sessionId,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Flowise API error: ${response.statusText}`);
      }

      const data = await response.json();
      const assistantMessage = data.text || data.answer || 'Sorry, I could not process your request.';

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error: any) {
      console.error('❌ Chatbot Error:', error);
      // Fallback to local response instead of showing error message
      const localAnswer = getLocalAnswer(userMessage);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `${localAnswer}\n\n*(Offline Mode: Flowise connection failed)*`
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
        className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-white p-4 rounded-full shadow-lg shadow-accent/40 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Toggle chatbot"
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}>
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-chat-window">
          {/* Header */}
          <div className="bg-accent text-white px-6 py-4 flex-shrink-0 flex items-center justify-between">
            <div>
              <h3 className="font-semibold flex items-center gap-2 text-base">
                <Bot size={20} />
                Portfolio Assistant
              </h3>
              <p className="text-accent-soft/80 text-xs mt-1">
                Ask me anything about Vince
              </p>
            </div>
            {messages.length > 1 && (
              <button
                onClick={handleReset}
                title="Start Over"
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/90 hover:text-white"
                aria-label="Start over conversation"
              >
                <RotateCcw size={16} />
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 bg-bg/40 p-4 overflow-y-auto flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-accent text-white' : 'bg-accent-soft text-accent'
                }`}>
                  {message.role === 'user' ? <User size={15} /> : <Bot size={15} />}
                </div>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                  message.role === 'user'
                    ? 'bg-accent text-white rounded-tr-none'
                    : 'bg-surface border border-border text-ink rounded-tl-none shadow-sm'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {isStreaming && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-accent-soft text-accent">
                  <Bot size={15} />
                </div>
                <div className="max-w-[75%] rounded-2xl px-4 py-2.5 bg-surface border border-border text-ink rounded-tl-none shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce delay-75" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce delay-150" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce delay-300" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 bg-surface flex-shrink-0">
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
                className="flex-1 bg-bg border border-border rounded-xl px-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="bg-accent hover:bg-accent-hover disabled:bg-accent/40 text-white p-2.5 rounded-xl transition-colors disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
