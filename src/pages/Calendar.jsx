import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  // Mock data for October 2026 (Oct 1, 2026 is a Thursday)
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const eventDates = [3, 5, 8, 9, 14, 22, 28]; // Days with dots
  
  // Create empty slots for the first few days (Sun-Wed)
  const emptySlots = Array(4).fill(null);
  // Create slots for the actual days (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const allSlots = [...emptySlots, ...days];

  return (
    <div className="pb-10">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Calendar</h1>
          <p className="text-xs text-slate-500">Manage your schedule, view upcoming calls</p>
        </div>
        <button className="text-sm font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 px-4 py-1.5 rounded-lg transition-colors">
          Today
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-4">
        {/* Month Switcher */}
        <div className="flex justify-between items-center mb-4 px-2">
          <h2 className="text-lg font-bold text-slate-800">October 2026</h2>
          <div className="flex gap-2">
            <button className="p-1 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
            <button className="p-1 rounded hover:bg-slate-100 text-slate-500"><ChevronRight size={20}/></button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {/* Headers */}
          {daysOfWeek.map(d => (
            <div key={d} className="text-center text-xs font-bold text-slate-400 py-2">{d}</div>
          ))}
          
          {/* Days */}
          {allSlots.map((day, index) => (
            <div 
              key={index} 
              className={`min-h-[80px] md:min-h-[100px] border border-slate-100 rounded-lg p-2 flex flex-col ${
                day === 9 ? "bg-amber-50/50 border-amber-200" : "bg-white hover:bg-slate-50 transition-colors"
              } ${!day ? "bg-slate-50/50 border-transparent" : ""}`}
            >
              {day && (
                <>
                  <span className={`text-sm font-medium ${day === 9 ? "text-amber-700 font-bold" : "text-slate-700"}`}>
                    {day}
                  </span>
                  {/* Event Dot */}
                  {eventDates.includes(day) && (
                    <div className="mt-auto">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mb-1"></div>
                      <div className="text-[9px] font-bold text-amber-600 bg-amber-100 px-1 rounded truncate">
                        Call
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}