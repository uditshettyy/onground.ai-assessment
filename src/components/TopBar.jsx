import { Menu, Bell, Search, Settings } from "lucide-react";

export default function TopBar({ onMenu }) {
  return (
    <header className="h-14 bg-[#0f3b2e] text-white flex items-center px-4 gap-4 shrink-0">
      <button
        className="md:hidden p-1 hover:bg-white/10 rounded"
        onClick={onMenu}
      >
        <Menu size={20} />
      </button>
      
      <div className="hidden md:flex items-center gap-2 text-sm text-slate-300 ml-2">
        <Search size={16} />
        <span>Search</span>
      </div>

      <div className="ml-auto flex items-center gap-4 text-sm">
        <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
          <span>Aviral Raiput · Call Center</span>
        </div>
        
        <button className="p-1 hover:bg-white/10 rounded"><Bell size={18} /></button>
        <button className="p-1 hover:bg-white/10 rounded"><Settings size={18} /></button>
        
        <div className="w-8 h-8 rounded-full bg-amber-500 text-[#0f3b2e] font-bold grid place-items-center border-2 border-amber-200">
          A
        </div>
      </div>
    </header>
  );
}