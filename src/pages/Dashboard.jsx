import { useState } from "react";
import { kpis, tasks, calls7d, trend7d } from "../data/mock";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import LeadsModal from "../components/LeadsModal";
import { Clock } from "lucide-react";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [leadIdx, setLeadIdx] = useState(0);

  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {kpis.map(k => (
          <div key={k.label} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="text-xs font-medium text-slate-500 mb-1">{k.label}</div>
            <div className="text-2xl font-bold text-amber-600">{k.value}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Middle Row */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="text-sm font-bold text-slate-700 mb-3">My progress · Today</div>
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 rounded-full border-[6px] border-slate-100 flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border-[6px] border-amber-400" style={{clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 60%)"}}></div>
               <span className="text-sm font-bold text-slate-700">3/5</span>
            </div>
            <div className="text-sm space-y-1">
              <div className="font-medium text-slate-600">3 calls made</div>
              <div className="text-emerald-600 font-medium">2 won</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="text-sm font-bold text-slate-700 mb-1">My earnings this month</div>
          <div className="text-3xl font-bold text-slate-800">₹5,200</div>
          <div className="text-xs font-medium text-emerald-600 mt-1 bg-emerald-50 inline-block px-2 py-0.5 rounded">+12% vs last month</div>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-bold text-slate-700">My tasks</div>
          <button className="text-xs font-semibold text-amber-600">Open planner →</button>
        </div>
        <div className="divide-y divide-slate-100">
          {tasks.map((t, i) => (
            <div key={t.id} onClick={() => { setLeadIdx(i); setModalOpen(true); }}
              className="flex justify-between items-center py-3 cursor-pointer hover:bg-slate-50 transition-colors group">
              <div className="text-sm font-medium text-slate-700 group-hover:text-amber-600 transition-colors">{t.title}</div>
              <div className="flex items-center gap-1 text-[11px] font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                <Clock size={12}/> {t.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="text-sm font-bold text-slate-700 mb-4">Calls handled · last 7 days</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={calls7d}>
              <XAxis dataKey="d" fontSize={11} tickLine={false} axisLine={false}/>
              <YAxis fontSize={11} tickLine={false} axisLine={false} width={30}/>
              <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{fontSize: '12px', borderRadius: '8px'}}/>
              <Bar dataKey="v" fill="#f59e0b" radius={[4,4,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="text-sm font-bold text-slate-700 mb-4">Calls trend · last 7 days</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trend7d}>
              <XAxis dataKey="d" fontSize={11} tickLine={false} axisLine={false}/>
              <YAxis fontSize={11} tickLine={false} axisLine={false} width={30}/>
              <Tooltip contentStyle={{fontSize: '12px', borderRadius: '8px'}}/>
              <Line dataKey="v" stroke="#10b981" strokeWidth={2} dot={{r:3, fill:'#10b981'}} activeDot={{r:5}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && <LeadsModal idx={leadIdx} setIdx={setLeadIdx} onClose={() => setModalOpen(false)} />}
    </div>
  );
}