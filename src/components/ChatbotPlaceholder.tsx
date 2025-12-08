import { useState, FC } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatbotPlaceholder: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-pop hover:bg-pop-dark text-primary p-4 rounded-full shadow-lg shadow-pop/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-primary border-2 border-pop/30 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-pop/10 border-b border-pop/30 px-6 py-4">
            <h3 className="text-secondary font-semibold flex items-center gap-2">
              <MessageCircle size={20} className="text-pop" />
              Portfolio Assistant
            </h3>
            <p className="text-secondary/60 text-sm mt-1">
              Ask me about skills, projects, or education
            </p>
          </div>

          {/* Chat Area */}
          <div className="h-96 bg-primary/50 p-4 overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-pop/10 border border-pop/30 rounded-lg p-4 text-secondary">
                <p className="text-sm">
                  👋 Hi! I'm your portfolio assistant. I can answer questions about:
                </p>
                <ul className="text-sm mt-2 space-y-1 text-secondary/80">
                  <li>• Technical skills and expertise</li>
                  <li>• Featured projects and tech stacks</li>
                  <li>• Education and certifications</li>
                  <li>• Professional experience</li>
                </ul>
              </div>
            </div>

            {/* Placeholder for AI integration */}
            <div className="text-center py-8 text-secondary/50 text-sm">
              <p>AI chatbot will be integrated here</p>
              <p className="mt-2">Ready for Youware AI SDK integration</p>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-pop/30 p-4 bg-primary">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // AI integration will handle this
                console.log('Message:', message);
                setMessage('');
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about my portfolio..."
                className="flex-1 bg-primary border border-pop/30 rounded-lg px-4 py-2 text-secondary placeholder-secondary/50 focus:outline-none focus:border-pop transition-colors"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-pop hover:bg-pop-dark disabled:bg-pop/50 text-primary p-2 rounded-lg transition-colors"
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

export default ChatbotPlaceholder;
