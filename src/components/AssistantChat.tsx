import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export const AssistantChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: "Hello! I am your VeriGrant Compliance & Policy Assistant—the self-service chatbot specified in your canvas. How can I help you with grant covenants, agency disbursements, or SGX sustainability reporting today?",
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'What expenses are eligible under the Enterprise Development Grant (EDG)?',
    'How does milestone verification trigger agency disbursement?',
    'What are the mandatory SGX Core 27 climate reporting disclosures?',
    'How does VeriGrant prevent duplicate invoice errors with accounting subledgers?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Simulate intelligent domain response
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (lower.includes('edg') || lower.includes('eligible') || lower.includes('expense')) {
        reply = `Under Enterprise Singapore EDG covenants, eligible expenses generally cover qualifying hardware/software licensing, certified external consultancy fees, and direct project manpower. Ineligible expenses include routine operating overhead, sales commissions, standard rent, and taxes (GST). VeriGrant's rules engine automatically flags any invoice item classified outside qualifying grant categories prior to claim submission.`;
      } else if (lower.includes('disbursement') || lower.includes('milestone') || lower.includes('agency')) {
        reply = `Disbursement is accelerated through our synchronous audit pipeline: Once you attach the verified deliverable (e.g. calibration memo, independent assurance statement), the statutory board desk reviewer is notified immediately. Upon verification approval, claim packets are compiled in the standardized format, cutting reimbursement turnaround from 45 days down to 3-5 business days.`;
      } else if (lower.includes('sgx') || lower.includes('sustainability') || lower.includes('climate') || lower.includes('esg')) {
        reply = `SGX Rule 711B requires listed issuers to report on the SGX Core 27 ESG metrics on a 'comply or explain' basis, with phased mandatory climate reporting aligned to ISSB S2. Key required metrics include Scope 1 & 2 GHG emissions, total energy consumption, board diversity ratio, and employee safety rates. VeriGrant directly attributes grant-funded investments (such as solar or industrial telemetry) to your reported emissions reduction.`;
      } else if (lower.includes('error') || lower.includes('accounting') || lower.includes('xero') || lower.includes('sap')) {
        reply = `To eliminate human error, VeriGrant establishes a two-way synchronization bridge with your general ledger (Xero, SAP, NetSuite, QuickBooks). It runs cryptographic hash checks on vendor invoice numbers, dates, and amounts to prevent duplicate billing, validates currency exchange rates against MAS daily feeds, and reconciles milestone drawdowns with actual cash disbursements.`;
      } else {
        reply = `Thank you for your question. VeriGrant's consolidated architecture automates grant tracking, deliverables verification, and SGX sustainability disclosures. You can record deliverables directly in the Grant Ledger tab or generate a board brief in the SGX ESG Studio. Would you like assistance reviewing an active grant covenant?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col h-[600px]">
      {/* Assistant Header */}
      <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold">VeriGrant Self-Service Co-Pilot</div>
            <div className="text-[11px] text-slate-300">
              Grant Covenants · Agency Guidelines · SGX Core 27 Disclosures
            </div>
          </div>
        </div>

        <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
          Knowledge Base Active
        </span>
      </div>

      {/* Quick Prompts Bar */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto flex items-center gap-2 text-xs">
        <span className="text-slate-400 shrink-0 font-medium flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5" />
          Suggested:
        </span>
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md whitespace-nowrap shrink-0 transition-colors text-[11px] cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/40">
        {messages.map((m) => {
          const isUser = m.sender === 'user';

          return (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  isUser
                    ? 'bg-slate-900 text-white'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-xl p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-slate-900 text-white rounded-tr-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs'
                }`}
              >
                <p className="whitespace-pre-line">{m.text}</p>
                <div
                  className={`text-[10px] mt-1.5 font-mono ${
                    isUser ? 'text-slate-400' : 'text-slate-400'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic py-1">
            <Bot className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>Consulting SGX rulebook and grant audit covenants...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask about grant eligibility, milestone verification, SGX Core 27, or accounting sync..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 text-xs sm:text-sm border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 bg-slate-900 hover:bg-emerald-600 disabled:opacity-40 text-white rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
