import React from 'react'
import { Bell, User, Settings } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 glassmorphism border-b border-purple-accent/20 flex items-center justify-between px-8 z-40">
      {/* Left side - Title */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Security <span className="text-purple-accent">Sentinel</span>
        </h2>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-slate-dark/50 rounded-lg transition-colors duration-200">
          <Bell className="w-5 h-5 text-gray-400 hover:text-white" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-alert rounded-full animate-pulse"></span>
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-slate-dark/50 rounded-lg transition-colors duration-200">
          <Settings className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-dark/50 rounded-lg transition-colors duration-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-accent to-cyan-accent flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm text-gray-300">Admin</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
