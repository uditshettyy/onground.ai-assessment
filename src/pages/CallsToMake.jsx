import { useState } from "react";
import { leads } from "../data/mock";
import { ChevronDown, ChevronUp, Phone, ChevronLeft, ChevronRight } from "lucide-react";

export default function CallsToMake() {
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState(null);
  
  const perPage = 3; // Show 3 leads per page
  const slice = leads.slice(page * perPage, page * perPage + perPage);
  const totalPages = Math.ceil(leads.length / perPage);

  return (
    <div className="pb-10">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-slate-800">Calls to make</h1>
        <p className="text-xs text-slate-500">Ranked by lead intent score — call the highest value leads first</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {slice.map((l) => (
          <div key={l.id} className="border-b border-slate-100 last:border-0">
            <div 
              onClick={() => setExpanded(expanded === l.id ? null : l.id)} 
              className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold grid place-items-center text-xs">
                  {l.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    {l.name}
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium">ICP {l.icp}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{l.phone} · {l.value}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 px-3 py-1.5 rounded-lg transition-colors">
                  <Phone size={14}/> Call
                </button>
                {expanded === l.id ? <ChevronUp size={18} className="text-slate-400"/> : <ChevronDown size={18} className="text-slate-400"/>}
              </div>
            </div>
            
            {/* Expanded Detail */}
            {expanded === l.id && (
              <div className="px-4 pb-4 pt-1 bg-slate-50 border-t border-slate-100 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase">Intent Score</span>
                    <div className="font-medium text-emerald-600">{l.intent}%</div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase">Status</span>
                    <div className="font-medium text-slate-700">{l.status}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Paging Controls */}
      <div className="flex justify-center items-center gap-4 mt-6 text-sm">
        <button 
          disabled={page === 0} 
          onClick={() => setPage(page - 1)} 
          className="p-1 border rounded hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronLeft size={18}/>
        </button>
        <span className="text-slate-500 font-medium">Page {page + 1} of {totalPages}</span>
        <button 
          disabled={page === totalPages - 1} 
          onClick={() => setPage(page + 1)} 
          className="p-1 border rounded hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronRight size={18}/>
        </button>
      </div>
    </div>
  );
}