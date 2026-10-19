import { useState } from "react";
import { initialChatMessages } from "../data/mock";
import { ChevronLeft, Hash, Send } from "lucide-react";

export default function PulseChannel({ onBack }) {
  const [msgs, setMsgs] = useState(initialChatMessages);
  const [text, setText] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleSend = () => {
    if (!text.trim()) return;
    const newMsg = {
      id: Date.now(),
      from: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: text
    };
    setMsgs([...msgs, newMsg]);
    setText("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200 shrink-0">
        <button onClick={onBack} className="p-1 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
          <ChevronLeft size={20} />
        </button>
        <div>
          <div className="text-lg font-bold text-slate-800 flex items-center gap-1">
            <Hash size={18} className="text-slate-400"/> inside-sales-team
          </div>
          <div className="text-xs text-slate-500 font-medium">3 members</div>
        </div>
      </div>

      {/* Needs Your Input Card */}
      <div className="py-4 shrink-0">
        {!confirmed ? (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
            <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1">Needs your input</div>
            <div className="text-sm font-bold text-slate-800 mb-3">Confirm the 1:30pm callback</div>
            
            {!showReplyBox ? (
              <div className="flex gap-2">
                <button 
                  onClick={() => setConfirmed(true)} 
                  className="text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-1.5 rounded-lg transition-colors"
                >
                  Confirm
                </button>
                <button className="text-xs bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-4 py-1.5 rounded-lg transition-colors">
                  Reschedule
                </button>
                <button onClick={() => setShowReplyBox(true)} className="text-xs text-slate-400 hover:text-slate-600 font-medium ml-2 underline">
                  Type a reply
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input 
                  autoFocus
                  placeholder="Type your reply..."
                  className="flex-1 text-sm border border-amber-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500 bg-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') { setConfirmed(true); setShowReplyBox(false); }
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm font-bold text-emerald-700 flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            Callback confirmed for 1:30pm
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4 pr-2">
        {msgs.map((m) => (
          <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-2.5 ${
              m.from === "me" 
                ? "bg-emerald-600 text-white rounded-br-sm" 
                : "bg-white border border-slate-200 text-slate-800 rounded-bl-sm shadow-sm"
            }`}>
              <div className={`text-[10px] font-bold mb-0.5 ${m.from === "me" ? "text-emerald-200" : "text-slate-400"}`}>
                {m.from === "me" ? "You" : m.from} · {m.time}
              </div>
              <div className="text-sm leading-relaxed">{m.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="shrink-0 pt-2">
        <div className="flex gap-2 bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400 transition-all">
          <input 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Message #inside-sales-team" 
            className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none text-slate-700 placeholder-slate-400" 
          />
          <button 
            onClick={handleSend} 
            disabled={!text.trim()}
            className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:hover:bg-amber-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}