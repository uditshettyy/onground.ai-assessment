import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import Dashboard from "./pages/Dashboard";
import CallsToMake from "./pages/CallsToMake";
import Incoming from "./pages/Incoming";
import Recent from "./pages/Recent";
import Calendar from "./pages/Calendar";
import PulseHome from "./pages/PulseHome";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Simple router
  const renderPage = () => {
    switch (page) {
      case "dashboard": return <Dashboard />;
      case "calls": return <CallsToMake />;
      case "incoming": return <Incoming />;
      case "recent": return <Recent />;
      case "calendar": return <Calendar />;
      case "pulse": return <PulseHome />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans">
      <Sidebar 
        page={page} 
        setPage={setPage} 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar onMenu={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-6xl mx-auto h-full">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}