import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Paperclip, MoreHorizontal, User, Phone } from 'lucide-react';

const SideChatBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  // Sample messages
  const messages = [
    { id: 1, text: "Hello! How can we assist you today?", sender: "bot", time: "10:30 AM" },
    { id: 2, text: "I'd like to book an appointment with a general practitioner.", sender: "user", time: "10:31 AM" },
    { id: 3, text: "Sure! I can help with that. Which hospital do you prefer?", sender: "bot", time: "10:32 AM" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Toggle Button + "Chat with me" label */}
      <div className="relative flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="relative bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl hidden md:block"
            >
              Chat with me
              {/* Triangle tip for the bubble */}
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
            isOpen ? 'bg-gray-100 text-gray-800 rotate-90' : 'bg-brand-600 text-white hover:scale-110 active:scale-95'
          }`}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-white backdrop-blur-xl shadow-2xl flex flex-col border-l border-brand-100"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-50 flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center overflow-hidden border-2 border-brand-100">
                    <User size={24} className="text-brand-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 tracking-tight">AfyaCare Support</h3>
                  <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Online & Ready</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                  <Phone size={18} />
                </button>
                <button
                  onClick={toggleChat}
                  className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-brand-600 text-white rounded-tr-none shadow-premium'
                        : 'bg-slate-100 text-slate-800 rounded-tl-none'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <p className={`text-[10px] mt-1 opacity-70 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Input Area */}
            <div className="p-6 bg-white border-t border-brand-50 backdrop-blur-md mb-2">
              <div className="flex items-center gap-2">
                <button className="p-2.5 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors">
                  <Paperclip size={20} />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    className="w-full bg-slate-100 border-none rounded-2xl py-3 px-4 pr-12 text-sm focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-slate-800"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-600 text-white rounded-xl flex items-center justify-center hover:bg-brand-700 transition-all shadow-sm">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideChatBoard;
