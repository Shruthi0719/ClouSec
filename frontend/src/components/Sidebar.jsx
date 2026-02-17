import React from "react";

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "scan", label: "Scan" },
    { id: "findings", label: "Findings" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-xl font-bold text-white mb-8">
        🚀 ClouSec
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeTab === item.id
                ? "bg-slate-700 text-white"
                : "text-gray-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;