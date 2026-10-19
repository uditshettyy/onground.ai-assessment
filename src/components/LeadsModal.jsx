import { useState } from "react";
import { leads } from "../data/mock";
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

export default function LeadsModal({ idx, setIdx, onClose }) {
  const [openSignal, setOpenSignal] = useState(null);
  const lead = leads[idx];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 grid place-items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl w-full max-w-md p-5 shadow-xl" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-bold">Leads</h2>
            <p className="text-xs text-slate-500">Lead 2014 · Day 2 of 30</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 bg-slate-100 p-1 rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* Lead Info Card */}
        <div className="border rounded-lg p-3 mb-4 bg-white shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <div className="text-base font-bold text-amber-700 flex items-center gap-2">
              {lead.name} 
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-medium">
                {lead.status}
              </span>
            </div>
            <div className="text-sm font-bold text-slate-700">{lead.value}</div>
          </div>
          <div className="text-xs text-slate-500 flex gap-3">
            <span>{lead.phone}</span>
          </div>
        </div>

        {/* Scores */}
        <div className="space-y-3 mb-5">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1 text-slate-600">
              <span>ICP Fit</span><span className="text-amber-600">{lead.icp}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{width:`${lead.icp}%`}}/>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1 text-slate-600">
              <span>Lead Intent Score</span><span className="text-emerald-600">{lead.intent}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{width:`${lead.intent}%`}}/>
            </div>
          </div>
        </div>

        {/* Buying Signals (Collapsible) */}
        <div className="mb-5">
          <div className="text-xs font-bold text-slate-400 tracking-wider mb-2 uppercase">Where we picked up signals</div>
          {lead.signals.length === 0 ? (
            <div className="text-xs text-slate-400 italic">No signals recorded yet.</div>
          ) : (
            lead.signals.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-md mb-2 overflow-hidden">
                <button 
                  className="w-full text-left px-3 py-2 text-sm font-medium flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors" 
                  onClick={() => setOpenSignal(openSignal === i ? null : i)}
                >
                  <span>{s.t}</span>
                  {openSignal === i ? <ChevronUp size={16} className="text-slate-400"/> : <ChevronDown size={16} className="text-slate-400"/>}
                </button>
                {openSignal === i && (
                  <div className="px-3 py-2 text-xs text-slate-600 border-t border-slate-200 bg-white">
                    {s.d}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer Paging */}
        <div className="flex justify-between items-center pt-2 border-t">
          <button 
            disabled={idx === 0} 
            onClick={() => setIdx(idx - 1)} 
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft size={16}/> Prev
          </button>
          <span className="text-xs text-slate-400 font-medium">{idx + 1} of {leads.length}</span>
          <button 
            disabled={idx === leads.length - 1} 
            onClick={() => setIdx(idx + 1)} 
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded text-amber-600 hover:bg-amber-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            Next <ChevronRight size={16}/>
          </button>
        </div>

      </div>
    </div>
  );
}