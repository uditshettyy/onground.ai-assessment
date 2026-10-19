import { missedCalls } from "../data/mock";
import { PhoneMissed } from "lucide-react";

export default function Incoming() {
  return (
    <div className="pb-10">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-slate-800">Incoming calls</h1>
        <p className="text-xs text-slate-500">Missed calls — call back immediately to capitalize on intent</p>
      </div>

      {/* Summary Banner */}
      <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full grid place-items-center">
          <PhoneMissed size={20} />
        </div>
        <div>
          <div className="text-lg font-bold text-red-700">{missedCalls.length} missed today</div>
          <div className="text-sm text-red-600/80 font-medium">₹12,100 expected value at stake</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {missedCalls.map((c) => (
          <div key={c.id} className="p-4 border-b border-slate-100 last:border-0 flex justify-between items-center hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold grid place-items-center text-xs">
                {c.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">{c.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{c.time} <span className="mx-1">·</span> Est. {c.value}</div>
              </div>
            </div>
            <button className="text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 px-4 py-1.5 rounded-lg transition-colors">
              Call back
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}