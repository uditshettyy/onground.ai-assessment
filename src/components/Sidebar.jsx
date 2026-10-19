export default function Sidebar({ page, setPage, open, onClose }) {
  const items = [
    { id: "dashboard", label: "Dashboard" },
    {
      id: "plan",
      label: "Plan",
      children: [
        { id: "calls", label: "Calls to make" },
        { id: "incoming", label: "Incoming" },
        { id: "recent", label: "Recent" },
        { id: "practise", label: "Practise a call" },
      ],
    },
    { id: "calendar", label: "Calendar" },
    { id: "pulse", label: "Pulse" },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-30 h-full w-56 bg-[#0f3b2e] text-white p-4 transform transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-6 h-6 bg-amber-500 rounded text-[#0f3b2e] font-bold grid place-items-center text-sm">
            O
          </div>
          <span className="font-semibold tracking-wide">On-Ground.ai</span>
        </div>

        <nav className="space-y-1 text-sm font-medium">
          {items.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (!item.children) {
                    setPage(item.id);
                    onClose();
                  }
                }}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  page === item.id ? "bg-white/15 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </button>
              
              {item.children && (
                <div className="ml-3 mt-1 space-y-1 border-l border-white/20 pl-2">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => {
                        setPage(child.id);
                        onClose();
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors ${
                        page === child.id ? "bg-white/15 text-white" : "text-slate-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}