import { useState } from "react";
import { Hash, Lock, Bot, ArrowRight, Sparkles } from "lucide-react";
import PulseChannel from "./PulseChannel"; // We will build this in the next part

export default function PulseHome() {
  const [openChannel, setOpenChannel] = useState(false);

  // If a channel is clicked, render the channel view instead
  if (openChannel) {
    return <PulseChannel onBack={() => setOpenChannel(false)} />;
  }

  const roleAgents = [
    { name: "cold-call-agent", members: 3, pct: 100, color: "bg-amber-500" },
    { name: "lead-conversion-agent", members: 2, pct: 80, color: "bg-emerald-500" },
    { name: "capture-agent", members: 2, pct: 70, color: "bg-blue-500" },
  ];

  return (
    <div className="pb-10 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          Pulse <Sparkles size={18} className="text-amber-500"/>
        </h1>
        <p className="text-xs text-slate-500">Your team's intelligence platform</p>
      </div>

      {/* AvaniBot Banner */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-5 text-white mb-6 shadow-md">
        <div className="flex items-center gap-2 mb-1">
          <Bot size={20} className="text-purple-200" />
          <h2 className="font-bold text-lg">AvaniBot</h2>
          <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded ml-2">AI</span>
        </div>
        <p className="text-sm text-purple-100 mb-4 max-w-lg">
          Good morning! The Sleep Company · Kananurga. You have 3 missed calls and 2 leads waiting for a callback.
        </p>
        <div className="flex gap-3">
          <button className="bg-white text-purple-700 text-xs font-bold px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            View Daily Brief
          </button>
          <button className="bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
            Ask a question
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Role Agents */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider mb-4 uppercase">
            <Lock size={14} /> Role Agents
          </div>
          <div className="space-y-4">
            {roleAgents.map(agent => (
              <div key={agent.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-bold text-slate-700"># {agent.name}</span>
                  <span className="text-[11px] font-medium text-slate-400">{agent.members} members</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${agent.color} rounded-full`} style={{width: `${agent.pct}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channels */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider mb-4 uppercase">
            <Hash size={14} /> Channels
          </div>
          <div className="space-y-1">
            <button 
              onClick={() => setOpenChannel(true)}
              className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-amber-50 text-slate-700 hover:text-amber-700 transition-colors group"
            >
              <div className="flex items-center gap-2 text-sm font-bold">
                <Hash size={16} className="text-slate-400 group-hover:text-amber-500" /> 
                inside-sales-team
              </div>
              <ArrowRight size={16} className="text-slate-300 group-hover:text-amber-500" />
            </button>
            <button className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors group">
              <div className="flex items-center gap-2 text-sm font-bold">
                <Hash size={16} className="text-slate-400" /> 
                customer-discussions
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}