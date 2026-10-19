import { recentCalls } from "../data/mock";
import { PhoneIncoming, PhoneOutgoing, PhoneMissed } from "lucide-react";

export default function Recent() {
  const getIcon = (type) => {
    if (type === "Incoming") return <PhoneIncoming size={16} className="text-emerald-500" />;
    if (type === "Outgoing") return <PhoneOutgoing size={16} className="text-blue-500" />;
    return <PhoneMissed size={16} className="text-red-500" />;
  };

  return (
    <div className="pb-10">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-slate-800">Recent calls</h1>
        <p className="text-xs text-slate-500">The last 5 calls made or received by you</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {recentCalls.map((c) => (
          <div key={c.id} className="p-4 border-b border-slate-100 last:border-0 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-100 grid place-items-center">
                {getIcon(c.type)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">{c.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{c.type} <span className="mx-1">·</span> {c.time}</div>
              </div>
            </div>
            <div className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
              {c.len}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}